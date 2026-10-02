const fs = require('node:fs'), path = require('node:path');
const root = path.resolve(__dirname, '..');
require('esbuild').buildSync({ entryPoints: [path.join(root, 'src/scene-viewer.js')], bundle: true,
  outfile: path.join(root, 'scene3d.js'), format: 'iife', target: ['es2020'], minify: true,
  legalComments: 'linked', sourcemap: false });
for (const id of ['village', 'future']) {
  const file = path.join(root, `assets/models/${id}.glb`), bytes = fs.readFileSync(file);
  fs.writeFileSync(`${file}.js`, `/* Local GLB wrapper: enables file:// without a server. */\nwindow.MysterySceneData=window.MysterySceneData||{};window.MysterySceneData.${id}="${bytes.toString('base64')}";\n`);
}
fs.copyFileSync(path.join(root, 'node_modules/three/LICENSE'), path.join(root, 'vendor/THREE-LICENSE.txt'));
console.log('Built pinned Three.js bundle and both offline GLB wrappers');
