import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {RADIUS} from '../src/movement';
test('planet reserves substantially more surface area',()=>{assert.equal(RADIUS,12);assert.ok(RADIUS*RADIUS/(7*7)>2.9);});
test('homepage has no promotional text overlays and retains accessible controls',async()=>{
 const html=await readFile(new URL('../index.html',import.meta.url),'utf8');
 assert.ok(!html.includes('<header>')); assert.ok(!html.includes('<h1>'));
 assert.ok(html.includes('id="reset"')); assert.ok(html.includes('aria-label='));
 assert.ok(html.includes('id="error" hidden'));
});
