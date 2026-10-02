import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { SCENES, MIN_ZOOM, MAX_ZOOM, MIN_POLAR, MAX_POLAR, clamp, frustum, layoutMarkers } from './scene-config.js';

const models = new Map(), views = new Map();
let viewer = null, root = null, context = null, mode = '3d', failed = '', request = 0, focusKey = '';
const BASE = new URL('.', document.currentScript?.src || location.href);
const make = (tag, cls, text = '') => { const el = document.createElement(tag); el.className = cls; el.textContent = text; return el; };

function loadModel(id) {
  if (models.has(id)) return models.get(id);
  const promise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = new URL(SCENES[id].asset, BASE).href;
    let ended = false;
    const timer = setTimeout(() => finish(new Error('asset-timeout')), 45000);
    function finish(error, model) {
      if (ended) return; ended = true; clearTimeout(timer); script.remove();
      if (error) { models.delete(id); reject(error); } else resolve(model);
    }
    script.onerror = () => finish(new Error('asset-load'));
    script.onload = async () => {
      try {
        const encoded = window.MysterySceneData?.[id];
        if (typeof encoded !== 'string') throw new Error('asset-data');
        const binary = atob(encoded), bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        const gltf = await new GLTFLoader().parseAsync(bytes.buffer, '');
        const model = gltf.scene, anchors = new Map();
        model.updateMatrixWorld(true);
        model.traverse(node => {
          const evidenceId = node.userData.evidence_id;
          if (evidenceId && SCENES[id].anchors.includes(evidenceId)) {
            if (anchors.has(evidenceId)) throw new Error('duplicate-anchor');
            anchors.set(evidenceId, node);
          }
        });
        if (SCENES[id].anchors.some(key => !anchors.has(key))) throw new Error('missing-anchor');
        delete window.MysterySceneData[id];
        finish(null, { model, anchors });
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
    this.canvas.setAttribute('aria-label', '回して調べる立体模型。矢印キーで回転、プラス・マイナスで拡大縮小、0で視点を戻します。証拠は番号ボタンか証拠目録から開けます。');
    this.canvas.setAttribute('aria-describedby', 'scene-controls-help');
    this.canvas.dataset.focusKey = 'scene-camera';
    this.element.append(this.canvas);
    this.lines = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.lines.classList.add('scene3d-leaders'); this.lines.setAttribute('aria-hidden', 'true');
    this.element.append(this.lines);
    this.overlay = make('div', 'scene3d-markers'); this.element.append(this.overlay);
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: false, powerPreference: 'low-power' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-8, 8, 8, -8, 0.1, 160);
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enablePan = false;
    this.controls.enableDamping = false; // Draw only after interaction; no idle animation loop.
    this.controls.rotateSpeed = 0.7;
    this.controls.zoomSpeed = 0.8;
    this.controls.minZoom = MIN_ZOOM; this.controls.maxZoom = MAX_ZOOM;
    this.controls.minPolarAngle = MIN_POLAR; this.controls.maxPolarAngle = MAX_POLAR;
    this.controls.addEventListener('change', () => this.invalidate());
    this.ambient = new THREE.HemisphereLight(0xe4eef4, 0x77715a, 2.3);
    this.key = new THREE.DirectionalLight(0xffffff, 3.0);
    this.fill = new THREE.DirectionalLight(0xffffff, 1.7);
    this.scene.add(this.ambient, this.key, this.fill);
    const room = new RoomEnvironment();
    const generator = new THREE.PMREMGenerator(this.renderer);
    this.environment = generator.fromScene(room, 0.06);
    this.scene.environment = this.environment.texture;
    this.scene.environmentIntensity = 0.65;
    room.dispose(); generator.dispose();
    this.canvas.addEventListener('keydown', event => {
      const actions = { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down', '+': 'in', '=': 'in', '-': 'out', '0': 'reset', Home: 'reset' };
      if (actions[event.key]) { event.preventDefault(); this.control(actions[event.key]); }
    });
    this.canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); fail('3Dの描画が中断されました。見取り図で調査を続けられます。'); });
    this.resizeObserver = typeof ResizeObserver === 'function' ? new ResizeObserver(() => this.resize()) : null;
    this.resizeObserver?.observe(this.element);
    this.onResize = () => this.resize(); window.addEventListener('resize', this.onResize);
    this.frame = 0; this.active = false; this.buttons = [];
  }
  saveView() {
    if (this.id) views.set(this.id, { position: this.camera.position.toArray(), target: this.controls.target.toArray(), zoom: this.camera.zoom, roof: this.roofOpen });
  }
  setModel(id, loaded) {
    if (this.id === id) return;
    this.saveView();
    if (this.model) this.scene.remove(this.model);
    this.id = id; this.model = loaded.model; this.anchors = loaded.anchors;
    this.scene.add(this.model);
    const config = SCENES[id], saved = views.get(id);
    this.scene.background = new THREE.Color(config.background);
    this.key.color.set(config.keyColor); this.key.position.fromArray(config.key);
    this.fill.color.set(config.fillColor); this.fill.position.fromArray(config.fill);
    this.camera.position.fromArray(saved?.position || config.camera);
    this.controls.target.fromArray(saved?.target || config.target);
    this.camera.zoom = saved?.zoom || 1;
    this.roofOpen = saved?.roof || false;
    this.applyRoof();
    this.controls.update();
    this.overlay.replaceChildren(); this.lines.replaceChildren();
    this.buttons = config.anchors.map(evidenceId => {
      const el = make('button', 'scene3d-pin'); el.type = 'button';
      el.dataset.evidenceId = evidenceId; el.dataset.focusKey = `scene-${evidenceId}`;
      const number = make('span', 'scene3d-pin-number', evidenceId.slice(1).padStart(2, '0'));
      const label = make('span', 'scene3d-pin-label');
      el.append(number, label);
      el.addEventListener('click', () => {
        if (context?.caseId === this.id) context.onEvidence(evidenceId);
      });
      this.overlay.append(el);
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      this.lines.append(line);
      return { id: evidenceId, el, label, line };
    });
  }
  update(next) {
    for (const item of this.buttons) {
      const evidence = next.evidence.find(e => e.id === item.id);
      item.label.textContent = evidence.title;
      const seen = next.seen.includes(item.id), selected = next.selected === item.id;
      item.el.setAttribute('aria-label', `証拠${item.id.slice(1)} ${evidence.title}${seen ? ' 確認済み' : ''}`);
      item.el.setAttribute('aria-pressed', String(selected));
      item.el.classList.toggle('is-seen', seen); item.el.classList.toggle('is-selected', selected);
    }
    this.updateRoofButton(); this.resize();
  }
  updateRoofButton() {
    const button = root?.querySelector('[data-view-control="roof"]');
    if (button) { button.setAttribute('aria-pressed', String(this.roofOpen)); button.textContent = this.roofOpen ? '屋根を戻す' : '屋根を外して見る'; }
  }
  applyRoof() {
    this.model?.traverse(node => { if (node.userData.part === 'RemovableRoof') node.visible = !this.roofOpen; });
  }
  control(action) {
    if (!this.id || !this.active) return;
    if (action === 'reset') {
      this.camera.position.fromArray(SCENES[this.id].camera); this.controls.target.fromArray(SCENES[this.id].target); this.camera.zoom = 1;
    } else if (action === 'in' || action === 'out') {
      this.camera.zoom = clamp(this.camera.zoom * (action === 'in' ? 1.2 : 1 / 1.2), MIN_ZOOM, MAX_ZOOM);
    } else if (action === 'roof') {
      this.roofOpen = !this.roofOpen; this.applyRoof(); this.updateRoofButton();
    } else {
      const spherical = new THREE.Spherical().setFromVector3(this.camera.position.clone().sub(this.controls.target));
      if (action === 'left') spherical.theta -= Math.PI / 12;
      if (action === 'right') spherical.theta += Math.PI / 12;
      if (action === 'up') spherical.phi -= Math.PI / 20;
      if (action === 'down') spherical.phi += Math.PI / 20;
      spherical.phi = clamp(spherical.phi, MIN_POLAR, MAX_POLAR);
      this.camera.position.copy(new THREE.Vector3().setFromSpherical(spherical).add(this.controls.target));
    }
    this.camera.updateProjectionMatrix(); this.controls.update(); this.saveView(); this.invalidate();
  }
  resize() {
    if (!this.active || !this.element.isConnected || !this.id) return;
    const width = this.element.clientWidth, height = this.element.clientHeight;
    if (!width || !height) return;
    Object.assign(this.camera, frustum(SCENES[this.id].span, width / height));
    this.camera.updateProjectionMatrix(); this.renderer.setSize(width, height, false);
    this.width = width; this.height = height;
    this.lines.setAttribute('viewBox', `0 0 ${width} ${height}`);
    this.invalidate();
  }
  invalidate() {
    if (!this.active || this.frame || document.hidden) return;
    this.frame = requestAnimationFrame(() => { this.frame = 0; this.draw(); });
  }
  draw() {
    if (!this.active || !this.element.isConnected || !this.width || !this.model) return;
    try {
      this.camera.updateMatrixWorld(); this.renderer.render(this.scene, this.camera);
      const points = this.buttons.map(item => {
        const override = SCENES[this.id].anchorPositions?.[item.id];
        const position = (override ? new THREE.Vector3().fromArray(override) : this.anchors.get(item.id).getWorldPosition(new THREE.Vector3())).project(this.camera);
        return { id: item.id, x: (position.x + 1) * this.width / 2, y: (1 - position.y) * this.height / 2, z: position.z };
      });
      const labels = layoutMarkers(points, this.width, this.height);
      this.buttons.forEach((item, i) => {
        const anchor = points[i], label = labels[i];
        item.el.style.left = `${label.x}px`; item.el.style.top = `${label.y}px`;
        item.el.hidden = anchor.z < -1 || anchor.z > 1;
        item.line.setAttribute('x1', anchor.x); item.line.setAttribute('y1', anchor.y);
        item.line.setAttribute('x2', label.x); item.line.setAttribute('y2', label.y);
      });
    } catch (_) { fail('3Dを描画できませんでした。見取り図で調査を続けられます。'); }
  }
  pause() { this.saveView(); this.active = false; cancelAnimationFrame(this.frame); this.frame = 0; this.element.remove(); }
  dispose() { this.pause(); this.resizeObserver?.disconnect(); window.removeEventListener('resize', this.onResize); this.controls.dispose(); this.environment.dispose(); this.renderer.dispose(); }
}

