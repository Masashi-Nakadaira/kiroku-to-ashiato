// Lossless model transport. fflate 0.8.2 is already vendored with pinned Three.js.
import { gunzipSync } from 'three/addons/libs/fflate.module.js';
const MAX_MODEL_BYTES = 64 * 1024 * 1024;
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; crcTable[n] = c >>> 0; }
function crc32(bytes) { let crc = 0xffffffff; for (const b of bytes) crc = crcTable[(crc ^ b) & 255] ^ (crc >>> 8); return (crc ^ 0xffffffff) >>> 0; }
function u32(bytes, offset) { return (bytes[offset] | bytes[offset + 1] << 8 | bytes[offset + 2] << 16 | bytes[offset + 3] << 24) >>> 0; }
function fromBase64(value) { if (typeof value !== 'string') throw new Error('asset-data'); const binary = atob(value); const bytes = new Uint8Array(binary.length); for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i); return bytes; }
export function decodeModelPayload(payload) {
  let bytes;
  if (typeof payload === 'string') bytes = fromBase64(payload); // unchanged future v2 wrapper
  else {
    if (!payload || payload.encoding !== 'gzip' || !Number.isInteger(payload.byteLength) || payload.byteLength < 20 || payload.byteLength > MAX_MODEL_BYTES) throw new Error('asset-encoding');
    const zipped = fromBase64(payload.data);
    if (zipped.length < 18 || u32(zipped, zipped.length - 4) !== payload.byteLength) throw new Error('asset-size');
    bytes = gunzipSync(zipped, { out: new Uint8Array(payload.byteLength) });
    if (bytes.length !== payload.byteLength || crc32(bytes) !== u32(zipped, zipped.length - 8)) throw new Error('asset-integrity');
  }
  if (bytes.length > MAX_MODEL_BYTES || bytes.length < 20 || u32(bytes, 0) !== 0x46546c67 || u32(bytes, 4) !== 2 || u32(bytes, 8) !== bytes.length) throw new Error('asset-glb');
  return bytes;
}
