import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const bytes=await readFile(new URL('../public/models/tabby.glb',import.meta.url));
const jsonLength=bytes.readUInt32LE(12);const json=JSON.parse(bytes.subarray(20,20+jsonLength).toString());
const binStart=20+jsonLength+8;
test('GLB container and embedded texture PNG headers are valid',()=>{
  assert.equal(bytes.toString('ascii',0,4),'glTF');assert.equal(bytes.readUInt32LE(4),2);assert.equal(bytes.readUInt32LE(8),bytes.length);
  assert.ok(json.images.length>=1);
  for(const image of json.images){assert.equal(image.mimeType,'image/png');const view=json.bufferViews[image.bufferView];const start=binStart+(view.byteOffset??0);assert.equal(bytes.subarray(start,start+8).toString('hex'),'89504e470d0a1a0a');assert.ok(bytes.readUInt32BE(start+16)>0);assert.ok(bytes.readUInt32BE(start+20)>0);}
});
// Node has no image decoder/WebGL. Only texture creation is stubbed; the production
// GLTFLoader parses the actual skeleton, geometry, transforms and animation tracks.
const loader=new GLTFLoader();loader.register(()=>({name:'node-texture-stub',loadTexture:()=>Promise.resolve(new THREE.Texture())}));
const gltf=await loader.parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
test('real GLTFLoader loads tabby mesh, skeleton and exact clip contract',()=>{
  assert.deepEqual(gltf.animations.map(a=>a.name).sort(),['Idle','Walk']);let skinned=0;
  gltf.scene.traverse(o=>{if(o instanceof THREE.SkinnedMesh){skinned++;assert.ok(o.skeleton.bones.length>=8);assert.ok(o.geometry.getAttribute('position').count>0);}});assert.ok(skinned>0);
  const size=new THREE.Box3().setFromObject(gltf.scene).getSize(new THREE.Vector3());assert.ok(size.y>2&&size.y<4);
});
test('Idle and Walk bind and animate actual bones without NaN',()=>{
  const mixer=new THREE.AnimationMixer(gltf.scene);
  for(const clip of gltf.animations){mixer.stopAllAction();const action=mixer.clipAction(clip).play();assert.ok(clip.duration>0);mixer.update(clip.duration*.31);gltf.scene.updateMatrixWorld(true);gltf.scene.traverse(o=>{for(const v of o.matrixWorld.elements)assert.ok(Number.isFinite(v));});assert.ok(action.isRunning());}
});
