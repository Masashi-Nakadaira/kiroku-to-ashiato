import { applyInvestigationModelState } from './model-state.js';
import { decodeModelPayload } from './model-codec.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { SCENES, MIN_ZOOM, MAX_ZOOM, MIN_POLAR, MAX_POLAR, clamp, frustum, layoutMarkers, layoutNameplates } from './scene-config.js';

const models = new Map(), views = new Map();
let viewer = null, root = null, context = null, failed = '', request = 0, focusKey = '', pendingLocationFocus = null, locationFocusSequence = 0;
const BASE = new URL(document.currentScript?.dataset.assetBase || '.', document.currentScript?.src || location.href);
const make = (tag, cls, text = '') => { const el = document.createElement(tag); el.className = cls; el.textContent = text; return el; };
const now = () => window.performance?.now() || Date.now();
const isCinematic = next => typeof next?.cinematicShot === 'string' && Object.prototype.hasOwnProperty.call(SCENES[next?.caseId]?.openingShots || {}, next.cinematicShot);

function loadModel(id) {
  if (models.has(id)) return models.get(id);
  const promise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = new URL(SCENES[id].asset, BASE).href;
    let ended = false;
    const timer = setTimeout(() => finish(new Error('asset-timeout')), 45000);
    function finish(error, model) {
      if (ended) return; ended = true; clearTimeout(timer); script.remove();
      if (error) { if (window.MysterySceneData) delete window.MysterySceneData[id]; models.delete(id); reject(error); } else resolve(model);
    }
    script.onerror = () => finish(new Error('asset-load'));
    script.onload = async () => {
      if (ended) { if (window.MysterySceneData) delete window.MysterySceneData[id]; return; }
      try {
        const encoded = window.MysterySceneData?.[id];
        const bytes = decodeModelPayload(encoded);
        const gltf = await new GLTFLoader().parseAsync(bytes.buffer, '');
        const model = gltf.scene, anchors = new Map(), npcs = new Map();
        model.updateMatrixWorld(true);
        model.traverse(node => {
          // Village anchors identify places, not undiscovered evidence. Legacy
          // evidence anchors remain supported for the unchanged future model.
          const anchorId = node.userData.location_id || node.userData.evidence_id;
          if (anchorId && SCENES[id].anchors.includes(anchorId)) {
            if (anchors.has(anchorId)) throw new Error('duplicate-anchor');
            anchors.set(anchorId, node);
          }
          if (node.userData.npc_id && !npcs.has(node.userData.npc_id)) npcs.set(node.userData.npc_id, node);
        });
        // Missing optional markers are hidden by update() and draw().
        delete window.MysterySceneData[id];
        finish(null, { model, anchors, npcs });
      } catch (error) { finish(error); }
    };
    document.head.append(script);
  });
  models.set(id, promise);
  return promise;
}

