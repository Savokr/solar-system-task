var kc=Object.defineProperty;var zc=(a,e,t)=>e in a?kc(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Tn=(a,e,t)=>zc(a,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vs="168",Ri={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gc=0,yo=1,Hc=2,Wl=1,Vc=2,_n=3,Mn=0,Pt=1,$t=2,Ln=0,Ci=1,Eo=2,To=3,bo=4,Wc=5,qn=100,Xc=101,Yc=102,jc=103,qc=104,Kc=200,Zc=201,Jc=202,Qc=203,as=204,ss=205,$c=206,eh=207,th=208,nh=209,ih=210,rh=211,ah=212,sh=213,oh=214,lh=0,ch=1,hh=2,na=3,uh=4,fh=5,dh=6,ph=7,Xl=0,mh=1,gh=2,In=0,_h=1,vh=2,xh=3,Mh=4,Sh=5,yh=6,Eh=7,Yl=300,Di=301,Li=302,os=303,ls=304,oa=306,cs=1e3,Zn=1001,hs=1002,Yt=1003,Th=1004,yr=1005,Gt=1006,ba=1007,Jn=1008,Sn=1009,jl=1010,ql=1011,cr=1012,Ws=1013,$n=1014,vn=1015,fr=1016,Xs=1017,Ys=1018,Ii=1020,Kl=35902,Zl=1021,Jl=1022,en=1023,Ql=1024,$l=1025,Pi=1026,Fi=1027,ec=1028,js=1029,tc=1030,qs=1031,Ks=1033,qr=33776,Kr=33777,Zr=33778,Jr=33779,us=35840,fs=35841,ds=35842,ps=35843,ms=36196,gs=37492,_s=37496,vs=37808,xs=37809,Ms=37810,Ss=37811,ys=37812,Es=37813,Ts=37814,bs=37815,As=37816,ws=37817,Rs=37818,Cs=37819,Ps=37820,Us=37821,Qr=36492,Ds=36494,Ls=36495,nc=36283,Is=36284,Fs=36285,Ns=36286,bh=3200,ic=3201,rc=0,Ah=1,Dn="",sn="srgb",Nn="srgb-linear",Zs="display-p3",la="display-p3-linear",ia="linear",ot="srgb",ra="rec709",aa="p3",si=7680,Ao=519,wh=512,Rh=513,Ch=514,ac=515,Ph=516,Uh=517,Dh=518,Lh=519,wo=35044,Ro="300 es",xn=2e3,sa=2001;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Co=1234567;const rr=Math.PI/180,hr=180/Math.PI;function Oi(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yt[a&255]+yt[a>>8&255]+yt[a>>16&255]+yt[a>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[r&255]+yt[r>>8&255]+yt[r>>16&255]+yt[r>>24&255]).toLowerCase()}function Mt(a,e,t){return Math.max(e,Math.min(t,a))}function Js(a,e){return(a%e+e)%e}function Ih(a,e,t,r,n){return r+(a-e)*(n-r)/(t-e)}function Fh(a,e,t){return a!==e?(t-a)/(e-a):0}function ar(a,e,t){return(1-t)*a+t*e}function Nh(a,e,t,r){return ar(a,e,1-Math.exp(-t*r))}function Oh(a,e=1){return e-Math.abs(Js(a,e*2)-e)}function Bh(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function kh(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function zh(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Gh(a,e){return a+Math.random()*(e-a)}function Hh(a){return a*(.5-Math.random())}function Vh(a){a!==void 0&&(Co=a);let e=Co+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wh(a){return a*rr}function Xh(a){return a*hr}function Yh(a){return(a&a-1)===0&&a!==0}function jh(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function qh(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Kh(a,e,t,r,n){const i=Math.cos,s=Math.sin,o=i(t/2),l=s(t/2),c=i((e+r)/2),h=s((e+r)/2),u=i((e-r)/2),f=s((e-r)/2),d=i((r-e)/2),g=s((r-e)/2);switch(n){case"XYX":a.set(o*h,l*u,l*f,o*c);break;case"YZY":a.set(l*f,o*h,l*u,o*c);break;case"ZXZ":a.set(l*u,l*f,o*h,o*c);break;case"XZX":a.set(o*h,l*g,l*d,o*c);break;case"YXY":a.set(l*d,o*h,l*g,o*c);break;case"ZYZ":a.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ti(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Rt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const sc={DEG2RAD:rr,RAD2DEG:hr,generateUUID:Oi,clamp:Mt,euclideanModulo:Js,mapLinear:Ih,inverseLerp:Fh,lerp:ar,damp:Nh,pingpong:Oh,smoothstep:Bh,smootherstep:kh,randInt:zh,randFloat:Gh,randFloatSpread:Hh,seededRandom:Vh,degToRad:Wh,radToDeg:Xh,isPowerOfTwo:Yh,ceilPowerOfTwo:jh,floorPowerOfTwo:qh,setQuaternionFromProperEuler:Kh,normalize:Rt,denormalize:Ti};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*r-s*n+e.x,this.y=i*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,r,n,i,s,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,s,o,l,c)}set(e,t,r,n,i,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=i,h[5]=l,h[6]=r,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],h=r[4],u=r[7],f=r[2],d=r[5],g=r[8],v=n[0],p=n[3],m=n[6],y=n[1],M=n[4],S=n[7],P=n[2],w=n[5],T=n[8];return i[0]=s*v+o*y+l*P,i[3]=s*p+o*M+l*w,i[6]=s*m+o*S+l*T,i[1]=c*v+h*y+u*P,i[4]=c*p+h*M+u*w,i[7]=c*m+h*S+u*T,i[2]=f*v+d*y+g*P,i[5]=f*p+d*M+g*w,i[8]=f*m+d*S+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-r*i*h+r*o*l+n*i*c-n*s*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,f=o*l-h*i,d=c*i-s*l,g=t*u+r*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(n*c-h*r)*v,e[2]=(o*r-n*s)*v,e[3]=f*v,e[4]=(h*t-n*l)*v,e[5]=(n*i-o*t)*v,e[6]=d*v,e[7]=(r*l-c*t)*v,e[8]=(s*t-r*i)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,s,o){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Aa.makeScale(e,t)),this}rotate(e){return this.premultiply(Aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new je;function oc(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ur(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Zh(){const a=ur("canvas");return a.style.display="block",a}const Po={};function sr(a){a in Po||(Po[a]=!0,console.warn(a))}function Jh(a,e,t){return new Promise(function(r,n){function i(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:r()}}setTimeout(i,t)})}const Uo=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Do=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zi={[Nn]:{transfer:ia,primaries:ra,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a,fromReference:a=>a},[sn]:{transfer:ot,primaries:ra,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[la]:{transfer:ia,primaries:aa,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.applyMatrix3(Do),fromReference:a=>a.applyMatrix3(Uo)},[Zs]:{transfer:ot,primaries:aa,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.convertSRGBToLinear().applyMatrix3(Do),fromReference:a=>a.applyMatrix3(Uo).convertLinearToSRGB()}},Qh=new Set([Nn,la]),$e={enabled:!0,_workingColorSpace:Nn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Qh.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const r=Zi[e].toReference,n=Zi[t].fromReference;return n(r(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return Zi[a].primaries},getTransfer:function(a){return a===Dn?ia:Zi[a].transfer},getLuminanceCoefficients:function(a,e=this._workingColorSpace){return a.fromArray(Zi[e].luminanceCoefficients)}};function Ui(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function wa(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let oi;class $h{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=ur("canvas")),oi.width=e.width,oi.height=e.height;const r=oi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let s=0;s<i.length;s++)i[s]=Ui(i[s]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ui(t[r]/255)*255):t[r]=Ui(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eu=0;class lc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?i.push(Ra(n[s].image)):i.push(Ra(n[s]))}else i=Ra(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function Ra(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?$h.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tu=0;class Tt extends ni{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,r=Zn,n=Zn,i=Gt,s=Jn,o=en,l=Sn,c=Tt.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Oi(),this.name="",this.source=new lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cs:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case hs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cs:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case hs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Yl;Tt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,r=0,n=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n+s[12]*i,this.y=s[1]*t+s[5]*r+s[9]*n+s[13]*i,this.z=s[2]*t+s[6]*r+s[10]*n+s[14]*i,this.w=s[3]*t+s[7]*r+s[11]*n+s[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(d+1)/2,P=(m+1)/2,w=(h+f)/4,T=(u+v)/4,U=(g+p)/4;return M>S&&M>P?M<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(M),n=w/r,i=T/r):S>P?S<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(S),r=w/n,i=U/n):P<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(P),r=T/i,n=U/i),this.set(r,n,i,t),this}let y=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nu extends ni{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const n={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const i=new Tt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);i.flipY=!1,i.generateMipmaps=r.generateMipmaps,i.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,n=e.textures.length;r<n;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends nu{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class cc extends Tt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iu extends Tt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,s,o){let l=r[n+0],c=r[n+1],h=r[n+2],u=r[n+3];const f=i[s+0],d=i[s+1],g=i[s+2],v=i[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let p=1-o;const m=l*f+c*d+h*g+u*v,y=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const P=Math.sqrt(M),w=Math.atan2(P,m*y);p=Math.sin(p*w)/P,o=Math.sin(o*w)/P}const S=o*y;if(l=l*p+f*S,c=c*p+d*S,h=h*p+g*S,u=u*p+v*S,p===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,r,n,i,s){const o=r[n],l=r[n+1],c=r[n+2],h=r[n+3],u=i[s],f=i[s+1],d=i[s+2],g=i[s+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,i=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),h=o(n/2),u=o(i/2),f=l(r/2),d=l(n/2),g=l(i/2);switch(s){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=r+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(i-c)*d,this._z=(s-n)*d}else if(r>o&&r>u){const d=2*Math.sqrt(1+r-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(i+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-r-u);this._w=(i-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-r-o);this._w=(s-n)/d,this._x=(i+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=r*h+s*o+n*c-i*l,this._y=n*h+s*l+i*o-r*c,this._z=i*h+s*c+r*l-n*o,this._w=s*h-r*o-n*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,s=this._w;let o=s*e._w+r*e._x+n*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=n,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*r+t*this._x,this._y=d*n+t*this._y,this._z=d*i+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=s*u+this._w*f,this._x=r*u+this._x*f,this._y=n*u+this._y*f,this._z=i*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,s=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*s,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*s,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*r),h=2*(o*t-i*n),u=2*(i*r-s*t);return this.x=t+l*c+s*u-o*h,this.y=r+l*h+o*c-i*u,this.z=n+l*u+i*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-i*o,this.y=i*s-r*l,this.z=r*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new K,Lo=new ti;class Bi{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=i.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Zt):Zt.fromBufferAttribute(i,s),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Er.copy(r.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Tr.subVectors(this.max,Ji),li.subVectors(e.a,Ji),ci.subVectors(e.b,Ji),hi.subVectors(e.c,Ji),bn.subVectors(ci,li),An.subVectors(hi,ci),zn.subVectors(li,hi);let t=[0,-bn.z,bn.y,0,-An.z,An.y,0,-zn.z,zn.y,bn.z,0,-bn.x,An.z,0,-An.x,zn.z,0,-zn.x,-bn.y,bn.x,0,-An.y,An.x,0,-zn.y,zn.x,0];return!Pa(t,li,ci,hi,Tr)||(t=[1,0,0,0,1,0,0,0,1],!Pa(t,li,ci,hi,Tr))?!1:(br.crossVectors(bn,An),t=[br.x,br.y,br.z],Pa(t,li,ci,hi,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new K,new K,new K,new K,new K,new K,new K,new K],Zt=new K,Er=new Bi,li=new K,ci=new K,hi=new K,bn=new K,An=new K,zn=new K,Ji=new K,Tr=new K,br=new K,Gn=new K;function Pa(a,e,t,r,n){for(let i=0,s=a.length-3;i<=s;i+=3){Gn.fromArray(a,i);const o=n.x*Math.abs(Gn.x)+n.y*Math.abs(Gn.y)+n.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),h=r.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ru=new Bi,Qi=new K,Ua=new K;class ca{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ru.setFromPoints(e).getCenter(r);let n=0;for(let i=0,s=e.length;i<s;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Qi,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(Ua)),this.expandByPoint(Qi.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new K,Da=new K,Ar=new K,wn=new K,La=new K,wr=new K,Ia=new K;class Qs{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Da.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(Da);const i=e.distanceTo(t)*.5,s=-this.direction.dot(Ar),o=wn.dot(this.direction),l=-wn.dot(Ar),c=wn.lengthSq(),h=Math.abs(1-s*s);let u,f,d,g;if(h>0)if(u=s*l-o,f=s*o-l,g=i*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+s*f+2*o)+f*(s*u+f+2*l)+c}else f=i,u=Math.max(0,-(s*f+o)),d=-u*u+f*(f+2*l)+c;else f=-i,u=Math.max(0,-(s*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-s*i+o)),f=u>0?-i:Math.min(Math.max(-i,-l),i),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-i,-l),i),d=f*(f+2*l)+c):(u=Math.max(0,-(s*i+o)),f=u>0?i:Math.min(Math.max(-i,-l),i),d=-u*u+f*(f+2*l)+c);else f=s>0?-i:i,u=Math.max(0,-(s*f+o)),d=-u*u+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Da).addScaledVector(Ar,f),d}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const r=dn.dot(this.direction),n=dn.dot(dn)-r*r,i=e.radius*e.radius;if(n>i)return null;const s=Math.sqrt(i-n),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),h>=0?(i=(e.min.y-f.y)*h,s=(e.max.y-f.y)*h):(i=(e.max.y-f.y)*h,s=(e.min.y-f.y)*h),r>s||i>n||((i>r||isNaN(r))&&(r=i),(s<n||isNaN(n))&&(n=s),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,r,n,i){La.subVectors(t,e),wr.subVectors(r,e),Ia.crossVectors(La,wr);let s=this.direction.dot(Ia),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;wn.subVectors(this.origin,e);const l=o*this.direction.dot(wr.crossVectors(wn,wr));if(l<0)return null;const c=o*this.direction.dot(La.cross(wn));if(c<0||l+c>s)return null;const h=-o*wn.dot(Ia);return h<0?null:this.at(h/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,r,n,i,s,o,l,c,h,u,f,d,g,v,p){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,s,o,l,c,h,u,f,d,g,v,p)}set(e,t,r,n,i,s,o,l,c,h,u,f,d,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=r,m[12]=n,m[1]=i,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/ui.setFromMatrixColumn(e,0).length(),i=1/ui.setFromMatrixColumn(e,1).length(),s=1/ui.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),h=Math.cos(i),u=Math.sin(i);if(e.order==="XYZ"){const f=s*h,d=s*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f+v*o,t[4]=g*o-d,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f-v*o,t[4]=-s*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=s*h,t[9]=v-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*h,d=s*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,d=s*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=s*l,d=s*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=s*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(au,e,su)}lookAt(e,t,r){const n=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Rn.crossVectors(r,Bt),Rn.lengthSq()===0&&(Math.abs(r.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Rn.crossVectors(r,Bt)),Rn.normalize(),Rr.crossVectors(Bt,Rn),n[0]=Rn.x,n[4]=Rr.x,n[8]=Bt.x,n[1]=Rn.y,n[5]=Rr.y,n[9]=Bt.y,n[2]=Rn.z,n[6]=Rr.z,n[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],h=r[1],u=r[5],f=r[9],d=r[13],g=r[2],v=r[6],p=r[10],m=r[14],y=r[3],M=r[7],S=r[11],P=r[15],w=n[0],T=n[4],U=n[8],E=n[12],x=n[1],D=n[5],C=n[9],I=n[13],N=n[2],G=n[6],B=n[10],Q=n[14],Y=n[3],J=n[7],j=n[11],L=n[15];return i[0]=s*w+o*x+l*N+c*Y,i[4]=s*T+o*D+l*G+c*J,i[8]=s*U+o*C+l*B+c*j,i[12]=s*E+o*I+l*Q+c*L,i[1]=h*w+u*x+f*N+d*Y,i[5]=h*T+u*D+f*G+d*J,i[9]=h*U+u*C+f*B+d*j,i[13]=h*E+u*I+f*Q+d*L,i[2]=g*w+v*x+p*N+m*Y,i[6]=g*T+v*D+p*G+m*J,i[10]=g*U+v*C+p*B+m*j,i[14]=g*E+v*I+p*Q+m*L,i[3]=y*w+M*x+S*N+P*Y,i[7]=y*T+M*D+S*G+P*J,i[11]=y*U+M*C+S*B+P*j,i[15]=y*E+M*I+S*Q+P*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+i*l*u-n*c*u-i*o*f+r*c*f+n*o*d-r*l*d)+v*(+t*l*d-t*c*f+i*s*f-n*s*d+n*c*h-i*l*h)+p*(+t*c*u-t*o*d-i*s*u+r*s*d+i*o*h-r*c*h)+m*(-n*o*h-t*l*u+t*o*f+n*s*u-r*s*f+r*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],p=e[14],m=e[15],y=u*p*c-v*f*c+v*l*d-o*p*d-u*l*m+o*f*m,M=g*f*c-h*p*c-g*l*d+s*p*d+h*l*m-s*f*m,S=h*v*c-g*u*c+g*o*d-s*v*d-h*o*m+s*u*m,P=g*u*l-h*v*l-g*o*f+s*v*f+h*o*p-s*u*p,w=t*y+r*M+n*S+i*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(v*f*i-u*p*i-v*n*d+r*p*d+u*n*m-r*f*m)*T,e[2]=(o*p*i-v*l*i+v*n*c-r*p*c-o*n*m+r*l*m)*T,e[3]=(u*l*i-o*f*i-u*n*c+r*f*c+o*n*d-r*l*d)*T,e[4]=M*T,e[5]=(h*p*i-g*f*i+g*n*d-t*p*d-h*n*m+t*f*m)*T,e[6]=(g*l*i-s*p*i-g*n*c+t*p*c+s*n*m-t*l*m)*T,e[7]=(s*f*i-h*l*i+h*n*c-t*f*c-s*n*d+t*l*d)*T,e[8]=S*T,e[9]=(g*u*i-h*v*i-g*r*d+t*v*d+h*r*m-t*u*m)*T,e[10]=(s*v*i-g*o*i+g*r*c-t*v*c-s*r*m+t*o*m)*T,e[11]=(h*o*i-s*u*i-h*r*c+t*u*c+s*r*d-t*o*d)*T,e[12]=P*T,e[13]=(h*v*n-g*u*n+g*r*f-t*v*f-h*r*p+t*u*p)*T,e[14]=(g*o*n-s*v*n-g*r*l+t*v*l+s*r*p-t*o*p)*T,e[15]=(s*u*n-h*o*n+h*r*l-t*u*l-s*r*f+t*o*f)*T,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,s=e.x,o=e.y,l=e.z,c=i*s,h=i*o;return this.set(c*s+r,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+r,h*l-n*s,0,c*l-n*o,h*l+n*s,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,s){return this.set(1,r,i,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,s=t._y,o=t._z,l=t._w,c=i+i,h=s+s,u=o+o,f=i*c,d=i*h,g=i*u,v=s*h,p=s*u,m=o*u,y=l*c,M=l*h,S=l*u,P=r.x,w=r.y,T=r.z;return n[0]=(1-(v+m))*P,n[1]=(d+S)*P,n[2]=(g-M)*P,n[3]=0,n[4]=(d-S)*w,n[5]=(1-(f+m))*w,n[6]=(p+y)*w,n[7]=0,n[8]=(g+M)*T,n[9]=(p-y)*T,n[10]=(1-(f+v))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=ui.set(n[0],n[1],n[2]).length();const s=ui.set(n[4],n[5],n[6]).length(),o=ui.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],Jt.copy(this);const c=1/i,h=1/s,u=1/o;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=h,Jt.elements[5]*=h,Jt.elements[6]*=h,Jt.elements[8]*=u,Jt.elements[9]*=u,Jt.elements[10]*=u,t.setFromRotationMatrix(Jt),r.x=i,r.y=s,r.z=o,this}makePerspective(e,t,r,n,i,s,o=xn){const l=this.elements,c=2*i/(t-e),h=2*i/(r-n),u=(t+e)/(t-e),f=(r+n)/(r-n);let d,g;if(o===xn)d=-(s+i)/(s-i),g=-2*s*i/(s-i);else if(o===sa)d=-s/(s-i),g=-s*i/(s-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,i,s,o=xn){const l=this.elements,c=1/(t-e),h=1/(r-n),u=1/(s-i),f=(t+e)*c,d=(r+n)*h;let g,v;if(o===xn)g=(s+i)*u,v=-2*u;else if(o===sa)g=i*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ui=new K,Jt=new lt,au=new K(0,0,0),su=new K(1,1,1),Rn=new K,Rr=new K,Bt=new K,Io=new lt,Fo=new ti;class cn{constructor(e=0,t=0,r=0,n=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],s=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Io.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Io,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fo.setFromEuler(this),this.setFromQuaternion(Fo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class $s{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ou=0;const No=new K,fi=new ti,pn=new lt,Cr=new K,$i=new K,lu=new K,cu=new ti,Oo=new K(1,0,0),Bo=new K(0,1,0),ko=new K(0,0,1),zo={type:"added"},hu={type:"removed"},di={type:"childadded",child:null},Fa={type:"childremoved",child:null};class bt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new K,t=new cn,r=new ti,n=new K(1,1,1);function i(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new lt},normalMatrix:{value:new je}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,t){return fi.setFromAxisAngle(e,t),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(Oo,e)}rotateY(e){return this.rotateOnAxis(Bo,e)}rotateZ(e){return this.rotateOnAxis(ko,e)}translateOnAxis(e,t){return No.copy(e).applyQuaternion(this.quaternion),this.position.add(No.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oo,e)}translateY(e){return this.translateOnAxis(Bo,e)}translateZ(e){return this.translateOnAxis(ko,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Cr.copy(e):Cr.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt($i,Cr,this.up):pn.lookAt(Cr,$i,this.up),this.quaternion.setFromRotationMatrix(pn),n&&(pn.extractRotation(n.matrixWorld),fi.setFromRotationMatrix(pn),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zo),di.child=e,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hu),Fa.child=e,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zo),di.child=e,this.dispatchEvent(di),di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,cu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];i(e.shapes,u)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(e.materials,this.material[l]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(i(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),f=s(e.skeletons),d=s(e.animations),g=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),u.length>0&&(r.shapes=u),f.length>0&&(r.skeletons=f),d.length>0&&(r.animations=d),g.length>0&&(r.nodes=g)}return r.object=n,r;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}bt.DEFAULT_UP=new K(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new K,mn=new K,Na=new K,gn=new K,pi=new K,mi=new K,Go=new K,Oa=new K,Ba=new K,ka=new K;class ln{constructor(e=new K,t=new K,r=new K){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),Qt.subVectors(e,t),n.cross(Qt);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){Qt.subVectors(n,t),mn.subVectors(r,t),Na.subVectors(e,t);const s=Qt.dot(Qt),o=Qt.dot(mn),l=Qt.dot(Na),c=mn.dot(mn),h=mn.dot(Na),u=s*c-o*o;if(u===0)return i.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(s*h-o*l)*f;return i.set(1-d-g,g,d)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,r,n,i,s,o,l){return this.getBarycoord(e,t,r,n,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,gn.x),l.addScaledVector(s,gn.y),l.addScaledVector(o,gn.z),l)}static isFrontFacing(e,t,r,n){return Qt.subVectors(r,t),mn.subVectors(e,t),Qt.cross(mn).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Qt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,i){return ln.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let s,o;pi.subVectors(n,r),mi.subVectors(i,r),Oa.subVectors(e,r);const l=pi.dot(Oa),c=mi.dot(Oa);if(l<=0&&c<=0)return t.copy(r);Ba.subVectors(e,n);const h=pi.dot(Ba),u=mi.dot(Ba);if(h>=0&&u<=h)return t.copy(n);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(r).addScaledVector(pi,s);ka.subVectors(e,i);const d=pi.dot(ka),g=mi.dot(ka);if(g>=0&&d<=g)return t.copy(i);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(mi,o);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Go.subVectors(i,n),o=(u-h)/(u-h+(d-g)),t.copy(n).addScaledVector(Go,o);const m=1/(p+v+f);return s=v*m,o=f*m,t.copy(r).addScaledVector(pi,s).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function za(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class qe{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=$e.workingColorSpace){return this.r=e,this.g=t,this.b=r,$e.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=$e.workingColorSpace){if(e=Js(e,1),t=Mt(t,0,1),r=Mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,s=2*r-i;this.r=za(s,i,e+1/3),this.g=za(s,i,e),this.b=za(s,i,e-1/3)}return $e.toWorkingColorSpace(this,n),this}setStyle(e,t=sn){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const r=hc[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return $e.fromWorkingColorSpace(Et.copy(this),e),Math.round(Mt(Et.r*255,0,255))*65536+Math.round(Mt(Et.g*255,0,255))*256+Math.round(Mt(Et.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Et.copy(this),t);const r=Et.r,n=Et.g,i=Et.b,s=Math.max(r,n,i),o=Math.min(r,n,i);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case r:l=(n-i)/u+(n<i?6:0);break;case n:l=(i-r)/u+2;break;case i:l=(r-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=sn){$e.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,r=Et.g,n=Et.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(Pr);const r=ar(Cn.h,Pr.h,t),n=ar(Cn.s,Pr.s,t),i=ar(Cn.l,Pr.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new qe;qe.NAMES=hc;let uu=0;class dr extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Ci,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=as,this.blendDst=ss,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(r.blending=this.blending),this.side!==Mn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==as&&(r.blendSrc=this.blendSrc),this.blendDst!==ss&&(r.blendDst=this.blendDst),this.blendEquation!==qn&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ao&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(r.stencilFail=this.stencilFail),this.stencilZFail!==si&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const s=[];for(const o in i){const l=i[o];delete l.metadata,s.push(l)}return s}if(t){const i=n(e.textures),s=n(e.images);i.length>0&&(r.textures=i),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ha extends dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new K,Ur=new Ge;class tn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return sr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ti(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Rt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),r=Rt(r,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),r=Rt(r,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wo&&(e.usage=this.usage),e}}class uc extends tn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class fc extends tn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class nn extends tn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let fu=0;const Xt=new lt,Ga=new bt,gi=new K,kt=new Bi,er=new Bi,vt=new K;class hn extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oc(e)?fc:uc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new je().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,r){return Xt.makeTranslation(e,t,r),this.applyMatrix4(Xt),this}scale(e,t,r){return Xt.makeScale(e,t,r),this.applyMatrix4(Xt),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const i=e[r];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];kt.setFromBufferAttribute(i),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];er.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(kt.min,er.min),kt.expandByPoint(vt),vt.addVectors(kt.max,er.max),kt.expandByPoint(vt)):(kt.expandByPoint(er.min),kt.expandByPoint(er.max))}kt.getCenter(r);let n=0;for(let i=0,s=e.count;i<s;i++)vt.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(vt));if(t)for(let i=0,s=t.length;i<s;i++){const o=t[i],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vt.fromBufferAttribute(o,c),l&&(gi.fromBufferAttribute(e,c),vt.add(gi)),n=Math.max(n,r.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<r.count;U++)o[U]=new K,l[U]=new K;const c=new K,h=new K,u=new K,f=new Ge,d=new Ge,g=new Ge,v=new K,p=new K;function m(U,E,x){c.fromBufferAttribute(r,U),h.fromBufferAttribute(r,E),u.fromBufferAttribute(r,x),f.fromBufferAttribute(i,U),d.fromBufferAttribute(i,E),g.fromBufferAttribute(i,x),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(D),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),o[U].add(v),o[E].add(v),o[x].add(v),l[U].add(p),l[E].add(p),l[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let U=0,E=y.length;U<E;++U){const x=y[U],D=x.start,C=x.count;for(let I=D,N=D+C;I<N;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new K,S=new K,P=new K,w=new K;function T(U){P.fromBufferAttribute(n,U),w.copy(P);const E=o[U];M.copy(E),M.sub(P.multiplyScalar(P.dot(E))).normalize(),S.crossVectors(w,E);const D=S.dot(l[U])<0?-1:1;s.setXYZW(U,M.x,M.y,M.z,D)}for(let U=0,E=y.length;U<E;++U){const x=y[U],D=x.start,C=x.count;for(let I=D,N=D+C;I<N;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,d=r.count;f<d;f++)r.setXYZ(f,0,0,0);const n=new K,i=new K,s=new K,o=new K,l=new K,c=new K,h=new K,u=new K;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,p),h.subVectors(s,i),u.subVectors(n,i),h.cross(u),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,p),o.add(h),l.add(h),c.add(h),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),i.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),h.subVectors(s,i),u.subVectors(n,i),h.cross(u),r.setXYZ(f+0,h.x,h.y,h.z),r.setXYZ(f+1,h.x,h.y,h.z),r.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new tn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,r=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,r);t.setAttribute(o,c)}const i=this.morphAttributes;for(const o in i){const l=[],c=i[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,r);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(n[l]=h,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const i=e.morphAttributes;for(const c in i){const h=[],u=i[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ho=new lt,Hn=new Qs,Dr=new ca,Vo=new K,_i=new K,vi=new K,xi=new K,Ha=new K,Lr=new K,Ir=new Ge,Fr=new Ge,Nr=new Ge,Wo=new K,Xo=new K,Yo=new K,Or=new K,Br=new K;class Ht extends bt{constructor(e=new hn,t=new ha){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(i&&o){Lr.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const h=o[l],u=i[l];h!==0&&(Ha.fromBufferAttribute(u,e),s?Lr.addScaledVector(Ha,h):Lr.addScaledVector(Ha.sub(t),h))}t.add(Lr)}return t}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Dr.copy(r.boundingSphere),Dr.applyMatrix4(i),Hn.copy(e.ray).recast(e.near),!(Dr.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(Dr,Vo)===null||Hn.origin.distanceToSquared(Vo)>(e.far-e.near)**2))&&(Ho.copy(i).invert(),Hn.copy(e.ray).applyMatrix4(Ho),!(r.boundingBox!==null&&Hn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))}_computeIntersections(e,t,r){let n;const i=this.geometry,s=this.material,o=i.index,l=i.attributes.position,c=i.attributes.uv,h=i.attributes.uv1,u=i.attributes.normal,f=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=s[p.materialIndex],y=Math.max(p.start,d.start),M=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,P=M;S<P;S+=3){const w=o.getX(S),T=o.getX(S+1),U=o.getX(S+2);n=kr(this,m,e,r,c,h,u,w,T,U),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const y=o.getX(p),M=o.getX(p+1),S=o.getX(p+2);n=kr(this,s,e,r,c,h,u,y,M,S),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=s[p.materialIndex],y=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,P=M;S<P;S+=3){const w=S,T=S+1,U=S+2;n=kr(this,m,e,r,c,h,u,w,T,U),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const y=p,M=p+1,S=p+2;n=kr(this,s,e,r,c,h,u,y,M,S),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function du(a,e,t,r,n,i,s,o){let l;if(e.side===Pt?l=r.intersectTriangle(s,i,n,!0,o):l=r.intersectTriangle(n,i,s,e.side===Mn,o),l===null)return null;Br.copy(o),Br.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:a}}function kr(a,e,t,r,n,i,s,o,l,c){a.getVertexPosition(o,_i),a.getVertexPosition(l,vi),a.getVertexPosition(c,xi);const h=du(a,e,t,r,_i,vi,xi,Or);if(h){n&&(Ir.fromBufferAttribute(n,o),Fr.fromBufferAttribute(n,l),Nr.fromBufferAttribute(n,c),h.uv=ln.getInterpolation(Or,_i,vi,xi,Ir,Fr,Nr,new Ge)),i&&(Ir.fromBufferAttribute(i,o),Fr.fromBufferAttribute(i,l),Nr.fromBufferAttribute(i,c),h.uv1=ln.getInterpolation(Or,_i,vi,xi,Ir,Fr,Nr,new Ge)),s&&(Wo.fromBufferAttribute(s,o),Xo.fromBufferAttribute(s,l),Yo.fromBufferAttribute(s,c),h.normal=ln.getInterpolation(Or,_i,vi,xi,Wo,Xo,Yo,new K),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new K,materialIndex:0};ln.getNormal(_i,vi,xi,u.normal),h.face=u}return h}class pr extends hn{constructor(e=1,t=1,r=1,n=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:s};const o=this;n=Math.floor(n),i=Math.floor(i),s=Math.floor(s);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,r,t,e,s,i,0),g("z","y","x",1,-1,r,t,-e,s,i,1),g("x","z","y",1,1,e,r,t,n,s,2),g("x","z","y",1,-1,e,r,-t,n,s,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(u,2));function g(v,p,m,y,M,S,P,w,T,U,E){const x=S/T,D=P/U,C=S/2,I=P/2,N=w/2,G=T+1,B=U+1;let Q=0,Y=0;const J=new K;for(let j=0;j<B;j++){const L=j*D-I;for(let V=0;V<G;V++){const ne=V*x-C;J[v]=ne*y,J[p]=L*M,J[m]=N,c.push(J.x,J.y,J.z),J[v]=0,J[p]=0,J[m]=w>0?1:-1,h.push(J.x,J.y,J.z),u.push(V/T),u.push(1-j/U),Q+=1}}for(let j=0;j<U;j++)for(let L=0;L<T;L++){const V=f+L+G*j,ne=f+L+G*(j+1),F=f+(L+1)+G*(j+1),O=f+(L+1)+G*j;l.push(V,ne,O),l.push(ne,F,O),Y+=6}o.addGroup(d,Y,E),d+=Y,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ni(a){const e={};for(const t in a){e[t]={};for(const r in a[t]){const n=a[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Ct(a){const e={};for(let t=0;t<a.length;t++){const r=Ni(a[t]);for(const n in r)e[n]=r[n]}return e}function pu(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function dc(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const pc={clone:Ni,merge:Ct};var mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mu,this.fragmentShader=gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=pu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class mc extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new K,jo=new Ge,qo=new Ge;class zt extends mc{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,jo,qo),t.subVectors(qo,jo)}setViewOffset(e,t,r,n,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rr*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;i+=s.offsetX*n/l,t-=s.offsetY*r/c,n*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mi=-90,Si=1;class _u extends bt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new zt(Mi,Si,e,t);n.layers=this.layers,this.add(n);const i=new zt(Mi,Si,e,t);i.layers=this.layers,this.add(i);const s=new zt(Mi,Si,e,t);s.layers=this.layers,this.add(s);const o=new zt(Mi,Si,e,t);o.layers=this.layers,this.add(o);const l=new zt(Mi,Si,e,t);l.layers=this.layers,this.add(l);const c=new zt(Mi,Si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,i,s,o,l]=t;for(const c of t)this.remove(c);if(e===xn)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,s),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,n),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class gc extends Tt{constructor(e,t,r,n,i,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,r,n,i,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vu extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new gc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new pr(5,5,5),i=new Fn({name:"CubemapFromEquirect",uniforms:Ni(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pt,blending:Ln});i.uniforms.tEquirect.value=t;const s=new Ht(n,i),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Gt),new _u(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,n){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,n);e.setRenderTarget(i)}}const Va=new K,xu=new K,Mu=new je;class Un{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=Va.subVectors(r,t).cross(xu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Va),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Mu.getNormalMatrix(e),n=this.coplanarPoint(Va).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new ca,zr=new K;class eo{constructor(e=new Un,t=new Un,r=new Un,n=new Un,i=new Un,s=new Un){this.planes=[e,t,r,n,i,s]}set(e,t,r,n,i,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=xn){const r=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],f=n[7],d=n[8],g=n[9],v=n[10],p=n[11],m=n[12],y=n[13],M=n[14],S=n[15];if(r[0].setComponents(l-i,f-c,p-d,S-m).normalize(),r[1].setComponents(l+i,f+c,p+d,S+m).normalize(),r[2].setComponents(l+s,f+h,p+g,S+y).normalize(),r[3].setComponents(l-s,f-h,p-g,S-y).normalize(),r[4].setComponents(l-o,f-u,p-v,S-M).normalize(),t===xn)r[5].setComponents(l+o,f+u,p+v,S+M).normalize();else if(t===sa)r[5].setComponents(o,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(zr.x=n.normal.x>0?e.max.x:e.min.x,zr.y=n.normal.y>0?e.max.y:e.min.y,zr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _c(){let a=null,e=!1,t=null,r=null;function n(i,s){t(i,s),r=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function Su(a){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=a.createBuffer();a.bindBuffer(l,f),a.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=a.HALF_FLOAT:d=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=a.SHORT;else if(c instanceof Uint32Array)d=a.UNSIGNED_INT;else if(c instanceof Int32Array)d=a.INT;else if(c instanceof Int8Array)d=a.BYTE;else if(c instanceof Uint8Array)d=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function r(o,l,c){const h=l.array,u=l._updateRange,f=l.updateRanges;if(a.bindBuffer(c,o),u.count===-1&&f.length===0&&a.bufferSubData(c,0,h),f.length!==0){for(let d=0,g=f.length;d<g;d++){const v=f[d];a.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}u.count!==-1&&(a.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:n,remove:i,update:s}}class ii extends hn{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,s=t/2,o=Math.floor(r),l=Math.floor(n),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const y=m*f-s;for(let M=0;M<c;M++){const S=M*u-i;g.push(S,-y,0),v.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const M=y+c*m,S=y+c*(m+1),P=y+1+c*(m+1),w=y+1+c*m;d.push(M,S,w),d.push(S,P,w)}this.setIndex(d),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(v,3)),this.setAttribute("uv",new nn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.widthSegments,e.heightSegments)}}var yu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eu=`#ifdef USE_ALPHAHASH
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
#endif`,Tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Au=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ru=`#ifdef USE_AOMAP
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
#endif`,Cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pu=`#ifdef USE_BATCHING
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
#endif`,Uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Du=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fu=`#ifdef USE_IRIDESCENCE
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
#endif`,Nu=`#ifdef USE_BUMPMAP
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
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xu=`#define PI 3.141592653589793
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
} // validated`,Yu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ju=`vec3 transformedNormal = objectNormal;
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
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",$u=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ef=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hf=`#ifdef USE_GRADIENTMAP
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
}`,uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pf=`uniform bool receiveShadow;
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
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mf=`PhysicalMaterial material;
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
#endif`,Sf=`struct PhysicalMaterial {
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
}`,yf=`
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
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Af=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Df=`#if defined( USE_POINTS_UV )
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
#endif`,Lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,If=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bf=`#ifdef USE_MORPHTARGETS
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
#endif`,kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xf=`#ifdef USE_NORMALMAP
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
#endif`,Yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,id=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,od=`float getShadowMask() {
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
}`,ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cd=`#ifdef USE_SKINNING
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
#endif`,hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ud=`#ifdef USE_SKINNING
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
#endif`,fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,md=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gd=`#ifdef USE_TRANSMISSION
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
#endif`,_d=`#ifdef USE_TRANSMISSION
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
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ed=`uniform sampler2D t2D;
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
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`#include <common>
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
}`,Cd=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pd=`#define DISTANCE
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
}`,Ud=`#define DISTANCE
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
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`uniform float scale;
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
}`,Fd=`uniform vec3 diffuse;
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
}`,Nd=`#include <common>
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
}`,Od=`uniform vec3 diffuse;
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
}`,Bd=`#define LAMBERT
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
}`,kd=`#define LAMBERT
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
}`,zd=`#define MATCAP
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
}`,Gd=`#define MATCAP
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
}`,Hd=`#define NORMAL
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
}`,Vd=`#define NORMAL
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
}`,Wd=`#define PHONG
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
}`,Xd=`#define PHONG
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
}`,Yd=`#define STANDARD
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
}`,jd=`#define STANDARD
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
}`,qd=`#define TOON
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
}`,Kd=`#define TOON
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
}`,Zd=`uniform float size;
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
}`,Jd=`uniform vec3 diffuse;
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
}`,Qd=`#include <common>
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
}`,$d=`uniform vec3 color;
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
}`,ep=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,tp=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:yu,alphahash_pars_fragment:Eu,alphamap_fragment:Tu,alphamap_pars_fragment:bu,alphatest_fragment:Au,alphatest_pars_fragment:wu,aomap_fragment:Ru,aomap_pars_fragment:Cu,batching_pars_vertex:Pu,batching_vertex:Uu,begin_vertex:Du,beginnormal_vertex:Lu,bsdfs:Iu,iridescence_fragment:Fu,bumpmap_pars_fragment:Nu,clipping_planes_fragment:Ou,clipping_planes_pars_fragment:Bu,clipping_planes_pars_vertex:ku,clipping_planes_vertex:zu,color_fragment:Gu,color_pars_fragment:Hu,color_pars_vertex:Vu,color_vertex:Wu,common:Xu,cube_uv_reflection_fragment:Yu,defaultnormal_vertex:ju,displacementmap_pars_vertex:qu,displacementmap_vertex:Ku,emissivemap_fragment:Zu,emissivemap_pars_fragment:Ju,colorspace_fragment:Qu,colorspace_pars_fragment:$u,envmap_fragment:ef,envmap_common_pars_fragment:tf,envmap_pars_fragment:nf,envmap_pars_vertex:rf,envmap_physical_pars_fragment:mf,envmap_vertex:af,fog_vertex:sf,fog_pars_vertex:of,fog_fragment:lf,fog_pars_fragment:cf,gradientmap_pars_fragment:hf,lightmap_pars_fragment:uf,lights_lambert_fragment:ff,lights_lambert_pars_fragment:df,lights_pars_begin:pf,lights_toon_fragment:gf,lights_toon_pars_fragment:_f,lights_phong_fragment:vf,lights_phong_pars_fragment:xf,lights_physical_fragment:Mf,lights_physical_pars_fragment:Sf,lights_fragment_begin:yf,lights_fragment_maps:Ef,lights_fragment_end:Tf,logdepthbuf_fragment:bf,logdepthbuf_pars_fragment:Af,logdepthbuf_pars_vertex:wf,logdepthbuf_vertex:Rf,map_fragment:Cf,map_pars_fragment:Pf,map_particle_fragment:Uf,map_particle_pars_fragment:Df,metalnessmap_fragment:Lf,metalnessmap_pars_fragment:If,morphinstance_vertex:Ff,morphcolor_vertex:Nf,morphnormal_vertex:Of,morphtarget_pars_vertex:Bf,morphtarget_vertex:kf,normal_fragment_begin:zf,normal_fragment_maps:Gf,normal_pars_fragment:Hf,normal_pars_vertex:Vf,normal_vertex:Wf,normalmap_pars_fragment:Xf,clearcoat_normal_fragment_begin:Yf,clearcoat_normal_fragment_maps:jf,clearcoat_pars_fragment:qf,iridescence_pars_fragment:Kf,opaque_fragment:Zf,packing:Jf,premultiplied_alpha_fragment:Qf,project_vertex:$f,dithering_fragment:ed,dithering_pars_fragment:td,roughnessmap_fragment:nd,roughnessmap_pars_fragment:id,shadowmap_pars_fragment:rd,shadowmap_pars_vertex:ad,shadowmap_vertex:sd,shadowmask_pars_fragment:od,skinbase_vertex:ld,skinning_pars_vertex:cd,skinning_vertex:hd,skinnormal_vertex:ud,specularmap_fragment:fd,specularmap_pars_fragment:dd,tonemapping_fragment:pd,tonemapping_pars_fragment:md,transmission_fragment:gd,transmission_pars_fragment:_d,uv_pars_fragment:vd,uv_pars_vertex:xd,uv_vertex:Md,worldpos_vertex:Sd,background_vert:yd,background_frag:Ed,backgroundCube_vert:Td,backgroundCube_frag:bd,cube_vert:Ad,cube_frag:wd,depth_vert:Rd,depth_frag:Cd,distanceRGBA_vert:Pd,distanceRGBA_frag:Ud,equirect_vert:Dd,equirect_frag:Ld,linedashed_vert:Id,linedashed_frag:Fd,meshbasic_vert:Nd,meshbasic_frag:Od,meshlambert_vert:Bd,meshlambert_frag:kd,meshmatcap_vert:zd,meshmatcap_frag:Gd,meshnormal_vert:Hd,meshnormal_frag:Vd,meshphong_vert:Wd,meshphong_frag:Xd,meshphysical_vert:Yd,meshphysical_frag:jd,meshtoon_vert:qd,meshtoon_frag:Kd,points_vert:Zd,points_frag:Jd,shadow_vert:Qd,shadow_frag:$d,sprite_vert:ep,sprite_frag:tp},Ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},on={basic:{uniforms:Ct([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ct([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ct([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ct([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ct([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ct([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ct([Ce.points,Ce.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ct([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ct([Ce.common,Ce.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ct([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ct([Ce.sprite,Ce.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Ct([Ce.common,Ce.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Ct([Ce.lights,Ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};on.physical={uniforms:Ct([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Gr={r:0,b:0,g:0},Wn=new cn,np=new lt;function ip(a,e,t,r,n,i,s){const o=new qe(0);let l=i===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M}function v(y){let M=!1;const S=g(y);S===null?m(o,l):S&&S.isColor&&(m(S,1),M=!0);const P=a.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(a.autoClear||M)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function p(y,M){const S=g(M);S&&(S.isCubeTexture||S.mapping===oa)?(h===void 0&&(h=new Ht(new pr(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Ni(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Wn.copy(M.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(np.makeRotationFromEuler(Wn)),h.material.toneMapped=$e.getTransfer(S.colorSpace)!==ot,(u!==S||f!==S.version||d!==a.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=a.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ht(new ii(2,2),new Fn({name:"BackgroundMaterial",uniforms:Ni(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=$e.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=a.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,M){y.getRGB(Gr,dc(a)),r.buffers.color.setClear(Gr.r,Gr.g,Gr.b,M,s)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),l=M,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:v,addToRenderList:p}}function rp(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},n=f(null);let i=n,s=!1;function o(x,D,C,I,N){let G=!1;const B=u(I,C,D);i!==B&&(i=B,c(i.object)),G=d(x,I,C,N),G&&g(x,I,C,N),N!==null&&e.update(N,a.ELEMENT_ARRAY_BUFFER),(G||s)&&(s=!1,S(x,D,C,I),N!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return a.createVertexArray()}function c(x){return a.bindVertexArray(x)}function h(x){return a.deleteVertexArray(x)}function u(x,D,C){const I=C.wireframe===!0;let N=r[x.id];N===void 0&&(N={},r[x.id]=N);let G=N[D.id];G===void 0&&(G={},N[D.id]=G);let B=G[I];return B===void 0&&(B=f(l()),G[I]=B),B}function f(x){const D=[],C=[],I=[];for(let N=0;N<t;N++)D[N]=0,C[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:C,attributeDivisors:I,object:x,attributes:{},index:null}}function d(x,D,C,I){const N=i.attributes,G=D.attributes;let B=0;const Q=C.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const j=N[Y];let L=G[Y];if(L===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(L=x.instanceColor)),j===void 0||j.attribute!==L||L&&j.data!==L.data)return!0;B++}return i.attributesNum!==B||i.index!==I}function g(x,D,C,I){const N={},G=D.attributes;let B=0;const Q=C.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let j=G[Y];j===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(j=x.instanceColor));const L={};L.attribute=j,j&&j.data&&(L.data=j.data),N[Y]=L,B++}i.attributes=N,i.attributesNum=B,i.index=I}function v(){const x=i.newAttributes;for(let D=0,C=x.length;D<C;D++)x[D]=0}function p(x){m(x,0)}function m(x,D){const C=i.newAttributes,I=i.enabledAttributes,N=i.attributeDivisors;C[x]=1,I[x]===0&&(a.enableVertexAttribArray(x),I[x]=1),N[x]!==D&&(a.vertexAttribDivisor(x,D),N[x]=D)}function y(){const x=i.newAttributes,D=i.enabledAttributes;for(let C=0,I=D.length;C<I;C++)D[C]!==x[C]&&(a.disableVertexAttribArray(C),D[C]=0)}function M(x,D,C,I,N,G,B){B===!0?a.vertexAttribIPointer(x,D,C,N,G):a.vertexAttribPointer(x,D,C,I,N,G)}function S(x,D,C,I){v();const N=I.attributes,G=C.getAttributes(),B=D.defaultAttributeValues;for(const Q in G){const Y=G[Q];if(Y.location>=0){let J=N[Q];if(J===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(J=x.instanceColor)),J!==void 0){const j=J.normalized,L=J.itemSize,V=e.get(J);if(V===void 0)continue;const ne=V.buffer,F=V.type,O=V.bytesPerElement,te=F===a.INT||F===a.UNSIGNED_INT||J.gpuType===Ws;if(J.isInterleavedBufferAttribute){const X=J.data,re=X.stride,de=J.offset;if(X.isInstancedInterleavedBuffer){for(let Me=0;Me<Y.locationSize;Me++)m(Y.location+Me,X.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Me=0;Me<Y.locationSize;Me++)p(Y.location+Me);a.bindBuffer(a.ARRAY_BUFFER,ne);for(let Me=0;Me<Y.locationSize;Me++)M(Y.location+Me,L/Y.locationSize,F,j,re*O,(de+L/Y.locationSize*Me)*O,te)}else{if(J.isInstancedBufferAttribute){for(let X=0;X<Y.locationSize;X++)m(Y.location+X,J.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let X=0;X<Y.locationSize;X++)p(Y.location+X);a.bindBuffer(a.ARRAY_BUFFER,ne);for(let X=0;X<Y.locationSize;X++)M(Y.location+X,L/Y.locationSize,F,j,L*O,L/Y.locationSize*X*O,te)}}else if(B!==void 0){const j=B[Q];if(j!==void 0)switch(j.length){case 2:a.vertexAttrib2fv(Y.location,j);break;case 3:a.vertexAttrib3fv(Y.location,j);break;case 4:a.vertexAttrib4fv(Y.location,j);break;default:a.vertexAttrib1fv(Y.location,j)}}}}y()}function P(){U();for(const x in r){const D=r[x];for(const C in D){const I=D[C];for(const N in I)h(I[N].object),delete I[N];delete D[C]}delete r[x]}}function w(x){if(r[x.id]===void 0)return;const D=r[x.id];for(const C in D){const I=D[C];for(const N in I)h(I[N].object),delete I[N];delete D[C]}delete r[x.id]}function T(x){for(const D in r){const C=r[D];if(C[x.id]===void 0)continue;const I=C[x.id];for(const N in I)h(I[N].object),delete I[N];delete C[x.id]}}function U(){E(),s=!0,i!==n&&(i=n,c(i.object))}function E(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:U,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function ap(a,e,t){let r;function n(c){r=c}function i(c,h){a.drawArrays(r,c,h),t.update(h,r,1)}function s(c,h,u){u!==0&&(a.drawArraysInstanced(r,c,h,u),t.update(h,r,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,r,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)s(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(r,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<f.length;v++)t.update(g,r,f[v])}}this.setMode=n,this.render=i,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sp(a,e,t,r){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){return!(w!==en&&r.convert(w)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const T=w===fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Sn&&r.convert(w)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==vn&&!T)}function l(w){if(w==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),d=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_TEXTURE_SIZE),v=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),y=a.getParameter(a.MAX_VARYING_VECTORS),M=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,P=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:S,maxSamples:P}}function op(a){const e=this;let t=null,r=0,n=!1,i=!1;const s=new Un,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||r!==0||n;return n=f,r=u.length,d},this.beginShadows=function(){i=!0,h(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=a.get(u);if(!n||g===null||g.length===0||i&&!p)i?h(null):c();else{const y=i?0:r,M=y*4;let S=m.clippingState||null;l.value=S,S=h(g,f,M,d);for(let P=0;P!==M;++P)S[P]=t[P];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=d+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,S=d;M!==v;++M,S+=4)s.copy(u[M]).applyMatrix4(y,o),s.normal.toArray(p,S),p[S+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function lp(a){let e=new WeakMap;function t(s,o){return o===os?s.mapping=Di:o===ls&&(s.mapping=Li),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===os||o===ls)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new vu(l.height);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}class cp extends mc{constructor(e=-1,t=1,r=1,n=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,s=r+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,s=i+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(i,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wi=4,Ko=[.125,.215,.35,.446,.526,.582],Kn=20,Wa=new cp,Zo=new qe;let Xa=null,Ya=0,ja=0,qa=!1;const jn=(1+Math.sqrt(5))/2,yi=1/jn,Jo=[new K(-jn,yi,0),new K(jn,yi,0),new K(-yi,0,jn),new K(yi,0,jn),new K(0,jn,-yi),new K(0,jn,yi),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Qo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){Xa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=el(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,Ya,ja),this._renderer.xr.enabled=qa,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:fr,format:en,colorSpace:Nn,depthBuffer:!1},n=$o(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$o(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hp(i)),this._blurMaterial=up(i,e,t)}return n}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,r,n){const o=new zt(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Zo),h.toneMapping=In,h.autoClear=!1;const d=new ha({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new Ht(new pr,d);let v=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,v=!0):(d.color.copy(Zo),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const M=this._cubeSize;Hr(n,y*M,m>2?M:0,M,M),h.setRenderTarget(n),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Di||e.mapping===Li;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=el());const i=n?this._cubemapMaterial:this._equirectMaterial,s=new Ht(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,Wa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let i=1;i<n;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Jo[(n-i-1)%Jo.length];this._blur(e,i-1,i,s,o)}t.autoClear=r}_blur(e,t,r,n,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,n,"latitudinal",i),this._halfBlur(s,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ht(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Kn-1),v=i/g,p=isFinite(i)?1+Math.floor(h*v):Kn;p>Kn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Kn}`);const m=[];let y=0;for(let T=0;T<Kn;++T){const U=T/v,E=Math.exp(-U*U/2);m.push(E),T===0?y+=E:T<p&&(y+=2*E)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-r;const S=this._sizeLods[n],P=3*S*(n>M-wi?n-M+wi:0),w=4*(this._cubeSize-S);Hr(t,P,w,3*S,2*S),l.setRenderTarget(t),l.render(u,Wa)}}function hp(a){const e=[],t=[],r=[];let n=a;const i=a-wi+1+Ko.length;for(let s=0;s<i;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>a-wi?l=Ko[s-a+wi-1]:s===0&&(l=0),r.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,p=2,m=1,y=new Float32Array(v*g*d),M=new Float32Array(p*g*d),S=new Float32Array(m*g*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,U=w>2?0:-1,E=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];y.set(E,v*g*w),M.set(f,p*g*w);const x=[w,w,w,w,w,w];S.set(x,m*g*w)}const P=new hn;P.setAttribute("position",new tn(y,v)),P.setAttribute("uv",new tn(M,p)),P.setAttribute("faceIndex",new tn(S,m)),e.push(P),n>wi&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function $o(a,e,t){const r=new ei(a,e,t);return r.texture.mapping=oa,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hr(a,e,t,r,n){a.viewport.set(e,t,r,n),a.scissor.set(e,t,r,n)}function up(a,e,t){const r=new Float32Array(Kn),n=new K(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:to(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function el(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function tl(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function to(){return`

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
	`}function fp(a){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===os||l===ls,h=l===Di||l===Li;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Qo(a)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&n(d)?(t===null&&(t=new Qo(a)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",i),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function dp(a){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&sr("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function pp(a,e,t,r){const n={},i=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}f.removeEventListener("dispose",s),delete n[f.id];const d=i.get(f);d&&(e.remove(d),i.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return n[f.id]===!0||(f.addEventListener("dispose",s),n[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],a.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],a.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const y=d.array;v=d.version;for(let M=0,S=y.length;M<S;M+=3){const P=y[M+0],w=y[M+1],T=y[M+2];f.push(P,w,w,T,T,P)}}else if(g!==void 0){const y=g.array;v=g.version;for(let M=0,S=y.length/3-1;M<S;M+=3){const P=M+0,w=M+1,T=M+2;f.push(P,w,w,T,T,P)}}else return;const p=new(oc(f)?fc:uc)(f,1);p.version=v;const m=i.get(u);m&&e.remove(m),i.set(u,p)}function h(u){const f=i.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return i.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function mp(a,e,t){let r;function n(f){r=f}let i,s;function o(f){i=f.type,s=f.bytesPerElement}function l(f,d){a.drawElements(r,d,i,f*s),t.update(d,r,1)}function c(f,d,g){g!==0&&(a.drawElementsInstanced(r,d,i,f*s,g),t.update(d,r,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,i,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,r,1)}function u(f,d,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/s,d[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(r,d,0,i,f,0,v,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y];for(let y=0;y<v.length;y++)t.update(m,r,v[y])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function gp(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(i/3);break;case a.LINES:t.lines+=o*(i/2);break;case a.LINE_STRIP:t.lines+=o*(i-1);break;case a.LINE_LOOP:t.lines+=o*i;break;case a.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function _p(a,e,t){const r=new WeakMap,n=new it;function i(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=r.get(o);if(f===void 0||f.count!==u){let x=function(){U.dispose(),r.delete(o),o.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),p===!0&&(S=3);let P=o.attributes.position.count*S,w=1;P>e.maxTextureSize&&(w=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*w*4*u),U=new cc(T,P,w,u);U.type=vn,U.needsUpdate=!0;const E=S*4;for(let D=0;D<u;D++){const C=m[D],I=y[D],N=M[D],G=P*w*4*D;for(let B=0;B<C.count;B++){const Q=B*E;g===!0&&(n.fromBufferAttribute(C,B),T[G+Q+0]=n.x,T[G+Q+1]=n.y,T[G+Q+2]=n.z,T[G+Q+3]=0),v===!0&&(n.fromBufferAttribute(I,B),T[G+Q+4]=n.x,T[G+Q+5]=n.y,T[G+Q+6]=n.z,T[G+Q+7]=0),p===!0&&(n.fromBufferAttribute(N,B),T[G+Q+8]=n.x,T[G+Q+9]=n.y,T[G+Q+10]=n.z,T[G+Q+11]=N.itemSize===4?n.w:1)}}f={count:u,texture:U,size:new Ge(P,w)},r.set(o,f),o.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(a,"morphTargetBaseInfluence",v),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}return{update:i}}function vp(a,e,t,r){let n=new WeakMap;function i(l){const c=r.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:s}}class vc extends Tt{constructor(e,t,r,n,i,s,o,l,c,h=Pi){if(h!==Pi&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&h===Pi&&(r=$n),r===void 0&&h===Fi&&(r=Ii),super(null,n,i,s,o,l,h,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xc=new Tt,nl=new vc(1,1),Mc=new cc,Sc=new iu,yc=new gc,il=[],rl=[],al=new Float32Array(16),sl=new Float32Array(9),ol=new Float32Array(4);function ki(a,e,t){const r=a[0];if(r<=0||r>0)return a;const n=e*t;let i=il[n];if(i===void 0&&(i=new Float32Array(n),il[n]=i),e!==0){r.toArray(i,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(i,o)}return i}function pt(a,e){if(a.length!==e.length)return!1;for(let t=0,r=a.length;t<r;t++)if(a[t]!==e[t])return!1;return!0}function mt(a,e){for(let t=0,r=e.length;t<r;t++)a[t]=e[t]}function ua(a,e){let t=rl[e];t===void 0&&(t=new Int32Array(e),rl[e]=t);for(let r=0;r!==e;++r)t[r]=a.allocateTextureUnit();return t}function xp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Mp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;a.uniform2fv(this.addr,e),mt(t,e)}}function Sp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;a.uniform3fv(this.addr,e),mt(t,e)}}function yp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;a.uniform4fv(this.addr,e),mt(t,e)}}function Ep(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(pt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,r))return;ol.set(r),a.uniformMatrix2fv(this.addr,!1,ol),mt(t,r)}}function Tp(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(pt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,r))return;sl.set(r),a.uniformMatrix3fv(this.addr,!1,sl),mt(t,r)}}function bp(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(pt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,r))return;al.set(r),a.uniformMatrix4fv(this.addr,!1,al),mt(t,r)}}function Ap(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function wp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;a.uniform2iv(this.addr,e),mt(t,e)}}function Rp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;a.uniform3iv(this.addr,e),mt(t,e)}}function Cp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;a.uniform4iv(this.addr,e),mt(t,e)}}function Pp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Up(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;a.uniform2uiv(this.addr,e),mt(t,e)}}function Dp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;a.uniform3uiv(this.addr,e),mt(t,e)}}function Lp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;a.uniform4uiv(this.addr,e),mt(t,e)}}function Ip(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n);let i;this.type===a.SAMPLER_2D_SHADOW?(nl.compareFunction=ac,i=nl):i=xc,t.setTexture2D(e||i,n)}function Fp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||Sc,n)}function Np(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||yc,n)}function Op(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||Mc,n)}function Bp(a){switch(a){case 5126:return xp;case 35664:return Mp;case 35665:return Sp;case 35666:return yp;case 35674:return Ep;case 35675:return Tp;case 35676:return bp;case 5124:case 35670:return Ap;case 35667:case 35671:return wp;case 35668:case 35672:return Rp;case 35669:case 35673:return Cp;case 5125:return Pp;case 36294:return Up;case 36295:return Dp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Op}}function kp(a,e){a.uniform1fv(this.addr,e)}function zp(a,e){const t=ki(e,this.size,2);a.uniform2fv(this.addr,t)}function Gp(a,e){const t=ki(e,this.size,3);a.uniform3fv(this.addr,t)}function Hp(a,e){const t=ki(e,this.size,4);a.uniform4fv(this.addr,t)}function Vp(a,e){const t=ki(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Wp(a,e){const t=ki(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Xp(a,e){const t=ki(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Yp(a,e){a.uniform1iv(this.addr,e)}function jp(a,e){a.uniform2iv(this.addr,e)}function qp(a,e){a.uniform3iv(this.addr,e)}function Kp(a,e){a.uniform4iv(this.addr,e)}function Zp(a,e){a.uniform1uiv(this.addr,e)}function Jp(a,e){a.uniform2uiv(this.addr,e)}function Qp(a,e){a.uniform3uiv(this.addr,e)}function $p(a,e){a.uniform4uiv(this.addr,e)}function em(a,e,t){const r=this.cache,n=e.length,i=ua(t,n);pt(r,i)||(a.uniform1iv(this.addr,i),mt(r,i));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||xc,i[s])}function tm(a,e,t){const r=this.cache,n=e.length,i=ua(t,n);pt(r,i)||(a.uniform1iv(this.addr,i),mt(r,i));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Sc,i[s])}function nm(a,e,t){const r=this.cache,n=e.length,i=ua(t,n);pt(r,i)||(a.uniform1iv(this.addr,i),mt(r,i));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||yc,i[s])}function im(a,e,t){const r=this.cache,n=e.length,i=ua(t,n);pt(r,i)||(a.uniform1iv(this.addr,i),mt(r,i));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Mc,i[s])}function rm(a){switch(a){case 5126:return kp;case 35664:return zp;case 35665:return Gp;case 35666:return Hp;case 35674:return Vp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return Yp;case 35667:case 35671:return jp;case 35668:case 35672:return qp;case 35669:case 35673:return Kp;case 5125:return Zp;case 36294:return Jp;case 36295:return Qp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}class am{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Bp(t.type)}}class sm{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rm(t.type)}}class om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(e,t[o.id],r)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function ll(a,e){a.seq.push(e),a.map[e.id]=e}function lm(a,e,t){const r=a.name,n=r.length;for(Ka.lastIndex=0;;){const i=Ka.exec(r),s=Ka.lastIndex;let o=i[1];const l=i[2]==="]",c=i[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){ll(t,c===void 0?new am(o,a,e):new sm(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new om(o),ll(t,u)),t=u}}}class $r{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const i=e.getActiveUniform(t,n),s=e.getUniformLocation(t,i.name);lm(i,s,this)}}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,s=t.length;i!==s;++i){const o=t[i],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.id in t&&r.push(s)}return r}}function cl(a,e,t){const r=a.createShader(e);return a.shaderSource(r,t),a.compileShader(r),r}const cm=37297;let hm=0;function um(a,e){const t=a.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let s=n;s<i;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}function fm(a){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(a);let r;switch(e===t?r="":e===aa&&t===ra?r="LinearDisplayP3ToLinearSRGB":e===ra&&t===aa&&(r="LinearSRGBToLinearDisplayP3"),a){case Nn:case la:return[r,"LinearTransferOETF"];case sn:case Zs:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[r,"LinearTransferOETF"]}}function hl(a,e,t){const r=a.getShaderParameter(e,a.COMPILE_STATUS),n=a.getShaderInfoLog(e).trim();if(r&&n==="")return"";const i=/ERROR: 0:(\d+)/.exec(n);if(i){const s=parseInt(i[1]);return t.toUpperCase()+`

`+n+`

`+um(a.getShaderSource(e),s)}else return n}function dm(a,e){const t=fm(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pm(a,e){let t;switch(e){case _h:t="Linear";break;case vh:t="Reinhard";break;case xh:t="Cineon";break;case Mh:t="ACESFilmic";break;case yh:t="AgX";break;case Eh:t="Neutral";break;case Sh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vr=new K;function mm(){$e.getLuminanceCoefficients(Vr);const a=Vr.x.toFixed(4),e=Vr.y.toFixed(4),t=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gm(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function _m(a){const e=[];for(const t in a){const r=a[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function vm(a,e){const t={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const i=a.getActiveAttrib(e,n),s=i.name;let o=1;i.type===a.FLOAT_MAT2&&(o=2),i.type===a.FLOAT_MAT3&&(o=3),i.type===a.FLOAT_MAT4&&(o=4),t[s]={type:i.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function ir(a){return a!==""}function ul(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fl(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Os(a){return a.replace(xm,Sm)}const Mm=new Map;function Sm(a,e){let t=Ye[e];if(t===void 0){const r=Mm.get(e);if(r!==void 0)t=Ye[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Os(t)}const ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(a){return a.replace(ym,Em)}function Em(a,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function pl(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tm(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Wl?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Vc?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function bm(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Di:case Li:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Am(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function wm(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Xl:e="ENVMAP_BLENDING_MULTIPLY";break;case mh:e="ENVMAP_BLENDING_MIX";break;case gh:e="ENVMAP_BLENDING_ADD";break}return e}function Rm(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function Cm(a,e,t,r){const n=a.getContext(),i=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Tm(t),c=bm(t),h=Am(t),u=wm(t),f=Rm(t),d=gm(t),g=_m(i),v=n.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ir).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ir).join(`
`),m.length>0&&(m+=`
`)):(p=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),m=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Ye.tonemapping_pars_fragment:"",t.toneMapping!==In?pm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,dm("linearToOutputTexel",t.outputColorSpace),mm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),s=Os(s),s=ul(s,t),s=fl(s,t),o=Os(o),o=ul(o,t),o=fl(o,t),s=dl(s),o=dl(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=y+p+s,S=y+m+o,P=cl(n,n.VERTEX_SHADER,M),w=cl(n,n.FRAGMENT_SHADER,S);n.attachShader(v,P),n.attachShader(v,w),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function T(D){if(a.debug.checkShaderErrors){const C=n.getProgramInfoLog(v).trim(),I=n.getShaderInfoLog(P).trim(),N=n.getShaderInfoLog(w).trim();let G=!0,B=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(G=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,v,P,w);else{const Q=hl(n,P,"vertex"),Y=hl(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+C+`
`+Q+`
`+Y)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(I===""||N==="")&&(B=!1);B&&(D.diagnostics={runnable:G,programLog:C,vertexShader:{log:I,prefix:p},fragmentShader:{log:N,prefix:m}})}n.deleteShader(P),n.deleteShader(w),U=new $r(n,v),E=vm(n,v)}let U;this.getUniforms=function(){return U===void 0&&T(this),U};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=n.getProgramParameter(v,cm)),x},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=w,this}let Pm=0;class Um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Dm(e),t.set(e,r)),r}}class Dm{constructor(e){this.id=Pm++,this.code=e,this.usedTimes=0}}function Lm(a,e,t,r,n,i,s){const o=new $s,l=new Um,c=new Set,h=[],u=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,x,D,C,I){const N=C.fog,G=I.geometry,B=E.isMeshStandardMaterial?C.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||B),Y=Q&&Q.mapping===oa?Q.image.height:null,J=g[E.type];E.precision!==null&&(d=n.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const j=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,L=j!==void 0?j.length:0;let V=0;G.morphAttributes.position!==void 0&&(V=1),G.morphAttributes.normal!==void 0&&(V=2),G.morphAttributes.color!==void 0&&(V=3);let ne,F,O,te;if(J){const Ue=on[J];ne=Ue.vertexShader,F=Ue.fragmentShader}else ne=E.vertexShader,F=E.fragmentShader,l.update(E),O=l.getVertexShaderID(E),te=l.getFragmentShaderID(E);const X=a.getRenderTarget(),re=I.isInstancedMesh===!0,de=I.isBatchedMesh===!0,Me=!!E.map,me=!!E.matcap,A=!!Q,Be=!!E.aoMap,we=!!E.lightMap,Ae=!!E.bumpMap,ge=!!E.normalMap,Oe=!!E.displacementMap,le=!!E.emissiveMap,ve=!!E.metalnessMap,R=!!E.roughnessMap,_=E.anisotropy>0,z=E.clearcoat>0,W=E.dispersion>0,$=E.iridescence>0,Z=E.sheen>0,be=E.transmission>0,oe=_&&!!E.anisotropyMap,ue=z&&!!E.clearcoatMap,Te=z&&!!E.clearcoatNormalMap,ce=z&&!!E.clearcoatRoughnessMap,xe=$&&!!E.iridescenceMap,Fe=$&&!!E.iridescenceThicknessMap,ye=Z&&!!E.sheenColorMap,pe=Z&&!!E.sheenRoughnessMap,_e=!!E.specularMap,De=!!E.specularColorMap,He=!!E.specularIntensityMap,k=be&&!!E.transmissionMap,fe=be&&!!E.thicknessMap,ee=!!E.gradientMap,se=!!E.alphaMap,Ee=E.alphaTest>0,Re=!!E.alphaHash,Le=!!E.extensions;let Xe=In;E.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Xe=a.toneMapping);const We={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:ne,fragmentShader:F,defines:E.defines,customVertexShaderID:O,customFragmentShaderID:te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:de,batchingColor:de&&I._colorsTexture!==null,instancing:re,instancingColor:re&&I.instanceColor!==null,instancingMorph:re&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:X===null?a.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Nn,alphaToCoverage:!!E.alphaToCoverage,map:Me,matcap:me,envMap:A,envMapMode:A&&Q.mapping,envMapCubeUVHeight:Y,aoMap:Be,lightMap:we,bumpMap:Ae,normalMap:ge,displacementMap:f&&Oe,emissiveMap:le,normalMapObjectSpace:ge&&E.normalMapType===Ah,normalMapTangentSpace:ge&&E.normalMapType===rc,metalnessMap:ve,roughnessMap:R,anisotropy:_,anisotropyMap:oe,clearcoat:z,clearcoatMap:ue,clearcoatNormalMap:Te,clearcoatRoughnessMap:ce,dispersion:W,iridescence:$,iridescenceMap:xe,iridescenceThicknessMap:Fe,sheen:Z,sheenColorMap:ye,sheenRoughnessMap:pe,specularMap:_e,specularColorMap:De,specularIntensityMap:He,transmission:be,transmissionMap:k,thicknessMap:fe,gradientMap:ee,opaque:E.transparent===!1&&E.blending===Ci&&E.alphaToCoverage===!1,alphaMap:se,alphaTest:Ee,alphaHash:Re,combine:E.combine,mapUv:Me&&v(E.map.channel),aoMapUv:Be&&v(E.aoMap.channel),lightMapUv:we&&v(E.lightMap.channel),bumpMapUv:Ae&&v(E.bumpMap.channel),normalMapUv:ge&&v(E.normalMap.channel),displacementMapUv:Oe&&v(E.displacementMap.channel),emissiveMapUv:le&&v(E.emissiveMap.channel),metalnessMapUv:ve&&v(E.metalnessMap.channel),roughnessMapUv:R&&v(E.roughnessMap.channel),anisotropyMapUv:oe&&v(E.anisotropyMap.channel),clearcoatMapUv:ue&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Te&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:pe&&v(E.sheenRoughnessMap.channel),specularMapUv:_e&&v(E.specularMap.channel),specularColorMapUv:De&&v(E.specularColorMap.channel),specularIntensityMapUv:He&&v(E.specularIntensityMap.channel),transmissionMapUv:k&&v(E.transmissionMap.channel),thicknessMapUv:fe&&v(E.thicknessMap.channel),alphaMapUv:se&&v(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ge||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!G.attributes.uv&&(Me||se),fog:!!N,useFog:E.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:I.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:V,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Me&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===$t,flipSided:E.side===Pt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Le&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&E.extensions.multiDraw===!0||de)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function m(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)x.push(D),x.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(y(x,E),M(x,E),x.push(a.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function y(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function M(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.doubleSided&&o.enable(10),x.flipSided&&o.enable(11),x.useDepthPacking&&o.enable(12),x.dithering&&o.enable(13),x.transmission&&o.enable(14),x.sheen&&o.enable(15),x.opaque&&o.enable(16),x.pointsUvs&&o.enable(17),x.decodeVideoTexture&&o.enable(18),x.alphaToCoverage&&o.enable(19),E.push(o.mask)}function S(E){const x=g[E.type];let D;if(x){const C=on[x];D=pc.clone(C.uniforms)}else D=E.uniforms;return D}function P(E,x){let D;for(let C=0,I=h.length;C<I;C++){const N=h[C];if(N.cacheKey===x){D=N,++D.usedTimes;break}}return D===void 0&&(D=new Cm(a,x,E,i),h.push(D)),D}function w(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function T(E){l.remove(E)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:P,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:U}}function Im(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function r(s){a.delete(s)}function n(s,o,l){a.get(s)[o]=l}function i(){a=new WeakMap}return{has:e,get:t,remove:r,update:n,dispose:i}}function Fm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function ml(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function gl(){const a=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function s(u,f,d,g,v,p){let m=a[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},a[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=v,m.group=p),e++,m}function o(u,f,d,g,v,p){const m=s(u,f,d,g,v,p);d.transmission>0?r.push(m):d.transparent===!0?n.push(m):t.push(m)}function l(u,f,d,g,v,p){const m=s(u,f,d,g,v,p);d.transmission>0?r.unshift(m):d.transparent===!0?n.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||Fm),r.length>1&&r.sort(f||ml),n.length>1&&n.sort(f||ml)}function h(){for(let u=e,f=a.length;u<f;u++){const d=a[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:o,unshift:l,finish:h,sort:c}}function Nm(){let a=new WeakMap;function e(r,n){const i=a.get(r);let s;return i===void 0?(s=new gl,a.set(r,[s])):n>=i.length?(s=new gl,i.push(s)):s=i[n],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Om(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new qe};break;case"SpotLight":t={position:new K,direction:new K,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new K,halfWidth:new K,halfHeight:new K};break}return a[e.id]=t,t}}}function Bm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let km=0;function zm(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Gm(a){const e=new Om,t=Bm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new K);const n=new K,i=new lt,s=new lt;function o(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,y=0,M=0,S=0,P=0,w=0,T=0;c.sort(zm);for(let E=0,x=c.length;E<x;E++){const D=c[E],C=D.color,I=D.intensity,N=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=C.r*I,u+=C.g*I,f+=C.b*I;else if(D.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(D.sh.coefficients[B],I);T++}else if(D.isDirectionalLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,Y=t.get(D);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,r.directionalShadow[d]=Y,r.directionalShadowMap[d]=G,r.directionalShadowMatrix[d]=D.shadow.matrix,y++}r.directional[d]=B,d++}else if(D.isSpotLight){const B=e.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(C).multiplyScalar(I),B.distance=N,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,r.spot[v]=B;const Q=D.shadow;if(D.map&&(r.spotLightMap[P]=D.map,P++,Q.updateMatrices(D),D.castShadow&&w++),r.spotLightMatrix[v]=Q.matrix,D.castShadow){const Y=t.get(D);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,r.spotShadow[v]=Y,r.spotShadowMap[v]=G,S++}v++}else if(D.isRectAreaLight){const B=e.get(D);B.color.copy(C).multiplyScalar(I),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),r.rectArea[p]=B,p++}else if(D.isPointLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){const Q=D.shadow,Y=t.get(D);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,r.pointShadow[g]=Y,r.pointShadowMap[g]=G,r.pointShadowMatrix[g]=D.shadow.matrix,M++}r.point[g]=B,g++}else if(D.isHemisphereLight){const B=e.get(D);B.skyColor.copy(D.color).multiplyScalar(I),B.groundColor.copy(D.groundColor).multiplyScalar(I),r.hemi[m]=B,m++}}p>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=u,r.ambient[2]=f;const U=r.hash;(U.directionalLength!==d||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==p||U.hemiLength!==m||U.numDirectionalShadows!==y||U.numPointShadows!==M||U.numSpotShadows!==S||U.numSpotMaps!==P||U.numLightProbes!==T)&&(r.directional.length=d,r.spot.length=v,r.rectArea.length=p,r.point.length=g,r.hemi.length=m,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=S+P-w,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=T,U.directionalLength=d,U.pointLength=g,U.spotLength=v,U.rectAreaLength=p,U.hemiLength=m,U.numDirectionalShadows=y,U.numPointShadows=M,U.numSpotShadows=S,U.numSpotMaps=P,U.numLightProbes=T,r.version=km++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const M=c[m];if(M.isDirectionalLight){const S=r.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(p),u++}else if(M.isSpotLight){const S=r.spot[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(p),d++}else if(M.isRectAreaLight){const S=r.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),s.identity(),i.copy(M.matrixWorld),i.premultiply(p),s.extractRotation(i),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),g++}else if(M.isPointLight){const S=r.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const S=r.hemi[v];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:r}}function _l(a){const e=new Gm(a),t=[],r=[];function n(h){c.camera=h,t.length=0,r.length=0}function i(h){t.push(h)}function s(h){r.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:i,pushShadow:s}}function Hm(a){let e=new WeakMap;function t(n,i=0){const s=e.get(n);let o;return s===void 0?(o=new _l(a),e.set(n,[o])):i>=s.length?(o=new _l(a),s.push(o)):o=s[i],o}function r(){e=new WeakMap}return{get:t,dispose:r}}class Ec extends dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tc extends dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
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
}`;function Xm(a,e,t){let r=new eo;const n=new Ge,i=new Ge,s=new it,o=new Ec({depthPacking:ic}),l=new Tc,c={},h=t.maxTextureSize,u={[Mn]:Pt,[Pt]:Mn,[$t]:$t},f=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Vm,fragmentShader:Wm}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ht(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let m=this.type;this.render=function(w,T,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const E=a.getRenderTarget(),x=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),C=a.state;C.setBlending(Ln),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const I=m!==_n&&this.type===_n,N=m===_n&&this.type!==_n;for(let G=0,B=w.length;G<B;G++){const Q=w[G],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);const J=Y.getFrameExtents();if(n.multiply(J),i.copy(Y.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(i.x=Math.floor(h/J.x),n.x=i.x*J.x,Y.mapSize.x=i.x),n.y>h&&(i.y=Math.floor(h/J.y),n.y=i.y*J.y,Y.mapSize.y=i.y)),Y.map===null||I===!0||N===!0){const L=this.type!==_n?{minFilter:Yt,magFilter:Yt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ei(n.x,n.y,L),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}a.setRenderTarget(Y.map),a.clear();const j=Y.getViewportCount();for(let L=0;L<j;L++){const V=Y.getViewport(L);s.set(i.x*V.x,i.y*V.y,i.x*V.z,i.y*V.w),C.viewport(s),Y.updateMatrices(Q,L),r=Y.getFrustum(),S(T,U,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===_n&&y(Y,U),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,a.setRenderTarget(E,x,D)};function y(w,T){const U=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ei(n.x,n.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(T,null,U,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(T,null,U,d,v,null)}function M(w,T,U,E){let x=null;const D=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)x=D;else if(x=U.isPointLight===!0?l:o,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const C=x.uuid,I=T.uuid;let N=c[C];N===void 0&&(N={},c[C]=N);let G=N[I];G===void 0&&(G=x.clone(),N[I]=G,T.addEventListener("dispose",P)),x=G}if(x.visible=T.visible,x.wireframe=T.wireframe,E===_n?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const C=a.properties.get(x);C.light=U}return x}function S(w,T,U,E,x){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===_n)&&(!w.frustumCulled||r.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const I=e.update(w),N=w.material;if(Array.isArray(N)){const G=I.groups;for(let B=0,Q=G.length;B<Q;B++){const Y=G[B],J=N[Y.materialIndex];if(J&&J.visible){const j=M(w,J,E,x);w.onBeforeShadow(a,w,T,U,I,j,Y),a.renderBufferDirect(U,null,I,j,w,Y),w.onAfterShadow(a,w,T,U,I,j,Y)}}}else if(N.visible){const G=M(w,N,E,x);w.onBeforeShadow(a,w,T,U,I,G,null),a.renderBufferDirect(U,null,I,G,w,null),w.onAfterShadow(a,w,T,U,I,G,null)}}const C=w.children;for(let I=0,N=C.length;I<N;I++)S(C[I],T,U,E,x)}function P(w){w.target.removeEventListener("dispose",P);for(const U in c){const E=c[U],x=w.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}function Ym(a){function e(){let k=!1;const fe=new it;let ee=null;const se=new it(0,0,0,0);return{setMask:function(Ee){ee!==Ee&&!k&&(a.colorMask(Ee,Ee,Ee,Ee),ee=Ee)},setLocked:function(Ee){k=Ee},setClear:function(Ee,Re,Le,Xe,We){We===!0&&(Ee*=Xe,Re*=Xe,Le*=Xe),fe.set(Ee,Re,Le,Xe),se.equals(fe)===!1&&(a.clearColor(Ee,Re,Le,Xe),se.copy(fe))},reset:function(){k=!1,ee=null,se.set(-1,0,0,0)}}}function t(){let k=!1,fe=null,ee=null,se=null;return{setTest:function(Ee){Ee?te(a.DEPTH_TEST):X(a.DEPTH_TEST)},setMask:function(Ee){fe!==Ee&&!k&&(a.depthMask(Ee),fe=Ee)},setFunc:function(Ee){if(ee!==Ee){switch(Ee){case lh:a.depthFunc(a.NEVER);break;case ch:a.depthFunc(a.ALWAYS);break;case hh:a.depthFunc(a.LESS);break;case na:a.depthFunc(a.LEQUAL);break;case uh:a.depthFunc(a.EQUAL);break;case fh:a.depthFunc(a.GEQUAL);break;case dh:a.depthFunc(a.GREATER);break;case ph:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ee=Ee}},setLocked:function(Ee){k=Ee},setClear:function(Ee){se!==Ee&&(a.clearDepth(Ee),se=Ee)},reset:function(){k=!1,fe=null,ee=null,se=null}}}function r(){let k=!1,fe=null,ee=null,se=null,Ee=null,Re=null,Le=null,Xe=null,We=null;return{setTest:function(Ue){k||(Ue?te(a.STENCIL_TEST):X(a.STENCIL_TEST))},setMask:function(Ue){fe!==Ue&&!k&&(a.stencilMask(Ue),fe=Ue)},setFunc:function(Ue,Je,rt){(ee!==Ue||se!==Je||Ee!==rt)&&(a.stencilFunc(Ue,Je,rt),ee=Ue,se=Je,Ee=rt)},setOp:function(Ue,Je,rt){(Re!==Ue||Le!==Je||Xe!==rt)&&(a.stencilOp(Ue,Je,rt),Re=Ue,Le=Je,Xe=rt)},setLocked:function(Ue){k=Ue},setClear:function(Ue){We!==Ue&&(a.clearStencil(Ue),We=Ue)},reset:function(){k=!1,fe=null,ee=null,se=null,Ee=null,Re=null,Le=null,Xe=null,We=null}}}const n=new e,i=new t,s=new r,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,g=!1,v=null,p=null,m=null,y=null,M=null,S=null,P=null,w=new qe(0,0,0),T=0,U=!1,E=null,x=null,D=null,C=null,I=null;const N=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,B=0;const Q=a.getParameter(a.VERSION);Q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Q)[1]),G=B>=1):Q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),G=B>=2);let Y=null,J={};const j=a.getParameter(a.SCISSOR_BOX),L=a.getParameter(a.VIEWPORT),V=new it().fromArray(j),ne=new it().fromArray(L);function F(k,fe,ee,se){const Ee=new Uint8Array(4),Re=a.createTexture();a.bindTexture(k,Re),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Le=0;Le<ee;Le++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(fe,0,a.RGBA,1,1,se,0,a.RGBA,a.UNSIGNED_BYTE,Ee):a.texImage2D(fe+Le,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ee);return Re}const O={};O[a.TEXTURE_2D]=F(a.TEXTURE_2D,a.TEXTURE_2D,1),O[a.TEXTURE_CUBE_MAP]=F(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[a.TEXTURE_2D_ARRAY]=F(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),O[a.TEXTURE_3D]=F(a.TEXTURE_3D,a.TEXTURE_3D,1,1),n.setClear(0,0,0,1),i.setClear(1),s.setClear(0),te(a.DEPTH_TEST),i.setFunc(na),Ae(!1),ge(yo),te(a.CULL_FACE),Be(Ln);function te(k){c[k]!==!0&&(a.enable(k),c[k]=!0)}function X(k){c[k]!==!1&&(a.disable(k),c[k]=!1)}function re(k,fe){return h[k]!==fe?(a.bindFramebuffer(k,fe),h[k]=fe,k===a.DRAW_FRAMEBUFFER&&(h[a.FRAMEBUFFER]=fe),k===a.FRAMEBUFFER&&(h[a.DRAW_FRAMEBUFFER]=fe),!0):!1}function de(k,fe){let ee=f,se=!1;if(k){ee=u.get(fe),ee===void 0&&(ee=[],u.set(fe,ee));const Ee=k.textures;if(ee.length!==Ee.length||ee[0]!==a.COLOR_ATTACHMENT0){for(let Re=0,Le=Ee.length;Re<Le;Re++)ee[Re]=a.COLOR_ATTACHMENT0+Re;ee.length=Ee.length,se=!0}}else ee[0]!==a.BACK&&(ee[0]=a.BACK,se=!0);se&&a.drawBuffers(ee)}function Me(k){return d!==k?(a.useProgram(k),d=k,!0):!1}const me={[qn]:a.FUNC_ADD,[Xc]:a.FUNC_SUBTRACT,[Yc]:a.FUNC_REVERSE_SUBTRACT};me[jc]=a.MIN,me[qc]=a.MAX;const A={[Kc]:a.ZERO,[Zc]:a.ONE,[Jc]:a.SRC_COLOR,[as]:a.SRC_ALPHA,[ih]:a.SRC_ALPHA_SATURATE,[th]:a.DST_COLOR,[$c]:a.DST_ALPHA,[Qc]:a.ONE_MINUS_SRC_COLOR,[ss]:a.ONE_MINUS_SRC_ALPHA,[nh]:a.ONE_MINUS_DST_COLOR,[eh]:a.ONE_MINUS_DST_ALPHA,[rh]:a.CONSTANT_COLOR,[ah]:a.ONE_MINUS_CONSTANT_COLOR,[sh]:a.CONSTANT_ALPHA,[oh]:a.ONE_MINUS_CONSTANT_ALPHA};function Be(k,fe,ee,se,Ee,Re,Le,Xe,We,Ue){if(k===Ln){g===!0&&(X(a.BLEND),g=!1);return}if(g===!1&&(te(a.BLEND),g=!0),k!==Wc){if(k!==v||Ue!==U){if((p!==qn||M!==qn)&&(a.blendEquation(a.FUNC_ADD),p=qn,M=qn),Ue)switch(k){case Ci:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Eo:a.blendFunc(a.ONE,a.ONE);break;case To:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case bo:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ci:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Eo:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case To:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case bo:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}m=null,y=null,S=null,P=null,w.set(0,0,0),T=0,v=k,U=Ue}return}Ee=Ee||fe,Re=Re||ee,Le=Le||se,(fe!==p||Ee!==M)&&(a.blendEquationSeparate(me[fe],me[Ee]),p=fe,M=Ee),(ee!==m||se!==y||Re!==S||Le!==P)&&(a.blendFuncSeparate(A[ee],A[se],A[Re],A[Le]),m=ee,y=se,S=Re,P=Le),(Xe.equals(w)===!1||We!==T)&&(a.blendColor(Xe.r,Xe.g,Xe.b,We),w.copy(Xe),T=We),v=k,U=!1}function we(k,fe){k.side===$t?X(a.CULL_FACE):te(a.CULL_FACE);let ee=k.side===Pt;fe&&(ee=!ee),Ae(ee),k.blending===Ci&&k.transparent===!1?Be(Ln):Be(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),i.setFunc(k.depthFunc),i.setTest(k.depthTest),i.setMask(k.depthWrite),n.setMask(k.colorWrite);const se=k.stencilWrite;s.setTest(se),se&&(s.setMask(k.stencilWriteMask),s.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),s.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),le(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?te(a.SAMPLE_ALPHA_TO_COVERAGE):X(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(k){E!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),E=k)}function ge(k){k!==Gc?(te(a.CULL_FACE),k!==x&&(k===yo?a.cullFace(a.BACK):k===Hc?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):X(a.CULL_FACE),x=k}function Oe(k){k!==D&&(G&&a.lineWidth(k),D=k)}function le(k,fe,ee){k?(te(a.POLYGON_OFFSET_FILL),(C!==fe||I!==ee)&&(a.polygonOffset(fe,ee),C=fe,I=ee)):X(a.POLYGON_OFFSET_FILL)}function ve(k){k?te(a.SCISSOR_TEST):X(a.SCISSOR_TEST)}function R(k){k===void 0&&(k=a.TEXTURE0+N-1),Y!==k&&(a.activeTexture(k),Y=k)}function _(k,fe,ee){ee===void 0&&(Y===null?ee=a.TEXTURE0+N-1:ee=Y);let se=J[ee];se===void 0&&(se={type:void 0,texture:void 0},J[ee]=se),(se.type!==k||se.texture!==fe)&&(Y!==ee&&(a.activeTexture(ee),Y=ee),a.bindTexture(k,fe||O[k]),se.type=k,se.texture=fe)}function z(){const k=J[Y];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function W(){try{a.compressedTexImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{a.compressedTexImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{a.texSubImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{a.texSubImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(){try{a.texStorage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{a.texStorage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{a.texImage2D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(){try{a.texImage3D.apply(a,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(k){V.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),V.copy(k))}function pe(k){ne.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),ne.copy(k))}function _e(k,fe){let ee=l.get(fe);ee===void 0&&(ee=new WeakMap,l.set(fe,ee));let se=ee.get(k);se===void 0&&(se=a.getUniformBlockIndex(fe,k.name),ee.set(k,se))}function De(k,fe){const se=l.get(fe).get(k);o.get(fe)!==se&&(a.uniformBlockBinding(fe,se,k.__bindingPointIndex),o.set(fe,se))}function He(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),c={},Y=null,J={},h={},u=new WeakMap,f=[],d=null,g=!1,v=null,p=null,m=null,y=null,M=null,S=null,P=null,w=new qe(0,0,0),T=0,U=!1,E=null,x=null,D=null,C=null,I=null,V.set(0,0,a.canvas.width,a.canvas.height),ne.set(0,0,a.canvas.width,a.canvas.height),n.reset(),i.reset(),s.reset()}return{buffers:{color:n,depth:i,stencil:s},enable:te,disable:X,bindFramebuffer:re,drawBuffers:de,useProgram:Me,setBlending:Be,setMaterial:we,setFlipSided:Ae,setCullFace:ge,setLineWidth:Oe,setPolygonOffset:le,setScissorTest:ve,activeTexture:R,bindTexture:_,unbindTexture:z,compressedTexImage2D:W,compressedTexImage3D:$,texImage2D:xe,texImage3D:Fe,updateUBOMapping:_e,uniformBlockBinding:De,texStorage2D:Te,texStorage3D:ce,texSubImage2D:Z,texSubImage3D:be,compressedTexSubImage2D:oe,compressedTexSubImage3D:ue,scissor:ye,viewport:pe,reset:He}}function vl(a,e,t,r){const n=jm(r);switch(t){case Zl:return a*e;case Ql:return a*e;case $l:return a*e*2;case ec:return a*e/n.components*n.byteLength;case js:return a*e/n.components*n.byteLength;case tc:return a*e*2/n.components*n.byteLength;case qs:return a*e*2/n.components*n.byteLength;case Jl:return a*e*3/n.components*n.byteLength;case en:return a*e*4/n.components*n.byteLength;case Ks:return a*e*4/n.components*n.byteLength;case qr:case Kr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Zr:case Jr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case fs:case ps:return Math.max(a,16)*Math.max(e,8)/4;case us:case ds:return Math.max(a,8)*Math.max(e,8)/2;case ms:case gs:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case _s:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case vs:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case xs:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Ms:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Ss:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case ys:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Es:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Ts:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case bs:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case As:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case ws:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Rs:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Cs:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Ps:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Us:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Qr:case Ds:case Ls:return Math.ceil(a/4)*Math.ceil(e/4)*16;case nc:case Is:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Fs:case Ns:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jm(a){switch(a){case Sn:case jl:return{byteLength:1,components:1};case cr:case ql:case fr:return{byteLength:2,components:1};case Xs:case Ys:return{byteLength:2,components:4};case $n:case Ws:case vn:return{byteLength:4,components:1};case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}function qm(a,e,t,r,n,i,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,_){return d?new OffscreenCanvas(R,_):ur("canvas")}function v(R,_,z){let W=1;const $=ve(R);if(($.width>z||$.height>z)&&(W=z/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(W*$.width),be=Math.floor(W*$.height);u===void 0&&(u=g(Z,be));const oe=_?g(Z,be):u;return oe.width=Z,oe.height=be,oe.getContext("2d").drawImage(R,0,0,Z,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Z+"x"+be+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Yt&&R.minFilter!==Gt}function m(R){a.generateMipmap(R)}function y(R,_,z,W,$=!1){if(R!==null){if(a[R]!==void 0)return a[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=_;if(_===a.RED&&(z===a.FLOAT&&(Z=a.R32F),z===a.HALF_FLOAT&&(Z=a.R16F),z===a.UNSIGNED_BYTE&&(Z=a.R8)),_===a.RED_INTEGER&&(z===a.UNSIGNED_BYTE&&(Z=a.R8UI),z===a.UNSIGNED_SHORT&&(Z=a.R16UI),z===a.UNSIGNED_INT&&(Z=a.R32UI),z===a.BYTE&&(Z=a.R8I),z===a.SHORT&&(Z=a.R16I),z===a.INT&&(Z=a.R32I)),_===a.RG&&(z===a.FLOAT&&(Z=a.RG32F),z===a.HALF_FLOAT&&(Z=a.RG16F),z===a.UNSIGNED_BYTE&&(Z=a.RG8)),_===a.RG_INTEGER&&(z===a.UNSIGNED_BYTE&&(Z=a.RG8UI),z===a.UNSIGNED_SHORT&&(Z=a.RG16UI),z===a.UNSIGNED_INT&&(Z=a.RG32UI),z===a.BYTE&&(Z=a.RG8I),z===a.SHORT&&(Z=a.RG16I),z===a.INT&&(Z=a.RG32I)),_===a.RGB&&z===a.UNSIGNED_INT_5_9_9_9_REV&&(Z=a.RGB9_E5),_===a.RGBA){const be=$?ia:$e.getTransfer(W);z===a.FLOAT&&(Z=a.RGBA32F),z===a.HALF_FLOAT&&(Z=a.RGBA16F),z===a.UNSIGNED_BYTE&&(Z=be===ot?a.SRGB8_ALPHA8:a.RGBA8),z===a.UNSIGNED_SHORT_4_4_4_4&&(Z=a.RGBA4),z===a.UNSIGNED_SHORT_5_5_5_1&&(Z=a.RGB5_A1)}return(Z===a.R16F||Z===a.R32F||Z===a.RG16F||Z===a.RG32F||Z===a.RGBA16F||Z===a.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(R,_){let z;return R?_===null||_===$n||_===Ii?z=a.DEPTH24_STENCIL8:_===vn?z=a.DEPTH32F_STENCIL8:_===cr&&(z=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===$n||_===Ii?z=a.DEPTH_COMPONENT24:_===vn?z=a.DEPTH_COMPONENT32F:_===cr&&(z=a.DEPTH_COMPONENT16),z}function S(R,_){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==Gt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function P(R){const _=R.target;_.removeEventListener("dispose",P),T(_),_.isVideoTexture&&h.delete(_)}function w(R){const _=R.target;_.removeEventListener("dispose",w),E(_)}function T(R){const _=r.get(R);if(_.__webglInit===void 0)return;const z=R.source,W=f.get(z);if(W){const $=W[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&U(R),Object.keys(W).length===0&&f.delete(z)}r.remove(R)}function U(R){const _=r.get(R);a.deleteTexture(_.__webglTexture);const z=R.source,W=f.get(z);delete W[_.__cacheKey],s.memory.textures--}function E(R){const _=r.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let $=0;$<_.__webglFramebuffer[W].length;$++)a.deleteFramebuffer(_.__webglFramebuffer[W][$]);else a.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)a.deleteFramebuffer(_.__webglFramebuffer[W]);else a.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&a.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&a.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&a.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=R.textures;for(let W=0,$=z.length;W<$;W++){const Z=r.get(z[W]);Z.__webglTexture&&(a.deleteTexture(Z.__webglTexture),s.memory.textures--),r.remove(z[W])}r.remove(R)}let x=0;function D(){x=0}function C(){const R=x;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),x+=1,R}function I(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function N(R,_){const z=r.get(R);if(R.isVideoTexture&&Oe(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const W=R.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(z,R,_);return}}t.bindTexture(a.TEXTURE_2D,z.__webglTexture,a.TEXTURE0+_)}function G(R,_){const z=r.get(R);if(R.version>0&&z.__version!==R.version){ne(z,R,_);return}t.bindTexture(a.TEXTURE_2D_ARRAY,z.__webglTexture,a.TEXTURE0+_)}function B(R,_){const z=r.get(R);if(R.version>0&&z.__version!==R.version){ne(z,R,_);return}t.bindTexture(a.TEXTURE_3D,z.__webglTexture,a.TEXTURE0+_)}function Q(R,_){const z=r.get(R);if(R.version>0&&z.__version!==R.version){F(z,R,_);return}t.bindTexture(a.TEXTURE_CUBE_MAP,z.__webglTexture,a.TEXTURE0+_)}const Y={[cs]:a.REPEAT,[Zn]:a.CLAMP_TO_EDGE,[hs]:a.MIRRORED_REPEAT},J={[Yt]:a.NEAREST,[Th]:a.NEAREST_MIPMAP_NEAREST,[yr]:a.NEAREST_MIPMAP_LINEAR,[Gt]:a.LINEAR,[ba]:a.LINEAR_MIPMAP_NEAREST,[Jn]:a.LINEAR_MIPMAP_LINEAR},j={[wh]:a.NEVER,[Lh]:a.ALWAYS,[Rh]:a.LESS,[ac]:a.LEQUAL,[Ch]:a.EQUAL,[Dh]:a.GEQUAL,[Ph]:a.GREATER,[Uh]:a.NOTEQUAL};function L(R,_){if(_.type===vn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Gt||_.magFilter===ba||_.magFilter===yr||_.magFilter===Jn||_.minFilter===Gt||_.minFilter===ba||_.minFilter===yr||_.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(R,a.TEXTURE_WRAP_S,Y[_.wrapS]),a.texParameteri(R,a.TEXTURE_WRAP_T,Y[_.wrapT]),(R===a.TEXTURE_3D||R===a.TEXTURE_2D_ARRAY)&&a.texParameteri(R,a.TEXTURE_WRAP_R,Y[_.wrapR]),a.texParameteri(R,a.TEXTURE_MAG_FILTER,J[_.magFilter]),a.texParameteri(R,a.TEXTURE_MIN_FILTER,J[_.minFilter]),_.compareFunction&&(a.texParameteri(R,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(R,a.TEXTURE_COMPARE_FUNC,j[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Yt||_.minFilter!==yr&&_.minFilter!==Jn||_.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");a.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function V(R,_){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",P));const W=_.source;let $=f.get(W);$===void 0&&($={},f.set(W,$));const Z=I(_);if(Z!==R.__cacheKey){$[Z]===void 0&&($[Z]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,z=!0),$[Z].usedTimes++;const be=$[R.__cacheKey];be!==void 0&&($[R.__cacheKey].usedTimes--,be.usedTimes===0&&U(_)),R.__cacheKey=Z,R.__webglTexture=$[Z].texture}return z}function ne(R,_,z){let W=a.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=a.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=a.TEXTURE_3D);const $=V(R,_),Z=_.source;t.bindTexture(W,R.__webglTexture,a.TEXTURE0+z);const be=r.get(Z);if(Z.version!==be.__version||$===!0){t.activeTexture(a.TEXTURE0+z);const oe=$e.getPrimaries($e.workingColorSpace),ue=_.colorSpace===Dn?null:$e.getPrimaries(_.colorSpace),Te=_.colorSpace===Dn||oe===ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ce=v(_.image,!1,n.maxTextureSize);ce=le(_,ce);const xe=i.convert(_.format,_.colorSpace),Fe=i.convert(_.type);let ye=y(_.internalFormat,xe,Fe,_.colorSpace,_.isVideoTexture);L(W,_);let pe;const _e=_.mipmaps,De=_.isVideoTexture!==!0,He=be.__version===void 0||$===!0,k=Z.dataReady,fe=S(_,ce);if(_.isDepthTexture)ye=M(_.format===Fi,_.type),He&&(De?t.texStorage2D(a.TEXTURE_2D,1,ye,ce.width,ce.height):t.texImage2D(a.TEXTURE_2D,0,ye,ce.width,ce.height,0,xe,Fe,null));else if(_.isDataTexture)if(_e.length>0){De&&He&&t.texStorage2D(a.TEXTURE_2D,fe,ye,_e[0].width,_e[0].height);for(let ee=0,se=_e.length;ee<se;ee++)pe=_e[ee],De?k&&t.texSubImage2D(a.TEXTURE_2D,ee,0,0,pe.width,pe.height,xe,Fe,pe.data):t.texImage2D(a.TEXTURE_2D,ee,ye,pe.width,pe.height,0,xe,Fe,pe.data);_.generateMipmaps=!1}else De?(He&&t.texStorage2D(a.TEXTURE_2D,fe,ye,ce.width,ce.height),k&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ce.width,ce.height,xe,Fe,ce.data)):t.texImage2D(a.TEXTURE_2D,0,ye,ce.width,ce.height,0,xe,Fe,ce.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){De&&He&&t.texStorage3D(a.TEXTURE_2D_ARRAY,fe,ye,_e[0].width,_e[0].height,ce.depth);for(let ee=0,se=_e.length;ee<se;ee++)if(pe=_e[ee],_.format!==en)if(xe!==null)if(De){if(k)if(_.layerUpdates.size>0){const Ee=vl(pe.width,pe.height,_.format,_.type);for(const Re of _.layerUpdates){const Le=pe.data.subarray(Re*Ee/pe.data.BYTES_PER_ELEMENT,(Re+1)*Ee/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ee,0,0,Re,pe.width,pe.height,1,xe,Le,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,ce.depth,xe,pe.data,0,0)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ee,ye,pe.width,pe.height,ce.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?k&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,ce.depth,xe,Fe,pe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ee,ye,pe.width,pe.height,ce.depth,0,xe,Fe,pe.data)}else{De&&He&&t.texStorage2D(a.TEXTURE_2D,fe,ye,_e[0].width,_e[0].height);for(let ee=0,se=_e.length;ee<se;ee++)pe=_e[ee],_.format!==en?xe!==null?De?k&&t.compressedTexSubImage2D(a.TEXTURE_2D,ee,0,0,pe.width,pe.height,xe,pe.data):t.compressedTexImage2D(a.TEXTURE_2D,ee,ye,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?k&&t.texSubImage2D(a.TEXTURE_2D,ee,0,0,pe.width,pe.height,xe,Fe,pe.data):t.texImage2D(a.TEXTURE_2D,ee,ye,pe.width,pe.height,0,xe,Fe,pe.data)}else if(_.isDataArrayTexture)if(De){if(He&&t.texStorage3D(a.TEXTURE_2D_ARRAY,fe,ye,ce.width,ce.height,ce.depth),k)if(_.layerUpdates.size>0){const ee=vl(ce.width,ce.height,_.format,_.type);for(const se of _.layerUpdates){const Ee=ce.data.subarray(se*ee/ce.data.BYTES_PER_ELEMENT,(se+1)*ee/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,se,ce.width,ce.height,1,xe,Fe,Ee)}_.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,xe,Fe,ce.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,ye,ce.width,ce.height,ce.depth,0,xe,Fe,ce.data);else if(_.isData3DTexture)De?(He&&t.texStorage3D(a.TEXTURE_3D,fe,ye,ce.width,ce.height,ce.depth),k&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,xe,Fe,ce.data)):t.texImage3D(a.TEXTURE_3D,0,ye,ce.width,ce.height,ce.depth,0,xe,Fe,ce.data);else if(_.isFramebufferTexture){if(He)if(De)t.texStorage2D(a.TEXTURE_2D,fe,ye,ce.width,ce.height);else{let ee=ce.width,se=ce.height;for(let Ee=0;Ee<fe;Ee++)t.texImage2D(a.TEXTURE_2D,Ee,ye,ee,se,0,xe,Fe,null),ee>>=1,se>>=1}}else if(_e.length>0){if(De&&He){const ee=ve(_e[0]);t.texStorage2D(a.TEXTURE_2D,fe,ye,ee.width,ee.height)}for(let ee=0,se=_e.length;ee<se;ee++)pe=_e[ee],De?k&&t.texSubImage2D(a.TEXTURE_2D,ee,0,0,xe,Fe,pe):t.texImage2D(a.TEXTURE_2D,ee,ye,xe,Fe,pe);_.generateMipmaps=!1}else if(De){if(He){const ee=ve(ce);t.texStorage2D(a.TEXTURE_2D,fe,ye,ee.width,ee.height)}k&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,xe,Fe,ce)}else t.texImage2D(a.TEXTURE_2D,0,ye,xe,Fe,ce);p(_)&&m(W),be.__version=Z.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function F(R,_,z){if(_.image.length!==6)return;const W=V(R,_),$=_.source;t.bindTexture(a.TEXTURE_CUBE_MAP,R.__webglTexture,a.TEXTURE0+z);const Z=r.get($);if($.version!==Z.__version||W===!0){t.activeTexture(a.TEXTURE0+z);const be=$e.getPrimaries($e.workingColorSpace),oe=_.colorSpace===Dn?null:$e.getPrimaries(_.colorSpace),ue=_.colorSpace===Dn||be===oe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Te=_.isCompressedTexture||_.image[0].isCompressedTexture,ce=_.image[0]&&_.image[0].isDataTexture,xe=[];for(let se=0;se<6;se++)!Te&&!ce?xe[se]=v(_.image[se],!0,n.maxCubemapSize):xe[se]=ce?_.image[se].image:_.image[se],xe[se]=le(_,xe[se]);const Fe=xe[0],ye=i.convert(_.format,_.colorSpace),pe=i.convert(_.type),_e=y(_.internalFormat,ye,pe,_.colorSpace),De=_.isVideoTexture!==!0,He=Z.__version===void 0||W===!0,k=$.dataReady;let fe=S(_,Fe);L(a.TEXTURE_CUBE_MAP,_);let ee;if(Te){De&&He&&t.texStorage2D(a.TEXTURE_CUBE_MAP,fe,_e,Fe.width,Fe.height);for(let se=0;se<6;se++){ee=xe[se].mipmaps;for(let Ee=0;Ee<ee.length;Ee++){const Re=ee[Ee];_.format!==en?ye!==null?De?k&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee,0,0,Re.width,Re.height,ye,Re.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee,_e,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee,0,0,Re.width,Re.height,ye,pe,Re.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee,_e,Re.width,Re.height,0,ye,pe,Re.data)}}}else{if(ee=_.mipmaps,De&&He){ee.length>0&&fe++;const se=ve(xe[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,fe,_e,se.width,se.height)}for(let se=0;se<6;se++)if(ce){De?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,xe[se].width,xe[se].height,ye,pe,xe[se].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,_e,xe[se].width,xe[se].height,0,ye,pe,xe[se].data);for(let Ee=0;Ee<ee.length;Ee++){const Le=ee[Ee].image[se].image;De?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee+1,0,0,Le.width,Le.height,ye,pe,Le.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee+1,_e,Le.width,Le.height,0,ye,pe,Le.data)}}else{De?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye,pe,xe[se]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,_e,ye,pe,xe[se]);for(let Ee=0;Ee<ee.length;Ee++){const Re=ee[Ee];De?k&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee+1,0,0,ye,pe,Re.image[se]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ee+1,_e,ye,pe,Re.image[se])}}}p(_)&&m(a.TEXTURE_CUBE_MAP),Z.__version=$.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function O(R,_,z,W,$,Z){const be=i.convert(z.format,z.colorSpace),oe=i.convert(z.type),ue=y(z.internalFormat,be,oe,z.colorSpace);if(!r.get(_).__hasExternalTextures){const ce=Math.max(1,_.width>>Z),xe=Math.max(1,_.height>>Z);$===a.TEXTURE_3D||$===a.TEXTURE_2D_ARRAY?t.texImage3D($,Z,ue,ce,xe,_.depth,0,be,oe,null):t.texImage2D($,Z,ue,ce,xe,0,be,oe,null)}t.bindFramebuffer(a.FRAMEBUFFER,R),ge(_)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,W,$,r.get(z).__webglTexture,0,Ae(_)):($===a.TEXTURE_2D||$>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,W,$,r.get(z).__webglTexture,Z),t.bindFramebuffer(a.FRAMEBUFFER,null)}function te(R,_,z){if(a.bindRenderbuffer(a.RENDERBUFFER,R),_.depthBuffer){const W=_.depthTexture,$=W&&W.isDepthTexture?W.type:null,Z=M(_.stencilBuffer,$),be=_.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,oe=Ae(_);ge(_)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,oe,Z,_.width,_.height):z?a.renderbufferStorageMultisample(a.RENDERBUFFER,oe,Z,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,Z,_.width,_.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,R)}else{const W=_.textures;for(let $=0;$<W.length;$++){const Z=W[$],be=i.convert(Z.format,Z.colorSpace),oe=i.convert(Z.type),ue=y(Z.internalFormat,be,oe,Z.colorSpace),Te=Ae(_);z&&ge(_)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Te,ue,_.width,_.height):ge(_)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Te,ue,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,ue,_.width,_.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function X(R,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),N(_.depthTexture,0);const W=r.get(_.depthTexture).__webglTexture,$=Ae(_);if(_.depthTexture.format===Pi)ge(_)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,W,0,$):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,W,0);else if(_.depthTexture.format===Fi)ge(_)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,W,0,$):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function re(R){const _=r.get(R),z=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const W=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=W}if(R.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");X(_.__webglFramebuffer,R)}else if(z){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=a.createRenderbuffer(),te(_.__webglDepthbuffer[W],R,!1);else{const $=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer[W];a.bindRenderbuffer(a.RENDERBUFFER,Z),a.framebufferRenderbuffer(a.FRAMEBUFFER,$,a.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=a.createRenderbuffer(),te(_.__webglDepthbuffer,R,!1);else{const W=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,$),a.framebufferRenderbuffer(a.FRAMEBUFFER,W,a.RENDERBUFFER,$)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function de(R,_,z){const W=r.get(R);_!==void 0&&O(W.__webglFramebuffer,R,R.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),z!==void 0&&re(R)}function Me(R){const _=R.texture,z=r.get(R),W=r.get(_);R.addEventListener("dispose",w);const $=R.textures,Z=R.isWebGLCubeRenderTarget===!0,be=$.length>1;if(be||(W.__webglTexture===void 0&&(W.__webglTexture=a.createTexture()),W.__version=_.version,s.memory.textures++),Z){z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[oe]=[];for(let ue=0;ue<_.mipmaps.length;ue++)z.__webglFramebuffer[oe][ue]=a.createFramebuffer()}else z.__webglFramebuffer[oe]=a.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)z.__webglFramebuffer[oe]=a.createFramebuffer()}else z.__webglFramebuffer=a.createFramebuffer();if(be)for(let oe=0,ue=$.length;oe<ue;oe++){const Te=r.get($[oe]);Te.__webglTexture===void 0&&(Te.__webglTexture=a.createTexture(),s.memory.textures++)}if(R.samples>0&&ge(R)===!1){z.__webglMultisampledFramebuffer=a.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let oe=0;oe<$.length;oe++){const ue=$[oe];z.__webglColorRenderbuffer[oe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,z.__webglColorRenderbuffer[oe]);const Te=i.convert(ue.format,ue.colorSpace),ce=i.convert(ue.type),xe=y(ue.internalFormat,Te,ce,ue.colorSpace,R.isXRRenderTarget===!0),Fe=Ae(R);a.renderbufferStorageMultisample(a.RENDERBUFFER,Fe,xe,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+oe,a.RENDERBUFFER,z.__webglColorRenderbuffer[oe])}a.bindRenderbuffer(a.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=a.createRenderbuffer(),te(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Z){t.bindTexture(a.TEXTURE_CUBE_MAP,W.__webglTexture),L(a.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)O(z.__webglFramebuffer[oe][ue],R,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else O(z.__webglFramebuffer[oe],R,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(_)&&m(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let oe=0,ue=$.length;oe<ue;oe++){const Te=$[oe],ce=r.get(Te);t.bindTexture(a.TEXTURE_2D,ce.__webglTexture),L(a.TEXTURE_2D,Te),O(z.__webglFramebuffer,R,Te,a.COLOR_ATTACHMENT0+oe,a.TEXTURE_2D,0),p(Te)&&m(a.TEXTURE_2D)}t.unbindTexture()}else{let oe=a.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(oe,W.__webglTexture),L(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let ue=0;ue<_.mipmaps.length;ue++)O(z.__webglFramebuffer[ue],R,_,a.COLOR_ATTACHMENT0,oe,ue);else O(z.__webglFramebuffer,R,_,a.COLOR_ATTACHMENT0,oe,0);p(_)&&m(oe),t.unbindTexture()}R.depthBuffer&&re(R)}function me(R){const _=R.textures;for(let z=0,W=_.length;z<W;z++){const $=_[z];if(p($)){const Z=R.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,be=r.get($).__webglTexture;t.bindTexture(Z,be),m(Z),t.unbindTexture()}}}const A=[],Be=[];function we(R){if(R.samples>0){if(ge(R)===!1){const _=R.textures,z=R.width,W=R.height;let $=a.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,be=r.get(R),oe=_.length>1;if(oe)for(let ue=0;ue<_.length;ue++)t.bindFramebuffer(a.FRAMEBUFFER,be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=a.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=a.STENCIL_BUFFER_BIT)),oe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,be.__webglColorRenderbuffer[ue]);const Te=r.get(_[ue]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Te,0)}a.blitFramebuffer(0,0,z,W,0,0,z,W,$,a.NEAREST),l===!0&&(A.length=0,Be.length=0,A.push(a.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(A.push(Z),Be.push(Z),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Be)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,A))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),oe)for(let ue=0;ue<_.length;ue++){t.bindFramebuffer(a.FRAMEBUFFER,be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,be.__webglColorRenderbuffer[ue]);const Te=r.get(_[ue]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.TEXTURE_2D,Te,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const _=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[_])}}}function Ae(R){return Math.min(n.maxSamples,R.samples)}function ge(R){const _=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Oe(R){const _=s.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function le(R,_){const z=R.colorSpace,W=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Nn&&z!==Dn&&($e.getTransfer(z)===ot?(W!==en||$!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function ve(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=D,this.setTexture2D=N,this.setTexture2DArray=G,this.setTexture3D=B,this.setTextureCube=Q,this.rebindTextures=de,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=O,this.useMultisampledRTT=ge}function Km(a,e){function t(r,n=Dn){let i;const s=$e.getTransfer(n);if(r===Sn)return a.UNSIGNED_BYTE;if(r===Xs)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Ys)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Kl)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===jl)return a.BYTE;if(r===ql)return a.SHORT;if(r===cr)return a.UNSIGNED_SHORT;if(r===Ws)return a.INT;if(r===$n)return a.UNSIGNED_INT;if(r===vn)return a.FLOAT;if(r===fr)return a.HALF_FLOAT;if(r===Zl)return a.ALPHA;if(r===Jl)return a.RGB;if(r===en)return a.RGBA;if(r===Ql)return a.LUMINANCE;if(r===$l)return a.LUMINANCE_ALPHA;if(r===Pi)return a.DEPTH_COMPONENT;if(r===Fi)return a.DEPTH_STENCIL;if(r===ec)return a.RED;if(r===js)return a.RED_INTEGER;if(r===tc)return a.RG;if(r===qs)return a.RG_INTEGER;if(r===Ks)return a.RGBA_INTEGER;if(r===qr||r===Kr||r===Zr||r===Jr)if(s===ot)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===qr)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Jr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===qr)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kr)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zr)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Jr)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===us||r===fs||r===ds||r===ps)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===us)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fs)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ds)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ps)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ms||r===gs||r===_s)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===ms||r===gs)return s===ot?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===_s)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===vs||r===xs||r===Ms||r===Ss||r===ys||r===Es||r===Ts||r===bs||r===As||r===ws||r===Rs||r===Cs||r===Ps||r===Us)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===vs)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xs)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ms)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ss)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ys)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Es)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ts)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bs)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===As)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ws)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rs)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cs)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ps)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Us)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qr||r===Ds||r===Ls)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===Qr)return s===ot?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ds)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ls)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nc||r===Is||r===Fs||r===Ns)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===Qr)return i.COMPRESSED_RED_RGTC1_EXT;if(r===Is)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fs)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ns)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ii?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:t}}class Zm extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wr extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jm={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,r),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Wr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$m=`
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

}`;class eg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const n=new Tt,i=e.properties.get(n);i.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Fn({vertexShader:Qm,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new ii(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tg extends ni{constructor(e,t){super();const r=this;let n=null,i=1,s=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=new eg,p=t.getContextAttributes();let m=null,y=null;const M=[],S=[],P=new Ge;let w=null;const T=new zt;T.layers.enable(1),T.viewport=new it;const U=new zt;U.layers.enable(2),U.viewport=new it;const E=[T,U],x=new Zm;x.layers.enable(1),x.layers.enable(2);let D=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let O=M[F];return O===void 0&&(O=new Za,M[F]=O),O.getTargetRaySpace()},this.getControllerGrip=function(F){let O=M[F];return O===void 0&&(O=new Za,M[F]=O),O.getGripSpace()},this.getHand=function(F){let O=M[F];return O===void 0&&(O=new Za,M[F]=O),O.getHandSpace()};function I(F){const O=S.indexOf(F.inputSource);if(O===-1)return;const te=M[O];te!==void 0&&(te.update(F.inputSource,F.frame,c||s),te.dispatchEvent({type:F.type,data:F.inputSource}))}function N(){n.removeEventListener("select",I),n.removeEventListener("selectstart",I),n.removeEventListener("selectend",I),n.removeEventListener("squeeze",I),n.removeEventListener("squeezestart",I),n.removeEventListener("squeezeend",I),n.removeEventListener("end",N),n.removeEventListener("inputsourceschange",G);for(let F=0;F<M.length;F++){const O=S[F];O!==null&&(S[F]=null,M[F].disconnect(O))}D=null,C=null,v.reset(),e.setRenderTarget(m),d=null,f=null,u=null,n=null,y=null,ne.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){i=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(F){if(n=F,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",I),n.addEventListener("selectstart",I),n.addEventListener("selectend",I),n.addEventListener("squeeze",I),n.addEventListener("squeezestart",I),n.addEventListener("squeezeend",I),n.addEventListener("end",N),n.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),n.renderState.layers===void 0){const O={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(n,t,O),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ei(d.framebufferWidth,d.framebufferHeight,{format:en,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let O=null,te=null,X=null;p.depth&&(X=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=p.stencil?Fi:Pi,te=p.stencil?Ii:$n);const re={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:i};u=new XRWebGLBinding(n,t),f=u.createProjectionLayer(re),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new ei(f.textureWidth,f.textureHeight,{format:en,type:Sn,depthTexture:new vc(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),ne.setContext(n),ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(F){for(let O=0;O<F.removed.length;O++){const te=F.removed[O],X=S.indexOf(te);X>=0&&(S[X]=null,M[X].disconnect(te))}for(let O=0;O<F.added.length;O++){const te=F.added[O];let X=S.indexOf(te);if(X===-1){for(let de=0;de<M.length;de++)if(de>=S.length){S.push(te),X=de;break}else if(S[de]===null){S[de]=te,X=de;break}if(X===-1)break}const re=M[X];re&&re.connect(te)}}const B=new K,Q=new K;function Y(F,O,te){B.setFromMatrixPosition(O.matrixWorld),Q.setFromMatrixPosition(te.matrixWorld);const X=B.distanceTo(Q),re=O.projectionMatrix.elements,de=te.projectionMatrix.elements,Me=re[14]/(re[10]-1),me=re[14]/(re[10]+1),A=(re[9]+1)/re[5],Be=(re[9]-1)/re[5],we=(re[8]-1)/re[0],Ae=(de[8]+1)/de[0],ge=Me*we,Oe=Me*Ae,le=X/(-we+Ae),ve=le*-we;if(O.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(ve),F.translateZ(le),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),re[10]===-1)F.projectionMatrix.copy(O.projectionMatrix),F.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const R=Me+le,_=me+le,z=ge-ve,W=Oe+(X-ve),$=A*me/_*R,Z=Be*me/_*R;F.projectionMatrix.makePerspective(z,W,$,Z,R,_),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function J(F,O){O===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(O.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(n===null)return;let O=F.near,te=F.far;v.texture!==null&&(v.depthNear>0&&(O=v.depthNear),v.depthFar>0&&(te=v.depthFar)),x.near=U.near=T.near=O,x.far=U.far=T.far=te,(D!==x.near||C!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,C=x.far);const X=F.parent,re=x.cameras;J(x,X);for(let de=0;de<re.length;de++)J(re[de],X);re.length===2?Y(x,T,U):x.projectionMatrix.copy(T.projectionMatrix),j(F,x,X)};function j(F,O,te){te===null?F.matrix.copy(O.matrixWorld):(F.matrix.copy(te.matrixWorld),F.matrix.invert(),F.matrix.multiply(O.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(O.projectionMatrix),F.projectionMatrixInverse.copy(O.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=hr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let L=null;function V(F,O){if(h=O.getViewerPose(c||s),g=O,h!==null){const te=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let X=!1;te.length!==x.cameras.length&&(x.cameras.length=0,X=!0);for(let de=0;de<te.length;de++){const Me=te[de];let me=null;if(d!==null)me=d.getViewport(Me);else{const Be=u.getViewSubImage(f,Me);me=Be.viewport,de===0&&(e.setRenderTargetTextures(y,Be.colorTexture,f.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(y))}let A=E[de];A===void 0&&(A=new zt,A.layers.enable(de),A.viewport=new it,E[de]=A),A.matrix.fromArray(Me.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(Me.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(me.x,me.y,me.width,me.height),de===0&&(x.matrix.copy(A.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),X===!0&&x.cameras.push(A)}const re=n.enabledFeatures;if(re&&re.includes("depth-sensing")){const de=u.getDepthInformation(te[0]);de&&de.isValid&&de.texture&&v.init(e,de,n.renderState)}}for(let te=0;te<M.length;te++){const X=S[te],re=M[te];X!==null&&re!==void 0&&re.update(X,O,c||s)}L&&L(F,O),O.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:O}),g=null}const ne=new _c;ne.setAnimationLoop(V),this.setAnimationLoop=function(F){L=F},this.dispose=function(){}}}const Xn=new cn,ng=new lt;function ig(a,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function r(p,m){m.color.getRGB(p.fogColor.value,dc(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,M,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),u(p,m)):m.isMeshPhongMaterial?(i(p,m),h(p,m)):m.isMeshStandardMaterial?(i(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(i(p,m),g(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),v(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Pt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Pt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),M=y.envMap,S=y.envMapRotation;M&&(p.envMap.value=M,Xn.copy(S),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),p.envMapRotation.value.setFromMatrix4(ng.makeRotationFromEuler(Xn)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function rg(a,e,t,r){let n={},i={},s=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const S=M.program;r.uniformBlockBinding(y,S)}function c(y,M){let S=n[y.id];S===void 0&&(g(y),S=h(y),n[y.id]=S,y.addEventListener("dispose",p));const P=M.program;r.updateUBOMapping(y,P);const w=e.render.frame;i[y.id]!==w&&(f(y),i[y.id]=w)}function h(y){const M=u();y.__bindingPointIndex=M;const S=a.createBuffer(),P=y.__size,w=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,S),a.bufferData(a.UNIFORM_BUFFER,P,w),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,M,S),S}function u(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=n[y.id],S=y.uniforms,P=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,M);for(let w=0,T=S.length;w<T;w++){const U=Array.isArray(S[w])?S[w]:[S[w]];for(let E=0,x=U.length;E<x;E++){const D=U[E];if(d(D,w,E,P)===!0){const C=D.__offset,I=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let G=0;G<I.length;G++){const B=I[G],Q=v(B);typeof B=="number"||typeof B=="boolean"?(D.__data[0]=B,a.bufferSubData(a.UNIFORM_BUFFER,C+N,D.__data)):B.isMatrix3?(D.__data[0]=B.elements[0],D.__data[1]=B.elements[1],D.__data[2]=B.elements[2],D.__data[3]=0,D.__data[4]=B.elements[3],D.__data[5]=B.elements[4],D.__data[6]=B.elements[5],D.__data[7]=0,D.__data[8]=B.elements[6],D.__data[9]=B.elements[7],D.__data[10]=B.elements[8],D.__data[11]=0):(B.toArray(D.__data,N),N+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,C,D.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(y,M,S,P){const w=y.value,T=M+"_"+S;if(P[T]===void 0)return typeof w=="number"||typeof w=="boolean"?P[T]=w:P[T]=w.clone(),!0;{const U=P[T];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return P[T]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(y){const M=y.uniforms;let S=0;const P=16;for(let T=0,U=M.length;T<U;T++){const E=Array.isArray(M[T])?M[T]:[M[T]];for(let x=0,D=E.length;x<D;x++){const C=E[x],I=Array.isArray(C.value)?C.value:[C.value];for(let N=0,G=I.length;N<G;N++){const B=I[N],Q=v(B),Y=S%P,J=Y%Q.boundary,j=Y+J;S+=J,j!==0&&P-j<Q.storage&&(S+=P-j),C.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=Q.storage}}}const w=S%P;return w>0&&(S+=P-w),y.__size=S,y.__cache={},this}function v(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){const M=y.target;M.removeEventListener("dispose",p);const S=s.indexOf(M.__bindingPointIndex);s.splice(S,1),a.deleteBuffer(n[M.id]),delete n[M.id],delete i[M.id]}function m(){for(const y in n)a.deleteBuffer(n[y]);s=[],n={},i={}}return{bind:l,update:c,dispose:m}}class ag{constructor(e={}){const{canvas:t=Zh(),context:r=null,depth:n=!0,stencil:i=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=r.getContextAttributes().alpha}else f=s;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=In,this.toneMappingExposure=1;const M=this;let S=!1,P=0,w=0,T=null,U=-1,E=null;const x=new it,D=new it;let C=null;const I=new qe(0);let N=0,G=t.width,B=t.height,Q=1,Y=null,J=null;const j=new it(0,0,G,B),L=new it(0,0,G,B);let V=!1;const ne=new eo;let F=!1,O=!1;const te=new lt,X=new K,re=new it,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function me(){return T===null?Q:1}let A=r;function Be(b,H){return t.getContext(b,H)}try{const b={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vs}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),A===null){const H="webgl2";if(A=Be(H,b),A===null)throw Be(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let we,Ae,ge,Oe,le,ve,R,_,z,W,$,Z,be,oe,ue,Te,ce,xe,Fe,ye,pe,_e,De,He;function k(){we=new dp(A),we.init(),_e=new Km(A,we),Ae=new sp(A,we,e,_e),ge=new Ym(A),Oe=new gp(A),le=new Im,ve=new qm(A,we,ge,le,Ae,_e,Oe),R=new lp(M),_=new fp(M),z=new Su(A),De=new rp(A,z),W=new pp(A,z,Oe,De),$=new vp(A,W,z,Oe),Fe=new _p(A,Ae,ve),Te=new op(le),Z=new Lm(M,R,_,we,Ae,De,Te),be=new ig(M,le),oe=new Nm,ue=new Hm(we),xe=new ip(M,R,_,ge,$,f,l),ce=new Xm(M,$,Ae),He=new rg(A,Oe,Ae,ge),ye=new ap(A,we,Oe),pe=new mp(A,we,Oe),Oe.programs=Z.programs,M.capabilities=Ae,M.extensions=we,M.properties=le,M.renderLists=oe,M.shadowMap=ce,M.state=ge,M.info=Oe}k();const fe=new tg(M,A);this.xr=fe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const b=we.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=we.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(G,B,!1))},this.getSize=function(b){return b.set(G,B)},this.setSize=function(b,H,ie=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,B=H,t.width=Math.floor(b*Q),t.height=Math.floor(H*Q),ie===!0&&(t.style.width=b+"px",t.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(G*Q,B*Q).floor()},this.setDrawingBufferSize=function(b,H,ie){G=b,B=H,Q=ie,t.width=Math.floor(b*ie),t.height=Math.floor(H*ie),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(x)},this.getViewport=function(b){return b.copy(j)},this.setViewport=function(b,H,ie,ae){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,H,ie,ae),ge.viewport(x.copy(j).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(L)},this.setScissor=function(b,H,ie,ae){b.isVector4?L.set(b.x,b.y,b.z,b.w):L.set(b,H,ie,ae),ge.scissor(D.copy(L).multiplyScalar(Q).round())},this.getScissorTest=function(){return V},this.setScissorTest=function(b){ge.setScissorTest(V=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){J=b},this.getClearColor=function(b){return b.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(b=!0,H=!0,ie=!0){let ae=0;if(b){let q=!1;if(T!==null){const Se=T.texture.format;q=Se===Ks||Se===qs||Se===js}if(q){const Se=T.texture.type,Pe=Se===Sn||Se===$n||Se===cr||Se===Ii||Se===Xs||Se===Ys,Ie=xe.getClearColor(),he=xe.getClearAlpha(),ze=Ie.r,Ve=Ie.g,Ne=Ie.b;Pe?(d[0]=ze,d[1]=Ve,d[2]=Ne,d[3]=he,A.clearBufferuiv(A.COLOR,0,d)):(g[0]=ze,g[1]=Ve,g[2]=Ne,g[3]=he,A.clearBufferiv(A.COLOR,0,g))}else ae|=A.COLOR_BUFFER_BIT}H&&(ae|=A.DEPTH_BUFFER_BIT),ie&&(ae|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),oe.dispose(),ue.dispose(),le.dispose(),R.dispose(),_.dispose(),$.dispose(),De.dispose(),He.dispose(),Z.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",rt),fe.removeEventListener("sessionend",ut),tt.stop()};function ee(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=Oe.autoReset,H=ce.enabled,ie=ce.autoUpdate,ae=ce.needsUpdate,q=ce.type;k(),Oe.autoReset=b,ce.enabled=H,ce.autoUpdate=ie,ce.needsUpdate=ae,ce.type=q}function Ee(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Re(b){const H=b.target;H.removeEventListener("dispose",Re),Le(H)}function Le(b){Xe(b),le.remove(b)}function Xe(b){const H=le.get(b).programs;H!==void 0&&(H.forEach(function(ie){Z.releaseProgram(ie)}),b.isShaderMaterial&&Z.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,ie,ae,q,Se){H===null&&(H=de);const Pe=q.isMesh&&q.matrixWorld.determinant()<0,Ie=mr(b,H,ie,ae,q);ge.setMaterial(ae,Pe);let he=ie.index,ze=1;if(ae.wireframe===!0){if(he=W.getWireframeAttribute(ie),he===void 0)return;ze=2}const Ve=ie.drawRange,Ne=ie.attributes.position;let Ke=Ve.start*ze,st=(Ve.start+Ve.count)*ze;Se!==null&&(Ke=Math.max(Ke,Se.start*ze),st=Math.min(st,(Se.start+Se.count)*ze)),he!==null?(Ke=Math.max(Ke,0),st=Math.min(st,he.count)):Ne!=null&&(Ke=Math.max(Ke,0),st=Math.min(st,Ne.count));const at=st-Ke;if(at<0||at===1/0)return;De.setup(q,ae,Ie,ie,he);let _t,Ze=ye;if(he!==null&&(_t=z.get(he),Ze=pe,Ze.setIndex(_t)),q.isMesh)ae.wireframe===!0?(ge.setLineWidth(ae.wireframeLinewidth*me()),Ze.setMode(A.LINES)):Ze.setMode(A.TRIANGLES);else if(q.isLine){let ke=ae.linewidth;ke===void 0&&(ke=1),ge.setLineWidth(ke*me()),q.isLineSegments?Ze.setMode(A.LINES):q.isLineLoop?Ze.setMode(A.LINE_LOOP):Ze.setMode(A.LINE_STRIP)}else q.isPoints?Ze.setMode(A.POINTS):q.isSprite&&Ze.setMode(A.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Ze.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))Ze.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const ke=q._multiDrawStarts,ct=q._multiDrawCounts,Qe=q._multiDrawCount,wt=he?z.get(he).bytesPerElement:1,un=le.get(ae).currentProgram.getUniforms();for(let ft=0;ft<Qe;ft++)un.setValue(A,"_gl_DrawID",ft),Ze.render(ke[ft]/wt,ct[ft])}else if(q.isInstancedMesh)Ze.renderInstances(Ke,at,q.count);else if(ie.isInstancedBufferGeometry){const ke=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,ct=Math.min(ie.instanceCount,ke);Ze.renderInstances(Ke,at,ct)}else Ze.render(Ke,at)};function We(b,H,ie){b.transparent===!0&&b.side===$t&&b.forceSinglePass===!1?(b.side=Pt,b.needsUpdate=!0,Ut(b,H,ie),b.side=Mn,b.needsUpdate=!0,Ut(b,H,ie),b.side=$t):Ut(b,H,ie)}this.compile=function(b,H,ie=null){ie===null&&(ie=b),p=ue.get(ie),p.init(H),y.push(p),ie.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),b!==ie&&b.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const ae=new Set;return b.traverse(function(q){const Se=q.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const Ie=Se[Pe];We(Ie,ie,q),ae.add(Ie)}else We(Se,ie,q),ae.add(Se)}),y.pop(),p=null,ae},this.compileAsync=function(b,H,ie=null){const ae=this.compile(b,H,ie);return new Promise(q=>{function Se(){if(ae.forEach(function(Pe){le.get(Pe).currentProgram.isReady()&&ae.delete(Pe)}),ae.size===0){q(b);return}setTimeout(Se,10)}we.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ue=null;function Je(b){Ue&&Ue(b)}function rt(){tt.stop()}function ut(){tt.start()}const tt=new _c;tt.setAnimationLoop(Je),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(b){Ue=b,fe.setAnimationLoop(b),b===null?tt.stop():tt.start()},fe.addEventListener("sessionstart",rt),fe.addEventListener("sessionend",ut),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(H),H=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,H,T),p=ue.get(b,y.length),p.init(H),y.push(p),te.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ne.setFromProjectionMatrix(te),O=this.localClippingEnabled,F=Te.init(this.clippingPlanes,O),v=oe.get(b,m.length),v.init(),m.push(v),fe.enabled===!0&&fe.isPresenting===!0){const Se=M.xr.getDepthSensingMesh();Se!==null&&At(Se,H,-1/0,M.sortObjects)}At(b,H,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(Y,J),Me=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,Me&&xe.addToRenderList(v,b),this.info.render.frame++,F===!0&&Te.beginShadows();const ie=p.state.shadowsArray;ce.render(ie,b,H),F===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=v.opaque,q=v.transmissive;if(p.setupLights(),H.isArrayCamera){const Se=H.cameras;if(q.length>0)for(let Pe=0,Ie=Se.length;Pe<Ie;Pe++){const he=Se[Pe];Vt(ae,q,b,he)}Me&&xe.render(b);for(let Pe=0,Ie=Se.length;Pe<Ie;Pe++){const he=Se[Pe];jt(v,b,he,he.viewport)}}else q.length>0&&Vt(ae,q,b,H),Me&&xe.render(b),jt(v,b,H);T!==null&&(ve.updateMultisampleRenderTarget(T),ve.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(M,b,H),De.resetDefaultState(),U=-1,E=null,y.pop(),y.length>0?(p=y[y.length-1],F===!0&&Te.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function At(b,H,ie,ae){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)ie=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ne.intersectsSprite(b)){ae&&re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(te);const Pe=$.update(b),Ie=b.material;Ie.visible&&v.push(b,Pe,Ie,ie,re.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ne.intersectsObject(b))){const Pe=$.update(b),Ie=b.material;if(ae&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),re.copy(b.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),re.copy(Pe.boundingSphere.center)),re.applyMatrix4(b.matrixWorld).applyMatrix4(te)),Array.isArray(Ie)){const he=Pe.groups;for(let ze=0,Ve=he.length;ze<Ve;ze++){const Ne=he[ze],Ke=Ie[Ne.materialIndex];Ke&&Ke.visible&&v.push(b,Pe,Ke,ie,re.z,Ne)}}else Ie.visible&&v.push(b,Pe,Ie,ie,re.z,null)}}const Se=b.children;for(let Pe=0,Ie=Se.length;Pe<Ie;Pe++)At(Se[Pe],H,ie,ae)}function jt(b,H,ie,ae){const q=b.opaque,Se=b.transmissive,Pe=b.transparent;p.setupLightsView(ie),F===!0&&Te.setGlobalState(M.clippingPlanes,ie),ae&&ge.viewport(x.copy(ae)),q.length>0&&Nt(q,H,ie),Se.length>0&&Nt(Se,H,ie),Pe.length>0&&Nt(Pe,H,ie),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Vt(b,H,ie,ae){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ae.id]===void 0&&(p.state.transmissionRenderTarget[ae.id]=new ei(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?fr:Sn,minFilter:Jn,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const Se=p.state.transmissionRenderTarget[ae.id],Pe=ae.viewport||x;Se.setSize(Pe.z,Pe.w);const Ie=M.getRenderTarget();M.setRenderTarget(Se),M.getClearColor(I),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear(),Me&&xe.render(ie);const he=M.toneMapping;M.toneMapping=In;const ze=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),p.setupLightsView(ae),F===!0&&Te.setGlobalState(M.clippingPlanes,ae),Nt(b,ie,ae),ve.updateMultisampleRenderTarget(Se),ve.updateRenderTargetMipmap(Se),we.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ne=0,Ke=H.length;Ne<Ke;Ne++){const st=H[Ne],at=st.object,_t=st.geometry,Ze=st.material,ke=st.group;if(Ze.side===$t&&at.layers.test(ae.layers)){const ct=Ze.side;Ze.side=Pt,Ze.needsUpdate=!0,rn(at,ie,ae,_t,Ze,ke),Ze.side=ct,Ze.needsUpdate=!0,Ve=!0}}Ve===!0&&(ve.updateMultisampleRenderTarget(Se),ve.updateRenderTargetMipmap(Se))}M.setRenderTarget(Ie),M.setClearColor(I,N),ze!==void 0&&(ae.viewport=ze),M.toneMapping=he}function Nt(b,H,ie){const ae=H.isScene===!0?H.overrideMaterial:null;for(let q=0,Se=b.length;q<Se;q++){const Pe=b[q],Ie=Pe.object,he=Pe.geometry,ze=ae===null?Pe.material:ae,Ve=Pe.group;Ie.layers.test(ie.layers)&&rn(Ie,H,ie,he,ze,Ve)}}function rn(b,H,ie,ae,q,Se){b.onBeforeRender(M,H,ie,ae,q,Se),b.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(M,H,ie,ae,b,Se),q.transparent===!0&&q.side===$t&&q.forceSinglePass===!1?(q.side=Pt,q.needsUpdate=!0,M.renderBufferDirect(ie,H,ae,q,b,Se),q.side=Mn,q.needsUpdate=!0,M.renderBufferDirect(ie,H,ae,q,b,Se),q.side=$t):M.renderBufferDirect(ie,H,ae,q,b,Se),b.onAfterRender(M,H,ie,ae,q,Se)}function Ut(b,H,ie){H.isScene!==!0&&(H=de);const ae=le.get(b),q=p.state.lights,Se=p.state.shadowsArray,Pe=q.state.version,Ie=Z.getParameters(b,q.state,Se,H,ie),he=Z.getProgramCacheKey(Ie);let ze=ae.programs;ae.environment=b.isMeshStandardMaterial?H.environment:null,ae.fog=H.fog,ae.envMap=(b.isMeshStandardMaterial?_:R).get(b.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,ze===void 0&&(b.addEventListener("dispose",Re),ze=new Map,ae.programs=ze);let Ve=ze.get(he);if(Ve!==void 0){if(ae.currentProgram===Ve&&ae.lightsStateVersion===Pe)return an(b,Ie),Ve}else Ie.uniforms=Z.getUniforms(b),b.onBeforeCompile(Ie,M),Ve=Z.acquireProgram(Ie,he),ze.set(he,Ve),ae.uniforms=Ie.uniforms;const Ne=ae.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=Te.uniform),an(b,Ie),ae.needsLights=da(b),ae.lightsStateVersion=Pe,ae.needsLights&&(Ne.ambientLightColor.value=q.state.ambient,Ne.lightProbe.value=q.state.probe,Ne.directionalLights.value=q.state.directional,Ne.directionalLightShadows.value=q.state.directionalShadow,Ne.spotLights.value=q.state.spot,Ne.spotLightShadows.value=q.state.spotShadow,Ne.rectAreaLights.value=q.state.rectArea,Ne.ltc_1.value=q.state.rectAreaLTC1,Ne.ltc_2.value=q.state.rectAreaLTC2,Ne.pointLights.value=q.state.point,Ne.pointLightShadows.value=q.state.pointShadow,Ne.hemisphereLights.value=q.state.hemi,Ne.directionalShadowMap.value=q.state.directionalShadowMap,Ne.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ne.spotShadowMap.value=q.state.spotShadowMap,Ne.spotLightMatrix.value=q.state.spotLightMatrix,Ne.spotLightMap.value=q.state.spotLightMap,Ne.pointShadowMap.value=q.state.pointShadowMap,Ne.pointShadowMatrix.value=q.state.pointShadowMatrix),ae.currentProgram=Ve,ae.uniformsList=null,Ve}function gt(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=$r.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function an(b,H){const ie=le.get(b);ie.outputColorSpace=H.outputColorSpace,ie.batching=H.batching,ie.batchingColor=H.batchingColor,ie.instancing=H.instancing,ie.instancingColor=H.instancingColor,ie.instancingMorph=H.instancingMorph,ie.skinning=H.skinning,ie.morphTargets=H.morphTargets,ie.morphNormals=H.morphNormals,ie.morphColors=H.morphColors,ie.morphTargetsCount=H.morphTargetsCount,ie.numClippingPlanes=H.numClippingPlanes,ie.numIntersection=H.numClipIntersection,ie.vertexAlphas=H.vertexAlphas,ie.vertexTangents=H.vertexTangents,ie.toneMapping=H.toneMapping}function mr(b,H,ie,ae,q){H.isScene!==!0&&(H=de),ve.resetTextureUnits();const Se=H.fog,Pe=ae.isMeshStandardMaterial?H.environment:null,Ie=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Nn,he=(ae.isMeshStandardMaterial?_:R).get(ae.envMap||Pe),ze=ae.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Ve=!!ie.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ne=!!ie.morphAttributes.position,Ke=!!ie.morphAttributes.normal,st=!!ie.morphAttributes.color;let at=In;ae.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(at=M.toneMapping);const _t=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ze=_t!==void 0?_t.length:0,ke=le.get(ae),ct=p.state.lights;if(F===!0&&(O===!0||b!==E)){const St=b===E&&ae.id===U;Te.setState(ae,b,St)}let Qe=!1;ae.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==ct.state.version||ke.outputColorSpace!==Ie||q.isBatchedMesh&&ke.batching===!1||!q.isBatchedMesh&&ke.batching===!0||q.isBatchedMesh&&ke.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&ke.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&ke.instancing===!1||!q.isInstancedMesh&&ke.instancing===!0||q.isSkinnedMesh&&ke.skinning===!1||!q.isSkinnedMesh&&ke.skinning===!0||q.isInstancedMesh&&ke.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ke.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ke.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ke.instancingMorph===!1&&q.morphTexture!==null||ke.envMap!==he||ae.fog===!0&&ke.fog!==Se||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Te.numPlanes||ke.numIntersection!==Te.numIntersection)||ke.vertexAlphas!==ze||ke.vertexTangents!==Ve||ke.morphTargets!==Ne||ke.morphNormals!==Ke||ke.morphColors!==st||ke.toneMapping!==at||ke.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,ke.__version=ae.version);let wt=ke.currentProgram;Qe===!0&&(wt=Ut(ae,H,q));let un=!1,ft=!1,On=!1;const nt=wt.getUniforms(),Wt=ke.uniforms;if(ge.useProgram(wt.program)&&(un=!0,ft=!0,On=!0),ae.id!==U&&(U=ae.id,ft=!0),un||E!==b){nt.setValue(A,"projectionMatrix",b.projectionMatrix),nt.setValue(A,"viewMatrix",b.matrixWorldInverse);const St=nt.map.cameraPosition;St!==void 0&&St.setValue(A,X.setFromMatrixPosition(b.matrixWorld)),Ae.logarithmicDepthBuffer&&nt.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&nt.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,ft=!0,On=!0)}if(q.isSkinnedMesh){nt.setOptional(A,q,"bindMatrix"),nt.setOptional(A,q,"bindMatrixInverse");const St=q.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),nt.setValue(A,"boneTexture",St.boneTexture,ve))}q.isBatchedMesh&&(nt.setOptional(A,q,"batchingTexture"),nt.setValue(A,"batchingTexture",q._matricesTexture,ve),nt.setOptional(A,q,"batchingIdTexture"),nt.setValue(A,"batchingIdTexture",q._indirectTexture,ve),nt.setOptional(A,q,"batchingColorTexture"),q._colorsTexture!==null&&nt.setValue(A,"batchingColorTexture",q._colorsTexture,ve));const Bn=ie.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Fe.update(q,ie,wt),(ft||ke.receiveShadow!==q.receiveShadow)&&(ke.receiveShadow=q.receiveShadow,nt.setValue(A,"receiveShadow",q.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Wt.envMap.value=he,Wt.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&H.environment!==null&&(Wt.envMapIntensity.value=H.environmentIntensity),ft&&(nt.setValue(A,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&Gi(Wt,On),Se&&ae.fog===!0&&be.refreshFogUniforms(Wt,Se),be.refreshMaterialUniforms(Wt,ae,Q,B,p.state.transmissionRenderTarget[b.id]),$r.upload(A,gt(ke),Wt,ve)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&($r.upload(A,gt(ke),Wt,ve),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&nt.setValue(A,"center",q.center),nt.setValue(A,"modelViewMatrix",q.modelViewMatrix),nt.setValue(A,"normalMatrix",q.normalMatrix),nt.setValue(A,"modelMatrix",q.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const St=ae.uniformsGroups;for(let Dt=0,pa=St.length;Dt<pa;Dt++){const kn=St[Dt];He.update(kn,wt),He.bind(kn,wt)}}return wt}function Gi(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function da(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,H,ie){le.get(b.texture).__webglTexture=H,le.get(b.depthTexture).__webglTexture=ie;const ae=le.get(b);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=ie===void 0,ae.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,H){const ie=le.get(b);ie.__webglFramebuffer=H,ie.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,ie=0){T=b,P=H,w=ie;let ae=!0,q=null,Se=!1,Pe=!1;if(b){const he=le.get(b);if(he.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(A.FRAMEBUFFER,null),ae=!1;else if(he.__webglFramebuffer===void 0)ve.setupRenderTarget(b);else if(he.__hasExternalTextures)ve.rebindTextures(b,le.get(b.texture).__webglTexture,le.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ne=b.depthTexture;if(he.__boundDepthTexture!==Ne){if(Ne!==null&&le.has(Ne)&&(b.width!==Ne.image.width||b.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(b)}}const ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Pe=!0);const Ve=le.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?q=Ve[H][ie]:q=Ve[H],Se=!0):b.samples>0&&ve.useMultisampledRTT(b)===!1?q=le.get(b).__webglMultisampledFramebuffer:Array.isArray(Ve)?q=Ve[ie]:q=Ve,x.copy(b.viewport),D.copy(b.scissor),C=b.scissorTest}else x.copy(j).multiplyScalar(Q).floor(),D.copy(L).multiplyScalar(Q).floor(),C=V;if(ge.bindFramebuffer(A.FRAMEBUFFER,q)&&ae&&ge.drawBuffers(b,q),ge.viewport(x),ge.scissor(D),ge.setScissorTest(C),Se){const he=le.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+H,he.__webglTexture,ie)}else if(Pe){const he=le.get(b.texture),ze=H||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,he.__webglTexture,ie||0,ze)}U=-1},this.readRenderTargetPixels=function(b,H,ie,ae,q,Se,Pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){ge.bindFramebuffer(A.FRAMEBUFFER,Ie);try{const he=b.texture,ze=he.format,Ve=he.type;if(!Ae.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-ae&&ie>=0&&ie<=b.height-q&&A.readPixels(H,ie,ae,q,_e.convert(ze),_e.convert(Ve),Se)}finally{const he=T!==null?le.get(T).__webglFramebuffer:null;ge.bindFramebuffer(A.FRAMEBUFFER,he)}}},this.readRenderTargetPixelsAsync=async function(b,H,ie,ae,q,Se,Pe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){ge.bindFramebuffer(A.FRAMEBUFFER,Ie);try{const he=b.texture,ze=he.format,Ve=he.type;if(!Ae.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=b.width-ae&&ie>=0&&ie<=b.height-q){const Ne=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ne),A.bufferData(A.PIXEL_PACK_BUFFER,Se.byteLength,A.STREAM_READ),A.readPixels(H,ie,ae,q,_e.convert(ze),_e.convert(Ve),0),A.flush();const Ke=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);await Jh(A,Ke,4);try{A.bindBuffer(A.PIXEL_PACK_BUFFER,Ne),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Se)}finally{A.deleteBuffer(Ne),A.deleteSync(Ke)}return Se}}finally{const he=T!==null?le.get(T).__webglFramebuffer:null;ge.bindFramebuffer(A.FRAMEBUFFER,he)}}},this.copyFramebufferToTexture=function(b,H=null,ie=0){b.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1]);const ae=Math.pow(2,-ie),q=Math.floor(b.image.width*ae),Se=Math.floor(b.image.height*ae),Pe=H!==null?H.x:0,Ie=H!==null?H.y:0;ve.setTexture2D(b,0),A.copyTexSubImage2D(A.TEXTURE_2D,ie,0,0,Pe,Ie,q,Se),ge.unbindTexture()},this.copyTextureToTexture=function(b,H,ie=null,ae=null,q=0){b.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,b=arguments[1],H=arguments[2],q=arguments[3]||0,ie=null);let Se,Pe,Ie,he,ze,Ve;ie!==null?(Se=ie.max.x-ie.min.x,Pe=ie.max.y-ie.min.y,Ie=ie.min.x,he=ie.min.y):(Se=b.image.width,Pe=b.image.height,Ie=0,he=0),ae!==null?(ze=ae.x,Ve=ae.y):(ze=0,Ve=0);const Ne=_e.convert(H.format),Ke=_e.convert(H.type);ve.setTexture2D(H,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,H.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,H.unpackAlignment);const st=A.getParameter(A.UNPACK_ROW_LENGTH),at=A.getParameter(A.UNPACK_IMAGE_HEIGHT),_t=A.getParameter(A.UNPACK_SKIP_PIXELS),Ze=A.getParameter(A.UNPACK_SKIP_ROWS),ke=A.getParameter(A.UNPACK_SKIP_IMAGES),ct=b.isCompressedTexture?b.mipmaps[q]:b.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,ct.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ct.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ie),A.pixelStorei(A.UNPACK_SKIP_ROWS,he),b.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,q,ze,Ve,Se,Pe,Ne,Ke,ct.data):b.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,q,ze,Ve,ct.width,ct.height,Ne,ct.data):A.texSubImage2D(A.TEXTURE_2D,q,ze,Ve,Se,Pe,Ne,Ke,ct),A.pixelStorei(A.UNPACK_ROW_LENGTH,st),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,at),A.pixelStorei(A.UNPACK_SKIP_PIXELS,_t),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ze),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ke),q===0&&H.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(b,H,ie=null,ae=null,q=0){b.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,ae=arguments[1]||null,b=arguments[2],H=arguments[3],q=arguments[4]||0);let Se,Pe,Ie,he,ze,Ve,Ne,Ke,st;const at=b.isCompressedTexture?b.mipmaps[q]:b.image;ie!==null?(Se=ie.max.x-ie.min.x,Pe=ie.max.y-ie.min.y,Ie=ie.max.z-ie.min.z,he=ie.min.x,ze=ie.min.y,Ve=ie.min.z):(Se=at.width,Pe=at.height,Ie=at.depth,he=0,ze=0,Ve=0),ae!==null?(Ne=ae.x,Ke=ae.y,st=ae.z):(Ne=0,Ke=0,st=0);const _t=_e.convert(H.format),Ze=_e.convert(H.type);let ke;if(H.isData3DTexture)ve.setTexture3D(H,0),ke=A.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)ve.setTexture2DArray(H,0),ke=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,H.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,H.unpackAlignment);const ct=A.getParameter(A.UNPACK_ROW_LENGTH),Qe=A.getParameter(A.UNPACK_IMAGE_HEIGHT),wt=A.getParameter(A.UNPACK_SKIP_PIXELS),un=A.getParameter(A.UNPACK_SKIP_ROWS),ft=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,at.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,at.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,he),A.pixelStorei(A.UNPACK_SKIP_ROWS,ze),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ve),b.isDataTexture||b.isData3DTexture?A.texSubImage3D(ke,q,Ne,Ke,st,Se,Pe,Ie,_t,Ze,at.data):H.isCompressedArrayTexture?A.compressedTexSubImage3D(ke,q,Ne,Ke,st,Se,Pe,Ie,_t,at.data):A.texSubImage3D(ke,q,Ne,Ke,st,Se,Pe,Ie,_t,Ze,at),A.pixelStorei(A.UNPACK_ROW_LENGTH,ct),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Qe),A.pixelStorei(A.UNPACK_SKIP_PIXELS,wt),A.pixelStorei(A.UNPACK_SKIP_ROWS,un),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ft),q===0&&H.generateMipmaps&&A.generateMipmap(ke),ge.unbindTexture()},this.initRenderTarget=function(b){le.get(b).__webglFramebuffer===void 0&&ve.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ve.setTextureCube(b,0):b.isData3DTexture?ve.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ve.setTexture2DArray(b,0):ve.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){P=0,w=0,T=null,ge.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Zs?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===la?"display-p3":"srgb"}}class sg extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class og extends tn{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class no extends hn{constructor(e=1,t=32,r=16,n=0,i=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:n,phiLength:i,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(s+o,Math.PI);let c=0;const h=[],u=new K,f=new K,d=[],g=[],v=[],p=[];for(let m=0;m<=r;m++){const y=[],M=m/r;let S=0;m===0&&s===0?S=.5/t:m===r&&l===Math.PI&&(S=-.5/t);for(let P=0;P<=t;P++){const w=P/t;u.x=-e*Math.cos(n+w*i)*Math.sin(s+M*o),u.y=e*Math.cos(s+M*o),u.z=e*Math.sin(n+w*i)*Math.sin(s+M*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),p.push(w+S,1-M),y.push(c++)}h.push(y)}for(let m=0;m<r;m++)for(let y=0;y<t;y++){const M=h[m][y+1],S=h[m][y],P=h[m+1][y],w=h[m+1][y+1];(m!==0||s>0)&&d.push(M,S,w),(m!==r-1||l<Math.PI)&&d.push(S,P,w)}this.setIndex(d),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(v,3)),this.setAttribute("uv",new nn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lg extends dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cg extends lg{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const xl={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class hg{constructor(e,t,r){const n=this;let i=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(h){o++,i===!1&&n.onStart!==void 0&&n.onStart(h,s,o),i=!0},this.itemEnd=function(h){s++,n.onProgress!==void 0&&n.onProgress(h,s,o),s===o&&(i=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const ug=new hg;class io{constructor(e){this.manager=e!==void 0?e:ug,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(n,i){r.load(e,n,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}io.DEFAULT_MATERIAL_NAME="__DEFAULT";class fg extends io{constructor(e){super(e)}load(e,t,r,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,s=xl.get(e);if(s!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(s),i.manager.itemEnd(e)},0),s;const o=ur("img");function l(){h(),xl.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(u){h(),n&&n(u),i.manager.itemError(e),i.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}}class dg extends io{constructor(e){super(e)}load(e,t,r,n){const i=new Tt,s=new fg(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){i.image=o,i.needsUpdate=!0,t!==void 0&&t(i)},r,n),i}}class bc extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ja=new lt,Ml=new K,Sl=new K;class pg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eo,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Ml.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ml),Sl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sl),t.updateMatrixWorld(),Ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yl=new lt,tr=new K,Qa=new K;class mg extends pg{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,n=this.matrix,i=e.distance||r.far;i!==r.far&&(r.far=i,r.updateProjectionMatrix()),tr.setFromMatrixPosition(e.matrixWorld),r.position.copy(tr),Qa.copy(r.position),Qa.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Qa),r.updateMatrixWorld(),n.makeTranslation(-tr.x,-tr.y,-tr.z),yl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl)}}class gg extends bc{constructor(e,t,r=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=n,this.shadow=new mg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _g extends bc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class vg extends hn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const El=new lt;class xg{constructor(e,t,r=0,n=1/0){this.ray=new Qs(e,t),this.near=r,this.far=n,this.camera=null,this.layers=new $s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return El.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(El),this}intersectObject(e,t=!0,r=[]){return Bs(e,this,r,t),r.sort(Tl),r}intersectObjects(e,t=!0,r=[]){for(let n=0,i=e.length;n<i;n++)Bs(e[n],this,r,t);return r.sort(Tl),r}}function Tl(a,e){return a.distance-e.distance}function Bs(a,e,t,r){let n=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(n=!1),n===!0&&r===!0){const i=a.children;for(let s=0,o=i.length;s<o;s++)Bs(i[s],e,t,!0)}}class bl{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mg extends ni{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vs);const Al={type:"change"},ro={type:"start"},Ac={type:"end"},Xr=new Qs,wl=new Un,Sg=Math.cos(70*sc.DEG2RAD),dt=new K,Ft=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$a=1e-6;class yg extends Mg{constructor(e,t=null){super(e,t),this.state=et.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ri.ROTATE,MIDDLE:Ri.DOLLY,RIGHT:Ri.PAN},this.touches={ONE:Ai.ROTATE,TWO:Ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new ti,this._lastTargetPosition=new K,this._quat=new ti().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bl,this._sphericalDelta=new bl,this._scale=1,this._panOffset=new K,this._rotateStart=new Ge,this._rotateEnd=new Ge,this._rotateDelta=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._panDelta=new Ge,this._dollyStart=new Ge,this._dollyEnd=new Ge,this._dollyDelta=new Ge,this._dollyDirection=new K,this._mouse=new Ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Tg.bind(this),this._onPointerDown=Eg.bind(this),this._onPointerUp=bg.bind(this),this._onContextMenu=Dg.bind(this),this._onMouseWheel=Rg.bind(this),this._onKeyDown=Cg.bind(this),this._onTouchStart=Pg.bind(this),this._onTouchMove=Ug.bind(this),this._onMouseDown=Ag.bind(this),this._onMouseMove=wg.bind(this),this._interceptControlDown=Lg.bind(this),this._interceptControlUp=Ig.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Al),this.update(),this.state=et.NONE}update(e=null){const t=this.object.position;dt.copy(t).sub(this.target),dt.applyQuaternion(this._quat),this._spherical.setFromVector3(dt),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(r)&&isFinite(n)&&(r<-Math.PI?r+=Ft:r>Math.PI&&(r-=Ft),n<-Math.PI?n+=Ft:n>Math.PI&&(n-=Ft),r<=n?this._spherical.theta=Math.max(r,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+n)/2?Math.max(r,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=s!=this._spherical.radius}if(dt.setFromSpherical(this._spherical),dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=dt.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),i=!!l}else if(this.object.isOrthographicCamera){const o=new K(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=l!==this.object.zoom;const c=new K(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Xr.origin.copy(this.object.position),Xr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xr.direction))<Sg?this.object.lookAt(this.target):(wl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xr.intersectPlane(wl,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>$a||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$a||this._lastTargetPosition.distanceToSquared(this.target)>$a?(this.dispatchEvent(Al),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ft/60*this.autoRotateSpeed*e:Ft/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){dt.setFromMatrixColumn(t,0),dt.multiplyScalar(-e),this._panOffset.add(dt)}_panUp(e,t){this.screenSpacePanning===!0?dt.setFromMatrixColumn(t,1):(dt.setFromMatrixColumn(t,0),dt.crossVectors(this.object.up,dt)),dt.multiplyScalar(e),this._panOffset.add(dt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;dt.copy(n).sub(this.target);let i=dt.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/r.clientHeight,this.object.matrix),this._panUp(2*t*i/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),n=e-r.left,i=t-r.top,s=r.width,o=r.height;this._mouse.x=n/s*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Ft*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Ft*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Ft*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Ft*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(r,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(r,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,n=e.pageY-t.y,i=Math.sqrt(r*r+n*n);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),n=.5*(e.pageX+r.x),i=.5*(e.pageY+r.y);this._rotateEnd.set(n,i)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(r,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,n=e.pageY-t.y,i=Math.sqrt(r*r+n*n);this._dollyEnd.set(0,i),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function Eg(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function Tg(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function bg(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ac),this.state=et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ag(a){let e;switch(a.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ri.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=et.DOLLY;break;case Ri.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=et.ROTATE}break;case Ri.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(ro)}function wg(a){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function Rg(a){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(a.preventDefault(),this.dispatchEvent(ro),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(Ac))}function Cg(a){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(a)}function Pg(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case Ai.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=et.TOUCH_ROTATE;break;case Ai.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case Ai.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=et.TOUCH_DOLLY_PAN;break;case Ai.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(ro)}function Ug(a){switch(this._trackPointer(a),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=et.NONE}}function Dg(a){this.enabled!==!1&&a.preventDefault()}function Lg(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ig(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Fg(){var a=Object.create(null);function e(n,i){var s=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var h=n.getTransferables;if(h===void 0&&(h=null),!a[s])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=a[f.id].value),f}),c=r("<"+o+">.init",c),h&&(h=r("<"+o+">.getTransferables",h));var u=null;typeof c=="function"?u=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:u,getTransferables:h},i(u)}catch(f){f&&f.noLog||console.error(f),i(f)}}function t(n,i){var s,o=n.id,l=n.args;(!a[o]||typeof a[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(h,function(u){return i(u instanceof Error?u:new Error(""+u))}):h(c)}catch(u){i(u)}function h(u){try{var f=a[o].getTransferables&&a[o].getTransferables(u);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),i(u,f)}catch(d){console.error(d),i(d)}}}function r(n,i){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(n){var i=n.data,s=i.messageId,o=i.action,l=i.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,h){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},h||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function Ng(a){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,r=a.init;t=Array.isArray(t)?t.map(function(i){return i&&i._getInitResult?i._getInitResult():i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var wc=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return wc=function(){return a},a},Og=0,Bg=0,es=!1,or=Object.create(null),lr=Object.create(null),ks=Object.create(null);function zi(a){if((!a||typeof a.init!="function")&&!es)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,r=a.getTransferables,n=a.workerId;if(!wc())return Ng(a);n==null&&(n="#default");var i="workerModule"+ ++Og,s=a.name||i,o=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(es=!0,c=zi({workerId:n,name:"<"+s+"> function dependency: "+c.name,init:`function(){return (
`+ea(c)+`
)}`}),es=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(!o){o=Rl(n,"registerModule",l.workerModuleData);var u=function(){o=null,lr[n].delete(u)};(lr[n]||(lr[n]=new Set)).add(u)}return o.then(function(f){var d=f.isCallable;if(d)return Rl(n,"callModule",{id:i,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:i,name:s,dependencies:e,init:ea(t),getTransferables:r&&ea(r)},l}function kg(a){lr[a]&&lr[a].forEach(function(e){e()}),or[a]&&(or[a].terminate(),delete or[a])}function ea(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function zg(a){var e=or[a];if(!e){var t=ea(Fg);e=or[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,s=ks[i];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete ks[i],s(n)}}return e}function Rl(a,e,t){return new Promise(function(r,n){var i=++Bg;ks[i]=function(s){s.success?r(s.result):n(new Error("Error in worker "+e+" call: "+s.error))},zg(a).postMessage({messageId:i,action:e,data:t})})}function Rc(){var a=function(e){function t(J,j,L,V,ne,F,O,te){var X=1-O;te.x=X*X*J+2*X*O*L+O*O*ne,te.y=X*X*j+2*X*O*V+O*O*F}function r(J,j,L,V,ne,F,O,te,X,re){var de=1-X;re.x=de*de*de*J+3*de*de*X*L+3*de*X*X*ne+X*X*X*O,re.y=de*de*de*j+3*de*de*X*V+3*de*X*X*F+X*X*X*te}function n(J,j){for(var L=/([MLQCZ])([^MLQCZ]*)/g,V,ne,F,O,te;V=L.exec(J);){var X=V[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(re){return parseFloat(re)});switch(V[1]){case"M":O=ne=X[0],te=F=X[1];break;case"L":(X[0]!==O||X[1]!==te)&&j("L",O,te,O=X[0],te=X[1]);break;case"Q":{j("Q",O,te,O=X[2],te=X[3],X[0],X[1]);break}case"C":{j("C",O,te,O=X[4],te=X[5],X[0],X[1],X[2],X[3]);break}case"Z":(O!==ne||te!==F)&&j("L",O,te,ne,F);break}}}function i(J,j,L){L===void 0&&(L=16);var V={x:0,y:0};n(J,function(ne,F,O,te,X,re,de,Me,me){switch(ne){case"L":j(F,O,te,X);break;case"Q":{for(var A=F,Be=O,we=1;we<L;we++)t(F,O,re,de,te,X,we/(L-1),V),j(A,Be,V.x,V.y),A=V.x,Be=V.y;break}case"C":{for(var Ae=F,ge=O,Oe=1;Oe<L;Oe++)r(F,O,re,de,Me,me,te,X,Oe/(L-1),V),j(Ae,ge,V.x,V.y),Ae=V.x,ge=V.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function h(J,j){var L=J.getContext?J.getContext("webgl",c):J,V=l.get(L);if(!V){let Ae=function(_){var z=F[_];if(!z&&(z=F[_]=L.getExtension(_),!z))throw new Error(_+" not supported");return z},ge=function(_,z){var W=L.createShader(z);return L.shaderSource(W,_),L.compileShader(W),W},Oe=function(_,z,W,$){if(!O[_]){var Z={},be={},oe=L.createProgram();L.attachShader(oe,ge(z,L.VERTEX_SHADER)),L.attachShader(oe,ge(W,L.FRAGMENT_SHADER)),L.linkProgram(oe),O[_]={program:oe,transaction:function(Te){L.useProgram(oe),Te({setUniform:function(xe,Fe){for(var ye=[],pe=arguments.length-2;pe-- >0;)ye[pe]=arguments[pe+2];var _e=be[Fe]||(be[Fe]=L.getUniformLocation(oe,Fe));L["uniform"+xe].apply(L,[_e].concat(ye))},setAttribute:function(xe,Fe,ye,pe,_e){var De=Z[xe];De||(De=Z[xe]={buf:L.createBuffer(),loc:L.getAttribLocation(oe,xe),data:null}),L.bindBuffer(L.ARRAY_BUFFER,De.buf),L.vertexAttribPointer(De.loc,Fe,L.FLOAT,!1,0,0),L.enableVertexAttribArray(De.loc),ne?L.vertexAttribDivisor(De.loc,pe):Ae("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(De.loc,pe),_e!==De.data&&(L.bufferData(L.ARRAY_BUFFER,_e,ye),De.data=_e)}})}}}O[_].transaction($)},le=function(_,z){X++;try{L.activeTexture(L.TEXTURE0+X);var W=te[_];W||(W=te[_]=L.createTexture(),L.bindTexture(L.TEXTURE_2D,W),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MIN_FILTER,L.NEAREST),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MAG_FILTER,L.NEAREST)),L.bindTexture(L.TEXTURE_2D,W),z(W,X)}finally{X--}},ve=function(_,z,W){var $=L.createFramebuffer();re.push($),L.bindFramebuffer(L.FRAMEBUFFER,$),L.activeTexture(L.TEXTURE0+z),L.bindTexture(L.TEXTURE_2D,_),L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_,0);try{W($)}finally{L.deleteFramebuffer($),L.bindFramebuffer(L.FRAMEBUFFER,re[--re.length-1]||null)}},R=function(){F={},O={},te={},X=-1,re.length=0};var de=Ae,Me=ge,me=Oe,A=le,Be=ve,we=R,ne=typeof WebGL2RenderingContext<"u"&&L instanceof WebGL2RenderingContext,F={},O={},te={},X=-1,re=[];L.canvas.addEventListener("webglcontextlost",function(_){R(),_.preventDefault()},!1),l.set(L,V={gl:L,isWebGL2:ne,getExtension:Ae,withProgram:Oe,withTexture:le,withTextureFramebuffer:ve,handleContextLoss:R})}j(V)}function u(J,j,L,V,ne,F,O,te){O===void 0&&(O=15),te===void 0&&(te=null),h(J,function(X){var re=X.gl,de=X.withProgram,Me=X.withTexture;Me("copy",function(me,A){re.texImage2D(re.TEXTURE_2D,0,re.RGBA,ne,F,0,re.RGBA,re.UNSIGNED_BYTE,j),de("copy",s,o,function(Be){var we=Be.setUniform,Ae=Be.setAttribute;Ae("aUV",2,re.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),we("1i","image",A),re.bindFramebuffer(re.FRAMEBUFFER,te||null),re.disable(re.BLEND),re.colorMask(O&8,O&4,O&2,O&1),re.viewport(L,V,ne,F),re.scissor(L,V,ne,F),re.drawArrays(re.TRIANGLES,0,3)})})})}function f(J,j,L){var V=J.width,ne=J.height;h(J,function(F){var O=F.gl,te=new Uint8Array(V*ne*4);O.readPixels(0,0,V,ne,O.RGBA,O.UNSIGNED_BYTE,te),J.width=j,J.height=L,u(O,te,0,0,V,ne)})}var d=Object.freeze({__proto__:null,withWebGLContext:h,renderImageData:u,resizeWebGLCanvasWithoutClearing:f});function g(J,j,L,V,ne,F){F===void 0&&(F=1);var O=new Uint8Array(J*j),te=V[2]-V[0],X=V[3]-V[1],re=[];i(L,function(Ae,ge,Oe,le){re.push({x1:Ae,y1:ge,x2:Oe,y2:le,minX:Math.min(Ae,Oe),minY:Math.min(ge,le),maxX:Math.max(Ae,Oe),maxY:Math.max(ge,le)})}),re.sort(function(Ae,ge){return Ae.maxX-ge.maxX});for(var de=0;de<J;de++)for(var Me=0;Me<j;Me++){var me=Be(V[0]+te*(de+.5)/J,V[1]+X*(Me+.5)/j),A=Math.pow(1-Math.abs(me)/ne,F)/2;me<0&&(A=1-A),A=Math.max(0,Math.min(255,Math.round(A*255))),O[Me*J+de]=A}return O;function Be(Ae,ge){for(var Oe=1/0,le=1/0,ve=re.length;ve--;){var R=re[ve];if(R.maxX+le<=Ae)break;if(Ae+le>R.minX&&ge-le<R.maxY&&ge+le>R.minY){var _=m(Ae,ge,R.x1,R.y1,R.x2,R.y2);_<Oe&&(Oe=_,le=Math.sqrt(Oe))}}return we(Ae,ge)&&(le=-le),le}function we(Ae,ge){for(var Oe=0,le=re.length;le--;){var ve=re[le];if(ve.maxX<=Ae)break;var R=ve.y1>ge!=ve.y2>ge&&Ae<(ve.x2-ve.x1)*(ge-ve.y1)/(ve.y2-ve.y1)+ve.x1;R&&(Oe+=ve.y1<ve.y2?1:-1)}return Oe!==0}}function v(J,j,L,V,ne,F,O,te,X,re){F===void 0&&(F=1),te===void 0&&(te=0),X===void 0&&(X=0),re===void 0&&(re=0),p(J,j,L,V,ne,F,O,null,te,X,re)}function p(J,j,L,V,ne,F,O,te,X,re,de){F===void 0&&(F=1),X===void 0&&(X=0),re===void 0&&(re=0),de===void 0&&(de=0);for(var Me=g(J,j,L,V,ne,F),me=new Uint8Array(Me.length*4),A=0;A<Me.length;A++)me[A*4+de]=Me[A];u(O,me,X,re,J,j,1<<3-de,te)}function m(J,j,L,V,ne,F){var O=ne-L,te=F-V,X=O*O+te*te,re=X?Math.max(0,Math.min(1,((J-L)*O+(j-V)*te)/X)):0,de=J-(L+re*O),Me=j-(V+re*te);return de*de+Me*Me}var y=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:v,generateIntoFramebuffer:p}),M="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",S="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",P="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),T=null,U=!1,E={},x=new WeakMap;function D(J){if(!U&&!G(J))throw new Error("WebGL generation not supported")}function C(J,j,L,V,ne,F,O){if(F===void 0&&(F=1),O===void 0&&(O=null),!O&&(O=T,!O)){var te=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!te)throw new Error("OffscreenCanvas or DOM canvas not supported");O=T=te.getContext("webgl",{depth:!1})}D(O);var X=new Uint8Array(J*j*4);h(O,function(me){var A=me.gl,Be=me.withTexture,we=me.withTextureFramebuffer;Be("readable",function(Ae,ge){A.texImage2D(A.TEXTURE_2D,0,A.RGBA,J,j,0,A.RGBA,A.UNSIGNED_BYTE,null),we(Ae,ge,function(Oe){N(J,j,L,V,ne,F,A,Oe,0,0,0),A.readPixels(0,0,J,j,A.RGBA,A.UNSIGNED_BYTE,X)})})});for(var re=new Uint8Array(J*j),de=0,Me=0;de<X.length;de+=4)re[Me++]=X[de];return re}function I(J,j,L,V,ne,F,O,te,X,re){F===void 0&&(F=1),te===void 0&&(te=0),X===void 0&&(X=0),re===void 0&&(re=0),N(J,j,L,V,ne,F,O,null,te,X,re)}function N(J,j,L,V,ne,F,O,te,X,re,de){F===void 0&&(F=1),X===void 0&&(X=0),re===void 0&&(re=0),de===void 0&&(de=0),D(O);var Me=[];i(L,function(me,A,Be,we){Me.push(me,A,Be,we)}),Me=new Float32Array(Me),h(O,function(me){var A=me.gl,Be=me.isWebGL2,we=me.getExtension,Ae=me.withProgram,ge=me.withTexture,Oe=me.withTextureFramebuffer,le=me.handleContextLoss;if(ge("rawDistances",function(ve,R){(J!==ve._lastWidth||j!==ve._lastHeight)&&A.texImage2D(A.TEXTURE_2D,0,A.RGBA,ve._lastWidth=J,ve._lastHeight=j,0,A.RGBA,A.UNSIGNED_BYTE,null),Ae("main",M,S,function(_){var z=_.setAttribute,W=_.setUniform,$=!Be&&we("ANGLE_instanced_arrays"),Z=!Be&&we("EXT_blend_minmax");z("aUV",2,A.STATIC_DRAW,0,w),z("aLineSegment",4,A.DYNAMIC_DRAW,1,Me),W.apply(void 0,["4f","uGlyphBounds"].concat(V)),W("1f","uMaxDistance",ne),W("1f","uExponent",F),Oe(ve,R,function(be){A.enable(A.BLEND),A.colorMask(!0,!0,!0,!0),A.viewport(0,0,J,j),A.scissor(0,0,J,j),A.blendFunc(A.ONE,A.ONE),A.blendEquationSeparate(A.FUNC_ADD,Be?A.MAX:Z.MAX_EXT),A.clear(A.COLOR_BUFFER_BIT),Be?A.drawArraysInstanced(A.TRIANGLES,0,3,Me.length/4):$.drawArraysInstancedANGLE(A.TRIANGLES,0,3,Me.length/4)})}),Ae("post",s,P,function(_){_.setAttribute("aUV",2,A.STATIC_DRAW,0,w),_.setUniform("1i","tex",R),A.bindFramebuffer(A.FRAMEBUFFER,te),A.disable(A.BLEND),A.colorMask(de===0,de===1,de===2,de===3),A.viewport(X,re,J,j),A.scissor(X,re,J,j),A.drawArrays(A.TRIANGLES,0,3)})}),A.isContextLost())throw le(),new Error("webgl context lost")})}function G(J){var j=!J||J===T?E:J.canvas||J,L=x.get(j);if(L===void 0){U=!0;var V=null;try{var ne=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],F=C(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,J);L=F&&ne.length===F.length&&F.every(function(O,te){return O===ne[te]}),L||(V="bad trial run results",console.info(ne,F))}catch(O){L=!1,V=O.message}V&&console.warn("WebGL SDF generation not supported:",V),U=!1,x.set(j,L)}return L}var B=Object.freeze({__proto__:null,generate:C,generateIntoCanvas:I,generateIntoFramebuffer:N,isSupported:G});function Q(J,j,L,V,ne,F){ne===void 0&&(ne=Math.max(V[2]-V[0],V[3]-V[1])/2),F===void 0&&(F=1);try{return C.apply(B,arguments)}catch(O){return console.info("WebGL SDF generation failed, falling back to JS",O),g.apply(y,arguments)}}function Y(J,j,L,V,ne,F,O,te,X,re){ne===void 0&&(ne=Math.max(V[2]-V[0],V[3]-V[1])/2),F===void 0&&(F=1),te===void 0&&(te=0),X===void 0&&(X=0),re===void 0&&(re=0);try{return I.apply(B,arguments)}catch(de){return console.info("WebGL SDF generation failed, falling back to JS",de),v.apply(y,arguments)}}return e.forEachPathCommand=n,e.generate=Q,e.generateIntoCanvas=Y,e.javascript=y,e.pathToLineSegments=i,e.webgl=B,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function Gg(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(le,ve){r[le]=1<<ve+1,n[r[le]]=le}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,s=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|i|r.PDI|l,h=null;function u(){if(!h){h=new Map;var le=function(R){if(t.hasOwnProperty(R)){var _=0;t[R].split(",").forEach(function(z){var W=z.split("+"),$=W[0],Z=W[1];$=parseInt($,36),Z=Z?parseInt(Z,36):0,h.set(_+=$,r[R]);for(var be=0;be<Z;be++)h.set(++_,r[R])})}};for(var ve in t)le(ve)}}function f(le){return u(),h.get(le.codePointAt(0))||r.L}function d(le){return n[f(le)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(le,ve){var R=36,_=0,z=new Map,W=ve&&new Map,$;return le.split(",").forEach(function Z(be){if(be.indexOf("+")!==-1)for(var oe=+be;oe--;)Z($);else{$=be;var ue=be.split(">"),Te=ue[0],ce=ue[1];Te=String.fromCodePoint(_+=parseInt(Te,R)),ce=String.fromCodePoint(_+=parseInt(ce,R)),z.set(Te,ce),ve&&W.set(ce,Te)}}),{map:z,reverseMap:W}}var p,m,y;function M(){if(!p){var le=v(g.pairs,!0),ve=le.map,R=le.reverseMap;p=ve,m=R,y=v(g.canonical,!1).map}}function S(le){return M(),p.get(le)||null}function P(le){return M(),m.get(le)||null}function w(le){return M(),y.get(le)||null}var T=r.L,U=r.R,E=r.EN,x=r.ES,D=r.ET,C=r.AN,I=r.CS,N=r.B,G=r.S,B=r.ON,Q=r.BN,Y=r.NSM,J=r.AL,j=r.LRO,L=r.RLO,V=r.LRE,ne=r.RLE,F=r.PDF,O=r.LRI,te=r.RLI,X=r.FSI,re=r.PDI;function de(le,ve){for(var R=125,_=new Uint32Array(le.length),z=0;z<le.length;z++)_[z]=f(le[z]);var W=new Map;function $(Lt,Kt){var It=_[Lt];_[Lt]=Kt,W.set(It,W.get(It)-1),It&o&&W.set(o,W.get(o)-1),W.set(Kt,(W.get(Kt)||0)+1),Kt&o&&W.set(o,(W.get(o)||0)+1)}for(var Z=new Uint8Array(le.length),be=new Map,oe=[],ue=null,Te=0;Te<le.length;Te++)ue||oe.push(ue={start:Te,end:le.length-1,level:ve==="rtl"?1:ve==="ltr"?0:Mo(Te,!1)}),_[Te]&N&&(ue.end=Te,ue=null);for(var ce=ne|V|L|j|i|re|F|N,xe=function(Lt){return Lt+(Lt&1?1:2)},Fe=function(Lt){return Lt+(Lt&1?2:1)},ye=0;ye<oe.length;ye++){ue=oe[ye];var pe=[{_level:ue.level,_override:0,_isolate:0}],_e=void 0,De=0,He=0,k=0;W.clear();for(var fe=ue.start;fe<=ue.end;fe++){var ee=_[fe];if(_e=pe[pe.length-1],W.set(ee,(W.get(ee)||0)+1),ee&o&&W.set(o,(W.get(o)||0)+1),ee&ce)if(ee&(ne|V)){Z[fe]=_e._level;var se=(ee===ne?Fe:xe)(_e._level);se<=R&&!De&&!He?pe.push({_level:se,_override:0,_isolate:0}):De||He++}else if(ee&(L|j)){Z[fe]=_e._level;var Ee=(ee===L?Fe:xe)(_e._level);Ee<=R&&!De&&!He?pe.push({_level:Ee,_override:ee&L?U:T,_isolate:0}):De||He++}else if(ee&i){ee&X&&(ee=Mo(fe+1,!0)===1?te:O),Z[fe]=_e._level,_e._override&&$(fe,_e._override);var Re=(ee===te?Fe:xe)(_e._level);Re<=R&&De===0&&He===0?(k++,pe.push({_level:Re,_override:0,_isolate:1,_isolInitIndex:fe})):De++}else if(ee&re){if(De>0)De--;else if(k>0){for(He=0;!pe[pe.length-1]._isolate;)pe.pop();var Le=pe[pe.length-1]._isolInitIndex;Le!=null&&(be.set(Le,fe),be.set(fe,Le)),pe.pop(),k--}_e=pe[pe.length-1],Z[fe]=_e._level,_e._override&&$(fe,_e._override)}else ee&F?(De===0&&(He>0?He--:!_e._isolate&&pe.length>1&&(pe.pop(),_e=pe[pe.length-1])),Z[fe]=_e._level):ee&N&&(Z[fe]=ue.level);else Z[fe]=_e._level,_e._override&&ee!==Q&&$(fe,_e._override)}for(var Xe=[],We=null,Ue=ue.start;Ue<=ue.end;Ue++){var Je=_[Ue];if(!(Je&l)){var rt=Z[Ue],ut=Je&i,tt=Je===re;We&&rt===We._level?(We._end=Ue,We._endsWithIsolInit=ut):Xe.push(We={_start:Ue,_end:Ue,_level:rt,_startsWithPDI:tt,_endsWithIsolInit:ut})}}for(var At=[],jt=0;jt<Xe.length;jt++){var Vt=Xe[jt];if(!Vt._startsWithPDI||Vt._startsWithPDI&&!be.has(Vt._start)){for(var Nt=[We=Vt],rn=void 0;We&&We._endsWithIsolInit&&(rn=be.get(We._end))!=null;)for(var Ut=jt+1;Ut<Xe.length;Ut++)if(Xe[Ut]._start===rn){Nt.push(We=Xe[Ut]);break}for(var gt=[],an=0;an<Nt.length;an++)for(var mr=Nt[an],Gi=mr._start;Gi<=mr._end;Gi++)gt.push(Gi);for(var da=Z[gt[0]],b=ue.level,H=gt[0]-1;H>=0;H--)if(!(_[H]&l)){b=Z[H];break}var ie=gt[gt.length-1],ae=Z[ie],q=ue.level;if(!(_[ie]&i)){for(var Se=ie+1;Se<=ue.end;Se++)if(!(_[Se]&l)){q=Z[Se];break}}At.push({_seqIndices:gt,_sosType:Math.max(b,da)%2?U:T,_eosType:Math.max(q,ae)%2?U:T})}}for(var Pe=0;Pe<At.length;Pe++){var Ie=At[Pe],he=Ie._seqIndices,ze=Ie._sosType,Ve=Ie._eosType,Ne=Z[he[0]]&1?U:T;if(W.get(Y))for(var Ke=0;Ke<he.length;Ke++){var st=he[Ke];if(_[st]&Y){for(var at=ze,_t=Ke-1;_t>=0;_t--)if(!(_[he[_t]]&l)){at=_[he[_t]];break}$(st,at&(i|re)?B:at)}}if(W.get(E))for(var Ze=0;Ze<he.length;Ze++){var ke=he[Ze];if(_[ke]&E)for(var ct=Ze-1;ct>=-1;ct--){var Qe=ct===-1?ze:_[he[ct]];if(Qe&s){Qe===J&&$(ke,C);break}}}if(W.get(J))for(var wt=0;wt<he.length;wt++){var un=he[wt];_[un]&J&&$(un,U)}if(W.get(x)||W.get(I))for(var ft=1;ft<he.length-1;ft++){var On=he[ft];if(_[On]&(x|I)){for(var nt=0,Wt=0,Bn=ft-1;Bn>=0&&(nt=_[he[Bn]],!!(nt&l));Bn--);for(var St=ft+1;St<he.length&&(Wt=_[he[St]],!!(Wt&l));St++);nt===Wt&&(_[On]===x?nt===E:nt&(E|C))&&$(On,nt)}}if(W.get(E))for(var Dt=0;Dt<he.length;Dt++){var pa=he[Dt];if(_[pa]&E){for(var kn=Dt-1;kn>=0&&_[he[kn]]&(D|l);kn--)$(he[kn],E);for(Dt++;Dt<he.length&&_[he[Dt]]&(D|l|E);Dt++)_[he[Dt]]!==E&&$(he[Dt],E)}}if(W.get(D)||W.get(x)||W.get(I))for(var Hi=0;Hi<he.length;Hi++){var so=he[Hi];if(_[so]&(D|x|I)){$(so,B);for(var gr=Hi-1;gr>=0&&_[he[gr]]&l;gr--)$(he[gr],B);for(var _r=Hi+1;_r<he.length&&_[he[_r]]&l;_r++)$(he[_r],B)}}if(W.get(E))for(var ma=0,oo=ze;ma<he.length;ma++){var lo=he[ma],ga=_[lo];ga&E?oo===T&&$(lo,T):ga&s&&(oo=ga)}if(W.get(o)){var Vi=U|E|C,co=Vi|T,vr=[];{for(var ri=[],ai=0;ai<he.length;ai++)if(_[he[ai]]&o){var Wi=le[he[ai]],ho=void 0;if(S(Wi)!==null)if(ri.length<63)ri.push({char:Wi,seqIndex:ai});else break;else if((ho=P(Wi))!==null)for(var Xi=ri.length-1;Xi>=0;Xi--){var _a=ri[Xi].char;if(_a===ho||_a===P(w(Wi))||S(w(_a))===Wi){vr.push([ri[Xi].seqIndex,ai]),ri.length=Xi;break}}}vr.sort(function(Lt,Kt){return Lt[0]-Kt[0]})}for(var va=0;va<vr.length;va++){for(var uo=vr[va],xr=uo[0],xa=uo[1],fo=!1,qt=0,Ma=xr+1;Ma<xa;Ma++){var po=he[Ma];if(_[po]&co){fo=!0;var mo=_[po]&Vi?U:T;if(mo===Ne){qt=mo;break}}}if(fo&&!qt){qt=ze;for(var Sa=xr-1;Sa>=0;Sa--){var go=he[Sa];if(_[go]&co){var _o=_[go]&Vi?U:T;_o!==Ne?qt=_o:qt=Ne;break}}}if(qt){if(_[he[xr]]=_[he[xa]]=qt,qt!==Ne){for(var Yi=xr+1;Yi<he.length;Yi++)if(!(_[he[Yi]]&l)){f(le[he[Yi]])&Y&&(_[he[Yi]]=qt);break}}if(qt!==Ne){for(var ji=xa+1;ji<he.length;ji++)if(!(_[he[ji]]&l)){f(le[he[ji]])&Y&&(_[he[ji]]=qt);break}}}}for(var yn=0;yn<he.length;yn++)if(_[he[yn]]&o){for(var vo=yn,ya=yn,Ea=ze,qi=yn-1;qi>=0;qi--)if(_[he[qi]]&l)vo=qi;else{Ea=_[he[qi]]&Vi?U:T;break}for(var xo=Ve,Ki=yn+1;Ki<he.length;Ki++)if(_[he[Ki]]&(o|l))ya=Ki;else{xo=_[he[Ki]]&Vi?U:T;break}for(var Ta=vo;Ta<=ya;Ta++)_[he[Ta]]=Ea===xo?Ea:Ne;yn=ya}}}for(var Ot=ue.start;Ot<=ue.end;Ot++){var Oc=Z[Ot],Mr=_[Ot];if(Oc&1?Mr&(T|E|C)&&Z[Ot]++:Mr&U?Z[Ot]++:Mr&(C|E)&&(Z[Ot]+=2),Mr&l&&(Z[Ot]=Ot===0?ue.level:Z[Ot-1]),Ot===ue.end||f(le[Ot])&(G|N))for(var Sr=Ot;Sr>=0&&f(le[Sr])&c;Sr--)Z[Sr]=ue.level}}return{levels:Z,paragraphs:oe};function Mo(Lt,Kt){for(var It=Lt;It<le.length;It++){var En=_[It];if(En&(U|J))return 1;if(En&(N|T)||Kt&&En===re)return 0;if(En&i){var So=Bc(It);It=So===-1?le.length:So}}return 0}function Bc(Lt){for(var Kt=1,It=Lt+1;It<le.length;It++){var En=_[It];if(En&N)break;if(En&re){if(--Kt===0)return It}else En&i&&Kt++}return-1}}var Me="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",me;function A(){if(!me){var le=v(Me,!0),ve=le.map,R=le.reverseMap;R.forEach(function(_,z){ve.set(z,_)}),me=ve}}function Be(le){return A(),me.get(le)||null}function we(le,ve,R,_){var z=le.length;R=Math.max(0,R==null?0:+R),_=Math.min(z-1,_==null?z-1:+_);for(var W=new Map,$=R;$<=_;$++)if(ve[$]&1){var Z=Be(le[$]);Z!==null&&W.set($,Z)}return W}function Ae(le,ve,R,_){var z=le.length;R=Math.max(0,R==null?0:+R),_=Math.min(z-1,_==null?z-1:+_);var W=[];return ve.paragraphs.forEach(function($){var Z=Math.max(R,$.start),be=Math.min(_,$.end);if(Z<be){for(var oe=ve.levels.slice(Z,be+1),ue=be;ue>=Z&&f(le[ue])&c;ue--)oe[ue]=$.level;for(var Te=$.level,ce=1/0,xe=0;xe<oe.length;xe++){var Fe=oe[xe];Fe>Te&&(Te=Fe),Fe<ce&&(ce=Fe|1)}for(var ye=Te;ye>=ce;ye--)for(var pe=0;pe<oe.length;pe++)if(oe[pe]>=ye){for(var _e=pe;pe+1<oe.length&&oe[pe+1]>=ye;)pe++;pe>_e&&W.push([_e+Z,pe+Z])}}}),W}function ge(le,ve,R,_){var z=Oe(le,ve,R,_),W=[].concat(le);return z.forEach(function($,Z){W[Z]=(ve.levels[$]&1?Be(le[$]):null)||le[$]}),W.join("")}function Oe(le,ve,R,_){for(var z=Ae(le,ve,R,_),W=[],$=0;$<le.length;$++)W[$]=$;return z.forEach(function(Z){for(var be=Z[0],oe=Z[1],ue=W.slice(be,oe+1),Te=ue.length;Te--;)W[oe-Te]=ue[Te]}),W}return e.closingToOpeningBracket=P,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=w,e.getEmbeddingLevels=de,e.getMirroredCharacter=Be,e.getMirroredCharactersMap=we,e.getReorderSegments=Ae,e.getReorderedIndices=Oe,e.getReorderedString=ge,e.openingToClosingBracket=S,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const Cc=/\bvoid\s+main\s*\(\s*\)\s*{/g;function zs(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=Ye[n];return i?zs(i):r}return a.replace(e,t)}const xt=[];for(let a=0;a<256;a++)xt[a]=(a<16?"0":"")+a.toString(16);function Hg(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xt[a&255]+xt[a>>8&255]+xt[a>>16&255]+xt[a>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]).toUpperCase()}const Yn=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])}return a},Vg=Date.now(),Cl=new WeakMap,Pl=new Map;let Wg=1e10;function Gs(a,e){const t=qg(e);let r=Cl.get(a);if(r||Cl.set(a,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(c,h){a.onBeforeCompile.call(this,c,h);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=Pl[u];if(!f){const d=Xg(this,c,e,t);f=Pl[u]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,Yn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Vg}}),this[n]&&this[n](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const h=Object.create(c,l);return Object.defineProperty(h,"baseMaterial",{value:a}),Object.defineProperty(h,"id",{value:Wg++}),h.uuid=Hg(),h.uniforms=Yn({},c.uniforms,e.uniforms),h.defines=Yn({},c.defines,e.defines),h.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",h.extensions=Yn({},c.extensions,e.extensions),h._listeners=void 0,h},l={constructor:{value:s},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(Yn(this.extensions,c.extensions),Yn(this.defines,c.defines),Yn(this.uniforms,pc.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Gs(a.isDerivedMaterial?a.getDepthMaterial():new Ec({depthPacking:ic}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Gs(a.isDerivedMaterial?a.getDistanceMaterial():new Tc,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:h}=this;c&&c.dispose(),h&&h.dispose(),a.dispose.call(this)}}};return r[t]=s,new s}function Xg(a,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:h,fragmentMainOutro:u,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=r;if(i=i||"",s=s||"",o=o||"",c=c||"",h=h||"",u=u||"",(l||d)&&(e=zs(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=zs(t)),d){let v=d({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(f){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(v.push(p),"")),u=`${f}
${v.join(`
`)}
${u}`}if(g){const v=`
uniform float ${g};
`;i=v+i,c=v+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,s=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,p,m,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,m))?p:`troika_${p}_${n}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=Ul(e,n,i,s,o),t=Ul(t,n,c,h,u),{vertexShader:e,fragmentShader:t}}function Ul(a,e,t,r,n){return(r||n||t)&&(a=a.replace(Cc,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),a}function Yg(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let jg=0;const Dl=new Map;function qg(a){const e=JSON.stringify(a,Yg);let t=Dl.get(e);return t==null&&Dl.set(e,t=++jg),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function Kg(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(n){var i=e._bin,s=new Uint8Array(n);if(i.readASCII(s,0,4)=="ttcf"){var o=4;i.readUshort(s,o),o+=2,i.readUshort(s,o),o+=2;var l=i.readUint(s,o);o+=4;for(var c=[],h=0;h<l;h++){var u=i.readUint(s,o);o+=4,c.push(e._readFont(s,u))}return c}return[e._readFont(s,0)]},_readFont:function(n,i){var s=e._bin,o=i;s.readFixed(n,i),i+=4;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],h={_data:n,_offset:o},u={},f=0;f<l;f++){var d=s.readASCII(n,i,4);i+=4,s.readUint(n,i),i+=4;var g=s.readUint(n,i);i+=4;var v=s.readUint(n,i);i+=4,u[d]={offset:g,length:v}}for(f=0;f<c.length;f++){var p=c[f];u[p]&&(h[p.trim()]=e[p.trim()].parse(n,u[p].offset,u[p].length,h))}return h},_tabOffset:function(n,i,s){for(var o=e._bin,l=o.readUshort(n,s+4),c=s+12,h=0;h<l;h++){var u=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var f=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,u==i)return f}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(n,i+2*l));return o},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(n[i+l]);return o},readUnicode:function(n,i,s){for(var o="",l=0;l<s;l++){var c=n[i++]<<8|n[i++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,s){var o=e._bin._tdec;return o&&i==0&&s==n.length?o.decode(n):e._bin.readASCII(n,i,s)},readBytes:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(n[i+l]);return o},readASCIIArray:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(n[i+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,s,o,l){var c=e._bin,h={},u=i;c.readFixed(n,i),i+=4;var f=c.readUshort(n,i);i+=2;var d=c.readUshort(n,i);i+=2;var g=c.readUshort(n,i);return i+=2,h.scriptList=e._lctf.readScriptList(n,u+f),h.featureList=e._lctf.readFeatureList(n,u+d),h.lookupList=e._lctf.readLookupList(n,u+g,l),h},e._lctf.readLookupList=function(n,i,s){var o=e._bin,l=i,c=[],h=o.readUshort(n,i);i+=2;for(var u=0;u<h;u++){var f=o.readUshort(n,i);i+=2;var d=e._lctf.readLookupTable(n,l+f,s);c.push(d)}return c},e._lctf.readLookupTable=function(n,i,s){var o=e._bin,l=i,c={tabs:[]};c.ltype=o.readUshort(n,i),i+=2,c.flag=o.readUshort(n,i),i+=2;var h=o.readUshort(n,i);i+=2;for(var u=c.ltype,f=0;f<h;f++){var d=o.readUshort(n,i);i+=2;var g=s(n,u,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var i=0,s=0;s<32;s++)n>>>s&1&&i++;return i},e._lctf.readClassDef=function(n,i){var s=e._bin,o=[],l=s.readUshort(n,i);if(i+=2,l==1){var c=s.readUshort(n,i);i+=2;var h=s.readUshort(n,i);i+=2;for(var u=0;u<h;u++)o.push(c+u),o.push(c+u),o.push(s.readUshort(n,i)),i+=2}if(l==2){var f=s.readUshort(n,i);for(i+=2,u=0;u<f;u++)o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2}return o},e._lctf.getInterval=function(n,i){for(var s=0;s<n.length;s+=3){var o=n[s],l=n[s+1];if(n[s+2],o<=i&&i<=l)return s}return-1},e._lctf.readCoverage=function(n,i){var s=e._bin,o={};o.fmt=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);return i+=2,o.fmt==1&&(o.tab=s.readUshorts(n,i,l)),o.fmt==2&&(o.tab=s.readUshorts(n,i,3*l)),o},e._lctf.coverageIndex=function(n,i){var s=n.tab;if(n.fmt==1)return s.indexOf(i);if(n.fmt==2){var o=e._lctf.getInterval(s,i);if(o!=-1)return s[o+2]+(i-s[o])}return-1},e._lctf.readFeatureList=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var u=s.readASCII(n,i,4);i+=4;var f=s.readUshort(n,i);i+=2;var d=e._lctf.readFeatureTable(n,o+f);d.tag=u.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2,c>0&&(l.featureParams=o+c);var h=s.readUshort(n,i);i+=2,l.tab=[];for(var u=0;u<h;u++)l.tab.push(s.readUshort(n,i+2*u));return l},e._lctf.readScriptList=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var u=s.readASCII(n,i,4);i+=4;var f=s.readUshort(n,i);i+=2,l[u.trim()]=e._lctf.readScriptTable(n,o+f)}return l},e._lctf.readScriptTable=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var h=s.readUshort(n,i);i+=2;for(var u=0;u<h;u++){var f=s.readASCII(n,i,4);i+=4;var d=s.readUshort(n,i);i+=2,l[f.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,i){var s=e._bin,o={};s.readUshort(n,i),i+=2,o.reqFeature=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);return i+=2,o.features=s.readUshorts(n,i,l),o},e.CFF={},e.CFF.parse=function(n,i,s){var o=e._bin;(n=new Uint8Array(n.buffer,i,s))[i=0],n[++i],n[++i],n[++i],i++;var l=[];i=e.CFF.readIndex(n,i,l);for(var c=[],h=0;h<l.length-1;h++)c.push(o.readASCII(n,i+l[h],l[h+1]-l[h]));i+=l[l.length-1];var u=[];i=e.CFF.readIndex(n,i,u);var f=[];for(h=0;h<u.length-1;h++)f.push(e.CFF.readDict(n,i+u[h],i+u[h+1]));i+=u[u.length-1];var d=f[0],g=[];i=e.CFF.readIndex(n,i,g);var v=[];for(h=0;h<g.length-1;h++)v.push(o.readASCII(n,i+g[h],g[h+1]-g[h]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,d),d.CharStrings){i=d.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var p=[];for(h=0;h<g.length-1;h++)p.push(o.readBytes(n,i+g[h],g[h+1]-g[h]));d.CharStrings=p}if(d.ROS){i=d.FDArray;var m=[];for(i=e.CFF.readIndex(n,i,m),d.FDArray=[],h=0;h<m.length-1;h++){var y=e.CFF.readDict(n,i+m[h],i+m[h+1]);e.CFF._readFDict(n,y,v),d.FDArray.push(y)}i+=m[m.length-1],i=d.FDSelect,d.FDSelect=[];var M=n[i];if(i++,M!=3)throw M;var S=o.readUshort(n,i);for(i+=2,h=0;h<S+1;h++)d.FDSelect.push(o.readUshort(n,i),n[i+2]),i+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,v),d},e.CFF._readFDict=function(n,i,s){var o;for(var l in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(n,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=s[i[l]-426+35])},e.CFF.readSubrs=function(n,i,s){var o=e._bin,l=[];i=e.CFF.readIndex(n,i,l);var c,h=l.length;c=h<1240?107:h<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var u=0;u<l.length-1;u++)s.Subrs.push(o.readBytes(n,i+l[u],l[u+1]-l[u]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var s=0;s<n.charset.length;s++)if(n.charset[s]==i)return s;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,s){e._bin;var o=[".notdef"],l=n[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=n[i];i++;for(var h=0;h<c;h++)o.push(n[i+h]);return o},e.CFF.readCharset=function(n,i,s){var o=e._bin,l=[".notdef"],c=n[i];if(i++,c==0)for(var h=0;h<s;h++){var u=o.readUshort(n,i);i+=2,l.push(u)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){u=o.readUshort(n,i),i+=2;var f=0;for(c==1?(f=n[i],i++):(f=o.readUshort(n,i),i+=2),h=0;h<=f;h++)l.push(u),u++}}return l},e.CFF.readIndex=function(n,i,s){var o=e._bin,l=o.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var h=0;h<l;h++)s.push(n[i+h]);else if(c==2)for(h=0;h<l;h++)s.push(o.readUshort(n,i+2*h));else if(c==3)for(h=0;h<l;h++)s.push(16777215&o.readUint(n,i+3*h-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(n,i,s){var o=e._bin,l=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,u=null,f=null;l<=20&&(u=l,h=1),l==12&&(u=100*l+c,h=2),21<=l&&l<=27&&(u=l,h=1),l==28&&(f=o.readShort(n,i+1),h=3),29<=l&&l<=31&&(u=l,h=1),32<=l&&l<=246&&(f=l-139,h=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,h=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,h=2),l==255&&(f=o.readInt(n,i+1)/65535,h=5),s.val=f??"o"+u,s.size=h},e.CFF.readCharString=function(n,i,s){for(var o=i+s,l=e._bin,c=[];i<o;){var h=n[i],u=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,g=null;h<=20&&(d=h,f=1),h==12&&(d=100*h+u,f=2),h!=19&&h!=20||(d=h,f=2),21<=h&&h<=27&&(d=h,f=1),h==28&&(g=l.readShort(n,i+1),f=3),29<=h&&h<=31&&(d=h,f=1),32<=h&&h<=246&&(g=h-139,f=1),247<=h&&h<=250&&(g=256*(h-247)+u+108,f=2),251<=h&&h<=254&&(g=256*-(h-251)-u-108,f=2),h==255&&(g=l.readInt(n,i+1)/65535,f=5),c.push(g??"o"+d),i+=f}return c},e.CFF.readDict=function(n,i,s){for(var o=e._bin,l={},c=[];i<s;){var h=n[i],u=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,g=null;if(h==28&&(g=o.readShort(n,i+1),f=3),h==29&&(g=o.readInt(n,i+1),f=5),32<=h&&h<=246&&(g=h-139,f=1),247<=h&&h<=250&&(g=256*(h-247)+u+108,f=2),251<=h&&h<=254&&(g=256*-(h-251)-u-108,f=2),h==255)throw g=o.readInt(n,i+1)/65535,f=5,"unknown number";if(h==30){var v=[];for(f=1;;){var p=n[i+f];f++;var m=p>>4,y=15&p;if(m!=15&&v.push(m),y!=15&&v.push(y),y==15)break}for(var M="",S=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],P=0;P<v.length;P++)M+=S[v[P]];g=parseFloat(M)}h<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][h],f=1,h==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][u],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),i+=f}return l},e.cmap={},e.cmap.parse=function(n,i,s){n=new Uint8Array(n.buffer,i,s),i=0;var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2;var h=[];l.tables=[];for(var u=0;u<c;u++){var f=o.readUshort(n,i);i+=2;var d=o.readUshort(n,i);i+=2;var g=o.readUint(n,i);i+=4;var v="p"+f+"e"+d,p=h.indexOf(g);if(p==-1){var m;p=l.tables.length,h.push(g);var y=o.readUshort(n,g);y==0?m=e.cmap.parse0(n,g):y==4?m=e.cmap.parse4(n,g):y==6?m=e.cmap.parse6(n,g):y==12?m=e.cmap.parse12(n,g):console.debug("unknown format: "+y,f,d,g),l.tables.push(m)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=p}return l},e.cmap.parse0=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[i+c]);return o},e.cmap.parse4=function(n,i){var s=e._bin,o=i,l={};l.format=s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2;var h=s.readUshort(n,i);i+=2;var u=h/2;l.searchRange=s.readUshort(n,i),i+=2,l.entrySelector=s.readUshort(n,i),i+=2,l.rangeShift=s.readUshort(n,i),i+=2,l.endCount=s.readUshorts(n,i,u),i+=2*u,i+=2,l.startCount=s.readUshorts(n,i,u),i+=2*u,l.idDelta=[];for(var f=0;f<u;f++)l.idDelta.push(s.readShort(n,i)),i+=2;for(l.idRangeOffset=s.readUshorts(n,i,u),i+=2*u,l.glyphIdArray=[];i<o+c;)l.glyphIdArray.push(s.readUshort(n,i)),i+=2;return l},e.cmap.parse6=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,o.firstCode=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(n,i)),i+=2;return o},e.cmap.parse12=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,i+=2,s.readUint(n,i),i+=4,s.readUint(n,i),i+=4;var l=s.readUint(n,i);i+=4,o.groups=[];for(var c=0;c<l;c++){var h=i+12*c,u=s.readUint(n,h+0),f=s.readUint(n,h+4),d=s.readUint(n,h+8);o.groups.push([u,f,d])}return o},e.glyf={},e.glyf.parse=function(n,i,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,i){var s=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var h=0;h<c.noc;h++)c.endPts.push(s.readUshort(o,l)),l+=2;var u=s.readUshort(o,l);if(l+=2,o.length-l<u)return null;c.instructions=s.readBytes(o,l,u),l+=u;var f=c.endPts[c.noc-1]+1;for(c.flags=[],h=0;h<f;h++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var g=o[l];l++;for(var v=0;v<g;v++)c.flags.push(d),h++}}for(c.xs=[],h=0;h<f;h++){var p=(2&c.flags[h])!=0,m=(16&c.flags[h])!=0;p?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],h=0;h<f;h++)p=(4&c.flags[h])!=0,m=(32&c.flags[h])!=0,p?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var y=0,M=0;for(h=0;h<f;h++)y+=c.xs[h],M+=c.ys[h],c.xs[h]=y,c.ys[h]=M}else{var S;c.parts=[];do{S=s.readUshort(o,l),l+=2;var P={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(P),P.glyphIndex=s.readUshort(o,l),l+=2,1&S){var w=s.readShort(o,l);l+=2;var T=s.readShort(o,l);l+=2}else w=s.readInt8(o,l),l++,T=s.readInt8(o,l),l++;2&S?(P.m.tx=w,P.m.ty=T):(P.p1=w,P.p2=T),8&S?(P.m.a=P.m.d=s.readF2dot14(o,l),l+=2):64&S?(P.m.a=s.readF2dot14(o,l),l+=2,P.m.d=s.readF2dot14(o,l),l+=2):128&S&&(P.m.a=s.readF2dot14(o,l),l+=2,P.m.b=s.readF2dot14(o,l),l+=2,P.m.c=s.readF2dot14(o,l),l+=2,P.m.d=s.readF2dot14(o,l),l+=2)}while(32&S);if(256&S){var U=s.readUshort(o,l);for(l+=2,c.instr=[],h=0;h<U;h++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,i,s,o){var l=i;i+=4;var c=e._bin.readUshort(n,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GPOS.subt)},e.GPOS.subt=function(n,i,s,o){var l=e._bin,c=s,h={};if(h.fmt=l.readUshort(n,s),s+=2,i==1||i==2||i==3||i==7||i==8&&h.fmt<=2){var u=l.readUshort(n,s);s+=2,h.coverage=e._lctf.readCoverage(n,u+c)}if(i==1&&h.fmt==1){var f=l.readUshort(n,s);s+=2,f!=0&&(h.pos=e.GPOS.readValueRecord(n,s,f))}else if(i==2&&h.fmt>=1&&h.fmt<=2){f=l.readUshort(n,s),s+=2;var d=l.readUshort(n,s);s+=2;var g=e._lctf.numOfOnes(f),v=e._lctf.numOfOnes(d);if(h.fmt==1){h.pairsets=[];var p=l.readUshort(n,s);s+=2;for(var m=0;m<p;m++){var y=c+l.readUshort(n,s);s+=2;var M=l.readUshort(n,y);y+=2;for(var S=[],P=0;P<M;P++){var w=l.readUshort(n,y);y+=2,f!=0&&(C=e.GPOS.readValueRecord(n,y,f),y+=2*g),d!=0&&(I=e.GPOS.readValueRecord(n,y,d),y+=2*v),S.push({gid2:w,val1:C,val2:I})}h.pairsets.push(S)}}if(h.fmt==2){var T=l.readUshort(n,s);s+=2;var U=l.readUshort(n,s);s+=2;var E=l.readUshort(n,s);s+=2;var x=l.readUshort(n,s);for(s+=2,h.classDef1=e._lctf.readClassDef(n,c+T),h.classDef2=e._lctf.readClassDef(n,c+U),h.matrix=[],m=0;m<E;m++){var D=[];for(P=0;P<x;P++){var C=null,I=null;f!=0&&(C=e.GPOS.readValueRecord(n,s,f),s+=2*g),d!=0&&(I=e.GPOS.readValueRecord(n,s,d),s+=2*v),D.push({val1:C,val2:I})}h.matrix.push(D)}}}else if(i==4&&h.fmt==1)h.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),h.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),h.markClassCount=l.readUshort(n,s+4),h.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),h.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,h.markClassCount);else if(i==6&&h.fmt==1)h.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),h.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),h.markClassCount=l.readUshort(n,s+4),h.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),h.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,h.markClassCount);else{if(i==9&&h.fmt==1){var N=l.readUshort(n,s);s+=2;var G=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=N;else if(o.ltype!=N)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+G)}console.debug("unsupported GPOS table LookupType",i,"format",h.fmt)}return h},e.GPOS.readValueRecord=function(n,i,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(n,i):0),i+=1&s?2:0,l.push(2&s?o.readShort(n,i):0),i+=2&s?2:0,l.push(4&s?o.readShort(n,i):0),i+=4&s?2:0,l.push(8&s?o.readShort(n,i):0),i+=8&s?2:0,l},e.GPOS.readBaseArray=function(n,i,s){var o=e._bin,l=[],c=i,h=o.readUshort(n,i);i+=2;for(var u=0;u<h;u++){for(var f=[],d=0;d<s;d++)f.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,i))),i+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(n,i){var s=e._bin,o=[],l=i,c=s.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var u=e.GPOS.readAnchorRecord(n,s.readUshort(n,i+2)+l);u.markClass=s.readUshort(n,i),o.push(u),i+=4}return o},e.GPOS.readAnchorRecord=function(n,i){var s=e._bin,o={};return o.fmt=s.readUshort(n,i),o.x=s.readShort(n,i+2),o.y=s.readShort(n,i+4),o},e.GSUB={},e.GSUB.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GSUB.subt)},e.GSUB.subt=function(n,i,s,o){var l=e._bin,c=s,h={};if(h.fmt=l.readUshort(n,s),s+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&h.fmt<=2||i==6&&h.fmt<=2){var u=l.readUshort(n,s);s+=2,h.coverage=e._lctf.readCoverage(n,c+u)}if(i==1&&h.fmt>=1&&h.fmt<=2){if(h.fmt==1)h.delta=l.readShort(n,s),s+=2;else if(h.fmt==2){var f=l.readUshort(n,s);s+=2,h.newg=l.readUshorts(n,s,f),s+=2*h.newg.length}}else if(i==2&&h.fmt==1){f=l.readUshort(n,s),s+=2,h.seqs=[];for(var d=0;d<f;d++){var g=l.readUshort(n,s)+c;s+=2;var v=l.readUshort(n,g);h.seqs.push(l.readUshorts(n,g+2,v))}}else if(i==4)for(h.vals=[],f=l.readUshort(n,s),s+=2,d=0;d<f;d++){var p=l.readUshort(n,s);s+=2,h.vals.push(e.GSUB.readLigatureSet(n,c+p))}else if(i==5&&h.fmt==2){if(h.fmt==2){var m=l.readUshort(n,s);s+=2,h.cDef=e._lctf.readClassDef(n,c+m),h.scset=[];var y=l.readUshort(n,s);for(s+=2,d=0;d<y;d++){var M=l.readUshort(n,s);s+=2,h.scset.push(M==0?null:e.GSUB.readSubClassSet(n,c+M))}}}else if(i==6&&h.fmt==3){if(h.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,s),s+=2;for(var S=[],P=0;P<f;P++)S.push(e._lctf.readCoverage(n,c+l.readUshort(n,s+2*P)));s+=2*f,d==0&&(h.backCvg=S),d==1&&(h.inptCvg=S),d==2&&(h.ahedCvg=S)}f=l.readUshort(n,s),s+=2,h.lookupRec=e.GSUB.readSubstLookupRecords(n,s,f)}}else{if(i==7&&h.fmt==1){var w=l.readUshort(n,s);s+=2;var T=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=w;else if(o.ltype!=w)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+T)}console.debug("unsupported GSUB table LookupType",i,"format",h.fmt)}return h},e.GSUB.readSubClassSet=function(n,i){var s=e._bin.readUshort,o=i,l=[],c=s(n,i);i+=2;for(var h=0;h<c;h++){var u=s(n,i);i+=2,l.push(e.GSUB.readSubClassRule(n,o+u))}return l},e.GSUB.readSubClassRule=function(n,i){var s=e._bin.readUshort,o={},l=s(n,i),c=s(n,i+=2);i+=2,o.input=[];for(var h=0;h<l-1;h++)o.input.push(s(n,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),o},e.GSUB.readSubstLookupRecords=function(n,i,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(n,i),o(n,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var u=s.readUshort(n,i);i+=2,l.push(e.GSUB.readChainSubClassRule(n,o+u))}return l},e.GSUB.readChainSubClassRule=function(n,i){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var h=s.readUshort(n,i);i+=2,c==1&&h--,o[l[c]]=s.readUshorts(n,i,h),i+=2*o[l[c]].length}return h=s.readUshort(n,i),i+=2,o.subst=s.readUshorts(n,i,2*h),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var u=s.readUshort(n,i);i+=2,l.push(e.GSUB.readLigature(n,o+u))}return l},e.GSUB.readLigature=function(n,i){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(n,i)),i+=2;return o},e.head={},e.head.parse=function(n,i,s){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.fontRevision=o.readFixed(n,i),i+=4,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4,l.flags=o.readUshort(n,i),i+=2,l.unitsPerEm=o.readUshort(n,i),i+=2,l.created=o.readUint64(n,i),i+=8,l.modified=o.readUint64(n,i),i+=8,l.xMin=o.readShort(n,i),i+=2,l.yMin=o.readShort(n,i),i+=2,l.xMax=o.readShort(n,i),i+=2,l.yMax=o.readShort(n,i),i+=2,l.macStyle=o.readUshort(n,i),i+=2,l.lowestRecPPEM=o.readUshort(n,i),i+=2,l.fontDirectionHint=o.readShort(n,i),i+=2,l.indexToLocFormat=o.readShort(n,i),i+=2,l.glyphDataFormat=o.readShort(n,i),i+=2,l},e.hhea={},e.hhea.parse=function(n,i,s){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.ascender=o.readShort(n,i),i+=2,l.descender=o.readShort(n,i),i+=2,l.lineGap=o.readShort(n,i),i+=2,l.advanceWidthMax=o.readUshort(n,i),i+=2,l.minLeftSideBearing=o.readShort(n,i),i+=2,l.minRightSideBearing=o.readShort(n,i),i+=2,l.xMaxExtent=o.readShort(n,i),i+=2,l.caretSlopeRise=o.readShort(n,i),i+=2,l.caretSlopeRun=o.readShort(n,i),i+=2,l.caretOffset=o.readShort(n,i),i+=2,i+=8,l.metricDataFormat=o.readShort(n,i),i+=2,l.numberOfHMetrics=o.readUshort(n,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(n,i,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},h=0,u=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(h=l.readUshort(n,i),i+=2,u=l.readShort(n,i),i+=2),c.aWidth.push(h),c.lsBearing.push(u);return c},e.kern={},e.kern.parse=function(n,i,s,o){var l=e._bin,c=l.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,s,o);var h=l.readUshort(n,i);i+=2;for(var u={glyph1:[],rval:[]},f=0;f<h;f++){i+=2,s=l.readUshort(n,i),i+=2;var d=l.readUshort(n,i);i+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,u)}return u},e.kern.parseV1=function(n,i,s,o){var l=e._bin;l.readFixed(n,i),i+=4;var c=l.readUint(n,i);i+=4;for(var h={glyph1:[],rval:[]},u=0;u<c;u++){l.readUint(n,i),i+=4;var f=l.readUshort(n,i);i+=2,l.readUshort(n,i),i+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;i=e.kern.readFormat0(n,i,h)}return h},e.kern.readFormat0=function(n,i,s){var o=e._bin,l=-1,c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var h=0;h<c;h++){var u=o.readUshort(n,i);i+=2;var f=o.readUshort(n,i);i+=2;var d=o.readShort(n,i);i+=2,u!=l&&(s.glyph1.push(u),s.rval.push({glyph2:[],vals:[]}));var g=s.rval[s.rval.length-1];g.glyph2.push(f),g.vals.push(d),l=u}return i},e.loca={},e.loca.parse=function(n,i,s,o){var l=e._bin,c=[],h=o.head.indexToLocFormat,u=o.maxp.numGlyphs+1;if(h==0)for(var f=0;f<u;f++)c.push(l.readUshort(n,i+(f<<1))<<1);if(h==1)for(f=0;f<u;f++)c.push(l.readUint(n,i+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,s){var o=e._bin,l={},c=o.readUint(n,i);return i+=4,l.numGlyphs=o.readUshort(n,i),i+=2,c==65536&&(l.maxPoints=o.readUshort(n,i),i+=2,l.maxContours=o.readUshort(n,i),i+=2,l.maxCompositePoints=o.readUshort(n,i),i+=2,l.maxCompositeContours=o.readUshort(n,i),i+=2,l.maxZones=o.readUshort(n,i),i+=2,l.maxTwilightPoints=o.readUshort(n,i),i+=2,l.maxStorage=o.readUshort(n,i),i+=2,l.maxFunctionDefs=o.readUshort(n,i),i+=2,l.maxInstructionDefs=o.readUshort(n,i),i+=2,l.maxStackElements=o.readUshort(n,i),i+=2,l.maxSizeOfInstructions=o.readUshort(n,i),i+=2,l.maxComponentElements=o.readUshort(n,i),i+=2,l.maxComponentDepth=o.readUshort(n,i),i+=2),l},e.name={},e.name.parse=function(n,i,s){var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i);for(var h,u=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=i+=2,d=0;d<c;d++){var g=o.readUshort(n,i);i+=2;var v=o.readUshort(n,i);i+=2;var p=o.readUshort(n,i);i+=2;var m=o.readUshort(n,i);i+=2;var y=o.readUshort(n,i);i+=2;var M=o.readUshort(n,i);i+=2;var S,P=u[m],w=f+12*c+M;if(g==0)S=o.readUnicode(n,w,y/2);else if(g==3&&v==0)S=o.readUnicode(n,w,y/2);else if(v==0)S=o.readASCII(n,w,y);else if(v==1)S=o.readUnicode(n,w,y/2);else if(v==3)S=o.readUnicode(n,w,y/2);else{if(g!=1)throw"unknown encoding "+v+", platformID: "+g;S=o.readASCII(n,w,y),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var T="p"+g+","+p.toString(16);l[T]==null&&(l[T]={}),l[T][P!==void 0?P:m]=S,l[T]._lang=p}for(var U in l)if(l[U].postScriptName!=null&&l[U]._lang==1033)return l[U];for(var U in l)if(l[U].postScriptName!=null&&l[U]._lang==0)return l[U];for(var U in l)if(l[U].postScriptName!=null&&l[U]._lang==3084)return l[U];for(var U in l)if(l[U].postScriptName!=null)return l[U];for(var U in l){h=U;break}return console.debug("returning name table with languageID "+l[h]._lang),l[h]},e["OS/2"]={},e["OS/2"].parse=function(n,i,s){var o=e._bin.readUshort(n,i);i+=2;var l={};if(o==0)e["OS/2"].version0(n,i,l);else if(o==1)e["OS/2"].version1(n,i,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,i,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,i,l)}return l},e["OS/2"].version0=function(n,i,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(n,i),i+=2,s.usWeightClass=o.readUshort(n,i),i+=2,s.usWidthClass=o.readUshort(n,i),i+=2,s.fsType=o.readUshort(n,i),i+=2,s.ySubscriptXSize=o.readShort(n,i),i+=2,s.ySubscriptYSize=o.readShort(n,i),i+=2,s.ySubscriptXOffset=o.readShort(n,i),i+=2,s.ySubscriptYOffset=o.readShort(n,i),i+=2,s.ySuperscriptXSize=o.readShort(n,i),i+=2,s.ySuperscriptYSize=o.readShort(n,i),i+=2,s.ySuperscriptXOffset=o.readShort(n,i),i+=2,s.ySuperscriptYOffset=o.readShort(n,i),i+=2,s.yStrikeoutSize=o.readShort(n,i),i+=2,s.yStrikeoutPosition=o.readShort(n,i),i+=2,s.sFamilyClass=o.readShort(n,i),i+=2,s.panose=o.readBytes(n,i,10),i+=10,s.ulUnicodeRange1=o.readUint(n,i),i+=4,s.ulUnicodeRange2=o.readUint(n,i),i+=4,s.ulUnicodeRange3=o.readUint(n,i),i+=4,s.ulUnicodeRange4=o.readUint(n,i),i+=4,s.achVendID=[o.readInt8(n,i),o.readInt8(n,i+1),o.readInt8(n,i+2),o.readInt8(n,i+3)],i+=4,s.fsSelection=o.readUshort(n,i),i+=2,s.usFirstCharIndex=o.readUshort(n,i),i+=2,s.usLastCharIndex=o.readUshort(n,i),i+=2,s.sTypoAscender=o.readShort(n,i),i+=2,s.sTypoDescender=o.readShort(n,i),i+=2,s.sTypoLineGap=o.readShort(n,i),i+=2,s.usWinAscent=o.readUshort(n,i),i+=2,s.usWinDescent=o.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,s){var o=e._bin;return i=e["OS/2"].version0(n,i,s),s.ulCodePageRange1=o.readUint(n,i),i+=4,s.ulCodePageRange2=o.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,s){var o=e._bin;return i=e["OS/2"].version1(n,i,s),s.sxHeight=o.readShort(n,i),i+=2,s.sCapHeight=o.readShort(n,i),i+=2,s.usDefault=o.readUshort(n,i),i+=2,s.usBreak=o.readUshort(n,i),i+=2,s.usMaxContext=o.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,s){var o=e._bin;return i=e["OS/2"].version2(n,i,s),s.usLowerOpticalPointSize=o.readUshort(n,i),i+=2,s.usUpperOpticalPointSize=o.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,s){var o=e._bin,l={};return l.version=o.readFixed(n,i),i+=4,l.italicAngle=o.readFixed(n,i),i+=4,l.underlinePosition=o.readShort(n,i),i+=2,l.underlineThickness=o.readShort(n,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var s=n.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,h=0;h<l.endCount.length;h++)if(i<=l.endCount[h]){c=h;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(h=0;h<l.groups.length;h++){var u=l.groups[h];if(u[0]<=i&&i<=u[1])return u[2]+(i-u[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,i){var s={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var o=n.SVG.entries[i];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[i]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,h=n.CFF.Private;if(c.ROS){for(var u=0;c.FDSelect[u+2]<=i;)u+=2;h=c.FDArray[c.FDSelect[u+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],l,c,h,s)}else n.glyf&&e.U._drawGlyf(i,n,s);return s},e.U._drawGlyf=function(n,i,s){var o=i.glyf[n];o==null&&(o=i.glyf[n]=e.glyf._parseGlyf(i,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,i,s))},e.U._simpleGlyph=function(n,i){for(var s=0;s<n.noc;s++){for(var o=s==0?0:n.endPts[s-1]+1,l=n.endPts[s],c=o;c<=l;c++){var h=c==o?l:c-1,u=c==l?o:c+1,f=1&n.flags[c],d=1&n.flags[h],g=1&n.flags[u],v=n.xs[c],p=n.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(i,v,p);continue}e.U.P.moveTo(i,n.xs[h],n.ys[h])}else d?e.U.P.moveTo(i,n.xs[h],n.ys[h]):e.U.P.moveTo(i,(n.xs[h]+v)/2,(n.ys[h]+p)/2);f?d&&e.U.P.lineTo(i,v,p):g?e.U.P.qcurveTo(i,v,p,n.xs[u],n.ys[u]):e.U.P.qcurveTo(i,v,p,(v+n.xs[u])/2,(p+n.ys[u])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,s){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,i,l);for(var h=c.m,u=0;u<l.crds.length;u+=2){var f=l.crds[u],d=l.crds[u+1];s.crds.push(f*h.a+d*h.b+h.tx),s.crds.push(f*h.c+d*h.d+h.ty)}for(u=0;u<l.cmds.length;u++)s.cmds.push(l.cmds[u])}},e.U._getGlyphClass=function(n,i){var s=e._lctf.getInterval(i,n);return s==-1?0:i[s+2]},e.U._applySubs=function(n,i,s,o){for(var l=n.length-i-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var h,u=s.tabs[c];if(!u.coverage||(h=e._lctf.coverageIndex(u.coverage,n[i]))!=-1){if(s.ltype==1)n[i],u.fmt==1?n[i]=n[i]+u.delta:n[i]=u.newg[h];else if(s.ltype==4)for(var f=u.vals[h],d=0;d<f.length;d++){var g=f[d],v=g.chain.length;if(!(v>l)){for(var p=!0,m=0,y=0;y<v;y++){for(;n[i+m+(1+y)]==-1;)m++;g.chain[y]!=n[i+m+(1+y)]&&(p=!1)}if(p){for(n[i]=g.nglyph,y=0;y<v+m;y++)n[i+y+1]=-1;break}}}else if(s.ltype==5&&u.fmt==2)for(var M=e._lctf.getInterval(u.cDef,n[i]),S=u.cDef[M+2],P=u.scset[S],w=0;w<P.length;w++){var T=P[w],U=T.input;if(!(U.length>l)){for(p=!0,y=0;y<U.length;y++){var E=e._lctf.getInterval(u.cDef,n[i+1+y]);if(M==-1&&u.cDef[E+2]!=U[y]){p=!1;break}}if(p){var x=T.substLookupRecords;for(d=0;d<x.length;d+=2)x[d],x[d+1]}}}else if(s.ltype==6&&u.fmt==3){if(!e.U._glsCovered(n,u.backCvg,i-u.backCvg.length)||!e.U._glsCovered(n,u.inptCvg,i)||!e.U._glsCovered(n,u.ahedCvg,i+u.inptCvg.length))continue;var D=u.lookupRec;for(w=0;w<D.length;w+=2){M=D[w];var C=o[D[w+1]];e.U._applySubs(n,i+M,C,o)}}}}},e.U._glsCovered=function(n,i,s){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],n[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var h=i[c];if(h!=-1){for(var u=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,f=e.U.glyphToPath(n,h),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(s&&o.cmds.push(s),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);s&&o.cmds.push("X"),l+=n.hmtx.aWidth[h],c<i.length-1&&(l+=e.U.getPairAdjustment(n,h,u))}}return o},e.U.P={},e.U.P.moveTo=function(n,i,s){n.cmds.push("M"),n.crds.push(i,s)},e.U.P.lineTo=function(n,i,s){n.cmds.push("L"),n.crds.push(i,s)},e.U.P.curveTo=function(n,i,s,o,l,c,h){n.cmds.push("C"),n.crds.push(i,s,o,l,c,h)},e.U.P.qcurveTo=function(n,i,s,o,l){n.cmds.push("Q"),n.crds.push(i,s,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,s,o,l){for(var c=i.stack,h=i.nStems,u=i.haveWidth,f=i.width,d=i.open,g=0,v=i.x,p=i.y,m=0,y=0,M=0,S=0,P=0,w=0,T=0,U=0,E=0,x=0,D={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,D);var C=D.val;if(g+=D.size,C=="o1"||C=="o18")c.length%2!=0&&!u&&(f=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(C=="o3"||C=="o23")c.length%2!=0&&!u&&(f=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(C=="o4")c.length>1&&!u&&(f=c.shift()+o.nominalWidthX,u=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,v,p),d=!0;else if(C=="o5")for(;c.length>0;)v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p);else if(C=="o6"||C=="o7")for(var I=c.length,N=C=="o6",G=0;G<I;G++){var B=c.shift();N?v+=B:p+=B,N=!N,e.U.P.lineTo(l,v,p)}else if(C=="o8"||C=="o24"){I=c.length;for(var Q=0;Q+6<=I;)m=v+c.shift(),y=p+c.shift(),M=m+c.shift(),S=y+c.shift(),v=M+c.shift(),p=S+c.shift(),e.U.P.curveTo(l,m,y,M,S,v,p),Q+=6;C=="o24"&&(v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p))}else{if(C=="o11")break;if(C=="o1234"||C=="o1235"||C=="o1236"||C=="o1237")C=="o1234"&&(y=p,M=(m=v+c.shift())+c.shift(),x=S=y+c.shift(),w=S,U=p,v=(T=(P=(E=M+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,y,M,S,E,x),e.U.P.curveTo(l,P,w,T,U,v,p)),C=="o1235"&&(m=v+c.shift(),y=p+c.shift(),M=m+c.shift(),S=y+c.shift(),E=M+c.shift(),x=S+c.shift(),P=E+c.shift(),w=x+c.shift(),T=P+c.shift(),U=w+c.shift(),v=T+c.shift(),p=U+c.shift(),c.shift(),e.U.P.curveTo(l,m,y,M,S,E,x),e.U.P.curveTo(l,P,w,T,U,v,p)),C=="o1236"&&(m=v+c.shift(),y=p+c.shift(),M=m+c.shift(),x=S=y+c.shift(),w=S,T=(P=(E=M+c.shift())+c.shift())+c.shift(),U=w+c.shift(),v=T+c.shift(),e.U.P.curveTo(l,m,y,M,S,E,x),e.U.P.curveTo(l,P,w,T,U,v,p)),C=="o1237"&&(m=v+c.shift(),y=p+c.shift(),M=m+c.shift(),S=y+c.shift(),E=M+c.shift(),x=S+c.shift(),P=E+c.shift(),w=x+c.shift(),T=P+c.shift(),U=w+c.shift(),Math.abs(T-v)>Math.abs(U-p)?v=T+c.shift():p=U+c.shift(),e.U.P.curveTo(l,m,y,M,S,E,x),e.U.P.curveTo(l,P,w,T,U,v,p));else if(C=="o14"){if(c.length>0&&!u&&(f=c.shift()+s.nominalWidthX,u=!0),c.length==4){var Y=c.shift(),J=c.shift(),j=c.shift(),L=c.shift(),V=e.CFF.glyphBySE(s,j),ne=e.CFF.glyphBySE(s,L);e.U._drawCFF(s.CharStrings[V],i,s,o,l),i.x=Y,i.y=J,e.U._drawCFF(s.CharStrings[ne],i,s,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(C=="o19"||C=="o20")c.length%2!=0&&!u&&(f=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0,g+=h+7>>3;else if(C=="o21")c.length>2&&!u&&(f=c.shift()+o.nominalWidthX,u=!0),p+=c.pop(),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,p),d=!0;else if(C=="o22")c.length>1&&!u&&(f=c.shift()+o.nominalWidthX,u=!0),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,p),d=!0;else if(C=="o25"){for(;c.length>6;)v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p);m=v+c.shift(),y=p+c.shift(),M=m+c.shift(),S=y+c.shift(),v=M+c.shift(),p=S+c.shift(),e.U.P.curveTo(l,m,y,M,S,v,p)}else if(C=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)m=v,y=p+c.shift(),v=M=m+c.shift(),p=(S=y+c.shift())+c.shift(),e.U.P.curveTo(l,m,y,M,S,v,p);else if(C=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)y=p,M=(m=v+c.shift())+c.shift(),S=y+c.shift(),v=M+c.shift(),p=S,e.U.P.curveTo(l,m,y,M,S,v,p);else if(C=="o10"||C=="o29"){var F=C=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var O=c.pop(),te=F.Subrs[O+F.Bias];i.x=v,i.y=p,i.nStems=h,i.haveWidth=u,i.width=f,i.open=d,e.U._drawCFF(te,i,s,o,l),v=i.x,p=i.y,h=i.nStems,u=i.haveWidth,f=i.width,d=i.open}}else if(C=="o30"||C=="o31"){var X=c.length,re=(Q=0,C=="o31");for(Q+=X-(I=-3&X);Q<I;)re?(y=p,M=(m=v+c.shift())+c.shift(),p=(S=y+c.shift())+c.shift(),I-Q==5?(v=M+c.shift(),Q++):v=M,re=!1):(m=v,y=p+c.shift(),M=m+c.shift(),S=y+c.shift(),v=M+c.shift(),I-Q==5?(p=S+c.shift(),Q++):p=S,re=!0),e.U.P.curveTo(l,m,y,M,S,v,p),Q+=4}else{if((C+"").charAt(0)=="o")throw console.debug("Unknown operation: "+C,n),C;c.push(C)}}}i.x=v,i.y=p,i.nStems=h,i.haveWidth=u,i.width=f,i.open=d};var t=e,r={Typr:t};return a.Typr=t,a.default=r,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function Zg(){return function(a){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(C,I){for(var N=new t(31),G=0;G<31;++G)N[G]=I+=1<<C[G-1];var B=new r(N[30]);for(G=1;G<30;++G)for(var Q=N[G];Q<N[G+1];++Q)B[Q]=Q-N[G]<<5|G;return[N,B]},l=o(n,2),c=l[0],h=l[1];c[28]=258,h[258]=28;for(var u=o(i,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var v=function(C,I,N){for(var G=C.length,B=0,Q=new t(I);B<G;++B)++Q[C[B]-1];var Y,J=new t(I);for(B=0;B<I;++B)J[B]=J[B-1]+Q[B-1]<<1;{Y=new t(1<<I);var j=15-I;for(B=0;B<G;++B)if(C[B])for(var L=B<<4|C[B],V=I-C[B],ne=J[C[B]-1]++<<V,F=ne|(1<<V)-1;ne<=F;++ne)Y[f[ne]>>>j]=L}return Y},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var y=v(p,9),M=v(m,5),S=function(C){for(var I=C[0],N=1;N<C.length;++N)C[N]>I&&(I=C[N]);return I},P=function(C,I,N){var G=I/8|0;return(C[G]|C[G+1]<<8)>>(7&I)&N},w=function(C,I){var N=I/8|0;return(C[N]|C[N+1]<<8|C[N+2]<<16)>>(7&I)},T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],U=function(C,I,N){var G=new Error(I||T[C]);if(G.code=C,Error.captureStackTrace&&Error.captureStackTrace(G,U),!N)throw G;return G},E=function(C,I,N){var G=C.length;if(!G||N&&!N.l&&G<5)return I||new e(0);var B=!I||N,Q=!N||N.i;N||(N={}),I||(I=new e(3*G));var Y,J=function(_e){var De=I.length;if(_e>De){var He=new e(Math.max(2*De,_e));He.set(I),I=He}},j=N.f||0,L=N.p||0,V=N.b||0,ne=N.l,F=N.d,O=N.m,te=N.n,X=8*G;do{if(!ne){N.f=j=P(C,L,1);var re=P(C,L+1,3);if(L+=3,!re){var de=C[(R=((Y=L)/8|0)+(7&Y&&1)+4)-4]|C[R-3]<<8,Me=R+de;if(Me>G){Q&&U(0);break}B&&J(V+de),I.set(C.subarray(R,Me),V),N.b=V+=de,N.p=L=8*Me;continue}if(re==1)ne=y,F=M,O=9,te=5;else if(re==2){var me=P(C,L,31)+257,A=P(C,L+10,15)+4,Be=me+P(C,L+5,31)+1;L+=14;for(var we=new e(Be),Ae=new e(19),ge=0;ge<A;++ge)Ae[s[ge]]=P(C,L+3*ge,7);L+=3*A;var Oe=S(Ae),le=(1<<Oe)-1,ve=v(Ae,Oe);for(ge=0;ge<Be;){var R,_=ve[P(C,L,le)];if(L+=15&_,(R=_>>>4)<16)we[ge++]=R;else{var z=0,W=0;for(R==16?(W=3+P(C,L,3),L+=2,z=we[ge-1]):R==17?(W=3+P(C,L,7),L+=3):R==18&&(W=11+P(C,L,127),L+=7);W--;)we[ge++]=z}}var $=we.subarray(0,me),Z=we.subarray(me);O=S($),te=S(Z),ne=v($,O),F=v(Z,te)}else U(1);if(L>X){Q&&U(0);break}}B&&J(V+131072);for(var be=(1<<O)-1,oe=(1<<te)-1,ue=L;;ue=L){var Te=(z=ne[w(C,L)&be])>>>4;if((L+=15&z)>X){Q&&U(0);break}if(z||U(2),Te<256)I[V++]=Te;else{if(Te==256){ue=L,ne=null;break}var ce=Te-254;if(Te>264){var xe=n[ge=Te-257];ce=P(C,L,(1<<xe)-1)+c[ge],L+=xe}var Fe=F[w(C,L)&oe],ye=Fe>>>4;if(Fe||U(3),L+=15&Fe,Z=u[ye],ye>3&&(xe=i[ye],Z+=w(C,L)&(1<<xe)-1,L+=xe),L>X){Q&&U(0);break}B&&J(V+131072);for(var pe=V+ce;V<pe;V+=4)I[V]=I[V-Z],I[V+1]=I[V+1-Z],I[V+2]=I[V+2-Z],I[V+3]=I[V+3-Z];V=pe}}N.l=ne,N.p=ue,N.b=V,ne&&(j=1,N.m=O,N.d=F,N.n=te)}while(!j);return V==I.length?I:function(_e,De,He){(He==null||He>_e.length)&&(He=_e.length);var k=new(_e instanceof t?t:_e instanceof r?r:e)(He-De);return k.set(_e.subarray(De,He)),k}(I,0,V)},x=new e(0),D=typeof TextDecoder<"u"&&new TextDecoder;try{D.decode(x,{stream:!0})}catch{}return a.convert_streams=function(C){var I=new DataView(C),N=0;function G(){var me=I.getUint16(N);return N+=2,me}function B(){var me=I.getUint32(N);return N+=4,me}function Q(me){de.setUint16(Me,me),Me+=2}function Y(me){de.setUint32(Me,me),Me+=4}for(var J={signature:B(),flavor:B(),length:B(),numTables:G(),reserved:G(),totalSfntSize:B(),majorVersion:G(),minorVersion:G(),metaOffset:B(),metaLength:B(),metaOrigLength:B(),privOffset:B(),privLength:B()},j=0;Math.pow(2,j)<=J.numTables;)j++;j--;for(var L=16*Math.pow(2,j),V=16*J.numTables-L,ne=12,F=[],O=0;O<J.numTables;O++)F.push({tag:B(),offset:B(),compLength:B(),origLength:B(),origChecksum:B()}),ne+=16;var te,X=new Uint8Array(12+16*F.length+F.reduce(function(me,A){return me+A.origLength+4},0)),re=X.buffer,de=new DataView(re),Me=0;return Y(J.flavor),Q(J.numTables),Q(L),Q(j),Q(V),F.forEach(function(me){Y(me.tag),Y(me.origChecksum),Y(ne),Y(me.origLength),me.outOffset=ne,(ne+=me.origLength)%4!=0&&(ne+=4-ne%4)}),F.forEach(function(me){var A,Be=C.slice(me.offset,me.offset+me.compLength);if(me.compLength!=me.origLength){var we=new Uint8Array(me.origLength);A=new Uint8Array(Be,2),E(A,we)}else we=new Uint8Array(Be);X.set(we,me.outOffset);var Ae=0;(ne=me.outOffset+me.origLength)%4!=0&&(Ae=4-ne%4),X.set(new Uint8Array(Ae).buffer,me.outOffset+me.origLength),te=ne+Ae}),re.slice(0,te)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function Jg(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,s=4,o=8,l=16,c=32;let h;function u(T){if(!h){const U={R:i,L:n,D:s,C:l,U:c,T:o};h=new Map;for(let E in r){let x=0;r[E].split(",").forEach(D=>{let[C,I]=D.split("+");C=parseInt(C,36),I=I?parseInt(I,36):0,h.set(x+=C,U[E]);for(let N=I;N--;)h.set(++x,U[E])})}}return h.get(T)||c}const f=1,d=2,g=3,v=4,p=[null,"isol","init","fina","medi"];function m(T){const U=new Uint8Array(T.length);let E=c,x=f,D=-1;for(let C=0;C<T.length;C++){const I=T.codePointAt(C);let N=u(I)|0,G=f;N&o||(E&(n|s|l)?N&(i|s|l)?(G=g,(x===f||x===g)&&U[D]++):N&(n|c)&&(x===d||x===v)&&U[D]--:E&(i|c)&&(x===d||x===v)&&U[D]--,x=U[C]=G,E=N,D=C,I>65535&&C++)}return U}function y(T,U){const E=[];for(let D=0;D<U.length;D++){const C=U.codePointAt(D);C>65535&&D++,E.push(a.U.codeToGlyph(T,C))}const x=T.GSUB;if(x){const{lookupList:D,featureList:C}=x;let I;const N=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,G=[];C.forEach(B=>{if(N.test(B.tag))for(let Q=0;Q<B.tab.length;Q++){if(G[B.tab[Q]])continue;G[B.tab[Q]]=!0;const Y=D[B.tab[Q]],J=/^(isol|init|fina|medi)$/.test(B.tag);J&&!I&&(I=m(U));for(let j=0;j<E.length;j++)(!I||!J||p[I[j]]===B.tag)&&a.U._applySubs(E,j,Y,D)}})}return E}function M(T,U){const E=new Int16Array(U.length*3);let x=0;for(;x<U.length;x++){const N=U[x];if(N===-1)continue;E[x*3+2]=T.hmtx.aWidth[N];const G=T.GPOS;if(G){const B=G.lookupList;for(let Q=0;Q<B.length;Q++){const Y=B[Q];for(let J=0;J<Y.tabs.length;J++){const j=Y.tabs[J];if(Y.ltype===1){if(a._lctf.coverageIndex(j.coverage,N)!==-1&&j.pos){I(j.pos,x);break}}else if(Y.ltype===2){let L=null,V=D();if(V!==-1){const ne=a._lctf.coverageIndex(j.coverage,U[V]);if(ne!==-1){if(j.fmt===1){const F=j.pairsets[ne];for(let O=0;O<F.length;O++)F[O].gid2===N&&(L=F[O])}else if(j.fmt===2){const F=a.U._getGlyphClass(U[V],j.classDef1),O=a.U._getGlyphClass(N,j.classDef2);L=j.matrix[F][O]}if(L){L.val1&&I(L.val1,V),L.val2&&I(L.val2,x);break}}}}else if(Y.ltype===4){const L=a._lctf.coverageIndex(j.markCoverage,N);if(L!==-1){const V=D(C),ne=V===-1?-1:a._lctf.coverageIndex(j.baseCoverage,U[V]);if(ne!==-1){const F=j.markArray[L],O=j.baseArray[ne][F.markClass];E[x*3]=O.x-F.x+E[V*3]-E[V*3+2],E[x*3+1]=O.y-F.y+E[V*3+1];break}}}else if(Y.ltype===6){const L=a._lctf.coverageIndex(j.mark1Coverage,N);if(L!==-1){const V=D();if(V!==-1){const ne=U[V];if(S(T,ne)===3){const F=a._lctf.coverageIndex(j.mark2Coverage,ne);if(F!==-1){const O=j.mark1Array[L],te=j.mark2Array[F][O.markClass];E[x*3]=te.x-O.x+E[V*3]-E[V*3+2],E[x*3+1]=te.y-O.y+E[V*3+1];break}}}}}}}}else if(T.kern&&!T.cff){const B=D();if(B!==-1){const Q=T.kern.glyph1.indexOf(U[B]);if(Q!==-1){const Y=T.kern.rval[Q].glyph2.indexOf(N);Y!==-1&&(E[B*3+2]+=T.kern.rval[Q].vals[Y])}}}}return E;function D(N){for(let G=x-1;G>=0;G--)if(U[G]!==-1&&(!N||N(U[G])))return G;return-1}function C(N){return S(T,N)===1}function I(N,G){for(let B=0;B<3;B++)E[G*3+B]+=N[B]||0}}function S(T,U){const E=T.GDEF&&T.GDEF.glyphClassDef;return E?a.U._getGlyphClass(U,E):0}function P(...T){for(let U=0;U<T.length;U++)if(typeof T[U]=="number")return T[U]}function w(T){const U=Object.create(null),E=T["OS/2"],x=T.hhea,D=T.head.unitsPerEm,C=P(E&&E.sTypoAscender,x&&x.ascender,D),I={unitsPerEm:D,ascender:C,descender:P(E&&E.sTypoDescender,x&&x.descender,0),capHeight:P(E&&E.sCapHeight,C),xHeight:P(E&&E.sxHeight,C),lineGap:P(E&&E.sTypoLineGap,x&&x.lineGap),supportsCodePoint(N){return a.U.codeToGlyph(T,N)>0},forEachGlyph(N,G,B,Q){let Y=0;const J=1/I.unitsPerEm*G,j=y(T,N);let L=0;const V=M(T,j);return j.forEach((ne,F)=>{if(ne!==-1){let O=U[ne];if(!O){const{cmds:te,crds:X}=a.U.glyphToPath(T,ne);let re="",de=0;for(let we=0,Ae=te.length;we<Ae;we++){const ge=t[te[we]];re+=te[we];for(let Oe=1;Oe<=ge;Oe++)re+=(Oe>1?",":"")+X[de++]}let Me,me,A,Be;if(X.length){Me=me=1/0,A=Be=-1/0;for(let we=0,Ae=X.length;we<Ae;we+=2){let ge=X[we],Oe=X[we+1];ge<Me&&(Me=ge),Oe<me&&(me=Oe),ge>A&&(A=ge),Oe>Be&&(Be=Oe)}}else Me=A=me=Be=0;O=U[ne]={index:ne,advanceWidth:T.hmtx.aWidth[ne],xMin:Me,yMin:me,xMax:A,yMax:Be,path:re}}Q.call(null,O,Y+V[F*3]*J,V[F*3+1]*J,L),Y+=V[F*3+2]*J,B&&(Y+=B*G)}L+=N.codePointAt(L)>65535?2:1}),Y}};return I}return function(U){const E=new Uint8Array(U,0,4),x=a._bin.readASCII(E,0,4);if(x==="wOFF")U=e(U);else if(x==="wOF2")throw new Error("woff2 fonts not supported");return w(a.parse(U)[0])}}const Qg=zi({name:"Typr Font Parser",dependencies:[Kg,Zg,Jg],init(a,e,t){const r=a(),n=e();return t(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function $g(){return function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(M){var S=M>>5;this.buckets.set(S,(this.buckets.get(S)||0)|1<<(31&M))},e.prototype.has=function(M){var S=this.buckets.get(M>>5);return S!==void 0&&(S&1<<(31&M))!=0},e.prototype.serialize=function(){var M=[];return this.buckets.forEach(function(S,P){M.push((+P).toString(36)+":"+S.toString(36))}),M.join(",")},e.prototype.deserialize=function(M){var S=this;this.buckets.clear(),M.split(",").forEach(function(P){var w=P.split(":");S.buckets.set(parseInt(w[0],36),parseInt(w[1],36))})};var t=Math.pow(2,8),r=t-1,n=~r;function i(M){var S=function(w){return w&n}(M).toString(16),P=function(w){return(w&n)+t-1}(M).toString(16);return"codepoint-index/plane"+(M>>16)+"/"+S+"-"+P+".json"}function s(M,S){var P=M&r,w=S.codePointAt(P/6|0);return((w=(w||48)-48)&1<<P%6)!=0}function o(M,S){var P;(P=M,P.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(w){return w.split("-").map(function(T){return parseInt(T.trim(),16)})})).forEach(function(w){var T=w[0],U=w[1];U===void 0&&(U=T),S(T,U)})}function l(M,S){o(M,function(P,w){for(var T=P;T<=w;T++)S(T)})}var c={},h={},u=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(M){var S=u.get(M);return S||(S=new e,l(M.ranges,function(P){return S.add(P)}),u.set(M,S)),S}var g,v=new Map;function p(M,S,P){return M[S]?S:M[P]?P:function(w){for(var T in w)return T}(M)}function m(M,S){var P=S;if(!M.includes(P)){P=1/0;for(var w=0;w<M.length;w++)Math.abs(M[w]-S)<Math.abs(P-S)&&(P=M[w])}return P}function y(M){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(S){g.add(S)})),g.has(M)}return a.CodePointSet=e,a.clearCache=function(){c={},h={}},a.getFontsForString=function(M,S){S===void 0&&(S={});var P,w=S.lang;w===void 0&&(w=new RegExp("\\p{Script=Hangul}","u").test(P=M)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(P)?"ja":"en");var T=S.category;T===void 0&&(T="sans-serif");var U=S.style;U===void 0&&(U="normal");var E=S.weight;E===void 0&&(E=400);var x=(S.dataUrl||f).replace(/\/$/g,""),D=new Map,C=new Uint8Array(M.length),I={},N={},G=new Array(M.length),B=new Map,Q=!1;function Y(L){var V=v.get(L);return V||(V=fetch(x+"/"+L).then(function(ne){if(!ne.ok)throw new Error(ne.statusText);return ne.json().then(function(F){if(!Array.isArray(F)||F[0]!==1)throw new Error("Incorrect schema version; need 1, got "+F[0]);return F[1]})}).catch(function(ne){if(x!==f)return Q||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+x+'", trying default CDN. '+ne.message),Q=!0),x=f,v.delete(L),Y(L);throw ne}),v.set(L,V)),V}for(var J=function(L){var V=M.codePointAt(L),ne=i(V);G[L]=ne,c[ne]||B.has(ne)||B.set(ne,Y(ne).then(function(F){c[ne]=F})),V>65535&&(L++,j=L)},j=0;j<M.length;j++)J(j);return Promise.all(B.values()).then(function(){B.clear();for(var L=function(ne){var F=M.codePointAt(ne),O=null,te=c[G[ne]],X=void 0;for(var re in te){var de=N[re];if(de===void 0&&(de=N[re]=new RegExp(re).test(w||"en")),de){for(var Me in X=re,te[re])if(s(F,te[re][Me])){O=Me;break}break}}if(!O){e:for(var me in te)if(me!==X){for(var A in te[me])if(s(F,te[me][A])){O=A;break e}}}O||(console.debug("No font coverage for U+"+F.toString(16)),O="latin"),G[ne]=O,h[O]||B.has(O)||B.set(O,Y("font-meta/"+O+".json").then(function(Be){h[O]=Be})),F>65535&&(ne++,V=ne)},V=0;V<M.length;V++)L(V);return Promise.all(B.values())}).then(function(){for(var L,V=null,ne=0;ne<M.length;ne++){var F=M.codePointAt(ne);if(V&&(y(F)||d(V).has(F)))C[ne]=C[ne-1];else{V=h[G[ne]];var O=I[V.id];if(!O){var te=V.typeforms,X=p(te,T,"sans-serif"),re=p(te[X],U,"normal"),de=m((L=te[X])===null||L===void 0?void 0:L[re],E);O=I[V.id]=x+"/font-files/"+V.id+"/"+X+"."+re+"."+de+".woff"}var Me=D.get(O);Me==null&&(Me=D.size,D.set(O,Me)),C[ne]=Me}F>65535&&(ne++,C[ne]=C[ne-1])}return{fontUrls:Array.from(D.keys()),chars:C}})},Object.defineProperty(a,"__esModule",{value:!0}),a}({})}function e_(a,e){const t=Object.create(null),r=Object.create(null);function n(s,o){const l=c=>{console.error(`Failure loading font ${s}`,c)};try{const c=new XMLHttpRequest;c.open("get",s,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const h=a(c.response);h.src=s,o(h)}catch(h){l(h)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(s,o){let l=t[s];l?o(l):r[s]?r[s].push(o):(r[s]=[o],n(s,c=>{c.src=s,t[s]=c,r[s].forEach(h=>h(c)),delete r[s]}))}return function(s,o,{lang:l,fonts:c=[],style:h="normal",weight:u="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(s.length),g=[];s.length||y();const v=new Map,p=[];if(h!=="italic"&&(h="normal"),typeof u!="number"&&(u=u==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(S=>!S.lang||S.lang.test(l)).reverse(),c.length){let T=0;(function U(E=0){for(let x=E,D=s.length;x<D;x++){const C=s.codePointAt(x);if(T===1&&g[d[x-1]].supportsCodePoint(C)||/\s/.test(s[x]))d[x]=d[x-1],T===2&&(p[p.length-1][1]=x);else for(let I=d[x],N=c.length;I<=N;I++)if(I===N){const G=T===2?p[p.length-1]:p[p.length]=[x,x];G[1]=x,T=2}else{d[x]=I;const{src:G,unicodeRange:B}=c[I];if(!B||M(C,B)){const Q=t[G];if(!Q){i(G,()=>{U(x)});return}if(Q.supportsCodePoint(C)){let Y=v.get(Q);typeof Y!="number"&&(Y=g.length,g.push(Q),v.set(Q,Y)),d[x]=Y,T=1;break}}}C>65535&&x+1<D&&(d[x+1]=d[x],x++,T===2&&(p[p.length-1][1]=x))}m()})()}else p.push([0,s.length-1]),m();function m(){if(p.length){const S=p.map(P=>s.substring(P[0],P[1]+1)).join(`
`);e.getFontsForString(S,{lang:l||void 0,style:h,weight:u,dataUrl:f}).then(({fontUrls:P,chars:w})=>{const T=g.length;let U=0;p.forEach(x=>{for(let D=0,C=x[1]-x[0];D<=C;D++)d[x[0]+D]=w[U++]+T;U++});let E=0;P.forEach((x,D)=>{i(x,C=>{g[D+T]=C,++E===P.length&&y()})})})}else y()}function y(){o({chars:d,fonts:g})}function M(S,P){for(let w=0;w<P.length;w++){const[T,U=T]=P[w];if(T<=S&&S<=U)return!0}return!1}}}const t_=zi({name:"FontResolver",dependencies:[e_,Qg,$g],init(a,e,t){return a(e,t())}});function n_(a,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:g,lang:v,fonts:p,style:m,weight:y,preResolvedFonts:M,unicodeFontsURL:S},P){const w=({chars:T,fonts:U})=>{let E,x;const D=[];for(let C=0;C<T.length;C++)T[C]!==x?(x=T[C],D.push(E={start:C,end:C,fontObj:U[T[C]]})):E.end=C;P(D)};M?w(M):a(g,w,{lang:v,fonts:p,style:m,weight:y,unicodeFontsURL:S})}function o({text:g="",font:v,lang:p,sdfGlyphSize:m=64,fontSize:y=400,fontWeight:M=1,fontStyle:S="normal",letterSpacing:P=0,lineHeight:w="normal",maxWidth:T=1/0,direction:U,textAlign:E="left",textIndent:x=0,whiteSpace:D="normal",overflowWrap:C="normal",anchorX:I=0,anchorY:N=0,metricsOnly:G=!1,unicodeFontsURL:B,preResolvedFonts:Q=null,includeCaretPositions:Y=!1,chunkedBoundsSize:J=8192,colorRanges:j=null},L){const V=u(),ne={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,P=+P,T=+T,w=w||"normal",x=+x,s({text:g,lang:p,style:S,weight:M,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:B,preResolvedFonts:Q},F=>{ne.fontLoad=u()-V;const O=isFinite(T);let te=null,X=null,re=null,de=null,Me=null,me=null,A=null,Be=null,we=0,Ae=0,ge=D!=="nowrap";const Oe=new Map,le=u();let ve=x,R=0,_=new f;const z=[_];F.forEach(oe=>{const{fontObj:ue}=oe,{ascender:Te,descender:ce,unitsPerEm:xe,lineGap:Fe,capHeight:ye,xHeight:pe}=ue;let _e=Oe.get(ue);if(!_e){const ee=y/xe,se=w==="normal"?(Te-ce+Fe)*ee:w*y,Ee=(se-(Te-ce)*ee)/2,Re=Math.min(se,(Te-ce)*ee),Le=(Te+ce)/2*ee+Re/2;_e={index:Oe.size,src:ue.src,fontObj:ue,fontSizeMult:ee,unitsPerEm:xe,ascender:Te*ee,descender:ce*ee,capHeight:ye*ee,xHeight:pe*ee,lineHeight:se,baseline:-Ee-Te*ee,caretTop:Le,caretBottom:Le-Re},Oe.set(ue,_e)}const{fontSizeMult:De}=_e,He=g.slice(oe.start,oe.end+1);let k,fe;ue.forEachGlyph(He,y,P,(ee,se,Ee,Re)=>{se+=R,Re+=oe.start,k=se,fe=ee;const Le=g.charAt(Re),Xe=ee.advanceWidth*De,We=_.count;let Ue;if("isEmpty"in ee||(ee.isWhitespace=!!Le&&new RegExp(n).test(Le),ee.canBreakAfter=!!Le&&i.test(Le),ee.isEmpty=ee.xMin===ee.xMax||ee.yMin===ee.yMax||r.test(Le)),!ee.isWhitespace&&!ee.isEmpty&&Ae++,ge&&O&&!ee.isWhitespace&&se+Xe+ve>T&&We){if(_.glyphAt(We-1).glyphObj.canBreakAfter)Ue=new f,ve=-se;else for(let rt=We;rt--;)if(rt===0&&C==="break-word"){Ue=new f,ve=-se;break}else if(_.glyphAt(rt).glyphObj.canBreakAfter){Ue=_.splitAt(rt+1);const ut=Ue.glyphAt(0).x;ve-=ut;for(let tt=Ue.count;tt--;)Ue.glyphAt(tt).x-=ut;break}Ue&&(_.isSoftWrapped=!0,_=Ue,z.push(_),we=T)}let Je=_.glyphAt(_.count);Je.glyphObj=ee,Je.x=se+ve,Je.y=Ee,Je.width=Xe,Je.charIndex=Re,Je.fontData=_e,Le===`
`&&(_=new f,z.push(_),ve=-(se+Xe+P*y)+x)}),R=k+fe.advanceWidth*De+P*y});let W=0;z.forEach(oe=>{let ue=!0;for(let Te=oe.count;Te--;){const ce=oe.glyphAt(Te);ue&&!ce.glyphObj.isWhitespace&&(oe.width=ce.x+ce.width,oe.width>we&&(we=oe.width),ue=!1);let{lineHeight:xe,capHeight:Fe,xHeight:ye,baseline:pe}=ce.fontData;xe>oe.lineHeight&&(oe.lineHeight=xe);const _e=pe-oe.baseline;_e<0&&(oe.baseline+=_e,oe.cap+=_e,oe.ex+=_e),oe.cap=Math.max(oe.cap,oe.baseline+Fe),oe.ex=Math.max(oe.ex,oe.baseline+ye)}oe.baseline-=W,oe.cap-=W,oe.ex-=W,W+=oe.lineHeight});let $=0,Z=0;if(I&&(typeof I=="number"?$=-I:typeof I=="string"&&($=-we*(I==="left"?0:I==="center"?.5:I==="right"?1:c(I)))),N&&(typeof N=="number"?Z=-N:typeof N=="string"&&(Z=N==="top"?0:N==="top-baseline"?-z[0].baseline:N==="top-cap"?-z[0].cap:N==="top-ex"?-z[0].ex:N==="middle"?W/2:N==="bottom"?W:N==="bottom-baseline"?-z[z.length-1].baseline:c(N)*W)),!G){const oe=e.getEmbeddingLevels(g,U);te=new Uint16Array(Ae),X=new Uint8Array(Ae),re=new Float32Array(Ae*2),de={},A=[1/0,1/0,-1/0,-1/0],Be=[],Y&&(me=new Float32Array(g.length*4)),j&&(Me=new Uint8Array(Ae*3));let ue=0,Te=-1,ce=-1,xe,Fe;if(z.forEach((ye,pe)=>{let{count:_e,width:De}=ye;if(_e>0){let He=0;for(let Re=_e;Re--&&ye.glyphAt(Re).glyphObj.isWhitespace;)He++;let k=0,fe=0;if(E==="center")k=(we-De)/2;else if(E==="right")k=we-De;else if(E==="justify"&&ye.isSoftWrapped){let Re=0;for(let Le=_e-He;Le--;)ye.glyphAt(Le).glyphObj.isWhitespace&&Re++;fe=(we-De)/Re}if(fe||k){let Re=0;for(let Le=0;Le<_e;Le++){let Xe=ye.glyphAt(Le);const We=Xe.glyphObj;Xe.x+=k+Re,fe!==0&&We.isWhitespace&&Le<_e-He&&(Re+=fe,Xe.width+=fe)}}const ee=e.getReorderSegments(g,oe,ye.glyphAt(0).charIndex,ye.glyphAt(ye.count-1).charIndex);for(let Re=0;Re<ee.length;Re++){const[Le,Xe]=ee[Re];let We=1/0,Ue=-1/0;for(let Je=0;Je<_e;Je++)if(ye.glyphAt(Je).charIndex>=Le){let rt=Je,ut=Je;for(;ut<_e;ut++){let tt=ye.glyphAt(ut);if(tt.charIndex>Xe)break;ut<_e-He&&(We=Math.min(We,tt.x),Ue=Math.max(Ue,tt.x+tt.width))}for(let tt=rt;tt<ut;tt++){const At=ye.glyphAt(tt);At.x=Ue-(At.x+At.width-We)}break}}let se;const Ee=Re=>se=Re;for(let Re=0;Re<_e;Re++){const Le=ye.glyphAt(Re);se=Le.glyphObj;const Xe=se.index,We=oe.levels[Le.charIndex]&1;if(We){const Ue=e.getMirroredCharacter(g[Le.charIndex]);Ue&&Le.fontData.fontObj.forEachGlyph(Ue,0,0,Ee)}if(Y){const{charIndex:Ue,fontData:Je}=Le,rt=Le.x+$,ut=Le.x+Le.width+$;me[Ue*4]=We?ut:rt,me[Ue*4+1]=We?rt:ut,me[Ue*4+2]=ye.baseline+Je.caretBottom+Z,me[Ue*4+3]=ye.baseline+Je.caretTop+Z;const tt=Ue-Te;tt>1&&h(me,Te,tt),Te=Ue}if(j){const{charIndex:Ue}=Le;for(;Ue>ce;)ce++,j.hasOwnProperty(ce)&&(Fe=j[ce])}if(!se.isWhitespace&&!se.isEmpty){const Ue=ue++,{fontSizeMult:Je,src:rt,index:ut}=Le.fontData,tt=de[rt]||(de[rt]={});tt[Xe]||(tt[Xe]={path:se.path,pathBounds:[se.xMin,se.yMin,se.xMax,se.yMax]});const At=Le.x+$,jt=Le.y+ye.baseline+Z;re[Ue*2]=At,re[Ue*2+1]=jt;const Vt=At+se.xMin*Je,Nt=jt+se.yMin*Je,rn=At+se.xMax*Je,Ut=jt+se.yMax*Je;Vt<A[0]&&(A[0]=Vt),Nt<A[1]&&(A[1]=Nt),rn>A[2]&&(A[2]=rn),Ut>A[3]&&(A[3]=Ut),Ue%J===0&&(xe={start:Ue,end:Ue,rect:[1/0,1/0,-1/0,-1/0]},Be.push(xe)),xe.end++;const gt=xe.rect;if(Vt<gt[0]&&(gt[0]=Vt),Nt<gt[1]&&(gt[1]=Nt),rn>gt[2]&&(gt[2]=rn),Ut>gt[3]&&(gt[3]=Ut),te[Ue]=Xe,X[Ue]=ut,j){const an=Ue*3;Me[an]=Fe>>16&255,Me[an+1]=Fe>>8&255,Me[an+2]=Fe&255}}}}}),me){const ye=g.length-Te;ye>1&&h(me,Te,ye)}}const be=[];Oe.forEach(({index:oe,src:ue,unitsPerEm:Te,ascender:ce,descender:xe,lineHeight:Fe,capHeight:ye,xHeight:pe})=>{be[oe]={src:ue,unitsPerEm:Te,ascender:ce,descender:xe,lineHeight:Fe,capHeight:ye,xHeight:pe}}),ne.typesetting=u()-le,L({glyphIds:te,glyphFontIndices:X,glyphPositions:re,glyphData:de,fontData:be,caretPositions:me,glyphColors:Me,chunkedBounds:Be,fontSize:y,topBaseline:Z+z[0].baseline,blockBounds:[$,Z-W,$+we,Z],visibleBounds:A,timings:ne})})}function l(g,v){o({...g,metricsOnly:!0},p=>{const[m,y,M,S]=p.blockBounds;v({width:M-m,height:S-y})})}function c(g){let v=g.match(/^([\d.]+)%$/),p=v?parseFloat(v[1]):NaN;return isNaN(p)?0:p/100}function h(g,v,p){const m=g[v*4],y=g[v*4+1],M=g[v*4+2],S=g[v*4+3],P=(y-m)/p;for(let w=0;w<p;w++){const T=(v+w)*4;g[T]=m+P*w,g[T+1]=m+P*(w+1),g[T+2]=M,g[T+3]=S}}function u(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let v=f.flyweight;return v.data=this.data,v.index=g,v},splitAt(g){let v=new f;return v.data=this.data.splice(g*d.length),v}},f.flyweight=d.reduce((g,v,p,m)=>(Object.defineProperty(g,v,{get(){return this.data[this.index*d.length+p]},set(y){this.data[this.index*d.length+p]=y}}),g),{data:null,index:0}),{typeset:o,measure:l}}const Qn=()=>(self.performance||Date).now(),fa=Rc();let Ll;function i_(a,e,t,r,n,i,s,o,l,c,h=!0){return h?a_(a,e,t,r,n,i,s,o,l,c).then(null,u=>(Ll||(console.warn("WebGL SDF generation failed, falling back to JS",u),Ll=!0),Fl(a,e,t,r,n,i,s,o,l,c))):Fl(a,e,t,r,n,i,s,o,l,c)}const ta=[],r_=5;let Hs=0;function Pc(){const a=Qn();for(;ta.length&&Qn()-a<r_;)ta.shift()();Hs=ta.length?setTimeout(Pc,0):0}const a_=(...a)=>new Promise((e,t)=>{ta.push(()=>{const r=Qn();try{fa.webgl.generateIntoCanvas(...a),e({timing:Qn()-r})}catch(n){t(n)}}),Hs||(Hs=setTimeout(Pc,0))}),s_=4,o_=2e3,Il={};let l_=0;function Fl(a,e,t,r,n,i,s,o,l,c){const h="TroikaTextSDFGenerator_JS_"+l_++%s_;let u=Il[h];return u||(u=Il[h]={workerModule:zi({name:h,workerId:h,dependencies:[Rc,Qn],init(f,d){const g=f().javascript.generate;return function(...v){const p=d();return{textureData:g(...v),timing:d()-p}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),u.requests++,clearTimeout(u.idleTimer),u.workerModule(a,e,t,r,n,i).then(({textureData:f,timing:d})=>{const g=Qn(),v=new Uint8Array(f.length*4);for(let p=0;p<f.length;p++)v[p*4+c]=f[p];return fa.webglUtils.renderImageData(s,v,o,l,a,e,1<<3-c),d+=Qn()-g,--u.requests===0&&(u.idleTimer=setTimeout(()=>{kg(h)},o_)),{timing:d}})}function c_(a){a._warm||(fa.webgl.isSupported(a),a._warm=!0)}const h_=fa.webglUtils.resizeWebGLCanvasWithoutClearing,bi={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},u_=new qe;function Ei(){return(self.performance||Date).now()}const Nl=Object.create(null);function f_(a,e){a=p_({},a);const t=Ei(),{defaultFontURL:r}=bi,n=[];if(r&&n.push({label:"default",src:Ol(r)}),a.font&&n.push({label:"user",src:Ol(a.font)}),a.font=n,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||bi.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||bi.unicodeFontsURL,a.colorRanges!=null){let f={};for(let d in a.colorRanges)if(a.colorRanges.hasOwnProperty(d)){let g=a.colorRanges[d];typeof g!="number"&&(g=u_.set(g).getHex()),f[d]=g}a.colorRanges=f}Object.freeze(a);const{textureWidth:i,sdfExponent:s}=bi,{sdfGlyphSize:o}=a,l=i/o*4;let c=Nl[o];if(!c){const f=document.createElement("canvas");f.width=i,f.height=o*256/l,c=Nl[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:f,sdfTexture:new Tt(f,void 0,void 0,void 0,Gt,Gt),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,d_(c)}const{sdfTexture:h,sdfCanvas:u}=c;g_(a).then(f=>{const{glyphIds:d,glyphFontIndices:g,fontData:v,glyphPositions:p,fontSize:m,timings:y}=f,M=[],S=new Float32Array(d.length*4);let P=0,w=0;const T=Ei(),U=v.map(I=>{let N=c.glyphsByFont.get(I.src);return N||c.glyphsByFont.set(I.src,N=new Map),N});d.forEach((I,N)=>{const G=g[N],{src:B,unitsPerEm:Q}=v[G];let Y=U[G].get(I);if(!Y){const{path:ne,pathBounds:F}=f.glyphData[B][I],O=Math.max(F[2]-F[0],F[3]-F[1])/o*(bi.sdfMargin*o+.5),te=c.glyphCount++,X=[F[0]-O,F[1]-O,F[2]+O,F[3]+O];U[G].set(I,Y={path:ne,atlasIndex:te,sdfViewBox:X}),M.push(Y)}const{sdfViewBox:J}=Y,j=p[w++],L=p[w++],V=m/Q;S[P++]=j+J[0]*V,S[P++]=L+J[1]*V,S[P++]=j+J[2]*V,S[P++]=L+J[3]*V,d[N]=Y.atlasIndex}),y.quads=(y.quads||0)+(Ei()-T);const E=Ei();y.sdf={};const x=u.height,D=Math.ceil(c.glyphCount/l),C=Math.pow(2,Math.ceil(Math.log2(D*o)));C>x&&(console.info(`Increasing SDF texture size ${x}->${C}`),h_(u,i,C),h.dispose()),Promise.all(M.map(I=>Uc(I,c,a.gpuAccelerateSDF).then(({timing:N})=>{y.sdf[I.atlasIndex]=N}))).then(()=>{M.length&&!c.contextLost&&(Dc(c),h.needsUpdate=!0),y.sdfTotal=Ei()-E,y.total=Ei()-t,e(Object.freeze({parameters:a,sdfTexture:h,sdfGlyphSize:o,sdfExponent:s,glyphBounds:S,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{c.contextLost||c_(u)})}function Uc({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},s){if(i)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=bi,c=Math.max(t[2]-t[0],t[3]-t[1]),h=Math.floor(e/4),u=h%(o/r)*r,f=Math.floor(h/(o/r))*r,d=e%4;return i_(r,r,a,t,c,l,n,u,f,d,s)}function d_(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const r=[];a.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(Uc(i,a,!0))})}),Promise.all(r).then(()=>{Dc(a),a.sdfTexture.needsUpdate=!0})})}function p_(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let Yr;function Ol(a){return Yr||(Yr=typeof document>"u"?{}:document.createElement("a")),Yr.href=a,Yr.href}function Dc(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:r,height:n}=e,i=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==r*n*4)&&(s=new Uint8Array(r*n*4),t.image={width:r,height:n,data:s},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,s)}}const m_=zi({name:"Typesetter",dependencies:[n_,t_,Gg],init(a,e,t){return a(e,t())}}),g_=zi({name:"Typesetter",dependencies:[m_],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}}),Bl={};function __(a){let e=Bl[a];if(!e){const t=new ii(1,1,a,a),r=t.clone(),n=t.attributes,i=r.attributes,s=new hn,o=n.uv.count;for(let l=0;l<o;l++)i.position.array[l*3]*=-1,i.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{s.setAttribute(l,new nn([...n[l].array,...i[l].array],n[l].itemSize))}),s.setIndex([...t.index.array,...r.index.array.map(l=>l+o)]),s.translate(.5,.5,0),e=Bl[a]=s}return e}const v_="aTroikaGlyphBounds",kl="aTroikaGlyphIndex",x_="aTroikaGlyphColor";class M_ extends vg{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new ca,this.boundingBox=new Bi}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Pt?t/2:0,e===$t?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=__(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){ts(this,v_,e,4),ts(this,kl,t,1),ts(this,x_,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:s,max:o,sin:l,cos:c}=Math,h=n/2,u=n*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,v=i((d+h)/u)!==i((g+h)/u)?-f:s(l(d)*f,l(g)*f),p=i((d-h)/u)!==i((g-h)/u)?f:o(l(d)*f,l(g)*f),m=i((d+n)/u)!==i((g+n)/u)?f*2:o(f-c(d)*f,f-c(g)*f);r.min.set(v,e[1],t<0?-m:0),r.max.set(p,e[3],t<0?0:m)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(kl).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}}function ts(a,e,t,r){const n=a.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(a.setAttribute(e,new og(t,r)),delete a._maxInstanceCount,a.dispose()):n&&a.deleteAttribute(e)}const S_=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,y_=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,E_=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,T_=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function b_(a){const e=Gs(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ge},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new it(0,0,0,0)},uTroikaClipRect:{value:new it(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ge},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new qe},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new je},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:S_,vertexTransform:y_,fragmentDefs:E_,fragmentColorTransform:T_,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(Cc,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const ao=new ha({color:16777215,side:$t,transparent:!0}),zl=8421504,Gl=new lt,jr=new K,ns=new K,nr=[],A_=new K,is="+x+y";function Hl(a){return Array.isArray(a)?a[0]:a}let Lc=()=>{const a=new Ht(new ii(1,1),ao);return Lc=()=>a,a},Ic=()=>{const a=new Ht(new ii(1,1,32,1),ao);return Ic=()=>a,a};const w_={type:"syncstart"},R_={type:"synccomplete"},Fc=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],C_=Fc.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Nc extends Ht{constructor(){const e=new M_;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=zl,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=is,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(w_),f_({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(R_),e&&e()})))}onBeforeRender(e,t,r,n,i,s){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i),i._hadOwnSide=i.hasOwnProperty("side"),this.geometry.setSide(i._actualSide=i.side),i.side=Mn}onAfterRender(e,t,r,n,i,s){i._hadOwnSide?i.side=i._actualSide:delete i.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=ao.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=b_(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Hl(this.material).getDepthMaterial()}get customDistanceMaterial(){return Hl(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,h=0,u=0,f,d,g,v=0,p=0;if(t){let{outlineWidth:y,outlineOffsetX:M,outlineOffsetY:S,outlineBlur:P,outlineOpacity:w}=this;c=this._parsePercent(y)||0,h=Math.max(0,this._parsePercent(P)||0),f=w,v=this._parsePercent(M)||0,p=this._parsePercent(S)||0}else u=Math.max(0,this._parsePercent(this.strokeWidth)||0),u&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??zl),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;r.uTroikaDistanceOffset.value=c,r.uTroikaPositionOffset.value.set(v,p),r.uTroikaBlurRadius.value=h,r.uTroikaStrokeWidth.value=u,r.uTroikaStrokeOpacity.value=d,r.uTroikaFillOpacity.value=f??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)r.uTroikaClipRect.value.fromArray(m);else{const y=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new qe;(i!==o._input||typeof i=="object")&&o.set(o._input=i)}let s=this.orientation||is;if(s!==e._orientation){let o=r.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==is&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,h,u,f]=l;jr.set(0,0,0)[h]=c==="-"?1:-1,ns.set(0,0,0)[f]=u==="-"?-1:1,Gl.lookAt(A_,jr.cross(ns),ns),o.setFromMatrix4(Gl)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ge){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new Ge){return jr.copy(e),this.localPositionToTextCoords(this.worldToLocal(jr),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,s=n?Ic():Lc(),o=s.geometry,{position:l,uv:c}=o.attributes;for(let h=0;h<c.count;h++){let u=i[0]+c.getX(h)*(i[2]-i[0]);const f=i[1]+c.getY(h)*(i[3]-i[1]);let d=0;n&&(d=n-Math.cos(u/n)*n,u=Math.sin(u/n)*n),l.setXYZ(h,u,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,nr.length=0,s.raycast(e,nr);for(let h=0;h<nr.length;h++)nr[h].object=this,t.push(nr[h])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,C_.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}Fc.forEach(a=>{const e="_private_"+a;Object.defineProperty(Nc.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});class rs extends bt{constructor({name:t="",radius:r,textureSrc:n,rotationSpeed:i=.01,customMaterial:s}){super();Tn(this,"isRotating",!0);Tn(this,"isOrbiting",!0);Tn(this,"_planetMesh");Tn(this,"_rotationSpeed");Tn(this,"_textObject");const o=this.createMesh(r,n,s),l=this.createText(t,r);this.add(o),o.add(l),o.userData.planet=this,this._planetMesh=o,this._textObject=l,this._rotationSpeed=i}updateAnimation(t){this._textObject.lookAt(t.position),this.isRotating&&(this.rotation.y+=this._rotationSpeed)}get mesh(){return this._planetMesh}get textObject(){return this._textObject}createText(t,r){const n=new Nc;return n.text=t,n.fontSize=sc.clamp(.5*r,.2,.7),n.color="white",n.fontWeight="bold",n.position.set(0,-r*1.1,0),n.anchorX="center",n}createMesh(t,r,n){const i=new dg().load(r),s=new no(t,32,32);let o=n;o?o.setValues({map:i}):o=new cg({map:i});const l=new Ht(s,o);return l.castShadow=!0,l.receiveShadow=!0,l}}class Vl extends bt{constructor({planet:t,radius:r,orbitSpeed:n,planetOrbit:i}){super();Tn(this,"_planet");Tn(this,"_orbitSpeed");this.add(t),t.position.set(r,0,0),i!==void 0&&(i.position.set(r,0,0),this.add(i)),this._planet=t,this._orbitSpeed=n}updateAnimation(){this._planet.isOrbiting&&(this.rotation.y+=this._orbitSpeed)}}function P_(a){const e=new _g("white",.1),t=new gg("white",100);t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,t.castShadow=!0,t.receiveShadow=!0,a.add(e),a.add(t)}function U_(){const a=new ag({antialias:!0});return a.shadowMap.enabled=!0,a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(.7),document.body.appendChild(a.domElement),a}function D_(a,e){const t=new yg(a,e.domElement);return t.target.set(0,0,0),a.position.set(0,2,8),t}function L_(){const l=new xg,c=U_(),h=new zt(75,window.innerWidth/window.innerHeight,.001,1e3),u=D_(h,c),f=new sg;P_(f);const d=new rs({name:"Sun",radius:2,textureSrc:"./src/assets/sun_texture.jpeg",rotationSpeed:.005,customMaterial:new ha({color:"yellow"})});d.mesh.castShadow=!1,d.mesh.receiveShadow=!1,d.textObject.color="yellow";const g=new rs({name:"Earth",radius:.5,textureSrc:"./src/assets/earth_texture.jpeg",rotationSpeed:.01});g.textObject.color="Aquamarine";const v=new rs({name:"Moon",radius:.1,textureSrc:"./src/assets/moon_texture.jpg",rotationSpeed:0}),p=new Vl({planet:v,radius:1,orbitSpeed:.02}),m=new Vl({planet:g,radius:7,orbitSpeed:.007,planetOrbit:p});f.add(m),f.add(d);function y(){u.update(),c.render(f,h),d.updateAnimation(h),g.updateAnimation(h),v.updateAnimation(h),p.updateAnimation(),m.updateAnimation(),requestAnimationFrame(y)}y(),window.addEventListener("click",M=>{const S=M.clientX/window.innerWidth*2-1,P=-(M.clientY/window.innerHeight)*2+1;l.setFromCamera(new Ge(S,P),h);const w=l.intersectObjects(f.children,!0);if(w.length>0&&w[0].object.userData.planet){const T=w[0].object.userData.planet;T.isRotating=!T.isRotating,T.isOrbiting=!T.isOrbiting}}),window.addEventListener("resize",()=>{c.setSize(window.innerWidth,window.innerHeight),h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix()})}window.addEventListener("load",L_);
