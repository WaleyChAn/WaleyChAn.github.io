import './style.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { advance, createState, RADIUS } from './movement';
import { composeCamera } from './composition';
const canvas = document.querySelector<HTMLCanvasElement>('#world')!;
const status = document.querySelector<HTMLSpanElement>('#status')!;
const dot = document.querySelector<HTMLElement>('#status-dot')!;
const errorBox = document.querySelector<HTMLElement>('#error')!;
const errorText = document.querySelector<HTMLElement>('#error-message')!;
const keys = new Set<string>();
let reset = () => {};
function showError(message: string) { errorBox.hidden = false; errorText.textContent = message; status.textContent = '预览未就绪'; dot.className = 'error'; }
document.querySelector('#retry')!.addEventListener('click',()=>location.reload());
document.querySelector('#reset')!.addEventListener('click',()=>reset());
const relevant = ['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'];
window.addEventListener('keydown', e=> { if(relevant.includes(e.code)) {e.preventDefault();keys.add(e.code);} if(e.code==='KeyR') reset(); });
window.addEventListener('keyup', e=> keys.delete(e.code));
window.addEventListener('blur',()=>keys.clear());
document.addEventListener('visibilitychange',()=>keys.clear());
document.querySelectorAll<HTMLButtonElement>('[data-key]').forEach(button=> {
  button.addEventListener('pointerdown', e=> {e.preventDefault();button.setPointerCapture(e.pointerId);keys.add(button.dataset.key!);});
  for(const name of ['pointerup','pointercancel','lostpointercapture']) button.addEventListener(name,()=>keys.delete(button.dataset.key!));
});
try { start(); } catch(error) { console.error(error); showError('当前浏览器没有可用的 WebGL 2。请在支持硬件加速的现代浏览器中打开；这里不会用静态图片代替三维预览。'); }
function start() {
  const renderer = new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.35;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36,1,0.1,140);
  let state = createState();
  let zoom = 1;
  canvas.addEventListener('wheel', event=> { event.preventDefault(); zoom=THREE.MathUtils.clamp(zoom*Math.exp(event.deltaY*.0007),.60,1.4); },{passive:false});
  const actor = new THREE.Group(); scene.add(actor);
  const planet = new THREE.Mesh(new THREE.SphereGeometry(RADIUS,96,64),new THREE.MeshStandardMaterial({color:0xa8c68d,roughness:.92}));
  planet.receiveShadow = true; scene.add(planet);
  // Sparse latitude/longitude lines give a readable reference for spherical motion.
  const gridMaterial = new THREE.LineBasicMaterial({color:0x73975c,transparent:true,opacity:.10});
  const gridRadius = RADIUS+.014;
  for(let lat=-60;lat<=60;lat+=30) {
    const a=THREE.MathUtils.degToRad(lat); const pts=[];
    for(let i=0;i<=128;i++){const t=i/128*Math.PI*2;pts.push(new THREE.Vector3(gridRadius*Math.cos(a)*Math.cos(t),gridRadius*Math.sin(a),gridRadius*Math.cos(a)*Math.sin(t)));}
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),gridMaterial));
  }
  for(let meridian=0;meridian<6;meridian++) {
    const angle=meridian*Math.PI/6;const pts=[];
    for(let i=0;i<=128;i++){const t=i/128*Math.PI*2;pts.push(new THREE.Vector3(gridRadius*Math.cos(t)*Math.cos(angle),gridRadius*Math.sin(t),gridRadius*Math.cos(t)*Math.sin(angle)));}
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),gridMaterial));
  }
  scene.add(new THREE.HemisphereLight(0xfff5e5,0x7b8795,2.6));
  const sun = new THREE.DirectionalLight(0xffefd8,4);scene.add(sun);scene.add(sun.target);
  sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-7;sun.shadow.camera.right=7;sun.shadow.camera.top=7;sun.shadow.camera.bottom=-7;sun.shadow.camera.near=.1;sun.shadow.camera.far=45;sun.shadow.bias=-.00015;sun.shadow.normalBias=.025;
  let mixer: THREE.AnimationMixer|undefined; let idle:THREE.AnimationAction|undefined;let walk:THREE.AnimationAction|undefined;let loaded=false;let wasWalking=false;
  new GLTFLoader().load('/models/tabby.glb?v=20260930-r3',gltf=>{
    const model=gltf.scene;const box=new THREE.Box3().setFromObject(model);const size=box.getSize(new THREE.Vector3());
    const scale=2.5/size.y;model.scale.setScalar(scale);model.position.y=-box.min.y*scale;
    model.traverse(obj=>{if(obj instanceof THREE.Mesh){obj.castShadow=true;obj.receiveShadow=true;}});
    actor.add(model);mixer=new THREE.AnimationMixer(model);
    const idleClip=THREE.AnimationClip.findByName(gltf.animations,'Idle');const walkClip=THREE.AnimationClip.findByName(gltf.animations,'Walk');
    if(!idleClip||!walkClip){showError('模型缺少 Idle / Walk 动画，无法完成步态测试。');return;}
    idle=mixer.clipAction(idleClip);walk=mixer.clipAction(walkClip);idle.play();loaded=true;status.textContent='虎斑猫已就绪 · 待机';dot.className='ready';
    Object.assign(window,{__tabbyPreview:{loaded:true,clips:gltf.animations.map(clip=>clip.name),height:2.5,getState:()=>({normal:state.normal.toArray(),distance:state.distance,walking:wasWalking})}});
  },undefined,error=>{console.error(error);showError('模型加载失败。请确认 public/models/tabby.glb 已存在，然后重新加载。');});
  const basis=new THREE.Matrix4();const right=new THREE.Vector3();const desiredPosition=new THREE.Vector3();const desiredUp=new THREE.Vector3();const target=new THREE.Vector3();
  function place(snap=false){
    actor.position.copy(state.normal).multiplyScalar(RADIUS+.02);
    right.crossVectors(state.normal,state.forward).normalize();basis.makeBasis(right,state.normal,state.forward);actor.quaternion.setFromRotationMatrix(basis);
    composeCamera(state.normal,state.cameraBack,zoom,desiredPosition,target);
    desiredUp.copy(state.normal);
    if(snap){camera.position.copy(desiredPosition);camera.up.copy(desiredUp);}camera.lookAt(target);
    const lightRight=new THREE.Vector3().crossVectors(state.normal,state.cameraBack).normalize();sun.position.copy(actor.position).addScaledVector(state.normal,12).addScaledVector(state.cameraBack,8).addScaledVector(lightRight,-7);sun.target.position.copy(actor.position);
  }
  reset=()=>{keys.clear();zoom=1;state=createState();wasWalking=false;if(walk)walk.stop();if(idle)idle.reset().setEffectiveWeight(1).play();place(true);if(loaded)status.textContent='虎斑猫已就绪 · 待机';};
  const resize=()=>{renderer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();
    camera.clearViewOffset();
    place(true);
  };
  window.addEventListener('resize',resize);resize();place(true);
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();keys.clear();showError('WebGL 上下文已中断，请重新加载预览。');});
  let previous=performance.now();
  renderer.setAnimationLoop(now=>{
    const dt=Math.min((now-previous)/1000,.05);previous=now;
    const x=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'));
    const z=Number(keys.has('KeyS')||keys.has('ArrowDown'))-Number(keys.has('KeyW')||keys.has('ArrowUp'));
    const walking=loaded&&advance(state,x,z,dt);
    if(loaded&&walking!==wasWalking){
      const from=walking?idle!:walk!;const to=walking?walk!:idle!;
      to.reset().setEffectiveTimeScale(walking?1.8:1).setEffectiveWeight(1).play();from.crossFadeTo(to,.2,false);
      status.textContent=walking?'虎斑猫正在行走':'虎斑猫已就绪 · 待机';wasWalking=walking;
    }
    mixer?.update(dt);place();const damping=1-Math.exp(-9*dt);camera.position.lerp(desiredPosition,damping);camera.up.lerp(desiredUp,damping).normalize();camera.lookAt(target);renderer.render(scene,camera);
  });
}