class SceneViewer {
  constructor() {
    this.element = make('div', 'scene3d-stage');
    this.canvas = make('canvas', 'scene3d-canvas');
    this.canvas.tabIndex = 0;
    this.canvas.setAttribute('role', 'img');
    this.canvas.setAttribute('aria-label', '回して調べる立体模型。矢印キーで回転、プラス・マイナスで拡大縮小、0またはダブルタップで全景に戻します。丸い印で場所を選べます。');
    this.canvas.setAttribute('aria-describedby', 'scene-controls-help');
    this.canvas.dataset.focusKey = 'scene-camera';
    this.element.append(this.canvas);
    this.lines = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.lines.classList.add('scene3d-leaders'); this.lines.setAttribute('aria-hidden', 'true');
    this.element.append(this.lines);
    this.overlay = make('div', 'scene3d-markers'); this.element.append(this.overlay);
    this.npcOverlay = make('div', 'scene3d-npcs'); this.npcOverlay.setAttribute('aria-label', '調査時点の人物'); this.element.append(this.npcOverlay);
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: false, powerPreference: 'low-power' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-8, 8, 8, -8, 0.1, 160);
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enablePan = false;
    this.controls.enableDamping = false; // No idle render loop; only a camera transition animates.
    this.controls.rotateSpeed = 0.7; this.controls.zoomSpeed = 0.8;
    this.controls.minZoom = MIN_ZOOM; this.controls.maxZoom = MAX_ZOOM;
    this.controls.minPolarAngle = MIN_POLAR; this.controls.maxPolarAngle = MAX_POLAR;
    this.controls.addEventListener('change', () => this.invalidate());
    this.controls.addEventListener('start', () => { this.transition = null; this.viewpoint = ''; this.updateViewButtons(); });
    this.ambient = new THREE.HemisphereLight(0xe4eef4, 0x77715a, 2.3);
    this.key = new THREE.DirectionalLight(0xffffff, 3.0);
    this.fill = new THREE.DirectionalLight(0xffffff, 1.7);
    this.scene.add(this.ambient, this.key, this.fill);
    const room = new RoomEnvironment(), generator = new THREE.PMREMGenerator(this.renderer);
    this.environment = generator.fromScene(room, 0.06);
    this.scene.environment = this.environment.texture; this.scene.environmentIntensity = 0.65;
    room.dispose(); generator.dispose();
    this.canvas.addEventListener('keydown', event => {
      const actions = { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down', '+': 'in', '=': 'in', '-': 'out', '0': 'reset', Home: 'reset' };
      if (actions[event.key] && !this.cinematicId) { event.preventDefault(); this.control(actions[event.key]); }
    });
    // Keep a pointer-only way back to the overview after a location close-up,
    // without restoring the removed camera toolbar. Drag/pinch are not taps.
    this.canvas.addEventListener('dblclick', event => { if (!this.cinematicId) { event.preventDefault(); this.control('reset'); } });
    let touchStart = null, lastTap = null;
    this.canvas.addEventListener('pointerdown', event => {
      if (event.pointerType !== 'touch') return;
      if (!event.isPrimary) { touchStart = null; lastTap = null; return; }
      touchStart = { id: event.pointerId, x: event.clientX, y: event.clientY, time: now() };
    });
    this.canvas.addEventListener('pointermove', event => {
      if (touchStart?.id === event.pointerId && Math.hypot(event.clientX - touchStart.x, event.clientY - touchStart.y) > 8) { touchStart = null; lastTap = null; }
    });
    this.canvas.addEventListener('pointercancel', () => { touchStart = null; lastTap = null; });
    this.canvas.addEventListener('pointerup', event => {
      if (!touchStart || touchStart.id !== event.pointerId || this.cinematicId) return;
      const tap = { x: event.clientX, y: event.clientY, time: now() }, quick = tap.time - touchStart.time < 250;
      touchStart = null;
      if (quick && lastTap && tap.time - lastTap.time < 350 && Math.hypot(tap.x - lastTap.x, tap.y - lastTap.y) < 24) { event.preventDefault(); this.control('reset'); lastTap = null; }
      else lastTap = quick ? tap : null;
    });
    this.canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); fail('3Dの描画が中断されました。再読み込みを試してください。'); });
    this.reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    this.onMotionChange = () => { if (this.reducedMotion?.matches) this.finishTransition(); };
    this.reducedMotion?.addEventListener?.('change', this.onMotionChange);
    this.resizeObserver = typeof ResizeObserver === 'function' ? new ResizeObserver(() => this.resize()) : null;
    this.resizeObserver?.observe(this.element);
    this.onResize = () => this.resize(); window.addEventListener('resize', this.onResize);
    this.frame = 0; this.active = false; this.buttons = []; this.npcLabels = []; this.cinematicId = ''; this.viewpoint = '';
  }
  snapshot() {
    return { camera: this.camera.position.toArray(), target: this.controls.target.toArray(), zoom: this.camera.zoom, roof: this.roofOpen, cover: this.coverOpen, span: this.currentSpan, viewpoint: this.viewpoint };
  }
  saveView() {
    // Opening/replay shots never replace the player's investigation camera.
    if (this.id && !this.cinematicId) views.set(this.id, this.snapshot());
  }
  setModel(id, loaded) {
    if (this.id === id) return;
    this.saveView(); this.transition = null;
    if (this.model) this.scene.remove(this.model);
    this.id = id; this.model = loaded.model; this.anchors = loaded.anchors; this.npcs = loaded.npcs || new Map();
    this.cinematicId = ''; this.returnView = null; this.coverOpen = false; this.hasCover = false;
    this.model.traverse(node => { if (node.userData.part === 'AltarCover') this.hasCover = true; });
    this.scene.add(this.model);
    applyInvestigationModelState(this.model);
    const config = SCENES[id], saved = views.get(id);
    this.scene.background = new THREE.Color(config.background);
    this.key.color.set(config.keyColor); this.key.position.fromArray(config.key);
    this.fill.color.set(config.fillColor); this.fill.position.fromArray(config.fill);
    this.viewpoint = saved?.viewpoint || '';
    this.applyCamera(saved || config);
    this.overlay.replaceChildren(); this.lines.replaceChildren(); this.npcOverlay.replaceChildren();
    this.buttons = config.anchors.map((anchorId, index) => {
      const el = make('button', 'scene3d-pin'); el.type = 'button';
      el.dataset.evidenceId = anchorId; el.dataset.locationId = anchorId; el.dataset.focusKey = `scene-${anchorId}`;
      const defaultNumber = /^.[0-9]+$/.test(anchorId) ? anchorId.slice(1) : index + 1;
      const number = make('span', 'scene3d-pin-dot'); number.setAttribute('aria-hidden', 'true');
      const label = make('span', 'scene3d-pin-label'); el.append(number, label);
      el.addEventListener('click', () => {
        if (!el.disabled && !el.hidden && !this.cinematicId && context?.caseId === this.id && typeof context.onEvidence === 'function') {
          context.onEvidence(anchorId);
          // Older hosts can use the direct API. The app's explicit mount token
          // takes precedence so a duplicate request cannot snap away its tween.
          const requested = context?.focusLocation;
          if ((typeof requested === 'string' ? requested : requested?.id) !== anchorId) focusLocation(anchorId);
        }
      });
      this.overlay.append(el);
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line'); this.lines.append(line);
      return { id: anchorId, el, label, number, defaultNumber, line, available: false };
    });
    this.npcLabels = (config.npcs || []).map(npc => {
      const el = make('span', 'scene3d-npc', `${npc.name} · 現在`);
      el.dataset.npcId = npc.id; el.title = `${npc.name}（${npc.role}）の調査時点の位置。事件当時の所在を示すものではありません。`;
      this.npcOverlay.append(el);
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line'); line.classList.add('scene3d-npc-leader'); this.lines.append(line);
      return { ...npc, el, line };
    });
  }
  update(next) {
    const config = SCENES[this.id], shotId = isCinematic(next) ? next.cinematicShot : '';
    if (shotId !== this.cinematicId) {
      const previousShot = this.cinematicId;
      if (shotId && !previousShot) { this.returnView = this.snapshot(); this.saveView(); }
      this.cinematicId = shotId;
      if (shotId) this.moveCamera(config.openingShots[shotId], { duration: previousShot ? 1100 : 0 });
      else if (previousShot) { this.applyCamera(this.returnView || views.get(this.id) || config); this.returnView = null; }
    }
    this.controls.enabled = !shotId;
    this.canvas.tabIndex = shotId ? -1 : 0;
    this.canvas.setAttribute('aria-label', shotId ? `導入シーン：${config.openingShots[shotId].label}` : '回して調べる立体模型。矢印キーで回転、プラス・マイナスで拡大縮小、0またはダブルタップで全景に戻します。丸い印で場所を選べます。');
    this.element.classList.toggle('is-cinematic', Boolean(shotId));
    this.overlay.hidden = Boolean(shotId); this.lines.style.display = shotId ? 'none' : '';
    this.npcOverlay.hidden = Boolean(shotId);
    const evidence = Array.isArray(next.evidence) ? next.evidence : [], seen = Array.isArray(next.seen) ? next.seen : [];
    for (const item of this.buttons) {
      const descriptor = evidence.find(e => e.id === item.id);
      item.available = Boolean(descriptor && this.anchors?.has(item.id));
      item.el.hidden = !item.available || Boolean(shotId);
      item.el.disabled = !item.available || Boolean(shotId);
      item.line.style.display = item.el.hidden ? 'none' : '';
      item.label.textContent = config.locationActionLabels?.[item.id] || descriptor?.title || '';
      item.number.textContent = '';
      const visited = seen.includes(item.id), selected = next.selected === item.id;
      item.el.setAttribute('aria-label', `${config.locationActionLabels?.[item.id] || descriptor?.title || '場所'}${visited ? ' 調査済み' : ''}`);
      item.el.setAttribute('aria-pressed', String(selected));
      item.el.classList.toggle('is-seen', visited); item.el.classList.toggle('is-selected', selected);
    }
    applyInvestigationModelState(this.model, next.investigationState || {});
    this.updateRoofButton(); this.updateCoverButton(); this.updateViewButtons(); this.resize();
    this.focusLocationRequest(next.focusLocation);
  }
  focusLocationRequest(requested) {
    if (!requested || this.cinematicId || !this.active) return false;
    const focus = typeof requested === 'string' ? { id: requested, token: requested } : requested;
    if (!focus.id || (typeof focus.token !== 'string' && typeof focus.token !== 'number')) return false;
    const config = SCENES[this.id], presetId = config.locationViews?.[focus.id];
    const preset = config.viewpoints?.find(view => view.id === presetId);
    if (!preset) return false;
    this.locationFocusTokens = this.locationFocusTokens || new Map();
    if (this.locationFocusTokens.get(this.id) === focus.token) return false;
    this.locationFocusTokens.set(this.id, focus.token);
    this.finishTransition(); this.viewpoint = preset.id;
    this.moveCamera(preset, { duration: 900 });
    this.updateRoofButton(); this.updateCoverButton(); this.updateViewButtons();
    return true;
  }
  applyCamera(preset) {
    this.transition = null;
    this.camera.position.fromArray(preset.camera || SCENES[this.id].camera);
    this.controls.target.fromArray(preset.target || SCENES[this.id].target);
    this.camera.zoom = clamp(preset.zoom || 1, MIN_ZOOM, MAX_ZOOM);
    this.currentSpan = preset.span || SCENES[this.id].span;
    this.roofOpen = preset === SCENES[this.id] ? preset.defaultRoof === true : preset.roof === true; this.applyRoof();
    if (preset === SCENES[this.id]) this.coverOpen = preset.defaultCover === true;
    else if (typeof preset.cover === 'boolean') this.coverOpen = preset.cover;
    this.applyCover();
    this.updateFrustum(); this.controls.update(); this.invalidate();
  }
  moveCamera(preset, { duration = 600 } = {}) {
    if (!duration || this.reducedMotion?.matches || !this.width) { this.applyCamera(preset); return; }
    this.transition = { from: this.snapshot(), to: { ...preset, zoom: preset.zoom || 1, span: preset.span || SCENES[this.id].span }, started: now(), duration };
    this.roofOpen = preset.roof === true; this.applyRoof();
    if (typeof preset.cover === 'boolean') this.coverOpen = preset.cover;
    this.applyCover(); this.updateRoofButton(); this.updateCoverButton(); this.invalidate();
  }
  finishTransition() {
    if (!this.transition) return;
    const to = this.transition.to; this.applyCamera(to); this.saveView();
  }
  advanceTransition(time) {
    if (!this.transition) return;
    const { from, to, started, duration } = this.transition;
    const t = clamp((time - started) / duration, 0, 1), eased = t * t * (3 - 2 * t);
    this.camera.position.lerpVectors(new THREE.Vector3().fromArray(from.camera), new THREE.Vector3().fromArray(to.camera), eased);
    this.controls.target.lerpVectors(new THREE.Vector3().fromArray(from.target), new THREE.Vector3().fromArray(to.target), eased);
    this.camera.zoom = THREE.MathUtils.lerp(from.zoom, to.zoom, eased);
    this.currentSpan = THREE.MathUtils.lerp(from.span, to.span, eased);
    if (t === 1) this.transition = null;
    this.updateFrustum(); this.controls.update();
    if (t === 1) this.saveView();
  }
  updateRoofButton() {
    const button = root?.querySelector('[data-view-control="roof"]');
    if (button) { button.setAttribute('aria-pressed', String(this.roofOpen)); button.textContent = this.roofOpen ? '屋根を戻す' : '屋根を外して見る'; }
  }
  updateCoverButton() {
    const button = root?.querySelector('[data-view-control="cover"]');
    if (button) {
      button.setAttribute('aria-pressed', String(Boolean(this.coverOpen)));
      button.textContent = this.coverOpen ? '模型の白布を戻す' : '模型の白布をめくる';
      button.disabled = !this.hasCover || Boolean(this.cinematicId) || !this.active;
    }
  }
  updateViewButtons() {
    root?.querySelectorAll('[data-view-control^="view:"]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.viewControl === `view:${this.viewpoint}`)));
  }
  applyRoof() {
    this.model?.traverse(node => { if (node.userData.part === 'RemovableRoof') node.visible = !this.roofOpen; });
  }
  applyCover() {
    // Only the cloth moves. The support frame and empty chalice recess remain
    // byte-identical, making the effect of the supported cover observable.
    this.model?.traverse(node => { if (node.userData.part === 'AltarCover') node.visible = !this.coverOpen; });
  }
  control(action) {
    if (!this.id || !this.active || this.cinematicId) return;
    this.finishTransition();
    const config = SCENES[this.id];
    if (action.startsWith('view:')) {
      const preset = config.viewpoints?.find(view => view.id === action.slice(5));
      if (!preset) return;
      this.viewpoint = preset.id; this.moveCamera(preset); this.updateViewButtons(); this.updateRoofButton(); this.updateCoverButton(); return;
    }
    this.viewpoint = ''; this.updateViewButtons();
    if (action === 'reset') this.applyCamera(config);
    else if (action === 'in' || action === 'out') this.camera.zoom = clamp(this.camera.zoom * (action === 'in' ? 1.2 : 1 / 1.2), MIN_ZOOM, MAX_ZOOM);
    else if (action === 'roof') { this.roofOpen = !this.roofOpen; this.applyRoof(); }
    else if (action === 'cover' && config.cover && this.hasCover) {
      this.coverOpen = !this.coverOpen; this.applyCover();
      const altar = config.viewpoints?.find(view => view.id === 'altar');
      if (altar) { this.viewpoint = altar.id; this.moveCamera({ ...altar, cover: this.coverOpen }); this.updateViewButtons(); }
      else { this.roofOpen = true; this.applyRoof(); }
    }
    else if (['left', 'right', 'up', 'down'].includes(action)) {
      const spherical = new THREE.Spherical().setFromVector3(this.camera.position.clone().sub(this.controls.target));
      if (action === 'left') spherical.theta -= Math.PI / 12;
      if (action === 'right') spherical.theta += Math.PI / 12;
      if (action === 'up') spherical.phi -= Math.PI / 20;
      if (action === 'down') spherical.phi += Math.PI / 20;
      spherical.phi = clamp(spherical.phi, MIN_POLAR, MAX_POLAR);
      this.camera.position.copy(new THREE.Vector3().setFromSpherical(spherical).add(this.controls.target));
    } else return;
    this.updateRoofButton(); this.updateCoverButton(); this.camera.updateProjectionMatrix(); this.controls.update(); this.saveView(); this.invalidate();
  }
  updateFrustum() {
    if (this.width && this.height) Object.assign(this.camera, frustum(this.currentSpan || SCENES[this.id].span, this.width / this.height));
    this.camera.updateProjectionMatrix();
  }
  resize() {
    if (!this.active || !this.element.isConnected || !this.id) return;
    const width = this.element.clientWidth, height = this.element.clientHeight;
    if (!width || !height) return;
    this.width = width; this.height = height;
    this.updateFrustum(); this.renderer.setSize(width, height, false);
    this.lines.setAttribute('viewBox', `0 0 ${width} ${height}`); this.invalidate();
  }
  invalidate() {
    if (!this.active || this.frame || document.hidden) return;
    this.frame = requestAnimationFrame(time => { this.frame = 0; this.draw(time); });
  }
  draw(time = now()) {
    if (!this.active || !this.element.isConnected || !this.width || !this.model) return;
    try {
      this.advanceTransition(time);
      this.camera.updateMatrixWorld(); this.renderer.render(this.scene, this.camera);
      const visibleItems = [], points = [];
      for (const item of this.buttons) {
        const node = this.anchors?.get(item.id);
        // Check again at draw time: stale descriptors or partial GLBs must never
        // dereference an absent anchor, or display a stale pin at the origin.
        if (!node || item.available === false || this.cinematicId) { item.el.hidden = true; item.line.style.display = 'none'; continue; }
        const override = SCENES[this.id].anchorPositions?.[item.id];
        const position = (override ? new THREE.Vector3().fromArray(override) : node.getWorldPosition(new THREE.Vector3())).project(this.camera);
        if (![position.x, position.y, position.z].every(Number.isFinite) || position.z < -1 || position.z > 1 || Math.abs(position.x) > 1.08 || Math.abs(position.y) > 1.08) { item.el.hidden = true; item.line.style.display = 'none'; continue; }
        visibleItems.push(item); points.push({ id: item.id, x: (position.x + 1) * this.width / 2, y: (1 - position.y) * this.height / 2 });
      }
      const labels = layoutMarkers(points, this.width, this.height);
      visibleItems.forEach((item, i) => {
        const anchor = points[i], label = labels[i];
        item.el.style.left = `${label.x}px`; item.el.style.top = `${label.y}px`; item.el.hidden = false; item.line.style.display = '';
        item.line.setAttribute('x1', anchor.x); item.line.setAttribute('y1', anchor.y);
        item.line.setAttribute('x2', label.x); item.line.setAttribute('y2', label.y);
      });
      const visibleNpcs = [], npcPoints = [];
      for (const npc of this.npcLabels || []) {
        const node = this.npcs?.get(npc.id);
        if (!node || this.cinematicId) { npc.el.hidden = true; if (npc.line) npc.line.style.display = 'none'; continue; }
        const position = node.getWorldPosition(new THREE.Vector3());
        if (npc.offset) position.add(new THREE.Vector3().fromArray(npc.offset));
        position.project(this.camera);
        npc.el.hidden = ![position.x, position.y, position.z].every(Number.isFinite) || Math.abs(position.x) > .98 || Math.abs(position.y) > .98 || Math.abs(position.z) > 1;
        if (npc.el.hidden) { if (npc.line) npc.line.style.display = 'none'; continue; }
        visibleNpcs.push(npc); npcPoints.push({ id: npc.id, x: (position.x + 1) * this.width / 2, y: (1 - position.y) * this.height / 2 });
      }
      const nameplates = layoutNameplates(npcPoints, this.width, this.height, labels);
      visibleNpcs.forEach((npc, i) => {
        const point = npcPoints[i], label = nameplates[i];
        npc.el.style.left = `${label.x}px`; npc.el.style.top = `${label.y}px`;
        if (npc.line) {
          npc.line.style.display = ''; npc.line.setAttribute('x1', point.x); npc.line.setAttribute('y1', point.y);
          npc.line.setAttribute('x2', label.x); npc.line.setAttribute('y2', label.y - 2);
        }
      });
      if (this.transition) this.invalidate();
    } catch (_) { fail('3Dを描画できませんでした。再読み込みを試してください。'); }
  }
  pause() {
    this.active = false; cancelAnimationFrame(this.frame); this.frame = 0;
    this.finishTransition(); this.saveView(); this.element.remove();
  }
  dispose() {
    this.pause(); this.resizeObserver?.disconnect(); window.removeEventListener('resize', this.onResize);
    this.reducedMotion?.removeEventListener?.('change', this.onMotionChange);
    this.controls.dispose(); this.environment.dispose(); this.renderer.dispose();
  }
}

