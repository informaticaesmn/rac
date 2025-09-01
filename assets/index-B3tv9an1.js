(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ri(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ie={},ln=[],et=()=>{},va=()=>!1,jr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),si=t=>t.startsWith("onUpdate:"),pe=Object.assign,ii=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zl=Object.prototype.hasOwnProperty,Q=(t,e)=>zl.call(t,e),U=Array.isArray,un=t=>rr(t)==="[object Map]",Wr=t=>rr(t)==="[object Set]",$i=t=>rr(t)==="[object Date]",j=t=>typeof t=="function",de=t=>typeof t=="string",st=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",ba=t=>(le(t)||j(t))&&j(t.then)&&j(t.catch),Ea=Object.prototype.toString,rr=t=>Ea.call(t),Gl=t=>rr(t).slice(8,-1),wa=t=>rr(t)==="[object Object]",oi=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xn=ri(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kr=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},ql=/-(\w)/g,Ue=Kr(t=>t.replace(ql,(e,n)=>n?n.toUpperCase():"")),Jl=/\B([A-Z])/g,en=Kr(t=>t.replace(Jl,"-$1").toLowerCase()),zr=Kr(t=>t.charAt(0).toUpperCase()+t.slice(1)),us=Kr(t=>t?`on${zr(t)}`:""),Mt=(t,e)=>!Object.is(t,e),vr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ia=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ns=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Yl=t=>{const e=de(t)?Number(t):NaN;return isNaN(e)?t:e};let Hi;const Gr=()=>Hi||(Hi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ai(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=de(r)?eu(r):ai(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(de(t)||le(t))return t}const Xl=/;(?![^(]*\))/g,Ql=/:([^]+)/,Zl=/\/\*[^]*?\*\//g;function eu(t){const e={};return t.replace(Zl,"").split(Xl).forEach(n=>{if(n){const r=n.split(Ql);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ci(t){let e="";if(de(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const r=ci(t[n]);r&&(e+=r+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const tu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nu=ri(tu);function Sa(t){return!!t||t===""}function ru(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=qr(t[r],e[r]);return n}function qr(t,e){if(t===e)return!0;let n=$i(t),r=$i(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=st(t),r=st(e),n||r)return t===e;if(n=U(t),r=U(e),n||r)return n&&r?ru(t,e):!1;if(n=le(t),r=le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!qr(t[o],e[o]))return!1}}return String(t)===String(e)}function Ta(t,e){return t.findIndex(n=>qr(n,e))}const Ca=t=>!!(t&&t.__v_isRef===!0),sr=t=>de(t)?t:t==null?"":U(t)||le(t)&&(t.toString===Ea||!j(t.toString))?Ca(t)?sr(t.value):JSON.stringify(t,Aa,2):String(t),Aa=(t,e)=>Ca(e)?Aa(t,e.value):un(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[fs(r,i)+" =>"]=s,n),{})}:Wr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>fs(n))}:st(e)?fs(e):le(e)&&!U(e)&&!wa(e)?String(e):e,fs=(t,e="")=>{var n;return st(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ae;class su{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ae,!e&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ae;try{return Ae=this,e()}finally{Ae=n}}}on(){++this._on===1&&(this.prevScope=Ae,Ae=this)}off(){this._on>0&&--this._on===0&&(Ae=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function iu(){return Ae}let ce;const ds=new WeakSet;class Ra{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ae&&Ae.active&&Ae.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ds.has(this)&&(ds.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Oa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bi(this),ka(this);const e=ce,n=$e;ce=this,$e=!0;try{return this.fn()}finally{xa(this),ce=e,$e=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fi(e);this.deps=this.depsTail=void 0,Bi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ds.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ds(this)&&this.run()}get dirty(){return Ds(this)}}let Pa=0,Nn,Dn;function Oa(t,e=!1){if(t.flags|=8,e){t.next=Dn,Dn=t;return}t.next=Nn,Nn=t}function li(){Pa++}function ui(){if(--Pa>0)return;if(Dn){let e=Dn;for(Dn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Nn;){let e=Nn;for(Nn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ka(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function xa(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),fi(r),ou(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ds(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Na(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Na(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Wn)||(t.globalVersion=Wn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ds(t))))return;t.flags|=2;const e=t.dep,n=ce,r=$e;ce=t,$e=!0;try{ka(t);const s=t.fn(t._value);(e.version===0||Mt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ce=n,$e=r,xa(t),t.flags&=-3}}function fi(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)fi(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ou(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let $e=!0;const Da=[];function _t(){Da.push($e),$e=!1}function yt(){const t=Da.pop();$e=t===void 0?!0:t}function Bi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ce;ce=void 0;try{e()}finally{ce=n}}}let Wn=0;class au{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class di{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ce||!$e||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new au(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,La(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=r)}return n}trigger(e){this.version++,Wn++,this.notify(e)}notify(e){li();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ui()}}}function La(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)La(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ls=new WeakMap,Xt=Symbol(""),Ms=Symbol(""),Kn=Symbol("");function me(t,e,n){if($e&&ce){let r=Ls.get(t);r||Ls.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new di),s.map=r,s.key=n),s.track()}}function dt(t,e,n,r,s,i){const o=Ls.get(t);if(!o){Wn++;return}const a=c=>{c&&c.trigger()};if(li(),e==="clear")o.forEach(a);else{const c=U(t),l=c&&oi(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,h)=>{(h==="length"||h===Kn||!st(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Kn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Xt)),un(t)&&a(o.get(Ms)));break;case"delete":c||(a(o.get(Xt)),un(t)&&a(o.get(Ms)));break;case"set":un(t)&&a(o.get(Xt));break}}ui()}function sn(t){const e=q(t);return e===t?e:(me(e,"iterate",Kn),He(t)?e:e.map(be))}function hi(t){return me(t=q(t),"iterate",Kn),t}const cu={__proto__:null,[Symbol.iterator](){return hs(this,Symbol.iterator,be)},concat(...t){return sn(this).concat(...t.map(e=>U(e)?sn(e):e))},entries(){return hs(this,"entries",t=>(t[1]=be(t[1]),t))},every(t,e){return ot(this,"every",t,e,void 0,arguments)},filter(t,e){return ot(this,"filter",t,e,n=>n.map(be),arguments)},find(t,e){return ot(this,"find",t,e,be,arguments)},findIndex(t,e){return ot(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ot(this,"findLast",t,e,be,arguments)},findLastIndex(t,e){return ot(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ot(this,"forEach",t,e,void 0,arguments)},includes(...t){return ps(this,"includes",t)},indexOf(...t){return ps(this,"indexOf",t)},join(t){return sn(this).join(t)},lastIndexOf(...t){return ps(this,"lastIndexOf",t)},map(t,e){return ot(this,"map",t,e,void 0,arguments)},pop(){return Cn(this,"pop")},push(...t){return Cn(this,"push",t)},reduce(t,...e){return Vi(this,"reduce",t,e)},reduceRight(t,...e){return Vi(this,"reduceRight",t,e)},shift(){return Cn(this,"shift")},some(t,e){return ot(this,"some",t,e,void 0,arguments)},splice(...t){return Cn(this,"splice",t)},toReversed(){return sn(this).toReversed()},toSorted(t){return sn(this).toSorted(t)},toSpliced(...t){return sn(this).toSpliced(...t)},unshift(...t){return Cn(this,"unshift",t)},values(){return hs(this,"values",be)}};function hs(t,e,n){const r=hi(t),s=r[e]();return r!==t&&!He(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const lu=Array.prototype;function ot(t,e,n,r,s,i){const o=hi(t),a=o!==t&&!He(t),c=o[e];if(c!==lu[e]){const f=c.apply(t,i);return a?be(f):f}let l=n;o!==t&&(a?l=function(f,h){return n.call(this,be(f),h,t)}:n.length>2&&(l=function(f,h){return n.call(this,f,h,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function Vi(t,e,n,r){const s=hi(t);let i=n;return s!==t&&(He(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,be(a),c,t)}),s[e](i,...r)}function ps(t,e,n){const r=q(t);me(r,"iterate",Kn);const s=r[e](...n);return(s===-1||s===!1)&&mi(n[0])?(n[0]=q(n[0]),r[e](...n)):s}function Cn(t,e,n=[]){_t(),li();const r=q(t)[e].apply(t,n);return ui(),yt(),r}const uu=ri("__proto__,__v_isRef,__isVue"),Ma=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(st));function fu(t){st(t)||(t=String(t));const e=q(this);return me(e,"has",t),e.hasOwnProperty(t)}class Ua{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Eu:Ba:i?Ha:$a).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=U(e);if(!s){let c;if(o&&(c=cu[n]))return c;if(n==="hasOwnProperty")return fu}const a=Reflect.get(e,n,ye(e)?e:r);return(st(n)?Ma.has(n):uu(n))||(s||me(e,"get",n),i)?a:ye(a)?o&&oi(n)?a:a.value:le(a)?s?ja(a):Jr(a):a}}class Fa extends Ua{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Qt(i);if(!He(r)&&!Qt(r)&&(i=q(i),r=q(r)),!U(e)&&ye(i)&&!ye(r))return c||(i.value=r),!0}const o=U(e)&&oi(n)?Number(n)<e.length:Q(e,n),a=Reflect.set(e,n,r,ye(e)?e:s);return e===q(s)&&(o?Mt(r,i)&&dt(e,"set",n,r):dt(e,"add",n,r)),a}deleteProperty(e,n){const r=Q(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&dt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!st(n)||!Ma.has(n))&&me(e,"has",n),r}ownKeys(e){return me(e,"iterate",U(e)?"length":Xt),Reflect.ownKeys(e)}}class du extends Ua{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const hu=new Fa,pu=new du,gu=new Fa(!0);const Us=t=>t,pr=t=>Reflect.getPrototypeOf(t);function mu(t,e,n){return function(...r){const s=this.__v_raw,i=q(s),o=un(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Us:e?Fs:be;return!e&&me(i,"iterate",c?Ms:Xt),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function gr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _u(t,e){const n={get(s){const i=this.__v_raw,o=q(i),a=q(s);t||(Mt(s,a)&&me(o,"get",s),me(o,"get",a));const{has:c}=pr(o),l=e?Us:t?Fs:be;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&me(q(s),"iterate",Xt),s.size},has(s){const i=this.__v_raw,o=q(i),a=q(s);return t||(Mt(s,a)&&me(o,"has",s),me(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=q(a),l=e?Us:t?Fs:be;return!t&&me(c,"iterate",Xt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return pe(n,t?{add:gr("add"),set:gr("set"),delete:gr("delete"),clear:gr("clear")}:{add(s){!e&&!He(s)&&!Qt(s)&&(s=q(s));const i=q(this);return pr(i).has.call(i,s)||(i.add(s),dt(i,"add",s,s)),this},set(s,i){!e&&!He(i)&&!Qt(i)&&(i=q(i));const o=q(this),{has:a,get:c}=pr(o);let l=a.call(o,s);l||(s=q(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Mt(i,u)&&dt(o,"set",s,i):dt(o,"add",s,i),this},delete(s){const i=q(this),{has:o,get:a}=pr(i);let c=o.call(i,s);c||(s=q(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&dt(i,"delete",s,void 0),l},clear(){const s=q(this),i=s.size!==0,o=s.clear();return i&&dt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=mu(s,t,e)}),n}function pi(t,e){const n=_u(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Q(n,s)&&s in r?n:r,s,i)}const yu={get:pi(!1,!1)},vu={get:pi(!1,!0)},bu={get:pi(!0,!1)};const $a=new WeakMap,Ha=new WeakMap,Ba=new WeakMap,Eu=new WeakMap;function wu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Iu(t){return t.__v_skip||!Object.isExtensible(t)?0:wu(Gl(t))}function Jr(t){return Qt(t)?t:gi(t,!1,hu,yu,$a)}function Va(t){return gi(t,!1,gu,vu,Ha)}function ja(t){return gi(t,!0,pu,bu,Ba)}function gi(t,e,n,r,s){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Iu(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Ln(t){return Qt(t)?Ln(t.__v_raw):!!(t&&t.__v_isReactive)}function Qt(t){return!!(t&&t.__v_isReadonly)}function He(t){return!!(t&&t.__v_isShallow)}function mi(t){return t?!!t.__v_raw:!1}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function Su(t){return!Q(t,"__v_skip")&&Object.isExtensible(t)&&Ia(t,"__v_skip",!0),t}const be=t=>le(t)?Jr(t):t,Fs=t=>le(t)?ja(t):t;function ye(t){return t?t.__v_isRef===!0:!1}function kt(t){return Wa(t,!1)}function Tu(t){return Wa(t,!0)}function Wa(t,e){return ye(t)?t:new Cu(t,e)}class Cu{constructor(e,n){this.dep=new di,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:q(e),this._value=n?e:be(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||He(e)||Qt(e);e=r?e:q(e),Mt(e,n)&&(this._rawValue=e,this._value=r?e:be(e),this.dep.trigger())}}function mt(t){return ye(t)?t.value:t}const Au={get:(t,e,n)=>e==="__v_raw"?t:mt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ye(s)&&!ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ka(t){return Ln(t)?t:new Proxy(t,Au)}class Ru{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new di(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return Oa(this,!0),!0}get value(){const e=this.dep.track();return Na(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Pu(t,e,n=!1){let r,s;return j(t)?r=t:(r=t.get,s=t.set),new Ru(r,s,n)}const mr={},Pr=new WeakMap;let Gt;function Ou(t,e=!1,n=Gt){if(n){let r=Pr.get(n);r||Pr.set(n,r=[]),r.push(t)}}function ku(t,e,n=ie){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=k=>s?k:He(k)||s===!1||s===0?ht(k,1):ht(k);let u,f,h,g,w=!1,T=!1;if(ye(t)?(f=()=>t.value,w=He(t)):Ln(t)?(f=()=>l(t),w=!0):U(t)?(T=!0,w=t.some(k=>Ln(k)||He(k)),f=()=>t.map(k=>{if(ye(k))return k.value;if(Ln(k))return l(k);if(j(k))return c?c(k,2):k()})):j(t)?e?f=c?()=>c(t,2):t:f=()=>{if(h){_t();try{h()}finally{yt()}}const k=Gt;Gt=u;try{return c?c(t,3,[g]):t(g)}finally{Gt=k}}:f=et,e&&s){const k=f,K=s===!0?1/0:s;f=()=>ht(k(),K)}const $=iu(),x=()=>{u.stop(),$&&$.active&&ii($.effects,u)};if(i&&e){const k=e;e=(...K)=>{k(...K),x()}}let R=T?new Array(t.length).fill(mr):mr;const D=k=>{if(!(!(u.flags&1)||!u.dirty&&!k))if(e){const K=u.run();if(s||w||(T?K.some((ne,ee)=>Mt(ne,R[ee])):Mt(K,R))){h&&h();const ne=Gt;Gt=u;try{const ee=[K,R===mr?void 0:T&&R[0]===mr?[]:R,g];R=K,c?c(e,3,ee):e(...ee)}finally{Gt=ne}}}else u.run()};return a&&a(D),u=new Ra(f),u.scheduler=o?()=>o(D,!1):D,g=k=>Ou(k,!1,u),h=u.onStop=()=>{const k=Pr.get(u);if(k){if(c)c(k,4);else for(const K of k)K();Pr.delete(u)}},e?r?D(!0):R=u.run():o?o(D.bind(null,!0),!0):u.run(),x.pause=u.pause.bind(u),x.resume=u.resume.bind(u),x.stop=x,x}function ht(t,e=1/0,n){if(e<=0||!le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ye(t))ht(t.value,e,n);else if(U(t))for(let r=0;r<t.length;r++)ht(t[r],e,n);else if(Wr(t)||un(t))t.forEach(r=>{ht(r,e,n)});else if(wa(t)){for(const r in t)ht(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ht(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ir(t,e,n,r){try{return r?t(...r):t()}catch(s){Yr(s,e,n)}}function Ve(t,e,n,r){if(j(t)){const s=ir(t,e,n,r);return s&&ba(s)&&s.catch(i=>{Yr(i,e,n)}),s}if(U(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ve(t[i],e,n,r));return s}}function Yr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ie;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){_t(),ir(i,null,10,[t,c,l]),yt();return}}xu(t,n,s,r,o)}function xu(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ee=[];let Ye=-1;const fn=[];let Rt=null,on=0;const za=Promise.resolve();let Or=null;function Ga(t){const e=Or||za;return t?e.then(this?t.bind(this):t):e}function Nu(t){let e=Ye+1,n=Ee.length;for(;e<n;){const r=e+n>>>1,s=Ee[r],i=zn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function _i(t){if(!(t.flags&1)){const e=zn(t),n=Ee[Ee.length-1];!n||!(t.flags&2)&&e>=zn(n)?Ee.push(t):Ee.splice(Nu(e),0,t),t.flags|=1,qa()}}function qa(){Or||(Or=za.then(Ya))}function Du(t){U(t)?fn.push(...t):Rt&&t.id===-1?Rt.splice(on+1,0,t):t.flags&1||(fn.push(t),t.flags|=1),qa()}function ji(t,e,n=Ye+1){for(;n<Ee.length;n++){const r=Ee[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ee.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ja(t){if(fn.length){const e=[...new Set(fn)].sort((n,r)=>zn(n)-zn(r));if(fn.length=0,Rt){Rt.push(...e);return}for(Rt=e,on=0;on<Rt.length;on++){const n=Rt[on];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rt=null,on=0}}const zn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ya(t){try{for(Ye=0;Ye<Ee.length;Ye++){const e=Ee[Ye];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ir(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ye<Ee.length;Ye++){const e=Ee[Ye];e&&(e.flags&=-2)}Ye=-1,Ee.length=0,Ja(),Or=null,(Ee.length||fn.length)&&Ya()}}let xe=null,Xa=null;function kr(t){const e=xe;return xe=t,Xa=t&&t.type.__scopeId||null,e}function At(t,e=xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&eo(-1);const i=kr(e);let o;try{o=t(...s)}finally{kr(i),r._d&&eo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function gs(t,e){if(xe===null)return t;const n=ts(xe),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=ie]=e[s];i&&(j(i)&&(i={mounted:i,updated:i}),i.deep&&ht(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function jt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(_t(),Ve(c,n,8,[t.el,a,t,e]),yt())}}const Lu=Symbol("_vte"),Qa=t=>t.__isTeleport,ut=Symbol("_leaveCb"),_r=Symbol("_enterCb");function Mu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ac(()=>{t.isMounted=!0}),cc(()=>{t.isUnmounting=!0}),t}const Le=[Function,Array],Za={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Le,onEnter:Le,onAfterEnter:Le,onEnterCancelled:Le,onBeforeLeave:Le,onLeave:Le,onAfterLeave:Le,onLeaveCancelled:Le,onBeforeAppear:Le,onAppear:Le,onAfterAppear:Le,onAppearCancelled:Le},ec=t=>{const e=t.subTree;return e.component?ec(e.component):e},Uu={name:"BaseTransition",props:Za,setup(t,{slots:e}){const n=xc(),r=Mu();return()=>{const s=e.default&&rc(e.default(),!0);if(!s||!s.length)return;const i=tc(s),o=q(t),{mode:a}=o;if(r.isLeaving)return ms(i);const c=Wi(i);if(!c)return ms(i);let l=$s(c,o,r,n,f=>l=f);c.type!==we&&Gn(c,l);let u=n.subTree&&Wi(n.subTree);if(u&&u.type!==we&&!Jt(c,u)&&ec(n).type!==we){let f=$s(u,o,r,n);if(Gn(u,f),a==="out-in"&&c.type!==we)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},ms(i);a==="in-out"&&c.type!==we?f.delayLeave=(h,g,w)=>{const T=nc(r,u);T[String(u.key)]=u,h[ut]=()=>{g(),h[ut]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{w(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function tc(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==we){e=n;break}}return e}const Fu=Uu;function nc(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function $s(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:g,onAfterLeave:w,onLeaveCancelled:T,onBeforeAppear:$,onAppear:x,onAfterAppear:R,onAppearCancelled:D}=e,k=String(t.key),K=nc(n,t),ne=(W,G)=>{W&&Ve(W,r,9,G)},ee=(W,G)=>{const oe=G[1];ne(W,G),U(W)?W.every(N=>N.length<=1)&&oe():W.length<=1&&oe()},ge={mode:o,persisted:a,beforeEnter(W){let G=c;if(!n.isMounted)if(i)G=$||c;else return;W[ut]&&W[ut](!0);const oe=K[k];oe&&Jt(t,oe)&&oe.el[ut]&&oe.el[ut](),ne(G,[W])},enter(W){let G=l,oe=u,N=f;if(!n.isMounted)if(i)G=x||l,oe=R||u,N=D||f;else return;let J=!1;const he=W[_r]=Pe=>{J||(J=!0,Pe?ne(N,[W]):ne(oe,[W]),ge.delayedLeave&&ge.delayedLeave(),W[_r]=void 0)};G?ee(G,[W,he]):he()},leave(W,G){const oe=String(t.key);if(W[_r]&&W[_r](!0),n.isUnmounting)return G();ne(h,[W]);let N=!1;const J=W[ut]=he=>{N||(N=!0,G(),he?ne(T,[W]):ne(w,[W]),W[ut]=void 0,K[oe]===t&&delete K[oe])};K[oe]=t,g?ee(g,[W,J]):J()},clone(W){const G=$s(W,e,n,r,s);return s&&s(G),G}};return ge}function ms(t){if(Xr(t))return t=Ht(t),t.children=null,t}function Wi(t){if(!Xr(t))return Qa(t.type)&&t.children?tc(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&j(n.default))return n.default()}}function Gn(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Gn(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function rc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Xe?(o.patchFlag&128&&s++,r=r.concat(rc(o.children,e,a))):(e||o.type!==we)&&r.push(a!=null?Ht(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function sc(t,e){return j(t)?pe({name:t.name},e,{setup:t}):t}function ic(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Mn(t,e,n,r,s=!1){if(U(t)){t.forEach((w,T)=>Mn(w,e&&(U(e)?e[T]:e),n,r,s));return}if(Un(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Mn(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ts(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState,h=q(f),g=f===ie?va:w=>Q(h,w);if(l!=null&&l!==c){if(de(l))u[l]=null,g(l)&&(f[l]=null);else if(ye(l)){l.value=null;const w=e;w.k&&(u[w.k]=null)}}if(j(c))ir(c,a,12,[o,u]);else{const w=de(c),T=ye(c);if(w||T){const $=()=>{if(t.f){const x=w?g(c)?f[c]:u[c]:c.value;if(s)U(x)&&ii(x,i);else if(U(x))x.includes(i)||x.push(i);else if(w)u[c]=[i],g(c)&&(f[c]=u[c]);else{const R=[i];c.value=R,t.k&&(u[t.k]=R)}}else w?(u[c]=o,g(c)&&(f[c]=o)):T&&(c.value=o,t.k&&(u[t.k]=o))};o?($.id=-1,ke($,n)):$()}}}Gr().requestIdleCallback;Gr().cancelIdleCallback;const Un=t=>!!t.type.__asyncLoader,Xr=t=>t.type.__isKeepAlive;function $u(t,e){oc(t,"a",e)}function Hu(t,e){oc(t,"da",e)}function oc(t,e,n=_e){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Qr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Xr(s.parent.vnode)&&Bu(r,e,n,s),s=s.parent}}function Bu(t,e,n,r){const s=Qr(e,t,r,!0);lc(()=>{ii(r[e],s)},n)}function Qr(t,e,n=_e,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{_t();const a=or(n),c=Ve(e,n,t,o);return a(),yt(),c});return r?s.unshift(i):s.push(i),i}}const Et=t=>(e,n=_e)=>{(!Jn||t==="sp")&&Qr(t,(...r)=>e(...r),n)},Vu=Et("bm"),ac=Et("m"),ju=Et("bu"),Wu=Et("u"),cc=Et("bum"),lc=Et("um"),Ku=Et("sp"),zu=Et("rtg"),Gu=Et("rtc");function qu(t,e=_e){Qr("ec",t,e)}const Ju="components";function uc(t,e){return Xu(Ju,t,!0,e)||t}const Yu=Symbol.for("v-ndc");function Xu(t,e,n=!0,r=!1){const s=xe||_e;if(s){const i=s.type;{const a=Ff(i,!1);if(a&&(a===e||a===Ue(e)||a===zr(Ue(e))))return i}const o=Ki(s[t]||i[t],e)||Ki(s.appContext[t],e);return!o&&r?i:o}}function Ki(t,e){return t&&(t[e]||t[Ue(e)]||t[zr(Ue(e))])}const Hs=t=>t?Nc(t)?ts(t):Hs(t.parent):null,Fn=pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Hs(t.parent),$root:t=>Hs(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>dc(t),$forceUpdate:t=>t.f||(t.f=()=>{_i(t.update)}),$nextTick:t=>t.n||(t.n=Ga.bind(t.proxy)),$watch:t=>vf.bind(t)}),_s=(t,e)=>t!==ie&&!t.__isScriptSetup&&Q(t,e),Qu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_s(r,e))return o[e]=1,r[e];if(s!==ie&&Q(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Q(l,e))return o[e]=3,i[e];if(n!==ie&&Q(n,e))return o[e]=4,n[e];Bs&&(o[e]=0)}}const u=Fn[e];let f,h;if(u)return e==="$attrs"&&me(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ie&&Q(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,Q(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _s(s,e)?(s[e]=n,!0):r!==ie&&Q(r,e)?(r[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},a){let c,l;return!!(n[a]||t!==ie&&a[0]!=="$"&&Q(t,a)||_s(e,a)||(c=i[0])&&Q(c,a)||Q(r,a)||Q(Fn,a)||Q(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zi(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Bs=!0;function Zu(t){const e=dc(t),n=t.proxy,r=t.ctx;Bs=!1,e.beforeCreate&&Gi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:g,updated:w,activated:T,deactivated:$,beforeDestroy:x,beforeUnmount:R,destroyed:D,unmounted:k,render:K,renderTracked:ne,renderTriggered:ee,errorCaptured:ge,serverPrefetch:W,expose:G,inheritAttrs:oe,components:N,directives:J,filters:he}=e;if(l&&ef(l,r,null),o)for(const te in o){const Y=o[te];j(Y)&&(r[te]=Y.bind(n))}if(s){const te=s.call(n,n);le(te)&&(t.data=Jr(te))}if(Bs=!0,i)for(const te in i){const Y=i[te],it=j(Y)?Y.bind(n,n):j(Y.get)?Y.get.bind(n,n):et,It=!j(Y)&&j(Y.set)?Y.set.bind(n):et,Ke=Re({get:it,set:It});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Se=>Ke.value=Se})}if(a)for(const te in a)fc(a[te],r,n,te);if(c){const te=j(c)?c.call(n):c;Reflect.ownKeys(te).forEach(Y=>{br(Y,te[Y])})}u&&Gi(u,t,"c");function fe(te,Y){U(Y)?Y.forEach(it=>te(it.bind(n))):Y&&te(Y.bind(n))}if(fe(Vu,f),fe(ac,h),fe(ju,g),fe(Wu,w),fe($u,T),fe(Hu,$),fe(qu,ge),fe(Gu,ne),fe(zu,ee),fe(cc,R),fe(lc,k),fe(Ku,W),U(G))if(G.length){const te=t.exposed||(t.exposed={});G.forEach(Y=>{Object.defineProperty(te,Y,{get:()=>n[Y],set:it=>n[Y]=it,enumerable:!0})})}else t.exposed||(t.exposed={});K&&t.render===et&&(t.render=K),oe!=null&&(t.inheritAttrs=oe),N&&(t.components=N),J&&(t.directives=J),W&&ic(t)}function ef(t,e,n=et){U(t)&&(t=Vs(t));for(const r in t){const s=t[r];let i;le(s)?"default"in s?i=Be(s.from||r,s.default,!0):i=Be(s.from||r):i=Be(s),ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Gi(t,e,n){Ve(U(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function fc(t,e,n,r){let s=r.includes(".")?Tc(n,r):()=>n[r];if(de(t)){const i=e[t];j(i)&&Er(s,i)}else if(j(t))Er(s,t.bind(n));else if(le(t))if(U(t))t.forEach(i=>fc(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&Er(s,i,t)}}function dc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>xr(c,l,o,!0)),xr(c,e,o)),le(e)&&i.set(e,c),c}function xr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&xr(t,i,n,!0),s&&s.forEach(o=>xr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=tf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const tf={data:qi,props:Ji,emits:Ji,methods:Pn,computed:Pn,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:Pn,directives:Pn,watch:rf,provide:qi,inject:nf};function qi(t,e){return e?t?function(){return pe(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function nf(t,e){return Pn(Vs(t),Vs(e))}function Vs(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ve(t,e){return t?[...new Set([].concat(t,e))]:e}function Pn(t,e){return t?pe(Object.create(null),t,e):e}function Ji(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:pe(Object.create(null),zi(t),zi(e??{})):e}function rf(t,e){if(!t)return e;if(!e)return t;const n=pe(Object.create(null),t);for(const r in e)n[r]=ve(t[r],e[r]);return n}function hc(){return{app:null,config:{isNativeTag:va,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sf=0;function of(t,e){return function(r,s=null){j(r)||(r=pe({},r)),s!=null&&!le(s)&&(s=null);const i=hc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:sf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hf,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&j(u.install)?(o.add(u),u.install(l,...f)):j(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,h){if(!c){const g=l._ceVNode||ue(r,s);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),t(g,u,h),c=!0,l._container=u,u.__vue_app__=l,ts(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Ve(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=dn;dn=l;try{return u()}finally{dn=f}}};return l}}let dn=null;function br(t,e){if(_e){let n=_e.provides;const r=_e.parent&&_e.parent.provides;r===n&&(n=_e.provides=Object.create(r)),n[t]=e}}function Be(t,e,n=!1){const r=xc();if(r||dn){let s=dn?dn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}const pc={},gc=()=>Object.create(pc),mc=t=>Object.getPrototypeOf(t)===pc;function af(t,e,n,r=!1){const s={},i=gc();t.propsDefaults=Object.create(null),_c(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Va(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function cf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=q(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Zr(t.emitsOptions,h))continue;const g=e[h];if(c)if(Q(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const w=Ue(h);s[w]=js(c,a,w,g,t,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{_c(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!Q(e,f)&&((u=en(f))===f||!Q(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=js(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Q(e,f))&&(delete i[f],l=!0)}l&&dt(t.attrs,"set","")}function _c(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(xn(c))continue;const l=e[c];let u;s&&Q(s,u=Ue(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Zr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=q(n),l=a||ie;for(let u=0;u<i.length;u++){const f=i[u];n[f]=js(s,c,f,l[f],t,!Q(l,f))}}return o}function js(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&j(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=or(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}const lf=new WeakMap;function yc(t,e,n=!1){const r=n?lf:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const u=f=>{c=!0;const[h,g]=yc(f,e,!0);pe(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return le(t)&&r.set(t,ln),ln;if(U(i))for(let u=0;u<i.length;u++){const f=Ue(i[u]);Yi(f)&&(o[f]=ie)}else if(i)for(const u in i){const f=Ue(u);if(Yi(f)){const h=i[u],g=o[f]=U(h)||j(h)?{type:h}:pe({},h),w=g.type;let T=!1,$=!0;if(U(w))for(let x=0;x<w.length;++x){const R=w[x],D=j(R)&&R.name;if(D==="Boolean"){T=!0;break}else D==="String"&&($=!1)}else T=j(w)&&w.name==="Boolean";g[0]=T,g[1]=$,(T||Q(g,"default"))&&a.push(f)}}const l=[o,a];return le(t)&&r.set(t,l),l}function Yi(t){return t[0]!=="$"&&!xn(t)}const yi=t=>t==="_"||t==="_ctx"||t==="$stable",vi=t=>U(t)?t.map(Qe):[Qe(t)],uf=(t,e,n)=>{if(e._n)return e;const r=At((...s)=>vi(e(...s)),n);return r._c=!1,r},vc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(yi(s))continue;const i=t[s];if(j(i))e[s]=uf(s,i,r);else if(i!=null){const o=vi(i);e[s]=()=>o}}},bc=(t,e)=>{const n=vi(e);t.slots.default=()=>n},Ec=(t,e,n)=>{for(const r in e)(n||!yi(r))&&(t[r]=e[r])},ff=(t,e,n)=>{const r=t.slots=gc();if(t.vnode.shapeFlag&32){const s=e._;s?(Ec(r,e,n),n&&Ia(r,"_",s,!0)):vc(e,r)}else e&&bc(t,e)},df=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Ec(s,e,n):(i=!e.$stable,vc(e,s)),o=e}else e&&(bc(t,e),o={default:1});if(i)for(const a in s)!yi(a)&&o[a]==null&&delete s[a]},ke=Cf;function hf(t){return pf(t)}function pf(t,e){const n=Gr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:g=et,insertStaticContent:w}=t,T=(d,p,m,y=null,b=null,_=null,C=void 0,S=null,I=!!p.dynamicChildren)=>{if(d===p)return;d&&!Jt(d,p)&&(y=v(d),Se(d,b,_,!0),d=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:E,ref:F,shapeFlag:P}=p;switch(E){case es:$(d,p,m,y);break;case we:x(d,p,m,y);break;case vs:d==null&&R(p,m,y,C);break;case Xe:N(d,p,m,y,b,_,C,S,I);break;default:P&1?K(d,p,m,y,b,_,C,S,I):P&6?J(d,p,m,y,b,_,C,S,I):(P&64||P&128)&&E.process(d,p,m,y,b,_,C,S,I,L)}F!=null&&b?Mn(F,d&&d.ref,_,p||d,!p):F==null&&d&&d.ref!=null&&Mn(d.ref,null,_,d,!0)},$=(d,p,m,y)=>{if(d==null)r(p.el=a(p.children),m,y);else{const b=p.el=d.el;p.children!==d.children&&l(b,p.children)}},x=(d,p,m,y)=>{d==null?r(p.el=c(p.children||""),m,y):p.el=d.el},R=(d,p,m,y)=>{[d.el,d.anchor]=w(d.children,p,m,y,d.el,d.anchor)},D=({el:d,anchor:p},m,y)=>{let b;for(;d&&d!==p;)b=h(d),r(d,m,y),d=b;r(p,m,y)},k=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),s(d),d=m;s(p)},K=(d,p,m,y,b,_,C,S,I)=>{p.type==="svg"?C="svg":p.type==="math"&&(C="mathml"),d==null?ne(p,m,y,b,_,C,S,I):W(d,p,b,_,C,S,I)},ne=(d,p,m,y,b,_,C,S)=>{let I,E;const{props:F,shapeFlag:P,transition:M,dirs:V}=d;if(I=d.el=o(d.type,_,F&&F.is,F),P&8?u(I,d.children):P&16&&ge(d.children,I,null,y,b,ys(d,_),C,S),V&&jt(d,null,y,"created"),ee(I,d,d.scopeId,C,y),F){for(const ae in F)ae!=="value"&&!xn(ae)&&i(I,ae,null,F[ae],_,y);"value"in F&&i(I,"value",null,F.value,_),(E=F.onVnodeBeforeMount)&&Je(E,y,d)}V&&jt(d,null,y,"beforeMount");const z=gf(b,M);z&&M.beforeEnter(I),r(I,p,m),((E=F&&F.onVnodeMounted)||z||V)&&ke(()=>{E&&Je(E,y,d),z&&M.enter(I),V&&jt(d,null,y,"mounted")},b)},ee=(d,p,m,y,b)=>{if(m&&g(d,m),y)for(let _=0;_<y.length;_++)g(d,y[_]);if(b){let _=b.subTree;if(p===_||Ac(_.type)&&(_.ssContent===p||_.ssFallback===p)){const C=b.vnode;ee(d,C,C.scopeId,C.slotScopeIds,b.parent)}}},ge=(d,p,m,y,b,_,C,S,I=0)=>{for(let E=I;E<d.length;E++){const F=d[E]=S?Pt(d[E]):Qe(d[E]);T(null,F,p,m,y,b,_,C,S)}},W=(d,p,m,y,b,_,C)=>{const S=p.el=d.el;let{patchFlag:I,dynamicChildren:E,dirs:F}=p;I|=d.patchFlag&16;const P=d.props||ie,M=p.props||ie;let V;if(m&&Wt(m,!1),(V=M.onVnodeBeforeUpdate)&&Je(V,m,p,d),F&&jt(p,d,m,"beforeUpdate"),m&&Wt(m,!0),(P.innerHTML&&M.innerHTML==null||P.textContent&&M.textContent==null)&&u(S,""),E?G(d.dynamicChildren,E,S,m,y,ys(p,b),_):C||Y(d,p,S,null,m,y,ys(p,b),_,!1),I>0){if(I&16)oe(S,P,M,m,b);else if(I&2&&P.class!==M.class&&i(S,"class",null,M.class,b),I&4&&i(S,"style",P.style,M.style,b),I&8){const z=p.dynamicProps;for(let ae=0;ae<z.length;ae++){const Z=z[ae],Te=P[Z],Ce=M[Z];(Ce!==Te||Z==="value")&&i(S,Z,Te,Ce,b,m)}}I&1&&d.children!==p.children&&u(S,p.children)}else!C&&E==null&&oe(S,P,M,m,b);((V=M.onVnodeUpdated)||F)&&ke(()=>{V&&Je(V,m,p,d),F&&jt(p,d,m,"updated")},y)},G=(d,p,m,y,b,_,C)=>{for(let S=0;S<p.length;S++){const I=d[S],E=p[S],F=I.el&&(I.type===Xe||!Jt(I,E)||I.shapeFlag&198)?f(I.el):m;T(I,E,F,null,y,b,_,C,!0)}},oe=(d,p,m,y,b)=>{if(p!==m){if(p!==ie)for(const _ in p)!xn(_)&&!(_ in m)&&i(d,_,p[_],null,b,y);for(const _ in m){if(xn(_))continue;const C=m[_],S=p[_];C!==S&&_!=="value"&&i(d,_,S,C,b,y)}"value"in m&&i(d,"value",p.value,m.value,b)}},N=(d,p,m,y,b,_,C,S,I)=>{const E=p.el=d?d.el:a(""),F=p.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:M,slotScopeIds:V}=p;V&&(S=S?S.concat(V):V),d==null?(r(E,m,y),r(F,m,y),ge(p.children||[],m,F,b,_,C,S,I)):P>0&&P&64&&M&&d.dynamicChildren?(G(d.dynamicChildren,M,m,b,_,C,S),(p.key!=null||b&&p===b.subTree)&&wc(d,p,!0)):Y(d,p,m,F,b,_,C,S,I)},J=(d,p,m,y,b,_,C,S,I)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?b.ctx.activate(p,m,y,C,I):he(p,m,y,b,_,C,I):Pe(d,p,I)},he=(d,p,m,y,b,_,C)=>{const S=d.component=Nf(d,y,b);if(Xr(d)&&(S.ctx.renderer=L),Df(S,!1,C),S.asyncDep){if(b&&b.registerDep(S,fe,C),!d.el){const I=S.subTree=ue(we);x(null,I,p,m),d.placeholder=I.el}}else fe(S,d,p,m,b,_,C)},Pe=(d,p,m)=>{const y=p.component=d.component;if(Sf(d,p,m))if(y.asyncDep&&!y.asyncResolved){te(y,p,m);return}else y.next=p,y.update();else p.el=d.el,y.vnode=p},fe=(d,p,m,y,b,_,C)=>{const S=()=>{if(d.isMounted){let{next:P,bu:M,u:V,parent:z,vnode:ae}=d;{const Ge=Ic(d);if(Ge){P&&(P.el=ae.el,te(d,P,C)),Ge.asyncDep.then(()=>{d.isUnmounted||S()});return}}let Z=P,Te;Wt(d,!1),P?(P.el=ae.el,te(d,P,C)):P=ae,M&&vr(M),(Te=P.props&&P.props.onVnodeBeforeUpdate)&&Je(Te,z,P,ae),Wt(d,!0);const Ce=Qi(d),ze=d.subTree;d.subTree=Ce,T(ze,Ce,f(ze.el),v(ze),d,b,_),P.el=Ce.el,Z===null&&Tf(d,Ce.el),V&&ke(V,b),(Te=P.props&&P.props.onVnodeUpdated)&&ke(()=>Je(Te,z,P,ae),b)}else{let P;const{el:M,props:V}=p,{bm:z,m:ae,parent:Z,root:Te,type:Ce}=d,ze=Un(p);Wt(d,!1),z&&vr(z),!ze&&(P=V&&V.onVnodeBeforeMount)&&Je(P,Z,p),Wt(d,!0);{Te.ce&&Te.ce._def.shadowRoot!==!1&&Te.ce._injectChildStyle(Ce);const Ge=d.subTree=Qi(d);T(null,Ge,m,y,d,b,_),p.el=Ge.el}if(ae&&ke(ae,b),!ze&&(P=V&&V.onVnodeMounted)){const Ge=p;ke(()=>Je(P,Z,Ge),b)}(p.shapeFlag&256||Z&&Un(Z.vnode)&&Z.vnode.shapeFlag&256)&&d.a&&ke(d.a,b),d.isMounted=!0,p=m=y=null}};d.scope.on();const I=d.effect=new Ra(S);d.scope.off();const E=d.update=I.run.bind(I),F=d.job=I.runIfDirty.bind(I);F.i=d,F.id=d.uid,I.scheduler=()=>_i(F),Wt(d,!0),E()},te=(d,p,m)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,cf(d,p.props,y,m),df(d,p.children,m),_t(),ji(d),yt()},Y=(d,p,m,y,b,_,C,S,I=!1)=>{const E=d&&d.children,F=d?d.shapeFlag:0,P=p.children,{patchFlag:M,shapeFlag:V}=p;if(M>0){if(M&128){It(E,P,m,y,b,_,C,S,I);return}else if(M&256){it(E,P,m,y,b,_,C,S,I);return}}V&8?(F&16&&De(E,b,_),P!==E&&u(m,P)):F&16?V&16?It(E,P,m,y,b,_,C,S,I):De(E,b,_,!0):(F&8&&u(m,""),V&16&&ge(P,m,y,b,_,C,S,I))},it=(d,p,m,y,b,_,C,S,I)=>{d=d||ln,p=p||ln;const E=d.length,F=p.length,P=Math.min(E,F);let M;for(M=0;M<P;M++){const V=p[M]=I?Pt(p[M]):Qe(p[M]);T(d[M],V,m,null,b,_,C,S,I)}E>F?De(d,b,_,!0,!1,P):ge(p,m,y,b,_,C,S,I,P)},It=(d,p,m,y,b,_,C,S,I)=>{let E=0;const F=p.length;let P=d.length-1,M=F-1;for(;E<=P&&E<=M;){const V=d[E],z=p[E]=I?Pt(p[E]):Qe(p[E]);if(Jt(V,z))T(V,z,m,null,b,_,C,S,I);else break;E++}for(;E<=P&&E<=M;){const V=d[P],z=p[M]=I?Pt(p[M]):Qe(p[M]);if(Jt(V,z))T(V,z,m,null,b,_,C,S,I);else break;P--,M--}if(E>P){if(E<=M){const V=M+1,z=V<F?p[V].el:y;for(;E<=M;)T(null,p[E]=I?Pt(p[E]):Qe(p[E]),m,z,b,_,C,S,I),E++}}else if(E>M)for(;E<=P;)Se(d[E],b,_,!0),E++;else{const V=E,z=E,ae=new Map;for(E=z;E<=M;E++){const Oe=p[E]=I?Pt(p[E]):Qe(p[E]);Oe.key!=null&&ae.set(Oe.key,E)}let Z,Te=0;const Ce=M-z+1;let ze=!1,Ge=0;const Tn=new Array(Ce);for(E=0;E<Ce;E++)Tn[E]=0;for(E=V;E<=P;E++){const Oe=d[E];if(Te>=Ce){Se(Oe,b,_,!0);continue}let qe;if(Oe.key!=null)qe=ae.get(Oe.key);else for(Z=z;Z<=M;Z++)if(Tn[Z-z]===0&&Jt(Oe,p[Z])){qe=Z;break}qe===void 0?Se(Oe,b,_,!0):(Tn[qe-z]=E+1,qe>=Ge?Ge=qe:ze=!0,T(Oe,p[qe],m,null,b,_,C,S,I),Te++)}const Mi=ze?mf(Tn):ln;for(Z=Mi.length-1,E=Ce-1;E>=0;E--){const Oe=z+E,qe=p[Oe],Ui=p[Oe+1],Fi=Oe+1<F?Ui.el||Ui.placeholder:y;Tn[E]===0?T(null,qe,m,Fi,b,_,C,S,I):ze&&(Z<0||E!==Mi[Z]?Ke(qe,m,Fi,2):Z--)}}},Ke=(d,p,m,y,b=null)=>{const{el:_,type:C,transition:S,children:I,shapeFlag:E}=d;if(E&6){Ke(d.component.subTree,p,m,y);return}if(E&128){d.suspense.move(p,m,y);return}if(E&64){C.move(d,p,m,L);return}if(C===Xe){r(_,p,m);for(let P=0;P<I.length;P++)Ke(I[P],p,m,y);r(d.anchor,p,m);return}if(C===vs){D(d,p,m);return}if(y!==2&&E&1&&S)if(y===0)S.beforeEnter(_),r(_,p,m),ke(()=>S.enter(_),b);else{const{leave:P,delayLeave:M,afterLeave:V}=S,z=()=>{d.ctx.isUnmounted?s(_):r(_,p,m)},ae=()=>{_._isLeaving&&_[ut](!0),P(_,()=>{z(),V&&V()})};M?M(_,z,ae):ae()}else r(_,p,m)},Se=(d,p,m,y=!1,b=!1)=>{const{type:_,props:C,ref:S,children:I,dynamicChildren:E,shapeFlag:F,patchFlag:P,dirs:M,cacheIndex:V}=d;if(P===-2&&(b=!1),S!=null&&(_t(),Mn(S,null,m,d,!0),yt()),V!=null&&(p.renderCache[V]=void 0),F&256){p.ctx.deactivate(d);return}const z=F&1&&M,ae=!Un(d);let Z;if(ae&&(Z=C&&C.onVnodeBeforeUnmount)&&Je(Z,p,d),F&6)hr(d.component,m,y);else{if(F&128){d.suspense.unmount(m,y);return}z&&jt(d,null,p,"beforeUnmount"),F&64?d.type.remove(d,p,m,L,y):E&&!E.hasOnce&&(_!==Xe||P>0&&P&64)?De(E,p,m,!1,!0):(_===Xe&&P&384||!b&&F&16)&&De(I,p,m),y&&nn(d)}(ae&&(Z=C&&C.onVnodeUnmounted)||z)&&ke(()=>{Z&&Je(Z,p,d),z&&jt(d,null,p,"unmounted")},m)},nn=d=>{const{type:p,el:m,anchor:y,transition:b}=d;if(p===Xe){rn(m,y);return}if(p===vs){k(d);return}const _=()=>{s(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:C,delayLeave:S}=b,I=()=>C(m,_);S?S(d.el,_,I):I()}else _()},rn=(d,p)=>{let m;for(;d!==p;)m=h(d),s(d),d=m;s(p)},hr=(d,p,m)=>{const{bum:y,scope:b,job:_,subTree:C,um:S,m:I,a:E}=d;Xi(I),Xi(E),y&&vr(y),b.stop(),_&&(_.flags|=8,Se(C,d,p,m)),S&&ke(S,p),ke(()=>{d.isUnmounted=!0},p)},De=(d,p,m,y=!1,b=!1,_=0)=>{for(let C=_;C<d.length;C++)Se(d[C],p,m,y,b)},v=d=>{if(d.shapeFlag&6)return v(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),m=p&&p[Lu];return m?h(m):p};let O=!1;const A=(d,p,m)=>{d==null?p._vnode&&Se(p._vnode,null,null,!0):T(p._vnode||null,d,p,null,null,null,m),p._vnode=d,O||(O=!0,ji(),Ja(),O=!1)},L={p:T,um:Se,m:Ke,r:nn,mt:he,mc:ge,pc:Y,pbc:G,n:v,o:t};return{render:A,hydrate:void 0,createApp:of(A)}}function ys({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function gf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wc(t,e,n=!1){const r=t.children,s=e.children;if(U(r)&&U(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Pt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&wc(o,a)),a.type===es&&a.patchFlag!==-1&&(a.el=o.el),a.type===we&&!a.el&&(a.el=o.el)}}function mf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ic(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ic(e)}function Xi(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const _f=Symbol.for("v-scx"),yf=()=>Be(_f);function Er(t,e,n){return Sc(t,e,n)}function Sc(t,e,n=ie){const{immediate:r,deep:s,flush:i,once:o}=n,a=pe({},n),c=e&&r||!e&&i!=="post";let l;if(Jn){if(i==="sync"){const g=yf();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=et,g.resume=et,g.pause=et,g}}const u=_e;a.call=(g,w,T)=>Ve(g,u,w,T);let f=!1;i==="post"?a.scheduler=g=>{ke(g,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,w)=>{w?g():_i(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const h=ku(t,e,a);return Jn&&(l?l.push(h):c&&h()),h}function vf(t,e,n){const r=this.proxy,s=de(t)?t.includes(".")?Tc(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=or(this),a=Sc(s,i.bind(r),n);return o(),a}function Tc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const bf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ue(e)}Modifiers`]||t[`${en(e)}Modifiers`];function Ef(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ie;let s=n;const i=e.startsWith("update:"),o=i&&bf(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>de(u)?u.trim():u)),o.number&&(s=n.map(Ns)));let a,c=r[a=us(e)]||r[a=us(Ue(e))];!c&&i&&(c=r[a=us(en(e))]),c&&Ve(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ve(l,t,6,s)}}function Cc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const u=Cc(l,e,!0);u&&(a=!0,pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(le(t)&&r.set(t,null),null):(U(i)?i.forEach(c=>o[c]=null):pe(o,i),le(t)&&r.set(t,o),o)}function Zr(t,e){return!t||!jr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,en(e))||Q(t,e))}function Qi(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:h,setupState:g,ctx:w,inheritAttrs:T}=t,$=kr(t);let x,R;try{if(n.shapeFlag&4){const k=s||r,K=k;x=Qe(l.call(K,k,u,f,g,h,w)),R=a}else{const k=e;x=Qe(k.length>1?k(f,{attrs:a,slots:o,emit:c}):k(f,null)),R=e.props?a:wf(a)}}catch(k){$n.length=0,Yr(k,t,1),x=ue(we)}let D=x;if(R&&T!==!1){const k=Object.keys(R),{shapeFlag:K}=D;k.length&&K&7&&(i&&k.some(si)&&(R=If(R,i)),D=Ht(D,R,!1,!0))}return n.dirs&&(D=Ht(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&Gn(D,n.transition),x=D,kr($),x}const wf=t=>{let e;for(const n in t)(n==="class"||n==="style"||jr(n))&&((e||(e={}))[n]=t[n]);return e},If=(t,e)=>{const n={};for(const r in t)(!si(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Sf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Zi(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!Zr(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Zi(r,o,l):!0:!!o;return!1}function Zi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Zr(n,i))return!0}return!1}function Tf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ac=t=>t.__isSuspense;function Cf(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Du(t)}const Xe=Symbol.for("v-fgt"),es=Symbol.for("v-txt"),we=Symbol.for("v-cmt"),vs=Symbol.for("v-stc"),$n=[];let Ne=null;function Me(t=!1){$n.push(Ne=t?null:[])}function Af(){$n.pop(),Ne=$n[$n.length-1]||null}let qn=1;function eo(t,e=!1){qn+=t,t<0&&Ne&&e&&(Ne.hasOnce=!0)}function Rc(t){return t.dynamicChildren=qn>0?Ne||ln:null,Af(),qn>0&&Ne&&Ne.push(t),t}function tt(t,e,n,r,s,i){return Rc(B(t,e,n,r,s,i,!0))}function Pc(t,e,n,r,s){return Rc(ue(t,e,n,r,s,!0))}function Nr(t){return t?t.__v_isVNode===!0:!1}function Jt(t,e){return t.type===e.type&&t.key===e.key}const Oc=({key:t})=>t??null,wr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?de(t)||ye(t)||j(t)?{i:xe,r:t,k:e,f:!!n}:t:null);function B(t,e=null,n=null,r=0,s=null,i=t===Xe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Oc(e),ref:e&&wr(e),scopeId:Xa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xe};return a?(bi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),qn>0&&!o&&Ne&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ne.push(c),c}const ue=Rf;function Rf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Yu)&&(t=we),Nr(t)){const a=Ht(t,e,!0);return n&&bi(a,n),qn>0&&!i&&Ne&&(a.shapeFlag&6?Ne[Ne.indexOf(t)]=a:Ne.push(a)),a.patchFlag=-2,a}if($f(t)&&(t=t.__vccOpts),e){e=Pf(e);let{class:a,style:c}=e;a&&!de(a)&&(e.class=ci(a)),le(c)&&(mi(c)&&!U(c)&&(c=pe({},c)),e.style=ai(c))}const o=de(t)?1:Ac(t)?128:Qa(t)?64:le(t)?4:j(t)?2:0;return B(t,e,n,r,s,o,i,!0)}function Pf(t){return t?mi(t)||mc(t)?pe({},t):t:null}function Ht(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Of(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Oc(l),ref:e&&e.ref?n&&i?U(i)?i.concat(wr(e)):[i,wr(e)]:wr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ht(t.ssContent),ssFallback:t.ssFallback&&Ht(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Gn(u,c.clone(u)),u}function ft(t=" ",e=0){return ue(es,null,t,e)}function kc(t="",e=!1){return e?(Me(),Pc(we,null,t)):ue(we,null,t)}function Qe(t){return t==null||typeof t=="boolean"?ue(we):U(t)?ue(Xe,null,t.slice()):Nr(t)?Pt(t):ue(es,null,String(t))}function Pt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ht(t)}function bi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),bi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!mc(e)?e._ctx=xe:s===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),r&64?(n=16,e=[ft(e)]):n=8);t.children=e,t.shapeFlag|=n}function Of(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ci([e.class,r.class]));else if(s==="style")e.style=ai([e.style,r.style]);else if(jr(s)){const i=e[s],o=r[s];o&&i!==o&&!(U(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Je(t,e,n,r=null){Ve(t,e,7,[n,r])}const kf=hc();let xf=0;function Nf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||kf,i={uid:xf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new su(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yc(r,s),emitsOptions:Cc(r,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ef.bind(null,i),t.ce&&t.ce(i),i}let _e=null;const xc=()=>_e||xe;let Dr,Ws;{const t=Gr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Dr=e("__VUE_INSTANCE_SETTERS__",n=>_e=n),Ws=e("__VUE_SSR_SETTERS__",n=>Jn=n)}const or=t=>{const e=_e;return Dr(t),t.scope.on(),()=>{t.scope.off(),Dr(e)}},to=()=>{_e&&_e.scope.off(),Dr(null)};function Nc(t){return t.vnode.shapeFlag&4}let Jn=!1;function Df(t,e=!1,n=!1){e&&Ws(e);const{props:r,children:s}=t.vnode,i=Nc(t);af(t,r,i,e),ff(t,s,n||e);const o=i?Lf(t,e):void 0;return e&&Ws(!1),o}function Lf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Qu);const{setup:r}=n;if(r){_t();const s=t.setupContext=r.length>1?Uf(t):null,i=or(t),o=ir(r,t,0,[t.props,s]),a=ba(o);if(yt(),i(),(a||t.sp)&&!Un(t)&&ic(t),a){if(o.then(to,to),e)return o.then(c=>{no(t,c)}).catch(c=>{Yr(c,t,0)});t.asyncDep=o}else no(t,o)}else Dc(t)}function no(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=Ka(e)),Dc(t)}function Dc(t,e,n){const r=t.type;t.render||(t.render=r.render||et);{const s=or(t);_t();try{Zu(t)}finally{yt(),s()}}}const Mf={get(t,e){return me(t,"get",""),t[e]}};function Uf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Mf),slots:t.slots,emit:t.emit,expose:e}}function ts(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ka(Su(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fn)return Fn[n](t)},has(e,n){return n in e||n in Fn}})):t.proxy}function Ff(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function $f(t){return j(t)&&"__vccOpts"in t}const Re=(t,e)=>Pu(t,e,Jn);function Ei(t,e,n){const r=arguments.length;return r===2?le(e)&&!U(e)?Nr(e)?ue(t,null,[e]):ue(t,e):ue(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Nr(n)&&(n=[n]),ue(t,e,n))}const Hf="3.5.20";/**
* @vue/runtime-dom v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ks;const ro=typeof window<"u"&&window.trustedTypes;if(ro)try{Ks=ro.createPolicy("vue",{createHTML:t=>t})}catch{}const Lc=Ks?t=>Ks.createHTML(t):t=>t,Bf="http://www.w3.org/2000/svg",Vf="http://www.w3.org/1998/Math/MathML",lt=typeof document<"u"?document:null,so=lt&&lt.createElement("template"),jf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?lt.createElementNS(Bf,t):e==="mathml"?lt.createElementNS(Vf,t):n?lt.createElement(t,{is:n}):lt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>lt.createTextNode(t),createComment:t=>lt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>lt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{so.innerHTML=Lc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=so.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},St="transition",An="animation",Yn=Symbol("_vtc"),Mc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Wf=pe({},Za,Mc),Kf=t=>(t.displayName="Transition",t.props=Wf,t),zf=Kf((t,{slots:e})=>Ei(Fu,Gf(t),e)),Kt=(t,e=[])=>{U(t)?t.forEach(n=>n(...e)):t&&t(...e)},io=t=>t?U(t)?t.some(e=>e.length>1):t.length>1:!1;function Gf(t){const e={};for(const N in t)N in Mc||(e[N]=t[N]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,w=qf(s),T=w&&w[0],$=w&&w[1],{onBeforeEnter:x,onEnter:R,onEnterCancelled:D,onLeave:k,onLeaveCancelled:K,onBeforeAppear:ne=x,onAppear:ee=R,onAppearCancelled:ge=D}=e,W=(N,J,he,Pe)=>{N._enterCancelled=Pe,zt(N,J?u:a),zt(N,J?l:o),he&&he()},G=(N,J)=>{N._isLeaving=!1,zt(N,f),zt(N,g),zt(N,h),J&&J()},oe=N=>(J,he)=>{const Pe=N?ee:R,fe=()=>W(J,N,he);Kt(Pe,[J,fe]),oo(()=>{zt(J,N?c:i),at(J,N?u:a),io(Pe)||ao(J,r,T,fe)})};return pe(e,{onBeforeEnter(N){Kt(x,[N]),at(N,i),at(N,o)},onBeforeAppear(N){Kt(ne,[N]),at(N,c),at(N,l)},onEnter:oe(!1),onAppear:oe(!0),onLeave(N,J){N._isLeaving=!0;const he=()=>G(N,J);at(N,f),N._enterCancelled?(at(N,h),uo()):(uo(),at(N,h)),oo(()=>{N._isLeaving&&(zt(N,f),at(N,g),io(k)||ao(N,r,$,he))}),Kt(k,[N,he])},onEnterCancelled(N){W(N,!1,void 0,!0),Kt(D,[N])},onAppearCancelled(N){W(N,!0,void 0,!0),Kt(ge,[N])},onLeaveCancelled(N){G(N),Kt(K,[N])}})}function qf(t){if(t==null)return null;if(le(t))return[bs(t.enter),bs(t.leave)];{const e=bs(t);return[e,e]}}function bs(t){return Yl(t)}function at(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Yn]||(t[Yn]=new Set)).add(e)}function zt(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Yn];n&&(n.delete(e),n.size||(t[Yn]=void 0))}function oo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Jf=0;function ao(t,e,n,r){const s=t._endId=++Jf,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Yf(t,e);if(!o)return r();const l=o+"end";let u=0;const f=()=>{t.removeEventListener(l,h),i()},h=g=>{g.target===t&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),t.addEventListener(l,h)}function Yf(t,e){const n=window.getComputedStyle(t),r=w=>(n[w]||"").split(", "),s=r(`${St}Delay`),i=r(`${St}Duration`),o=co(s,i),a=r(`${An}Delay`),c=r(`${An}Duration`),l=co(a,c);let u=null,f=0,h=0;e===St?o>0&&(u=St,f=o,h=i.length):e===An?l>0&&(u=An,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?St:An:null,h=u?u===St?i.length:c.length:0);const g=u===St&&/\b(transform|all)(,|$)/.test(r(`${St}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:g}}function co(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>lo(n)+lo(t[r])))}function lo(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function uo(){return document.body.offsetHeight}function Xf(t,e,n){const r=t[Yn];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const fo=Symbol("_vod"),Qf=Symbol("_vsh"),Zf=Symbol(""),ed=/(^|;)\s*display\s*:/;function td(t,e,n){const r=t.style,s=de(n);let i=!1;if(n&&!s){if(e)if(de(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ir(r,a,"")}else for(const o in e)n[o]==null&&Ir(r,o,"");for(const o in n)o==="display"&&(i=!0),Ir(r,o,n[o])}else if(s){if(e!==n){const o=r[Zf];o&&(n+=";"+o),r.cssText=n,i=ed.test(n)}}else e&&t.removeAttribute("style");fo in t&&(t[fo]=i?r.display:"",t[Qf]&&(r.display="none"))}const ho=/\s*!important$/;function Ir(t,e,n){if(U(n))n.forEach(r=>Ir(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=nd(t,e);ho.test(n)?t.setProperty(en(r),n.replace(ho,""),"important"):t[r]=n}}const po=["Webkit","Moz","ms"],Es={};function nd(t,e){const n=Es[e];if(n)return n;let r=Ue(e);if(r!=="filter"&&r in t)return Es[e]=r;r=zr(r);for(let s=0;s<po.length;s++){const i=po[s]+r;if(i in t)return Es[e]=i}return e}const go="http://www.w3.org/1999/xlink";function mo(t,e,n,r,s,i=nu(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(go,e.slice(6,e.length)):t.setAttributeNS(go,e,n):n==null||i&&!Sa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":st(n)?String(n):n)}function _o(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Lc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Sa(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Yt(t,e,n,r){t.addEventListener(e,n,r)}function rd(t,e,n,r){t.removeEventListener(e,n,r)}const yo=Symbol("_vei");function sd(t,e,n,r,s=null){const i=t[yo]||(t[yo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=id(e);if(r){const l=i[e]=cd(r,s);Yt(t,a,l,c)}else o&&(rd(t,a,o,c),i[e]=void 0)}}const vo=/(?:Once|Passive|Capture)$/;function id(t){let e;if(vo.test(t)){e={};let r;for(;r=t.match(vo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):en(t.slice(2)),e]}let ws=0;const od=Promise.resolve(),ad=()=>ws||(od.then(()=>ws=0),ws=Date.now());function cd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ve(ld(r,n.value),e,5,[r])};return n.value=t,n.attached=ad(),n}function ld(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const bo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ud=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Xf(t,r,o):e==="style"?td(t,n,r):jr(e)?si(e)||sd(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fd(t,e,r,o))?(_o(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&mo(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!de(r))?_o(t,Ue(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),mo(t,e,r,o))};function fd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&bo(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bo(e)&&de(n)?!1:e in t}const Lr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>vr(e,n):e};function dd(t){t.target.composing=!0}function Eo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const hn=Symbol("_assign"),wo={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[hn]=Lr(s);const i=r||s.props&&s.props.type==="number";Yt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ns(a)),t[hn](a)}),n&&Yt(t,"change",()=>{t.value=t.value.trim()}),e||(Yt(t,"compositionstart",dd),Yt(t,"compositionend",Eo),Yt(t,"change",Eo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[hn]=Lr(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ns(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},hd={deep:!0,created(t,e,n){t[hn]=Lr(n),Yt(t,"change",()=>{const r=t._modelValue,s=pd(t),i=t.checked,o=t[hn];if(U(r)){const a=Ta(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Wr(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Uc(t,i))})},mounted:Io,beforeUpdate(t,e,n){t[hn]=Lr(n),Io(t,e,n)}};function Io(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(U(e))s=Ta(e,r.props.value)>-1;else if(Wr(e))s=e.has(r.props.value);else{if(e===n)return;s=qr(e,Uc(t,!0))}t.checked!==s&&(t.checked=s)}function pd(t){return"_value"in t?t._value:t.value}function Uc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const gd=["ctrl","shift","alt","meta"],md={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>gd.some(n=>t[`${n}Key`]&&!e.includes(n))},_d=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const a=md[e[o]];if(a&&a(s,e))return}return t(s,...i)}))},yd=pe({patchProp:ud},jf);let So;function vd(){return So||(So=hf(yd))}const bd=((...t)=>{const e=vd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=wd(r);if(!s)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Ed(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Ed(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function wd(t){return de(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const an=typeof document<"u";function Fc(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Id(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Fc(t.default)}const X=Object.assign;function Is(t,e){const n={};for(const r in e){const s=e[r];n[r]=je(s)?s.map(t):t(s)}return n}const Hn=()=>{},je=Array.isArray,$c=/#/g,Sd=/&/g,Td=/\//g,Cd=/=/g,Ad=/\?/g,Hc=/\+/g,Rd=/%5B/g,Pd=/%5D/g,Bc=/%5E/g,Od=/%60/g,Vc=/%7B/g,kd=/%7C/g,jc=/%7D/g,xd=/%20/g;function wi(t){return encodeURI(""+t).replace(kd,"|").replace(Rd,"[").replace(Pd,"]")}function Nd(t){return wi(t).replace(Vc,"{").replace(jc,"}").replace(Bc,"^")}function zs(t){return wi(t).replace(Hc,"%2B").replace(xd,"+").replace($c,"%23").replace(Sd,"%26").replace(Od,"`").replace(Vc,"{").replace(jc,"}").replace(Bc,"^")}function Dd(t){return zs(t).replace(Cd,"%3D")}function Ld(t){return wi(t).replace($c,"%23").replace(Ad,"%3F")}function Md(t){return t==null?"":Ld(t).replace(Td,"%2F")}function Xn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ud=/\/$/,Fd=t=>t.replace(Ud,"");function Ss(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Vd(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Xn(o)}}function $d(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function To(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Hd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&yn(e.matched[r],n.matched[s])&&Wc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function yn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Bd(t[n],e[n]))return!1;return!0}function Bd(t,e){return je(t)?Co(t,e):je(e)?Co(e,t):t===e}function Co(t,e){return je(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Vd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Qn;(function(t){t.pop="pop",t.push="push"})(Qn||(Qn={}));var Bn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bn||(Bn={}));function jd(t){if(!t)if(an){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Fd(t)}const Wd=/^[^#]+#/;function Kd(t,e){return t.replace(Wd,"#")+e}function zd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ns=()=>({left:window.scrollX,top:window.scrollY});function Gd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=zd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ao(t,e){return(history.state?history.state.position-e:-1)+t}const Gs=new Map;function qd(t,e){Gs.set(t,e)}function Jd(t){const e=Gs.get(t);return Gs.delete(t),e}let Yd=()=>location.protocol+"//"+location.host;function Kc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),To(c,"")}return To(n,t)+r+s}function Xd(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const g=Kc(t,location),w=n.value,T=e.value;let $=0;if(h){if(n.value=g,e.value=h,o&&o===w){o=null;return}$=T?h.position-T.position:0}else r(g);s.forEach(x=>{x(n.value,w,{delta:$,type:Qn.pop,direction:$?$>0?Bn.forward:Bn.back:Bn.unknown})})};function c(){o=n.value}function l(h){s.push(h);const g=()=>{const w=s.indexOf(h);w>-1&&s.splice(w,1)};return i.push(g),g}function u(){const{history:h}=window;h.state&&h.replaceState(X({},h.state,{scroll:ns()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Ro(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ns():null}}function Qd(t){const{history:e,location:n}=window,r={value:Kc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Yd()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,l){const u=X({},e.state,Ro(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=X({},s.value,e.state,{forward:c,scroll:ns()});i(u.current,u,!0);const f=X({},Ro(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Zd(t){t=jd(t);const e=Qd(t),n=Xd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:Kd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function eh(t){return typeof t=="string"||t&&typeof t=="object"}function zc(t){return typeof t=="string"||typeof t=="symbol"}const Gc=Symbol("");var Po;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Po||(Po={}));function vn(t,e){return X(new Error,{type:t,[Gc]:!0},e)}function ct(t,e){return t instanceof Error&&Gc in t&&(e==null||!!(t.type&e))}const Oo="[^/]+?",th={sensitive:!1,strict:!1,start:!0,end:!0},nh=/[.+*?^${}()[\]/\\]/g;function rh(t,e){const n=X({},th,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let g=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(nh,"\\$&"),g+=40;else if(h.type===1){const{value:w,repeatable:T,optional:$,regexp:x}=h;i.push({name:w,repeatable:T,optional:$});const R=x||Oo;if(R!==Oo){g+=10;try{new RegExp(`(${R})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${w}" (${R}): `+k.message)}}let D=T?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;f||(D=$&&l.length<2?`(?:/${D})`:"/"+D),$&&(D+="?"),s+=D,g+=20,$&&(g+=-8),T&&(g+=-20),R===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",w=i[h-1];f[w.name]=g&&w.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:w,repeatable:T,optional:$}=g,x=w in l?l[w]:"";if(je(x)&&!T)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const R=je(x)?x.join("/"):x;if(!R)if($)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${w}"`);u+=R}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function sh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function qc(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=sh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ko(r))return 1;if(ko(s))return-1}return s.length-r.length}function ko(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ih={type:0,value:""},oh=/[a-zA-Z0-9_]/;function ah(t){if(!t)return[[]];if(t==="/")return[[ih]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:oh.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function ch(t,e,n){const r=rh(ah(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function lh(t,e){const n=[],r=new Map;e=Lo({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,g){const w=!g,T=No(f);T.aliasOf=g&&g.record;const $=Lo(e,f),x=[T];if("alias"in f){const k=typeof f.alias=="string"?[f.alias]:f.alias;for(const K of k)x.push(No(X({},T,{components:g?g.record.components:T.components,path:K,aliasOf:g?g.record:T})))}let R,D;for(const k of x){const{path:K}=k;if(h&&K[0]!=="/"){const ne=h.record.path,ee=ne[ne.length-1]==="/"?"":"/";k.path=h.record.path+(K&&ee+K)}if(R=ch(k,h,$),g?g.alias.push(R):(D=D||R,D!==R&&D.alias.push(R),w&&f.name&&!Do(R)&&o(f.name)),Jc(R)&&c(R),T.children){const ne=T.children;for(let ee=0;ee<ne.length;ee++)i(ne[ee],R,g&&g.children[ee])}g=g||R}return D?()=>{o(D)}:Hn}function o(f){if(zc(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const h=dh(f,n);n.splice(h,0,f),f.record.name&&!Do(f)&&r.set(f.record.name,f)}function l(f,h){let g,w={},T,$;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw vn(1,{location:f});$=g.record.name,w=X(xo(h.params,g.keys.filter(D=>!D.optional).concat(g.parent?g.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),f.params&&xo(f.params,g.keys.map(D=>D.name))),T=g.stringify(w)}else if(f.path!=null)T=f.path,g=n.find(D=>D.re.test(T)),g&&(w=g.parse(T),$=g.record.name);else{if(g=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!g)throw vn(1,{location:f,currentLocation:h});$=g.record.name,w=X({},h.params,f.params),T=g.stringify(w)}const x=[];let R=g;for(;R;)x.unshift(R.record),R=R.parent;return{name:$,path:T,params:w,matched:x,meta:fh(x)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function xo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function No(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:uh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function uh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Do(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fh(t){return t.reduce((e,n)=>X(e,n.meta),{})}function Lo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function dh(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;qc(t,e[i])<0?r=i:n=i+1}const s=hh(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function hh(t){let e=t;for(;e=e.parent;)if(Jc(e)&&qc(t,e)===0)return e}function Jc({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ph(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Hc," "),o=i.indexOf("="),a=Xn(o<0?i:i.slice(0,o)),c=o<0?null:Xn(i.slice(o+1));if(a in e){let l=e[a];je(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Mo(t){let e="";for(let n in t){const r=t[n];if(n=Dd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(je(r)?r.map(i=>i&&zs(i)):[r&&zs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function gh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=je(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const mh=Symbol(""),Uo=Symbol(""),rs=Symbol(""),Ii=Symbol(""),qs=Symbol("");function Rn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ot(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=h=>{h===!1?c(vn(4,{from:n,to:e})):h instanceof Error?c(h):eh(h)?c(vn(2,{from:e,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(h=>c(h))})}function Ts(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Fc(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Ot(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Id(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&Ot(g,n,r,o,a,s)()}))}}return i}function Fo(t){const e=Be(rs),n=Be(Ii),r=Re(()=>{const c=mt(t.to);return e.resolve(c)}),s=Re(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(yn.bind(null,u));if(h>-1)return h;const g=$o(c[l-2]);return l>1&&$o(u)===g&&f[f.length-1].path!==g?f.findIndex(yn.bind(null,c[l-2])):h}),i=Re(()=>s.value>-1&&Eh(n.params,r.value.params)),o=Re(()=>s.value>-1&&s.value===n.matched.length-1&&Wc(n.params,r.value.params));function a(c={}){if(bh(c)){const l=e[mt(t.replace)?"replace":"push"](mt(t.to)).catch(Hn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Re(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function _h(t){return t.length===1?t[0]:t}const yh=sc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Fo,setup(t,{slots:e}){const n=Jr(Fo(t)),{options:r}=Be(rs),s=Re(()=>({[Ho(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ho(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&_h(e.default(n));return t.custom?i:Ei("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),vh=yh;function bh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Eh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!je(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function $o(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ho=(t,e,n)=>t??e??n,wh=sc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Be(qs),s=Re(()=>t.route||r.value),i=Be(Uo,0),o=Re(()=>{let l=mt(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Re(()=>s.value.matched[o.value]);br(Uo,Re(()=>o.value+1)),br(mh,a),br(qs,s);const c=kt();return Er(()=>[c.value,a.value,t.name],([l,u,f],[h,g,w])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!yn(u,g)||!h)&&(u.enterCallbacks[f]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return Bo(n.default,{Component:h,route:l});const g=f.props[u],w=g?g===!0?l.params:typeof g=="function"?g(l):g:null,$=Ei(h,X({},w,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Bo(n.default,{Component:$,route:l})||$}}});function Bo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ih=wh;function Sh(t){const e=lh(t.routes,t),n=t.parseQuery||ph,r=t.stringifyQuery||Mo,s=t.history,i=Rn(),o=Rn(),a=Rn(),c=Tu(Tt);let l=Tt;an&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Is.bind(null,v=>""+v),f=Is.bind(null,Md),h=Is.bind(null,Xn);function g(v,O){let A,L;return zc(v)?(A=e.getRecordMatcher(v),L=O):L=v,e.addRoute(L,A)}function w(v){const O=e.getRecordMatcher(v);O&&e.removeRoute(O)}function T(){return e.getRoutes().map(v=>v.record)}function $(v){return!!e.getRecordMatcher(v)}function x(v,O){if(O=X({},O||c.value),typeof v=="string"){const m=Ss(n,v,O.path),y=e.resolve({path:m.path},O),b=s.createHref(m.fullPath);return X(m,y,{params:h(y.params),hash:Xn(m.hash),redirectedFrom:void 0,href:b})}let A;if(v.path!=null)A=X({},v,{path:Ss(n,v.path,O.path).path});else{const m=X({},v.params);for(const y in m)m[y]==null&&delete m[y];A=X({},v,{params:f(m)}),O.params=f(O.params)}const L=e.resolve(A,O),re=v.hash||"";L.params=u(h(L.params));const d=$d(r,X({},v,{hash:Nd(re),path:L.path})),p=s.createHref(d);return X({fullPath:d,hash:re,query:r===Mo?gh(v.query):v.query||{}},L,{redirectedFrom:void 0,href:p})}function R(v){return typeof v=="string"?Ss(n,v,c.value.path):X({},v)}function D(v,O){if(l!==v)return vn(8,{from:O,to:v})}function k(v){return ee(v)}function K(v){return k(X(R(v),{replace:!0}))}function ne(v){const O=v.matched[v.matched.length-1];if(O&&O.redirect){const{redirect:A}=O;let L=typeof A=="function"?A(v):A;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=R(L):{path:L},L.params={}),X({query:v.query,hash:v.hash,params:L.path!=null?{}:v.params},L)}}function ee(v,O){const A=l=x(v),L=c.value,re=v.state,d=v.force,p=v.replace===!0,m=ne(A);if(m)return ee(X(R(m),{state:typeof m=="object"?X({},re,m.state):re,force:d,replace:p}),O||A);const y=A;y.redirectedFrom=O;let b;return!d&&Hd(r,L,A)&&(b=vn(16,{to:y,from:L}),Ke(L,L,!0,!1)),(b?Promise.resolve(b):G(y,L)).catch(_=>ct(_)?ct(_,2)?_:It(_):Y(_,y,L)).then(_=>{if(_){if(ct(_,2))return ee(X({replace:p},R(_.to),{state:typeof _.to=="object"?X({},re,_.to.state):re,force:d}),O||y)}else _=N(y,L,!0,p,re);return oe(y,L,_),_})}function ge(v,O){const A=D(v,O);return A?Promise.reject(A):Promise.resolve()}function W(v){const O=rn.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(v):v()}function G(v,O){let A;const[L,re,d]=Th(v,O);A=Ts(L.reverse(),"beforeRouteLeave",v,O);for(const m of L)m.leaveGuards.forEach(y=>{A.push(Ot(y,v,O))});const p=ge.bind(null,v,O);return A.push(p),De(A).then(()=>{A=[];for(const m of i.list())A.push(Ot(m,v,O));return A.push(p),De(A)}).then(()=>{A=Ts(re,"beforeRouteUpdate",v,O);for(const m of re)m.updateGuards.forEach(y=>{A.push(Ot(y,v,O))});return A.push(p),De(A)}).then(()=>{A=[];for(const m of d)if(m.beforeEnter)if(je(m.beforeEnter))for(const y of m.beforeEnter)A.push(Ot(y,v,O));else A.push(Ot(m.beforeEnter,v,O));return A.push(p),De(A)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),A=Ts(d,"beforeRouteEnter",v,O,W),A.push(p),De(A))).then(()=>{A=[];for(const m of o.list())A.push(Ot(m,v,O));return A.push(p),De(A)}).catch(m=>ct(m,8)?m:Promise.reject(m))}function oe(v,O,A){a.list().forEach(L=>W(()=>L(v,O,A)))}function N(v,O,A,L,re){const d=D(v,O);if(d)return d;const p=O===Tt,m=an?history.state:{};A&&(L||p?s.replace(v.fullPath,X({scroll:p&&m&&m.scroll},re)):s.push(v.fullPath,re)),c.value=v,Ke(v,O,A,p),It()}let J;function he(){J||(J=s.listen((v,O,A)=>{if(!hr.listening)return;const L=x(v),re=ne(L);if(re){ee(X(re,{replace:!0,force:!0}),L).catch(Hn);return}l=L;const d=c.value;an&&qd(Ao(d.fullPath,A.delta),ns()),G(L,d).catch(p=>ct(p,12)?p:ct(p,2)?(ee(X(R(p.to),{force:!0}),L).then(m=>{ct(m,20)&&!A.delta&&A.type===Qn.pop&&s.go(-1,!1)}).catch(Hn),Promise.reject()):(A.delta&&s.go(-A.delta,!1),Y(p,L,d))).then(p=>{p=p||N(L,d,!1),p&&(A.delta&&!ct(p,8)?s.go(-A.delta,!1):A.type===Qn.pop&&ct(p,20)&&s.go(-1,!1)),oe(L,d,p)}).catch(Hn)}))}let Pe=Rn(),fe=Rn(),te;function Y(v,O,A){It(v);const L=fe.list();return L.length?L.forEach(re=>re(v,O,A)):console.error(v),Promise.reject(v)}function it(){return te&&c.value!==Tt?Promise.resolve():new Promise((v,O)=>{Pe.add([v,O])})}function It(v){return te||(te=!v,he(),Pe.list().forEach(([O,A])=>v?A(v):O()),Pe.reset()),v}function Ke(v,O,A,L){const{scrollBehavior:re}=t;if(!an||!re)return Promise.resolve();const d=!A&&Jd(Ao(v.fullPath,0))||(L||!A)&&history.state&&history.state.scroll||null;return Ga().then(()=>re(v,O,d)).then(p=>p&&Gd(p)).catch(p=>Y(p,v,O))}const Se=v=>s.go(v);let nn;const rn=new Set,hr={currentRoute:c,listening:!0,addRoute:g,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:$,getRoutes:T,resolve:x,options:t,push:k,replace:K,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:fe.add,isReady:it,install(v){const O=this;v.component("RouterLink",vh),v.component("RouterView",Ih),v.config.globalProperties.$router=O,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>mt(c)}),an&&!nn&&c.value===Tt&&(nn=!0,k(s.location).catch(re=>{}));const A={};for(const re in Tt)Object.defineProperty(A,re,{get:()=>c.value[re],enumerable:!0});v.provide(rs,O),v.provide(Ii,Va(A)),v.provide(qs,c);const L=v.unmount;rn.add(v),v.unmount=function(){rn.delete(v),rn.size<1&&(l=Tt,J&&J(),J=null,c.value=Tt,nn=!1,te=!1),L()}}};function De(v){return v.reduce((O,A)=>O.then(()=>W(A)),Promise.resolve())}return hr}function Th(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>yn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>yn(l,c))||s.push(c))}return[n,r,s]}function Si(){return Be(rs)}function Ch(t){return Be(Ii)}const Ah="/rac/avatar.png",Rh=()=>{};var Vo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ph=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),r.push(n[u],n[f],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ph(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new Oh;const h=i<<2|a>>4;if(r.push(h),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const w=l<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Oh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kh=function(t){const e=Yc(t);return Xc.encodeByteArray(e,!0)},Qc=function(t){return kh(t).replace(/\./g,"")},Zc=function(t){try{return Xc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=()=>xh().__FIREBASE_DEFAULTS__,Dh=()=>{if(typeof process>"u"||typeof Vo>"u")return;const t=Vo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Lh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zc(t[1]);return e&&JSON.parse(e)},Ti=()=>{try{return Rh()||Nh()||Dh()||Lh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mh=t=>Ti()?.emulatorHosts?.[t],el=()=>Ti()?.config,tl=t=>Ti()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fh(t){return(await fetch(t,{credentials:"include"})).ok}const Vn={};function $h(){const t={prod:[],emulator:[]};for(const e of Object.keys(Vn))Vn[e]?t.emulator.push(e):t.prod.push(e);return t}function Hh(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let jo=!1;function Bh(t,e){if(typeof window>"u"||typeof document>"u"||!ss(window.location.host)||Vn[t]===e||Vn[t]||jo)return;Vn[t]=e;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",i=$h().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,g){h.setAttribute("width","24"),h.setAttribute("id",g),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function l(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{jo=!0,o()},h}function u(h,g){h.setAttribute("id",g),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function f(){const h=Hh(r),g=n("text"),w=document.getElementById(g)||document.createElement("span"),T=n("learnmore"),$=document.getElementById(T)||document.createElement("a"),x=n("preprendIcon"),R=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const D=h.element;a(D),u($,T);const k=l();c(R,x),D.append(R,w,$,k),document.body.appendChild(D)}i?(w.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function jh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zh(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gh(){try{return typeof indexedDB=="object"}catch{return!1}}function qh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Jh,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Yh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Bt(s,a,r)}}function Yh(t,e){return t.replace(Xh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Xh=/\{\$([^}]+)}/g;function Qh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wo(i)&&Wo(o)){if(!bn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function On(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function kn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Zh(t,e){const n=new ep(t,e);return n.subscribe.bind(n)}class ep{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Cs),s.error===void 0&&(s.error=Cs),s.complete===void 0&&(s.complete=Cs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t){return t&&t._delegate?t._delegate:t}class En{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Uh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sp(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rp(t){return t===qt?void 0:t}function sp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new np(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const op={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},ap=se.INFO,cp={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},lp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=cp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nl{constructor(e){this.name=e,this._logLevel=ap,this._logHandler=lp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?op[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const up=(t,e)=>e.some(n=>t instanceof n);let Ko,zo;function fp(){return Ko||(Ko=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dp(){return zo||(zo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rl=new WeakMap,Js=new WeakMap,sl=new WeakMap,As=new WeakMap,Ci=new WeakMap;function hp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ut(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rl.set(n,t)}).catch(()=>{}),Ci.set(e,t),e}function pp(t){if(Js.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Js.set(t,e)}let Ys={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Js.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gp(t){Ys=t(Ys)}function mp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rs(this),e,...n);return sl.set(r,e.sort?e.sort():[e]),Ut(r)}:dp().includes(t)?function(...e){return t.apply(Rs(this),e),Ut(rl.get(this))}:function(...e){return Ut(t.apply(Rs(this),e))}}function _p(t){return typeof t=="function"?mp(t):(t instanceof IDBTransaction&&pp(t),up(t,fp())?new Proxy(t,Ys):t)}function Ut(t){if(t instanceof IDBRequest)return hp(t);if(As.has(t))return As.get(t);const e=_p(t);return e!==t&&(As.set(t,e),Ci.set(e,t)),e}const Rs=t=>Ci.get(t);function yp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ut(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ut(o.result),c.oldVersion,c.newVersion,Ut(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const vp=["get","getKey","getAll","getAllKeys","count"],bp=["put","add","delete","clear"],Ps=new Map;function Go(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ps.get(e))return Ps.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=bp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ps.set(e,i),i}gp(t=>({...t,get:(e,n,r)=>Go(e,n)||t.get(e,n,r),has:(e,n)=>!!Go(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wp(t){return t.getComponent()?.type==="VERSION"}const Xs="@firebase/app",qo="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new nl("@firebase/app"),Ip="@firebase/app-compat",Sp="@firebase/analytics-compat",Tp="@firebase/analytics",Cp="@firebase/app-check-compat",Ap="@firebase/app-check",Rp="@firebase/auth",Pp="@firebase/auth-compat",Op="@firebase/database",kp="@firebase/data-connect",xp="@firebase/database-compat",Np="@firebase/functions",Dp="@firebase/functions-compat",Lp="@firebase/installations",Mp="@firebase/installations-compat",Up="@firebase/messaging",Fp="@firebase/messaging-compat",$p="@firebase/performance",Hp="@firebase/performance-compat",Bp="@firebase/remote-config",Vp="@firebase/remote-config-compat",jp="@firebase/storage",Wp="@firebase/storage-compat",Kp="@firebase/firestore",zp="@firebase/ai",Gp="@firebase/firestore-compat",qp="firebase",Jp="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="[DEFAULT]",Yp={[Xs]:"fire-core",[Ip]:"fire-core-compat",[Tp]:"fire-analytics",[Sp]:"fire-analytics-compat",[Ap]:"fire-app-check",[Cp]:"fire-app-check-compat",[Rp]:"fire-auth",[Pp]:"fire-auth-compat",[Op]:"fire-rtdb",[kp]:"fire-data-connect",[xp]:"fire-rtdb-compat",[Np]:"fire-fn",[Dp]:"fire-fn-compat",[Lp]:"fire-iid",[Mp]:"fire-iid-compat",[Up]:"fire-fcm",[Fp]:"fire-fcm-compat",[$p]:"fire-perf",[Hp]:"fire-perf-compat",[Bp]:"fire-rc",[Vp]:"fire-rc-compat",[jp]:"fire-gcs",[Wp]:"fire-gcs-compat",[Kp]:"fire-fst",[Gp]:"fire-fst-compat",[zp]:"fire-vertex","fire-js":"fire-js",[qp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Map,Xp=new Map,Zs=new Map;function Jo(t,e){try{t.container.addComponent(e)}catch(n){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zn(t){const e=t.name;if(Zs.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;Zs.set(e,t);for(const n of Mr.values())Jo(n,t);for(const n of Xp.values())Jo(n,t);return!0}function il(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ze(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new ar("app","Firebase",Qp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=Jp;function ol(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Qs,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ft.create("bad-app-name",{appName:String(s)});if(n||(n=el()),!n)throw Ft.create("no-options");const i=Mr.get(s);if(i){if(bn(n,i.options)&&bn(r,i.config))return i;throw Ft.create("duplicate-app",{appName:s})}const o=new ip(s);for(const c of Zs.values())o.addComponent(c);const a=new Zp(n,r,o);return Mr.set(s,a),a}function eg(t=Qs){const e=Mr.get(t);if(!e&&t===Qs&&el())return ol();if(!e)throw Ft.create("no-app",{appName:t});return e}function pn(t,e,n){let r=Yp[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(o.join(" "));return}Zn(new En(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="firebase-heartbeat-database",ng=1,er="firebase-heartbeat-store";let Os=null;function al(){return Os||(Os=yp(tg,ng,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(er)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ft.create("idb-open",{originalErrorMessage:t.message})})),Os}async function rg(t){try{const n=(await al()).transaction(er),r=await n.objectStore(er).get(cl(t));return await n.done,r}catch(e){if(e instanceof Bt)vt.warn(e.message);else{const n=Ft.create("idb-get",{originalErrorMessage:e?.message});vt.warn(n.message)}}}async function Yo(t,e){try{const r=(await al()).transaction(er,"readwrite");await r.objectStore(er).put(e,cl(t)),await r.done}catch(n){if(n instanceof Bt)vt.warn(n.message);else{const r=Ft.create("idb-set",{originalErrorMessage:n?.message});vt.warn(r.message)}}}function cl(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=1024,ig=30;class og{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xo();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>ig){const s=lg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){vt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xo(),{heartbeatsToSend:n,unsentEntries:r}=ag(this._heartbeatsCache.heartbeats),s=Qc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return vt.warn(e),""}}}function Xo(){return new Date().toISOString().substring(0,10)}function ag(t,e=sg){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gh()?qh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rg(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qo(t){return Qc(JSON.stringify({version:2,heartbeats:t})).length}function lg(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t){Zn(new En("platform-logger",e=>new Ep(e),"PRIVATE")),Zn(new En("heartbeat",e=>new og(e),"PRIVATE")),pn(Xs,qo,t),pn(Xs,qo,"esm2020"),pn("fire-js","")}ug("");var fg="firebase",dg="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(fg,dg,"app");function ll(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hg=ll,ul=new ar("auth","Firebase",ll());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new nl("@firebase/auth");function pg(t,...e){Ur.logLevel<=se.WARN&&Ur.warn(`Auth (${lr}): ${t}`,...e)}function Sr(t,...e){Ur.logLevel<=se.ERROR&&Ur.error(`Auth (${lr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,...e){throw Ai(t,...e)}function nt(t,...e){return Ai(t,...e)}function fl(t,e,n){const r={...hg(),[e]:n};return new ar("auth","Firebase",r).create(e,{appName:t.name})}function $t(t){return fl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ai(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ul.create(t,...e)}function H(t,e,...n){if(!t)throw Ai(e,...n)}function pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sr(e),new Error(e)}function bt(t,e){t||pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(){return typeof self<"u"&&self.location?.href||""}function gg(){return Zo()==="http:"||Zo()==="https:"}function Zo(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gg()||Wh()||"connection"in navigator)?navigator.onLine:!0}function _g(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n){this.shortDelay=e,this.longDelay=n,bt(n>e,"Short delay should be less than long delay!"),this.isMobile=Vh()||Kh()}get(){return mg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t,e){bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bg=new ur(3e4,6e4);function tn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Vt(t,e,n,r,s={}){return hl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=cr({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...i};return jh()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&ss(t.emulatorConfig.host)&&(l.credentials="include"),dl.fetch()(await pl(t,t.config.apiHost,n,a),l)})}async function hl(t,e,n){t._canInitEmulator=!1;const r={...yg,...e};try{const s=new wg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw yr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw yr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw yr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw yr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw fl(t,u,l);We(t,u)}}catch(s){if(s instanceof Bt)throw s;We(t,"network-request-failed",{message:String(s)})}}async function is(t,e,n,r,s={}){const i=await Vt(t,e,n,r,s);return"mfaPendingCredential"in i&&We(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function pl(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ri(t.config,s):`${t.config.apiScheme}://${s}`;return vg.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Eg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),bg.get())})}}function yr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nt(t,e,r);return s.customData._tokenResponse=n,s}function ea(t){return t!==void 0&&t.enterprise!==void 0}class Ig{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Eg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Sg(t,e){return Vt(t,"GET","/v2/recaptchaConfig",tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(t,e){return Vt(t,"POST","/v1/accounts:delete",e)}async function Fr(t,e){return Vt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cg(t,e=!1){const n=wt(t),r=await n.getIdToken(e),s=Pi(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:jn(ks(s.auth_time)),issuedAtTime:jn(ks(s.iat)),expirationTime:jn(ks(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function ks(t){return Number(t)*1e3}function Pi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Sr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zc(n);return s?JSON.parse(s):(Sr("Failed to decode base64 JWT payload"),null)}catch(s){return Sr("Caught error parsing JWT payload as JSON",s?.toString()),null}}function ta(t){const e=Pi(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&Ag(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ag({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jn(this.lastLoginAt),this.creationTime=jn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(t){const e=t.auth,n=await t.getIdToken(),r=await tr(t,Fr(e,{idToken:n}));H(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?gl(s.providerUserInfo):[],o=Og(t.providerData,i),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,l=a?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ti(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,u)}async function Pg(t){const e=wt(t);await $r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Og(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function gl(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(t,e){const n=await hl(t,{},async()=>{const r=cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await pl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return t.emulatorConfig&&ss(t.emulatorConfig.host)&&(c.credentials="include"),dl.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xg(t,e){return Vt(t,"POST","/v2/accounts:revokeToken",tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ta(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=ta(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await kg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new gn;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fe{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Rg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ti(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await tr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Cg(this,e)}reload(){return Pg(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $r(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject($t(this.auth));const e=await this.getIdToken();return await tr(this,Tg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:f,emailVerified:h,isAnonymous:g,providerData:w,stsTokenManager:T}=n;H(f&&T,e,"internal-error");const $=gn.fromJSON(this.name,T);H(typeof f=="string",e,"internal-error"),Ct(r,e.name),Ct(s,e.name),H(typeof h=="boolean",e,"internal-error"),H(typeof g=="boolean",e,"internal-error"),Ct(i,e.name),Ct(o,e.name),Ct(a,e.name),Ct(c,e.name),Ct(l,e.name),Ct(u,e.name);const x=new Fe({uid:f,auth:e,email:s,emailVerified:h,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:$,createdAt:l,lastLoginAt:u});return w&&Array.isArray(w)&&(x.providerData=w.map(R=>({...R}))),c&&(x._redirectEventId=c),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new gn;s.updateFromServerResponse(n);const i=new Fe({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $r(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?gl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new gn;a.updateFromIdToken(r);const c=new Fe({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ti(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new Map;function gt(t){bt(t instanceof Function,"Expected a class definition");let e=na.get(t);return e?(bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,na.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ml.type="NONE";const ra=ml;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e,n){return`firebase:${t}:${e}:${n}`}class mn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Tr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Tr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Fr(this.auth,{idToken:e}).catch(()=>{});return n?Fe._fromGetAccountInfoResponse(this.auth,n,e):null}return Fe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new mn(gt(ra),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||gt(ra);const o=Tr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const h=await Fr(e,{idToken:u}).catch(()=>{});if(!h)break;f=await Fe._fromGetAccountInfoResponse(e,h,u)}else f=Fe._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new mn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new mn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_l(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wl(e))return"Blackberry";if(Il(e))return"Webos";if(yl(e))return"Safari";if((e.includes("chrome/")||vl(e))&&!e.includes("edge/"))return"Chrome";if(El(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function _l(t=Ie()){return/firefox\//i.test(t)}function yl(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vl(t=Ie()){return/crios\//i.test(t)}function bl(t=Ie()){return/iemobile/i.test(t)}function El(t=Ie()){return/android/i.test(t)}function wl(t=Ie()){return/blackberry/i.test(t)}function Il(t=Ie()){return/webos/i.test(t)}function Oi(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ng(t=Ie()){return Oi(t)&&!!window.navigator?.standalone}function Dg(){return zh()&&document.documentMode===10}function Sl(t=Ie()){return Oi(t)||El(t)||Il(t)||wl(t)||/windows phone/i.test(t)||bl(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t,e=[]){let n;switch(t){case"Browser":n=sa(Ie());break;case"Worker":n=`${sa(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${lr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mg(t,e={}){return Vt(t,"GET","/v2/passwordPolicy",tn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=6;class Fg{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Ug,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ia(this),this.idTokenSubscription=new ia(this),this.beforeStateQueue=new Lg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ul,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gt(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await mn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fr(this,{idToken:e}),r=await Fe._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ze(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $r(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_g()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ze(this.app))return Promise.reject($t(this));const n=e?wt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ze(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Mg(this),n=new Fg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ar("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xg(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await mn.create(this,[gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ze(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&pg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function In(t){return wt(t)}class ia{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zh(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hg(t){os=t}function Cl(t){return os.loadJS(t)}function Bg(){return os.recaptchaEnterpriseScript}function Vg(){return os.gapiScript}function jg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Wg{constructor(){this.enterprise=new Kg}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Kg{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const zg="recaptcha-enterprise",Al="NO_RECAPTCHA";class Gg{constructor(e){this.type=zg,this.auth=In(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Sg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ig(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ea(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Al)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Wg().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ea(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Bg();c.length!==0&&(c+=a),Cl(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function oa(t,e,n,r=!1,s=!1){const i=new Gg(t);let o;if(s)o=Al;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function aa(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await oa(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await oa(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e){const n=il(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(bn(i,e??{}))return s;We(s,"already-initialized")}return n.initialize({options:e})}function Jg(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(gt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function Yg(t,e,n){const r=In(t);H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Rl(e),{host:o,port:a}=Xg(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){H(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),H(bn(l,r.config.emulator)&&bn(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,ss(o)?(Fh(`${i}//${o}${c}`),Bh("Auth",!0)):Qg()}function Rl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Xg(t){const e=Rl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ca(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ca(o)}}}function ca(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Qg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,n){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}async function Zg(t,e){return Vt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(t,e){return is(t,"POST","/v1/accounts:signInWithPassword",tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(t,e){return is(t,"POST","/v1/accounts:signInWithEmailLink",tn(t,e))}async function nm(t,e){return is(t,"POST","/v1/accounts:signInWithEmailLink",tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends ki{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new nr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new nr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return aa(e,n,"signInWithPassword",em);case"emailLink":return tm(e,{email:this._email,oobCode:this._password});default:We(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return aa(e,r,"signUpPassword",Zg);case"emailLink":return nm(e,{idToken:n,email:this._email,oobCode:this._password});default:We(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(t,e){return is(t,"POST","/v1/accounts:signInWithIdp",tn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="http://localhost";class Zt extends ki{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):We("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Zt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _n(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_n(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_n(e,n)}buildRequest(){const e={requestUri:rm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function im(t){const e=On(kn(t)).link,n=e?On(kn(e)).deep_link_id:null,r=On(kn(t)).deep_link_id;return(r?On(kn(r)).link:null)||r||n||e||t}class xi{constructor(e){const n=On(kn(e)),r=n.apiKey??null,s=n.oobCode??null,i=sm(n.mode??null);H(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=im(e);try{return new xi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.providerId=Sn.PROVIDER_ID}static credential(e,n){return nr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xi.parseLink(n);return H(r,"argument-error"),nr._fromEmailAndCode(e,r.code,r.tenantId)}}Sn.PROVIDER_ID="password";Sn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Pl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends fr{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends fr{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.GITHUB_SIGN_IN_METHOD="github.com";Dt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends fr{constructor(){super("twitter.com")}static credential(e,n){return Zt._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.TWITTER_SIGN_IN_METHOD="twitter.com";Lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Fe._fromIdTokenResponse(e,r,s),o=la(r);return new wn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=la(r);return new wn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function la(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Bt{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Hr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Hr(e,n,r,s)}}function Ol(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hr._fromErrorAndOperation(t,i,e,r):i})}async function om(t,e,n=!1){const r=await tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(t,e,n=!1){const{auth:r}=t;if(Ze(r.app))return Promise.reject($t(r));const s="reauthenticate";try{const i=await tr(t,Ol(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=Pi(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),wn._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&We(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kl(t,e,n=!1){if(Ze(t.app))return Promise.reject($t(t));const r="signIn",s=await Ol(t,r,e),i=await wn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function cm(t,e){return kl(In(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(t){const e=In(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function um(t,e,n){return Ze(t.app)?Promise.reject($t(t)):cm(wt(t),Sn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&lm(t),r})}function fm(t,e,n,r){return wt(t).onIdTokenChanged(e,n,r)}function dm(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}function xl(t,e,n,r){return wt(t).onAuthStateChanged(e,n,r)}function hm(t){return wt(t).signOut()}const Br="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Br,"1"),this.storage.removeItem(Br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=1e3,gm=10;class Dl extends Nl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Dg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dl.type="LOCAL";const mm=Dl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends Nl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ll.type="SESSION";const Ml=Ll;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new as(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await _m(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}as.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ni("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function vm(t){rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function bm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Em(){return navigator?.serviceWorker?.controller||null}function wm(){return Ul()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="firebaseLocalStorageDb",Im=1,Vr="firebaseLocalStorage",$l="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cs(t,e){return t.transaction([Vr],e?"readwrite":"readonly").objectStore(Vr)}function Sm(){const t=indexedDB.deleteDatabase(Fl);return new dr(t).toPromise()}function ni(){const t=indexedDB.open(Fl,Im);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vr,{keyPath:$l})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vr)?e(r):(r.close(),await Sm(),e(await ni()))})})}async function ua(t,e,n){const r=cs(t,!0).put({[$l]:e,value:n});return new dr(r).toPromise()}async function Tm(t,e){const n=cs(t,!1).get(e),r=await new dr(n).toPromise();return r===void 0?null:r.value}function fa(t,e){const n=cs(t,!0).delete(e);return new dr(n).toPromise()}const Cm=800,Am=3;class Hl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ni(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Am)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ul()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=as._getInstance(wm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await bm(),!this.activeServiceWorker)return;this.sender=new ym(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Em()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ni();return await ua(e,Br,"1"),await fa(e,Br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ua(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Tm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=cs(s,!1).getAll();return new dr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hl.type="LOCAL";const Rm=Hl;new ur(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t,e){return e?gt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends ki{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _n(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _n(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _n(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Om(t){return kl(t.auth,new Di(t),t.bypassAuthState)}function km(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),am(n,new Di(t),t.bypassAuthState)}async function xm(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),om(n,new Di(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Om;case"linkViaPopup":case"linkViaRedirect":return xm;case"reauthViaPopup":case"reauthViaRedirect":return km;default:We(this.auth,"internal-error")}}resolve(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new ur(2e3,1e4);class cn extends Bl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const e=Ni();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Nm.get())};e()}}cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="pendingRedirect",Cr=new Map;class Lm extends Bl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Cr.get(this.auth._key());if(!e){try{const r=await Mm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cr.set(this.auth._key(),e)}return this.bypassAuthState||Cr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mm(t,e){const n=$m(e),r=Fm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Um(t,e){Cr.set(t._key(),e)}function Fm(t){return gt(t._redirectPersistence)}function $m(t){return Tr(Dm,t.config.apiKey,t.name)}async function Hm(t,e,n=!1){if(Ze(t.app))return Promise.reject($t(t));const r=In(t),s=Pm(r,e),o=await new Lm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=600*1e3;class Vm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!Vl(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(nt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bm&&this.cachedEventUids.clear(),this.cachedEventUids.has(da(e))}saveEventToCache(e){this.cachedEventUids.add(da(e)),this.lastProcessedEventTime=Date.now()}}function da(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vl({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function jm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wm(t,e={}){return Vt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zm=/^https?/;async function Gm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wm(t);for(const n of e)try{if(qm(n))return}catch{}We(t,"unauthorized-domain")}function qm(t){const e=ei(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zm.test(n))return!1;if(Km.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=new ur(3e4,6e4);function ha(){const t=rt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ym(t){return new Promise((e,n)=>{function r(){ha(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ha(),n(nt(t,"network-request-failed"))},timeout:Jm.get()})}if(rt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(rt().gapi?.load)r();else{const s=jg("iframefcb");return rt()[s]=()=>{gapi.load?r():n(nt(t,"network-request-failed"))},Cl(`${Vg()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Ar=null,e})}let Ar=null;function Xm(t){return Ar=Ar||Ym(t),Ar}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=new ur(5e3,15e3),Zm="__/auth/iframe",e_="emulator/auth/iframe",t_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function r_(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ri(e,e_):`https://${t.config.authDomain}/${Zm}`,r={apiKey:e.apiKey,appName:t.name,v:lr},s=n_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${cr(r).slice(1)}`}async function s_(t){const e=await Xm(t),n=rt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:r_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nt(t,"network-request-failed"),a=rt().setTimeout(()=>{i(o)},Qm.get());function c(){rt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o_=500,a_=600,c_="_blank",l_="http://localhost";class pa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u_(t,e,n,r=o_,s=a_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...i_,width:r.toString(),height:s.toString(),top:i,left:o},l=Ie().toLowerCase();n&&(a=vl(l)?c_:n),_l(l)&&(e=e||l_,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,w])=>`${h}${g}=${w},`,"");if(Ng(l)&&a!=="_self")return f_(e||"",a),new pa(null);const f=window.open(e||"",a,u);H(f,t,"popup-blocked");try{f.focus()}catch{}return new pa(f)}function f_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="__/auth/handler",h_="emulator/auth/handler",p_=encodeURIComponent("fac");async function ga(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:lr,eventId:s};if(e instanceof Pl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof fr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${p_}=${encodeURIComponent(c)}`:"";return`${g_(t)}?${cr(a).slice(1)}${l}`}function g_({config:t}){return t.emulator?Ri(t,h_):`https://${t.authDomain}/${d_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="webStorageSupport";class m_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ml,this._completeRedirectFn=Hm,this._overrideRedirectResult=Um}async _openPopup(e,n,r,s){bt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await ga(e,n,r,ei(),s);return u_(e,i,Ni())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ga(e,n,r,ei(),s);return vm(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(bt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await s_(e),r=new Vm(e);return n.register("authEvent",s=>(H(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xs,{type:xs},s=>{const i=s?.[0]?.[xs];i!==void 0&&n(!!i),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Gm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sl()||yl()||Oi()}}const __=m_;var ma="@firebase/auth",_a="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function b_(t){Zn(new En("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tl(t)},l=new $g(r,s,i,c);return Jg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zn(new En("auth-internal",e=>{const n=In(e.getProvider("auth").getImmediate());return(r=>new y_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(ma,_a,v_(t)),pn(ma,_a,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=300,w_=tl("authIdTokenMaxAge")||E_;let ya=null;const I_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>w_)return;const s=n?.token;ya!==s&&(ya=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jl(t=eg()){const e=il(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qg(t,{popupRedirectResolver:__,persistence:[Rm,mm,Ml]}),r=tl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=I_(i.toString());dm(n,o,()=>o(n.currentUser)),fm(n,a=>o(a))}}const s=Mh("auth");return s&&Yg(n,`http://${s}`),n}function S_(){return document.getElementsByTagName("head")?.[0]??document}Hg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",S_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});b_("Browser");const T_={apiKey:"AIzaSyDcriwDy-Wl8BYIbZO8_GtIwctqxUzEAJ4",authDomain:"prueba1-esmn.firebaseapp.com",projectId:"prueba1-esmn",storageBucket:"prueba1-esmn.firebasestorage.app",messagingSenderId:"155924203510",appId:"1:155924203510:web:b7b99a9b766d092f0529d7"},C_=ol(T_),Li=jl(C_),Rr=kt(null);xl(Li,t=>{Rr.value=t});function Wl(){const t=Re(()=>!!Rr.value),e=Re(()=>Rr.value?.email||"");return{user:Rr,isLoggedIn:t,email:e}}const ls=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},A_={class:"bg-teal-800 text-white px-4 py-3 md:px-6 flex items-center justify-between relative"},R_={class:"hidden md:flex items-center space-x-6"},P_={key:0,class:"md:hidden absolute top-full left-0 w-full bg-teal-800 flex flex-col space-y-2 px-4 py-3 shadow-lg"},O_={class:"flex items-center space-x-2"},k_={class:"hidden md:inline text-sm"},x_={__name:"BarraApp",setup(t){const e=kt(!1);function n(){e.value=!e.value}const{user:r}=Wl();return Si(),(s,i)=>{const o=uc("router-link");return Me(),tt("nav",A_,[B("button",{onClick:n,class:"md:hidden text-white hover:text-teal-200 transition","aria-label":"Menú"},[...i[4]||(i[4]=[B("i",{class:"fas fa-bars text-xl"},null,-1)])]),B("div",R_,[ue(o,{to:"/dashboard",class:"hover:bg-teal-500 px-3 py-3 transition"},{default:At(()=>[...i[5]||(i[5]=[ft(" Dashboard ",-1)])]),_:1}),ue(o,{to:"/inscripciones",class:"hover:bg-teal-500 px-3 py-2 rounded transition"},{default:At(()=>[...i[6]||(i[6]=[ft(" Inscripciones ",-1)])]),_:1}),ue(o,{to:"/otras",onClick:i[0]||(i[0]=a=>e.value=!1),class:"hover:bg-teal-500 px-3 py-2 rounded transition"},{default:At(()=>[...i[7]||(i[7]=[ft(" Otras Funciones ",-1)])]),_:1})]),ue(zf,{name:"slide"},{default:At(()=>[e.value?(Me(),tt("div",P_,[ue(o,{to:"/dashboard",onClick:i[1]||(i[1]=a=>e.value=!1),class:"hover:bg-teal-500 px-3 py-2 rounded transition"},{default:At(()=>[...i[8]||(i[8]=[ft(" Dashboard ",-1)])]),_:1}),ue(o,{to:"/inscripciones",onClick:i[2]||(i[2]=a=>e.value=!1),class:"hover:bg-teal-500 px-3 py-2 rounded transition"},{default:At(()=>[...i[9]||(i[9]=[ft(" Inscripciones ",-1)])]),_:1}),ue(o,{to:"/otras",onClick:i[3]||(i[3]=a=>e.value=!1),class:"hover:bg-teal-500 px-3 py-2 rounded transition"},{default:At(()=>[...i[10]||(i[10]=[ft(" Otras Funciones ",-1)])]),_:1})])):kc("",!0)]),_:1}),B("div",O_,[B("span",k_,sr(mt(r)?.email||"Usuario no registrado"),1),i[11]||(i[11]=B("img",{src:Ah,alt:"Usuario",class:"w-8 h-8 rounded-full object-cover border-2 border-teal-300"},null,-1))])])}}},N_=ls(x_,[["__scopeId","data-v-242e6865"]]),D_={},L_={class:"bg-gray-700 text-white text-xs text-center py-3"};function M_(t,e){return Me(),tt("footer",L_,[e[0]||(e[0]=B("p",null,"--- Sistema en desarrollo ---",-1)),B("p",null,"© "+sr(new Date().getFullYear())+" Escuela Superior de Música de Neuquén",1)])}const U_=ls(D_,[["render",M_]]),F_={class:"min-h-screen bg-stone-100 flex flex-col"},$_={class:"flex-grow"},H_={__name:"App",setup(t){const e=Ch(),n=Re(()=>e.name==="Login");return(r,s)=>{const i=uc("router-view");return Me(),tt("div",F_,[n.value?kc("",!0):(Me(),Pc(N_,{key:0})),B("main",$_,[ue(i)]),ue(U_)])}}},B_="/rac/logoesmn140.png",V_={class:"min-h-screen flex flex-col bg-gradient-to-br from-teal-600 to-gray-600"},j_={class:"flex-1 flex items-center justify-center p-4"},W_={class:"max-w-4xl w-full grid md:grid-cols-3 bg-white rounded-xl shadow-2xl overflow-hidden"},K_={class:"md:col-span-2 p-8"},z_={class:"relative"},G_={class:"relative"},q_={class:"flex items-center text-sm text-gray-600"},J_=["disabled"],Y_={__name:"LoginE",setup(t){const e=kt(""),n=kt(""),r=kt(!1),s=kt(!1),i=kt(""),o=Si(),a=async()=>{s.value=!0,i.value="";try{await um(Li,e.value,n.value),o.push("/dashboard")}catch(c){i.value=c.code==="auth/user-not-found"?"Usuario no encontrado":c.code==="auth/wrong-password"?"Contraseña incorrecta":"Error al ingresar"}finally{s.value=!1}};return(c,l)=>(Me(),tt("div",V_,[B("main",j_,[B("div",W_,[l[10]||(l[10]=B("div",{class:"md:col-span-1 bg-teal-600 text-white flex flex-col items-center justify-center p-8"},[B("img",{src:B_,alt:"Logo ESMN",class:"max-h-36 mb-4"}),B("h1",{class:"text-2xl font-light"},"RAC - ESMN"),B("p",{class:"font-light text-sm text-center opacity-80 mt-1"},"Sistema interno de gestión educativa")],-1)),B("div",K_,[l[9]||(l[9]=B("h2",{class:"text-xl font-semibold text-center mb-6"},"Acceso Estudiantes",-1)),B("form",{onSubmit:_d(a,["prevent"]),class:"space-y-5"},[B("div",null,[l[4]||(l[4]=B("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Email",-1)),B("div",z_,[l[3]||(l[3]=B("span",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[B("i",{class:"fas fa-user text-gray-400"})],-1)),gs(B("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>e.value=u),type:"email",placeholder:"Tu email",class:"w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500",required:""},null,512),[[wo,e.value]])])]),B("div",null,[l[6]||(l[6]=B("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Contraseña",-1)),B("div",G_,[l[5]||(l[5]=B("span",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[B("i",{class:"fas fa-lock text-gray-400"})],-1)),gs(B("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>n.value=u),type:"password",placeholder:"••••••",autocomplete:"current-password",class:"w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500",required:""},null,512),[[wo,n.value]])])]),B("label",q_,[gs(B("input",{"onUpdate:modelValue":l[2]||(l[2]=u=>r.value=u),type:"checkbox",class:"mr-2 rounded"},null,512),[[hd,r.value]]),l[7]||(l[7]=ft(" No me olvides ",-1))]),B("button",{type:"submit",disabled:s.value,class:"w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 rounded-md disabled:opacity-60"},sr(s.value?"Ingresando…":"Ingresar"),9,J_),l[8]||(l[8]=B("p",{class:"text-xs text-center text-gray-500 space-x-2"},[B("a",{href:"#",class:"hover:underline"},"¿Olvidaste tu contraseña?"),B("span",null,"|"),B("a",{href:"#",class:"hover:underline"},"¿No tienes cuenta?")],-1))],32)])])])]))}},X_={class:"p-8"},Q_={key:0},Z_={key:1},ey={__name:"DashboardE",setup(t){const{user:e}=Wl(),n=Si(),r=async()=>{await hm(Li),n.push("/")};return(s,i)=>(Me(),tt("div",X_,[i[1]||(i[1]=B("h1",{class:"text-2xl font-bold mb-4"},"Tablero, Ficha, Legajo Estudiante",-1)),mt(e)?(Me(),tt("p",Q_,[i[0]||(i[0]=ft(" Bienvenido/a ",-1)),B("strong",null,sr(mt(e).email),1)])):(Me(),tt("p",Z_,"Cargando…")),B("button",{onClick:r,class:"mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"}," Cerrar sesión ")]))}},ty={},ny={class:"p-4"};function ry(t,e){return Me(),tt("div",ny,[...e[0]||(e[0]=[B("h1",{class:"text-2xl font-bold mb-4"},"Inscripciones",-1),B("p",null,"Esta es la página de inscripciones.",-1)])])}const sy=ls(ty,[["render",ry]]),iy={},oy={class:"p-4"};function ay(t,e){return Me(),tt("div",oy,[...e[0]||(e[0]=[B("h1",{class:"text-2xl font-bold mb-4"},"Funciones",-1),B("p",null,"Esta página es para otras funciones.",-1)])])}const cy=ls(iy,[["render",ay]]),ly=[{path:"/",name:"Login",component:Y_},{path:"/dashboard",name:"Dashboard",component:ey},{path:"/inscripciones",name:"Inscripciones",component:sy},{path:"/otras",name:"OtrasFunciones",component:cy,meta:{requiresAuth:!0}}],Kl=Sh({history:Zd(),routes:ly});Kl.beforeEach(async(t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=jl();s.currentUser,xl(s,i=>{r&&!i?n("/"):n()})});bd(H_).use(Kl).mount("#app");
