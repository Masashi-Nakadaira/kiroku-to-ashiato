// Presentation-only configuration. Narrative and deduction live in data.js/engine.js.
export const SCENES = Object.freeze({
  'future-v2': {
    asset: 'assets/models/future-v2.glb.js?v=5',
    camera: [11, 12, 15], target: [0, 1, -0.1], span: 11.7,
    background: '#20343c', key: [1, 9, 4], keyColor: '#d2efff',
    fill: [-6, 5, 4], fillColor: '#ffe4c8',
    anchors: ['f1', 'f2', 'f3', 'f4', 'f7', 'f8'],
    documents: ['f5', 'f6'], roof: false,
    viewpoints: [
      { id: 'overview', label: '部屋の全景', camera: [11, 12, 15], target: [0, 1, -0.1], span: 11.7 },
      { id: 'terminal', label: '応答端末', camera: [3.5, 5.8, 8.3], target: [-1.7, 1.45, -0.7], span: 5.9 },
      { id: 'archive', label: '保管トレイ', camera: [9, 6.5, 7.7], target: [2.5, 1.45, -0.6], span: 6.7 },
    ],
    disclaimer: 'この模型は説明用の配置です。空席は所在の証拠ではなく、開いたトレイは発見後の調査状態です。奥のガラス仕切りは通路ではありません。',
  },

  village: {
    asset: 'assets/models/village.glb.js?v=4',
    camera: [21, 20, 27], target: [-0.45, 1.5, 0.5], span: 22.8,
    background: '#303b33', key: [-7, 16, 8], keyColor: '#ffe3ba',
    fill: [4, 13, -6], fillColor: '#bad9e9',
    // These are neutral places. Clues and testimony unlock in the game engine.
    anchors: ['church', 'workshop', 'dye-yard', 'bakery', 'bell-tower', 'square', 'church-storage', 'watermill', 'sluice'],
    documents: [], roof: true, defaultRoof: false, cover: true, defaultCover: false,
    locationViews: { church: 'altar', 'church-storage': 'storage', watermill: 'watermill', sluice: 'sluice' },
    locationActionLabels: { church: '教会へ入る', 'church-storage': '教会の物置へ入る' },
    // The GLB supplies location_id/npc_id anchor nodes. No clue is moved in the UI.
    npcs: [
      { id: 'mira', name: 'ミラ', role: 'パン屋' },
      { id: 'theo', name: 'テオ', role: '木工職人' },
      { id: 'sera', name: 'セラ', role: '染物職人' },
      { id: 'orn', name: 'オルン', role: '教会の管理人' },
      { id: 'neri', name: 'ネリ', role: '粉ひき職人' },
    ],
    openingShots: {
      arrival: { label: '収穫祭の村へ', camera: [21, 20, 27], target: [-0.45, 1.5, 0.5], span: 22.8, roof: false, cover: false },
      church: { label: '小さな教会', camera: [-2.8, 7, 4.8], target: [-2.6, 1.3, -2.45], span: 6.9, roof: true, cover: false },
      friend: { label: '旧友テオ', camera: [8.1, 4.35, 7.95], target: [2.48, 1.35, 0.15], span: 4.25, roof: false, cover: false },
      caretaker: { label: '管理人オルン', camera: [3.54, 4.35, 7.92], target: [-1.48, 1.35, 0.24], span: 4.25, roof: false, cover: false },
    },
    viewpoints: [
      { id: 'overview', label: '村の全景', camera: [21, 20, 27], target: [-0.45, 1.5, 0.5], span: 22.8, roof: false },
      { id: 'altar', label: '教会の祭壇', camera: [-2.8, 7, 2], target: [-3.05, 1.4, -3.35], span: 4.5, roof: true },
      { id: 'storage', label: '教会の物置', camera: [3.2, 6.1, 1.6], target: [-1.64, 1.15, -2.66], span: 3.8, roof: true },
      { id: 'workshop', label: '工房の窓', camera: [7.8, 6, -2.65], target: [0, 1.3, -2.65], span: 7.4, roof: true },
      { id: 'passage', label: '教会の横手', camera: [6.7, 7, 5.8], target: [0, 1, -2.65], span: 8.8, roof: true },
      { id: 'watermill', label: '水車小屋', camera: [-12, 6.5, 11.2], target: [-7.45, 1.1, 5.5], span: 6.8, roof: false },
      { id: 'sluice', label: '取水口の水門', camera: [-5.65, 3.8, -.25], target: [-8.2, 1.43, 4.4], span: 2.5, roof: false },
      { id: 'belfry', label: '鐘楼', camera: [-8.2, 7.2, 4.6], target: [-2.6, 3.35, -3.66], span: 7.2, roof: false },
    ],
    disclaimer: '人物は調査時点の位置です。事件当時の所在は証言と物証で確かめます。視点の切替と屋根の取り外しは観察用で、手がかりの発見にはなりません。',
  },
  future: {
    asset: 'assets/models/future.glb.js?v=5',
    camera: [11, 12, 15], target: [0, 1, -0.1], span: 11.7,
    background: '#20343c', key: [1, 9, 4], keyColor: '#d2efff',
    fill: [-6, 5, 4], fillColor: '#ffe4c8',
    anchors: ['archive', 'terminal', 'cart', 'bench', 'dispatch'],
    documents: [], roof: false,
    locationViews: { archive: 'archive', terminal: 'terminal', cart: 'cart', bench: 'bench', dispatch: 'dispatch' },
    npcs: [
      { id: 'io', name: 'イオ', role: '保存技師' },
      { id: 'nagi', name: 'ナギ', role: '修復員' },
      { id: 'yun', name: 'ユン', role: '展示担当' },
      { id: 'rui', name: 'ルイ', role: '受付係' },
    ],
    openingShots: {
      arrival: { label: '保存室へ', camera: [11, 12, 15], target: [0, 1, -.1], span: 11.7 },
      archive: { label: '保管装置', camera: [7.2, 5.8, 6.8], target: [2.7, 1.3, -.15], span: 5.5 },
      terminal: { label: '技師の机', camera: [-.3, 4.7, 7.4], target: [-2.3, 1.3, -.2], span: 5.0 },
    },
    viewpoints: [
      { id: 'overview', label: '部屋の全景', camera: [11, 12, 15], target: [0, 1, -.1], span: 11.7 },
      { id: 'terminal', label: '技師の机', camera: [-.5, 4.5, 7], target: [-2.3, 1.25, -.5], span: 4.5 },
      { id: 'archive', label: '保管装置', camera: [6.4, 5.2, 5.5], target: [2.58, 1.45, -.3], span: 3.9 },
      { id: 'cart', label: '共用の返却台車', camera: [5.2, 4.8, 6.2], target: [2.53, 1, 2.02], span: 3.1 },
      { id: 'bench', label: '修復作業台', camera: [1, 4.6, 6], target: [-1.45, 1.05, 2.06], span: 3.4 },
      { id: 'reader', label: '札の読取器', camera: [3.9, 3.2, 3.4], target: [.4, 1.31, 1.25], span: 2.5 },
      { id: 'dispatch', label: '搬出待ち', camera: [-.5, 4, 6.3], target: [-3.4, 1.05, 2.1], span: 3.1 },
    ],
    disclaimer: '人物は調査時点の位置です。装置の状態は、行った操作に応じて変わります。視点の切替は観察用です。',
  },
});

