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
  gltf.scene.traverse(o=>{if(o instanceof THREE.SkinnedMesh){skinned++;assert.ok(o.skeleton.bones.length===24);assert.ok(o.geometry.getAttribute('position').count>0);}});assert.ok(skinned>0);
  const size=new THREE.Box3().setFromObject(gltf.scene).getSize(new THREE.Vector3());assert.ok(size.y>2&&size.y<4);
});
test('Idle and Walk bind and animate actual bones without NaN',()=>{
  const mixer=new THREE.AnimationMixer(gltf.scene);
  for(const clip of gltf.animations){mixer.stopAllAction();const action=mixer.clipAction(clip).play();assert.ok(clip.duration>0);mixer.update(clip.duration*.31);gltf.scene.updateMatrixWorld(true);gltf.scene.traverse(o=>{for(const v of o.matrixWorld.elements)assert.ok(Number.isFinite(v));});assert.ok(action.isRunning());}
});

test('articulated rig has normalized blended weights and all requested joints',()=>{
 const names=new Set<string>();let blended=0;
 gltf.scene.traverse(o=>{if(o instanceof THREE.SkinnedMesh){
  o.skeleton.bones.forEach(b=>names.add(b.name));const w=o.geometry.getAttribute('skinWeight');
  for(let i=0;i<w.count;i++){const a=[w.getX(i),w.getY(i),w.getZ(i),w.getW(i)];assert.ok(Math.abs(a.reduce((s,v)=>s+v,0)-1)<1e-5);assert.ok(a.every(v=>v>=0&&v<=1));if(a.filter(v=>v>.001).length>1)blended++;}
 }});
 for(const n of ['Chest','ForearmL','ForearmR','PawL','PawR','ShinL','ShinR','FootL','FootR','Tail1','Tail2','Tail3'])assert.ok([...names].some(name=>name.replaceAll('.','').replaceAll('_','')===n),`missing ${n}`);
 assert.ok(blended>500,`only ${blended} blended vertices`);
});
test('exported walk skin stays finite and maintains floor contact across the cycle',()=>{
 const mixer=new THREE.AnimationMixer(gltf.scene);mixer.clipAction(THREE.AnimationClip.findByName(gltf.animations,'Walk')!).play();
 const point=new THREE.Vector3();
 for(let frame=0;frame<24;frame++){
  mixer.setTime(frame/24);gltf.scene.updateMatrixWorld(true);let min=Infinity,max=-Infinity;
  gltf.scene.traverse(o=>{if(o instanceof THREE.SkinnedMesh){o.skeleton.update();const positions=o.geometry.getAttribute('position');
   for(let i=0;i<positions.count;i++){o.getVertexPosition(i,point).applyMatrix4(o.matrixWorld);assert.ok(Number.isFinite(point.y));min=Math.min(min,point.y);max=Math.max(max,point.y);}
  }});
  assert.ok(min>-.012,`frame ${frame}: floor penetration ${min}`);assert.ok(min<.025,`frame ${frame}: floating ${min}`);assert.ok(max<3.2&&max>2.1,`frame ${frame}: bad height ${max}`);
 }
 mixer.stopAllAction();
});
