// Presentation-only configuration. Narrative and deduction live in data.js/engine.js.
export const SCENES = Object.freeze({
  village: {
    asset: 'assets/models/village.glb.js',
    camera: [17, 18, 23], target: [0, 2.1, 0], span: 15.1,
    background: '#28342f', key: [-7, 16, 8], keyColor: '#ffe3ba',
    fill: [4, 13, -6], fillColor: '#bad9e9',
    anchors: ['v1', 'v2', 'v3', 'v5', 'v6', 'v8'],
    documents: ['v4', 'v7'], roof: true,
    // UI anchors only: original GLB mesh, materials and extras remain byte-identical.
    anchorPositions: { v3: [0.35, 1.84, 2.78], v8: [3.60, 1.40, -2.30] },
    disclaimer: '鐘と呼び声の順序は証言から確かめます。横戸へは染場の外側を回ります。屋根を外す操作は観察用です。',
  },
  future: {
    asset: 'assets/models/future.glb.js',
    camera: [11, 12, 15], target: [0, 1, -0.1], span: 11.7,
    background: '#20343c', key: [1, 9, 4], keyColor: '#d2efff',
    fill: [-6, 5, 4], fillColor: '#ffe4c8',
    anchors: ['f1', 'f2', 'f3', 'f4', 'f7', 'f8'],
    documents: ['f5', 'f6'], roof: false,
    disclaimer: 'この模型は説明用の配置です。空席は所在の証拠ではなく、開いたトレイは発見後の調査状態です。奥のガラス仕切りは通路ではありません。',
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