function status(state, message) {
  if (!root) return;
  root.dataset.viewState = state;
  const target = root.querySelector('.scene3d-status'); if (target) target.textContent = message;
  root.querySelectorAll('[data-view-mode]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.viewMode === mode)));
  root.querySelectorAll('[data-view-control]').forEach(el => el.disabled = state !== 'ready');
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
  if (!root || !SCENES[next.caseId]) return;
  if (mode === '2d') { status('map', '見取り図で調査中。証拠と進行は3Dと共通です。'); return; }
  if (failed) { status('error', failed); return; }
  const ticket = ++request;
  status('loading', '立体模型を準備中… 待っている間も証拠を読めます');
  try {
    if (typeof WebGL2RenderingContext === 'undefined') throw new Error('webgl-unavailable');
    if (!viewer) viewer = new SceneViewer();
    const loaded = await loadModel(next.caseId);
    if (ticket !== request || root !== element || mode !== '3d') return;
    viewer.setModel(next.caseId, loaded);
    element.querySelector('[data-scene-mount]').append(viewer.element);
    viewer.active = true; status('ready', 'ドラッグで回転 · ホイール／2本指で拡大 · 番号を押して証拠を読む');
    viewer.update(next);
    if (focusKey) {
      const target = [...element.querySelectorAll('[data-focus-key]')].find(el => el.dataset.focusKey === focusKey);
      target?.focus({ preventScroll: true }); focusKey = '';
    }
  } catch (_) {
    if (ticket !== request) return;
    fail('3Dを表示できませんでした。見取り図と証拠目録で、そのまま最後まで遊べます。');
  }
}

document.addEventListener('click', event => {
  const button = event.target.closest('[data-view-mode],[data-view-control],[data-view-retry]');
  if (!button || button.disabled || !root || !context) return;
  if (button.dataset.viewControl) { viewer?.control(button.dataset.viewControl); return; }
  const element = root, next = context;
  request++; viewer?.pause();
  if (button.hasAttribute('data-view-retry')) { failed = ''; viewer?.dispose(); viewer = null; mode = '3d'; }
  else mode = button.dataset.viewMode;
  mount(element, next);
});
document.addEventListener('visibilitychange', () => { if (!document.hidden) viewer?.invalidate(); });
window.addEventListener('pagehide', () => viewer?.pause());
window.addEventListener('pageshow', () => { if (root && context) mount(root, context); });

window.MysteryScene = { beforeRender, mount, config: SCENES };
