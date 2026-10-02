const fs = require('node:fs'), path = require('node:path'), zlib = require('node:zlib');
const root = path.resolve(__dirname, '..');
require('esbuild').buildSync({ entryPoints: [path.join(root, 'src/scene-viewer.js')], bundle: true,
  outfile: path.join(root, 'scene3d.js'), format: 'iife', target: ['es2020'], minify: true,
  legalComments: 'linked', sourcemap: false });
for (const id of ['village', 'future', 'future-v2']) {
  const file = path.join(root, `assets/models/${id}.glb`);
  // The repository stores the large village binary losslessly compressed.
  // Reconstruct the local development GLB after a fresh clone before tests.
  if (!fs.existsSync(file) && fs.existsSync(`${file}.gz`)) fs.writeFileSync(file, zlib.gunzipSync(fs.readFileSync(`${file}.gz`)));
  const bytes = fs.readFileSync(file);
  let payload = bytes.toString('base64');
  { 
    const zipped = zlib.gzipSync(bytes, { level: 9, mtime: 0 });
    fs.writeFileSync(`${file}.gz`, zipped);
    payload = { encoding: 'gzip', byteLength: bytes.length, data: zipped.toString('base64') };
  }
  fs.writeFileSync(`${file}.js`, `/* Local GLB wrapper: enables file:// without a server. */\nwindow.MysterySceneData=window.MysterySceneData||{};window.MysterySceneData[${JSON.stringify(id)}]=${JSON.stringify(payload)};\n`);
}
fs.copyFileSync(path.join(root, 'node_modules/three/LICENSE'), path.join(root, 'vendor/THREE-LICENSE.txt'));
console.log('Built pinned Three.js/fflate bundle, gzip models, and three offline wrappers');
