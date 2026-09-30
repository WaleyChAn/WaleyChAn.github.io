import test from 'node:test';
import assert from 'node:assert/strict';
import { advance, createState, SPEED } from '../src/movement';
test('idle leaves state unchanged',()=>{const s=createState();assert.equal(advance(s,0,0,.02),false);assert.deepEqual(s.normal.toArray(),[0,1,0]);});
test('walking maintains sphere and orthonormal tangent frame',()=>{const s=createState();for(let i=0;i<20000;i++){advance(s,Math.sin(i*.01),Math.cos(i*.013),1/60);assert.ok(Math.abs(s.normal.length()-1)<1e-10);assert.ok(Math.abs(s.forward.dot(s.normal))<1e-10);assert.ok(Math.abs(s.cameraBack.dot(s.normal))<1e-10);} });
test('diagonal speed equals cardinal speed',()=>{const a=createState(),b=createState();advance(a,1,0,.05);advance(b,1,1,.05);assert.ok(Math.abs(a.distance-b.distance)<1e-12);assert.equal(a.distance,SPEED*.05);});
test('opposite movement reverses path and frame without drift',()=>{const s=createState();for(let i=0;i<100;i++)advance(s,0,-1,.02);for(let i=0;i<100;i++)advance(s,0,1,.02);assert.ok(s.normal.distanceTo(createState().normal)<1e-10);assert.ok(s.cameraBack.distanceTo(createState().cameraBack)<1e-10);});
test('long frame is clamped and reset state is independent',()=>{const a=createState();advance(a,1,0,90);assert.equal(a.distance,SPEED*.05);assert.deepEqual(createState().normal.toArray(),[0,1,0]);});
