(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ac="180",Vd=0,pl=1,Gd=2,su=1,ou=2,qn=3,Jn=0,Vt=1,xn=2,di=0,gr=1,ml=2,gl=3,_l=4,Wd=5,Ni=100,Xd=101,qd=102,$d=103,Yd=104,jd=200,Kd=201,Zd=202,Jd=203,Ra=204,Ca=205,Qd=206,ef=207,tf=208,nf=209,rf=210,sf=211,of=212,af=213,cf=214,Pa=0,Ia=1,Da=2,Mr=3,La=4,Ua=5,Na=6,Fa=7,au=0,lf=1,hf=2,fi=0,uf=1,df=2,ff=3,cu=4,pf=5,mf=6,gf=7,xl="attached",_f="detached",lu=300,yr=301,Sr=302,Oa=303,Ba=304,vo=306,Vi=1e3,hi=1001,ao=1002,Gt=1003,hu=1004,qr=1005,Kt=1006,Js=1007,In=1008,Sn=1009,uu=1010,du=1011,Qr=1012,Rc=1013,Gi=1014,Mn=1015,hs=1016,Cc=1017,Pc=1018,es=1020,fu=35902,pu=35899,mu=1021,gu=1022,sn=1023,ts=1026,ns=1027,Ic=1028,Dc=1029,_u=1030,Lc=1031,Uc=1033,Qs=33776,eo=33777,to=33778,no=33779,za=35840,ka=35841,Ha=35842,Va=35843,Ga=36196,Wa=37492,Xa=37496,qa=37808,$a=37809,Ya=37810,ja=37811,Ka=37812,Za=37813,Ja=37814,Qa=37815,ec=37816,tc=37817,nc=37818,ic=37819,rc=37820,sc=37821,oc=36492,ac=36494,cc=36495,lc=36283,hc=36284,uc=36285,dc=36286,xf=2200,vf=2201,Mf=2202,is=2300,rs=2301,Io=2302,dr=2400,fr=2401,co=2402,Nc=2500,yf=2501,Sf=0,xu=1,fc=2,Ef=3200,Tf=3201,vu=0,bf=1,li="",Rt="srgb",Wt="srgb-linear",lo="linear",at="srgb",Ki=7680,vl=519,wf=512,Af=513,Rf=514,Mu=515,Cf=516,Pf=517,If=518,Df=519,pc=35044,Ml="300 es",Dn=2e3,ho=2001;class $i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yl=1234567;const Yr=Math.PI/180,Er=180/Math.PI;function yn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Ge(i,e,t){return Math.max(e,Math.min(t,i))}function Fc(i,e){return(i%e+e)%e}function Lf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Uf(i,e,t){return i!==e?(t-i)/(e-i):0}function jr(i,e,t){return(1-t)*i+t*e}function Nf(i,e,t,n){return jr(i,e,1-Math.exp(-t*n))}function Ff(i,e=1){return e-Math.abs(Fc(i,e*2)-e)}function Of(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Bf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function kf(i,e){return i+Math.random()*(e-i)}function Hf(i){return i*(.5-Math.random())}function Vf(i){i!==void 0&&(yl=i);let e=yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gf(i){return i*Yr}function Wf(i){return i*Er}function Xf(i){return(i&i-1)===0&&i!==0}function qf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $f(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yf(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const jf={DEG2RAD:Yr,RAD2DEG:Er,generateUUID:yn,clamp:Ge,euclideanModulo:Fc,mapLinear:Lf,inverseLerp:Uf,lerp:jr,damp:Nf,pingpong:Ff,smoothstep:Of,smootherstep:Bf,randInt:zf,randFloat:kf,randFloatSpread:Hf,seededRandom:Vf,degToRad:Gf,radToDeg:Wf,isPowerOfTwo:Xf,ceilPowerOfTwo:qf,floorPowerOfTwo:$f,setQuaternionFromProperEuler:Yf,normalize:nt,denormalize:vn};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const A=Math.sqrt(E),R=Math.atan2(A,p*T);m=Math.sin(m*R)/A,a=Math.sin(a*R)/A}const v=a*T;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),d=l(n/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(e=0,t=0,n=0){w.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new w,Sl=new Ft;class Oe{constructor(e,t,n,r,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=r[0],m=r[3],p=r[6],T=r[1],E=r[4],v=r[7],A=r[2],R=r[5],C=r[8];return s[0]=o*_+a*T+l*A,s[3]=o*m+a*E+l*R,s[6]=o*p+a*v+l*C,s[1]=c*_+h*T+u*A,s[4]=c*m+h*E+u*R,s[7]=c*p+h*v+u*C,s[2]=d*_+f*T+g*A,s[5]=d*m+f*E+g*R,s[8]=d*p+f*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=t*u+n*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*c-h*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lo=new Oe;function yu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kf(){const i=ss("canvas");return i.style.display="block",i}const El={};function os(i){i in El||(El[i]=!0,console.warn(i))}function Zf(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Tl=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jf(){const i={enabled:!0,workingColorSpace:Wt,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=Zn(r.r),r.g=Zn(r.g),r.b=Zn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?lo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return os("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return os("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wt]:{primaries:e,whitePoint:n,transfer:lo,toXYZ:Tl,fromXYZ:bl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Tl,fromXYZ:bl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}const Ye=Jf();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zi;class Qf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zi===void 0&&(Zi=ss("canvas")),Zi.width=e.width,Zi.height=e.height;const r=Zi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ss("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ep=0;class Oc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Uo(r[o].image)):s.push(Uo(r[o]))}else s=Uo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tp=0;const No=new w;class Ct extends $i{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=hi,r=hi,s=Kt,o=In,a=sn,l=Sn,c=Ct.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=yn(),this.name="",this.source=new Oc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=lu;Ct.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,r=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,v=(f+1)/2,A=(p+1)/2,R=(h+d)/4,C=(u+_)/4,D=(g+m)/4;return E>v&&E>A?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=R/n,s=C/n):v>A?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=R/r,s=D/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=C/s,r=D/s),this.set(n,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class np extends $i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Ct(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Oc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends np{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Su extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ip extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bn{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(s,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),vs.subVectors(this.max,Ur),Ji.subVectors(e.a,Ur),Qi.subVectors(e.b,Ur),er.subVectors(e.c,Ur),ni.subVectors(Qi,Ji),ii.subVectors(er,Qi),Si.subVectors(Ji,er);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Si.z,Si.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Si.z,0,-Si.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Si.y,Si.x,0];return!Fo(t,Ji,Qi,er,vs)||(t=[1,0,0,0,1,0,0,0,1],!Fo(t,Ji,Qi,er,vs))?!1:(Ms.crossVectors(ni,ii),t=[Ms.x,Ms.y,Ms.z],Fo(t,Ji,Qi,er,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new w,new w,new w,new w,new w,new w,new w,new w],pn=new w,xs=new bn,Ji=new w,Qi=new w,er=new w,ni=new w,ii=new w,Si=new w,Ur=new w,vs=new w,Ms=new w,Ei=new w;function Fo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ei.fromArray(i,s);const a=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const rp=new bn,Nr=new w,Oo=new w;class On{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rp.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);const t=Nr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Nr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(Oo)),this.expandByPoint(Nr.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hn=new w,Bo=new w,ys=new w,ri=new w,zo=new w,Ss=new w,ko=new w;class us{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Bo.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Bo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ys),a=ri.dot(this.direction),l=-ri.dot(ys),c=ri.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Bo).addScaledVector(ys,d),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),r=Hn.dot(Hn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,r,s){zo.subVectors(t,e),Ss.subVectors(n,e),ko.crossVectors(zo,Ss);let o=this.direction.dot(ko),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(Ss.crossVectors(ri,Ss));if(l<0)return null;const c=a*this.direction.dot(zo.cross(ri));if(c<0||l+c>o)return null;const h=-a*ri.dot(ko);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,n,r,s,o,a,l,c,h,u,d,f,g,_,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,u,d,f,g,_,m)}set(e,t,n,r,s,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/tr.setFromMatrixColumn(e,0).length(),s=1/tr.setFromMatrixColumn(e,1).length(),o=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sp,e,op)}lookAt(e,t,n){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),si.crossVectors(n,tn),si.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),si.crossVectors(n,tn)),si.normalize(),Es.crossVectors(tn,si),r[0]=si.x,r[4]=Es.x,r[8]=tn.x,r[1]=si.y,r[5]=Es.y,r[9]=tn.y,r[2]=si.z,r[6]=Es.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],E=n[7],v=n[11],A=n[15],R=r[0],C=r[4],D=r[8],y=r[12],S=r[1],P=r[5],U=r[9],O=r[13],z=r[2],k=r[6],W=r[10],q=r[14],H=r[3],J=r[7],re=r[11],ve=r[15];return s[0]=o*R+a*S+l*z+c*H,s[4]=o*C+a*P+l*k+c*J,s[8]=o*D+a*U+l*W+c*re,s[12]=o*y+a*O+l*q+c*ve,s[1]=h*R+u*S+d*z+f*H,s[5]=h*C+u*P+d*k+f*J,s[9]=h*D+u*U+d*W+f*re,s[13]=h*y+u*O+d*q+f*ve,s[2]=g*R+_*S+m*z+p*H,s[6]=g*C+_*P+m*k+p*J,s[10]=g*D+_*U+m*W+p*re,s[14]=g*y+_*O+m*q+p*ve,s[3]=T*R+E*S+v*z+A*H,s[7]=T*C+E*P+v*k+A*J,s[11]=T*D+E*U+v*W+A*re,s[15]=T*y+E*O+v*q+A*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*u-r*c*u-s*a*d+n*c*d+r*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*h-s*l*h)+m*(+t*c*u-t*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-r*a*h-t*l*u+t*a*d+r*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,E=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,v=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,A=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,R=t*T+n*E+r*v+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=T*C,e[1]=(_*d*s-u*m*s-_*r*f+n*m*f+u*r*p-n*d*p)*C,e[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*p+n*l*p)*C,e[3]=(u*l*s-a*d*s-u*r*c+n*d*c+a*r*f-n*l*f)*C,e[4]=E*C,e[5]=(h*m*s-g*d*s+g*r*f-t*m*f-h*r*p+t*d*p)*C,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*C,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*f+t*l*f)*C,e[8]=v*C,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*C,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*C,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*f-t*a*f)*C,e[12]=A*C,e[13]=(h*_*r-g*u*r+g*n*d-t*_*d-h*n*m+t*u*m)*C,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*m-t*a*m)*C,e[15]=(o*u*r-h*a*r+h*n*l-t*u*l-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,_=o*h,m=o*u,p=a*u,T=l*c,E=l*h,v=l*u,A=n.x,R=n.y,C=n.z;return r[0]=(1-(_+p))*A,r[1]=(f+v)*A,r[2]=(g-E)*A,r[3]=0,r[4]=(f-v)*R,r[5]=(1-(d+p))*R,r[6]=(m+T)*R,r[7]=0,r[8]=(g+E)*C,r[9]=(m-T)*C,r[10]=(1-(d+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=tr.set(r[0],r[1],r[2]).length();const o=tr.set(r[4],r[5],r[6]).length(),a=tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const c=1/s,h=1/o,u=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,t.setFromRotationMatrix(mn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Dn,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Dn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ho)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Dn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Dn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===ho)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const tr=new w,mn=new Ne,sp=new w(0,0,0),op=new w(1,1,1),si=new w,Es=new w,tn=new w,wl=new Ne,Al=new Ft;class Nn{constructor(e=0,t=0,n=0,r=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Al.setFromEuler(this),this.setFromQuaternion(Al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ap=0;const Rl=new w,nr=new Ft,Vn=new Ne,Ts=new w,Fr=new w,cp=new w,lp=new Ft,Cl=new w(1,0,0),Pl=new w(0,1,0),Il=new w(0,0,1),Dl={type:"added"},hp={type:"removed"},ir={type:"childadded",child:null},Ho={type:"childremoved",child:null};class gt extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new w,t=new Nn,n=new Ft,r=new w(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Oe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(Cl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Il,e)}translateOnAxis(e,t){return Rl.copy(e).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ts.copy(e):Ts.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Fr,Ts,this.up):Vn.lookAt(Ts,Fr,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),nr.setFromRotationMatrix(Vn),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dl),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hp),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dl),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,cp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gt.DEFAULT_UP=new w(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new w,Gn=new w,Vo=new w,Wn=new w,rr=new w,sr=new w,Ll=new w,Go=new w,Wo=new w,Xo=new w,qo=new Ke,$o=new Ke,Yo=new Ke;class dn{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),gn.subVectors(e,t),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){gn.subVectors(r,t),Gn.subVectors(n,t),Vo.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(Gn),l=gn.dot(Vo),c=Gn.dot(Gn),h=Gn.dot(Vo),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return qo.setScalar(0),$o.setScalar(0),Yo.setScalar(0),qo.fromBufferAttribute(e,t),$o.fromBufferAttribute(e,n),Yo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(qo,s.x),o.addScaledVector($o,s.y),o.addScaledVector(Yo,s.z),o}static isFrontFacing(e,t,n,r){return gn.subVectors(n,t),Gn.subVectors(e,t),gn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),gn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;rr.subVectors(r,n),sr.subVectors(s,n),Go.subVectors(e,n);const l=rr.dot(Go),c=sr.dot(Go);if(l<=0&&c<=0)return t.copy(n);Wo.subVectors(e,r);const h=rr.dot(Wo),u=sr.dot(Wo);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(rr,o);Xo.subVectors(e,s);const f=rr.dot(Xo),g=sr.dot(Xo);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(sr,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ll.subVectors(s,r),a=(u-h)/(u-h+(f-g)),t.copy(r).addScaledVector(Ll,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(rr,o).addScaledVector(sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},bs={h:0,s:0,l:0};function jo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class he{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ye.workingColorSpace){if(e=Fc(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=jo(o,s,e+1/3),this.g=jo(o,s,e),this.b=jo(o,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=Eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Ye.workingToColorSpace(Nt.copy(this),e),Math.round(Ge(Nt.r*255,0,255))*65536+Math.round(Ge(Nt.g*255,0,255))*256+Math.round(Ge(Nt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,r=Nt.g,s=Nt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Rt){Ye.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,r=Nt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(bs);const n=jr(oi.h,bs.h,t),r=jr(oi.s,bs.s,t),s=jr(oi.l,bs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new he;he.NAMES=Eu;let up=0;class Un extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=gr,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ra,this.blendDst=Ca,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ra&&(n.blendSrc=this.blendSrc),this.blendDst!==Ca&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bi extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new w,ws=new Xe;let dp=0;class Pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pc,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ws.fromBufferAttribute(this,t),ws.applyMatrix3(e),this.setXY(t,ws.x,ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pc&&(e.usage=this.usage),e}}class Tu extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bu extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fp=0;const cn=new Ne,Ko=new gt,or=new w,nn=new bn,Or=new bn,At=new w;class Ot extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yu(e)?bu:Tu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Ko.lookAt(e),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(nn.min,Or.min),nn.expandByPoint(At),At.addVectors(nn.max,Or.max),nn.expandByPoint(At)):(nn.expandByPoint(Or.min),nn.expandByPoint(Or.max))}nn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)At.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(e,c),At.add(or)),r=Math.max(r,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new w,l[D]=new w;const c=new w,h=new w,u=new w,d=new Xe,f=new Xe,g=new Xe,_=new w,m=new w;function p(D,y,S){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,D),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[D].add(_),a[y].add(_),a[S].add(_),l[D].add(m),l[y].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,y=T.length;D<y;++D){const S=T[D],P=S.start,U=S.count;for(let O=P,z=P+U;O<z;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new w,v=new w,A=new w,R=new w;function C(D){A.fromBufferAttribute(r,D),R.copy(A);const y=a[D];E.copy(y),E.sub(A.multiplyScalar(A.dot(y))).normalize(),v.crossVectors(R,y);const P=v.dot(l[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,P)}for(let D=0,y=T.length;D<y;++D){const S=T[D],P=S.start,U=S.count;for(let O=P,z=P+U;O<z;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new w,s=new w,o=new w,a=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Pt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ul=new Ne,Ti=new us,As=new On,Nl=new w,Rs=new w,Cs=new w,Ps=new w,Zo=new w,Is=new w,Fl=new w,Ds=new w;class rt extends gt{constructor(e=new Ot,t=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Zo.fromBufferAttribute(u,e),o?Is.addScaledVector(Zo,h):Is.addScaledVector(Zo.sub(t),h))}t.add(Is)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(As.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(As,Nl)===null||Ti.origin.distanceToSquared(Nl)>(e.far-e.near)**2))&&(Ul.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(Ul),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=T,A=E;v<A;v+=3){const R=a.getX(v),C=a.getX(v+1),D=a.getX(v+2);r=Ls(this,p,e,n,c,h,u,R,C,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);r=Ls(this,o,e,n,c,h,u,T,E,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=T,A=E;v<A;v+=3){const R=v,C=v+1,D=v+2;r=Ls(this,p,e,n,c,h,u,R,C,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=m,E=m+1,v=m+2;r=Ls(this,o,e,n,c,h,u,T,E,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function pp(i,e,t,n,r,s,o,a){let l;if(e.side===Vt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Jn,a),l===null)return null;Ds.copy(a),Ds.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ds);return c<t.near||c>t.far?null:{distance:c,point:Ds.clone(),object:i}}function Ls(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Rs),i.getVertexPosition(l,Cs),i.getVertexPosition(c,Ps);const h=pp(i,e,t,n,Rs,Cs,Ps,Fl);if(h){const u=new w;dn.getBarycoord(Fl,Rs,Cs,Ps,u),r&&(h.uv=dn.getInterpolatedAttribute(r,a,l,c,u,new Xe)),s&&(h.uv1=dn.getInterpolatedAttribute(s,a,l,c,u,new Xe)),o&&(h.normal=dn.getInterpolatedAttribute(o,a,l,c,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new w,materialIndex:0};dn.getNormal(Rs,Cs,Ps,d.normal),h.face=d,h.barycoord=u}return h}class Xi extends Ot{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function g(_,m,p,T,E,v,A,R,C,D,y){const S=v/C,P=A/D,U=v/2,O=A/2,z=R/2,k=C+1,W=D+1;let q=0,H=0;const J=new w;for(let re=0;re<W;re++){const ve=re*P-O;for(let Be=0;Be<k;Be++){const Ze=Be*S-U;J[_]=Ze*T,J[m]=ve*E,J[p]=z,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=R>0?1:-1,h.push(J.x,J.y,J.z),u.push(Be/C),u.push(1-re/D),q+=1}}for(let re=0;re<D;re++)for(let ve=0;ve<C;ve++){const Be=d+ve+k*re,Ze=d+ve+k*(re+1),ht=d+(ve+1)+k*(re+1),Je=d+(ve+1)+k*re;l.push(Be,Ze,Je),l.push(Ze,ht,Je),H+=6}a.addGroup(f,H,y),f+=H,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Tr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function kt(i){const e={};for(let t=0;t<i.length;t++){const n=Tr(i[t]);for(const r in n)e[r]=n[r]}return e}function mp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const gp={clone:Tr,merge:kt};var _p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Au extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new w,Ol=new Xe,Bl=new Xe;class Ht extends Au{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Ol,Bl),t.subVectors(Bl,Ol)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=-90,cr=1;class vp extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ht(ar,cr,e,t);r.layers=this.layers,this.add(r);const s=new Ht(ar,cr,e,t);s.layers=this.layers,this.add(s);const o=new Ht(ar,cr,e,t);o.layers=this.layers,this.add(o);const a=new Ht(ar,cr,e,t);a.layers=this.layers,this.add(a);const l=new Ht(ar,cr,e,t);l.layers=this.layers,this.add(l);const c=new Ht(ar,cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ru extends Ct{constructor(e=[],t=yr,n,r,s,o,a,l,c,h){super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mp extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ru(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xi(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:di});s.uniforms.tEquirect.value=t;const o=new rt(r,s),a=t.minFilter;return t.minFilter===In&&(t.minFilter=Kt),new vp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Ln extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yp={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class zc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(e),this.near=t,this.far=n}clone(){return new zc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sp extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ep{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pc,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new w;class kc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new kc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const zl=new w,kl=new Ke,Hl=new Ke,Tp=new w,Vl=new Ne,Us=new w,Qo=new On,Gl=new Ne,ea=new us;class Cu extends rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xl,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Us),this.boundingBox.expandByPoint(Us)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Us),this.boundingSphere.expandByPoint(Us)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qo.copy(this.boundingSphere),Qo.applyMatrix4(r),e.ray.intersectsSphere(Qo)!==!1&&(Gl.copy(r).invert(),ea.copy(e.ray).applyMatrix4(Gl),!(this.boundingBox!==null&&ea.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ea)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_f?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;kl.fromBufferAttribute(r.attributes.skinIndex,e),Hl.fromBufferAttribute(r.attributes.skinWeight,e),zl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Hl.getComponent(s);if(o!==0){const a=kl.getComponent(s);Vl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Tp.copy(zl).applyMatrix4(Vl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Pu extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hc extends Ct{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Gt,h=Gt,u,d){super(null,o,a,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wl=new Ne,bp=new Ne;class Vc{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:bp;Wl.multiplyMatrices(a,t[s]),Wl.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Vc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Hc(t,e,e,sn,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Pu),this.bones.push(o),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class mc extends Pt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const lr=new Ne,Xl=new Ne,Ns=[],ql=new bn,wp=new Ne,Br=new rt,zr=new On;class Iu extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,wp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lr),ql.copy(e.boundingBox).applyMatrix4(lr),this.boundingBox.union(ql)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lr),zr.copy(e.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(n),e.ray.intersectsSphere(zr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,lr),Xl.multiplyMatrices(n,lr),Br.matrixWorld=Xl,Br.raycast(e,Ns);for(let o=0,a=Ns.length;o<a;o++){const l=Ns[o];l.instanceId=s,l.object=this,t.push(l)}Ns.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hc(new Float32Array(r*this.count),r,this.count,Ic,Mn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ta=new w,Ap=new w,Rp=new Oe;class Li{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ta.subVectors(n,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ta),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rp.getNormalMatrix(e),r=this.coplanarPoint(ta).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new On,Cp=new Xe(.5,.5),Fs=new w;class Gc{constructor(e=new Li,t=new Li,n=new Li,r=new Li,s=new Li,o=new Li){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],T=s[12],E=s[13],v=s[14],A=s[15];if(r[0].setComponents(c-o,f-h,p-g,A-T).normalize(),r[1].setComponents(c+o,f+h,p+g,A+T).normalize(),r[2].setComponents(c+a,f+u,p+_,A+E).normalize(),r[3].setComponents(c-a,f-u,p-_,A-E).normalize(),n)r[4].setComponents(l,d,m,v).normalize(),r[5].setComponents(c-l,f-d,p-m,A-v).normalize();else if(r[4].setComponents(c-l,f-d,p-m,A-v).normalize(),t===Dn)r[5].setComponents(c+l,f+d,p+m,A+v).normalize();else if(t===ho)r[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);const t=Cp.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fs.x=r.normal.x>0?e.max.x:e.min.x,Fs.y=r.normal.y>0?e.max.y:e.min.y,Fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Du extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uo=new w,fo=new w,$l=new Ne,kr=new us,Os=new On,na=new w,Yl=new w;class Wc extends gt{constructor(e=new Ot,t=new Du){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)uo.fromBufferAttribute(t,r-1),fo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=uo.distanceTo(fo);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),Os.radius+=s,e.ray.intersectsSphere(Os)===!1)return;$l.copy(r).invert(),kr.copy(e.ray).applyMatrix4($l);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),T=h.getX(_+1),E=Bs(this,e,kr,l,p,T,_);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Bs(this,e,kr,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Bs(this,e,kr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Bs(this,e,kr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bs(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(uo.fromBufferAttribute(a,r),fo.fromBufferAttribute(a,s),t.distanceSqToSegment(uo,fo,na,Yl)>n)return;na.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(na);if(!(c<e.near||c>e.far))return{distance:c,point:Yl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const jl=new w,Kl=new w;class Pp extends Wc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)jl.fromBufferAttribute(t,r),Kl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+jl.distanceTo(Kl);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ip extends Wc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Lu extends Un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zl=new Ne,gc=new us,zs=new On,ks=new w;class Dp extends gt{constructor(e=new Ot,t=new Lu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(r),zs.radius+=s,e.ray.intersectsSphere(zs)===!1)return;Zl.copy(r).invert(),gc.copy(e.ray).applyMatrix4(Zl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);ks.fromBufferAttribute(u,m),Jl(ks,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)ks.fromBufferAttribute(u,g),Jl(ks,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jl(i,e,t,n,r,s,o){const a=gc.distanceSqToPoint(i);if(a<t){const l=new w;gc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Uu extends Ct{constructor(e,t,n=Gi,r,s,o,a=Gt,l=Gt,c,h=ts,u=1){if(h!==ts&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nu extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xc extends Ot{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;T(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function T(){const v=new w,A=new w;let R=0;const C=(t-e)/n;for(let D=0;D<=s;D++){const y=[],S=D/s,P=S*(t-e)+e;for(let U=0;U<=r;U++){const O=U/r,z=O*l+a,k=Math.sin(z),W=Math.cos(z);A.x=P*k,A.y=-S*n+m,A.z=P*W,u.push(A.x,A.y,A.z),v.set(k,C,W).normalize(),d.push(v.x,v.y,v.z),f.push(O,1-S),y.push(g++)}_.push(y)}for(let D=0;D<r;D++)for(let y=0;y<s;y++){const S=_[y][D],P=_[y+1][D],U=_[y+1][D+1],O=_[y][D+1];(e>0||y!==0)&&(h.push(S,P,O),R+=3),(t>0||y!==s-1)&&(h.push(P,U,O),R+=3)}c.addGroup(p,R,0),p+=R}function E(v){const A=g,R=new Xe,C=new w;let D=0;const y=v===!0?e:t,S=v===!0?1:-1;for(let U=1;U<=r;U++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const P=g;for(let U=0;U<=r;U++){const z=U/r*l+a,k=Math.cos(z),W=Math.sin(z);C.x=y*W,C.y=m*S,C.z=y*k,u.push(C.x,C.y,C.z),d.push(0,S,0),R.x=k*.5+.5,R.y=W*.5*S+.5,f.push(R.x,R.y),g++}for(let U=0;U<r;U++){const O=A+U,z=P+U;v===!0?h.push(z,z+1,O):h.push(z+1,z,O),D+=3}c.addGroup(p,D,v===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mo extends Ot{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const T=p*d-o;for(let E=0;E<c;E++){const v=E*u-s;g.push(v,-T,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const E=T+c*p,v=T+c*(p+1),A=T+1+c*(p+1),R=T+1+c*p;f.push(E,v,R),f.push(v,A,R)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.widthSegments,e.heightSegments)}}class yo extends Ot{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new w,d=new w,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const T=[],E=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const R=A/t;u.x=-e*Math.cos(r+R*s)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(r+R*s)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+v,1-E),T.push(c++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const E=h[p][T+1],v=h[p][T],A=h[p+1][T],R=h[p+1][T+1];(p!==0||o>0)&&f.push(E,v,R),(p!==n-1||l<Math.PI)&&f.push(v,A,R)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ei extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bn extends ei{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Lp extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Up extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Hs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Np(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fp(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Ql(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Fu(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class ds{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Op extends ds{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dr,endingEnd:dr}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case fr:s=e,a=2*t-n;break;case co:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fr:o=e,l=2*n-t;break;case co:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,T=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let A=0;A!==a;++A)s[A]=p*o[h+A]+T*o[c+A]+E*o[l+A]+v*o[u+A];return s}}class Ou extends ds{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class Bp extends ds{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hs(t,this.TimeBufferType),this.values=Hs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hs(e.times,Array),values:Hs(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ou(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Op(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case is:t=this.InterpolantFactoryMethodDiscrete;break;case rs:t=this.InterpolantFactoryMethodLinear;break;case Io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return rs;case this.InterpolantFactoryMethodSmooth:return Io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Np(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Io,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=rs;class Rr extends wn{constructor(e,t,n){super(e,t,n)}}Rr.prototype.ValueTypeName="bool";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=is;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Bu extends wn{constructor(e,t,n,r){super(e,t,n,r)}}Bu.prototype.ValueTypeName="color";class br extends wn{constructor(e,t,n,r){super(e,t,n,r)}}br.prototype.ValueTypeName="number";class zp extends ds{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Ft.slerpFlat(s,0,o,c-a,o,c,l);return s}}class wr extends wn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new zp(this.times,this.values,this.getValueSize(),e)}}wr.prototype.ValueTypeName="quaternion";wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Cr extends wn{constructor(e,t,n){super(e,t,n)}}Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=is;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ar extends wn{constructor(e,t,n,r){super(e,t,n,r)}}Ar.prototype.ValueTypeName="vector";class _c{constructor(e="",t=-1,n=[],r=Nc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=yn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Hp(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(wn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=Fp(l);l=Ql(l,1,h),c=Ql(c,1,h),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new br(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=r[u];d||(r[u]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Fu(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let T=0;T!==d[g].morphTargets.length;++T){const E=d[g];m.push(E.time),p.push(E.morphTarget===_?1:0)}r.push(new br(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ar,f+".position",d,"pos",r),n(wr,f+".quaternion",d,"rot",r),n(Ar,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function kp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return br;case"vector":case"vector2":case"vector3":case"vector4":return Ar;case"color":return Bu;case"quaternion":return wr;case"bool":case"boolean":return Rr;case"string":return Cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Hp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=kp(i.type);if(i.times===void 0){const t=[],n=[];Fu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Kn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Vp{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Gp=new Vp;class Pr{constructor(e){this.manager=e!==void 0?e:Gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Pr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class Wp extends Error{constructor(e,t){super(e),this.response=t}}class zu extends Pr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Kn.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:r});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Xn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){T();function T(){u.read().then(({done:E,value:v})=>{if(E)p.close();else{_+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,C=h.length;R<C;R++){const D=h[R];D.onProgress&&D.onProgress(A)}p.enqueue(v),T()}},E=>{p.error(E)})}}});return new Response(m)}else throw new Wp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Kn.add(`file:${e}`,c);const h=Xn[e];delete Xn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Xn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Xn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const hr=new WeakMap;class Xp extends Pr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Kn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=hr.get(o);u===void 0&&(u=[],hr.set(o,u)),u.push({onLoad:t,onError:r})}return o}const a=ss("img");function l(){h(),t&&t(this);const u=hr.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}hr.delete(this),s.manager.itemEnd(e)}function c(u){h(),r&&r(u),Kn.remove(`image:${e}`);const d=hr.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}hr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class qp extends Pr{constructor(e){super(e)}load(e,t,n,r){const s=new Ct,o=new Xp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class So extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $p extends So{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ia=new Ne,eh=new w,th=new w;class qc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gc,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(eh),th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(th),t.updateMatrixWorld(),ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Yp extends qc{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Er*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jp extends So{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Yp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const nh=new Ne,Hr=new w,ra=new w;class Kp extends qc{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Hr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hr),ra.copy(n.position),ra.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ra),n.updateMatrixWorld(),r.makeTranslation(-Hr.x,-Hr.y,-Hr.z),nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh,n.coordinateSystem,n.reversedDepth)}}class ku extends So{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Kp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $c extends Au{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zp extends qc{constructor(){super(new $c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hu extends So{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Zp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const sa=new WeakMap;class Jp extends Pr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Kn.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(sa.has(o)===!0)r&&r(sa.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Kn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),sa.set(l,c),Kn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Kn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Qp extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class em{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class tm{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){Ft.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const o=this._workIndex*s;Ft.multiplyQuaternionsFlat(e,o,e,t,e,n),Ft.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*r}}}const Yc="\\[\\]\\.:\\/",nm=new RegExp("["+Yc+"]","g"),jc="[^"+Yc+"]",im="[^"+Yc.replace("\\.","")+"]",rm=/((?:WC+[\/:])*)/.source.replace("WC",jc),sm=/(WCOD+)?/.source.replace("WCOD",im),om=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jc),am=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jc),cm=new RegExp("^"+rm+sm+om+am+"$"),lm=["material","materials","bones","map"];class hm{constructor(e,t,n){const r=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nm,"")}static parseTrackName(e){const t=cm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);lm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=hm;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class um{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:dr,endingEnd:dr};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=vf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case yf:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Nc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const o=n===Mf;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(n===xf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=fr,r.endingEnd=fr):(e?r.endingStart=this.zeroSlopeAtStart?fr:dr:r.endingStart=co,t?r.endingEnd=this.zeroSlopeAtEnd?fr:dr:r.endingEnd=co)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const dm=new Float32Array(1);class fm extends $i{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=r[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new tm(tt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ou(new Float32Array(2),new Float32Array(2),1,dm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?_c.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Nc),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new um(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?_c.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const ih=new Ne;class pm{constructor(e,t,n=0,r=1/0){this.ray=new us(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ih.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ih),this}intersectObject(e,t=!0,n=[]){return xc(e,this,n,t),n.sort(rh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)xc(e[r],this,n,t);return n.sort(rh),n}}function rh(i,e){return i.distance-e.distance}function xc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)xc(s[o],e,t,!0)}}function sh(i,e,t,n){const r=mm(n);switch(t){case mu:return i*e;case Ic:return i*e/r.components*r.byteLength;case Dc:return i*e/r.components*r.byteLength;case _u:return i*e*2/r.components*r.byteLength;case Lc:return i*e*2/r.components*r.byteLength;case gu:return i*e*3/r.components*r.byteLength;case sn:return i*e*4/r.components*r.byteLength;case Uc:return i*e*4/r.components*r.byteLength;case Qs:case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:case Va:return Math.max(i,16)*Math.max(e,8)/4;case za:case Ha:return Math.max(i,8)*Math.max(e,8)/2;case Ga:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oc:case ac:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lc:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uc:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mm(i){switch(i){case Sn:case uu:return{byteLength:1,components:1};case Qr:case du:case hs:return{byteLength:2,components:1};case Cc:case Pc:return{byteLength:2,components:4};case Gi:case Rc:case Mn:return{byteLength:4,components:1};case fu:case pu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ac);function Vu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function gm(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var _m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Em=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Im=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,km=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$m="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ug=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_g=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$g=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,t0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,h0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,u0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,T0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,N0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,B0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,H0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Y0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:_m,alphahash_pars_fragment:xm,alphamap_fragment:vm,alphamap_pars_fragment:Mm,alphatest_fragment:ym,alphatest_pars_fragment:Sm,aomap_fragment:Em,aomap_pars_fragment:Tm,batching_pars_vertex:bm,batching_vertex:wm,begin_vertex:Am,beginnormal_vertex:Rm,bsdfs:Cm,iridescence_fragment:Pm,bumpmap_pars_fragment:Im,clipping_planes_fragment:Dm,clipping_planes_pars_fragment:Lm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Nm,color_fragment:Fm,color_pars_fragment:Om,color_pars_vertex:Bm,color_vertex:zm,common:km,cube_uv_reflection_fragment:Hm,defaultnormal_vertex:Vm,displacementmap_pars_vertex:Gm,displacementmap_vertex:Wm,emissivemap_fragment:Xm,emissivemap_pars_fragment:qm,colorspace_fragment:$m,colorspace_pars_fragment:Ym,envmap_fragment:jm,envmap_common_pars_fragment:Km,envmap_pars_fragment:Zm,envmap_pars_vertex:Jm,envmap_physical_pars_fragment:lg,envmap_vertex:Qm,fog_vertex:eg,fog_pars_vertex:tg,fog_fragment:ng,fog_pars_fragment:ig,gradientmap_pars_fragment:rg,lightmap_pars_fragment:sg,lights_lambert_fragment:og,lights_lambert_pars_fragment:ag,lights_pars_begin:cg,lights_toon_fragment:hg,lights_toon_pars_fragment:ug,lights_phong_fragment:dg,lights_phong_pars_fragment:fg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:gg,lights_fragment_maps:_g,lights_fragment_end:xg,logdepthbuf_fragment:vg,logdepthbuf_pars_fragment:Mg,logdepthbuf_pars_vertex:yg,logdepthbuf_vertex:Sg,map_fragment:Eg,map_pars_fragment:Tg,map_particle_fragment:bg,map_particle_pars_fragment:wg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:Rg,morphinstance_vertex:Cg,morphcolor_vertex:Pg,morphnormal_vertex:Ig,morphtarget_pars_vertex:Dg,morphtarget_vertex:Lg,normal_fragment_begin:Ug,normal_fragment_maps:Ng,normal_pars_fragment:Fg,normal_pars_vertex:Og,normal_vertex:Bg,normalmap_pars_fragment:zg,clearcoat_normal_fragment_begin:kg,clearcoat_normal_fragment_maps:Hg,clearcoat_pars_fragment:Vg,iridescence_pars_fragment:Gg,opaque_fragment:Wg,packing:Xg,premultiplied_alpha_fragment:qg,project_vertex:$g,dithering_fragment:Yg,dithering_pars_fragment:jg,roughnessmap_fragment:Kg,roughnessmap_pars_fragment:Zg,shadowmap_pars_fragment:Jg,shadowmap_pars_vertex:Qg,shadowmap_vertex:e0,shadowmask_pars_fragment:t0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:r0,skinnormal_vertex:s0,specularmap_fragment:o0,specularmap_pars_fragment:a0,tonemapping_fragment:c0,tonemapping_pars_fragment:l0,transmission_fragment:h0,transmission_pars_fragment:u0,uv_pars_fragment:d0,uv_pars_vertex:f0,uv_vertex:p0,worldpos_vertex:m0,background_vert:g0,background_frag:_0,backgroundCube_vert:x0,backgroundCube_frag:v0,cube_vert:M0,cube_frag:y0,depth_vert:S0,depth_frag:E0,distanceRGBA_vert:T0,distanceRGBA_frag:b0,equirect_vert:w0,equirect_frag:A0,linedashed_vert:R0,linedashed_frag:C0,meshbasic_vert:P0,meshbasic_frag:I0,meshlambert_vert:D0,meshlambert_frag:L0,meshmatcap_vert:U0,meshmatcap_frag:N0,meshnormal_vert:F0,meshnormal_frag:O0,meshphong_vert:B0,meshphong_frag:z0,meshphysical_vert:k0,meshphysical_frag:H0,meshtoon_vert:V0,meshtoon_frag:G0,points_vert:W0,points_frag:X0,shadow_vert:q0,shadow_frag:$0,sprite_vert:Y0,sprite_frag:j0},oe={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Pn={basic:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new he(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:kt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:kt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new he(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:kt([oe.points,oe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:kt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:kt([oe.common,oe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:kt([oe.sprite,oe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:kt([oe.common,oe.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:kt([oe.lights,oe.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Pn.physical={uniforms:kt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Vs={r:0,b:0,g:0},wi=new Nn,K0=new Ne;function Z0(i,e,t,n,r,s,o){const a=new he(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function _(E){let v=!1;const A=g(E);A===null?p(a,l):A&&A.isColor&&(p(A,1),v=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===vo)?(h===void 0&&(h=new rt(new Xi(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Tr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),wi.copy(v.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(wi)),h.material.toneMapped=Ye.getTransfer(A.colorSpace)!==at,(u!==A||d!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new rt(new Mo(2,2),new Qn({name:"BackgroundMaterial",uniforms:Tr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(A.colorSpace)!==at,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,v){E.getRGB(Vs,wu(i)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,v,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m,dispose:T}}function J0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(S,P,U,O,z){let k=!1;const W=u(O,U,P);s!==W&&(s=W,c(s.object)),k=f(S,O,U,z),k&&g(S,O,U,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(S,P,U,O),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,U){const O=U.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let k=z[P.id];k===void 0&&(k={},z[P.id]=k);let W=k[O];return W===void 0&&(W=d(l()),k[O]=W),W}function d(S){const P=[],U=[],O=[];for(let z=0;z<t;z++)P[z]=0,U[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:O,object:S,attributes:{},index:null}}function f(S,P,U,O){const z=s.attributes,k=P.attributes;let W=0;const q=U.getAttributes();for(const H in q)if(q[H].location>=0){const re=z[H];let ve=k[H];if(ve===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),re===void 0||re.attribute!==ve||ve&&re.data!==ve.data)return!0;W++}return s.attributesNum!==W||s.index!==O}function g(S,P,U,O){const z={},k=P.attributes;let W=0;const q=U.getAttributes();for(const H in q)if(q[H].location>=0){let re=k[H];re===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(re=S.instanceColor));const ve={};ve.attribute=re,re&&re.data&&(ve.data=re.data),z[H]=ve,W++}s.attributes=z,s.attributesNum=W,s.index=O}function _(){const S=s.newAttributes;for(let P=0,U=S.length;P<U;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const U=s.newAttributes,O=s.enabledAttributes,z=s.attributeDivisors;U[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),z[S]!==P&&(i.vertexAttribDivisor(S,P),z[S]=P)}function T(){const S=s.newAttributes,P=s.enabledAttributes;for(let U=0,O=P.length;U<O;U++)P[U]!==S[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function E(S,P,U,O,z,k,W){W===!0?i.vertexAttribIPointer(S,P,U,z,k):i.vertexAttribPointer(S,P,U,O,z,k)}function v(S,P,U,O){_();const z=O.attributes,k=U.getAttributes(),W=P.defaultAttributeValues;for(const q in k){const H=k[q];if(H.location>=0){let J=z[q];if(J===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const re=J.normalized,ve=J.itemSize,Be=e.get(J);if(Be===void 0)continue;const Ze=Be.buffer,ht=Be.type,Je=Be.bytesPerElement,Y=ht===i.INT||ht===i.UNSIGNED_INT||J.gpuType===Rc;if(J.isInterleavedBufferAttribute){const Z=J.data,fe=Z.stride,Ie=J.offset;if(Z.isInstancedInterleavedBuffer){for(let Te=0;Te<H.locationSize;Te++)p(H.location+Te,Z.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Te=0;Te<H.locationSize;Te++)m(H.location+Te);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Te=0;Te<H.locationSize;Te++)E(H.location+Te,ve/H.locationSize,ht,re,fe*Je,(Ie+ve/H.locationSize*Te)*Je,Y)}else{if(J.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)p(H.location+Z,J.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Z=0;Z<H.locationSize;Z++)E(H.location+Z,ve/H.locationSize,ht,re,ve*Je,ve/H.locationSize*Z*Je,Y)}}else if(W!==void 0){const re=W[q];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(H.location,re);break;case 3:i.vertexAttrib3fv(H.location,re);break;case 4:i.vertexAttrib4fv(H.location,re);break;default:i.vertexAttrib1fv(H.location,re)}}}}T()}function A(){D();for(const S in n){const P=n[S];for(const U in P){const O=P[U];for(const z in O)h(O[z].object),delete O[z];delete P[U]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const U in P){const O=P[U];for(const z in O)h(O[z].object),delete O[z];delete P[U]}delete n[S.id]}function C(S){for(const P in n){const U=n[P];if(U[S.id]===void 0)continue;const O=U[S.id];for(const z in O)h(O[z].object),delete O[z];delete U[S.id]}}function D(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Q0(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function e_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mn&&!D)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:A,maxSamples:R}}function t_(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Li,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||r;return r=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const T=s?0:n,E=T*4;let v=p.clippingState||null;l.value=v,v=h(g,d,E,f);for(let A=0;A!==E;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=f;E!==_;++E,v+=4)o.copy(u[E]).applyMatrix4(T,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function n_(i){let e=new WeakMap;function t(o,a){return a===Oa?o.mapping=yr:a===Ba&&(o.mapping=Sr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oa||a===Ba)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Mp(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const pr=4,oh=[.125,.215,.35,.446,.526,.582],Fi=20,oa=new $c,ah=new he;let aa=null,ca=0,la=0,ha=!1;const Ui=(1+Math.sqrt(5))/2,ur=1/Ui,ch=[new w(-Ui,ur,0),new w(Ui,ur,0),new w(-ur,0,Ui),new w(ur,0,Ui),new w(0,Ui,-ur),new w(0,Ui,ur),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],i_=new w;class lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=i_}=s;aa=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa,ca,la),this._renderer.xr.enabled=ha,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:hs,format:sn,colorSpace:Wt,depthBuffer:!1},r=hh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r_(s)),this._blurMaterial=s_(s,e,t)}return r}_compileMaterial(e){const t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,n,r,s){const l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ah),u.toneMapping=fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const _=new Bi({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new rt(new Xi,_);let p=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,p=!0):(_.color.copy(ah),p=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[E],s.y,s.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[E]));const A=this._cubeSize;Gs(r,v*A,E>2?A:0,A,A),u.setRenderTarget(r),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===yr||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,oa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ch[(r-s-1)%ch.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new rt(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Fi;m>Fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const p=[];let T=0;for(let C=0;C<Fi;++C){const D=C/_,y=Math.exp(-D*D/2);p.push(y),C===0?T+=y:C<m&&(T+=2*y)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const v=this._sizeLods[r],A=3*v*(r>E-pr?r-E+pr:0),R=4*(this._cubeSize-v);Gs(t,A,R,3*v,2*v),l.setRenderTarget(t),l.render(u,oa)}}function r_(i){const e=[],t=[],n=[];let r=i;const s=i-pr+1+oh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-pr?l=oh[o-i+pr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*f),E=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,D=R>2?0:-1,y=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];T.set(y,_*g*R),E.set(d,m*g*R);const S=[R,R,R,R,R,R];v.set(S,p*g*R)}const A=new Ot;A.setAttribute("position",new Pt(T,_)),A.setAttribute("uv",new Pt(E,m)),A.setAttribute("faceIndex",new Pt(v,p)),e.push(A),r>pr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hh(i,e,t){const n=new Wi(i,e,t);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function s_(i,e,t){const n=new Float32Array(Fi),r=new w(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function uh(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function dh(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function o_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Oa||l===Ba,h=l===yr||l===Sr;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new lh(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new lh(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function a_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&os("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function c_(i,e,t,n){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const T=f.array;_=f.version;for(let E=0,v=T.length;E<v;E+=3){const A=T[E+0],R=T[E+1],C=T[E+2];d.push(A,R,R,C,C,A)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,v=T.length/3-1;E<v;E+=3){const A=E+0,R=E+1,C=E+2;d.push(A,R,R,C,C,A)}}else return;const m=new(yu(d)?bu:Tu)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function l_(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*_[T];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function h_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function u_(i,e,t){const n=new WeakMap,r=new Ke;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*R*4*u),D=new Su(C,A,R,u);D.type=Mn,D.needsUpdate=!0;const y=v*4;for(let P=0;P<u;P++){const U=p[P],O=T[P],z=E[P],k=A*R*4*P;for(let W=0;W<U.count;W++){const q=W*y;g===!0&&(r.fromBufferAttribute(U,W),C[k+q+0]=r.x,C[k+q+1]=r.y,C[k+q+2]=r.z,C[k+q+3]=0),_===!0&&(r.fromBufferAttribute(O,W),C[k+q+4]=r.x,C[k+q+5]=r.y,C[k+q+6]=r.z,C[k+q+7]=0),m===!0&&(r.fromBufferAttribute(z,W),C[k+q+8]=r.x,C[k+q+9]=r.y,C[k+q+10]=r.z,C[k+q+11]=z.itemSize===4?r.w:1)}}d={count:u,texture:D,size:new Xe(A,R)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function d_(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Gu=new Ct,fh=new Uu(1,1),Wu=new Su,Xu=new ip,qu=new Ru,ph=[],mh=[],gh=new Float32Array(16),_h=new Float32Array(9),xh=new Float32Array(4);function Ir(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ph[r];if(s===void 0&&(s=new Float32Array(r),ph[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Eo(i,e){let t=mh[e];t===void 0&&(t=new Int32Array(e),mh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function f_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function p_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function m_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function g_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function __(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,n))return;xh.set(n),i.uniformMatrix2fv(this.addr,!1,xh),bt(t,n)}}function x_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,n))return;_h.set(n),i.uniformMatrix3fv(this.addr,!1,_h),bt(t,n)}}function v_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Tt(t,n))return;gh.set(n),i.uniformMatrix4fv(this.addr,!1,gh),bt(t,n)}}function M_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function S_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function E_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function T_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function b_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function w_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function A_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function R_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(fh.compareFunction=Mu,s=fh):s=Gu,t.setTexture2D(e||s,r)}function C_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Xu,r)}function P_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||qu,r)}function I_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Wu,r)}function D_(i){switch(i){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return __;case 35675:return x_;case 35676:return v_;case 5124:case 35670:return M_;case 35667:case 35671:return y_;case 35668:case 35672:return S_;case 35669:case 35673:return E_;case 5125:return T_;case 36294:return b_;case 36295:return w_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return I_}}function L_(i,e){i.uniform1fv(this.addr,e)}function U_(i,e){const t=Ir(e,this.size,2);i.uniform2fv(this.addr,t)}function N_(i,e){const t=Ir(e,this.size,3);i.uniform3fv(this.addr,t)}function F_(i,e){const t=Ir(e,this.size,4);i.uniform4fv(this.addr,t)}function O_(i,e){const t=Ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function B_(i,e){const t=Ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function z_(i,e){const t=Ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function k_(i,e){i.uniform1iv(this.addr,e)}function H_(i,e){i.uniform2iv(this.addr,e)}function V_(i,e){i.uniform3iv(this.addr,e)}function G_(i,e){i.uniform4iv(this.addr,e)}function W_(i,e){i.uniform1uiv(this.addr,e)}function X_(i,e){i.uniform2uiv(this.addr,e)}function q_(i,e){i.uniform3uiv(this.addr,e)}function $_(i,e){i.uniform4uiv(this.addr,e)}function Y_(i,e,t){const n=this.cache,r=e.length,s=Eo(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Gu,s[o])}function j_(i,e,t){const n=this.cache,r=e.length,s=Eo(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Xu,s[o])}function K_(i,e,t){const n=this.cache,r=e.length,s=Eo(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||qu,s[o])}function Z_(i,e,t){const n=this.cache,r=e.length,s=Eo(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Wu,s[o])}function J_(i){switch(i){case 5126:return L_;case 35664:return U_;case 35665:return N_;case 35666:return F_;case 35674:return O_;case 35675:return B_;case 35676:return z_;case 5124:case 35670:return k_;case 35667:case 35671:return H_;case 35668:case 35672:return V_;case 35669:case 35673:return G_;case 5125:return W_;case 36294:return X_;case 36295:return q_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return Z_}}class Q_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=D_(t.type)}}class ex{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J_(t.type)}}class tx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function vh(i,e){i.seq.push(e),i.map[e.id]=e}function nx(i,e,t){const n=i.name,r=n.length;for(ua.lastIndex=0;;){const s=ua.exec(n),o=ua.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){vh(t,c===void 0?new Q_(a,i,e):new ex(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new tx(a),vh(t,u)),t=u}}}class io{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);nx(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Mh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ix=37297;let rx=0;function sx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const yh=new Oe;function ox(i){Ye._getMatrix(yh,Ye.workingColorSpace,i);const e=`mat3( ${yh.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case lo:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+sx(i.getShaderSource(e),a)}else return s}function ax(i,e){const t=ox(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cx(i,e){let t;switch(e){case uf:t="Linear";break;case df:t="Reinhard";break;case ff:t="Cineon";break;case cu:t="ACESFilmic";break;case mf:t="AgX";break;case gf:t="Neutral";break;case pf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ws=new w;function lx(){Ye.getLuminanceCoefficients(Ws);const i=Ws.x.toFixed(4),e=Ws.y.toFixed(4),t=Ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function ux(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $r(i){return i!==""}function Eh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Th(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(i){return i.replace(fx,mx)}const px=new Map;function mx(i,e){let t=ke[e];if(t===void 0){const n=px.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vc(t)}const gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(i){return i.replace(gx,_x)}function _x(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===su?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ou?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function vx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yr:case Sr:e="ENVMAP_TYPE_CUBE";break;case vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mx(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Sr&&(e="ENVMAP_MODE_REFRACTION"),e}function yx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case au:e="ENVMAP_BLENDING_MULTIPLY";break;case lf:e="ENVMAP_BLENDING_MIX";break;case hf:e="ENVMAP_BLENDING_ADD";break}return e}function Sx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ex(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=xx(t),c=vx(t),h=Mx(t),u=yx(t),d=Sx(t),f=hx(t),g=ux(s),_=r.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($r).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($r).join(`
`),p.length>0&&(p+=`
`)):(m=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),p=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?ke.tonemapping_pars_fragment:"",t.toneMapping!==fi?cx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,ax("linearToOutputTexel",t.outputColorSpace),lx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),o=vc(o),o=Eh(o,t),o=Th(o,t),a=vc(a),a=Eh(a,t),a=Th(a,t),o=bh(o),a=bh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+o,v=T+p+a,A=Mh(r,r.VERTEX_SHADER,E),R=Mh(r,r.FRAGMENT_SHADER,v);r.attachShader(_,A),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(P){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(_)||"",O=r.getShaderInfoLog(A)||"",z=r.getShaderInfoLog(R)||"",k=U.trim(),W=O.trim(),q=z.trim();let H=!0,J=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,A,R);else{const re=Sh(r,A,"vertex"),ve=Sh(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+re+`
`+ve)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(W===""||q==="")&&(J=!1);J&&(P.diagnostics={runnable:H,programLog:k,vertexShader:{log:W,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(A),r.deleteShader(R),D=new io(r,_),y=dx(r,_)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,ix)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=R,this}let Tx=0;class bx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wx(e),t.set(e,n)),n}}class wx{constructor(e){this.id=Tx++,this.code=e,this.usedTimes=0}}function Ax(i,e,t,n,r,s,o){const a=new Bc,l=new bx,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,P,U,O){const z=U.fog,k=O.geometry,W=y.isMeshStandardMaterial?U.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),H=q&&q.mapping===vo?q.image.height:null,J=g[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const re=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ve=re!==void 0?re.length:0;let Be=0;k.morphAttributes.position!==void 0&&(Be=1),k.morphAttributes.normal!==void 0&&(Be=2),k.morphAttributes.color!==void 0&&(Be=3);let Ze,ht,Je,Y;if(J){const Qe=Pn[J];Ze=Qe.vertexShader,ht=Qe.fragmentShader}else Ze=y.vertexShader,ht=y.fragmentShader,l.update(y),Je=l.getVertexShaderID(y),Y=l.getFragmentShaderID(y);const Z=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Ie=O.isInstancedMesh===!0,Te=O.isBatchedMesh===!0,$e=!!y.map,Lt=!!y.matcap,I=!!q,pt=!!y.aoMap,Ue=!!y.lightMap,Ce=!!y.bumpMap,ge=!!y.normalMap,mt=!!y.displacementMap,_e=!!y.emissiveMap,ze=!!y.metalnessMap,wt=!!y.roughnessMap,St=y.anisotropy>0,b=y.clearcoat>0,x=y.dispersion>0,B=y.iridescence>0,$=y.sheen>0,K=y.transmission>0,X=St&&!!y.anisotropyMap,Ee=b&&!!y.clearcoatMap,ie=b&&!!y.clearcoatNormalMap,Me=b&&!!y.clearcoatRoughnessMap,ye=B&&!!y.iridescenceMap,te=B&&!!y.iridescenceThicknessMap,le=$&&!!y.sheenColorMap,Re=$&&!!y.sheenRoughnessMap,Se=!!y.specularMap,ae=!!y.specularColorMap,Fe=!!y.specularIntensityMap,L=K&&!!y.transmissionMap,ne=K&&!!y.thicknessMap,se=!!y.gradientMap,de=!!y.alphaMap,Q=y.alphaTest>0,j=!!y.alphaHash,me=!!y.extensions;let De=fi;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(De=i.toneMapping);const ut={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Ze,fragmentShader:ht,defines:y.defines,customVertexShaderID:Je,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Te,batchingColor:Te&&O._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,instancingMorph:Ie&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Wt,alphaToCoverage:!!y.alphaToCoverage,map:$e,matcap:Lt,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:H,aoMap:pt,lightMap:Ue,bumpMap:Ce,normalMap:ge,displacementMap:d&&mt,emissiveMap:_e,normalMapObjectSpace:ge&&y.normalMapType===bf,normalMapTangentSpace:ge&&y.normalMapType===vu,metalnessMap:ze,roughnessMap:wt,anisotropy:St,anisotropyMap:X,clearcoat:b,clearcoatMap:Ee,clearcoatNormalMap:ie,clearcoatRoughnessMap:Me,dispersion:x,iridescence:B,iridescenceMap:ye,iridescenceThicknessMap:te,sheen:$,sheenColorMap:le,sheenRoughnessMap:Re,specularMap:Se,specularColorMap:ae,specularIntensityMap:Fe,transmission:K,transmissionMap:L,thicknessMap:ne,gradientMap:se,opaque:y.transparent===!1&&y.blending===gr&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:Q,alphaHash:j,combine:y.combine,mapUv:$e&&_(y.map.channel),aoMapUv:pt&&_(y.aoMap.channel),lightMapUv:Ue&&_(y.lightMap.channel),bumpMapUv:Ce&&_(y.bumpMap.channel),normalMapUv:ge&&_(y.normalMap.channel),displacementMapUv:mt&&_(y.displacementMap.channel),emissiveMapUv:_e&&_(y.emissiveMap.channel),metalnessMapUv:ze&&_(y.metalnessMap.channel),roughnessMapUv:wt&&_(y.roughnessMap.channel),anisotropyMapUv:X&&_(y.anisotropyMap.channel),clearcoatMapUv:Ee&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:le&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(y.sheenRoughnessMap.channel),specularMapUv:Se&&_(y.specularMap.channel),specularColorMapUv:ae&&_(y.specularColorMap.channel),specularIntensityMapUv:Fe&&_(y.specularIntensityMap.channel),transmissionMapUv:L&&_(y.transmissionMap.channel),thicknessMapUv:ne&&_(y.thicknessMap.channel),alphaMapUv:de&&_(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ge||St),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&($e||de),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:O.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:$e&&y.map.isVideoTexture===!0&&Ye.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:_e&&y.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xn,flipSided:y.side===Vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:me&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&y.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)S.push(P),S.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(T(S,y),E(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function T(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function E(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const S=g[y.type];let P;if(S){const U=Pn[S];P=gp.clone(U.uniforms)}else P=y.uniforms;return P}function A(y,S){let P;for(let U=0,O=h.length;U<O;U++){const z=h[U];if(z.cacheKey===S){P=z,++P.usedTimes;break}}return P===void 0&&(P=new Ex(i,S,y,s),h.push(P)),P}function R(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function C(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:D}}function Rx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Cx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ah(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Cx),n.length>1&&n.sort(d||Ah),r.length>1&&r.sort(d||Ah)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Px(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Rh,i.set(n,[o])):r>=s.length?(o=new Rh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ix(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new he};break;case"SpotLight":t={position:new w,direction:new w,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function Dx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Lx=0;function Ux(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Nx(i){const e=new Ix,t=Dx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const r=new w,s=new Ne,o=new Ne;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,T=0,E=0,v=0,A=0,R=0,C=0;c.sort(Ux);for(let y=0,S=c.length;y<S;y++){const P=c[y],U=P.color,O=P.intensity,z=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=U.r*O,u+=U.g*O,d+=U.b*O;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],O);C++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,H=t.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=P.shadow.matrix,T++}n.directional[f]=W,f++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(U).multiplyScalar(O),W.distance=z,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const q=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,q.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[_]=q.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=k,v++}_++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(U).multiplyScalar(O),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const q=P.shadow,H=t.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(O),W.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==v||D.numSpotMaps!==A||D.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=v,D.numSpotMaps=A,D.numLightProbes=C,n.version=Lx++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const E=c[p];if(E.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(E.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ch(i){const e=new Nx(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Fx(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ch(i),e.set(r,[a])):s>=o.length?(a=new Ch(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zx(i,e,t){let n=new Gc;const r=new Xe,s=new Xe,o=new Ke,a=new Lp({depthPacking:Tf}),l=new Up,c={},h=t.maxTextureSize,u={[Jn]:Vt,[Vt]:Jn,[xn]:xn},d=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Ox,fragmentShader:Bx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let p=this.type;this.render=function(R,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(di),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=p!==qn&&this.type===qn,z=p===qn&&this.type!==qn;for(let k=0,W=R.length;k<W;k++){const q=R[k],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const J=H.getFrameExtents();if(r.multiply(J),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/J.x),r.x=s.x*J.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/J.y),r.y=s.y*J.y,H.mapSize.y=s.y)),H.map===null||O===!0||z===!0){const ve=this.type!==qn?{minFilter:Gt,magFilter:Gt}:{};H.map!==null&&H.map.dispose(),H.map=new Wi(r.x,r.y,ve),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const re=H.getViewportCount();for(let ve=0;ve<re;ve++){const Be=H.getViewport(ve);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),U.viewport(o),H.updateMatrices(q,ve),n=H.getFrustum(),v(C,D,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===qn&&T(H,D),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,P)};function T(R,C){const D=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Wi(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,D,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,D,f,_,null)}function E(R,C,D,y){let S=null;const P=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)S=P;else if(S=D.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=S.uuid,O=C.uuid;let z=c[U];z===void 0&&(z={},c[U]=z);let k=z[O];k===void 0&&(k=S.clone(),z[O]=k,C.addEventListener("dispose",A)),S=k}if(S.visible=C.visible,S.wireframe=C.wireframe,y===qn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=i.properties.get(S);U.light=D}return S}function v(R,C,D,y,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===qn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const O=e.update(R),z=R.material;if(Array.isArray(z)){const k=O.groups;for(let W=0,q=k.length;W<q;W++){const H=k[W],J=z[H.materialIndex];if(J&&J.visible){const re=E(R,J,y,S);R.onBeforeShadow(i,R,C,D,O,re,H),i.renderBufferDirect(D,null,O,re,R,H),R.onAfterShadow(i,R,C,D,O,re,H)}}}else if(z.visible){const k=E(R,z,y,S);R.onBeforeShadow(i,R,C,D,O,k,null),i.renderBufferDirect(D,null,O,k,R,null),R.onAfterShadow(i,R,C,D,O,k,null)}}const U=R.children;for(let O=0,z=U.length;O<z;O++)v(U[O],C,D,y,S)}function A(R){R.target.removeEventListener("dispose",A);for(const D in c){const y=c[D],S=R.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const kx={[Pa]:Ia,[Da]:Na,[La]:Fa,[Mr]:Ua,[Ia]:Pa,[Na]:Da,[Fa]:La,[Ua]:Mr};function Hx(i,e){function t(){let L=!1;const ne=new Ke;let se=null;const de=new Ke(0,0,0,0);return{setMask:function(Q){se!==Q&&!L&&(i.colorMask(Q,Q,Q,Q),se=Q)},setLocked:function(Q){L=Q},setClear:function(Q,j,me,De,ut){ut===!0&&(Q*=De,j*=De,me*=De),ne.set(Q,j,me,De),de.equals(ne)===!1&&(i.clearColor(Q,j,me,De),de.copy(ne))},reset:function(){L=!1,se=null,de.set(-1,0,0,0)}}}function n(){let L=!1,ne=!1,se=null,de=null,Q=null;return{setReversed:function(j){if(ne!==j){const me=e.get("EXT_clip_control");j?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ne=j;const De=Q;Q=null,this.setClear(De)}},getReversed:function(){return ne},setTest:function(j){j?Z(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(j){se!==j&&!L&&(i.depthMask(j),se=j)},setFunc:function(j){if(ne&&(j=kx[j]),de!==j){switch(j){case Pa:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case Da:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case La:i.depthFunc(i.EQUAL);break;case Ua:i.depthFunc(i.GEQUAL);break;case Na:i.depthFunc(i.GREATER);break;case Fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=j}},setLocked:function(j){L=j},setClear:function(j){Q!==j&&(ne&&(j=1-j),i.clearDepth(j),Q=j)},reset:function(){L=!1,se=null,de=null,Q=null,ne=!1}}}function r(){let L=!1,ne=null,se=null,de=null,Q=null,j=null,me=null,De=null,ut=null;return{setTest:function(Qe){L||(Qe?Z(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(Qe){ne!==Qe&&!L&&(i.stencilMask(Qe),ne=Qe)},setFunc:function(Qe,zn,Rn){(se!==Qe||de!==zn||Q!==Rn)&&(i.stencilFunc(Qe,zn,Rn),se=Qe,de=zn,Q=Rn)},setOp:function(Qe,zn,Rn){(j!==Qe||me!==zn||De!==Rn)&&(i.stencilOp(Qe,zn,Rn),j=Qe,me=zn,De=Rn)},setLocked:function(Qe){L=Qe},setClear:function(Qe){ut!==Qe&&(i.clearStencil(Qe),ut=Qe)},reset:function(){L=!1,ne=null,se=null,de=null,Q=null,j=null,me=null,De=null,ut=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,E=null,v=null,A=null,R=null,C=new he(0,0,0),D=0,y=!1,S=null,P=null,U=null,O=null,z=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,q=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=q>=2);let J=null,re={};const ve=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),Ze=new Ke().fromArray(ve),ht=new Ke().fromArray(Be);function Je(L,ne,se,de){const Q=new Uint8Array(4),j=i.createTexture();i.bindTexture(L,j),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let me=0;me<se;me++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ne+me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return j}const Y={};Y[i.TEXTURE_2D]=Je(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(Mr),Ce(!1),ge(pl),Z(i.CULL_FACE),pt(di);function Z(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function fe(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ie(L,ne){return u[L]!==ne?(i.bindFramebuffer(L,ne),u[L]=ne,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ne),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Te(L,ne){let se=f,de=!1;if(L){se=d.get(ne),se===void 0&&(se=[],d.set(ne,se));const Q=L.textures;if(se.length!==Q.length||se[0]!==i.COLOR_ATTACHMENT0){for(let j=0,me=Q.length;j<me;j++)se[j]=i.COLOR_ATTACHMENT0+j;se.length=Q.length,de=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,de=!0);de&&i.drawBuffers(se)}function $e(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const Lt={[Ni]:i.FUNC_ADD,[Xd]:i.FUNC_SUBTRACT,[qd]:i.FUNC_REVERSE_SUBTRACT};Lt[$d]=i.MIN,Lt[Yd]=i.MAX;const I={[jd]:i.ZERO,[Kd]:i.ONE,[Zd]:i.SRC_COLOR,[Ra]:i.SRC_ALPHA,[rf]:i.SRC_ALPHA_SATURATE,[tf]:i.DST_COLOR,[Qd]:i.DST_ALPHA,[Jd]:i.ONE_MINUS_SRC_COLOR,[Ca]:i.ONE_MINUS_SRC_ALPHA,[nf]:i.ONE_MINUS_DST_COLOR,[ef]:i.ONE_MINUS_DST_ALPHA,[sf]:i.CONSTANT_COLOR,[of]:i.ONE_MINUS_CONSTANT_COLOR,[af]:i.CONSTANT_ALPHA,[cf]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(L,ne,se,de,Q,j,me,De,ut,Qe){if(L===di){_===!0&&(fe(i.BLEND),_=!1);return}if(_===!1&&(Z(i.BLEND),_=!0),L!==Wd){if(L!==m||Qe!==y){if((p!==Ni||v!==Ni)&&(i.blendEquation(i.FUNC_ADD),p=Ni,v=Ni),Qe)switch(L){case gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ml:i.blendFunc(i.ONE,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ml:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,E=null,A=null,R=null,C.set(0,0,0),D=0,m=L,y=Qe}return}Q=Q||ne,j=j||se,me=me||de,(ne!==p||Q!==v)&&(i.blendEquationSeparate(Lt[ne],Lt[Q]),p=ne,v=Q),(se!==T||de!==E||j!==A||me!==R)&&(i.blendFuncSeparate(I[se],I[de],I[j],I[me]),T=se,E=de,A=j,R=me),(De.equals(C)===!1||ut!==D)&&(i.blendColor(De.r,De.g,De.b,ut),C.copy(De),D=ut),m=L,y=!1}function Ue(L,ne){L.side===xn?fe(i.CULL_FACE):Z(i.CULL_FACE);let se=L.side===Vt;ne&&(se=!se),Ce(se),L.blending===gr&&L.transparent===!1?pt(di):pt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const de=L.stencilWrite;a.setTest(de),de&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_e(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(L){S!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),S=L)}function ge(L){L!==Vd?(Z(i.CULL_FACE),L!==P&&(L===pl?i.cullFace(i.BACK):L===Gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),P=L}function mt(L){L!==U&&(W&&i.lineWidth(L),U=L)}function _e(L,ne,se){L?(Z(i.POLYGON_OFFSET_FILL),(O!==ne||z!==se)&&(i.polygonOffset(ne,se),O=ne,z=se)):fe(i.POLYGON_OFFSET_FILL)}function ze(L){L?Z(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function wt(L){L===void 0&&(L=i.TEXTURE0+k-1),J!==L&&(i.activeTexture(L),J=L)}function St(L,ne,se){se===void 0&&(J===null?se=i.TEXTURE0+k-1:se=J);let de=re[se];de===void 0&&(de={type:void 0,texture:void 0},re[se]=de),(de.type!==L||de.texture!==ne)&&(J!==se&&(i.activeTexture(se),J=se),i.bindTexture(L,ne||Y[L]),de.type=L,de.texture=ne)}function b(){const L=re[J];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(L){Ze.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ze.copy(L))}function Re(L){ht.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ht.copy(L))}function Se(L,ne){let se=c.get(ne);se===void 0&&(se=new WeakMap,c.set(ne,se));let de=se.get(L);de===void 0&&(de=i.getUniformBlockIndex(ne,L.name),se.set(L,de))}function ae(L,ne){const de=c.get(ne).get(L);l.get(ne)!==de&&(i.uniformBlockBinding(ne,de,L.__bindingPointIndex),l.set(ne,de))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,re={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,E=null,v=null,A=null,R=null,C=new he(0,0,0),D=0,y=!1,S=null,P=null,U=null,O=null,z=null,Ze.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Z,disable:fe,bindFramebuffer:Ie,drawBuffers:Te,useProgram:$e,setBlending:pt,setMaterial:Ue,setFlipSided:Ce,setCullFace:ge,setLineWidth:mt,setPolygonOffset:_e,setScissorTest:ze,activeTexture:wt,bindTexture:St,unbindTexture:b,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:ye,texImage3D:te,updateUBOMapping:Se,uniformBlockBinding:ae,texStorage2D:ie,texStorage3D:Me,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:Ee,scissor:le,viewport:Re,reset:Fe}}function Vx(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return f?new OffscreenCanvas(b,x):ss("canvas")}function _(b,x,B){let $=1;const K=St(b);if((K.width>B||K.height>B)&&($=B/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const X=Math.floor($*K.width),Ee=Math.floor($*K.height);u===void 0&&(u=g(X,Ee));const ie=x?g(X,Ee):u;return ie.width=X,ie.height=Ee,ie.getContext("2d").drawImage(b,0,0,X,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+Ee+")."),ie}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,x,B,$,K=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=x;if(x===i.RED&&(B===i.FLOAT&&(X=i.R32F),B===i.HALF_FLOAT&&(X=i.R16F),B===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(X=i.R8UI),B===i.UNSIGNED_SHORT&&(X=i.R16UI),B===i.UNSIGNED_INT&&(X=i.R32UI),B===i.BYTE&&(X=i.R8I),B===i.SHORT&&(X=i.R16I),B===i.INT&&(X=i.R32I)),x===i.RG&&(B===i.FLOAT&&(X=i.RG32F),B===i.HALF_FLOAT&&(X=i.RG16F),B===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(X=i.RG8UI),B===i.UNSIGNED_SHORT&&(X=i.RG16UI),B===i.UNSIGNED_INT&&(X=i.RG32UI),B===i.BYTE&&(X=i.RG8I),B===i.SHORT&&(X=i.RG16I),B===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(X=i.RGB8UI),B===i.UNSIGNED_SHORT&&(X=i.RGB16UI),B===i.UNSIGNED_INT&&(X=i.RGB32UI),B===i.BYTE&&(X=i.RGB8I),B===i.SHORT&&(X=i.RGB16I),B===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),B===i.UNSIGNED_INT&&(X=i.RGBA32UI),B===i.BYTE&&(X=i.RGBA8I),B===i.SHORT&&(X=i.RGBA16I),B===i.INT&&(X=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),x===i.RGBA){const Ee=K?lo:Ye.getTransfer($);B===i.FLOAT&&(X=i.RGBA32F),B===i.HALF_FLOAT&&(X=i.RGBA16F),B===i.UNSIGNED_BYTE&&(X=Ee===at?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function v(b,x){let B;return b?x===null||x===Gi||x===es?B=i.DEPTH24_STENCIL8:x===Mn?B=i.DEPTH32F_STENCIL8:x===Qr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gi||x===es?B=i.DEPTH_COMPONENT24:x===Mn?B=i.DEPTH_COMPONENT32F:x===Qr&&(B=i.DEPTH_COMPONENT16),B}function A(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Gt&&b.minFilter!==Kt?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function R(b){const x=b.target;x.removeEventListener("dispose",R),D(x),x.isVideoTexture&&h.delete(x)}function C(b){const x=b.target;x.removeEventListener("dispose",C),S(x)}function D(b){const x=n.get(b);if(x.__webglInit===void 0)return;const B=b.source,$=d.get(B);if($){const K=$[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(b),Object.keys($).length===0&&d.delete(B)}n.remove(b)}function y(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const B=b.source,$=d.get(B);delete $[x.__cacheKey],o.memory.textures--}function S(b){const x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let K=0;K<x.__webglFramebuffer[$].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[$][K]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=b.textures;for(let $=0,K=B.length;$<K;$++){const X=n.get(B[$]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(b)}let P=0;function U(){P=0}function O(){const b=P;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),P+=1,b}function z(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function k(b,x){const B=n.get(b);if(b.isVideoTexture&&ze(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,b,x);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function W(b,x){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){Y(B,b,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function q(b,x){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){Y(B,b,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function H(b,x){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Z(B,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const J={[Vi]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[ao]:i.MIRRORED_REPEAT},re={[Gt]:i.NEAREST,[hu]:i.NEAREST_MIPMAP_NEAREST,[qr]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[Js]:i.LINEAR_MIPMAP_NEAREST,[In]:i.LINEAR_MIPMAP_LINEAR},ve={[wf]:i.NEVER,[Df]:i.ALWAYS,[Af]:i.LESS,[Mu]:i.LEQUAL,[Rf]:i.EQUAL,[If]:i.GEQUAL,[Cf]:i.GREATER,[Pf]:i.NOTEQUAL};function Be(b,x){if(x.type===Mn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Kt||x.magFilter===Js||x.magFilter===qr||x.magFilter===In||x.minFilter===Kt||x.minFilter===Js||x.minFilter===qr||x.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,J[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,J[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,J[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,re[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,re[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Gt||x.minFilter!==qr&&x.minFilter!==In||x.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ze(b,x){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",R));const $=x.source;let K=d.get($);K===void 0&&(K={},d.set($,K));const X=z(x);if(X!==b.__cacheKey){K[X]===void 0&&(K[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[X].usedTimes++;const Ee=K[b.__cacheKey];Ee!==void 0&&(K[b.__cacheKey].usedTimes--,Ee.usedTimes===0&&y(x)),b.__cacheKey=X,b.__webglTexture=K[X].texture}return B}function ht(b,x,B){return Math.floor(Math.floor(b/B)/x)}function Je(b,x,B,$){const X=b.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,$,x.data);else{X.sort((te,le)=>te.start-le.start);let Ee=0;for(let te=1;te<X.length;te++){const le=X[Ee],Re=X[te],Se=le.start+le.count,ae=ht(Re.start,x.width,4),Fe=ht(le.start,x.width,4);Re.start<=Se+1&&ae===Fe&&ht(Re.start+Re.count-1,x.width,4)===ae?le.count=Math.max(le.count,Re.start+Re.count-le.start):(++Ee,X[Ee]=Re)}X.length=Ee+1;const ie=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let te=0,le=X.length;te<le;te++){const Re=X[te],Se=Math.floor(Re.start/4),ae=Math.ceil(Re.count/4),Fe=Se%x.width,L=Math.floor(Se/x.width),ne=ae,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Fe,L,ne,se,B,$,x.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function Y(b,x,B){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);const K=Ze(b,x),X=x.source;t.bindTexture($,b.__webglTexture,i.TEXTURE0+B);const Ee=n.get(X);if(X.version!==Ee.__version||K===!0){t.activeTexture(i.TEXTURE0+B);const ie=Ye.getPrimaries(Ye.workingColorSpace),Me=x.colorSpace===li?null:Ye.getPrimaries(x.colorSpace),ye=x.colorSpace===li||ie===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let te=_(x.image,!1,r.maxTextureSize);te=wt(x,te);const le=s.convert(x.format,x.colorSpace),Re=s.convert(x.type);let Se=E(x.internalFormat,le,Re,x.colorSpace,x.isVideoTexture);Be($,x);let ae;const Fe=x.mipmaps,L=x.isVideoTexture!==!0,ne=Ee.__version===void 0||K===!0,se=X.dataReady,de=A(x,te);if(x.isDepthTexture)Se=v(x.format===ns,x.type),ne&&(L?t.texStorage2D(i.TEXTURE_2D,1,Se,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Se,te.width,te.height,0,le,Re,null));else if(x.isDataTexture)if(Fe.length>0){L&&ne&&t.texStorage2D(i.TEXTURE_2D,de,Se,Fe[0].width,Fe[0].height);for(let Q=0,j=Fe.length;Q<j;Q++)ae=Fe[Q],L?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,le,Re,ae.data):t.texImage2D(i.TEXTURE_2D,Q,Se,ae.width,ae.height,0,le,Re,ae.data);x.generateMipmaps=!1}else L?(ne&&t.texStorage2D(i.TEXTURE_2D,de,Se,te.width,te.height),se&&Je(x,te,le,Re)):t.texImage2D(i.TEXTURE_2D,0,Se,te.width,te.height,0,le,Re,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Se,Fe[0].width,Fe[0].height,te.depth);for(let Q=0,j=Fe.length;Q<j;Q++)if(ae=Fe[Q],x.format!==sn)if(le!==null)if(L){if(se)if(x.layerUpdates.size>0){const me=sh(ae.width,ae.height,x.format,x.type);for(const De of x.layerUpdates){const ut=ae.data.subarray(De*me/ae.data.BYTES_PER_ELEMENT,(De+1)*me/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,De,ae.width,ae.height,1,le,ut)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,te.depth,le,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Se,ae.width,ae.height,te.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,te.depth,le,Re,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Se,ae.width,ae.height,te.depth,0,le,Re,ae.data)}else{L&&ne&&t.texStorage2D(i.TEXTURE_2D,de,Se,Fe[0].width,Fe[0].height);for(let Q=0,j=Fe.length;Q<j;Q++)ae=Fe[Q],x.format!==sn?le!==null?L?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Se,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,le,Re,ae.data):t.texImage2D(i.TEXTURE_2D,Q,Se,ae.width,ae.height,0,le,Re,ae.data)}else if(x.isDataArrayTexture)if(L){if(ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Se,te.width,te.height,te.depth),se)if(x.layerUpdates.size>0){const Q=sh(te.width,te.height,x.format,x.type);for(const j of x.layerUpdates){const me=te.data.subarray(j*Q/te.data.BYTES_PER_ELEMENT,(j+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,te.width,te.height,1,le,Re,me)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,Re,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,le,Re,te.data);else if(x.isData3DTexture)L?(ne&&t.texStorage3D(i.TEXTURE_3D,de,Se,te.width,te.height,te.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,Re,te.data)):t.texImage3D(i.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,le,Re,te.data);else if(x.isFramebufferTexture){if(ne)if(L)t.texStorage2D(i.TEXTURE_2D,de,Se,te.width,te.height);else{let Q=te.width,j=te.height;for(let me=0;me<de;me++)t.texImage2D(i.TEXTURE_2D,me,Se,Q,j,0,le,Re,null),Q>>=1,j>>=1}}else if(Fe.length>0){if(L&&ne){const Q=St(Fe[0]);t.texStorage2D(i.TEXTURE_2D,de,Se,Q.width,Q.height)}for(let Q=0,j=Fe.length;Q<j;Q++)ae=Fe[Q],L?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,le,Re,ae):t.texImage2D(i.TEXTURE_2D,Q,Se,le,Re,ae);x.generateMipmaps=!1}else if(L){if(ne){const Q=St(te);t.texStorage2D(i.TEXTURE_2D,de,Se,Q.width,Q.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Re,te)}else t.texImage2D(i.TEXTURE_2D,0,Se,le,Re,te);m(x)&&p($),Ee.__version=X.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Z(b,x,B){if(x.image.length!==6)return;const $=Ze(b,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const X=n.get(K);if(K.version!==X.__version||$===!0){t.activeTexture(i.TEXTURE0+B);const Ee=Ye.getPrimaries(Ye.workingColorSpace),ie=x.colorSpace===li?null:Ye.getPrimaries(x.colorSpace),Me=x.colorSpace===li||Ee===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const ye=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,le=[];for(let j=0;j<6;j++)!ye&&!te?le[j]=_(x.image[j],!0,r.maxCubemapSize):le[j]=te?x.image[j].image:x.image[j],le[j]=wt(x,le[j]);const Re=le[0],Se=s.convert(x.format,x.colorSpace),ae=s.convert(x.type),Fe=E(x.internalFormat,Se,ae,x.colorSpace),L=x.isVideoTexture!==!0,ne=X.__version===void 0||$===!0,se=K.dataReady;let de=A(x,Re);Be(i.TEXTURE_CUBE_MAP,x);let Q;if(ye){L&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Fe,Re.width,Re.height);for(let j=0;j<6;j++){Q=le[j].mipmaps;for(let me=0;me<Q.length;me++){const De=Q[me];x.format!==sn?Se!==null?L?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,0,0,De.width,De.height,Se,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,Fe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,0,0,De.width,De.height,Se,ae,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,me,Fe,De.width,De.height,0,Se,ae,De.data)}}}else{if(Q=x.mipmaps,L&&ne){Q.length>0&&de++;const j=St(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Fe,j.width,j.height)}for(let j=0;j<6;j++)if(te){L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,le[j].width,le[j].height,Se,ae,le[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Fe,le[j].width,le[j].height,0,Se,ae,le[j].data);for(let me=0;me<Q.length;me++){const ut=Q[me].image[j].image;L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,0,0,ut.width,ut.height,Se,ae,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,Fe,ut.width,ut.height,0,Se,ae,ut.data)}}else{L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Se,ae,le[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Fe,Se,ae,le[j]);for(let me=0;me<Q.length;me++){const De=Q[me];L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,0,0,Se,ae,De.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,me+1,Fe,Se,ae,De.image[j])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),X.__version=K.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function fe(b,x,B,$,K,X){const Ee=s.convert(B.format,B.colorSpace),ie=s.convert(B.type),Me=E(B.internalFormat,Ee,ie,B.colorSpace),ye=n.get(x),te=n.get(B);if(te.__renderTarget=x,!ye.__hasExternalTextures){const le=Math.max(1,x.width>>X),Re=Math.max(1,x.height>>X);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,X,Me,le,Re,x.depth,0,Ee,ie,null):t.texImage2D(K,X,Me,le,Re,0,Ee,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),_e(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,te.__webglTexture,0,mt(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,K,te.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(b,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const $=x.depthTexture,K=$&&$.isDepthTexture?$.type:null,X=v(x.stencilBuffer,K),Ee=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=mt(x);_e(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,X,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,b)}else{const $=x.textures;for(let K=0;K<$.length;K++){const X=$[K],Ee=s.convert(X.format,X.colorSpace),ie=s.convert(X.type),Me=E(X.internalFormat,Ee,ie,X.colorSpace),ye=mt(x);B&&_e(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Me,x.width,x.height):_e(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,Me,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Me,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);const K=$.__webglTexture,X=mt(x);if(x.depthTexture.format===ts)_e(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===ns)_e(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function $e(b){const x=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=$}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const $=b.texture.mipmaps;$&&$.length>0?Te(x.__webglFramebuffer[0],b):Te(x.__webglFramebuffer,b)}else if(B){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),Ie(x.__webglDepthbuffer[$],b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}else{const $=b.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ie(x.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(b,x,B){const $=n.get(b);x!==void 0&&fe($.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&$e(b)}function I(b){const x=b.texture,B=n.get(b),$=n.get(x);b.addEventListener("dispose",C);const K=b.textures,X=b.isWebGLCubeRenderTarget===!0,Ee=K.length>1;if(Ee||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,o.memory.textures++),X){B.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ie]=[];for(let Me=0;Me<x.mipmaps.length;Me++)B.__webglFramebuffer[ie][Me]=i.createFramebuffer()}else B.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)B.__webglFramebuffer[ie]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let ie=0,Me=K.length;ie<Me;ie++){const ye=n.get(K[ie]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&_e(b)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ie=0;ie<K.length;ie++){const Me=K[ie];B.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ie]);const ye=s.convert(Me.format,Me.colorSpace),te=s.convert(Me.type),le=E(Me.internalFormat,ye,te,Me.colorSpace,b.isXRRenderTarget===!0),Re=mt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,le,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,B.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Be(i.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let Me=0;Me<x.mipmaps.length;Me++)fe(B.__webglFramebuffer[ie][Me],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me);else fe(B.__webglFramebuffer[ie],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ie=0,Me=K.length;ie<Me;ie++){const ye=K[ie],te=n.get(ye);let le=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,te.__webglTexture),Be(le,ye),fe(B.__webglFramebuffer,b,ye,i.COLOR_ATTACHMENT0+ie,le,0),m(ye)&&p(le)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ie=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,$.__webglTexture),Be(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let Me=0;Me<x.mipmaps.length;Me++)fe(B.__webglFramebuffer[Me],b,x,i.COLOR_ATTACHMENT0,ie,Me);else fe(B.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,ie,0);m(x)&&p(ie),t.unbindTexture()}b.depthBuffer&&$e(b)}function pt(b){const x=b.textures;for(let B=0,$=x.length;B<$;B++){const K=x[B];if(m(K)){const X=T(b),Ee=n.get(K).__webglTexture;t.bindTexture(X,Ee),p(X),t.unbindTexture()}}}const Ue=[],Ce=[];function ge(b){if(b.samples>0){if(_e(b)===!1){const x=b.textures,B=b.width,$=b.height;let K=i.COLOR_BUFFER_BIT;const X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(b),ie=x.length>1;if(ie)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Me=b.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ye]);const te=n.get(x[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,K,i.NEAREST),l===!0&&(Ue.length=0,Ce.length=0,Ue.push(i.COLOR_ATTACHMENT0+ye),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ue.push(X),Ce.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ye]);const te=n.get(x[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function mt(b){return Math.min(r.maxSamples,b.samples)}function _e(b){const x=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ze(b){const x=o.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function wt(b,x){const B=b.colorSpace,$=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Wt&&B!==li&&(Ye.getTransfer(B)===at?($!==sn||K!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function St(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=H,this.rebindTextures=Lt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_e}function Gx(i,e){function t(n,r=li){let s;const o=Ye.getTransfer(r);if(n===Sn)return i.UNSIGNED_BYTE;if(n===Cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uu)return i.BYTE;if(n===du)return i.SHORT;if(n===Qr)return i.UNSIGNED_SHORT;if(n===Rc)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===hs)return i.HALF_FLOAT;if(n===mu)return i.ALPHA;if(n===gu)return i.RGB;if(n===sn)return i.RGBA;if(n===ts)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===Ic)return i.RED;if(n===Dc)return i.RED_INTEGER;if(n===_u)return i.RG;if(n===Lc)return i.RG_INTEGER;if(n===Uc)return i.RGBA_INTEGER;if(n===Qs||n===eo||n===to||n===no)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===no)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===ka||n===Ha||n===Va)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ha)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Va)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Wa||n===Xa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ga||n===Wa)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xa)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qa||n===$a||n===Ya||n===ja||n===Ka||n===Za||n===Ja||n===Qa||n===ec||n===tc||n===nc||n===ic||n===rc||n===sc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===qa)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ja)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ka)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oc||n===ac||n===cc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===oc)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lc||n===hc||n===uc||n===dc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===lc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Nu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qn({vertexShader:Wx,fragmentShader:Xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Mo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $x extends $i{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new qx,p={},T=t.getContextAttributes();let E=null,v=null;const A=[],R=[],C=new Xe;let D=null;const y=new Ht;y.viewport=new Ke;const S=new Ht;S.viewport=new Ke;const P=[y,S],U=new Qp;let O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=A[Y];return Z===void 0&&(Z=new Jo,A[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=A[Y];return Z===void 0&&(Z=new Jo,A[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=A[Y];return Z===void 0&&(Z=new Jo,A[Y]=Z),Z.getHandSpace()};function k(Y){const Z=R.indexOf(Y.inputSource);if(Z===-1)return;const fe=A[Z];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,c||o),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",q);for(let Y=0;Y<A.length;Y++){const Z=R[Y];Z!==null&&(R[Y]=null,A[Y].disconnect(Z))}O=null,z=null,m.reset();for(const Y in p)delete p[Y];e.setRenderTarget(E),f=null,d=null,u=null,r=null,v=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",W),r.addEventListener("inputsourceschange",q),T.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ie=null,Te=null;T.depth&&(Te=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=T.stencil?ns:ts,Ie=T.stencil?es:Gi);const $e={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer($e),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Wi(d.textureWidth,d.textureHeight,{format:sn,type:Sn,depthTexture:new Uu(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const fe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Wi(f.framebufferWidth,f.framebufferHeight,{format:sn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Je.setContext(r),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(Y){for(let Z=0;Z<Y.removed.length;Z++){const fe=Y.removed[Z],Ie=R.indexOf(fe);Ie>=0&&(R[Ie]=null,A[Ie].disconnect(fe))}for(let Z=0;Z<Y.added.length;Z++){const fe=Y.added[Z];let Ie=R.indexOf(fe);if(Ie===-1){for(let $e=0;$e<A.length;$e++)if($e>=R.length){R.push(fe),Ie=$e;break}else if(R[$e]===null){R[$e]=fe,Ie=$e;break}if(Ie===-1)break}const Te=A[Ie];Te&&Te.connect(fe)}}const H=new w,J=new w;function re(Y,Z,fe){H.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(fe.matrixWorld);const Ie=H.distanceTo(J),Te=Z.projectionMatrix.elements,$e=fe.projectionMatrix.elements,Lt=Te[14]/(Te[10]-1),I=Te[14]/(Te[10]+1),pt=(Te[9]+1)/Te[5],Ue=(Te[9]-1)/Te[5],Ce=(Te[8]-1)/Te[0],ge=($e[8]+1)/$e[0],mt=Lt*Ce,_e=Lt*ge,ze=Ie/(-Ce+ge),wt=ze*-Ce;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(wt),Y.translateZ(ze),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Te[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const St=Lt+ze,b=I+ze,x=mt-wt,B=_e+(Ie-wt),$=pt*I/b*St,K=Ue*I/b*St;Y.projectionMatrix.makePerspective(x,B,$,K,St,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ve(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Z=Y.near,fe=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),U.near=S.near=y.near=Z,U.far=S.far=y.far=fe,(O!==U.near||z!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,z=U.far),U.layers.mask=Y.layers.mask|6,y.layers.mask=U.layers.mask&3,S.layers.mask=U.layers.mask&5;const Ie=Y.parent,Te=U.cameras;ve(U,Ie);for(let $e=0;$e<Te.length;$e++)ve(Te[$e],Ie);Te.length===2?re(U,y,S):U.projectionMatrix.copy(y.projectionMatrix),Be(Y,U,Ie)};function Be(Y,Z,fe){fe===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Er*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Y){return p[Y]};let Ze=null;function ht(Y,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ie=!1;fe.length!==U.cameras.length&&(U.cameras.length=0,Ie=!0);for(let I=0;I<fe.length;I++){const pt=fe[I];let Ue=null;if(f!==null)Ue=f.getViewport(pt);else{const ge=u.getViewSubImage(d,pt);Ue=ge.viewport,I===0&&(e.setRenderTargetTextures(v,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(v))}let Ce=P[I];Ce===void 0&&(Ce=new Ht,Ce.layers.enable(I),Ce.viewport=new Ke,P[I]=Ce),Ce.matrix.fromArray(pt.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(pt.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),I===0&&(U.matrix.copy(Ce.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ie===!0&&U.cameras.push(Ce)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const I=u.getDepthInformation(fe[0]);I&&I.isValid&&I.texture&&m.init(I,r.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let I=0;I<fe.length;I++){const pt=fe[I].camera;if(pt){let Ue=p[pt];Ue||(Ue=new Nu,p[pt]=Ue);const Ce=u.getCameraImage(pt);Ue.sourceTexture=Ce}}}}for(let fe=0;fe<A.length;fe++){const Ie=R[fe],Te=A[fe];Ie!==null&&Te!==void 0&&Te.update(Ie,Z,c||o)}Ze&&Ze(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Je=new Vu;Je.setAnimationLoop(ht),this.setAnimationLoop=function(Y){Ze=Y},this.dispose=function(){}}}const Ai=new Nn,Yx=new Ne;function jx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),E=T.envMap,v=T.envMapRotation;E&&(m.envMap.value=E,Ai.copy(v),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(Ai)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Kx(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const v=E.program;n.uniformBlockBinding(T,v)}function c(T,E){let v=r[T.id];v===void 0&&(g(T),v=h(T),r[T.id]=v,T.addEventListener("dispose",m));const A=E.program;n.updateUBOMapping(T,A);const R=e.render.frame;s[T.id]!==R&&(d(T),s[T.id]=R)}function h(T){const E=u();T.__bindingPointIndex=E;const v=i.createBuffer(),A=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=r[T.id],v=T.uniforms,A=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,C=v.length;R<C;R++){const D=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,S=D.length;y<S;y++){const P=D[y];if(f(P,R,y,A)===!0){const U=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let k=0;k<O.length;k++){const W=O[k],q=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,U+z,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,z),z+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,E,v,A){const R=T.value,C=E+"_"+v;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const D=A[C];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return A[C]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(T){const E=T.uniforms;let v=0;const A=16;for(let C=0,D=E.length;C<D;C++){const y=Array.isArray(E[C])?E[C]:[E[C]];for(let S=0,P=y.length;S<P;S++){const U=y[S],O=Array.isArray(U.value)?U.value:[U.value];for(let z=0,k=O.length;z<k;z++){const W=O[z],q=_(W),H=v%A,J=H%q.boundary,re=H+J;v+=J,re!==0&&A-re<q.storage&&(v+=A-re),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=q.storage}}}const R=v%A;return R>0&&(v+=A-R),T.__size=v,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Zx{constructor(e={}){const{canvas:t=Kf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=Rt;let R=0,C=0,D=null,y=-1,S=null;const P=new Ke,U=new Ke;let O=null;const z=new he(0);let k=0,W=t.width,q=t.height,H=1,J=null,re=null;const ve=new Ke(0,0,W,q),Be=new Ke(0,0,W,q);let Ze=!1;const ht=new Gc;let Je=!1,Y=!1;const Z=new Ne,fe=new w,Ie=new Ke,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Lt(){return D===null?H:1}let I=n;function pt(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ac}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",Q,!1),I===null){const N="webgl2";if(I=pt(N,M),I===null)throw pt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ue,Ce,ge,mt,_e,ze,wt,St,b,x,B,$,K,X,Ee,ie,Me,ye,te,le,Re,Se,ae,Fe;function L(){Ue=new a_(I),Ue.init(),Se=new Gx(I,Ue),Ce=new e_(I,Ue,e,Se),ge=new Hx(I,Ue),Ce.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),mt=new h_(I),_e=new Rx,ze=new Vx(I,Ue,ge,_e,Ce,Se,mt),wt=new n_(v),St=new o_(v),b=new gm(I),ae=new J0(I,b),x=new c_(I,b,mt,ae),B=new d_(I,x,b,mt),te=new u_(I,Ce,ze),ie=new t_(_e),$=new Ax(v,wt,St,Ue,Ce,ae,ie),K=new jx(v,_e),X=new Px,Ee=new Fx(Ue),ye=new Z0(v,wt,St,ge,B,f,l),Me=new zx(v,B,Ce),Fe=new Kx(I,mt,Ce,ge),le=new Q0(I,Ue,mt),Re=new l_(I,Ue,mt),mt.programs=$.programs,v.capabilities=Ce,v.extensions=Ue,v.properties=_e,v.renderLists=X,v.shadowMap=Me,v.state=ge,v.info=mt}L();const ne=new $x(v,I);this.xr=ne,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Ue.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ue.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(W,q,!1))},this.getSize=function(M){return M.set(W,q)},this.setSize=function(M,N,V=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,q=N,t.width=Math.floor(M*H),t.height=Math.floor(N*H),V===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(W*H,q*H).floor()},this.setDrawingBufferSize=function(M,N,V){W=M,q=N,H=V,t.width=Math.floor(M*V),t.height=Math.floor(N*V),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(ve)},this.setViewport=function(M,N,V,G){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,N,V,G),ge.viewport(P.copy(ve).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Be)},this.setScissor=function(M,N,V,G){M.isVector4?Be.set(M.x,M.y,M.z,M.w):Be.set(M,N,V,G),ge.scissor(U.copy(Be).multiplyScalar(H).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(M){ge.setScissorTest(Ze=M)},this.setOpaqueSort=function(M){J=M},this.setTransparentSort=function(M){re=M},this.getClearColor=function(M){return M.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,V=!0){let G=0;if(M){let F=!1;if(D!==null){const ee=D.texture.format;F=ee===Uc||ee===Lc||ee===Dc}if(F){const ee=D.texture.type,ce=ee===Sn||ee===Gi||ee===Qr||ee===es||ee===Cc||ee===Pc,pe=ye.getClearColor(),ue=ye.getClearAlpha(),Ae=pe.r,Pe=pe.g,be=pe.b;ce?(g[0]=Ae,g[1]=Pe,g[2]=be,g[3]=ue,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ae,_[1]=Pe,_[2]=be,_[3]=ue,I.clearBufferiv(I.COLOR,0,_))}else G|=I.COLOR_BUFFER_BIT}N&&(G|=I.DEPTH_BUFFER_BIT),V&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),ye.dispose(),X.dispose(),Ee.dispose(),_e.dispose(),wt.dispose(),St.dispose(),B.dispose(),ae.dispose(),Fe.dispose(),$.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Rn),ne.removeEventListener("sessionend",cl),Mi.stop()};function se(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=mt.autoReset,N=Me.enabled,V=Me.autoUpdate,G=Me.needsUpdate,F=Me.type;L(),mt.autoReset=M,Me.enabled=N,Me.autoUpdate=V,Me.needsUpdate=G,Me.type=F}function Q(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function j(M){const N=M.target;N.removeEventListener("dispose",j),me(N)}function me(M){De(M),_e.remove(M)}function De(M){const N=_e.get(M).programs;N!==void 0&&(N.forEach(function(V){$.releaseProgram(V)}),M.isShaderMaterial&&$.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,V,G,F,ee){N===null&&(N=Te);const ce=F.isMesh&&F.matrixWorld.determinant()<0,pe=Fd(M,N,V,G,F);ge.setMaterial(G,ce);let ue=V.index,Ae=1;if(G.wireframe===!0){if(ue=x.getWireframeAttribute(V),ue===void 0)return;Ae=2}const Pe=V.drawRange,be=V.attributes.position;let qe=Pe.start*Ae,st=(Pe.start+Pe.count)*Ae;ee!==null&&(qe=Math.max(qe,ee.start*Ae),st=Math.min(st,(ee.start+ee.count)*Ae)),ue!==null?(qe=Math.max(qe,0),st=Math.min(st,ue.count)):be!=null&&(qe=Math.max(qe,0),st=Math.min(st,be.count));const Mt=st-qe;if(Mt<0||Mt===1/0)return;ae.setup(F,G,pe,V,ue);let dt,ct=le;if(ue!==null&&(dt=b.get(ue),ct=Re,ct.setIndex(dt)),F.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*Lt()),ct.setMode(I.LINES)):ct.setMode(I.TRIANGLES);else if(F.isLine){let we=G.linewidth;we===void 0&&(we=1),ge.setLineWidth(we*Lt()),F.isLineSegments?ct.setMode(I.LINES):F.isLineLoop?ct.setMode(I.LINE_LOOP):ct.setMode(I.LINE_STRIP)}else F.isPoints?ct.setMode(I.POINTS):F.isSprite&&ct.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)os("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))ct.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const we=F._multiDrawStarts,xt=F._multiDrawCounts,je=F._multiDrawCount,Qt=ue?b.get(ue).bytesPerElement:1,ji=_e.get(G).currentProgram.getUniforms();for(let en=0;en<je;en++)ji.setValue(I,"_gl_DrawID",en),ct.render(we[en]/Qt,xt[en])}else if(F.isInstancedMesh)ct.renderInstances(qe,Mt,F.count);else if(V.isInstancedBufferGeometry){const we=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,xt=Math.min(V.instanceCount,we);ct.renderInstances(qe,Mt,xt)}else ct.render(qe,Mt)};function ut(M,N,V){M.transparent===!0&&M.side===xn&&M.forceSinglePass===!1?(M.side=Vt,M.needsUpdate=!0,_s(M,N,V),M.side=Jn,M.needsUpdate=!0,_s(M,N,V),M.side=xn):_s(M,N,V)}this.compile=function(M,N,V=null){V===null&&(V=M),p=Ee.get(V),p.init(N),E.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),M!==V&&M.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const G=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ee=F.material;if(ee)if(Array.isArray(ee))for(let ce=0;ce<ee.length;ce++){const pe=ee[ce];ut(pe,V,F),G.add(pe)}else ut(ee,V,F),G.add(ee)}),p=E.pop(),G},this.compileAsync=function(M,N,V=null){const G=this.compile(M,N,V);return new Promise(F=>{function ee(){if(G.forEach(function(ce){_e.get(ce).currentProgram.isReady()&&G.delete(ce)}),G.size===0){F(M);return}setTimeout(ee,10)}Ue.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Qe=null;function zn(M){Qe&&Qe(M)}function Rn(){Mi.stop()}function cl(){Mi.start()}const Mi=new Vu;Mi.setAnimationLoop(zn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(M){Qe=M,ne.setAnimationLoop(M),M===null?Mi.stop():Mi.start()},ne.addEventListener("sessionstart",Rn),ne.addEventListener("sessionend",cl),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(N),N=ne.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,N,D),p=Ee.get(M,E.length),p.init(N),E.push(p),Z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ht.setFromProjectionMatrix(Z,Dn,N.reversedDepth),Y=this.localClippingEnabled,Je=ie.init(this.clippingPlanes,Y),m=X.get(M,T.length),m.init(),T.push(m),ne.enabled===!0&&ne.isPresenting===!0){const ee=v.xr.getDepthSensingMesh();ee!==null&&Co(ee,N,-1/0,v.sortObjects)}Co(M,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(J,re),$e=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,$e&&ye.addToRenderList(m,M),this.info.render.frame++,Je===!0&&ie.beginShadows();const V=p.state.shadowsArray;Me.render(V,M,N),Je===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const ee=N.cameras;if(F.length>0)for(let ce=0,pe=ee.length;ce<pe;ce++){const ue=ee[ce];hl(G,F,M,ue)}$e&&ye.render(M);for(let ce=0,pe=ee.length;ce<pe;ce++){const ue=ee[ce];ll(m,M,ue,ue.viewport)}}else F.length>0&&hl(G,F,M,N),$e&&ye.render(M),ll(m,M,N);D!==null&&C===0&&(ze.updateMultisampleRenderTarget(D),ze.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(v,M,N),ae.resetDefaultState(),y=-1,S=null,E.pop(),E.length>0?(p=E[E.length-1],Je===!0&&ie.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Co(M,N,V,G){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ht.intersectsSprite(M)){G&&Ie.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Z);const ce=B.update(M),pe=M.material;pe.visible&&m.push(M,ce,pe,V,Ie.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ht.intersectsObject(M))){const ce=B.update(M),pe=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ie.copy(M.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ie.copy(ce.boundingSphere.center)),Ie.applyMatrix4(M.matrixWorld).applyMatrix4(Z)),Array.isArray(pe)){const ue=ce.groups;for(let Ae=0,Pe=ue.length;Ae<Pe;Ae++){const be=ue[Ae],qe=pe[be.materialIndex];qe&&qe.visible&&m.push(M,ce,qe,V,Ie.z,be)}}else pe.visible&&m.push(M,ce,pe,V,Ie.z,null)}}const ee=M.children;for(let ce=0,pe=ee.length;ce<pe;ce++)Co(ee[ce],N,V,G)}function ll(M,N,V,G){const F=M.opaque,ee=M.transmissive,ce=M.transparent;p.setupLightsView(V),Je===!0&&ie.setGlobalState(v.clippingPlanes,V),G&&ge.viewport(P.copy(G)),F.length>0&&gs(F,N,V),ee.length>0&&gs(ee,N,V),ce.length>0&&gs(ce,N,V),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function hl(M,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Wi(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?hs:Sn,minFilter:In,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const ee=p.state.transmissionRenderTarget[G.id],ce=G.viewport||P;ee.setSize(ce.z*v.transmissionResolutionScale,ce.w*v.transmissionResolutionScale);const pe=v.getRenderTarget(),ue=v.getActiveCubeFace(),Ae=v.getActiveMipmapLevel();v.setRenderTarget(ee),v.getClearColor(z),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),$e&&ye.render(V);const Pe=v.toneMapping;v.toneMapping=fi;const be=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),Je===!0&&ie.setGlobalState(v.clippingPlanes,G),gs(M,V,G),ze.updateMultisampleRenderTarget(ee),ze.updateRenderTargetMipmap(ee),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let st=0,Mt=N.length;st<Mt;st++){const dt=N[st],ct=dt.object,we=dt.geometry,xt=dt.material,je=dt.group;if(xt.side===xn&&ct.layers.test(G.layers)){const Qt=xt.side;xt.side=Vt,xt.needsUpdate=!0,ul(ct,V,G,we,xt,je),xt.side=Qt,xt.needsUpdate=!0,qe=!0}}qe===!0&&(ze.updateMultisampleRenderTarget(ee),ze.updateRenderTargetMipmap(ee))}v.setRenderTarget(pe,ue,Ae),v.setClearColor(z,k),be!==void 0&&(G.viewport=be),v.toneMapping=Pe}function gs(M,N,V){const G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ee=M.length;F<ee;F++){const ce=M[F],pe=ce.object,ue=ce.geometry,Ae=ce.group;let Pe=ce.material;Pe.allowOverride===!0&&G!==null&&(Pe=G),pe.layers.test(V.layers)&&ul(pe,N,V,ue,Pe,Ae)}}function ul(M,N,V,G,F,ee){M.onBeforeRender(v,N,V,G,F,ee),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(v,N,V,G,M,ee),F.transparent===!0&&F.side===xn&&F.forceSinglePass===!1?(F.side=Vt,F.needsUpdate=!0,v.renderBufferDirect(V,N,G,F,M,ee),F.side=Jn,F.needsUpdate=!0,v.renderBufferDirect(V,N,G,F,M,ee),F.side=xn):v.renderBufferDirect(V,N,G,F,M,ee),M.onAfterRender(v,N,V,G,F,ee)}function _s(M,N,V){N.isScene!==!0&&(N=Te);const G=_e.get(M),F=p.state.lights,ee=p.state.shadowsArray,ce=F.state.version,pe=$.getParameters(M,F.state,ee,N,V),ue=$.getProgramCacheKey(pe);let Ae=G.programs;G.environment=M.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(M.isMeshStandardMaterial?St:wt).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",j),Ae=new Map,G.programs=Ae);let Pe=Ae.get(ue);if(Pe!==void 0){if(G.currentProgram===Pe&&G.lightsStateVersion===ce)return fl(M,pe),Pe}else pe.uniforms=$.getUniforms(M),M.onBeforeCompile(pe,v),Pe=$.acquireProgram(pe,ue),Ae.set(ue,Pe),G.uniforms=pe.uniforms;const be=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(be.clippingPlanes=ie.uniform),fl(M,pe),G.needsLights=Bd(M),G.lightsStateVersion=ce,G.needsLights&&(be.ambientLightColor.value=F.state.ambient,be.lightProbe.value=F.state.probe,be.directionalLights.value=F.state.directional,be.directionalLightShadows.value=F.state.directionalShadow,be.spotLights.value=F.state.spot,be.spotLightShadows.value=F.state.spotShadow,be.rectAreaLights.value=F.state.rectArea,be.ltc_1.value=F.state.rectAreaLTC1,be.ltc_2.value=F.state.rectAreaLTC2,be.pointLights.value=F.state.point,be.pointLightShadows.value=F.state.pointShadow,be.hemisphereLights.value=F.state.hemi,be.directionalShadowMap.value=F.state.directionalShadowMap,be.directionalShadowMatrix.value=F.state.directionalShadowMatrix,be.spotShadowMap.value=F.state.spotShadowMap,be.spotLightMatrix.value=F.state.spotLightMatrix,be.spotLightMap.value=F.state.spotLightMap,be.pointShadowMap.value=F.state.pointShadowMap,be.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Pe,G.uniformsList=null,Pe}function dl(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=io.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function fl(M,N){const V=_e.get(M);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Fd(M,N,V,G,F){N.isScene!==!0&&(N=Te),ze.resetTextureUnits();const ee=N.fog,ce=G.isMeshStandardMaterial?N.environment:null,pe=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Wt,ue=(G.isMeshStandardMaterial?St:wt).get(G.envMap||ce),Ae=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pe=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),be=!!V.morphAttributes.position,qe=!!V.morphAttributes.normal,st=!!V.morphAttributes.color;let Mt=fi;G.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const dt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ct=dt!==void 0?dt.length:0,we=_e.get(G),xt=p.state.lights;if(Je===!0&&(Y===!0||M!==S)){const Bt=M===S&&G.id===y;ie.setState(G,M,Bt)}let je=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==xt.state.version||we.outputColorSpace!==pe||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==ue||G.fog===!0&&we.fog!==ee||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==Ae||we.vertexTangents!==Pe||we.morphTargets!==be||we.morphNormals!==qe||we.morphColors!==st||we.toneMapping!==Mt||we.morphTargetsCount!==ct)&&(je=!0):(je=!0,we.__version=G.version);let Qt=we.currentProgram;je===!0&&(Qt=_s(G,N,F));let ji=!1,en=!1,Lr=!1;const vt=Qt.getUniforms(),on=we.uniforms;if(ge.useProgram(Qt.program)&&(ji=!0,en=!0,Lr=!0),G.id!==y&&(y=G.id,en=!0),ji||S!==M){ge.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),vt.setValue(I,"projectionMatrix",M.projectionMatrix),vt.setValue(I,"viewMatrix",M.matrixWorldInverse);const qt=vt.map.cameraPosition;qt!==void 0&&qt.setValue(I,fe.setFromMatrixPosition(M.matrixWorld)),Ce.logarithmicDepthBuffer&&vt.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&vt.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,en=!0,Lr=!0)}if(F.isSkinnedMesh){vt.setOptional(I,F,"bindMatrix"),vt.setOptional(I,F,"bindMatrixInverse");const Bt=F.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),vt.setValue(I,"boneTexture",Bt.boneTexture,ze))}F.isBatchedMesh&&(vt.setOptional(I,F,"batchingTexture"),vt.setValue(I,"batchingTexture",F._matricesTexture,ze),vt.setOptional(I,F,"batchingIdTexture"),vt.setValue(I,"batchingIdTexture",F._indirectTexture,ze),vt.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&vt.setValue(I,"batchingColorTexture",F._colorsTexture,ze));const an=V.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&te.update(F,V,Qt),(en||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,vt.setValue(I,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(on.envMap.value=ue,on.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(on.envMapIntensity.value=N.environmentIntensity),en&&(vt.setValue(I,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&Od(on,Lr),ee&&G.fog===!0&&K.refreshFogUniforms(on,ee),K.refreshMaterialUniforms(on,G,H,q,p.state.transmissionRenderTarget[M.id]),io.upload(I,dl(we),on,ze)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(io.upload(I,dl(we),on,ze),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&vt.setValue(I,"center",F.center),vt.setValue(I,"modelViewMatrix",F.modelViewMatrix),vt.setValue(I,"normalMatrix",F.normalMatrix),vt.setValue(I,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Bt=G.uniformsGroups;for(let qt=0,Po=Bt.length;qt<Po;qt++){const yi=Bt[qt];Fe.update(yi,Qt),Fe.bind(yi,Qt)}}return Qt}function Od(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Bd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,N,V){const G=_e.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),_e.get(M.texture).__webglTexture=N,_e.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const V=_e.get(M);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const zd=I.createFramebuffer();this.setRenderTarget=function(M,N=0,V=0){D=M,R=N,C=V;let G=!0,F=null,ee=!1,ce=!1;if(M){const ue=_e.get(M);if(ue.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(ue.__webglFramebuffer===void 0)ze.setupRenderTarget(M);else if(ue.__hasExternalTextures)ze.rebindTextures(M,_e.get(M.texture).__webglTexture,_e.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const be=M.depthTexture;if(ue.__boundDepthTexture!==be){if(be!==null&&_e.has(be)&&(M.width!==be.image.width||M.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(M)}}const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ce=!0);const Pe=_e.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[N])?F=Pe[N][V]:F=Pe[N],ee=!0):M.samples>0&&ze.useMultisampledRTT(M)===!1?F=_e.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?F=Pe[V]:F=Pe,P.copy(M.viewport),U.copy(M.scissor),O=M.scissorTest}else P.copy(ve).multiplyScalar(H).floor(),U.copy(Be).multiplyScalar(H).floor(),O=Ze;if(V!==0&&(F=zd),ge.bindFramebuffer(I.FRAMEBUFFER,F)&&G&&ge.drawBuffers(M,F),ge.viewport(P),ge.scissor(U),ge.setScissorTest(O),ee){const ue=_e.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,ue.__webglTexture,V)}else if(ce){const ue=N;for(let Ae=0;Ae<M.textures.length;Ae++){const Pe=_e.get(M.textures[Ae]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ae,Pe.__webglTexture,V,ue)}}else if(M!==null&&V!==0){const ue=_e.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ue.__webglTexture,V)}y=-1},this.readRenderTargetPixels=function(M,N,V,G,F,ee,ce,pe=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=_e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ce!==void 0&&(ue=ue[ce]),ue){ge.bindFramebuffer(I.FRAMEBUFFER,ue);try{const Ae=M.textures[pe],Pe=Ae.format,be=Ae.type;if(!Ce.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-G&&V>=0&&V<=M.height-F&&(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe),I.readPixels(N,V,G,F,Se.convert(Pe),Se.convert(be),ee))}finally{const Ae=D!==null?_e.get(D).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,N,V,G,F,ee,ce,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=_e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ce!==void 0&&(ue=ue[ce]),ue)if(N>=0&&N<=M.width-G&&V>=0&&V<=M.height-F){ge.bindFramebuffer(I.FRAMEBUFFER,ue);const Ae=M.textures[pe],Pe=Ae.format,be=Ae.type;if(!Ce.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,qe),I.bufferData(I.PIXEL_PACK_BUFFER,ee.byteLength,I.STREAM_READ),M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe),I.readPixels(N,V,G,F,Se.convert(Pe),Se.convert(be),0);const st=D!==null?_e.get(D).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,st);const Mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Zf(I,Mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,qe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ee),I.deleteBuffer(qe),I.deleteSync(Mt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,V=0){const G=Math.pow(2,-V),F=Math.floor(M.image.width*G),ee=Math.floor(M.image.height*G),ce=N!==null?N.x:0,pe=N!==null?N.y:0;ze.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,ce,pe,F,ee),ge.unbindTexture()};const kd=I.createFramebuffer(),Hd=I.createFramebuffer();this.copyTextureToTexture=function(M,N,V=null,G=null,F=0,ee=null){ee===null&&(F!==0?(os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=F,F=0):ee=0);let ce,pe,ue,Ae,Pe,be,qe,st,Mt;const dt=M.isCompressedTexture?M.mipmaps[ee]:M.image;if(V!==null)ce=V.max.x-V.min.x,pe=V.max.y-V.min.y,ue=V.isBox3?V.max.z-V.min.z:1,Ae=V.min.x,Pe=V.min.y,be=V.isBox3?V.min.z:0;else{const an=Math.pow(2,-F);ce=Math.floor(dt.width*an),pe=Math.floor(dt.height*an),M.isDataArrayTexture?ue=dt.depth:M.isData3DTexture?ue=Math.floor(dt.depth*an):ue=1,Ae=0,Pe=0,be=0}G!==null?(qe=G.x,st=G.y,Mt=G.z):(qe=0,st=0,Mt=0);const ct=Se.convert(N.format),we=Se.convert(N.type);let xt;N.isData3DTexture?(ze.setTexture3D(N,0),xt=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ze.setTexture2DArray(N,0),xt=I.TEXTURE_2D_ARRAY):(ze.setTexture2D(N,0),xt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const je=I.getParameter(I.UNPACK_ROW_LENGTH),Qt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ji=I.getParameter(I.UNPACK_SKIP_PIXELS),en=I.getParameter(I.UNPACK_SKIP_ROWS),Lr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,be);const vt=M.isDataArrayTexture||M.isData3DTexture,on=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const an=_e.get(M),Bt=_e.get(N),qt=_e.get(an.__renderTarget),Po=_e.get(Bt.__renderTarget);ge.bindFramebuffer(I.READ_FRAMEBUFFER,qt.__webglFramebuffer),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,Po.__webglFramebuffer);for(let yi=0;yi<ue;yi++)vt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_e.get(M).__webglTexture,F,be+yi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_e.get(N).__webglTexture,ee,Mt+yi)),I.blitFramebuffer(Ae,Pe,ce,pe,qe,st,ce,pe,I.DEPTH_BUFFER_BIT,I.NEAREST);ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||_e.has(M)){const an=_e.get(M),Bt=_e.get(N);ge.bindFramebuffer(I.READ_FRAMEBUFFER,kd),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,Hd);for(let qt=0;qt<ue;qt++)vt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,an.__webglTexture,F,be+qt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,an.__webglTexture,F),on?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.__webglTexture,ee,Mt+qt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Bt.__webglTexture,ee),F!==0?I.blitFramebuffer(Ae,Pe,ce,pe,qe,st,ce,pe,I.COLOR_BUFFER_BIT,I.NEAREST):on?I.copyTexSubImage3D(xt,ee,qe,st,Mt+qt,Ae,Pe,ce,pe):I.copyTexSubImage2D(xt,ee,qe,st,Ae,Pe,ce,pe);ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else on?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(xt,ee,qe,st,Mt,ce,pe,ue,ct,we,dt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(xt,ee,qe,st,Mt,ce,pe,ue,ct,dt.data):I.texSubImage3D(xt,ee,qe,st,Mt,ce,pe,ue,ct,we,dt):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ee,qe,st,ce,pe,ct,we,dt.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ee,qe,st,dt.width,dt.height,ct,dt.data):I.texSubImage2D(I.TEXTURE_2D,ee,qe,st,ce,pe,ct,we,dt);I.pixelStorei(I.UNPACK_ROW_LENGTH,je),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ji),I.pixelStorei(I.UNPACK_SKIP_ROWS,en),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Lr),ee===0&&N.generateMipmaps&&I.generateMipmap(xt),ge.unbindTexture()},this.initRenderTarget=function(M){_e.get(M).__webglFramebuffer===void 0&&ze.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ze.setTextureCube(M,0):M.isData3DTexture?ze.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ze.setTexture2DArray(M,0):ze.setTexture2D(M,0),ge.unbindTexture()},this.resetState=function(){R=0,C=0,D=null,ge.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const xe=96,Ph=[6.5,50],yt=Object.freeze({palette:Object.freeze({lowerSky:"#b4c7ca",horizon:"#e4e0ca",middleSky:"#72aac7",zenith:"#3c83b9",sunlight:"#fff0ca",cloudLight:"#fff8e5",cloudShadow:"#abc8d3"}),horizonElevation:-.23,middleElevation:.25,fog:Object.freeze({color:"#e4e0ca",near:42,far:125}),lighting:Object.freeze({keyColor:"#ffebcc",keyIntensity:2.7,fillSkyColor:"#dcecf4",fillGroundColor:"#697964",fillIntensity:1.55,exposure:1.06}),radius:450,planetRadius:xe,revision:"radial-horizon-cloud-banks-v2"}),$u=Object.freeze([{azimuth:.05,elevation:-.025,width:.36,thickness:.13,phase:.7,opacity:.88,drift:.0035},{azimuth:1.62,elevation:.061,width:.25,thickness:.1,phase:2.2,opacity:.83,drift:.0035},{azimuth:3.19,elevation:-.065,width:.38,thickness:.14,phase:4.7,opacity:.88,drift:.0035},{azimuth:4.93,elevation:.041,width:.28,thickness:.11,phase:1.6,opacity:.84,drift:.0035},{azimuth:2.24,elevation:.203,width:.3,thickness:.026,phase:3.4,opacity:.38,drift:.0021},{azimuth:5.66,elevation:.251,width:.4,thickness:.024,phase:.5,opacity:.3,drift:.0021}]),Ri=Object.fromEntries(Object.entries(yt.palette).map(([i,e])=>[i,new he(e)])),Oi=new w(0,1,0),Ih=new w(-.64,.27,-.72).normalize();function xr(i,e){const t=i.lengthSq();return Number.isFinite(t)&&t>1e-12?i.clone().multiplyScalar(1/Math.sqrt(t)):e.clone()}function Yu(i){const e=Ih.clone().addScaledVector(i,-Ih.dot(i));return e.lengthSq()<1e-8&&e.set(Math.abs(i.x)<.8?1:0,0,Math.abs(i.x)<.8?0:1).projectOnPlane(i),e.normalize()}function po(i){const e=xr(i,Oi);return Yu(e).multiplyScalar(.82).addScaledVector(e,.57).normalize()}function Dh(i,e,t){const n=xr(e,Oi),r=xr(t??po(n),po(n)),s=r.clone().addScaledVector(n,-r.dot(n));s.lengthSq()<1e-8&&s.copy(Yu(n)),s.normalize();const o=new w().crossVectors(n,s).normalize();return{direction:xr(i,n),up:n,sun:r,right:o,forward:s}}const Ci=i=>`vec3(${i.r.toFixed(9)}, ${i.g.toFixed(9)}, ${i.b.toFixed(9)})`,Xs=i=>Number.isInteger(i)?`${i}.0`:String(i),Jx=`
varying vec3 vSkyDirection;
void main() {
  // modelMatrix translation follows the camera; subtracting its position gives
  // a genuine world-space ray, regardless of camera rotation or hemisphere.
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vSkyDirection = worldPosition.xyz - cameraPosition;
  vec4 clip = projectionMatrix * viewMatrix * worldPosition;
  gl_Position = clip.xyww; // sky is on the far plane and never clips nearby land
}
`,Qx=`
uniform vec3 uUp;
uniform vec3 uSun;
uniform vec3 uRight;
uniform vec3 uForward;
uniform float uTime;
uniform float uHorizonDip;
const vec3 LOWER = ${Ci(Ri.lowerSky)};
const vec3 HORIZON = ${Ci(Ri.horizon)};
const vec3 MIDDLE = ${Ci(Ri.middleSky)};
const vec3 ZENITH = ${Ci(Ri.zenith)};
const vec3 SUNLIGHT = ${Ci(Ri.sunlight)};
const vec3 CLOUD_SHADOW = ${Ci(Ri.cloudShadow)};
const vec3 CLOUD_LIGHT = ${Ci(Ri.cloudLight)};
vec3 cloudBank(vec3 sky, vec2 azimuth, float elevation, float cloudFade, float sunDot,
  float center, float bankHeight, float width, float thickness, float phase, float opacity, float drift) {
  float angle = center + uTime * drift;
  float cosine = cos(angle), sine = sin(angle);
  float toward = dot(azimuth, vec2(sine, cosine));
  float horizontal = (1.0 - toward) / (1.0 - cos(width));
  if (horizontal >= 1.12) return sky;
  float side = dot(azimuth, vec2(cosine, -sine)) / sin(width);
  float v = (elevation - bankHeight) / thickness;
  float crown = .68 - .5 * side * side + .27 * cos(side * 5.0 + phase) + .16 * sin(side * 11.0 - phase);
  float base = -.38 + .10 * sin(side * 4.0 + phase);
  float body = smoothstep(base - .12, base + .10, v) * (1.0 - smoothstep(crown - .12, crown + .12, v));
  float shoulder = 1.0 - smoothstep(.68, 1.12, horizontal);
  float light = clamp(.58 + .29 * v + .09 * sunDot, 0.0, 1.0);
  return mix(sky, mix(CLOUD_SHADOW, CLOUD_LIGHT, light), body * shoulder * opacity * cloudFade);
}
vec3 sampleAtmosphereDirection(vec3 direction) {
  vec3 ray = normalize(direction);
  float h = dot(ray, uUp) - uHorizonDip + ${Xs(yt.horizonElevation)};
  float lowToMiddle = pow(smoothstep(${Xs(yt.horizonElevation)}, ${Xs(yt.middleElevation)}, h), .72);
  vec3 sky = mix(HORIZON, MIDDLE, lowToMiddle);
  sky = mix(sky, ZENITH, smoothstep(.15, .98, h));
  sky = mix(sky, LOWER, 1.0 - smoothstep(-.48, -.21, h));
  float sunDot = clamp(dot(ray, uSun), -1.0, 1.0);
  float glow = exp((sunDot - 1.0) * 14.0) * .13 + exp((sunDot - 1.0) * 100.0) * .22
    + smoothstep(.9991, .99985, sunDot) * .50;
  sky += SUNLIGHT * glow;
  vec2 azimuth = vec2(dot(ray, uRight), dot(ray, uForward));
  float horizontalLength = length(azimuth);
  float cloudFade = 1.0 - smoothstep(.21, .32, h);
  if (horizontalLength > .00001 && h > -.25 && cloudFade > 0.0) {
    azimuth /= horizontalLength;
    ${$u.map(i=>`sky = cloudBank(sky, azimuth, h, cloudFade, sunDot, ${[i.azimuth,i.elevation,i.width,i.thickness,i.phase,i.opacity,i.drift].map(Xs).join(", ")});`).join(`
    `)}
  }
  return sky;
}
`,ev=`
varying vec3 vSkyDirection;
${Qx}
void main() {
  gl_FragColor = vec4(sampleAtmosphereDirection(vSkyDirection), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function tv(){const i=new Ln;i.name="local-up-atmosphere";const e=po(Oi),t={up:Oi.clone(),sunDirection:e,right:new w,forward:new w,horizonDip:yt.horizonElevation,elapsed:0},n=new Ft;let r=!1;const s=new Qn({name:"local-up-gradient-cloud-banks",vertexShader:Jx,fragmentShader:ev,uniforms:{uUp:{value:t.up},uSun:{value:e},uRight:{value:t.right},uForward:{value:t.forward},uTime:{value:0},uHorizonDip:{value:t.horizonDip}},side:Vt,depthWrite:!1,depthTest:!1,fog:!1,transparent:!1,toneMapped:!0}),o=new yo(yt.radius,32,20),a=new rt(o,s);a.name="distant-sky-only",a.renderOrder=-1e3,a.frustumCulled=!1,a.castShadow=!1,a.receiveShadow=!1,a.raycast=()=>{},i.add(a);const l=Dh(Oi,Oi,e);t.forward.copy(l.forward),t.right.copy(l.right);function c(h,u,d,f){const g=xr(h,xr(u,Oi)),_=Dh(g,g,f);r?(n.setFromUnitVectors(t.up,g),t.forward.applyQuaternion(n).projectOnPlane(g).normalize(),t.forward.lengthSq()<1e-8&&t.forward.copy(_.forward)):(t.forward.copy(_.forward),r=!0),t.right.crossVectors(g,t.forward).normalize(),t.up.copy(g),f?e.copy(_.sun):e.copy(t.forward).multiplyScalar(.82).addScaledVector(g,.57).normalize();const m=h.length();t.horizonDip=Number.isFinite(m)&&m>xe?-Math.sqrt(Math.max(0,1-(xe/m)**2)):0,t.elapsed=Number.isFinite(d)?d:0,i.position.copy(h),s.uniforms.uTime.value=t.elapsed,s.uniforms.uHorizonDip.value=t.horizonDip}return{group:i,state:t,sunDirection:e,update:c,dispose(){o.dispose(),s.dispose(),i.remove(a)}}}const nv=Object.freeze({near:42,far:125,thinFrom:5,thinTo:35,highAltitudeFactor:.6}),Lh=new WeakSet;function ju(i){if(Lh.has(i))return;Lh.add(i);const e=i.onBeforeCompile,t=i.customProgramCacheKey.bind(i);i.onBeforeCompile=function(n,r){e.call(this,n,r),n.vertexShader=`varying vec3 vAtmospherePosition;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <fog_vertex>",`#include <fog_vertex>
 vec4 atmospherePosition=vec4(transformed,1.0);
 #ifdef USE_INSTANCING
 atmospherePosition=instanceMatrix*atmospherePosition;
 #endif
 vAtmospherePosition=(modelMatrix*atmospherePosition).xyz;`),n.fragmentShader=`varying vec3 vAtmospherePosition;
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <fog_fragment>",`#ifdef USE_FOG
 float atmosphereHeight=max(0.0,length(vAtmospherePosition)-${xe.toFixed(1)});
 float atmosphereFog=smoothstep(fogNear,fogFar,vFogDepth)*(1.0-0.4*smoothstep(5.0,35.0,atmosphereHeight));
 gl_FragColor.rgb=mix(gl_FragColor.rgb,fogColor,atmosphereFog);
 #endif`)},i.customProgramCacheKey=()=>t()+"-radial-height-fog-v1",i.userData.heightFog={...nv},i.needsUpdate=!0}const zi=i=>Math.max(0,Math.min(1,i));function it(i,e,t){const n=zi((t-i)/(e-i));return n*n*(3-2*n)}function Ku(i,e,t,n){const r=n.x-t.x,s=n.z-t.z,o=zi(((i-t.x)*r+(e-t.z)*s)/(r*r+s*s||1)),a=i-t.x-r*o,l=e-t.z-s*o;return{t:o,d:Math.hypot(a,l),side:r*l-s*a}}function ki(i,e,t){let n=1/0;for(let r=1;r<t.length;r++)n=Math.min(n,Ku(i,e,{x:t[r-1][0],z:t[r-1][1]},{x:t[r][0],z:t[r][1]}).d);return n}const iv=[{id:"crown-main-watershed",steepSide:-1,knots:[{x:-53,z:-88,height:3,width:6},{x:-43,z:-87,height:18,width:14},{x:-32,z:-83,height:28,width:18},{x:-17,z:-73,height:17,width:14},{x:-6,z:-65,height:25,width:17},{x:6,z:-73,height:17,width:12},{x:18,z:-78,height:10.5,width:9},{x:22,z:-91,height:20,width:16},{x:35,z:-95,height:33,width:20},{x:49,z:-96,height:17,width:14},{x:59,z:-97,height:0,width:8}]},{id:"western-lake-buttress",steepSide:1,knots:[{x:-32,z:-83,height:22,width:8},{x:-40,z:-69,height:12,width:8},{x:-44,z:-59,height:3,width:7},{x:-46,z:-52,height:0,width:5}]},{id:"eastern-lake-buttress",steepSide:-1,knots:[{x:-6,z:-65,height:22,width:9},{x:1,z:-56,height:10,width:8},{x:7,z:-47,height:3,width:7},{x:12,z:-39,height:0,width:5}]},{id:"crown-eastern-fan",steepSide:1,knots:[{x:35,z:-95,height:32,width:13},{x:47,z:-87,height:22,width:12},{x:56,z:-76,height:10,width:13},{x:63,z:-63,height:0,width:12}]},{id:"crown-front-buttress",steepSide:-1,knots:[{x:35,z:-95,height:32,width:12},{x:35,z:-85,height:23,width:11},{x:29,z:-72,height:10,width:12},{x:25,z:-59,height:0,width:11}]},{id:"western-front-fan",steepSide:1,knots:[{x:-32,z:-83,height:27,width:14},{x:-27,z:-72,height:17,width:12},{x:-32,z:-60,height:7,width:12},{x:-37,z:-49,height:0,width:10}]}],Vr={x:18,z:-78,rx:8.5,rz:6.5,relief:10.5},Zu=[[-24,-75],[-25,-66],[-23,-58],[-22,-51]];function Ju(i,e,t){let n=0;for(const r of t)for(let s=1;s<r.knots.length;s++){const o=r.knots[s-1],a=r.knots[s],l=Ku(i,e,o,a),c=o.height+(a.height-o.height)*l.t,h=it(0,.18,l.t)*(1-it(.82,1,l.t)),u=(o.width+(a.width-o.width)*l.t)*(1+h*(l.side*(r.steepSide??1)>0?-.22:.12)),f=l.d/(u*2.05),g=Math.pow(Math.max(0,1-f),1.65),_=l.side*(r.steepSide??1)>0?.035*(1-it(.1,.3,f))*it(.03,.1,f)*h:0;n=Math.max(n,c*(g+_))}return n}function Zc(i,e){if(i<-100||i>100||e<-150||e>-10)return 0;let t=Ju(i,e,iv);const n=(c,h,u,d,f)=>f*Math.max(0,1-Math.abs(i-c)/u-Math.abs(e-h)/d)**.85;t+=n(35,-95,10,11,1.5)+n(-32,-83,9,10,.8);const r=Math.hypot((i-Vr.x)/Vr.rx,(e-Vr.z)/Vr.rz),s=1-it(.5,1.35,r);t=t*(1-s)+Math.min(t,Vr.relief)*s;const o=11+6*zi((-e-78)/26),a=(1-it(5,12,ki(i,e,[[18,-76],[17,-86],[18,-95],[15,-104]])))*(1-it(-75,-68,e));t=t*(1-a)+Math.min(t,o)*a;for(const c of[{points:[[40,-92],[43,-84],[45,-76],[49,-65],[51,-57]],depth:5.8},{points:[[29,-92],[25,-85],[21,-73],[15,-64]],depth:4.8},{points:[[-29,-80],[-21,-70],[-22,-60],[-22,-51]],depth:5.2}]){const h=ki(i,e,c.points),u=c.points[0],d=c.points[c.points.length-1],f=it(1,8,Math.hypot(i-u[0],e-u[1])),g=it(0,7,Math.hypot(i-d[0],e-d[1]));t-=Math.min(t*.6,c.depth)*f*g*(1-it(.7,5.5,h))}const l=1-it(1.4,5.5,ki(i,e,Zu));return Math.max(0,t-4*l)}const Qu=[{id:"west-quarry-tableland",x:-29,z:-22,rx:13,rz:19,height:17,rotation:-.17},{id:"northeast-high-tableland",x:26,z:19,rx:13.5,rz:17,height:21,rotation:.23},{id:"southeast-lower-butte",x:27,z:-15,rx:8.5,rz:10.5,height:12,rotation:-.1}],rv=[[[-29,-38],[-27,-27],[-23,-16],[-17,-8]],[[30,35],[26,25],[20,14],[15,5]]];function ed(i,e,t){const n=i-t.x,r=e-t.z,s=Math.cos(t.rotation),o=Math.sin(t.rotation),a=(n*s+r*o)/t.rx,l=(-n*o+r*s)/t.rz,c=Math.atan2(l,a);return(Math.abs(a)**4+Math.abs(l)**4)**.25*(1+.045*Math.sin(c*3)+.03*Math.cos(c*5+1.3))}function sv(i,e,t){const n=ed(i,e,t),r=.7*(1-it(.72,.94,n)),s=.16*(1-it(1.02,1.19,n)),o=.14*(1-it(.94,1.55,n)),a=(.012*(i-t.x)-.009*(e-t.z))*(1-it(.6,.9,n));return Math.max(0,t.height*(r+s+o)+a)}function Jc(i,e){if(i<-58||i>58||e<-57||e>55)return 0;let t=0;for(const r of Qu)t=Math.max(t,sv(i,e,r));let n=0;for(const r of rv)n=Math.max(n,1-it(.8,2.5,ki(i,e,r)));return Math.max(0,t-Math.min(5.5,t*.6)*n)}const ov=[{id:"southern-divide",steepSide:-1,knots:[{x:-43,z:-29,height:1,width:6},{x:-29,z:-26,height:25,width:18},{x:-18,z:-22,height:18,width:13},{x:-8,z:-17,height:6,width:7},{x:0,z:-16,height:1.5,width:6},{x:10,z:-20,height:8,width:7},{x:25,z:-29,height:30,width:20},{x:37,z:-23,height:16,width:13},{x:44,z:-14,height:0,width:6}]},{id:"western-glacial-buttress",steepSide:1,knots:[{x:-29,z:-26,height:21,width:8},{x:-37,z:-14,height:11,width:8},{x:-36,z:-3,height:3,width:7},{x:-31,z:8,height:0,width:5}]},{id:"eastern-glacial-buttress",steepSide:-1,knots:[{x:25,z:-29,height:26,width:9},{x:32,z:-17,height:14,width:8},{x:34,z:-7,height:4,width:7},{x:39,z:1,height:0,width:5}]},{id:"lower-southern-amphitheatre",steepSide:1,knots:[{x:-18,z:39,height:0,width:6},{x:-5,z:39,height:10,width:9},{x:11,z:36,height:16,width:14},{x:22,z:34,height:11,width:8},{x:32,z:38,height:0,width:5}]}],td=[[0,-48],[0,-30],[0,-16],[-3,-3],[-11,14],[-12,27]];function Qc(i,e){if(i<-90||i>90||e<-90||e>85)return 0;let t=Ju(i,e,ov);t+=1.3*Math.max(0,1-Math.abs(i-25)/10-Math.abs(e+29)/11)**.8,t+=.8*Math.max(0,1-Math.abs(i+29)/10-Math.abs(e+26)/10)**.9;const n=ki(i,e,td),r=1-it(7,15.5,n);t=t*(1-r)+Math.min(t,.65+.035*n*n)*r;const s=Math.hypot((i+11)/19,(e-14)/18),o=1-it(.7,1.28,s);return t=t*(1-o)+Math.min(t,.4+s*s)*o,Math.max(0,t)}function av(i,e,t,n){const r=i==="north"||i==="crownspine",s=i==="redmesa",o=i==="frostmere";if(!r&&!s&&!o)return{rock:0,talus:0,wetvalley:0,plateau:0};const a=r?Zc:s?Jc:Qc,l=a(e,t),c=n??Math.hypot((a(e+.3,t)-a(e-.3,t))/.6,(a(e,t+.3)-a(e,t-.3))/.6),h=it(.55,1.35,c)*it(1.5,7,l),u=it(.08,.45,c)*(1-it(.75,1.4,c))*it(.2,2,l)*(1-it(10,18,l)),d=r?(1-it(1.5,6,ki(e,t,Zu)))*(1-it(7,14,l)):o?(1-it(4,10,ki(e,t,td)))*(1-it(3,8,l))*.55:0,f=s?Math.max(...Qu.map(g=>1-it(.52,.78,ed(e,t,g)))):0;return{rock:zi(h),talus:zi(u),wetvalley:zi(d),plateau:zi(f)}}function cv(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function mo(i,e){const t=Math.hypot((i+22)/14,(e+43)/10),n=Math.hypot((i+25)/4.2,(e+52)/6.3),r=Math.hypot((i+16)/6.3,(e+36)/4.6),s=(l,c)=>{const h=Math.max(0,.16-Math.abs(l-c))/.16;return Math.min(l,c)-h*h*.04},o=s(s(t,n),r),a=1.28*(1-cv(0,1.6,Math.hypot((i+34)/3.8,(e+44)/5.5)));return Math.max(0,o,a)}const Yt={x:-22,z:-43,rx:23,rz:16.56,level:1.25};function lv(i,e){return Math.hypot((i-Yt.x)/Yt.rx,(e-Yt.z)/Yt.rz)<=1}const go=[{id:"bramble",name:"Bramblefield",x:0,z:32,radius:23,description:"Windmills, warm hearths and golden fields"},{id:"harbour",name:"Bellweather Harbour",x:39,z:7,radius:30,description:"Market streets above the eastern sea"},{id:"cedar",name:"Cedar Hollow",x:-46,z:0,radius:26,description:"A timber village beneath the tall green canopy"},{id:"lake",name:"Mirrorwater",x:-22,z:-43,radius:23,description:"A sheltered blue tarn beneath the Crownspine"},{id:"pass",name:"Crownspine Pass",x:18,z:-78,radius:24,description:"The high road between the pale summits"},{id:"quarry",name:"Cinderwatch",x:58,z:-52,radius:23,description:"Broken stone and the silent abandoned quarry"}],To=[{id:"bramble-lane",points:[[-12,35],[0,35],[8,31],[15,33]],width:2.7,style:"road"},{id:"south-trade",points:[[0,35],[12,27],[24,23],[33,19],[39,16],[39,7]],width:3.3,style:"road"},{id:"market-street",points:[[23,7],[31,7],[39,7],[49,7]],width:4.1,style:"road"},{id:"harbour-spine",points:[[39,26],[39,16],[39,7],[39,-3],[39,-17]],width:3.5,style:"road"},{id:"west-city-lane",points:[[26,23],[26,15],[26,7],[26,-2],[26,-13],[39,-17]],width:2.5,style:"road"},{id:"quay-lane",points:[[49,23],[49,16],[49,7],[49,-1],[44,-12],[39,-17]],width:2.6,style:"road"},{id:"quarry-road",points:[[39,-17],[40,-27],[46,-36],[48,-43],[56,-49],[58,-52]],width:3,style:"road"},{id:"high-road",points:[[58,-52],[49,-59],[41,-66],[46,-72],[32,-80],[24,-78],[18,-78]],width:2.6,style:"road"},{id:"lake-descent",points:[[18,-78],[10,-74],[14,-67],[1,-57],[-9,-58],[-25,-59],[-39,-56],[-41,-43],[-39,-30],[-33,-25]],width:2.4,style:"trail"},{id:"timber-road",points:[[-33,-25],[-43,-17],[-46,0],[-32,16],[-15,25],[0,35]],width:3,style:"road"},{id:"cross-country",points:[[-46,0],[-31,2],[-18,0],[-2,3],[13,7],[23,7]],width:3.2,style:"road"},{id:"lake-hamlet",points:[[-33,-25],[-23,-23],[-9,-27],[-5,-34]],width:2,style:"trail"},{id:"southern-beach",points:[[0,35],[6,49],[12,62],[19,74]],width:2,style:"trail"},{id:"quarry-yard",points:[[58,-52],[64,-55],[65,-63]],width:2.5,style:"trail"}],Zt=[];function Le(i,e,t,n,r=0,s,o=!1){Zt.push({key:i,x:e,z:t,height:n,yaw:r,radius:s,foundation:o})}function Dt(i,e,t,n,r=0){Le(i,e,t,n,r,void 0,!0)}for(const i of[[-17,34,4.1,Math.PI/2],[-2,28,4.5,0],[-9.5,40.5,4.2,Math.PI/2],[10.5,44.3,4.6,-Math.PI/2]])Dt("house",...i);Dt("house2",9,23,5,-.65);Dt("tavern",-2.5,43,5.4,Math.PI/3);Dt("windmill",17,39,7.8,-.3);Dt("well",4,27,1.6);const hv=[["house",20,-8,4.5,Math.PI/2],["house2",20,1,5,Math.PI/2],["house",20,14,4.7,Math.PI/2],["house2",11,-8,5.2,Math.PI/2],["house2",31,-9,5.5,Math.PI/2],["house",33,-1,4.7,Math.PI/2],["house2",33,14,5.2,Math.PI/2],["house",31,24.5,4.5,Math.PI/2],["house",32,-37,4.7,Math.PI/2],["house2",44,1,5.2,-Math.PI/2],["house",44,13,4.5,-Math.PI/2],["house2",44,22,4.9,-Math.PI/2],["house",32,-21,4.5,.1],["house2",33,-29,6.5,0],["tavern",46,-20,5.8,-.2],["house2",24,30,5.1,Math.PI],["house",32,30,4.7,Math.PI],["tavern",42,31,5.8,Math.PI],["house",15,3,4.5,Math.PI/2],["house2",14,13,4.8,Math.PI/2],["house",14,21.5,4.4,Math.PI/2]];hv.forEach(i=>Dt(...i));Dt("well",34,3,1.6);Dt("house",-52,-7,4.3,Math.PI/2);Dt("house2",-52,3,4.7,Math.PI/2);Dt("house",-39,-7,4.2,-Math.PI/2);Dt("tavern",-33,7,4.8,-Math.PI/2);Dt("house",1,-33,4.1,-Math.PI/2);Dt("house2",0,-25,4.3,Math.PI);Dt("house",-12,-21,3.8,Math.PI);Dt("house",25,-73,3.4,Math.PI);Dt("house2",64,-47,3.8,Math.PI);Dt("house",70,-54,3.4,-Math.PI/2);for(const[i,e]of[[17,35],[19,35],[6,24.5],[45,18],[46,18],[47,26],[21,18],[-39,3],[-38,4],[1,-36],[62,-48],[67,-56]])Le("barrel",i,e,.75,0,.32);for(const[i,e]of[[16,34],[18,34],[44,18],[45,26],[46,26],[22,19],[-37,4],[-38,5],[-40,4],[0,-37],[63,-48],[68,-56]])Le("crate",i,e,.75,.15,.4);function Yi(i,e){let t=1/0;for(const n of To)for(let r=1;r<n.points.length;r++){const s=n.points[r-1],o=n.points[r],a=o[0]-s[0],l=o[1]-s[1],c=Math.max(0,Math.min(1,((i-s[0])*a+(e-s[1])*l)/(a*a+l*l)));t=Math.min(t,Math.hypot(i-s[0]-c*a,e-s[1]-c*l)-n.width/2)}return t}function uv(i,e){return i<-74&&e>5||Yi(i,e)<2.1||((i+22)/17)**2+((e+43)/13)**2<1||Math.hypot((i+46)*1.1,e)<13?!1:!Zt.some(t=>t.foundation&&Math.hypot(t.x-i,t.z-e)<5)}const dv=[{x:-63,z:-4,rx:16,rz:24,step:4.1,h:8},{x:-55,z:-31,rx:13,rz:15,step:4.2,h:8.5},{x:-40,z:19,rx:16,rz:13,step:4.6,h:6.3},{x:-13,z:45,rx:10,rz:12,step:5.2,h:4.5},{x:5,z:-48,rx:8,rz:10,step:4.5,h:6.1},{x:40,z:-47,rx:9,rz:12,step:4.6,h:5.5}];for(const[i,e]of dv.entries())for(let t=-7;t<=7;t++)for(let n=-7;n<=7;n++){const r=e.x+n*e.step+Math.sin(t*2+i)*.9,s=e.z+t*e.step+Math.sin(n*1.7)*.8;if(((r-e.x)/e.rx)**2+((s-e.z)/e.rz)**2>1||!uv(r,s))continue;const o=i===3?(t+n)%2?"forestTree3":"forestTree1":i>=4?"forestTree4":["forestTree1","forestTree2","forestTree3"][Math.abs(t+n)%3];Le(o,r,s,e.h+Math.sin(t*3+n)*.8,n*.7+t*.3,.48)}for(const i of[{x:-38,z:-49,n:7,h:1},{x:-15,z:-54,n:5,h:.8},{x:2,z:-70,n:8,h:2.3},{x:32,z:-87,n:9,h:2.8},{x:69,z:-64,n:9,h:2},{x:75,z:-53,n:7,h:1.5}])for(let e=0;e<i.n;e++){const t=i.x+Math.cos(e*1.7)*(2+e*.45),n=i.z+Math.sin(e*1.7)*(2+e*.35);Yi(t,n)>2&&mo(t,n)>1.22&&Le("rock",t,n,i.h*(.8+e%3*.16),e*.9,.6)}for(const[i,e]of[[-70,-9],[-62,15],[-52,-27],[-42,23],[-48,-39]])for(let t=0;t<6;t++){const n=i+Math.cos(t*1.4)*3.8,r=e+Math.sin(t*1.4)*4.2;Yi(n,r)>2.4&&Le(t%2?"bush1":"bush2",n,r,.55+t%3*.12,t,void 0)}for(const[i,e,t]of[[-32,-7,.2],[-30,-7,.2],[-28,-7,.2],[-30,-10,1.5]])Le("woodLog",i,e,.65,t,.45);Le("woodPile",-32,-11,1.05,.2,.85);Le("woodPile",-28,-11,.85,.2,.7);for(const[i,e]of[[-12,52],[17,47]])for(let t=0;t<4;t++)for(let n=0;n<6;n++)Le("craftedMeadow",i+n*.85,e+t*1.35,.35+n%3*.025,.15+t*.23,0);Le("ruinArch",48,-43,5.5,2.2);Le("ruinPillar",44,-45,4.3,.6,1);Le("ruinRubble",49,-39,1.4,.5,1.2);Le("ruinArch",65,-63,6.2,0);Le("ruinWall",59,-64,5.2,.05,1.3);Le("ruinWall",71,-64,4.2,-.15,1.1);Le("ruinPillar",73,-59,5,.1,1.1);Le("ruinRubble",73,-61,1.8,.3,1.3);Le("ruinRubble",62,-59,1.4,.8,1.1);Le("ruinWall",74,-55,3.5,Math.PI/2,1);for(const[i,e]of[[45.5,-44],[50,-41],[62.5,-62],[67.5,-62]])Le("torch",i,e,1.2,0,.25);for(const[i,e,t,n]of[["stonePile",70,-60,1.3],["ironOre",69,-58,.65],["copperOre",70,-57,.55],["goldOre",69,-56,.45],["chest",61,-46,.9]])Le(i,e,t,n,.2,.4);for(const[i,e,t]of[[76,-47,4.5],[72,-70,4.1],[55,-68,3.5],[80,-59,4.8]])Le("deadTree",i,e,t,.3,.3);for(const[i,e,t]of[[-37,-48,1.1],[-31,-55,1.2],[-8,-48,.9],[28,-88,2.5],[2,-71,2],[-37,-76,2.5]])Yi(i,e)>2.2&&Le("forestRock1",i,e,t,.2,.7);for(const[i,e,t]of[[6,-77,5.5],[14,-84,5.2],[29,-80,4.8],[33,-72,5.4]])Yi(i,e)>2.5&&Le("forestTree4",i,e,t,.2,.4);function gi(i,e,t){return!(Yi(i,e)<t+.75||Zt.some(n=>n.foundation&&Math.hypot(i-n.x,e-n.z)<n.height*.62+t+1))}for(const[i,e,t,n]of[[-9,-72,4.2,.3],[-3,-70,3.5,1.1],[-13,-67,3.1,.8],[-4,-77,3.6,2],[19,-94,3.8,.4],[25,-91,4.5,1.2],[31,-92,3.6,.7],[23,-99,3.2,2.1],[-37,-86,4.1,.5],[-30,-88,4.5,1.7],[-26,-80,3.5,.2],[-39,-79,3.2,2]])gi(i,e,t*.72)&&Le("forestRock2",i,e,t,n,t*.4);for(const i of[{x:-15,z:-69},{x:32,z:-93},{x:-38,z:-74}])for(let e=0;e<3;e++)for(let t=0;t<4;t++){const n=i.x+(t-1.5)*2.2+e*.7,r=i.z+e*2.2,s=1.9-e*.4+t%2*.3;gi(n,r,s*.9)&&Le(t%2?"forestRock1":"forestRock2",n,r,s,t*.8+e*.4,s*.45)}for(const i of[{x:-9.5,z:-40.5,flip:1},{x:-32,z:-35,flip:-1},{x:-27,z:-53,flip:1}]){for(const[e,t,n]of[[0,0,1.35],[1.6,.5,.72],[-1.4,.8,.85],[.8,-1.2,.48]]){const r=i.x+e*i.flip,s=i.z+t;mo(r,s)>1.08&&gi(r,s,n*.8)&&Le("forestRock2",r,s,n,e,.45)}for(const[e,t,n]of[[-1.1,1.9,.29],[-.5,2.35,.38],[.15,2,.31],[.5,2.6,.42],[1.2,2.3,.28]]){const r=i.x+i.flip*e,s=i.z+t;mo(r,s)>1.12&&gi(r,s,.3)&&Le("craftedMeadow",r,s,n,e*1.7,0)}}for(const[i,e]of[[-12,52],[17,47]]){for(let t=0;t<3;t++)for(const n of[i-1.35,i+5.85])gi(n,e+t*2.05+.6,1.1)&&Le("craftedFence",n,e+t*2.05+.6,.75,Math.PI/2);for(const[t,n]of[[i-1.1,e-.7],[i+5.7,e-.7]])gi(t,n,.75)&&Le("forestRock2",t,n,.55,.1,.4);Le("woodPile",i+5.5,e-2.2,.65,.2,.65)}for(let i=0;i<3;i++)for(let e=0;e<4;e++){const t=-25+e*4.2,n=58+i*4.4;gi(t,n,2)&&!Zt.some(r=>/tree/i.test(r.key)&&Math.hypot(t-r.x,n-r.z)<3.8)&&Le("forestTree3",t,n,3.8+e%2*.35,.25+i*.2,.38)}for(const[i,e,t]of[[21,-49,5.1],[24,-53,5.8],[28,-48,5.6],[30,-55,6.1],[34,-53,5.5],[22,-58,4.9],[29,-61,5.1]])gi(i,e,2)&&Le("forestTree4",i,e,t,.4,.4);for(let i=Zt.length-1;i>=0;i--){const e=Zt[i];if(!(e.key.includes("Tree")||e.key.startsWith("tree")||e.key.startsWith("bush")))continue;let t=1/0;const n=[[-46,0],[-69,-5],[-101.8,0]];for(let r=1;r<n.length;r++){const s=n[r-1],o=n[r],a=o[0]-s[0],l=o[1]-s[1],c=Math.max(0,Math.min(1,((e.x-s[0])*a+(e.z-s[1])*l)/(a*a+l*l)));t=Math.min(t,Math.hypot(e.x-s[0]-c*a,e.z-s[1]-c*l))}t<3.5&&Zt.splice(i,1)}Le("forestTree3",1,21.5,5.8,.4,.45);Le("woodLog",1.6,24,.48,-.2,.35);Le("forestTree2",-7,18.5,6.3,.8,.45);Le("forestTree1",-1.5,15.8,7.1,2.1,.48);Le("forestTree3",6.5,15.2,5.7,-.4,.4);Le("craftedFence",-4.7,24.8,.72,.08);Le("craftedWall",13.4,22,.48,Math.PI/2);Le("barrel",12.3,19.8,.72,.1,.3);const nd=[[-2.3,.5],[-1.8,.2],[-1.4,-.35],[-.9,-.8],[-.3,-1.15],[.25,-.85],[.75,-1.05],[1.35,-.55],[2,-.15],[1.7,.45],[1.05,.3],[.6,.65],[-.3,.7],[-1.05,1.05],[-1.8,1.2],[-.45,1.4]],el=[[-1.3,.4],[-.85,-.25],[-.3,-.65],[.25,-.5],[.8,-.1],[1.2,.35],[.45,.45],[-.15,.7],[-.7,.8]];function fs(i,e,t,n,r=1){const s=Math.cos(t),o=Math.sin(t);for(const[a,[l,c]]of n.entries()){const h=i+r*(l*s-c*o),u=e+r*(l*o+c*s);Yi(h,u)<.65||Zt.some(d=>d.foundation&&Math.hypot(h-d.x,u-d.z)<d.height*.52+.25)||Le("craftedMeadow",h,u,.22+a%4*.035,t+a*2.17,0)}}fs(2,58.4,.18,nd,1.2);fs(15.5,57.3,-.65,nd,.85);fs(-6.1,45.8,.3,el,.9);fs(13.1,47.1,-.1,el,.9);fs(-5.5,36.8,1.2,el,.6);for(let i=Zt.length-1;i>=0;i--){const e=Zt[i];/^(forestRock|rock)/.test(e.key)&&e.z<-50&&Zc(e.x,e.z)>14&&Zt.splice(i,1)}const fn=[{id:"mosswood",name:"Mosswood Reach",description:"Rain-fed forest valleys, timber clearings and the western cliffs",center:[-1,0,0],radius:55,theme:"woodland",height:5,placements:[],roads:[{id:"mosswood-trade",points:[[49,0],[35,-4],[20,-6],[9,-2],[0,0],[-13,7],[-30,9],[-49,0]],width:2.8,style:"road"}]},{id:"redmesa",name:"Red Mesa",description:"Rust-coloured tablelands, an old quarry town and the dry backcountry",center:[0,0,-1],radius:57,theme:"badlands",height:7,placements:[],roads:[{id:"mesa-caravan",points:[[0,49],[-7,32],[-8,18],[0,0],[10,-18],[8,-33],[0,-49]],width:2.8,style:"road"}]},{id:"suncoast",name:"Sunward Terraces",description:"Golden farm terraces, sheltered orchards and an eastern market town",center:[1,0,0],radius:52,theme:"badlands",height:5,placements:[],roads:[{id:"sunward-trade",points:[[-47,0],[-31,5],[-16,4],[0,0],[15,-6],[31,-5],[47,0]],width:2.8,style:"road"}]},{id:"frostmere",name:"Frostmere Highlands",description:"Southern alpine moors, pale ridges and a sheltered watch village",center:[0,-1,0],radius:58,theme:"highland",height:8,placements:[],roads:[{id:"southern-pass",points:[[50,0],[34,5],[18,4],[0,0],[-18,-5],[-34,-4],[-50,0]],width:2.7,style:"road"},{id:"southern-backroad",points:[[0,-50],[0,-33],[0,-16],[0,0]],width:2.5,style:"trail"}]}],_i=96;function qs(i,e){const t=Math.hypot(i,e),n=Math.sin(t/_i)/(t||1);return[i*n,Math.cos(t/_i),e*n]}function $t(i,e,t){const n=Math.hypot(i,e,t);return[i/n,e/n,t/n]}const $s=Math.sin(49/_i),Ys=Math.cos(49/_i),Uh=Math.sin(47/_i),Nh=Math.cos(47/_i),da=Math.sin(50/_i),fa=Math.cos(50/_i),fv=[{id:"cedar-western-shoulder",points:[qs(-46,0),qs(-69,-5),$t(-Ys,$s,0)],width:2.8,landWidth:44,heights:[4,4.5,5]},{id:"quarry-eastern-shoulder",points:[qs(58,-52),$t(.8,.5,-.32),$t(Nh,Uh,0)],width:2.8,landWidth:40,heights:[7,6,5]},{id:"crown-rear-shoulder",points:[qs(18,-78),$t(.06,.6,-.8),$t(0,$s,-Ys)],width:2.7,landWidth:36,heights:[13,10,7]},{id:"western-south-neck",points:[$t(-Ys,-$s,0),$t(-.72,-.69,.06),$t(-da,-fa,0)],width:2.8,landWidth:25,heights:[5,6,8]},{id:"eastern-south-uplands",points:[$t(Nh,-Uh,0),$t(.7,-.71,-.07),$t(da,-fa,0)],width:2.8,landWidth:43,heights:[5,6.5,8]},{id:"mesa-southern-ridge",points:[$t(0,-$s,-Ys),$t(-.08,-.7,-.71),$t(0,-fa,-da)],width:2.5,landWidth:34,heights:[7,7.5,8]}];function vi(i,e,t,n=2.3,r="trail"){i.roads.push({id:e,points:t,width:n,style:r})}function _t(i,e,t,n,r,s=0,o,a=!1){i.placements.push({key:e,x:t,z:n,height:r,yaw:s,radius:o,foundation:a})}function An(i,e,t,n,r,s=0){_t(i,e,t,n,r,s,void 0,!0)}function id(i,e,t){let n=1/0;for(const r of i.roads)for(let s=1;s<r.points.length;s++){const o=r.points[s-1],a=r.points[s],l=a[0]-o[0],c=a[1]-o[1],h=Math.max(0,Math.min(1,((e-o[0])*l+(t-o[1])*c)/(l*l+c*c||1)));n=Math.min(n,Math.hypot(e-o[0]-h*l,t-o[1]-h*c)-r.width/2)}return n}function ps(i,e,t,n){return Math.hypot(e,t)<i.radius*.8&&id(i,e,t)>n+.8&&!i.placements.some(r=>r.foundation&&Math.hypot(r.x-e,r.z-t)<r.height*.65+n+1)}function bo(i,e,t,n,r){ps(i,t,n,r*.42)&&_t(i,e,t,n,r,(t+n)*.14,.5)}function Dr(i,e,t,n,r){ps(i,t,n,r*.85)&&_t(i,e,t,n,r,(t-n)*.17,r*.5)}const Jt=fn[0],En=fn[1],It=fn[2],Xt=fn[3];vi(Jt,"mosswood-log-yard",[[0,0],[0,-12],[0,-25]],2.5,"road");vi(Jt,"mosswood-cliff-walk",[[-30,9],[-30,20],[-23,29],[-11,32]],2,"trail");An(Jt,"house",-8,-11,4.2,Math.PI/2);An(Jt,"house2",8,-12,4.4,-Math.PI/2);An(Jt,"tavern",-8,-22,4.8,Math.PI/2);An(Jt,"house",8,-25,3.8,-Math.PI/2);for(const[i,e]of[[8,-19],[10,-19],[12,-20],[13,-24],[6,-30]])_t(Jt,"woodLog",i,e,.9,.2,.5);_t(Jt,"woodPile",11,-30,1.25,.15,.9);_t(Jt,"woodPile",8,-33,.9,.15,.7);_t(Jt,"crate",-5,-25,.8,0,.4);for(const i of[{x:-14,z:18,rx:16,rz:15},{x:20,z:20,rx:14,rz:16},{x:-23,z:-17,rx:13,rz:19},{x:24,z:-18,rx:12,rz:15}])for(let e=-4;e<=4;e++)for(let t=-4;t<=4;t++){const n=i.x+t*4.4+Math.sin(e)*.75,r=i.z+e*4.7+Math.cos(t)*.65;((n-i.x)/i.rx)**2+((r-i.z)/i.rz)**2<=1&&bo(Jt,(e+t)%3?"forestTree1":"forestTree2",n,r,7.7+e%3*.45)}for(const[i,e,t]of[[-13,33,2.6],[-7,34,2],[3,34,2.9],[16,34,2.5],[-30,-30,1.8],[-35,-17,2.7]])Dr(Jt,"forestRock2",i,e,t);for(const[i,e]of[[-17,28],[-20,16],[20,28],[31,15],[-30,-15],[22,-30]])ps(Jt,i,e,.6)&&_t(Jt,"bush2",i,e,.8);vi(En,"mesa-work-street",[[0,0],[-12,0],[-26,0]],2.7,"road");vi(En,"mesa-overlook",[[10,-18],[22,-18],[29,-26]],2,"trail");for(const[i,e,t,n,r]of[["house2",-9,8,4.6,Math.PI],["house",-19,8,4.2,Math.PI],["house",-11,-8,4.1,0],["tavern",-22,-8,4.8,0],["house2",9,8,4.7,Math.PI],["house",-30,7,3.9,Math.PI]])An(En,i,e,t,n,r);_t(En,"ruinArch",5,-9,5.8,Math.atan2(10,-18));for(const[i,e,t]of[[-34,19,2.8],[31,8,3.1],[30,-8,2.7]])Dr(En,"forestRock2",i,e,t);for(const[i,e]of[[-25,-21],[-24,29],[27,16],[27,-5]])for(let t=0;t<6;t++)Dr(En,t%2?"forestRock1":"forestRock2",i+Math.cos(t*1.25)*3.4,e+Math.sin(t*1.25)*4.4,1.4+t%3*.45);for(const[i,e,t,n]of[["stonePile",-25,-3,1.3],["ironOre",-22,-3,.7],["copperOre",-19,-4,.6],["goldOre",-28,-4,.55],["woodPile",-16,-4,.8],["crate",-12,-4,.75],["barrel",-9,-4,.85]])_t(En,i,e,t,n,.15,.4);for(const[i,e]of[[15,29],[17,-31],[-18,-32],[-32,13],[34,-17]])bo(En,"deadTree",i,e,4.6);for(const[i,e]of[[-14,30],[18,34],[27,-31],[-33,-12]])ps(En,i,e,.7)&&_t(En,"bush2",i,e,.45);vi(It,"sunward-market-lane",[[0,0],[0,13],[13,19],[27,17]],2.8,"road");vi(It,"sunward-orchard-track",[[-16,4],[-17,18],[-25,26]],2,"trail");for(const[i,e,t,n,r]of[["house2",-5.8,8.8,4.8,Math.PI/2],["house",5.9,7.8,4.2,-Math.PI/2],["tavern",8.5,24,5.2,Math.PI],["house",-7,21,4.2,Math.PI/2],["house2",18,26,4.7,Math.PI],["house",24,9,4.1,0],["house",-25,10,4.1,Math.PI/2],["house2",-27,19,4.5,Math.PI/2]])An(It,i,e,t,n,r);An(It,"windmill",18,-19,7.1,-.6);_t(It,"well",13,11,1.5,0,.7,!0);for(const[i,e]of[[10,14],[11.5,14],[16,22],[18,22],[15,-17]])_t(It,"crate",i,e,.8,.1,.4);for(const[i,e]of[[7,20],[15,22],[21,-18]])_t(It,"barrel",i,e,.85,.1,.35);for(const[i,e]of[[-9,-14],[7,-17]]){for(let t=0;t<4;t++)for(let n=0;n<5;n++)_t(It,"craftedMeadow",i+n*1.3,e+t*1.35,.36+n%3*.025,.15+t*.27,0);for(let t=0;t<3;t++)for(const n of[i-1.6,i+6.6])ps(It,n,e+t*2.05+.4,1.1)&&_t(It,t%2?"craftedWall":"craftedFence",n,e+t*2.05+.4,t%2?.55:.75,Math.PI/2)}for(let i=0;i<3;i++)for(let e=0;e<4;e++)bo(It,"forestTree3",-25+e*4.1,-16+i*4.5,4.3+e%2*.2);for(const[i,e,t]of[[32,-12,2.5],[34,0,1.8],[-31,29,1.9],[21,33,2.1]])Dr(It,"forestRock1",i,e,t);vi(Xt,"frostmere-shelter-lane",[[0,0],[-6,12],[-17,19]],2.4,"road");vi(Xt,"frostmere-lookout",[[18,4],[21,17],[29,26]],2,"trail");An(Xt,"house2",-13,10,4.4,Math.PI/2);An(Xt,"house",2,13,3.9,-Math.PI/2);An(Xt,"tavern",-14,25,4.6,Math.PI);An(Xt,"house",-23,14,3.8,Math.PI/2);_t(Xt,"ruinPillar",-5,-11,5,.3,1.1);_t(Xt,"ruinPillar",5,-11,4.1,-.2,.9);_t(Xt,"torch",-3,-9,1.2,0,.25);_t(Xt,"torch",3,-9,1.2,0,.25);for(const[i,e,t]of[[-27,-21,3.8],[-33,-14,3.2],[-22,-31,4.5],[20,-29,4],[28,-24,4.3],[31,-13,3.5],[6,34,3.3],[-8,35,3]])Dr(Xt,"forestRock2",i,e,t);for(const[i,e]of[[-25,-21],[23,-22],[3,32]])for(let t=0;t<7;t++)Dr(Xt,t%2?"forestRock1":"forestRock2",i+Math.cos(t*1.7)*5,e+Math.sin(t*1.7)*4,1.5+t%3*.6);for(const[i,e]of[[30,12],[-30,26],[-15,-34]])for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)bo(Xt,"forestTree4",i+n*3.8,e+t*4.2,4.8+(t+n)%2*.4);for(const[i,e,t,n]of[["woodPile",-21,23,.9],["barrel",-11,22,.8],["crate",-18,23,.7],["stonePile",-27,20,1.1]])_t(Xt,i,e,t,n,.2,.4);const pv=[{x:-9.875,z:54.025,w:7.2,d:6.2,center:[0,1,0]},{x:19.125,z:49.025,w:7.2,d:6.2,center:[0,1,0]},{x:-6.4,z:-11.975,w:7.2,d:6.2,center:[1,0,0]},{x:9.6,z:-14.975,w:7.2,d:6.2,center:[1,0,0]}];_t(It,"woodLog",3.5,-10.5,.6,1.5,.35);_t(It,"barrel",4.5,-11.7,.72,0,.32);const mv=[[-2.2,.25],[-1.65,-.25],[-1.15,-.8],[-.5,-.6],[0,-1],[.7,-.6],[1.4,-.2],[1.85,.4],[1.25,.9],[.55,.5],[-.2,.85],[-.95,1.3],[-1.65,.85],[-.4,1.65]];function ms(i,e,t,n){const r=Math.cos(t),s=Math.sin(t);for(const[o,[a,l]]of mv.entries()){const c=i+n*(a*r-l*s),h=e+n*(a*s+l*r);id(It,c,h)<.65||It.placements.some(u=>u.foundation&&Math.hypot(c-u.x,h-u.z)<u.height*.52+.25)||_t(It,"craftedMeadow",c,h,.2+o%4*.035,t+o*2.19,0)}}ms(-8.5,-3,.15,1.15);ms(-5,5.2,-.65,.9);ms(5,-8.5,.45,.7);ms(-21,-6,-.35,.8);ms(10.4,26.8,.3,.55);for(const[i,e,t]of[[Xt,Qc,13],[En,Jc,9]])for(let n=i.placements.length-1;n>=0;n--){const r=i.placements[n];/^(forestRock|rock)/.test(r.key)&&e(r.x,r.z)>t&&i.placements.splice(n,1)}const rd=new w(0,1,0);function tl(i){return new Ft().setFromUnitVectors(rd,new w(...i).normalize())}function as(i,e,t){const n=Math.hypot(e,t);return(n<1e-9?rd.clone():new w(Math.sin(n/xe)*e/n,Math.cos(n/xe),Math.sin(n/xe)*t/n)).applyQuaternion(tl(i))}function nl(i,e){const t=e.clone().applyQuaternion(tl(i).invert()),n=Math.acos(Math.max(-1,Math.min(1,t.y)))*xe,r=Math.hypot(t.x,t.z);return r<1e-8?[0,t.y<0?Math.PI*xe:0]:[t.x/r*n,t.z/r*n]}function gv(i,e,t){const n=i.angleTo(e);return n<1e-8?i.clone():i.clone().multiplyScalar(Math.sin((1-t)*n)/Math.sin(n)).addScaledVector(e,Math.sin(t*n)/Math.sin(n)).normalize()}const wo=[...To.map(i=>({...i,points:i.points.map(e=>as([0,1,0],...e)),province:"north"})),...fn.flatMap(i=>i.roads.map(e=>({...e,points:e.points.map(t=>as(i.center,...t)),province:i.id}))),...fv.map(i=>({...i,points:i.points.map(e=>new w(...e).normalize()),style:"road"}))];function sd(i){return i.flatMap(e=>e.points.slice(1).map((t,n)=>{const r=e.points[n],s=r.angleTo(t),o=new w().crossVectors(r,t).normalize(),a=r.clone().add(t).normalize();return{road:e,a:r,b:t,angle:s,cross:o,middle:a,bound:Math.cos(s/2+((e.landWidth??0)/2+15)/xe)}}))}const od=sd(wo);function ad(i,e,t){let n=1/0,r=0,s;for(const o of e){if(t&&!t(o.road)||i.dot(o.middle)<o.bound)continue;const a=i.dot(o.cross),l=i.x-o.cross.x*a,c=i.y-o.cross.y*a,h=i.z-o.cross.z*a,u=Math.atan2((o.a.y*h-o.a.z*c)*o.cross.x+(o.a.z*l-o.a.x*h)*o.cross.y+(o.a.x*c-o.a.y*l)*o.cross.z,o.a.x*l+o.a.y*c+o.a.z*h),d=Math.max(0,Math.min(1,u/o.angle));let f;d<=0?f=Math.acos(Math.max(-1,Math.min(1,i.dot(o.a))))*xe:d>=1?f=Math.acos(Math.max(-1,Math.min(1,i.dot(o.b))))*xe:f=Math.asin(Math.min(1,Math.abs(a)))*xe;const g=f-o.road.width/2;g<n&&(n=g,r=d,s=o)}return{distance:n,t:r,segment:s}}function js(i,e){return ad(i,od,e)}function _v(i,e){return i.distanceToSquared(e)<1e-12}function xv(i){const e=[i.points[0]];for(let t=1;t<i.points.length-1;t++){const n=i.points[t-1],r=i.points[t],s=i.points[t+1];if(wo.some(d=>d!==i&&d.points.some(f=>_v(f,r)))){e.push(r);continue}const a=n.angleTo(r)*xe,l=r.angleTo(s)*xe,c=Math.min(i.width*.65,a*.2,l*.2),h=r.clone().lerp(n,c/a).normalize(),u=r.clone().lerp(s,c/l).normalize();e.push(h);for(let d=1;d<=6;d++){const f=d/6;e.push(h.clone().multiplyScalar((1-f)**2).addScaledVector(r,2*(1-f)*f).addScaledVector(u,f*f).normalize())}}return e.push(i.points.at(-1)),{...i,points:e}}const vv=wo.map(xv),Mv=sd(vv),Fh=new Map;function pa(i){const e=Math.min(15,Math.floor((i.x+1)*8)),t=Math.min(15,Math.floor((i.y+1)*8)),n=Math.min(15,Math.floor((i.z+1)*8)),r=e*256+t*16+n;let s=Fh.get(r);if(!s){const o=new w((e+.5)/8-1,(t+.5)/8-1,(n+.5)/8-1).normalize();s=Mv.filter(a=>o.dot(a.middle)>Math.cos(Math.acos(a.bound)+.17)),Fh.set(r,s)}return ad(i,s)}const et=192,yv=new w(0,1,0),cd=[[0,1,0],[1,0,0],[0,0,1],[-1,0,0],[0,0,-1],[0,-1,0]].map(i=>new w(...i)),ld=cd.map(i=>new Ft().setFromUnitVectors(yv,i)),Sv=ld.map(i=>i.clone().invert());function Mc(i,e,t){return new w(e/et*2-1,1,t/et*2-1).normalize().applyQuaternion(ld[i])}function hd(i){let e=0,t=-1/0;cd.forEach((r,s)=>{const o=i.dot(r);o>t&&(t=o,e=s)});const n=i.clone().applyQuaternion(Sv[e]);return{face:e,col:(n.x/n.y+1)*et/2,row:(n.z/n.y+1)*et/2}}class Ev{constructor(e){this.authored=e}authored;corners=new Map;corner(e,t,n){const r=e*(et+1)**2+n*(et+1)+t;let s=this.corners.get(r);if(!s){const o=Mc(e,t,n);s=o.multiplyScalar(xe+this.authored(o.clone())),this.corners.set(r,s)}return s}height(e){const{face:t,col:n,row:r}=hd(e),s=Math.min(et-1,Math.max(0,Math.floor(n))),o=Math.min(et-1,Math.max(0,Math.floor(r))),a=this.corner(t,s,o),l=this.corner(t,s+1,o),c=this.corner(t,s,o+1),h=this.corner(t,s+1,o+1),u=Oh(e,a,c,l)??Oh(e,l,c,h);if(u===void 0)throw new Error(`Global terrain intersection failed ${t}:${n},${r}`);return u-xe}}const ma=new w,ga=new w,_a=new w,xa=new w,va=new w;function Oh(i,e,t,n){ma.subVectors(t,e),ga.subVectors(n,e),_a.crossVectors(i,ga);const r=ma.dot(_a);if(Math.abs(r)<1e-12)return;const s=1/r;xa.copy(e).negate();const o=xa.dot(_a)*s;if(o<-1e-7||o>1.0000001)return;va.crossVectors(xa,ma);const a=i.dot(va)*s;if(!(a<-1e-7||o+a>1.0000001))return ga.dot(va)*s}function cs(i,e){const t=Math.hypot(i,e);return t<1e-8?new w(0,1,0):new w(Math.sin(t/xe)*i/t,Math.cos(t/xe),Math.sin(t/xe)*e/t)}function xi(i){const e=Math.acos(Math.max(-1,Math.min(1,i.y)))*xe,t=Math.hypot(i.x,i.z);return t<1e-8?[0,i.y<0?Math.PI*xe:0]:[i.x/t*e,i.z/t*e]}function Ve(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function mr(i,e,t,n,r,s,o){return o*Math.exp(-((i-t)**2/r**2+(e-n)**2/s**2)*1.5)}function Tv(i,e){const t=Math.atan2(e,i),n=Math.hypot(i/88,(e+20)/99)*(1+.07*Math.sin(t*3)+.045*Math.cos(t*5));let s=-5+(1-Ve(.76,1.05,n))*(9+.7*Math.sin(i*.071)*Math.cos(e*.059)+.35*Math.sin((i+e)*.12));const o=Math.exp(-(((e-14)/16)**2))*Ve(48,73,i);s-=o*9,s+=Zc(i,e);const a=Math.hypot((i-58)/16,(e+52)/15);s+=5*Math.exp(-(((a-1)/.4)**2))-2*Math.exp(-((a/.6)**2)),s+=mr(i,e,-35,46,24,22,2.8)+mr(i,e,30,53,19,20,3.2);const l=mo(i,e),h=-1.2+(1-Ve(.6,1.5,Math.hypot((i+16)/6.3,(e+36)/4.6)))*1.8;s=s*Ve(.65,1.48,l)+h*(1-Ve(.65,1.48,l));const u=(1-Ve(15,23,Math.abs(i+22)))*Ve(-44,-36,e)*(1-Ve(-27,-22,e)),d=1.75+Math.max(0,e+34)*.12;return s=s*(1-u)+Math.min(s,d)*u,s}function Zr(i,e){const t=4+9*Math.exp(-(((i-18)/40)**2+((e+79)/28)**2))+2.5*Math.exp(-(((i-58)/27)**2+((e+55)/25)**2)),n=1-Ve(13,28,Math.hypot(i+22,(e+43)*1.2));return t*(1-n)+1.85*n}const bv=To.flatMap(i=>i.points.slice(1).map((e,t)=>{const n=i.points[t],r=e[0]-n[0],s=e[1]-n[1];return{x:n[0],z:n[1],dx:r,dz:s,length2:r*r+s*s,bed:i.width*.8}})),wv=Zt.filter(i=>i.foundation).map(i=>({...i,padRadius:i.height*(i.key==="house2"?.59:.69)+.35}));function Av(i,e){let t=Tv(i,e);for(const r of go){if(!["bramble","harbour","cedar"].includes(r.id))continue;const s=Math.hypot(i-r.x,e-r.z),o=r.id==="harbour"?12:7,a=1-Ve(o,o+8,s);t=t*(1-a)+Zr(r.x,r.z)*a}for(const r of wv){const s=Math.hypot(i-r.x,e-r.z);if(s>r.padRadius+3)continue;const o=1-Ve(r.padRadius,r.padRadius+3,s);t=t*(1-o)+Zr(r.x,r.z)*o}let n=1/0;for(const r of bv){const s=Math.max(0,Math.min(1,((i-r.x)*r.dx+(e-r.z)*r.dz)/r.length2));n=Math.min(n,Math.hypot(i-r.x-s*r.dx,e-r.z-s*r.dz)-r.bed)}if(n<4){const r=1-Ve(0,4,n);t=t*(1-r)+Zr(i,e)*r}return t}function Rv(i,e,t,n){return i==="mosswood"?n+2.5*Math.sin(e*.1)*Math.sin(t*.08)+mr(e,t,-20,-22,16,22,8)+mr(e,t,25,19,12,20,6):i==="redmesa"?n+Jc(e,t):i==="suncoast"?n+mr(e,t,-15,-25,28,12,7)+mr(e,t,27,20,16,19,5)+Math.sin(t*.15)*.8:n+Qc(e,t)}function Bh(i){for(const n of fn)if(i.dot(new w(...n.center))>Math.cos((n.radius+2)/xe))return n.height;const[e,t]=xi(i);return Zr(e,t)}const Cv=new Map(od.map(i=>[i,[Bh(i.a),Bh(i.b)]]));function Pv(i){const[e,t]=xi(i);let n=i.y>.05?Av(e,t):-5;for(const a of fn){const l=new w(...a.center),c=i.angleTo(l)*xe;if(c>a.radius*1.22)continue;const[h,u]=nl(a.center,i),d=Math.atan2(u,h),f=a.id==="mosswood"?Math.hypot(h/(a.radius*.94),u/(a.radius*1.1))*(1+.08*Math.sin(d*3+.8)+.05*Math.cos(d*7)):a.id==="redmesa"?Math.hypot(h/(a.radius*1.1),u/(a.radius*.94))*(1+.08*Math.cos(d*4)+.04*Math.sin(d*7)):a.id==="suncoast"?c/a.radius*(1+.12*Math.sin(d*2-1)+.055*Math.cos(d*5+2)):c/a.radius*(1+.06*Math.cos(d*6)+.04*Math.sin(d*3)),g=1-Ve(.77,1.16,f);let _=Rv(a.id,h,u,a.height);const m=a.id==="redmesa"?Math.hypot((h+11)/29,u/17):a.id==="mosswood"?Math.hypot(h/18,(u+17)/23):a.id==="suncoast"?Math.hypot(h/36,(u-15)/21):Math.hypot((h+11)/23,(u-14)/20),p=1-Ve(.72,1.5,m);_=_*(1-p)+a.height*p;for(const E of a.placements){if(!E.foundation)continue;const v=Math.hypot(h-E.x,u-E.z),A=E.height*.7+.4;if(v>A+4)continue;const R=1-Ve(A,A+4,v);_=_*(1-R)+a.height*R}const T=js(i,E=>E.province===a.id);if(T.distance<4){const E=1-Ve(.6,4,T.distance);_=_*(1-E)+a.height*E}n=Math.max(n,-5+g*(_+5))}const r=js(i,a=>!!a.landWidth);if(r.segment){const a=r.segment,l=a.road.landWidth/2*(1+.06*Math.sin(r.t*Math.PI*2)),c=r.distance+a.road.width/2,h=Cv.get(a),u=h[0]*(1-r.t)+h[1]*r.t,d=1-Ve(l*.65,l+8,c);if(n=Math.max(n,-5+d*(u+5)),r.distance<5){const f=1-Ve(.7,5,r.distance);n=n*(1-f)+u*f}}const s=js(i,a=>!!a.province&&a.province!=="north");if(s.segment&&s.distance<4){const a=fn.find(c=>c.id===s.segment.road.province).height,l=1-Ve(.8,4,s.distance);n=n*(1-l)+a*l}const o=js(i,a=>a.province==="north");if(o.distance<4){const a=1-Ve(.8,4,o.distance);n=n*(1-a)+Zr(e,t)*a}return n}const ud=new Ev(Pv);function jt(i){return ud.height(i)}function Iv(i){const[e,t]=xi(i);return lv(e,t)?Yt.level:0}function il(i){const e=jt(i);return{height:e,water:e<Iv(i)+.12}}function dd(i){for(const s of fn)if(i.angleTo(new w(...s.center))*xe<s.radius*1.15){const[o,a]=xi(i);return{...s,x:o,z:a}}const[e,t]=xi(i);let n=go[0],r=1/0;for(const s of go){const o=i.angleTo(cs(s.x,s.z))*xe/s.radius;o<r&&(r=o,n=s)}return r<1.5?n:{id:"wilds",name:"The Continental Trails",description:"Follow the coast road toward the next province",x:e,z:t,radius:30}}function fd(i){const e=Math.abs(i.y)<.9?new w(0,1,0):new w(1,0,0),t=new w().crossVectors(e,i).normalize(),n=new w().crossVectors(t,i).normalize(),r=(o,a)=>{const l=i.clone().addScaledVector(o,a*.2/xe).normalize();return l.multiplyScalar(xe+jt(l))},s=r(t,1).sub(r(t,-1)).cross(r(n,1).sub(r(n,-1))).normalize();return s.dot(i)<0?s.negate():s}function Ao(i){return[Math.atan2(i.z,i.x)*180/Math.PI,-Math.asin(Math.max(-1,Math.min(1,i.y)))*180/Math.PI]}function Dv(i){let e="",t;for(let n=1;n<i.length;n++){const r=Math.ceil(i[n-1].angleTo(i[n])*180/Math.PI);for(let s=0;s<=r;s++){const[o,a]=Ao(gv(i[n-1],i[n],s/r));e+=`${t===void 0||Math.abs(o-t)>180?"M":"L"}${o.toFixed(2)},${a.toFixed(2)} `,t=o}}return e}function Lv(){let i="";for(let n=-88;n<90;n+=4)for(let r=-178;r<180;r+=4){const s=n*Math.PI/180,o=r*Math.PI/180,a=new w(Math.cos(s)*Math.cos(o),Math.sin(s),Math.cos(s)*Math.sin(o));il(a).water||(i+=`<rect x="${r-4/2}" y="${-n-4/2}" width="${4+.15}" height="${4+.15}"/>`)}const t=[...go.map(n=>({...n,normal:as([0,1,0],n.x,n.z)})),...fn.map(n=>({...n,normal:new w(...n.center)}))];return`<div class="map-title">THE WHOLE WORLD <small>Ten regions · one connected journey</small></div><svg viewBox="-187 -105 374 210" aria-label="Whole planet map, wrapping east to west"><rect x="-180" y="-90" width="360" height="180" rx="4" fill="#6e9fa7"/><g fill="#94a778">${i}</g><path d="M-180,0H180 M-180,-45H180 M-180,45H180 M-90,-90V90 M0,-90V90 M90,-90V90" stroke="#eff5e9" stroke-opacity=".2" fill="none"/>${wo.map(n=>`<path d="${Dv(n.points)}" fill="none" stroke="#eedcb0" stroke-width="1"/>`).join("")}${t.map((n,r)=>{const[s,o]=Ao(n.normal);return`<circle cx="${s}" cy="${o}" r="4" fill="#435447"/><text x="${s}" y="${o+1.65}" text-anchor="middle" style="font-size:5px;fill:#fff;stroke:none">${r+1}</text>`}).join("")}<circle id="map-player" r="2.5" fill="#ed8051" stroke="white" stroke-width=".8"/></svg><div class="map-legend">${t.map((n,r)=>`<span>${r+1}. ${n.name}</span>`).join("")}</div><p>Follow the continental roads around the globe. Left and right edges meet; water remains a natural boundary.</p>`}function pd(i){const e=new Map,t=new Map,n=i.clone();return md(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function md(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)md(i.children[n],e.children[n],t)}const Uv=.34;new w(0,1,0);const zh=new WeakMap;function kh(i,e){return cs(i,e)}function gd(){return{normal:kh(...Ph),forward:new w(0,0,-1).projectOnPlane(kh(...Ph)).normalize(),speed:0,distance:0}}function Nv(i,e,t,n,r,s=il){const o=e.clone().projectOnPlane(i.normal),a=Math.min(1,o.length()),l=a*(t?6.2:3);if(i.speed+=(l-i.speed)*(1-Math.exp(-12*n)),a<.01){i.speed=0;return}o.normalize();const c=s(i.normal),h=i.speed*n/(xe+c.height),u=i.normal.clone().multiplyScalar(Math.cos(h)).addScaledVector(o,Math.sin(h)).normalize();for(let _=0;_<3;_++)for(const m of r){let p=zh.get(m);if(!p||p.radius!==m.radius){const T=(m.radius+Uv)/xe;p={radius:m.radius,cos:Math.cos(T),sin:Math.sin(T)},zh.set(m,p)}if(u.dot(m.position)>p.cos){let T=u.clone().addScaledVector(m.position,-u.dot(m.position));T.lengthSq()<1e-10&&(T=o.clone().negate()),u.copy(m.position).multiplyScalar(p.cos).addScaledVector(T.normalize(),p.sin).normalize()}}const d=s(u),f=i.normal.angleTo(u)*xe,g=(d.height-c.height)/Math.max(f,1e-5);if(d.water||g>.78||g<-1.1){i.speed=0;return}i.distance+=Math.acos(Math.max(-1,Math.min(1,i.normal.dot(u))))*xe,i.normal.copy(u),i.forward.lerp(o,1-Math.exp(-15*n)).projectOnPlane(i.normal).normalize()}const qi=Object.freeze({fov:55,pitch:.28,zoom:13.5,targetHeight:1.25});function Fv(i,e,t,n){if(n||i.lengthSq()<1)return e.clone();const r=i.clone().lerp(e,1-Math.exp(-7*t));return r.lengthSq()<1e-8?e.clone():(r.length()<xe+.5&&r.normalize().multiplyScalar(xe+.5),r)}function Ov(i,e,t){const n=i.distanceTo(e),r=Math.max(1,Math.ceil(n/.4)),s=new w,o=new w;for(let a=1;a<=r;a++)if(s.lerpVectors(i,e,a/r),o.copy(s).normalize(),s.length()<xe+t(o)+.22)return i.clone().lerp(e,Math.max(0,(a-1)/r));return e}class Bv{keys=new Set;x=0;y=0;run=!1;yaw=0;zoom=qi.zoom;pitch=qi.pitch;drag=null;constructor(e,t){window.addEventListener("keydown",h=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(h.key)&&h.preventDefault(),this.keys.add(h.code),h.code==="KeyH"&&t()}),window.addEventListener("keyup",h=>this.keys.delete(h.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.run=!1,this.x=this.y=0}),e.addEventListener("pointerdown",h=>{this.drag={id:h.pointerId,x:h.clientX,y:h.clientY},e.setPointerCapture(h.pointerId)}),e.addEventListener("pointermove",h=>{this.drag?.id===h.pointerId&&(this.yaw-=(h.clientX-this.drag.x)*.006,this.pitch=Math.max(.25,Math.min(1.1,this.pitch+(h.clientY-this.drag.y)*.004)),this.drag.x=h.clientX,this.drag.y=h.clientY)});const n=()=>this.drag=null;e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n),e.addEventListener("wheel",h=>{h.preventDefault(),this.zoom=Math.max(7,Math.min(35,this.zoom+h.deltaY*.018))},{passive:!1});const r=document.querySelector("#joystick"),s=document.querySelector("#stick");let o=null;const a=h=>{const u=r.getBoundingClientRect(),d=h.clientX-u.left-u.width/2,f=h.clientY-u.top-u.height/2,g=Math.max(1,Math.hypot(d,f)/42);this.x=d/g/42,this.y=-f/g/42,s.style.transform=`translate(${d/g}px,${f/g}px)`};r.addEventListener("pointerdown",h=>{o=h.pointerId,r.setPointerCapture(h.pointerId),a(h)}),r.addEventListener("pointermove",h=>{o===h.pointerId&&a(h)});const l=()=>{o=null,this.x=this.y=0,s.style.transform=""};r.addEventListener("pointerup",l),r.addEventListener("pointercancel",l);const c=document.querySelector("#run");c.addEventListener("pointerdown",h=>{this.run=!0,c.setPointerCapture(h.pointerId),c.classList.add("active")});for(const h of["pointerup","pointercancel"])c.addEventListener(h,()=>{this.run=!1,c.classList.remove("active")})}get movement(){let e=this.x,t=this.y;(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&e--,(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&e++,(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&t++,(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&t--;const n=Math.max(1,Math.hypot(e,t));return{x:e/n,y:t/n,running:this.run||this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")}}}const zv=["house","tavern","windmill","well","tree","rock","barrel","crate"];function kv(i){if(i.status==="awaiting-user-assets"||i.status==="awaiting-authorized-acquisition"||!i.character?.file)throw new Error("Official KayKit assets are awaiting the supplied ZIP files");if(!i.environment||Array.isArray(i.environment))throw new Error("Village asset manifest is incomplete");const e=zv.filter(t=>{const n=i.environment[t];return!(typeof n=="string"?n:n?.file)});if(e.length)throw new Error(`Village asset manifest is missing: ${e.join(", ")}`)}function Hv(i,e){const t={};for(const n of["idle","walk","run"]){const r=i.find(s=>e?.[n]?s.name===e[n]:s.name.toLowerCase().includes(n));if(!r)throw new Error(`Character ${n} animation clip is missing`);t[n]=r}if(new Set(Object.values(t)).size!==3)throw new Error("Idle, walk and run must use three distinct animation clips");return t}function Vv(i,e="/"){const t=i.replace(/^\//,""),n=t.match(/^assets\/(kaykit|authored)\/(.+)$/),r=n?.[1]??"kaykit",s=n?.[2]??i;if(!s||s.split("/").some(o=>o===".."||o==="."||!o)||s.startsWith("/")||/^[a-z]+:/i.test(s)||/[?#\\]/.test(s)||!n&&t.startsWith("assets/"))throw new Error("Asset path must be inside an approved local asset directory");return`${e.replace(/\/?$/,"/")}assets/${r}/${s}`}function Gv(i,e=1.65){i.updateMatrixWorld(!0);let t=0;const n=new w;return i.traverse(r=>{if(!(r instanceof rt))return;const s=r.geometry.attributes.position;if(s)for(let o=0;o<s.count;o++)r.getVertexPosition(o,n).applyMatrix4(r.matrixWorld),n.y<=e+.04&&(t=Math.max(t,Math.hypot(n.x,n.z)))}),t}class Wv{constructor(e){this.model=e,this.baseY=e.position.y,e.updateMatrixWorld(!0),e.traverse(t=>{if(!(t instanceof Cu))return;t.skeleton.update();const n=[];for(let r=0;r<t.geometry.attributes.position.count;r++)t.getVertexPosition(r,this.point).applyMatrix4(t.matrixWorld),this.point.y<.3&&n.push(r);n.length&&this.samples.push({mesh:t,indices:n})})}model;samples=[];baseY;point=new w;get sampleCount(){return this.samples.reduce((e,t)=>e+t.indices.length,0)}correct(e,t,n=t){this.model.position.y=this.baseY,this.model.parent?.updateWorldMatrix(!0,!1),this.model.updateMatrixWorld(!0);let r=1/0;for(const o of this.samples){o.mesh.skeleton.update();for(const a of o.indices)o.mesh.getVertexPosition(a,this.point).applyMatrix4(o.mesh.matrixWorld).sub(e),r=Math.min(r,this.point.dot(n))}const s=Number.isFinite(r)?Math.max(0,-r)/Math.max(.2,t.dot(n)):0;return this.model.position.y=this.baseY+s,this.model.updateMatrixWorld(!0),s}}const Xv=new he("#87a15d"),qv=new he("#c6b58c"),$v=new he("#99988a"),Yv=new he("#e5e9df"),Hh=new he("#ac9d79"),jv={mosswood:new he("#587858"),redmesa:new he("#bc9170"),suncoast:new he("#aaa561"),frostmere:new he("#889d90")};function _d(i,e){return i.filter(t=>t.foundation).map(t=>{let n=1/0,r=[t.x,t.z];for(const s of e)for(let o=1;o<s.points.length;o++){const a=s.points[o-1],l=s.points[o],c=l[0]-a[0],h=l[1]-a[1],u=Math.max(0,Math.min(1,((t.x-a[0])*c+(t.z-a[1])*h)/(c*c+h*h))),d=a[0]+c*u,f=a[1]+h*u,g=Math.hypot(d-t.x,f-t.z);g<n&&(n=g,r=[d,f])}return{...t,target:r,connect:n<12}})}const xd=fn.map(i=>({...i,normal:new w(...i.center),courts:_d(i.placements,i.roads)})),vd=_d(Zt,To);function Kv(i,e,t=0){const n=Xv.clone(),r=xd.find(g=>i.dot(g.normal)>Math.cos(g.radius*1.3/xe));let s,o,a=vd;if(r){[s,o]=nl(r.center,i),a=r.courts;const g=1-Ve(.87,1.28,i.angleTo(r.normal)*xe/r.radius);n.lerp(jv[r.id],g)}else[s,o]=xi(i),n.lerp(new he("#607d54"),(1-Ve(.75,1.2,Math.hypot((s+46)/28,o/30)))*.65),n.lerp(new he("#918775"),(1-Ve(.7,1.3,Math.hypot((s-58)/24,(o+52)/25)))*.7);const l=yd(i),c=1-Ve(.045,.2,t);n.multiply(new he().setRGB(1-.18*l.cool*c+.08*l.dry*c,1-.06*l.cool*c-.025*l.dry*c,1-.12*l.cool*c-.17*l.dry*c)),n.lerp(Hh,l.bare*.27*c);const h=Ve(.07,.3,t);n.lerp(r?.id==="redmesa"?new he("#aa8871"):$v,h*.75);const u=yc(i.x*9+3,i.y*9-5,i.z*9+7)*2.4,d=Math.sin((e+u)*1.7+i.x*2-i.z)*.5+Math.sin((e+u)*3.1)*.2;n.multiplyScalar(1+d*h*(r?.id==="redmesa"?.14:.09));const f=r?.id==="frostmere"?Ve(14,25,e):r?.id==="redmesa"?0:Ve(17,29,e);return n.lerp(Yv,f),n.lerp(qv,1-Ve(.25,2.3,e)),n.lerp(Hh,Md(a,s,o)*.63*(1-Ve(.025,.12,t))),n}function Md(i,e,t){let n=0;for(const r of i){const s=e-r.x,o=t-r.z;if(Math.abs(s)>14||Math.abs(o)>14)continue;const a=r.yaw??0,l=s*Math.cos(a)-o*Math.sin(a),c=s*Math.sin(a)+o*Math.cos(a),h=Math.hypot(Math.max(0,Math.abs(l)-r.height*.46),Math.max(0,Math.abs(c)-r.height*.38));if(n=Math.max(n,1-Ve(.5,2,h)),r.connect){const u=r.target[0]-r.x,d=r.target[1]-r.z,f=Math.max(0,Math.min(1,(s*u+o*d)/(u*u+d*d||1))),g=Math.hypot(s-f*u,o-f*d);n=Math.max(n,(1-Ve(.65,1.6,g))*.85)}}return n}function Zv(i,e,t=0){const n=xd.find(u=>i.dot(u.normal)>Math.cos(u.radius*1.3/xe)),[r,s]=n?nl(n.center,i):xi(i),o=n?.courts??vd,a=Math.sqrt(Math.max(0,1-(1-t)**2))/Math.max(.15,1-t),l=av(n?.id??"north",r,s,a),c=Math.max(Ve(.055,.24,t),l.rock*.85),h=Math.max(1-Ve(.2,2.2,e),Md(o,r,s)*.85,l.talus*.7,yd(i).bare*.45*(1-Ve(.045,.2,t)))*(1-c);return[1-c-h,h,c]}function yc(i,e,t){const n=Math.floor(i),r=Math.floor(e),s=Math.floor(t),o=u=>u*u*(3-2*u),a=o(i-n),l=o(e-r),c=o(t-s);let h=0;for(let u=0;u<2;u++)for(let d=0;d<2;d++)for(let f=0;f<2;f++){let g=Math.imul(n+f,374761393)^Math.imul(r+d,668265263)^Math.imul(s+u,2147483647);g=Math.imul(g^g>>>13,1274126177),h+=((g^g>>>16)>>>0)/4294967295*(f?a:1-a)*(d?l:1-l)*(u?c:1-c)}return h}function yd(i){const e=i.x*xe,t=i.y*xe,n=i.z*xe,r=yc(e*.22+7,t*.22-3,n*.22+11),s=yc(e*.7-19,t*.7+8,n*.7-5),o=r*.8+s*.2;return{cool:1-Ve(.26,.49,o),dry:Ve(.51,.73,o),bare:Ve(.64,.84,o)}}const Yn=Object.freeze({size:128,tileMeters:2.4,bumpMeters:.025,detailBase:.4,detailScale:1.2,revision:"painted-triplanar-v3"});function $n(i,e,t){let n=Math.imul(i+t*1031,374761393)^Math.imul(e+t*113,668265263);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}const _o=(i,e)=>(i%e+e)%e;function Gr(i,e,t,n){const r=i*t,s=e*t,o=Math.floor(r),a=Math.floor(s),l=r-o,c=s-a,h=l*l*(3-2*l),u=c*c*(3-2*c),d=(f,g)=>$n(_o(o+f,t),_o(a+g,t),n);return(d(0,0)*(1-h)+d(1,0)*h)*(1-u)+(d(0,1)*(1-h)+d(1,1)*h)*u}const Jv=Array.from({length:180},(i,e)=>{const t=Math.floor(e/3),n=$n(e,2,31)*Math.PI*2;return{x:$n(t,0,73)*128+($n(e,4,41)-.5)*3,y:$n(t,1,83)*128+($n(e,5,43)-.5)*3,ux:Math.cos(n),uy:Math.sin(n),length:3+$n(e,6,47)*7,width:.45+$n(e,7,53)*.55,tone:$n(e,8,59)>.4?.13:-.1}});function Qv(i){const e=Yn.size,t=new Uint8Array(e*e*4);for(let n=0;n<e;n++)for(let r=0;r<e;r++){const s=r/e,o=n/e,a=Gr(s,o,6,i==="grass"?3:i==="earth"?7:11),l=Gr(s,o,32,17);let c=.4+a*.2+(l-.5)*.1,h=.45+(l-.5)*.12;if(i==="grass"){let d=0,f=0;for(const g of Jv){const _=_o(r-g.x+64,128)-64,m=_o(n-g.y+64,128)-64,p=_*g.ux+m*g.uy;if(p<0||p>g.length)continue;const T=Math.max(.18,1-p/g.length),E=Math.abs(_*g.uy-m*g.ux),v=Math.max(0,1-E/(g.width*T));v>d&&(d=v,f=g.tone)}c+=d*f,h+=d*.13}if(i==="earth"){const d=Gr(s,o,24,29);c+=Math.max(0,Math.min(1,(d-.66)/.22))*.13,h+=Math.max(0,d-.65)*.25}if(i==="rock"){const d=.5+.5*Math.sin(Math.PI*2*(o*3+.13*Math.sin(s*Math.PI*2)+.035*Math.sin(s*Math.PI*6))),f=Math.abs(Math.sin(Math.PI*2*(s*2+o+.14*Gr(s,o,4,71)))),g=Math.max(0,1-f/.065)*Math.max(0,Math.min(1,(Gr(s,o,9,37)-.34)*3));c=.37+a*.19+(l-.5)*.11+d*.035-g*.12,h=.48+(a-.5)*.09+(l-.5)*.05-g*.16}const u=(n*e+r)*4;t[u]=Math.round(Math.max(0,Math.min(1,c+(i==="earth"?.025:0)))*255),t[u+1]=Math.round(Math.max(0,Math.min(1,c+(i==="grass"?.025:0)))*255),t[u+2]=Math.round(Math.max(0,Math.min(1,c-(i==="grass"?.025:0)))*255),t[u+3]=Math.round(Math.max(0,Math.min(1,h))*255)}return t}const eM=["grass","earth","rock"],tM=eM.map(i=>({kind:i,width:Yn.size,height:Yn.size,data:Qv(i)})),Ma=tM.map(i=>{const e=new Hc(i.data,i.width,i.height,sn,Sn);return e.wrapS=e.wrapT=Vi,e.magFilter=Kt,e.minFilter=In,e.generateMipmaps=!0,e.anisotropy=4,e.needsUpdate=!0,e.name=`painted-${i.kind}`,e});function ya(){const i=new ei({vertexColors:!0,roughness:1});return i.name="painted-triplanar-ground",i.userData.surfaceDetail={...Yn},i.onBeforeCompile=e=>{Object.assign(e.uniforms,{uGrassDetail:{value:Ma[0]},uEarthDetail:{value:Ma[1]},uRockDetail:{value:Ma[2]}}),e.vertexShader=`attribute vec3 surfaceMix; varying vec3 vSurfaceMix; varying vec3 vSurfacePosition; varying vec3 vSurfaceNormal;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vSurfaceMix=surfaceMix;vSurfacePosition=(modelMatrix*vec4(position,1.0)).xyz;vSurfaceNormal=normalize(mat3(modelMatrix)*normal);`),e.fragmentShader=`uniform sampler2D uGrassDetail;uniform sampler2D uEarthDetail;uniform sampler2D uRockDetail;varying vec3 vSurfaceMix;varying vec3 vSurfacePosition;varying vec3 vSurfaceNormal;
 vec4 detailProjection(sampler2D detail,vec3 p,vec3 w){return texture2D(detail,p.yz)*w.x+texture2D(detail,p.zx)*w.y+texture2D(detail,p.xy)*w.z;}
 `+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec3 detailWeights=pow(abs(normalize(vSurfaceNormal)),vec3(4.0));detailWeights/=max(.0001,dot(detailWeights,vec3(1.0)));
 vec3 detailPosition=vSurfacePosition/${Yn.tileMeters.toFixed(1)};
 vec4 surfaceDetail=detailProjection(uGrassDetail,detailPosition,detailWeights)*vSurfaceMix.x+detailProjection(uEarthDetail,detailPosition,detailWeights)*vSurfaceMix.y+detailProjection(uRockDetail,detailPosition,detailWeights)*vSurfaceMix.z;
 diffuseColor.rgb*=${Yn.detailBase.toFixed(2)}+${Yn.detailScale.toFixed(2)}*surfaceDetail.rgb;`),e.fragmentShader=e.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
 vec3 detailDx=dFdx(-vViewPosition),detailDy=dFdy(-vViewPosition),detailR1=cross(detailDy,normal),detailR2=cross(normal,detailDx);
 float detailDet=dot(detailDx,detailR1);vec2 detailGradient=vec2(dFdx(surfaceDetail.a),dFdy(surfaceDetail.a))*${Yn.bumpMeters.toFixed(3)};
 if(abs(detailDet)>0.00000001)normal=normalize(abs(detailDet)*normal-sign(detailDet)*(detailGradient.x*detailR1+detailGradient.y*detailR2));`)},i.customProgramCacheKey=()=>Yn.revision,i}const Jr=i=>{const e=Math.hypot(...i);return Object.freeze(i.map(t=>t/e))},rn=(i,e,t,n,r,s,o,a,l,c)=>Object.freeze({direction:Jr(i),wavelength:e,amplitude:t,speed:n,phase:r,phaseModulation:Object.freeze({direction:Jr(s),wavelength:a,strength:l,speed:.07+n*.09,phase:r*1.31+.7}),envelope:Object.freeze({direction:Jr(o),wavelength:a*.73,min:c,speed:.03+n*.04,phase:r*1.79+2.2})}),pi=Object.freeze({sea:Object.freeze({geometry:Object.freeze([rn([.91,.18,.38],19,.019,.79,.3,[.17,.93,-.32],[-.49,.21,.85],83,.6,.48),rn([-.29,.58,.76],12.7,.012,1.07,1.8,[.74,-.32,.59],[.31,.84,-.44],61,.72,.42),rn([.41,-.71,.57],29,.007,.51,4.2,[-.24,.61,.75],[.89,.39,-.21],107,.51,.52)]),detail:Object.freeze([rn([.77,.31,-.55],3.9,.026,1.31,2.1,[-.34,.86,.39],[.57,-.43,.7],13.7,1.65,.1),rn([-.35,.86,.37],2.17,.014,1.89,5.3,[.79,.11,-.61],[.16,.54,.83],8.9,1.38,.06),rn([.23,-.61,.76],1.13,.0065,2.43,3.7,[.63,.69,.35],[-.82,.37,.44],6.1,1.91,.08),rn([-.82,-.44,.35],6.4,.009,.93,.9,[.41,-.14,.9],[.29,.92,-.24],21.3,1.24,.14)])}),lake:Object.freeze({geometry:Object.freeze([rn([.83,.36,.42],8.7,.006,.47,.9,[-.21,.87,-.44],[.51,-.36,.78],37,.58,.45),rn([-.39,.48,.79],5.9,.0035,.68,2.7,[.76,.23,-.61],[.38,.88,.29],29,.63,.39),rn([.32,-.81,.49],13.1,.0015,.32,5.4,[-.51,.23,.83],[.79,.54,-.28],51,.45,.5)]),detail:Object.freeze([rn([.68,.47,-.56],3.5,.01,.79,1.3,[-.47,.81,.35],[.55,-.21,.81],12.9,1.43,.07),rn([-.51,.79,.34],1.61,.005,1.21,4.8,[.78,.25,-.57],[.31,.46,.83],7.3,1.74,.05),rn([.34,-.51,.79],.91,.0025,1.64,2.5,[.58,.76,.28],[-.79,.43,.44],5.1,1.51,.04)])})}),lt=Object.freeze({revision:"world-space-wave-packets-v3",planetRadius:xe,depthAttribute:"waterDepth",shoreStillDepth:.04,shoreFullMotionDepth:.4,foamNearDepth:.04,foamFarDepth:.28,foamWetDepth:.025,foamFields:Object.freeze([Object.freeze({direction:Jr([.73,.29,-.62]),wavelength:3.8,speed:.43,phase:.7,weight:.3}),Object.freeze({direction:Jr([-.38,.81,.44]),wavelength:7.1,speed:-.31,phase:2.6,weight:.2})]),foamPatchFrom:.48,foamPatchTo:.78,fresnelBase:.025,fresnelScale:.36,fresnelPower:4,foamColor:"#d5eee0",sea:Object.freeze({level:.015,shallowColor:"#68b9af",deepColor:"#246f96",absorptionDepth:2.3,roughness:.34,foamStrength:.2,reflectionStrength:1,reflectionSpread:.11,sunHighlightStrength:.035}),lake:Object.freeze({level:1.265,shallowColor:"#77beb1",deepColor:"#347e98",absorptionDepth:1.65,roughness:.32,foamStrength:.055,reflectionStrength:.78,reflectionSpread:.075,sunHighlightStrength:.012})}),jn=Object.freeze({method:"filtered-main-clouds-v1",cloudOpacityScale:.6,cloudHeightSpread:.75,cloudShapeFrom:.12,cloudShapeTo:1.15,cloudFadeFrom:.24,cloudFadeTo:.44,sunLobes:Object.freeze([{falloff:14,strength:.13},{falloff:100,strength:.22}])}),nM=Object.fromEntries(Object.entries(yt.palette).map(([i,e])=>[i,new he(e)]));function Vh(i){const e=lt[i].reflectionSpread;return $u.filter(t=>t.thickness>=.05&&t.opacity>=.5).map(t=>({...t,filteredWidth:t.width+e,filteredThickness:t.thickness+e*jn.cloudHeightSpread,inverseWidthChord:1/(1-Math.cos(t.width+e)),filteredOpacity:t.opacity*jn.cloudOpacityScale*t.width/(t.width+e)*t.thickness/(t.thickness+e*jn.cloudHeightSpread)}))}const ls={sea:Vh("sea"),lake:Vh("lake")},Ks=new w(0,1,0),iM=new he(lt.foamColor),rM=new he(yt.palette.sunlight),Gh={sea:{shallow:new he(lt.sea.shallowColor),deep:new he(lt.sea.deepColor)},lake:{shallow:new he(lt.lake.shallowColor),deep:new he(lt.lake.deepColor)}};function Sd(){const i=po(Ks),e=i.clone().projectOnPlane(Ks).normalize();return{up:Ks.clone(),sunDirection:i,forward:e,right:new w().crossVectors(Ks,e).normalize(),horizonDip:yt.horizonElevation,elapsed:0}}Sd();function Wh(i,e){if(!Number.isFinite(e))throw new Error("Water level must be finite and relative to the planet radius.");const t=i.getAttribute("position");if(!t)throw new Error("Water depth requires geometry positions.");const n=new Float32Array(t.count),r=new w;let s=1/0,o=0;for(let a=0;a<t.count;a++){if(r.fromBufferAttribute(t,a),!Number.isFinite(r.lengthSq())||r.lengthSq()<1e-12)throw new Error("Water depth requires finite planet-centred vertices.");r.normalize();const l=Math.max(0,e-jt(r));n[a]=l,s=Math.min(s,l),o=Math.max(o,l)}return i.setAttribute(lt.depthAttribute,new ft(n,1)),i.userData.waterDepth={waterLevel:e,minDepth:t.count?s:0,maxDepth:o,method:"max(0, water level above R96 - terrainHeight(radial normal)); per vertex, interpolated by rasterizer"},i.computeBoundingSphere(),i.boundingSphere&&(i.boundingSphere.radius+=.04),i}function sM(i){return{revision:lt.revision,kind:i,level:lt[i].level,settings:lt,waves:pi[i],coordinateSpace:"planet-centred world coordinates",depthAttribute:lt.depthAttribute,timeUnit:"seconds",colorSpace:"scene-linear before renderer transforms",sampleFunction:"sampleWaterSurface(worldPosition, depth, elapsed, kind, atmosphereState, cameraMinusPosition)",geometryLimit:pi[i].geometry.reduce((e,t)=>e+t.amplitude,0),reflection:"single rough-filtered atmosphere approximation; shared palette/sun/frame/main-cloud data, no scene-object or planar reflection pass",reflectionFilter:{...jn,spread:lt[i].reflectionSpread,banks:ls[i],palette:yt.palette,sampleFunction:"sampleWaterReflection(direction, atmosphereState, kind)",intentionalOmissions:"fine cloud crowns, thin cirrus, and the tiny unfiltered sun disk"},normalInterpolation:"geometryGradient is evaluated at actual mesh vertices and interpolated linearly; fine packet gradients remain per pixel; combine before radial projection and depth attenuation",fragmentCost:{waveSinCos:pi[i].detail.length*6,foamSin:2,reflectionSinCos:0,reflectionExp:2,reflectionPow:1},waveEquation:"q=dot(p,bendFrequency)-t*bendSpeed+bendPhase; r=dot(p,packetFrequency)-t*packetSpeed+packetPhase; phase=dot(p,carrierFrequency)-t*speed+phaseOffset+strength*sin(q); envelope=min+(1-min)*(.5+.5*sin(r))^2; height=amplitude*envelope*sin(phase)",gradientEquation:"amplitude*(envelope*cos(phase)*(carrierFrequency+strength*cos(q)*bendFrequency)+sin(phase)*(1-min)*(.5+.5*sin(r))*cos(r)*packetFrequency)",foamEquation:"strength*smoothstep(0,foamWetDepth,depth)*(1-smoothstep(foamNearDepth,foamFarDepth,depth))*smoothstep(foamPatchFrom,foamPatchTo,.5+sum(field.weight*sin(dot(p,field.direction)*2pi/field.wavelength-t*field.speed+field.phase)))",physics:"unchanged; displacement is visual only and attenuated to zero within 0.04 m bed depth",limitations:"CPU material composition excludes Three Standard lighting; no browser shader compilation/performance proof"}}const He=i=>Number.isInteger(i)?`${i}.0`:String(i),rl=i=>`vec3(${i.map(He).join(", ")})`,_n=i=>rl(i.toArray());function Xh(i,e){const t=n=>rl(n.direction.map(r=>r*Math.PI*2/n.wavelength));return`waterWaveField(p, ${t(i)}, ${He(i.amplitude)}, uWaterWavePhases[${e}], ${t(i.phaseModulation)}, ${He(i.phaseModulation.strength)}, ${t(i.envelope)}, ${He(i.envelope.min)})`}function qh(i,e){const t=`
float waterMotion(float depth) {
  return smoothstep(${He(lt.shoreStillDepth)}, ${He(lt.shoreFullMotionDepth)}, max(0.0, depth));
}
// xyz = exact Cartesian gradient; w = bounded height. Time-only phase terms
// are precomputed once in update(), not multiplied for every water pixel.
vec4 waterWaveField(vec3 p, vec3 carrier, float amplitude, vec3 phaseTime,
  vec3 bendFrequency, float bendStrength, vec3 packetFrequency, float packetMinimum) {
  float q = dot(p, bendFrequency) + phaseTime.y;
  float r = dot(p, packetFrequency) + phaseTime.z;
  float phase = dot(p, carrier) + phaseTime.x + bendStrength * sin(q);
  float packetRoot = .5 + .5 * sin(r);
  float envelope = packetMinimum + (1.0 - packetMinimum) * packetRoot * packetRoot;
  vec3 phaseGradient = carrier + bendStrength * cos(q) * bendFrequency;
  vec3 envelopeGradient = (1.0 - packetMinimum) * packetRoot * cos(r) * packetFrequency;
  return vec4(amplitude * (envelope * cos(phase) * phaseGradient + sin(phase) * envelopeGradient), amplitude * envelope * sin(phase));
}
`;return e==="vertex"?t+`
vec4 waterSwellField(vec3 p) {
  vec4 swell = vec4(0.0);
  ${pi[i].geometry.map((n,r)=>`swell += ${Xh(n,r)};`).join(`
  `)}
  return swell;
}
`:t+`
vec3 waterNormal(vec3 p, float depth, vec3 interpolatedSwellGradient) {
  vec3 radial = normalize(p);
  vec3 gradient = interpolatedSwellGradient;
  ${pi[i].detail.map((n,r)=>`gradient += ${Xh(n,r+pi[i].geometry.length)}.xyz;`).join(`
  `)}
  gradient = (gradient - radial * dot(gradient, radial)) * waterMotion(depth);
  return normalize(radial - gradient);
}
float waterFoamAt(vec3 p, float depth) {
  float field = .5;
  ${lt.foamFields.map(n=>`field += ${He(n.weight)} * sin(dot(p, ${rl(n.direction)}) * ${He(Math.PI*2/n.wavelength)} - uWaterTime * ${He(n.speed)} + ${He(n.phase)});`).join(`
  `)}
  return ${He(lt[i].foamStrength)} * smoothstep(0.0, ${He(lt.foamWetDepth)}, depth)
    * (1.0 - smoothstep(${He(lt.foamNearDepth)}, ${He(lt.foamFarDepth)}, depth))
    * smoothstep(${He(lt.foamPatchFrom)}, ${He(lt.foamPatchTo)}, field);
}
`}function oM(i){const e=lt[i].reflectionSpread,t=nM;return`
uniform vec3 uUp;
uniform vec3 uSun;
uniform vec3 uRight;
uniform vec3 uForward;
uniform float uHorizonDip;
uniform vec2 uWaterCloudAngles[${ls[i].length}];
vec3 waterReflectedCloud(vec3 sky, vec2 azimuth, float h, float sunDot, float cloudFade,
  vec2 angle, float centerHeight, float inverseWidthChord, float inverseThickness, float opacity) {
  float horizontal = (1.0 - dot(azimuth, angle)) * inverseWidthChord;
  float vertical = (h - centerHeight) * inverseThickness;
  float body = 1.0 - smoothstep(${He(jn.cloudShapeFrom)}, ${He(jn.cloudShapeTo)}, horizontal + vertical * vertical);
  float light = clamp(.58 + .18 * vertical + .08 * sunDot, 0.0, 1.0);
  return mix(sky, mix(${_n(t.cloudShadow)}, ${_n(t.cloudLight)}, light), body * opacity * cloudFade);
}
vec3 waterSkyReflection(vec3 direction) {
  vec3 ray = normalize(direction);
  float h = dot(ray, uUp) - uHorizonDip + ${He(yt.horizonElevation)};
  float lowToMiddle = pow(smoothstep(${He(yt.horizonElevation-e)}, ${He(yt.middleElevation+e)}, h), .72);
  vec3 sky = mix(${_n(t.horizon)}, ${_n(t.middleSky)}, lowToMiddle);
  sky = mix(sky, ${_n(t.zenith)}, smoothstep(${He(.15-e)}, .98, h));
  sky = mix(sky, ${_n(t.lowerSky)}, 1.0 - smoothstep(${He(-.48-e)}, ${He(-.21+e)}, h));
  float sunDot = clamp(dot(ray, uSun), -1.0, 1.0);
  float glow = 0.0;
  ${jn.sunLobes.map(n=>{const r=1+2*n.falloff*e*e;return`glow += exp((sunDot - 1.0) * ${He(n.falloff/r)}) * ${He(n.strength/r)};`}).join(`
  `)}
  sky += ${_n(t.sunlight)} * glow;
  vec2 azimuth = vec2(dot(ray, uRight), dot(ray, uForward));
  float horizontalLength = length(azimuth);
  float cloudFade = 1.0 - smoothstep(${He(jn.cloudFadeFrom)}, ${He(jn.cloudFadeTo)}, h);
  if (horizontalLength > .00001 && h > ${He(-.25-e)} && cloudFade > 0.0) {
    azimuth /= horizontalLength;
    ${ls[i].map((n,r)=>`sky = waterReflectedCloud(sky, azimuth, h, sunDot, cloudFade, uWaterCloudAngles[${r}], ${He(n.elevation)}, ${He(n.inverseWidthChord)}, ${He(1/n.filteredThickness)}, ${He(n.filteredOpacity)});`).join(`
    `)}
  }
  return sky;
}
`}function $h(i){const e=lt[i],t=Sd(),n=[...pi[i].geometry,...pi[i].detail],r=n.map(c=>new w(c.phase,c.phaseModulation.phase,c.envelope.phase)),s=ls[i].map(c=>new Xe(Math.sin(c.azimuth),Math.cos(c.azimuth))),o={uWaterTime:{value:0},uWaterWavePhases:{value:r},uWaterCloudAngles:{value:s},uUp:{value:t.up},uSun:{value:t.sunDirection},uRight:{value:t.right},uForward:{value:t.forward},uTime:{value:0},uHorizonDip:{value:t.horizonDip}},a=new ei({name:`animated-${i}-water`,color:e.shallowColor,roughness:e.roughness,metalness:0,transparent:!1,opacity:1,depthWrite:!0,fog:!0,side:xn});a.userData.water=sM(i),a.onBeforeCompile=c=>{Object.assign(c.uniforms,o),c.vertexShader=`
uniform float uWaterTime;
uniform vec3 uWaterWavePhases[${n.length}];
attribute float waterDepth;
varying vec3 vWaterBasePosition;
varying vec3 vWaterSwellGradient;
varying vec3 vWaterPosition;
varying float vWaterDepth;
${qh(i,"vertex")}
`+c.vertexShader,c.vertexShader=c.vertexShader.replace("#include <begin_vertex>",`
#include <begin_vertex>
vWaterBasePosition = (modelMatrix * vec4(position, 1.0)).xyz;
vWaterDepth = waterDepth;
vec4 waterSwell = waterSwellField(vWaterBasePosition);
vWaterSwellGradient = waterSwell.xyz;
float waterHeight = waterSwell.w * waterMotion(waterDepth);
transformed += normalize(position) * waterHeight;
vWaterPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;
`),c.fragmentShader=`
uniform float uWaterTime;
uniform vec3 uWaterWavePhases[${n.length}];
varying vec3 vWaterBasePosition;
varying vec3 vWaterSwellGradient;
varying vec3 vWaterPosition;
varying float vWaterDepth;
${qh(i,"fragment")}
${oM(i)}
`+c.fragmentShader,c.fragmentShader=c.fragmentShader.replace("#include <color_fragment>",`
#include <color_fragment>
float waterBedDepth = max(0.0, vWaterDepth);
float waterFoam = waterFoamAt(vWaterBasePosition, waterBedDepth);
float waterDepthBlend = 1.0 - exp(-waterBedDepth / ${He(e.absorptionDepth)});
diffuseColor.rgb = mix(${_n(Gh[i].shallow)}, ${_n(Gh[i].deep)}, waterDepthBlend);
diffuseColor.rgb = mix(diffuseColor.rgb, ${_n(iM)}, waterFoam);
`),c.fragmentShader=c.fragmentShader.replace("#include <normal_fragment_maps>",`
#include <normal_fragment_maps>
vec3 waterWorldNormal = waterNormal(vWaterBasePosition, vWaterDepth, vWaterSwellGradient);
normal = normalize(mat3(viewMatrix) * waterWorldNormal);
#ifdef DOUBLE_SIDED
  normal *= faceDirection;
#endif
`),c.fragmentShader=c.fragmentShader.replace("#include <opaque_fragment>",`
vec3 waterView = normalize(cameraPosition - vWaterPosition);
vec3 waterReflectionDirection = reflect(-waterView, waterWorldNormal);
float waterFresnel = (${He(lt.fresnelBase)} + ${He(lt.fresnelScale)} * pow(1.0 - clamp(dot(waterWorldNormal, waterView), 0.0, 1.0), ${He(lt.fresnelPower)})) * (1.0 - waterFoam * .7) * ${He(e.reflectionStrength)};
vec3 waterReflection = waterSkyReflection(waterReflectionDirection);
outgoingLight = mix(outgoingLight, waterReflection, waterFresnel);
float waterSunDot = max(0.0, dot(waterReflectionDirection, uSun));
float waterSunHighlight = pow(waterSunDot, 32.0) * ${He(e.sunHighlightStrength)} * (1.0 - waterFoam) * max(0.0, dot(normalize(vWaterBasePosition), uSun));
outgoingLight += ${_n(rM)} * waterSunHighlight;
#include <opaque_fragment>
`)},a.customProgramCacheKey=()=>`${lt.revision}-${i}`,ju(a);function l(c,h){const u=Number.isFinite(c)?c:0;o.uWaterTime.value=u,n.forEach((d,f)=>r[f].set(d.phase-u*d.speed,d.phaseModulation.phase-u*d.phaseModulation.speed,d.envelope.phase-u*d.envelope.speed)),ls[i].forEach((d,f)=>{const g=d.azimuth+h.elapsed*d.drift;s[f].set(Math.sin(g),Math.cos(g))}),t.up.copy(h.up),t.sunDirection.copy(h.sunDirection),t.right.copy(h.right),t.forward.copy(h.forward),t.horizonDip=h.horizonDip,t.elapsed=h.elapsed,o.uTime.value=h.elapsed,o.uHorizonDip.value=h.horizonDip}return{material:a,update:l,dispose(){a.dispose()}}}function aM(){const i=new Ot,e=[],t=[],n=[];new he;for(let l=0;l<6;l++)for(let c=0;c<=et;c++)for(let h=0;h<=et;h++){const u=ud.corner(l,h,c),d=u.clone().normalize();if(u.length()-xe,xi(d),e.push(u.x,u.y,u.z),t.push(0,0,0),c<et&&h<et){const f=l*(et+1)**2+c*(et+1)+h;n.push(f,f+et+1,f+1,f+1,f+et+1,f+et+2)}}i.setAttribute("position",new ft(e,3)),i.setAttribute("color",new ft(t,3)),i.setIndex(n),i.computeVertexNormals();const r=new Map,s=i.attributes.position,o=i.attributes.normal;for(let l=0;l<s.count;l++){const c=l%(et+1)**2,h=Math.floor(c/(et+1)),u=c%(et+1);if(h!==0&&h!==et&&u!==0&&u!==et)continue;const d=`${s.getX(l).toFixed(4)},${s.getY(l).toFixed(4)},${s.getZ(l).toFixed(4)}`,f=r.get(d);f?f.push(l):r.set(d,[l])}for(const l of r.values())if(l.length>1){const c=new w;for(const h of l)c.add(new w().fromBufferAttribute(o,h));c.normalize();for(const h of l)o.setXYZ(h,c.x,c.y,c.z)}const a=new Float32Array(s.count*3);for(let l=0;l<s.count;l++){const c=new w().fromBufferAttribute(s,l),h=c.clone().normalize(),u=new w().fromBufferAttribute(o,l),d=Kv(h,c.length()-xe,Math.max(0,1-u.dot(h)));i.attributes.color.setXYZ(l,d.r,d.g,d.b),a.set(Zv(h,c.length()-xe,Math.max(0,1-u.dot(h))),l*3)}return i.setAttribute("surfaceMix",new Pt(a,3)),i}function cM(i,e){const{face:t,col:n,row:r}=hd(e),s=Math.min(et-1,Math.max(0,Math.floor(n))),o=Math.min(et-1,Math.max(0,Math.floor(r))),a=t*(et+1)**2+o*(et+1)+s,l=e.clone().multiplyScalar(xe+jt(e)),c=[[a,a+et+1,a+1],[a+1,a+et+1,a+et+2]],h=new w;let u=c[0];for(const g of c){const _=g.map(m=>new w().fromBufferAttribute(i.attributes.position,m));if(dn.getBarycoord(l,..._,h),u=g,Math.min(h.x,h.y,h.z)>-1e-4)break}const d=g=>{const _=new w;return u.forEach((m,p)=>_.addScaledVector(new w().fromBufferAttribute(i.attributes[g],m),h.getComponent(p))),_},f=d("color");return{normal:d("normal").normalize(),color:new he().setRGB(f.x,f.y,f.z),mix:d("surfaceMix").toArray()}}function lM(){const i=new rt(aM(),ya());i.name="continental-terrain",i.receiveShadow=!0,i.castShadow=!0;const e=$h("sea"),t=new yo(xe+.015,192,96);Wh(t,.015);const n=new rt(t,e.material);n.name="open-sea";const r=new Ot,s=[],o=[],a=24,l=96,c=cs(Yt.x,Yt.z).multiplyScalar(xe+Yt.level+.015);s.push(c.x,c.y,c.z);for(let m=1;m<=a;m++)for(let p=0;p<l;p++){const T=p*Math.PI*2/l,E=cs(Yt.x+Math.cos(T)*Yt.rx*m/a,Yt.z+Math.sin(T)*Yt.rz*m/a).multiplyScalar(xe+Yt.level+.015);s.push(E.x,E.y,E.z)}for(let m=0;m<l;m++)o.push(0,1+(m+1)%l,1+m);for(let m=0;m<a-1;m++)for(let p=0;p<l;p++){const T=1+m*l+p,E=1+m*l+(p+1)%l,v=T+l,A=E+l;o.push(T,E,v,E,A,v)}r.setAttribute("position",new ft(s,3)),r.setIndex(o),r.computeVertexNormals();const h=$h("lake");Wh(r,Yt.level+.015);const u=new rt(r,h.material);u.name="mirrorwater-lake";const d=[i,n,u],f=new Map,g=et*2;for(let m=0;m<6;m++)for(let p=0;p<g;p++)for(let T=0;T<g;T++){const E=Mc(m,(T+.5)/2,(p+.5)/2),v=pa(E);if(!v.segment||v.distance>2)continue;const A=[[T,p],[T+1,p],[T+1,p+1],[T,p+1]].map(([D,y])=>Mc(m,D/2,y/2)),R=A.map(D=>pa(D).distance-.5);if(R.every(D=>D>0))continue;const C=v.segment.road;for(const D of[[0,3,1],[1,3,2]]){const y=[];for(let z=0;z<3;z++){const k=D[z],W=D[(z+1)%3],q=A[k],H=A[W],J=R[k],re=R[W];if(J<=0&&y.push(q),J<=0!=re<=0){const ve=J/(J-re);y.push(q.clone().lerp(H,ve).normalize())}}if(y.length<3)continue;f.has(C.id)||f.set(C.id,{vertices:[],colors:[],mixes:[],normals:[],indices:[],road:C});const S=f.get(C.id),P=S.vertices.length/3,U=["market-street","harbour-spine","west-city-lane","quay-lane"].includes(C.id),O=new he(U?"#aaa596":C.style==="trail"?"#ac9872":"#bba57b");for(const z of y){const k=jt(z),W=z.clone().multiplyScalar(xe+k+.012),q=pa(z).distance,H=cM(i.geometry,z),J=H.color,re=1-Ve(-.25,.48,q),ve=.025*Math.sin(W.x*1.1+W.z*.7)*Math.cos(W.y*.9),Be=O.clone().multiplyScalar(1+ve);if(U){const ht=(Math.floor(T/2)+Math.floor(p/2)*37)%5;Be.multiplyScalar(.96+ht*.018)}J.lerp(Be,re),S.vertices.push(W.x,W.y,W.z),S.colors.push(J.r,J.g,J.b),S.normals.push(...H.normal.toArray());const Ze=H.mix;S.mixes.push(Ze[0]*(1-re),Ze[1]*(1-re)+(U?0:re),Ze[2]*(1-re)+(U?re:0))}for(let z=1;z<y.length-1;z++)S.indices.push(P,P+z,P+z+1)}}const _=["market-street","harbour-spine","west-city-lane","quay-lane"];for(const m of f.values()){const p=new Ot;p.setAttribute("position",new ft(m.vertices,3)),p.setAttribute("color",new ft(m.colors,3)),p.setAttribute("surfaceMix",new ft(m.mixes,3)),p.setIndex(m.indices),p.setAttribute("normal",new ft(m.normals,3)),_.includes(m.road.id);const T=new rt(p,ya());T.name=`road-${m.road.id}`,T.receiveShadow=!0,d.push(T)}for(const m of pv){const p=[],T=[],E=[],v=Math.ceil(m.w/.3),A=Math.ceil(m.d/.3);for(let y=0;y<=A;y++)for(let S=0;S<=v;S++){const P=m.x-m.w/2+S*m.w/v,U=m.z-m.d/2+y*m.d/A,O=Math.max(0,Math.cos((P-m.x)*Math.PI*2/1.2)),z=as(m.center,P,U),k=z.clone().multiplyScalar(xe+jt(z)+.012+O*.035);p.push(k.x,k.y,k.z);const W=new he(O>.3?"#c5ac59":"#8e7052");if(T.push(W.r,W.g,W.b),y<A&&S<v){const q=y*(v+1)+S;E.push(q,q+v+1,q+1,q+1,q+v+1,q+v+2)}}const R=new Ot;R.setAttribute("position",new ft(p,3)),R.setAttribute("color",new ft(T,3)),R.setIndex(E),R.computeVertexNormals();const C=new Float32Array(p.length);for(let y=1;y<C.length;y+=3)C[y]=1;R.setAttribute("surfaceMix",new Pt(C,3));const D=new rt(R,ya());D.name="cultivated-field",D.receiveShadow=!0,d.push(D)}return{meshes:d,terrain:i,waterSurfaces:[e,h]}}function Ed(i,e){const t=new bn().setFromObject(i),n=e/t.getSize(new w).y;return i.scale.multiplyScalar(n),i.position.y-=t.min.y*n,i.updateMatrixWorld(!0),i}function hM(i,e,t){const n=[],r=[],s=new Map,o=[],a=new w(0,1,0),l=new ei({color:"#a9977b",roughness:1}),c=new ei({color:"#7f8581",roughness:1}),h=[...Zt.map(d=>({p:d,center:[0,1,0],province:"north"})),...fn.flatMap(d=>d.placements.map(f=>({p:f,center:d.center,province:d.id})))];for(const{p:d,center:f,province:g}of h){const _=(U,O)=>as(f,U,O),m=(U,O,z=0)=>{const k=_(U,O);return k.multiplyScalar(xe+jt(k)+z)},p=t.environment[d.key]??t.environment[d.key.replace(/[23]$/,"")];if(!p)throw new Error(`Missing authored asset ${d.key}`);const T=typeof p=="string"?p:p.file,E=e.get(T);if(!E)throw new Error(`Asset not loaded: ${T}`);const v=Ed(pd(E.scene),d.height),A=Gv(v),R=new bn,C=new w;v.traverse(U=>{if(U instanceof rt)for(let O=0;O<U.geometry.attributes.position.count;O++)U.getVertexPosition(O,C).applyMatrix4(U.matrixWorld),C.y<.22&&R.expandByPoint(C)});const D=_(d.x,d.z),y=il(D);if(y.water)throw new Error(`Placement ${d.key} at ${d.x},${d.z} is in water`);let S=A;const P=new Ln;if(P.position.copy(m(d.x,d.z,.015)),P.quaternion.copy(tl(f)).multiply(new Ft().setFromUnitVectors(a,cs(d.x,d.z))),P.rotateY(d.yaw??0),P.add(v),P.updateMatrixWorld(!0),d.key.startsWith("crafted")){P.quaternion.premultiply(new Ft().setFromUnitVectors(D,fd(D))),P.updateMatrixWorld(!0);let U=-1/0;v.traverse(O=>{if(O instanceof rt){for(let z=0;z<O.geometry.attributes.position.count;z++)if(O.getVertexPosition(z,C).applyMatrix4(O.matrixWorld),P.worldToLocal(C.clone()).y<.035){const W=C.clone().normalize();U=Math.max(U,C.length()-xe-jt(W))}}}),Number.isFinite(U)&&P.position.addScaledVector(D,-U-.012),P.updateMatrixWorld(!0),d.key!=="craftedMeadow"&&v.traverse(O=>{if(O instanceof rt)for(let z=0;z<O.geometry.attributes.position.count;z++)O.getVertexPosition(z,C).applyMatrix4(O.matrixWorld),S=Math.max(S,C.normalize().angleTo(D)*xe+.015)})}if(r.push({file:T,matrix:v.matrixWorld.toArray(),key:d.key,x:d.x,z:d.z,province:g}),v.traverse(U=>{if(!(U instanceof rt))return;const O=`${T}:${U.geometry.uuid}:${Array.isArray(U.material)?U.material.map(z=>z.uuid).join():U.material.uuid}`;s.has(O)||s.set(O,{source:U,matrices:[],key:d.key}),s.get(O).matrices.push(U.matrixWorld.clone())}),d.foundation||d.key==="ruinPillar"){const U=["house","house2","tavern"].includes(d.key)&&!R.isEmpty(),O=Math.max(Math.abs(R.min.x),Math.abs(R.max.x))+.07,z=Math.max(Math.abs(R.min.z),Math.abs(R.max.z))+.07,k=U?Math.hypot(O,z):A+.12;S=Math.max(S,k+.015);let W=y.height;for(let J=0;J<24;J++){const re=P.position.clone().add(new w(Math.cos(J*Math.PI/12)*k,0,Math.sin(J*Math.PI/12)*k).applyQuaternion(P.quaternion)).normalize();W=Math.min(W,jt(re))}const q=Math.max(.1,y.height-W+k*k/(2*xe)+.08),H=new rt(U?new Xi(O*2,q,z*2):new Xc(k,k,q,20),d.key==="ruinPillar"?c:l);H.position.copy(P.position).addScaledVector(D,-q/2+.002),H.quaternion.copy(P.quaternion),H.receiveShadow=!0,H.name=d.key==="ruinPillar"?"pillar-stone-footing":"building-footing",i.add(H),o.push(H)}if(d.key==="ruinArch"){d.yaw;for(const U of[-1,1]){const O=new w(U*d.height*.375,0,0).applyMatrix4(P.matrixWorld),z=O.clone().normalize();n.push({position:z.clone(),radius:d.height*Math.hypot(.15,.16)+.02});let k=xe+jt(z);for(const H of[-.15,.15])for(const J of[-.16,.16]){const re=new w(U*d.height*.375+H*d.height,0,J*d.height).applyMatrix4(P.matrixWorld).normalize();k=Math.min(k,xe+jt(re))}const W=Math.max(.06,O.length()-k+.08),q=new rt(new Xi(d.height*.3,W,d.height*.32),c);q.position.copy(O).addScaledVector(z,-W/2),q.quaternion.copy(P.quaternion),q.name="arch-pier-footing",q.receiveShadow=!0,i.add(q),o.push(q)}}else d.radius!==0&&!["grass","bush1","bush2","craftedMeadow"].includes(d.key)&&n.push({position:D,radius:Math.max(d.radius??0,S+.03)});if(d.key==="torch"){const U=new ku("#ffad55",5,9,2);U.position.copy(P.position).addScaledVector(D,d.height*.7),i.add(U)}}const u=[];for(const d of s.values()){const f=new Iu(d.source.geometry,d.source.material,d.matrices.length);for(let g=0;g<d.matrices.length;g++)f.setMatrixAt(g,d.matrices[g]);f.computeBoundingSphere(),f.name=`instances-${d.key}`,f.castShadow=!["grass","bush1","bush2","craftedMeadow"].includes(d.key),f.receiveShadow=!0,f.userData.sourceMatrices=d.matrices,f.userData.lodRange=["grass","bush1","bush2","craftedMeadow","barrel","crate","ironOre","goldOre","copperOre"].includes(d.key)?42:d.key.includes("Tree")||d.key.startsWith("tree")?105:145,i.add(f),u.push(f)}return{obstacles:n,snapshots:r,instances:u,grounds:o}}function uM(i,e){const t=new w;for(const n of i){const r=n.userData.sourceMatrices;let s=0;for(const o of r)t.setFromMatrixPosition(o),t.distanceTo(e)<n.userData.lodRange&&n.setMatrixAt(s++,o);n.count=s,n.instanceMatrix.needsUpdate=!0}}function Yh(i,e){if(e===Sf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===fc||e===xu){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===fc)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class dM extends Pr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _M(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new IM(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Kr.extractUrlBase(e);o=Kr.resolveURL(c,this.path)}else o=Kr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new zu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Td){try{o[We.KHR_BINARY_GLTF]=new DM(e)}catch(u){r&&r(u);return}s=JSON.parse(o[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new XM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case We.KHR_MATERIALS_UNLIT:o[u]=new mM;break;case We.KHR_DRACO_MESH_COMPRESSION:o[u]=new LM(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:o[u]=new UM;break;case We.KHR_MESH_QUANTIZATION:o[u]=new NM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function fM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pM{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new he(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Wt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ku(h),c.distance=u;break;case"spot":c=new jp(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Cn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class mM{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return Bi}extendParams(e,t,n){const r=[];e.color=new he(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Wt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Rt))}return Promise.all(r)}}class gM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class _M{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(a,a)}return Promise.all(s)}}class xM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class vM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class MM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new he(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Wt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class yM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class SM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new he().setRGB(a[0],a[1],a[2],Wt),Promise.all(s)}}class EM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class TM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new he().setRGB(a[0],a[1],a[2],Wt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Rt)),Promise.all(s)}}class bM{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class wM{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class AM{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class RM{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class CM{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class PM{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,r.mode,r.filter),f})})}else return null}}class IM{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==hn.TRIANGLES&&c.mode!==hn.TRIANGLE_STRIP&&c.mode!==hn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new Ne,m=new w,p=new Ft,T=new w(1,1,1),E=new Iu(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&T.fromBufferAttribute(l.SCALE,v),E.setMatrixAt(v,_.compose(m,p,T));for(const v in l)if(v==="_COLOR_0"){const A=l[v];E.instanceColor=new mc(A.array,A.itemSize,A.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);gt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Td="glTF",Wr=12,jh={JSON:1313821514,BIN:5130562};class DM{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Wr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Td)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Wr,s=new DataView(e,Wr);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===jh.JSON){const c=new Uint8Array(e,Wr+o,a);this.content=n.decode(c)}else if(l===jh.BIN){const c=Wr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class LM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Sc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Sc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=vr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){r.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},a,c,Wt,d)})})}}class UM{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class NM{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class bd extends ds{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=r-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,T=1-m,E=p-d+u;for(let v=0;v!==a;v++){const A=o[_+v+a],R=o[_+v+l]*h,C=o[g+v+a],D=o[g+v]*h;s[v]=T*A+E*R+m*C+p*D}return s}}const FM=new Ft;class OM extends bd{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return FM.fromArray(s).normalize().toArray(s),s}}const hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kh={9728:Gt,9729:Kt,9984:hu,9985:Js,9986:qr,9987:In},Zh={33071:hi,33648:ao,10497:Vi},Sa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},BM={CUBICSPLINE:void 0,LINEAR:rs,STEP:is},Ea={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ei({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),i.DefaultMaterial}function Pi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Cn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function kM(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(r){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),r&&(i.morphAttributes.normal=u),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function HM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function VM(i){let e;const t=i.extensions&&i.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ta(t.attributes):e=i.indices+":"+Ta(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Ta(i.targets[n]);return e}function Ta(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ec(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function GM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const WM=new Ne;class XM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new qp(this.options.manager):this.textureLoader=new Jp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Pi(s,a,r),Cn(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Kr.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Sa[r.type],a=vr[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Pt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Sa[r.type],c=vr[r.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=r.byteOffset||0,f=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),T="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let E=t.cache.get(T);E||(_=new c(a,p*f,r.count*f/h),E=new Ep(_,f/h),t.cache.add(T,E)),m=new kc(E,l,d%f/h,g)}else a===null?_=new c(r.count*l):_=new c(a,d,r.count*l),m=new Pt(_,l,g);if(r.sparse!==void 0){const p=Sa.SCALAR,T=vr[r.sparse.indices.componentType],E=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,A=new T(o[1],E,r.sparse.count*p),R=new c(o[2],v,r.sparse.count*l);a!==null&&(m=new Pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,D=A.length;C<D;C++){const y=A[C];if(m.setX(y,R[C*l]),l>=2&&m.setY(y,R[C*l+1]),l>=3&&m.setZ(y,R[C*l+2]),l>=4&&m.setW(y,R[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Kh[d.magFilter]||Kt,h.minFilter=Kh[d.minFilter]||In,h.wrapS=Zh[d.wrapS]||Vi,h.wrapT=Zh[d.wrapT]||Vi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Gt&&h.minFilter!==Kt,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ct(_);m.needsUpdate=!0,d(m)}),t.load(Kr.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Cn(u,o),u.userData.mimeType=o.mimeType||GM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Lu,Un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Du,Un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ei}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){const u=r[We.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new he(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Wt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Rt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=xn);const h=s.alphaMode||Ea.OPAQUE;if(h===Ea.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ea.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Bi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Xe(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Bi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Bi){const u=s.emissiveFactor;a.emissive=new he().setRGB(u[0],u[1],u[2],Wt)}return s.emissiveTexture!==void 0&&o!==Bi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Rt)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Cn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Pi(r,u,s),u})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Jh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=VM(c),u=r[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Jh(new Ot,c,t),r[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?zM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const T=c[f];if(m.mode===hn.TRIANGLES||m.mode===hn.TRIANGLE_STRIP||m.mode===hn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Cu(_,T):new rt(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===hn.TRIANGLE_STRIP?p.geometry=Yh(p.geometry,xu):m.mode===hn.TRIANGLE_FAN&&(p.geometry=Yh(p.geometry,fc));else if(m.mode===hn.LINES)p=new Pp(_,T);else if(m.mode===hn.LINE_STRIP)p=new Wc(_,T);else if(m.mode===hn.LINE_LOOP)p=new Ip(_,T);else if(m.mode===hn.POINTS)p=new Dp(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&HM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Cn(p,s),m.extensions&&Pi(r,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Pi(r,u[0],s),u[0];const d=new Ln;s.extensions&&Pi(r,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(jf.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new $c(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Cn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Ne;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Vc(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=r.channels.length;u<d;u++){const f=r.channels[u],g=r.samplers[f.sampler],_=f.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,T=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let E=0,v=d.length;E<v;E++){const A=d[E],R=f[E],C=g[E],D=_[E],y=m[E];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const S=n._createAnimationTracks(A,R,C,D,y);if(S)for(let P=0;P<S.length;P++)p.push(S[P])}const T=new _c(s,void 0,p);return Cn(T,r),T})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,WM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Pu:c.length>1?h=new Ln:c.length===1?h=c[0]:h=new gt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Cn(h,s),s.extensions&&Pi(n,h,s),s.matrix!==void 0){const u=new Ne;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!r.associations.has(h))r.associations.set(h,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const u=r.associations.get(h);r.associations.set(h,{...u})}return r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Ln;n.name&&(s.name=r.createUniqueName(n.name)),Cn(s,n),n.extensions&&Pi(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of r.associations)(d instanceof Un||d instanceof Ct)&&u.set(d,f);return h.traverse(d=>{const f=r.associations.get(d);f!=null&&u.set(d,f)}),u};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];ci[s.path]===ci.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ci[s.path]){case ci.weights:c=br;break;case ci.rotation:c=wr;break;case ci.translation:case ci.scale:c=Ar;break;default:n.itemSize===1?c=br:c=Ar;break}const h=r.interpolation!==void 0?BM[r.interpolation]:rs,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+ci[s.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ec(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof wr?OM:bd;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qM(i,e,t){const n=e.attributes,r=new bn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),a.normalized){const h=Ec(vr[a.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new w,l=new w;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Ec(vr[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new On;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Jh(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Sc[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return Ye.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),Cn(i,e),qM(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?kM(i,e.targets,t):i})}async function $M(i,e=new dM,t="/",n){const r=[i.character,...Object.values(i.environment)],s=[...new Map(r.map(c=>[typeof c=="string"?c:c.file,c])).values()],o=new Map;let a=0;await Promise.all(s.map(async c=>{const h=typeof c=="string"?c:c.file,u=await e.loadAsync(Vv(h,t));o.set(h,u),n?.(++a,s.length)}));const l=new Map;for(const c of s){if(typeof c=="string"||!c.textureSha256)continue;o.get(c.file).scene.traverse(u=>{if(!(u instanceof rt)||Array.isArray(u.material)||!(u.material instanceof ei))return;const d=u.material,f=[c.textureSha256,d.color.getHex(),d.roughness,d.metalness,d.opacity,d.side,d.transparent].join(":"),g=l.get(f);g?(d.map?.image!==g.map?.image&&d.map?.image?.close?.(),u.material=g):l.set(f,d)})}return o}const Ro=document.querySelector("#world"),mi=document.querySelector("#status"),YM=document.querySelector("#place");function jM(){try{return new Zx({canvas:Ro,antialias:!0,powerPreference:"high-performance"})}catch(i){throw mi.textContent="This browser could not start WebGL. Try hardware acceleration in another browser.",i}}const Fn=jM();Fn.setPixelRatio(Math.min(devicePixelRatio,matchMedia("(pointer:coarse)").matches?1.5:2));Fn.shadowMap.enabled=!0;Fn.shadowMap.type=ou;Fn.outputColorSpace=Rt;Fn.toneMapping=cu;Fn.toneMappingExposure=yt.lighting.exposure;const Tn=new Sp;Tn.fog=new zc(yt.fog.color,yt.fog.near,yt.fog.far);const ln=new Ht(qi.fov,1,.1,500),wd=new $p(yt.lighting.fillSkyColor,yt.lighting.fillGroundColor,yt.lighting.fillIntensity);Tn.add(wd);const ti=new Hu(yt.lighting.keyColor,yt.lighting.keyIntensity);ti.castShadow=!0;const Qh=matchMedia("(pointer:coarse)").matches?1024:2048;ti.shadow.mapSize.set(Qh,Qh);Object.assign(ti.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:.5,far:140});ti.shadow.normalBias=.025;ti.shadow.bias=-15e-5;Tn.add(ti,ti.target);const Ad=lM();Tn.add(...Ad.meshes);const ui=tv();Tn.add(ui.group);function Rd(i){i.traverse(e=>{if(e instanceof rt)for(const t of Array.isArray(e.material)?e.material:[e.material])t instanceof ei&&ju(t)})}Rd(Tn);let ot=gd(),ro=new w(0,0,1).projectOnPlane(ot.normal).normalize(),Tc=0,bc=!0,sl=!1,ol=[],Cd=[],Pd,Id,Dd=0,wc,so={},oo="",eu="",Ld=[],tu=-1;const xo=new Ln;Tn.add(xo);const un=new Bv(Ro,al);un.zoom=qi.zoom;function al(){ot=gd(),ro.set(0,0,1).projectOnPlane(ot.normal).normalize(),un.yaw=Tc=0,un.pitch=qi.pitch,un.zoom=qi.zoom,bc=!0}document.querySelector("#home").addEventListener("click",al);document.querySelector("#help").addEventListener("click",()=>{const i=document.querySelector("#instructions");i.hidden=!i.hidden});const Hi=document.querySelector("#map-panel");document.querySelector("#map").addEventListener("click",()=>Hi.hidden=!Hi.hidden);window.addEventListener("keydown",i=>{i.code==="KeyM"&&(Hi.hidden=!Hi.hidden),i.code==="Escape"&&(Hi.hidden=!0,document.querySelector("#instructions").hidden=!0)});Hi.innerHTML=Lv();async function KM(){const i=await fetch("/assets/kaykit/manifest.json");if(!i.ok)throw new Error("Asset manifest unavailable");const e=await i.json();kv(e);const t=await $M(e,void 0,"/",(o,a)=>mi.textContent=`Preparing the whole world · ${o}/${a}`),n=t.get(e.character.file),r=Ed(pd(n.scene),1.65);r.traverse(o=>{o instanceof rt&&(o.castShadow=!0,o.receiveShadow=!0)}),Id=new Wv(r),xo.add(r),wc=new fm(r);for(const[o,a]of Object.entries(Hv(n.animations,e.character.animations)))so[o]=wc.clipAction(a);const s=hM(Tn,t,e);ol=s.obstacles,Ld=s.instances,Cd.push(...s.instances.filter(o=>!/grass|bush|craftedMeadow/.test(o.name)),...s.grounds),Pd={clips:n.animations.map(o=>o.name),assets:[...t.keys()],placements:s.snapshots.length,instanceBatches:s.instances.length},Rd(Tn),sl=!0,mi.textContent="Welcome to Bramblefield",setTimeout(()=>mi.classList.add("ready"),1800),setTimeout(()=>document.querySelector("#hint").style.opacity="0",22e3)}KM().catch(i=>{console.error(i),mi.textContent=`Couldn't load the world: ${i.message}`,mi.style.maxWidth="80vw"});const ZM=new em;let ba=0,Xr=0;const Ii=new w,wa=new w,nu=new w,iu=new w,Di=new w,ru=new w,Zs=new w,Aa=new pm;function Ud(){Fn.setSize(innerWidth,innerHeight),ln.aspect=innerWidth/innerHeight,ln.updateProjectionMatrix()}addEventListener("resize",Ud);Ud();Ro.addEventListener("webglcontextlost",i=>{i.preventDefault(),mi.classList.remove("ready"),mi.textContent="Graphics paused. Restoring your world…"});Ro.addEventListener("webglcontextrestored",()=>location.reload());function Nd(){requestAnimationFrame(Nd);const i=Math.min(ZM.getDelta(),.05);Xr+=i;const e=un.movement;for(ro.projectOnPlane(ot.normal).normalize().applyAxisAngle(ot.normal,un.yaw-Tc),Tc=un.yaw,wa.copy(ro).negate(),nu.crossVectors(wa,ot.normal).normalize(),iu.copy(wa).multiplyScalar(e.y).addScaledVector(nu,e.x),ba+=i;ba>=1/60;)sl&&Nv(ot,iu,e.running,1/60,ol),ba-=1/60;const t=jt(ot.normal);Ii.copy(ot.normal).multiplyScalar(xe+t+.035),xo.position.copy(Ii),xo.quaternion.setFromRotationMatrix(new Ne().makeBasis(new w().crossVectors(ot.normal,ot.forward).normalize(),ot.normal,ot.forward));const n=ot.speed>.15?e.running?"run":"walk":"idle";n!==oo&&so[n]&&(so[oo]?.fadeOut(.18),so[n].reset().fadeIn(.18).play(),oo=n),wc?.update(i),Dd=Id?.correct(Ii,ot.normal,fd(ot.normal))??0,Di.copy(Ii).addScaledVector(ot.normal,qi.targetHeight),ru.copy(Di).addScaledVector(ro,un.zoom*Math.cos(un.pitch)).addScaledVector(ot.normal,un.zoom*Math.sin(un.pitch)),ln.position.copy(Fv(ln.position,ru,i,bc)),bc=!1,Xr-tu>.5&&(uM(Ld,Ii),tu=Xr),Tn.updateMatrixWorld(!0),Zs.copy(ln.position).sub(Di),Aa.set(Di,Zs.clone().normalize()),Aa.far=Zs.length();const r=Aa.intersectObjects(Cd,!0);r.length&&ln.position.copy(Di).addScaledVector(Zs.normalize(),Math.max(.3,r[0].distance-.25)),ln.position.copy(Ov(Di,ln.position,jt)),ln.up.copy(ot.normal),ln.lookAt(Di),ui.update(ln.position,ot.normal,Xr);for(const o of Ad.waterSurfaces)o.update(Xr,ui.state);wd.position.copy(ui.state.up),ti.position.copy(Ii).addScaledVector(ui.sunDirection,75),ti.target.position.copy(Ii);const s=dd(ot.normal);if(eu!==s.id&&(YM.innerHTML=`${s.name} <span>·</span> ${s.description}${s.id==="quarry"?" · DANGER: watch your footing":""}`,eu=s.id,document.querySelector(".subtitle").textContent=s.name),!Hi.hidden){const[o,a]=Ao(ot.normal),l=document.querySelector("#map-player");l.setAttribute("cx",String(o)),l.setAttribute("cy",String(a))}Fn.render(Tn,ln)}Nd();Object.assign(window,{__planet:{getState:()=>({loaded:sl,normal:ot.normal.toArray(),radius:xe,terrainHeight:jt(ot.normal),region:dd(ot.normal).name,map:Ao(ot.normal),speed:ot.speed,distance:ot.distance,animation:oo,obstacles:ol.length,footCorrection:Dd,loadReport:Pd,atmosphere:{up:ui.state.up.toArray(),sunDirection:ui.sunDirection.toArray(),horizonDip:ui.state.horizonDip},drawCalls:Fn.info.render.calls,triangles:Fn.info.render.triangles}),home:al,controls:un}});