function status(state, message) {
  if (!root) return;
  root.dataset.viewState = state;
  const target = root.querySelector('.scene3d-status'); if (target) target.textContent = message;
  root.querySelectorAll('[data-view-control]').forEach(el => el.disabled = state !== 'ready' || isCinematic(context));
  const retry = root.querySelector('[data-view-retry]'); if (retry) retry.hidden = state !== 'error';
  root.querySelector('[data-scene-mount]')?.setAttribute('aria-busy', String(state === 'loading'));
}
function fail(message) { failed = message; viewer?.pause(); status('error', message); }

function beforeRender() {
  focusKey = root?.contains(document.activeElement) ? document.activeElement.dataset.focusKey || '' : '';
  request++; viewer?.pause(); root = null; context = null;
}
async function mount(element, next) {
  root = element; context = next;
  if (!root || !SCENES[next?.caseId]) return;
  root.dataset.cinematic = String(isCinematic(next));
  if (pendingLocationFocus && pendingLocationFocus.caseId !== next.caseId) pendingLocationFocus = null;
  if (failed) { status('error', failed); return; }
  const ticket = ++request;
  status('loading', isCinematic(next) ? '導入の立体シーンを準備中… 字幕はそのまま読めます' : '立体模型を準備中…');
  try {
    if (typeof WebGL2RenderingContext === 'undefined') throw new Error('webgl-unavailable');
    if (!viewer) viewer = new SceneViewer();
    const loaded = await loadModel(next.caseId);
    if (ticket !== request || root !== element) return;
    viewer.setModel(next.caseId, loaded);
    const mountPoint = element.querySelector('[data-scene-mount]');
    if (!mountPoint) return;
    mountPoint.append(viewer.element);
    viewer.active = true;
    status('ready', isCinematic(next) ? '導入シーン · 字幕を読み、次へ進んでください' : 'ドラッグで回転 · ホイール／2本指で拡大 · 模型上の丸い印を選んで調べる');
    viewer.update(next);
    if (pendingLocationFocus?.caseId === next.caseId && !isCinematic(next)) {
      const requested = typeof next.focusLocation === 'string' ? next.focusLocation : next.focusLocation?.id;
      if (requested !== pendingLocationFocus.id) viewer.focusLocationRequest(pendingLocationFocus);
      pendingLocationFocus = null;
    }
    if (focusKey && !isCinematic(next)) {
      const target = [...element.querySelectorAll('[data-focus-key]')].find(el => el.dataset.focusKey === focusKey);
      if (target && !target.disabled && !target.hidden) target.focus({ preventScroll: true });
      focusKey = '';
    }
  } catch (_) {
    if (ticket !== request) return;
    fail('3Dを表示できません。このブラウザーではWebGLが利用できないか、模型の読み込みに失敗しました。再読み込みするか、3D対応のブラウザーで開いてください。');
  }
}

// Called after an explicit app location/entry action. It is safe while the GLB
// is loading, and does not change evidence state or repeat on ordinary renders.
function focusLocation(id) {
  const caseId = context?.caseId;
  if (!root || isCinematic(context) || !SCENES[caseId]?.locationViews?.[id]) return false;
  const focus = { id, caseId, token: `entry:${++locationFocusSequence}` };
  if (root.dataset.viewState === 'ready' && viewer?.active && viewer.id === caseId) return viewer.focusLocationRequest(focus);
  pendingLocationFocus = focus;
  return true;
}

document.addEventListener('click', event => {
  const button = event.target.closest('[data-view-retry]');
  if (!button || button.disabled || !root || !context || !root.contains(button)) return;
  const element = root, next = context;
  request++; viewer?.pause();
  failed = ''; viewer?.dispose(); viewer = null;
  mount(element, next);
});
document.addEventListener('visibilitychange', () => { if (!document.hidden) viewer?.invalidate(); });
window.addEventListener('pagehide', () => viewer?.pause());
window.addEventListener('pageshow', () => { if (root && context) mount(root, context); });

window.MysteryScene = { beforeRender, mount, focusLocation, config: SCENES };
