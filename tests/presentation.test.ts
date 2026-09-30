import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {RADIUS} from '../src/movement';
test('planet reserves substantially more surface area',()=>{assert.equal(RADIUS,18);assert.ok(RADIUS*RADIUS/(7*7)>2.9);});
test('homepage has no promotional text overlays and retains accessible controls',async()=>{
 const html=await readFile(new URL('../index.html',import.meta.url),'utf8');
 assert.ok(!html.includes('<header>')); assert.ok(!html.includes('<h1>'));
 assert.ok(html.includes('id="reset"')); assert.ok(html.includes('aria-label='));
 assert.ok(html.includes('id="error" hidden'));
});

import {PerspectiveCamera,Vector3} from 'three';
import {composeCamera} from '../src/composition';
test('default camera matches sketch landmarks across desktop and mobile',()=>{
 for(const aspect of [16/9,588/480,390/844]){
  const camera=new PerspectiveCamera(36,aspect,.1,140);const target=new Vector3();
  composeCamera(new Vector3(0,1,0),new Vector3(0,0,1),1,camera.position,target);camera.lookAt(target);camera.updateMatrixWorld();
  const foot=new Vector3(0,RADIUS+.02,0).project(camera);const head=new Vector3(0,RADIUS+2.52,0).project(camera);
  const fy=.5-foot.y/2,hy=.5-head.y/2;assert.ok(Math.abs(foot.x)<1e-9);assert.ok(fy>.60&&fy<.66);assert.ok(hy>.36&&hy<.43);
 }
});