export const MIN_ZOOM = 0.72;
export const MAX_ZOOM = 2.6;
export const MIN_POLAR = 0.22;
export const MAX_POLAR = Math.PI * 0.46;
export function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }

// Maintain the composition on narrow displays rather than cropping both sides.
export function frustum(span, aspect) {
  const safeAspect = Math.max(0.1, aspect || 1);
  const height = span * Math.max(1, 1.23 / safeAspect);
  return { left: -height * safeAspect / 2, right: height * safeAspect / 2,
    top: height / 2, bottom: -height / 2 };
}

// Screen-space labels stay readable and tappable, with leader lines to their anchors.
export function layoutMarkers(points, width, height) {
  const edge = 26;
  const out = points.map(p => ({...p,
    x: clamp(p.x, edge, Math.max(edge, width - edge)),
    y: clamp(p.y, edge, Math.max(edge, height - edge)),
  }));
  for (let pass = 0; pass < 12; pass++) {
    for (let i = 0; i < out.length; i++) for (let j = i + 1; j < out.length; j++) {
      const a = out[i], b = out[j], dx = b.x - a.x, dy = b.y - a.y;
      const d = Math.hypot(dx, dy);
      if (d >= 49) continue;
      const ux = d > 0.01 ? dx / d : 0, uy = d > 0.01 ? dy / d : 1;
      const shift = (49 - d) / 2;
      a.x = clamp(a.x - ux * shift, edge, Math.max(edge, width - edge));
      a.y = clamp(a.y - uy * shift, edge, Math.max(edge, height - edge));
      b.x = clamp(b.x + ux * shift, edge, Math.max(edge, width - edge));
      b.y = clamp(b.y + uy * shift, edge, Math.max(edge, height - edge));
    }
  }
  return out;
}

// Nameplates have wider footprints than numbered pins. Keep every named person
// readable on a narrow screen and use a short leader when a label must move.
export function layoutNameplates(points, width, height, pinLabels = []) {
  const halfWidth = Math.min(45, width / 3), gap = 25;
  const out = points.map(point => ({ ...point,
    x: clamp(point.x, halfWidth + 4, Math.max(halfWidth + 4, width - halfWidth - 4)),
    y: clamp(point.y - 8, 26, Math.max(26, height - 8)),
  }));
  for (let pass = 0; pass < 12; pass++) {
    for (let i = 0; i < out.length; i++) {
      const a = out[i];
      for (const pin of pinLabels) {
        if (Math.abs(a.x - pin.x) < halfWidth + 24 && Math.abs(a.y - 10 - pin.y) < 36) {
          a.y = clamp(pin.y - 27, 26, Math.max(26, height - 8));
        }
      }
      for (let j = 0; j < i; j++) {
        const b = out[j];
        if (Math.abs(a.x - b.x) < halfWidth * 2 + 4 && Math.abs(a.y - b.y) < gap) {
          a.y = clamp(b.y - gap, 26, Math.max(26, height - 8));
          if (Math.abs(a.y - b.y) < gap) a.x = clamp(b.x + halfWidth * 2 + 5, halfWidth + 4, Math.max(halfWidth + 4, width - halfWidth - 4));
        }
      }
    }
  }
  return out;
}
