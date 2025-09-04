(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function si(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const le={},ln=[],st=()=>{},Sa=()=>!1,Wr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ii=t=>t.startsWith("onUpdate:"),ve=Object.assign,oi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},eu=Object.prototype.hasOwnProperty,ne=(t,e)=>eu.call(t,e),F=Array.isArray,un=t=>rr(t)==="[object Map]",Kr=t=>rr(t)==="[object Set]",Fi=t=>rr(t)==="[object Date]",W=t=>typeof t=="function",ge=t=>typeof t=="string",at=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",Ca=t=>(he(t)||W(t))&&W(t.then)&&W(t.catch),Ta=Object.prototype.toString,rr=t=>Ta.call(t),tu=t=>rr(t).slice(8,-1),Aa=t=>rr(t)==="[object Object]",ai=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,On=si(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zr=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},nu=/-(\w)/g,Be=zr(t=>t.replace(nu,(e,n)=>n?n.toUpperCase():"")),ru=/\B([A-Z])/g,en=zr(t=>t.replace(ru,"-$1").toLowerCase()),Gr=zr(t=>t.charAt(0).toUpperCase()+t.slice(1)),ds=zr(t=>t?`on${Gr(t)}`:""),Lt=(t,e)=>!Object.is(t,e),yr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ra=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ns=t=>{const e=parseFloat(t);return isNaN(e)?t:e},su=t=>{const e=ge(t)?Number(t):NaN;return isNaN(e)?t:e};let Bi;const qr=()=>Bi||(Bi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ci(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ge(r)?cu(r):ci(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ge(t)||he(t))return t}const iu=/;(?![^(]*\))/g,ou=/:([^]+)/,au=/\/\*[^]*?\*\//g;function cu(t){const e={};return t.replace(au,"").split(iu).forEach(n=>{if(n){const r=n.split(ou);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function li(t){let e="";if(ge(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=li(t[n]);r&&(e+=r+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const lu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uu=si(lu);function xa(t){return!!t||t===""}function fu(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Jr(t[r],e[r]);return n}function Jr(t,e){if(t===e)return!0;let n=Fi(t),r=Fi(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=at(t),r=at(e),n||r)return t===e;if(n=F(t),r=F(e),n||r)return n&&r?fu(t,e):!1;if(n=he(t),r=he(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Jr(t[o],e[o]))return!1}}return String(t)===String(e)}function Pa(t,e){return t.findIndex(n=>Jr(n,e))}const ka=t=>!!(t&&t.__v_isRef===!0),sr=t=>ge(t)?t:t==null?"":F(t)||he(t)&&(t.toString===Ta||!W(t.toString))?ka(t)?sr(t.value):JSON.stringify(t,Oa,2):String(t),Oa=(t,e)=>ka(e)?Oa(t,e.value):un(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[hs(r,i)+" =>"]=s,n),{})}:Kr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>hs(n))}:at(e)?hs(e):he(e)&&!F(e)&&!Aa(e)?String(e):e,hs=(t,e="")=>{var n;return at(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ke;class du{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ke,!e&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ke;try{return ke=this,e()}finally{ke=n}}}on(){++this._on===1&&(this.prevScope=ke,ke=this)}off(){this._on>0&&--this._on===0&&(ke=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function hu(){return ke}let de;const ps=new WeakSet;class Ma{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ke&&ke.active&&ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ps.has(this)&&(ps.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Da(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hi(this),La(this);const e=de,n=je;de=this,je=!0;try{return this.fn()}finally{Ua(this),de=e,je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)di(e);this.deps=this.depsTail=void 0,Hi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ps.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ds(this)&&this.run()}get dirty(){return Ds(this)}}let Na=0,Mn,Nn;function Da(t,e=!1){if(t.flags|=8,e){t.next=Nn,Nn=t;return}t.next=Mn,Mn=t}function ui(){Na++}function fi(){if(--Na>0)return;if(Nn){let e=Nn;for(Nn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Mn;){let e=Mn;for(Mn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function La(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ua(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),di(r),pu(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ds(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($a(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function $a(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Wn)||(t.globalVersion=Wn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ds(t))))return;t.flags|=2;const e=t.dep,n=de,r=je;de=t,je=!0;try{La(t);const s=t.fn(t._value);(e.version===0||Lt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{de=n,je=r,Ua(t),t.flags&=-3}}function di(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)di(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function pu(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let je=!0;const Fa=[];function vt(){Fa.push(je),je=!1}function yt(){const t=Fa.pop();je=t===void 0?!0:t}function Hi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=de;de=void 0;try{e()}finally{de=n}}}let Wn=0;class gu{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!de||!je||de===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==de)n=this.activeLink=new gu(de,this),de.deps?(n.prevDep=de.depsTail,de.depsTail.nextDep=n,de.depsTail=n):de.deps=de.depsTail=n,Ba(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=de.depsTail,n.nextDep=void 0,de.depsTail.nextDep=n,de.depsTail=n,de.deps===n&&(de.deps=r)}return n}trigger(e){this.version++,Wn++,this.notify(e)}notify(e){ui();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fi()}}}function Ba(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ba(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ls=new WeakMap,Zt=Symbol(""),Us=Symbol(""),Kn=Symbol("");function be(t,e,n){if(je&&de){let r=Ls.get(t);r||Ls.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new hi),s.map=r,s.key=n),s.track()}}function pt(t,e,n,r,s,i){const o=Ls.get(t);if(!o){Wn++;return}const a=c=>{c&&c.trigger()};if(ui(),e==="clear")o.forEach(a);else{const c=F(t),l=c&&ai(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,h)=>{(h==="length"||h===Kn||!at(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Kn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Zt)),un(t)&&a(o.get(Us)));break;case"delete":c||(a(o.get(Zt)),un(t)&&a(o.get(Us)));break;case"set":un(t)&&a(o.get(Zt));break}}fi()}function sn(t){const e=X(t);return e===t?e:(be(e,"iterate",Kn),We(t)?e:e.map(Se))}function pi(t){return be(t=X(t),"iterate",Kn),t}const mu={__proto__:null,[Symbol.iterator](){return gs(this,Symbol.iterator,Se)},concat(...t){return sn(this).concat(...t.map(e=>F(e)?sn(e):e))},entries(){return gs(this,"entries",t=>(t[1]=Se(t[1]),t))},every(t,e){return lt(this,"every",t,e,void 0,arguments)},filter(t,e){return lt(this,"filter",t,e,n=>n.map(Se),arguments)},find(t,e){return lt(this,"find",t,e,Se,arguments)},findIndex(t,e){return lt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return lt(this,"findLast",t,e,Se,arguments)},findLastIndex(t,e){return lt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return lt(this,"forEach",t,e,void 0,arguments)},includes(...t){return ms(this,"includes",t)},indexOf(...t){return ms(this,"indexOf",t)},join(t){return sn(this).join(t)},lastIndexOf(...t){return ms(this,"lastIndexOf",t)},map(t,e){return lt(this,"map",t,e,void 0,arguments)},pop(){return Tn(this,"pop")},push(...t){return Tn(this,"push",t)},reduce(t,...e){return Vi(this,"reduce",t,e)},reduceRight(t,...e){return Vi(this,"reduceRight",t,e)},shift(){return Tn(this,"shift")},some(t,e){return lt(this,"some",t,e,void 0,arguments)},splice(...t){return Tn(this,"splice",t)},toReversed(){return sn(this).toReversed()},toSorted(t){return sn(this).toSorted(t)},toSpliced(...t){return sn(this).toSpliced(...t)},unshift(...t){return Tn(this,"unshift",t)},values(){return gs(this,"values",Se)}};function gs(t,e,n){const r=pi(t),s=r[e]();return r!==t&&!We(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const _u=Array.prototype;function lt(t,e,n,r,s,i){const o=pi(t),a=o!==t&&!We(t),c=o[e];if(c!==_u[e]){const f=c.apply(t,i);return a?Se(f):f}let l=n;o!==t&&(a?l=function(f,h){return n.call(this,Se(f),h,t)}:n.length>2&&(l=function(f,h){return n.call(this,f,h,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function Vi(t,e,n,r){const s=pi(t);let i=n;return s!==t&&(We(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,Se(a),c,t)}),s[e](i,...r)}function ms(t,e,n){const r=X(t);be(r,"iterate",Kn);const s=r[e](...n);return(s===-1||s===!1)&&_i(n[0])?(n[0]=X(n[0]),r[e](...n)):s}function Tn(t,e,n=[]){vt(),ui();const r=X(t)[e].apply(t,n);return fi(),yt(),r}const vu=si("__proto__,__v_isRef,__isVue"),Ha=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(at));function yu(t){at(t)||(t=String(t));const e=X(this);return be(e,"has",t),e.hasOwnProperty(t)}class Va{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?xu:za:i?Ka:Wa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!s){let c;if(o&&(c=mu[n]))return c;if(n==="hasOwnProperty")return yu}const a=Reflect.get(e,n,Ee(e)?e:r);return(at(n)?Ha.has(n):vu(n))||(s||be(e,"get",n),i)?a:Ee(a)?o&&ai(n)?a:a.value:he(a)?s?qa(a):Yr(a):a}}class ja extends Va{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Xt(i);if(!We(r)&&!Xt(r)&&(i=X(i),r=X(r)),!F(e)&&Ee(i)&&!Ee(r))return c||(i.value=r),!0}const o=F(e)&&ai(n)?Number(n)<e.length:ne(e,n),a=Reflect.set(e,n,r,Ee(e)?e:s);return e===X(s)&&(o?Lt(r,i)&&pt(e,"set",n,r):pt(e,"add",n,r)),a}deleteProperty(e,n){const r=ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&pt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!at(n)||!Ha.has(n))&&be(e,"has",n),r}ownKeys(e){return be(e,"iterate",F(e)?"length":Zt),Reflect.ownKeys(e)}}class bu extends Va{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const wu=new ja,Eu=new bu,Iu=new ja(!0);const $s=t=>t,pr=t=>Reflect.getPrototypeOf(t);function Su(t,e,n){return function(...r){const s=this.__v_raw,i=X(s),o=un(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?$s:e?Fs:Se;return!e&&be(i,"iterate",c?Us:Zt),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function gr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Cu(t,e){const n={get(s){const i=this.__v_raw,o=X(i),a=X(s);t||(Lt(s,a)&&be(o,"get",s),be(o,"get",a));const{has:c}=pr(o),l=e?$s:t?Fs:Se;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&be(X(s),"iterate",Zt),s.size},has(s){const i=this.__v_raw,o=X(i),a=X(s);return t||(Lt(s,a)&&be(o,"has",s),be(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=X(a),l=e?$s:t?Fs:Se;return!t&&be(c,"iterate",Zt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return ve(n,t?{add:gr("add"),set:gr("set"),delete:gr("delete"),clear:gr("clear")}:{add(s){!e&&!We(s)&&!Xt(s)&&(s=X(s));const i=X(this);return pr(i).has.call(i,s)||(i.add(s),pt(i,"add",s,s)),this},set(s,i){!e&&!We(i)&&!Xt(i)&&(i=X(i));const o=X(this),{has:a,get:c}=pr(o);let l=a.call(o,s);l||(s=X(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Lt(i,u)&&pt(o,"set",s,i):pt(o,"add",s,i),this},delete(s){const i=X(this),{has:o,get:a}=pr(i);let c=o.call(i,s);c||(s=X(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&pt(i,"delete",s,void 0),l},clear(){const s=X(this),i=s.size!==0,o=s.clear();return i&&pt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Su(s,t,e)}),n}function gi(t,e){const n=Cu(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ne(n,s)&&s in r?n:r,s,i)}const Tu={get:gi(!1,!1)},Au={get:gi(!1,!0)},Ru={get:gi(!0,!1)};const Wa=new WeakMap,Ka=new WeakMap,za=new WeakMap,xu=new WeakMap;function Pu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ku(t){return t.__v_skip||!Object.isExtensible(t)?0:Pu(tu(t))}function Yr(t){return Xt(t)?t:mi(t,!1,wu,Tu,Wa)}function Ga(t){return mi(t,!1,Iu,Au,Ka)}function qa(t){return mi(t,!0,Eu,Ru,za)}function mi(t,e,n,r,s){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=ku(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Dn(t){return Xt(t)?Dn(t.__v_raw):!!(t&&t.__v_isReactive)}function Xt(t){return!!(t&&t.__v_isReadonly)}function We(t){return!!(t&&t.__v_isShallow)}function _i(t){return t?!!t.__v_raw:!1}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function Ou(t){return!ne(t,"__v_skip")&&Object.isExtensible(t)&&Ra(t,"__v_skip",!0),t}const Se=t=>he(t)?Yr(t):t,Fs=t=>he(t)?qa(t):t;function Ee(t){return t?t.__v_isRef===!0:!1}function kt(t){return Ja(t,!1)}function Mu(t){return Ja(t,!0)}function Ja(t,e){return Ee(t)?t:new Nu(t,e)}class Nu{constructor(e,n){this.dep=new hi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:X(e),this._value=n?e:Se(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||We(e)||Xt(e);e=r?e:X(e),Lt(e,n)&&(this._rawValue=e,this._value=r?e:Se(e),this.dep.trigger())}}function z(t){return Ee(t)?t.value:t}const Du={get:(t,e,n)=>e==="__v_raw"?t:z(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ee(s)&&!Ee(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ya(t){return Dn(t)?t:new Proxy(t,Du)}class Lu{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new hi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return Da(this,!0),!0}get value(){const e=this.dep.track();return $a(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Uu(t,e,n=!1){let r,s;return W(t)?r=t:(r=t.get,s=t.set),new Lu(r,s,n)}const mr={},Pr=new WeakMap;let Gt;function $u(t,e=!1,n=Gt){if(n){let r=Pr.get(n);r||Pr.set(n,r=[]),r.push(t)}}function Fu(t,e,n=le){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=O=>s?O:We(O)||s===!1||s===0?gt(O,1):gt(O);let u,f,h,g,I=!1,T=!1;if(Ee(t)?(f=()=>t.value,I=We(t)):Dn(t)?(f=()=>l(t),I=!0):F(t)?(T=!0,I=t.some(O=>Dn(O)||We(O)),f=()=>t.map(O=>{if(Ee(O))return O.value;if(Dn(O))return l(O);if(W(O))return c?c(O,2):O()})):W(t)?e?f=c?()=>c(t,2):t:f=()=>{if(h){vt();try{h()}finally{yt()}}const O=Gt;Gt=u;try{return c?c(t,3,[g]):t(g)}finally{Gt=O}}:f=st,e&&s){const O=f,G=s===!0?1/0:s;f=()=>gt(O(),G)}const H=hu(),M=()=>{u.stop(),H&&H.active&&oi(H.effects,u)};if(i&&e){const O=e;e=(...G)=>{O(...G),M()}}let x=T?new Array(t.length).fill(mr):mr;const D=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const G=u.run();if(s||I||(T?G.some((oe,se)=>Lt(oe,x[se])):Lt(G,x))){h&&h();const oe=Gt;Gt=u;try{const se=[G,x===mr?void 0:T&&x[0]===mr?[]:x,g];x=G,c?c(e,3,se):e(...se)}finally{Gt=oe}}}else u.run()};return a&&a(D),u=new Ma(f),u.scheduler=o?()=>o(D,!1):D,g=O=>$u(O,!1,u),h=u.onStop=()=>{const O=Pr.get(u);if(O){if(c)c(O,4);else for(const G of O)G();Pr.delete(u)}},e?r?D(!0):x=u.run():o?o(D.bind(null,!0),!0):u.run(),M.pause=u.pause.bind(u),M.resume=u.resume.bind(u),M.stop=M,M}function gt(t,e=1/0,n){if(e<=0||!he(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ee(t))gt(t.value,e,n);else if(F(t))for(let r=0;r<t.length;r++)gt(t[r],e,n);else if(Kr(t)||un(t))t.forEach(r=>{gt(r,e,n)});else if(Aa(t)){for(const r in t)gt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&gt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ir(t,e,n,r){try{return r?t(...r):t()}catch(s){Zr(s,e,n)}}function ze(t,e,n,r){if(W(t)){const s=ir(t,e,n,r);return s&&Ca(s)&&s.catch(i=>{Zr(i,e,n)}),s}if(F(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ze(t[i],e,n,r));return s}}function Zr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||le;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){vt(),ir(i,null,10,[t,c,l]),yt();return}}Bu(t,n,s,r,o)}function Bu(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ce=[];let tt=-1;const fn=[];let Rt=null,on=0;const Za=Promise.resolve();let kr=null;function Xa(t){const e=kr||Za;return t?e.then(this?t.bind(this):t):e}function Hu(t){let e=tt+1,n=Ce.length;for(;e<n;){const r=e+n>>>1,s=Ce[r],i=zn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function vi(t){if(!(t.flags&1)){const e=zn(t),n=Ce[Ce.length-1];!n||!(t.flags&2)&&e>=zn(n)?Ce.push(t):Ce.splice(Hu(e),0,t),t.flags|=1,Qa()}}function Qa(){kr||(kr=Za.then(tc))}function Vu(t){F(t)?fn.push(...t):Rt&&t.id===-1?Rt.splice(on+1,0,t):t.flags&1||(fn.push(t),t.flags|=1),Qa()}function ji(t,e,n=tt+1){for(;n<Ce.length;n++){const r=Ce[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ce.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ec(t){if(fn.length){const e=[...new Set(fn)].sort((n,r)=>zn(n)-zn(r));if(fn.length=0,Rt){Rt.push(...e);return}for(Rt=e,on=0;on<Rt.length;on++){const n=Rt[on];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rt=null,on=0}}const zn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function tc(t){try{for(tt=0;tt<Ce.length;tt++){const e=Ce[tt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ir(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;tt<Ce.length;tt++){const e=Ce[tt];e&&(e.flags&=-2)}tt=-1,Ce.length=0,ec(),kr=null,(Ce.length||fn.length)&&tc()}}let Le=null,nc=null;function Or(t){const e=Le;return Le=t,nc=t&&t.type.__scopeId||null,e}function et(t,e=Le,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&eo(-1);const i=Or(e);let o;try{o=t(...s)}finally{Or(i),r._d&&eo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _s(t,e){if(Le===null)return t;const n=ns(Le),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=le]=e[s];i&&(W(i)&&(i={mounted:i,updated:i}),i.deep&&gt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function jt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(vt(),ze(c,n,8,[t.el,a,t,e]),yt())}}const ju=Symbol("_vte"),rc=t=>t.__isTeleport,ht=Symbol("_leaveCb"),_r=Symbol("_enterCb");function Wu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dc(()=>{t.isMounted=!0}),hc(()=>{t.isUnmounting=!0}),t}const Fe=[Function,Array],sc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},ic=t=>{const e=t.subTree;return e.component?ic(e.component):e},Ku={name:"BaseTransition",props:sc,setup(t,{slots:e}){const n=Uc(),r=Wu();return()=>{const s=e.default&&cc(e.default(),!0);if(!s||!s.length)return;const i=oc(s),o=X(t),{mode:a}=o;if(r.isLeaving)return vs(i);const c=Wi(i);if(!c)return vs(i);let l=Bs(c,o,r,n,f=>l=f);c.type!==Te&&Gn(c,l);let u=n.subTree&&Wi(n.subTree);if(u&&u.type!==Te&&!Jt(c,u)&&ic(n).type!==Te){let f=Bs(u,o,r,n);if(Gn(u,f),a==="out-in"&&c.type!==Te)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},vs(i);a==="in-out"&&c.type!==Te?f.delayLeave=(h,g,I)=>{const T=ac(r,u);T[String(u.key)]=u,h[ht]=()=>{g(),h[ht]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{I(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function oc(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Te){e=n;break}}return e}const zu=Ku;function ac(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Bs(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:g,onAfterLeave:I,onLeaveCancelled:T,onBeforeAppear:H,onAppear:M,onAfterAppear:x,onAppearCancelled:D}=e,O=String(t.key),G=ac(n,t),oe=(K,Z)=>{K&&ze(K,r,9,Z)},se=(K,Z)=>{const ue=Z[1];oe(K,Z),F(K)?K.every(N=>N.length<=1)&&ue():K.length<=1&&ue()},ye={mode:o,persisted:a,beforeEnter(K){let Z=c;if(!n.isMounted)if(i)Z=H||c;else return;K[ht]&&K[ht](!0);const ue=G[O];ue&&Jt(t,ue)&&ue.el[ht]&&ue.el[ht](),oe(Z,[K])},enter(K){let Z=l,ue=u,N=f;if(!n.isMounted)if(i)Z=M||l,ue=x||u,N=D||f;else return;let Q=!1;const _e=K[_r]=Me=>{Q||(Q=!0,Me?oe(N,[K]):oe(ue,[K]),ye.delayedLeave&&ye.delayedLeave(),K[_r]=void 0)};Z?se(Z,[K,_e]):_e()},leave(K,Z){const ue=String(t.key);if(K[_r]&&K[_r](!0),n.isUnmounting)return Z();oe(h,[K]);let N=!1;const Q=K[ht]=_e=>{N||(N=!0,Z(),_e?oe(T,[K]):oe(I,[K]),K[ht]=void 0,G[ue]===t&&delete G[ue])};G[ue]=t,g?se(g,[K,Q]):Q()},clone(K){const Z=Bs(K,e,n,r,s);return s&&s(Z),Z}};return ye}function vs(t){if(Xr(t))return t=Bt(t),t.children=null,t}function Wi(t){if(!Xr(t))return rc(t.type)&&t.children?oc(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&W(n.default))return n.default()}}function Gn(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Gn(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function cc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===He?(o.patchFlag&128&&s++,r=r.concat(cc(o.children,e,a))):(e||o.type!==Te)&&r.push(a!=null?Bt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function lc(t,e){return W(t)?ve({name:t.name},e,{setup:t}):t}function uc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ln(t,e,n,r,s=!1){if(F(t)){t.forEach((I,T)=>Ln(I,e&&(F(e)?e[T]:e),n,r,s));return}if(Un(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ln(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ns(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===le?a.refs={}:a.refs,f=a.setupState,h=X(f),g=f===le?Sa:I=>ne(h,I);if(l!=null&&l!==c){if(ge(l))u[l]=null,g(l)&&(f[l]=null);else if(Ee(l)){l.value=null;const I=e;I.k&&(u[I.k]=null)}}if(W(c))ir(c,a,12,[o,u]);else{const I=ge(c),T=Ee(c);if(I||T){const H=()=>{if(t.f){const M=I?g(c)?f[c]:u[c]:c.value;if(s)F(M)&&oi(M,i);else if(F(M))M.includes(i)||M.push(i);else if(I)u[c]=[i],g(c)&&(f[c]=u[c]);else{const x=[i];c.value=x,t.k&&(u[t.k]=x)}}else I?(u[c]=o,g(c)&&(f[c]=o)):T&&(c.value=o,t.k&&(u[t.k]=o))};o?(H.id=-1,De(H,n)):H()}}}qr().requestIdleCallback;qr().cancelIdleCallback;const Un=t=>!!t.type.__asyncLoader,Xr=t=>t.type.__isKeepAlive;function Gu(t,e){fc(t,"a",e)}function qu(t,e){fc(t,"da",e)}function fc(t,e,n=we){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Qr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Xr(s.parent.vnode)&&Ju(r,e,n,s),s=s.parent}}function Ju(t,e,n,r){const s=Qr(e,t,r,!0);pc(()=>{oi(r[e],s)},n)}function Qr(t,e,n=we,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{vt();const a=or(n),c=ze(e,n,t,o);return a(),yt(),c});return r?s.unshift(i):s.push(i),i}}const Et=t=>(e,n=we)=>{(!Jn||t==="sp")&&Qr(t,(...r)=>e(...r),n)},Yu=Et("bm"),dc=Et("m"),Zu=Et("bu"),Xu=Et("u"),hc=Et("bum"),pc=Et("um"),Qu=Et("sp"),ef=Et("rtg"),tf=Et("rtc");function nf(t,e=we){Qr("ec",t,e)}const rf="components";function gc(t,e){return of(rf,t,!0,e)||t}const sf=Symbol.for("v-ndc");function of(t,e,n=!0,r=!1){const s=Le||we;if(s){const i=s.type;{const a=Gf(i,!1);if(a&&(a===e||a===Be(e)||a===Gr(Be(e))))return i}const o=Ki(s[t]||i[t],e)||Ki(s.appContext[t],e);return!o&&r?i:o}}function Ki(t,e){return t&&(t[e]||t[Be(e)]||t[Gr(Be(e))])}const Hs=t=>t?$c(t)?ns(t):Hs(t.parent):null,$n=ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Hs(t.parent),$root:t=>Hs(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>_c(t),$forceUpdate:t=>t.f||(t.f=()=>{vi(t.update)}),$nextTick:t=>t.n||(t.n=Xa.bind(t.proxy)),$watch:t=>Af.bind(t)}),ys=(t,e)=>t!==le&&!t.__isScriptSetup&&ne(t,e),af={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ys(r,e))return o[e]=1,r[e];if(s!==le&&ne(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ne(l,e))return o[e]=3,i[e];if(n!==le&&ne(n,e))return o[e]=4,n[e];Vs&&(o[e]=0)}}const u=$n[e];let f,h;if(u)return e==="$attrs"&&be(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==le&&ne(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,ne(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ys(s,e)?(s[e]=n,!0):r!==le&&ne(r,e)?(r[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},a){let c,l;return!!(n[a]||t!==le&&a[0]!=="$"&&ne(t,a)||ys(e,a)||(c=i[0])&&ne(c,a)||ne(r,a)||ne($n,a)||ne(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zi(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Vs=!0;function cf(t){const e=_c(t),n=t.proxy,r=t.ctx;Vs=!1,e.beforeCreate&&Gi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:g,updated:I,activated:T,deactivated:H,beforeDestroy:M,beforeUnmount:x,destroyed:D,unmounted:O,render:G,renderTracked:oe,renderTriggered:se,errorCaptured:ye,serverPrefetch:K,expose:Z,inheritAttrs:ue,components:N,directives:Q,filters:_e}=e;if(l&&lf(l,r,null),o)for(const ie in o){const ee=o[ie];W(ee)&&(r[ie]=ee.bind(n))}if(s){const ie=s.call(n,n);he(ie)&&(t.data=Yr(ie))}if(Vs=!0,i)for(const ie in i){const ee=i[ie],ct=W(ee)?ee.bind(n,n):W(ee.get)?ee.get.bind(n,n):st,St=!W(ee)&&W(ee.set)?ee.set.bind(n):st,Je=Oe({get:ct,set:St});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Re=>Je.value=Re})}if(a)for(const ie in a)mc(a[ie],r,n,ie);if(c){const ie=W(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(ee=>{br(ee,ie[ee])})}u&&Gi(u,t,"c");function pe(ie,ee){F(ee)?ee.forEach(ct=>ie(ct.bind(n))):ee&&ie(ee.bind(n))}if(pe(Yu,f),pe(dc,h),pe(Zu,g),pe(Xu,I),pe(Gu,T),pe(qu,H),pe(nf,ye),pe(tf,oe),pe(ef,se),pe(hc,x),pe(pc,O),pe(Qu,K),F(Z))if(Z.length){const ie=t.exposed||(t.exposed={});Z.forEach(ee=>{Object.defineProperty(ie,ee,{get:()=>n[ee],set:ct=>n[ee]=ct,enumerable:!0})})}else t.exposed||(t.exposed={});G&&t.render===st&&(t.render=G),ue!=null&&(t.inheritAttrs=ue),N&&(t.components=N),Q&&(t.directives=Q),K&&uc(t)}function lf(t,e,n=st){F(t)&&(t=js(t));for(const r in t){const s=t[r];let i;he(s)?"default"in s?i=Ke(s.from||r,s.default,!0):i=Ke(s.from||r):i=Ke(s),Ee(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Gi(t,e,n){ze(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function mc(t,e,n,r){let s=r.includes(".")?Pc(n,r):()=>n[r];if(ge(t)){const i=e[t];W(i)&&wr(s,i)}else if(W(t))wr(s,t.bind(n));else if(he(t))if(F(t))t.forEach(i=>mc(i,e,n,r));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&wr(s,i,t)}}function _c(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Mr(c,l,o,!0)),Mr(c,e,o)),he(e)&&i.set(e,c),c}function Mr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Mr(t,i,n,!0),s&&s.forEach(o=>Mr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=uf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const uf={data:qi,props:Ji,emits:Ji,methods:xn,computed:xn,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:xn,directives:xn,watch:df,provide:qi,inject:ff};function qi(t,e){return e?t?function(){return ve(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function ff(t,e){return xn(js(t),js(e))}function js(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ie(t,e){return t?[...new Set([].concat(t,e))]:e}function xn(t,e){return t?ve(Object.create(null),t,e):e}function Ji(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:ve(Object.create(null),zi(t),zi(e??{})):e}function df(t,e){if(!t)return e;if(!e)return t;const n=ve(Object.create(null),t);for(const r in e)n[r]=Ie(t[r],e[r]);return n}function vc(){return{app:null,config:{isNativeTag:Sa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hf=0;function pf(t,e){return function(r,s=null){W(r)||(r=ve({},r)),s!=null&&!he(s)&&(s=null);const i=vc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:hf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Jf,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&W(u.install)?(o.add(u),u.install(l,...f)):W(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,h){if(!c){const g=l._ceVNode||$(r,s);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),t(g,u,h),c=!0,l._container=u,u.__vue_app__=l,ns(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(ze(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=dn;dn=l;try{return u()}finally{dn=f}}};return l}}let dn=null;function br(t,e){if(we){let n=we.provides;const r=we.parent&&we.parent.provides;r===n&&(n=we.provides=Object.create(r)),n[t]=e}}function Ke(t,e,n=!1){const r=Uc();if(r||dn){let s=dn?dn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&W(e)?e.call(r&&r.proxy):e}}const yc={},bc=()=>Object.create(yc),wc=t=>Object.getPrototypeOf(t)===yc;function gf(t,e,n,r=!1){const s={},i=bc();t.propsDefaults=Object.create(null),Ec(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ga(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function mf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=X(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(es(t.emitsOptions,h))continue;const g=e[h];if(c)if(ne(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const I=Be(h);s[I]=Ws(c,a,I,g,t,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{Ec(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!ne(e,f)&&((u=en(f))===f||!ne(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Ws(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!ne(e,f))&&(delete i[f],l=!0)}l&&pt(t.attrs,"set","")}function Ec(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(On(c))continue;const l=e[c];let u;s&&ne(s,u=Be(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:es(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=X(n),l=a||le;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Ws(s,c,f,l[f],t,!ne(l,f))}}return o}function Ws(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&W(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=or(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}const _f=new WeakMap;function Ic(t,e,n=!1){const r=n?_f:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!W(t)){const u=f=>{c=!0;const[h,g]=Ic(f,e,!0);ve(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return he(t)&&r.set(t,ln),ln;if(F(i))for(let u=0;u<i.length;u++){const f=Be(i[u]);Yi(f)&&(o[f]=le)}else if(i)for(const u in i){const f=Be(u);if(Yi(f)){const h=i[u],g=o[f]=F(h)||W(h)?{type:h}:ve({},h),I=g.type;let T=!1,H=!0;if(F(I))for(let M=0;M<I.length;++M){const x=I[M],D=W(x)&&x.name;if(D==="Boolean"){T=!0;break}else D==="String"&&(H=!1)}else T=W(I)&&I.name==="Boolean";g[0]=T,g[1]=H,(T||ne(g,"default"))&&a.push(f)}}const l=[o,a];return he(t)&&r.set(t,l),l}function Yi(t){return t[0]!=="$"&&!On(t)}const yi=t=>t==="_"||t==="_ctx"||t==="$stable",bi=t=>F(t)?t.map(nt):[nt(t)],vf=(t,e,n)=>{if(e._n)return e;const r=et((...s)=>bi(e(...s)),n);return r._c=!1,r},Sc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(yi(s))continue;const i=t[s];if(W(i))e[s]=vf(s,i,r);else if(i!=null){const o=bi(i);e[s]=()=>o}}},Cc=(t,e)=>{const n=bi(e);t.slots.default=()=>n},Tc=(t,e,n)=>{for(const r in e)(n||!yi(r))&&(t[r]=e[r])},yf=(t,e,n)=>{const r=t.slots=bc();if(t.vnode.shapeFlag&32){const s=e._;s?(Tc(r,e,n),n&&Ra(r,"_",s,!0)):Sc(e,r)}else e&&Cc(t,e)},bf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=le;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Tc(s,e,n):(i=!e.$stable,Sc(e,s)),o=e}else e&&(Cc(t,e),o={default:1});if(i)for(const a in s)!yi(a)&&o[a]==null&&delete s[a]},De=Nf;function wf(t){return Ef(t)}function Ef(t,e){const n=qr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:g=st,insertStaticContent:I}=t,T=(d,p,m,y=null,w=null,v=null,A=void 0,C=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!Jt(d,p)&&(y=b(d),Re(d,w,v,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:E,ref:B,shapeFlag:P}=p;switch(E){case ts:H(d,p,m,y);break;case Te:M(d,p,m,y);break;case Er:d==null&&x(p,m,y,A);break;case He:N(d,p,m,y,w,v,A,C,S);break;default:P&1?G(d,p,m,y,w,v,A,C,S):P&6?Q(d,p,m,y,w,v,A,C,S):(P&64||P&128)&&E.process(d,p,m,y,w,v,A,C,S,L)}B!=null&&w?Ln(B,d&&d.ref,v,p||d,!p):B==null&&d&&d.ref!=null&&Ln(d.ref,null,v,d,!0)},H=(d,p,m,y)=>{if(d==null)r(p.el=a(p.children),m,y);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},M=(d,p,m,y)=>{d==null?r(p.el=c(p.children||""),m,y):p.el=d.el},x=(d,p,m,y)=>{[d.el,d.anchor]=I(d.children,p,m,y,d.el,d.anchor)},D=({el:d,anchor:p},m,y)=>{let w;for(;d&&d!==p;)w=h(d),r(d,m,y),d=w;r(p,m,y)},O=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),s(d),d=m;s(p)},G=(d,p,m,y,w,v,A,C,S)=>{p.type==="svg"?A="svg":p.type==="math"&&(A="mathml"),d==null?oe(p,m,y,w,v,A,C,S):K(d,p,w,v,A,C,S)},oe=(d,p,m,y,w,v,A,C)=>{let S,E;const{props:B,shapeFlag:P,transition:U,dirs:j}=d;if(S=d.el=o(d.type,v,B&&B.is,B),P&8?u(S,d.children):P&16&&ye(d.children,S,null,y,w,bs(d,v),A,C),j&&jt(d,null,y,"created"),se(S,d,d.scopeId,A,y),B){for(const fe in B)fe!=="value"&&!On(fe)&&i(S,fe,null,B[fe],v,y);"value"in B&&i(S,"value",null,B.value,v),(E=B.onVnodeBeforeMount)&&Qe(E,y,d)}j&&jt(d,null,y,"beforeMount");const q=If(w,U);q&&U.beforeEnter(S),r(S,p,m),((E=B&&B.onVnodeMounted)||q||j)&&De(()=>{E&&Qe(E,y,d),q&&U.enter(S),j&&jt(d,null,y,"mounted")},w)},se=(d,p,m,y,w)=>{if(m&&g(d,m),y)for(let v=0;v<y.length;v++)g(d,y[v]);if(w){let v=w.subTree;if(p===v||Oc(v.type)&&(v.ssContent===p||v.ssFallback===p)){const A=w.vnode;se(d,A,A.scopeId,A.slotScopeIds,w.parent)}}},ye=(d,p,m,y,w,v,A,C,S=0)=>{for(let E=S;E<d.length;E++){const B=d[E]=C?xt(d[E]):nt(d[E]);T(null,B,p,m,y,w,v,A,C)}},K=(d,p,m,y,w,v,A)=>{const C=p.el=d.el;let{patchFlag:S,dynamicChildren:E,dirs:B}=p;S|=d.patchFlag&16;const P=d.props||le,U=p.props||le;let j;if(m&&Wt(m,!1),(j=U.onVnodeBeforeUpdate)&&Qe(j,m,p,d),B&&jt(p,d,m,"beforeUpdate"),m&&Wt(m,!0),(P.innerHTML&&U.innerHTML==null||P.textContent&&U.textContent==null)&&u(C,""),E?Z(d.dynamicChildren,E,C,m,y,bs(p,w),v):A||ee(d,p,C,null,m,y,bs(p,w),v,!1),S>0){if(S&16)ue(C,P,U,m,w);else if(S&2&&P.class!==U.class&&i(C,"class",null,U.class,w),S&4&&i(C,"style",P.style,U.style,w),S&8){const q=p.dynamicProps;for(let fe=0;fe<q.length;fe++){const re=q[fe],xe=P[re],Pe=U[re];(Pe!==xe||re==="value")&&i(C,re,xe,Pe,w,m)}}S&1&&d.children!==p.children&&u(C,p.children)}else!A&&E==null&&ue(C,P,U,m,w);((j=U.onVnodeUpdated)||B)&&De(()=>{j&&Qe(j,m,p,d),B&&jt(p,d,m,"updated")},y)},Z=(d,p,m,y,w,v,A)=>{for(let C=0;C<p.length;C++){const S=d[C],E=p[C],B=S.el&&(S.type===He||!Jt(S,E)||S.shapeFlag&198)?f(S.el):m;T(S,E,B,null,y,w,v,A,!0)}},ue=(d,p,m,y,w)=>{if(p!==m){if(p!==le)for(const v in p)!On(v)&&!(v in m)&&i(d,v,p[v],null,w,y);for(const v in m){if(On(v))continue;const A=m[v],C=p[v];A!==C&&v!=="value"&&i(d,v,C,A,w,y)}"value"in m&&i(d,"value",p.value,m.value,w)}},N=(d,p,m,y,w,v,A,C,S)=>{const E=p.el=d?d.el:a(""),B=p.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:U,slotScopeIds:j}=p;j&&(C=C?C.concat(j):j),d==null?(r(E,m,y),r(B,m,y),ye(p.children||[],m,B,w,v,A,C,S)):P>0&&P&64&&U&&d.dynamicChildren?(Z(d.dynamicChildren,U,m,w,v,A,C),(p.key!=null||w&&p===w.subTree)&&Ac(d,p,!0)):ee(d,p,m,B,w,v,A,C,S)},Q=(d,p,m,y,w,v,A,C,S)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?w.ctx.activate(p,m,y,A,S):_e(p,m,y,w,v,A,S):Me(d,p,S)},_e=(d,p,m,y,w,v,A)=>{const C=d.component=Vf(d,y,w);if(Xr(d)&&(C.ctx.renderer=L),jf(C,!1,A),C.asyncDep){if(w&&w.registerDep(C,pe,A),!d.el){const S=C.subTree=$(Te);M(null,S,p,m),d.placeholder=S.el}}else pe(C,d,p,m,w,v,A)},Me=(d,p,m)=>{const y=p.component=d.component;if(Of(d,p,m))if(y.asyncDep&&!y.asyncResolved){ie(y,p,m);return}else y.next=p,y.update();else p.el=d.el,y.vnode=p},pe=(d,p,m,y,w,v,A)=>{const C=()=>{if(d.isMounted){let{next:P,bu:U,u:j,parent:q,vnode:fe}=d;{const Ze=Rc(d);if(Ze){P&&(P.el=fe.el,ie(d,P,A)),Ze.asyncDep.then(()=>{d.isUnmounted||C()});return}}let re=P,xe;Wt(d,!1),P?(P.el=fe.el,ie(d,P,A)):P=fe,U&&yr(U),(xe=P.props&&P.props.onVnodeBeforeUpdate)&&Qe(xe,q,P,fe),Wt(d,!0);const Pe=Xi(d),Ye=d.subTree;d.subTree=Pe,T(Ye,Pe,f(Ye.el),b(Ye),d,w,v),P.el=Pe.el,re===null&&Mf(d,Pe.el),j&&De(j,w),(xe=P.props&&P.props.onVnodeUpdated)&&De(()=>Qe(xe,q,P,fe),w)}else{let P;const{el:U,props:j}=p,{bm:q,m:fe,parent:re,root:xe,type:Pe}=d,Ye=Un(p);Wt(d,!1),q&&yr(q),!Ye&&(P=j&&j.onVnodeBeforeMount)&&Qe(P,re,p),Wt(d,!0);{xe.ce&&xe.ce._def.shadowRoot!==!1&&xe.ce._injectChildStyle(Pe);const Ze=d.subTree=Xi(d);T(null,Ze,m,y,d,w,v),p.el=Ze.el}if(fe&&De(fe,w),!Ye&&(P=j&&j.onVnodeMounted)){const Ze=p;De(()=>Qe(P,re,Ze),w)}(p.shapeFlag&256||re&&Un(re.vnode)&&re.vnode.shapeFlag&256)&&d.a&&De(d.a,w),d.isMounted=!0,p=m=y=null}};d.scope.on();const S=d.effect=new Ma(C);d.scope.off();const E=d.update=S.run.bind(S),B=d.job=S.runIfDirty.bind(S);B.i=d,B.id=d.uid,S.scheduler=()=>vi(B),Wt(d,!0),E()},ie=(d,p,m)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,mf(d,p.props,y,m),bf(d,p.children,m),vt(),ji(d),yt()},ee=(d,p,m,y,w,v,A,C,S=!1)=>{const E=d&&d.children,B=d?d.shapeFlag:0,P=p.children,{patchFlag:U,shapeFlag:j}=p;if(U>0){if(U&128){St(E,P,m,y,w,v,A,C,S);return}else if(U&256){ct(E,P,m,y,w,v,A,C,S);return}}j&8?(B&16&&$e(E,w,v),P!==E&&u(m,P)):B&16?j&16?St(E,P,m,y,w,v,A,C,S):$e(E,w,v,!0):(B&8&&u(m,""),j&16&&ye(P,m,y,w,v,A,C,S))},ct=(d,p,m,y,w,v,A,C,S)=>{d=d||ln,p=p||ln;const E=d.length,B=p.length,P=Math.min(E,B);let U;for(U=0;U<P;U++){const j=p[U]=S?xt(p[U]):nt(p[U]);T(d[U],j,m,null,w,v,A,C,S)}E>B?$e(d,w,v,!0,!1,P):ye(p,m,y,w,v,A,C,S,P)},St=(d,p,m,y,w,v,A,C,S)=>{let E=0;const B=p.length;let P=d.length-1,U=B-1;for(;E<=P&&E<=U;){const j=d[E],q=p[E]=S?xt(p[E]):nt(p[E]);if(Jt(j,q))T(j,q,m,null,w,v,A,C,S);else break;E++}for(;E<=P&&E<=U;){const j=d[P],q=p[U]=S?xt(p[U]):nt(p[U]);if(Jt(j,q))T(j,q,m,null,w,v,A,C,S);else break;P--,U--}if(E>P){if(E<=U){const j=U+1,q=j<B?p[j].el:y;for(;E<=U;)T(null,p[E]=S?xt(p[E]):nt(p[E]),m,q,w,v,A,C,S),E++}}else if(E>U)for(;E<=P;)Re(d[E],w,v,!0),E++;else{const j=E,q=E,fe=new Map;for(E=q;E<=U;E++){const Ne=p[E]=S?xt(p[E]):nt(p[E]);Ne.key!=null&&fe.set(Ne.key,E)}let re,xe=0;const Pe=U-q+1;let Ye=!1,Ze=0;const Cn=new Array(Pe);for(E=0;E<Pe;E++)Cn[E]=0;for(E=j;E<=P;E++){const Ne=d[E];if(xe>=Pe){Re(Ne,w,v,!0);continue}let Xe;if(Ne.key!=null)Xe=fe.get(Ne.key);else for(re=q;re<=U;re++)if(Cn[re-q]===0&&Jt(Ne,p[re])){Xe=re;break}Xe===void 0?Re(Ne,w,v,!0):(Cn[Xe-q]=E+1,Xe>=Ze?Ze=Xe:Ye=!0,T(Ne,p[Xe],m,null,w,v,A,C,S),xe++)}const Li=Ye?Sf(Cn):ln;for(re=Li.length-1,E=Pe-1;E>=0;E--){const Ne=q+E,Xe=p[Ne],Ui=p[Ne+1],$i=Ne+1<B?Ui.el||Ui.placeholder:y;Cn[E]===0?T(null,Xe,m,$i,w,v,A,C,S):Ye&&(re<0||E!==Li[re]?Je(Xe,m,$i,2):re--)}}},Je=(d,p,m,y,w=null)=>{const{el:v,type:A,transition:C,children:S,shapeFlag:E}=d;if(E&6){Je(d.component.subTree,p,m,y);return}if(E&128){d.suspense.move(p,m,y);return}if(E&64){A.move(d,p,m,L);return}if(A===He){r(v,p,m);for(let P=0;P<S.length;P++)Je(S[P],p,m,y);r(d.anchor,p,m);return}if(A===Er){D(d,p,m);return}if(y!==2&&E&1&&C)if(y===0)C.beforeEnter(v),r(v,p,m),De(()=>C.enter(v),w);else{const{leave:P,delayLeave:U,afterLeave:j}=C,q=()=>{d.ctx.isUnmounted?s(v):r(v,p,m)},fe=()=>{v._isLeaving&&v[ht](!0),P(v,()=>{q(),j&&j()})};U?U(v,q,fe):fe()}else r(v,p,m)},Re=(d,p,m,y=!1,w=!1)=>{const{type:v,props:A,ref:C,children:S,dynamicChildren:E,shapeFlag:B,patchFlag:P,dirs:U,cacheIndex:j}=d;if(P===-2&&(w=!1),C!=null&&(vt(),Ln(C,null,m,d,!0),yt()),j!=null&&(p.renderCache[j]=void 0),B&256){p.ctx.deactivate(d);return}const q=B&1&&U,fe=!Un(d);let re;if(fe&&(re=A&&A.onVnodeBeforeUnmount)&&Qe(re,p,d),B&6)hr(d.component,m,y);else{if(B&128){d.suspense.unmount(m,y);return}q&&jt(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,m,L,y):E&&!E.hasOnce&&(v!==He||P>0&&P&64)?$e(E,p,m,!1,!0):(v===He&&P&384||!w&&B&16)&&$e(S,p,m),y&&nn(d)}(fe&&(re=A&&A.onVnodeUnmounted)||q)&&De(()=>{re&&Qe(re,p,d),q&&jt(d,null,p,"unmounted")},m)},nn=d=>{const{type:p,el:m,anchor:y,transition:w}=d;if(p===He){rn(m,y);return}if(p===Er){O(d);return}const v=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:A,delayLeave:C}=w,S=()=>A(m,v);C?C(d.el,v,S):S()}else v()},rn=(d,p)=>{let m;for(;d!==p;)m=h(d),s(d),d=m;s(p)},hr=(d,p,m)=>{const{bum:y,scope:w,job:v,subTree:A,um:C,m:S,a:E}=d;Zi(S),Zi(E),y&&yr(y),w.stop(),v&&(v.flags|=8,Re(A,d,p,m)),C&&De(C,p),De(()=>{d.isUnmounted=!0},p)},$e=(d,p,m,y=!1,w=!1,v=0)=>{for(let A=v;A<d.length;A++)Re(d[A],p,m,y,w)},b=d=>{if(d.shapeFlag&6)return b(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),m=p&&p[ju];return m?h(m):p};let k=!1;const R=(d,p,m)=>{d==null?p._vnode&&Re(p._vnode,null,null,!0):T(p._vnode||null,d,p,null,null,null,m),p._vnode=d,k||(k=!0,ji(),ec(),k=!1)},L={p:T,um:Re,m:Je,r:nn,mt:_e,mc:ye,pc:ee,pbc:Z,n:b,o:t};return{render:R,hydrate:void 0,createApp:pf(R)}}function bs({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function If(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ac(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=xt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ac(o,a)),a.type===ts&&a.patchFlag!==-1&&(a.el=o.el),a.type===Te&&!a.el&&(a.el=o.el)}}function Sf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Rc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Rc(e)}function Zi(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Cf=Symbol.for("v-scx"),Tf=()=>Ke(Cf);function wr(t,e,n){return xc(t,e,n)}function xc(t,e,n=le){const{immediate:r,deep:s,flush:i,once:o}=n,a=ve({},n),c=e&&r||!e&&i!=="post";let l;if(Jn){if(i==="sync"){const g=Tf();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=st,g.resume=st,g.pause=st,g}}const u=we;a.call=(g,I,T)=>ze(g,u,I,T);let f=!1;i==="post"?a.scheduler=g=>{De(g,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,I)=>{I?g():vi(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const h=Fu(t,e,a);return Jn&&(l?l.push(h):c&&h()),h}function Af(t,e,n){const r=this.proxy,s=ge(t)?t.includes(".")?Pc(r,t):()=>r[t]:t.bind(r,r);let i;W(e)?i=e:(i=e.handler,n=e);const o=or(this),a=xc(s,i.bind(r),n);return o(),a}function Pc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Rf=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Be(e)}Modifiers`]||t[`${en(e)}Modifiers`];function xf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||le;let s=n;const i=e.startsWith("update:"),o=i&&Rf(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>ge(u)?u.trim():u)),o.number&&(s=n.map(Ns)));let a,c=r[a=ds(e)]||r[a=ds(Be(e))];!c&&i&&(c=r[a=ds(en(e))]),c&&ze(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ze(l,t,6,s)}}function kc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!W(t)){const c=l=>{const u=kc(l,e,!0);u&&(a=!0,ve(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(he(t)&&r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):ve(o,i),he(t)&&r.set(t,o),o)}function es(t,e){return!t||!Wr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,en(e))||ne(t,e))}function Xi(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:h,setupState:g,ctx:I,inheritAttrs:T}=t,H=Or(t);let M,x;try{if(n.shapeFlag&4){const O=s||r,G=O;M=nt(l.call(G,O,u,f,g,h,I)),x=a}else{const O=e;M=nt(O.length>1?O(f,{attrs:a,slots:o,emit:c}):O(f,null)),x=e.props?a:Pf(a)}}catch(O){Fn.length=0,Zr(O,t,1),M=$(Te)}let D=M;if(x&&T!==!1){const O=Object.keys(x),{shapeFlag:G}=D;O.length&&G&7&&(i&&O.some(ii)&&(x=kf(x,i)),D=Bt(D,x,!1,!0))}return n.dirs&&(D=Bt(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&Gn(D,n.transition),M=D,Or(H),M}const Pf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wr(n))&&((e||(e={}))[n]=t[n]);return e},kf=(t,e)=>{const n={};for(const r in t)(!ii(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Of(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Qi(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!es(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Qi(r,o,l):!0:!!o;return!1}function Qi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!es(n,i))return!0}return!1}function Mf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Oc=t=>t.__isSuspense;function Nf(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Vu(t)}const He=Symbol.for("v-fgt"),ts=Symbol.for("v-txt"),Te=Symbol.for("v-cmt"),Er=Symbol.for("v-stc"),Fn=[];let Ue=null;function J(t=!1){Fn.push(Ue=t?null:[])}function Df(){Fn.pop(),Ue=Fn[Fn.length-1]||null}let qn=1;function eo(t,e=!1){qn+=t,t<0&&Ue&&e&&(Ue.hasOnce=!0)}function Mc(t){return t.dynamicChildren=qn>0?Ue||ln:null,Df(),qn>0&&Ue&&Ue.push(t),t}function Y(t,e,n,r,s,i){return Mc(_(t,e,n,r,s,i,!0))}function Nc(t,e,n,r,s){return Mc($(t,e,n,r,s,!0))}function Nr(t){return t?t.__v_isVNode===!0:!1}function Jt(t,e){return t.type===e.type&&t.key===e.key}const Dc=({key:t})=>t??null,Ir=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||Ee(t)||W(t)?{i:Le,r:t,k:e,f:!!n}:t:null);function _(t,e=null,n=null,r=0,s=null,i=t===He?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dc(e),ref:e&&Ir(e),scopeId:nc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Le};return a?(wi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),qn>0&&!o&&Ue&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ue.push(c),c}const $=Lf;function Lf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===sf)&&(t=Te),Nr(t)){const a=Bt(t,e,!0);return n&&wi(a,n),qn>0&&!i&&Ue&&(a.shapeFlag&6?Ue[Ue.indexOf(t)]=a:Ue.push(a)),a.patchFlag=-2,a}if(qf(t)&&(t=t.__vccOpts),e){e=Uf(e);let{class:a,style:c}=e;a&&!ge(a)&&(e.class=li(a)),he(c)&&(_i(c)&&!F(c)&&(c=ve({},c)),e.style=ci(c))}const o=ge(t)?1:Oc(t)?128:rc(t)?64:he(t)?4:W(t)?2:0;return _(t,e,n,r,s,o,i,!0)}function Uf(t){return t?_i(t)||wc(t)?ve({},t):t:null}function Bt(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Ff(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Dc(l),ref:e&&e.ref?n&&i?F(i)?i.concat(Ir(e)):[i,Ir(e)]:Ir(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bt(t.ssContent),ssFallback:t.ssFallback&&Bt(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Gn(u,c.clone(u)),u}function me(t=" ",e=0){return $(ts,null,t,e)}function $f(t,e){const n=$(Er,null,t);return n.staticCount=e,n}function Lc(t="",e=!1){return e?(J(),Nc(Te,null,t)):$(Te,null,t)}function nt(t){return t==null||typeof t=="boolean"?$(Te):F(t)?$(He,null,t.slice()):Nr(t)?xt(t):$(ts,null,String(t))}function xt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bt(t)}function wi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),wi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!wc(e)?e._ctx=Le:s===3&&Le&&(Le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:Le},n=32):(e=String(e),r&64?(n=16,e=[me(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ff(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=li([e.class,r.class]));else if(s==="style")e.style=ci([e.style,r.style]);else if(Wr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Qe(t,e,n,r=null){ze(t,e,7,[n,r])}const Bf=vc();let Hf=0;function Vf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Bf,i={uid:Hf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new du(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ic(r,s),emitsOptions:kc(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=xf.bind(null,i),t.ce&&t.ce(i),i}let we=null;const Uc=()=>we||Le;let Dr,Ks;{const t=qr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Dr=e("__VUE_INSTANCE_SETTERS__",n=>we=n),Ks=e("__VUE_SSR_SETTERS__",n=>Jn=n)}const or=t=>{const e=we;return Dr(t),t.scope.on(),()=>{t.scope.off(),Dr(e)}},to=()=>{we&&we.scope.off(),Dr(null)};function $c(t){return t.vnode.shapeFlag&4}let Jn=!1;function jf(t,e=!1,n=!1){e&&Ks(e);const{props:r,children:s}=t.vnode,i=$c(t);gf(t,r,i,e),yf(t,s,n||e);const o=i?Wf(t,e):void 0;return e&&Ks(!1),o}function Wf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,af);const{setup:r}=n;if(r){vt();const s=t.setupContext=r.length>1?zf(t):null,i=or(t),o=ir(r,t,0,[t.props,s]),a=Ca(o);if(yt(),i(),(a||t.sp)&&!Un(t)&&uc(t),a){if(o.then(to,to),e)return o.then(c=>{no(t,c)}).catch(c=>{Zr(c,t,0)});t.asyncDep=o}else no(t,o)}else Fc(t)}function no(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=Ya(e)),Fc(t)}function Fc(t,e,n){const r=t.type;t.render||(t.render=r.render||st);{const s=or(t);vt();try{cf(t)}finally{yt(),s()}}}const Kf={get(t,e){return be(t,"get",""),t[e]}};function zf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Kf),slots:t.slots,emit:t.emit,expose:e}}function ns(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ya(Ou(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $n)return $n[n](t)},has(e,n){return n in e||n in $n}})):t.proxy}function Gf(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function qf(t){return W(t)&&"__vccOpts"in t}const Oe=(t,e)=>Uu(t,e,Jn);function Ei(t,e,n){const r=arguments.length;return r===2?he(e)&&!F(e)?Nr(e)?$(t,null,[e]):$(t,e):$(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Nr(n)&&(n=[n]),$(t,e,n))}const Jf="3.5.20";/**
* @vue/runtime-dom v3.5.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zs;const ro=typeof window<"u"&&window.trustedTypes;if(ro)try{zs=ro.createPolicy("vue",{createHTML:t=>t})}catch{}const Bc=zs?t=>zs.createHTML(t):t=>t,Yf="http://www.w3.org/2000/svg",Zf="http://www.w3.org/1998/Math/MathML",dt=typeof document<"u"?document:null,so=dt&&dt.createElement("template"),Xf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?dt.createElementNS(Yf,t):e==="mathml"?dt.createElementNS(Zf,t):n?dt.createElement(t,{is:n}):dt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>dt.createTextNode(t),createComment:t=>dt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{so.innerHTML=Bc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=so.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ct="transition",An="animation",Yn=Symbol("_vtc"),Hc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Qf=ve({},sc,Hc),ed=t=>(t.displayName="Transition",t.props=Qf,t),td=ed((t,{slots:e})=>Ei(zu,nd(t),e)),Kt=(t,e=[])=>{F(t)?t.forEach(n=>n(...e)):t&&t(...e)},io=t=>t?F(t)?t.some(e=>e.length>1):t.length>1:!1;function nd(t){const e={};for(const N in t)N in Hc||(e[N]=t[N]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,I=rd(s),T=I&&I[0],H=I&&I[1],{onBeforeEnter:M,onEnter:x,onEnterCancelled:D,onLeave:O,onLeaveCancelled:G,onBeforeAppear:oe=M,onAppear:se=x,onAppearCancelled:ye=D}=e,K=(N,Q,_e,Me)=>{N._enterCancelled=Me,zt(N,Q?u:a),zt(N,Q?l:o),_e&&_e()},Z=(N,Q)=>{N._isLeaving=!1,zt(N,f),zt(N,g),zt(N,h),Q&&Q()},ue=N=>(Q,_e)=>{const Me=N?se:x,pe=()=>K(Q,N,_e);Kt(Me,[Q,pe]),oo(()=>{zt(Q,N?c:i),ut(Q,N?u:a),io(Me)||ao(Q,r,T,pe)})};return ve(e,{onBeforeEnter(N){Kt(M,[N]),ut(N,i),ut(N,o)},onBeforeAppear(N){Kt(oe,[N]),ut(N,c),ut(N,l)},onEnter:ue(!1),onAppear:ue(!0),onLeave(N,Q){N._isLeaving=!0;const _e=()=>Z(N,Q);ut(N,f),N._enterCancelled?(ut(N,h),uo()):(uo(),ut(N,h)),oo(()=>{N._isLeaving&&(zt(N,f),ut(N,g),io(O)||ao(N,r,H,_e))}),Kt(O,[N,_e])},onEnterCancelled(N){K(N,!1,void 0,!0),Kt(D,[N])},onAppearCancelled(N){K(N,!0,void 0,!0),Kt(ye,[N])},onLeaveCancelled(N){Z(N),Kt(G,[N])}})}function rd(t){if(t==null)return null;if(he(t))return[ws(t.enter),ws(t.leave)];{const e=ws(t);return[e,e]}}function ws(t){return su(t)}function ut(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Yn]||(t[Yn]=new Set)).add(e)}function zt(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Yn];n&&(n.delete(e),n.size||(t[Yn]=void 0))}function oo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let sd=0;function ao(t,e,n,r){const s=t._endId=++sd,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=id(t,e);if(!o)return r();const l=o+"end";let u=0;const f=()=>{t.removeEventListener(l,h),i()},h=g=>{g.target===t&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),t.addEventListener(l,h)}function id(t,e){const n=window.getComputedStyle(t),r=I=>(n[I]||"").split(", "),s=r(`${Ct}Delay`),i=r(`${Ct}Duration`),o=co(s,i),a=r(`${An}Delay`),c=r(`${An}Duration`),l=co(a,c);let u=null,f=0,h=0;e===Ct?o>0&&(u=Ct,f=o,h=i.length):e===An?l>0&&(u=An,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?Ct:An:null,h=u?u===Ct?i.length:c.length:0);const g=u===Ct&&/\b(transform|all)(,|$)/.test(r(`${Ct}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:g}}function co(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>lo(n)+lo(t[r])))}function lo(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function uo(){return document.body.offsetHeight}function od(t,e,n){const r=t[Yn];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const fo=Symbol("_vod"),ad=Symbol("_vsh"),cd=Symbol(""),ld=/(^|;)\s*display\s*:/;function ud(t,e,n){const r=t.style,s=ge(n);let i=!1;if(n&&!s){if(e)if(ge(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Sr(r,a,"")}else for(const o in e)n[o]==null&&Sr(r,o,"");for(const o in n)o==="display"&&(i=!0),Sr(r,o,n[o])}else if(s){if(e!==n){const o=r[cd];o&&(n+=";"+o),r.cssText=n,i=ld.test(n)}}else e&&t.removeAttribute("style");fo in t&&(t[fo]=i?r.display:"",t[ad]&&(r.display="none"))}const ho=/\s*!important$/;function Sr(t,e,n){if(F(n))n.forEach(r=>Sr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=fd(t,e);ho.test(n)?t.setProperty(en(r),n.replace(ho,""),"important"):t[r]=n}}const po=["Webkit","Moz","ms"],Es={};function fd(t,e){const n=Es[e];if(n)return n;let r=Be(e);if(r!=="filter"&&r in t)return Es[e]=r;r=Gr(r);for(let s=0;s<po.length;s++){const i=po[s]+r;if(i in t)return Es[e]=i}return e}const go="http://www.w3.org/1999/xlink";function mo(t,e,n,r,s,i=uu(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(go,e.slice(6,e.length)):t.setAttributeNS(go,e,n):n==null||i&&!xa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":at(n)?String(n):n)}function _o(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Bc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=xa(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Yt(t,e,n,r){t.addEventListener(e,n,r)}function dd(t,e,n,r){t.removeEventListener(e,n,r)}const vo=Symbol("_vei");function hd(t,e,n,r,s=null){const i=t[vo]||(t[vo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=pd(e);if(r){const l=i[e]=_d(r,s);Yt(t,a,l,c)}else o&&(dd(t,a,o,c),i[e]=void 0)}}const yo=/(?:Once|Passive|Capture)$/;function pd(t){let e;if(yo.test(t)){e={};let r;for(;r=t.match(yo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):en(t.slice(2)),e]}let Is=0;const gd=Promise.resolve(),md=()=>Is||(gd.then(()=>Is=0),Is=Date.now());function _d(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(vd(r,n.value),e,5,[r])};return n.value=t,n.attached=md(),n}function vd(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const bo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,yd=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?od(t,r,o):e==="style"?ud(t,n,r):Wr(e)?ii(e)||hd(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bd(t,e,r,o))?(_o(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&mo(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ge(r))?_o(t,Be(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),mo(t,e,r,o))};function bd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&bo(e)&&W(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bo(e)&&ge(n)?!1:e in t}const Lr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>yr(e,n):e};function wd(t){t.target.composing=!0}function wo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const hn=Symbol("_assign"),Eo={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[hn]=Lr(s);const i=r||s.props&&s.props.type==="number";Yt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ns(a)),t[hn](a)}),n&&Yt(t,"change",()=>{t.value=t.value.trim()}),e||(Yt(t,"compositionstart",wd),Yt(t,"compositionend",wo),Yt(t,"change",wo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[hn]=Lr(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ns(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Ed={deep:!0,created(t,e,n){t[hn]=Lr(n),Yt(t,"change",()=>{const r=t._modelValue,s=Id(t),i=t.checked,o=t[hn];if(F(r)){const a=Pa(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Kr(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Vc(t,i))})},mounted:Io,beforeUpdate(t,e,n){t[hn]=Lr(n),Io(t,e,n)}};function Io(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(F(e))s=Pa(e,r.props.value)>-1;else if(Kr(e))s=e.has(r.props.value);else{if(e===n)return;s=Jr(e,Vc(t,!0))}t.checked!==s&&(t.checked=s)}function Id(t){return"_value"in t?t._value:t.value}function Vc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Sd=["ctrl","shift","alt","meta"],Cd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Sd.some(n=>t[`${n}Key`]&&!e.includes(n))},Td=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const a=Cd[e[o]];if(a&&a(s,e))return}return t(s,...i)}))},Ad=ve({patchProp:yd},Xf);let So;function Rd(){return So||(So=wf(Ad))}const xd=((...t)=>{const e=Rd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=kd(r);if(!s)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Pd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Pd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function kd(t){return ge(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const an=typeof document<"u";function jc(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Od(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&jc(t.default)}const te=Object.assign;function Ss(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ge(s)?s.map(t):t(s)}return n}const Bn=()=>{},Ge=Array.isArray,Wc=/#/g,Md=/&/g,Nd=/\//g,Dd=/=/g,Ld=/\?/g,Kc=/\+/g,Ud=/%5B/g,$d=/%5D/g,zc=/%5E/g,Fd=/%60/g,Gc=/%7B/g,Bd=/%7C/g,qc=/%7D/g,Hd=/%20/g;function Ii(t){return encodeURI(""+t).replace(Bd,"|").replace(Ud,"[").replace($d,"]")}function Vd(t){return Ii(t).replace(Gc,"{").replace(qc,"}").replace(zc,"^")}function Gs(t){return Ii(t).replace(Kc,"%2B").replace(Hd,"+").replace(Wc,"%23").replace(Md,"%26").replace(Fd,"`").replace(Gc,"{").replace(qc,"}").replace(zc,"^")}function jd(t){return Gs(t).replace(Dd,"%3D")}function Wd(t){return Ii(t).replace(Wc,"%23").replace(Ld,"%3F")}function Kd(t){return t==null?"":Wd(t).replace(Nd,"%2F")}function Zn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const zd=/\/$/,Gd=t=>t.replace(zd,"");function Cs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Zd(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Zn(o)}}function qd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Co(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Jd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&vn(e.matched[r],n.matched[s])&&Jc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Jc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Yd(t[n],e[n]))return!1;return!0}function Yd(t,e){return Ge(t)?To(t,e):Ge(e)?To(e,t):t===e}function To(t,e){return Ge(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Zd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Xn;(function(t){t.pop="pop",t.push="push"})(Xn||(Xn={}));var Hn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hn||(Hn={}));function Xd(t){if(!t)if(an){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Gd(t)}const Qd=/^[^#]+#/;function eh(t,e){return t.replace(Qd,"#")+e}function th(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const rs=()=>({left:window.scrollX,top:window.scrollY});function nh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=th(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ao(t,e){return(history.state?history.state.position-e:-1)+t}const qs=new Map;function rh(t,e){qs.set(t,e)}function sh(t){const e=qs.get(t);return qs.delete(t),e}let ih=()=>location.protocol+"//"+location.host;function Yc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Co(c,"")}return Co(n,t)+r+s}function oh(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const g=Yc(t,location),I=n.value,T=e.value;let H=0;if(h){if(n.value=g,e.value=h,o&&o===I){o=null;return}H=T?h.position-T.position:0}else r(g);s.forEach(M=>{M(n.value,I,{delta:H,type:Xn.pop,direction:H?H>0?Hn.forward:Hn.back:Hn.unknown})})};function c(){o=n.value}function l(h){s.push(h);const g=()=>{const I=s.indexOf(h);I>-1&&s.splice(I,1)};return i.push(g),g}function u(){const{history:h}=window;h.state&&h.replaceState(te({},h.state,{scroll:rs()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Ro(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?rs():null}}function ah(t){const{history:e,location:n}=window,r={value:Yc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:ih()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(c,l){const u=te({},e.state,Ro(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=te({},s.value,e.state,{forward:c,scroll:rs()});i(u.current,u,!0);const f=te({},Ro(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function ch(t){t=Xd(t);const e=ah(t),n=oh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=te({location:"",base:t,go:r,createHref:eh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function lh(t){return typeof t=="string"||t&&typeof t=="object"}function Zc(t){return typeof t=="string"||typeof t=="symbol"}const Xc=Symbol("");var xo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xo||(xo={}));function yn(t,e){return te(new Error,{type:t,[Xc]:!0},e)}function ft(t,e){return t instanceof Error&&Xc in t&&(e==null||!!(t.type&e))}const Po="[^/]+?",uh={sensitive:!1,strict:!1,start:!0,end:!0},fh=/[.+*?^${}()[\]/\\]/g;function dh(t,e){const n=te({},uh,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let g=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(fh,"\\$&"),g+=40;else if(h.type===1){const{value:I,repeatable:T,optional:H,regexp:M}=h;i.push({name:I,repeatable:T,optional:H});const x=M||Po;if(x!==Po){g+=10;try{new RegExp(`(${x})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${I}" (${x}): `+O.message)}}let D=T?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(D=H&&l.length<2?`(?:/${D})`:"/"+D),H&&(D+="?"),s+=D,g+=20,H&&(g+=-8),T&&(g+=-20),x===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",I=i[h-1];f[I.name]=g&&I.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:I,repeatable:T,optional:H}=g,M=I in l?l[I]:"";if(Ge(M)&&!T)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const x=Ge(M)?M.join("/"):M;if(!x)if(H)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);u+=x}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function hh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Qc(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=hh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ko(r))return 1;if(ko(s))return-1}return s.length-r.length}function ko(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ph={type:0,value:""},gh=/[a-zA-Z0-9_]/;function mh(t){if(!t)return[[]];if(t==="/")return[[ph]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:gh.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function _h(t,e,n){const r=dh(mh(t.path),n),s=te(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function vh(t,e){const n=[],r=new Map;e=Do({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,g){const I=!g,T=Mo(f);T.aliasOf=g&&g.record;const H=Do(e,f),M=[T];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const G of O)M.push(Mo(te({},T,{components:g?g.record.components:T.components,path:G,aliasOf:g?g.record:T})))}let x,D;for(const O of M){const{path:G}=O;if(h&&G[0]!=="/"){const oe=h.record.path,se=oe[oe.length-1]==="/"?"":"/";O.path=h.record.path+(G&&se+G)}if(x=_h(O,h,H),g?g.alias.push(x):(D=D||x,D!==x&&D.alias.push(x),I&&f.name&&!No(x)&&o(f.name)),el(x)&&c(x),T.children){const oe=T.children;for(let se=0;se<oe.length;se++)i(oe[se],x,g&&g.children[se])}g=g||x}return D?()=>{o(D)}:Bn}function o(f){if(Zc(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const h=wh(f,n);n.splice(h,0,f),f.record.name&&!No(f)&&r.set(f.record.name,f)}function l(f,h){let g,I={},T,H;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw yn(1,{location:f});H=g.record.name,I=te(Oo(h.params,g.keys.filter(D=>!D.optional).concat(g.parent?g.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),f.params&&Oo(f.params,g.keys.map(D=>D.name))),T=g.stringify(I)}else if(f.path!=null)T=f.path,g=n.find(D=>D.re.test(T)),g&&(I=g.parse(T),H=g.record.name);else{if(g=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!g)throw yn(1,{location:f,currentLocation:h});H=g.record.name,I=te({},h.params,f.params),T=g.stringify(I)}const M=[];let x=g;for(;x;)M.unshift(x.record),x=x.parent;return{name:H,path:T,params:I,matched:M,meta:bh(M)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Oo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Mo(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:yh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function yh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function No(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function bh(t){return t.reduce((e,n)=>te(e,n.meta),{})}function Do(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function wh(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Qc(t,e[i])<0?r=i:n=i+1}const s=Eh(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Eh(t){let e=t;for(;e=e.parent;)if(el(e)&&Qc(t,e)===0)return e}function el({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Ih(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Kc," "),o=i.indexOf("="),a=Zn(o<0?i:i.slice(0,o)),c=o<0?null:Zn(i.slice(o+1));if(a in e){let l=e[a];Ge(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Lo(t){let e="";for(let n in t){const r=t[n];if(n=jd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ge(r)?r.map(i=>i&&Gs(i)):[r&&Gs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Sh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ge(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Ch=Symbol(""),Uo=Symbol(""),ss=Symbol(""),Si=Symbol(""),Js=Symbol("");function Rn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=h=>{h===!1?c(yn(4,{from:n,to:e})):h instanceof Error?c(h):lh(h)?c(yn(2,{from:e,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(h=>c(h))})}function Ts(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(jc(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Pt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Od(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&Pt(g,n,r,o,a,s)()}))}}return i}function $o(t){const e=Ke(ss),n=Ke(Si),r=Oe(()=>{const c=z(t.to);return e.resolve(c)}),s=Oe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(vn.bind(null,u));if(h>-1)return h;const g=Fo(c[l-2]);return l>1&&Fo(u)===g&&f[f.length-1].path!==g?f.findIndex(vn.bind(null,c[l-2])):h}),i=Oe(()=>s.value>-1&&Ph(n.params,r.value.params)),o=Oe(()=>s.value>-1&&s.value===n.matched.length-1&&Jc(n.params,r.value.params));function a(c={}){if(xh(c)){const l=e[z(t.replace)?"replace":"push"](z(t.to)).catch(Bn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Th(t){return t.length===1?t[0]:t}const Ah=lc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:$o,setup(t,{slots:e}){const n=Yr($o(t)),{options:r}=Ke(ss),s=Oe(()=>({[Bo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Bo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Th(e.default(n));return t.custom?i:Ei("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Rh=Ah;function xh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ph(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ge(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Fo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bo=(t,e,n)=>t??e??n,kh=lc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ke(Js),s=Oe(()=>t.route||r.value),i=Ke(Uo,0),o=Oe(()=>{let l=z(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Oe(()=>s.value.matched[o.value]);br(Uo,Oe(()=>o.value+1)),br(Ch,a),br(Js,s);const c=kt();return wr(()=>[c.value,a.value,t.name],([l,u,f],[h,g,I])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!vn(u,g)||!h)&&(u.enterCallbacks[f]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return Ho(n.default,{Component:h,route:l});const g=f.props[u],I=g?g===!0?l.params:typeof g=="function"?g(l):g:null,H=Ei(h,te({},I,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Ho(n.default,{Component:H,route:l})||H}}});function Ho(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Oh=kh;function Mh(t){const e=vh(t.routes,t),n=t.parseQuery||Ih,r=t.stringifyQuery||Lo,s=t.history,i=Rn(),o=Rn(),a=Rn(),c=Mu(Tt);let l=Tt;an&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ss.bind(null,b=>""+b),f=Ss.bind(null,Kd),h=Ss.bind(null,Zn);function g(b,k){let R,L;return Zc(b)?(R=e.getRecordMatcher(b),L=k):L=b,e.addRoute(L,R)}function I(b){const k=e.getRecordMatcher(b);k&&e.removeRoute(k)}function T(){return e.getRoutes().map(b=>b.record)}function H(b){return!!e.getRecordMatcher(b)}function M(b,k){if(k=te({},k||c.value),typeof b=="string"){const m=Cs(n,b,k.path),y=e.resolve({path:m.path},k),w=s.createHref(m.fullPath);return te(m,y,{params:h(y.params),hash:Zn(m.hash),redirectedFrom:void 0,href:w})}let R;if(b.path!=null)R=te({},b,{path:Cs(n,b.path,k.path).path});else{const m=te({},b.params);for(const y in m)m[y]==null&&delete m[y];R=te({},b,{params:f(m)}),k.params=f(k.params)}const L=e.resolve(R,k),ae=b.hash||"";L.params=u(h(L.params));const d=qd(r,te({},b,{hash:Vd(ae),path:L.path})),p=s.createHref(d);return te({fullPath:d,hash:ae,query:r===Lo?Sh(b.query):b.query||{}},L,{redirectedFrom:void 0,href:p})}function x(b){return typeof b=="string"?Cs(n,b,c.value.path):te({},b)}function D(b,k){if(l!==b)return yn(8,{from:k,to:b})}function O(b){return se(b)}function G(b){return O(te(x(b),{replace:!0}))}function oe(b){const k=b.matched[b.matched.length-1];if(k&&k.redirect){const{redirect:R}=k;let L=typeof R=="function"?R(b):R;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=x(L):{path:L},L.params={}),te({query:b.query,hash:b.hash,params:L.path!=null?{}:b.params},L)}}function se(b,k){const R=l=M(b),L=c.value,ae=b.state,d=b.force,p=b.replace===!0,m=oe(R);if(m)return se(te(x(m),{state:typeof m=="object"?te({},ae,m.state):ae,force:d,replace:p}),k||R);const y=R;y.redirectedFrom=k;let w;return!d&&Jd(r,L,R)&&(w=yn(16,{to:y,from:L}),Je(L,L,!0,!1)),(w?Promise.resolve(w):Z(y,L)).catch(v=>ft(v)?ft(v,2)?v:St(v):ee(v,y,L)).then(v=>{if(v){if(ft(v,2))return se(te({replace:p},x(v.to),{state:typeof v.to=="object"?te({},ae,v.to.state):ae,force:d}),k||y)}else v=N(y,L,!0,p,ae);return ue(y,L,v),v})}function ye(b,k){const R=D(b,k);return R?Promise.reject(R):Promise.resolve()}function K(b){const k=rn.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(b):b()}function Z(b,k){let R;const[L,ae,d]=Nh(b,k);R=Ts(L.reverse(),"beforeRouteLeave",b,k);for(const m of L)m.leaveGuards.forEach(y=>{R.push(Pt(y,b,k))});const p=ye.bind(null,b,k);return R.push(p),$e(R).then(()=>{R=[];for(const m of i.list())R.push(Pt(m,b,k));return R.push(p),$e(R)}).then(()=>{R=Ts(ae,"beforeRouteUpdate",b,k);for(const m of ae)m.updateGuards.forEach(y=>{R.push(Pt(y,b,k))});return R.push(p),$e(R)}).then(()=>{R=[];for(const m of d)if(m.beforeEnter)if(Ge(m.beforeEnter))for(const y of m.beforeEnter)R.push(Pt(y,b,k));else R.push(Pt(m.beforeEnter,b,k));return R.push(p),$e(R)}).then(()=>(b.matched.forEach(m=>m.enterCallbacks={}),R=Ts(d,"beforeRouteEnter",b,k,K),R.push(p),$e(R))).then(()=>{R=[];for(const m of o.list())R.push(Pt(m,b,k));return R.push(p),$e(R)}).catch(m=>ft(m,8)?m:Promise.reject(m))}function ue(b,k,R){a.list().forEach(L=>K(()=>L(b,k,R)))}function N(b,k,R,L,ae){const d=D(b,k);if(d)return d;const p=k===Tt,m=an?history.state:{};R&&(L||p?s.replace(b.fullPath,te({scroll:p&&m&&m.scroll},ae)):s.push(b.fullPath,ae)),c.value=b,Je(b,k,R,p),St()}let Q;function _e(){Q||(Q=s.listen((b,k,R)=>{if(!hr.listening)return;const L=M(b),ae=oe(L);if(ae){se(te(ae,{replace:!0,force:!0}),L).catch(Bn);return}l=L;const d=c.value;an&&rh(Ao(d.fullPath,R.delta),rs()),Z(L,d).catch(p=>ft(p,12)?p:ft(p,2)?(se(te(x(p.to),{force:!0}),L).then(m=>{ft(m,20)&&!R.delta&&R.type===Xn.pop&&s.go(-1,!1)}).catch(Bn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),ee(p,L,d))).then(p=>{p=p||N(L,d,!1),p&&(R.delta&&!ft(p,8)?s.go(-R.delta,!1):R.type===Xn.pop&&ft(p,20)&&s.go(-1,!1)),ue(L,d,p)}).catch(Bn)}))}let Me=Rn(),pe=Rn(),ie;function ee(b,k,R){St(b);const L=pe.list();return L.length?L.forEach(ae=>ae(b,k,R)):console.error(b),Promise.reject(b)}function ct(){return ie&&c.value!==Tt?Promise.resolve():new Promise((b,k)=>{Me.add([b,k])})}function St(b){return ie||(ie=!b,_e(),Me.list().forEach(([k,R])=>b?R(b):k()),Me.reset()),b}function Je(b,k,R,L){const{scrollBehavior:ae}=t;if(!an||!ae)return Promise.resolve();const d=!R&&sh(Ao(b.fullPath,0))||(L||!R)&&history.state&&history.state.scroll||null;return Xa().then(()=>ae(b,k,d)).then(p=>p&&nh(p)).catch(p=>ee(p,b,k))}const Re=b=>s.go(b);let nn;const rn=new Set,hr={currentRoute:c,listening:!0,addRoute:g,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:H,getRoutes:T,resolve:M,options:t,push:O,replace:G,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:pe.add,isReady:ct,install(b){const k=this;b.component("RouterLink",Rh),b.component("RouterView",Oh),b.config.globalProperties.$router=k,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>z(c)}),an&&!nn&&c.value===Tt&&(nn=!0,O(s.location).catch(ae=>{}));const R={};for(const ae in Tt)Object.defineProperty(R,ae,{get:()=>c.value[ae],enumerable:!0});b.provide(ss,k),b.provide(Si,Ga(R)),b.provide(Js,c);const L=b.unmount;rn.add(b),b.unmount=function(){rn.delete(b),rn.size<1&&(l=Tt,Q&&Q(),Q=null,c.value=Tt,nn=!1,ie=!1),L()}}};function $e(b){return b.reduce((k,R)=>k.then(()=>K(R)),Promise.resolve())}return hr}function Nh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>vn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>vn(l,c))||s.push(c))}return[n,r,s]}function Ci(){return Ke(ss)}function Dh(t){return Ke(Si)}const Lh="/rac/avatar.png",Uh=()=>{};var Vo={};/**
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
 */const tl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},$h=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},nl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),r.push(n[u],n[f],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$h(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new Fh;const h=i<<2|a>>4;if(r.push(h),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const I=l<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bh=function(t){const e=tl(t);return nl.encodeByteArray(e,!0)},rl=function(t){return Bh(t).replace(/\./g,"")},sl=function(t){try{return nl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Hh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vh=()=>Hh().__FIREBASE_DEFAULTS__,jh=()=>{if(typeof process>"u"||typeof Vo>"u")return;const t=Vo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sl(t[1]);return e&&JSON.parse(e)},Ti=()=>{try{return Uh()||Vh()||jh()||Wh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kh=t=>Ti()?.emulatorHosts?.[t],il=()=>Ti()?.config,ol=t=>Ti()?.[`_${t}`];/**
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
 */class zh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function is(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gh(t){return(await fetch(t,{credentials:"include"})).ok}const Vn={};function qh(){const t={prod:[],emulator:[]};for(const e of Object.keys(Vn))Vn[e]?t.emulator.push(e):t.prod.push(e);return t}function Jh(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let jo=!1;function Yh(t,e){if(typeof window>"u"||typeof document>"u"||!is(window.location.host)||Vn[t]===e||Vn[t]||jo)return;Vn[t]=e;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",i=qh().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,g){h.setAttribute("width","24"),h.setAttribute("id",g),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function l(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{jo=!0,o()},h}function u(h,g){h.setAttribute("id",g),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function f(){const h=Jh(r),g=n("text"),I=document.getElementById(g)||document.createElement("span"),T=n("learnmore"),H=document.getElementById(T)||document.createElement("a"),M=n("preprendIcon"),x=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const D=h.element;a(D),u(H,T);const O=l();c(x,M),D.append(x,I,H,O),document.body.appendChild(D)}i?(I.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Xh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ep(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tp(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function np(){try{return typeof indexedDB=="object"}catch{return!1}}function rp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const sp="FirebaseError";class Ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sp,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ip(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ht(s,a,r)}}function ip(t,e){return t.replace(op,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const op=/\{\$([^}]+)}/g;function ap(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wo(i)&&Wo(o)){if(!bn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wo(t){return t!==null&&typeof t=="object"}/**
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
 */function cr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function kn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function cp(t,e){const n=new lp(t,e);return n.subscribe.bind(n)}class lp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");up(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=As),s.error===void 0&&(s.error=As),s.complete===void 0&&(s.complete=As);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function up(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function As(){}/**
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
 */function It(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class fp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hp(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dp(t){return t===qt?void 0:t}function hp(t){return t.instantiationMode==="EAGER"}/**
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
 */class pp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const gp={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},mp=ce.INFO,_p={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},vp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=_p[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class al{constructor(e){this.name=e,this._logLevel=mp,this._logHandler=vp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const yp=(t,e)=>e.some(n=>t instanceof n);let Ko,zo;function bp(){return Ko||(Ko=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wp(){return zo||(zo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cl=new WeakMap,Ys=new WeakMap,ll=new WeakMap,Rs=new WeakMap,Ai=new WeakMap;function Ep(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ut(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cl.set(n,t)}).catch(()=>{}),Ai.set(e,t),e}function Ip(t){if(Ys.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ys.set(t,e)}let Zs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ys.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ll.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sp(t){Zs=t(Zs)}function Cp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xs(this),e,...n);return ll.set(r,e.sort?e.sort():[e]),Ut(r)}:wp().includes(t)?function(...e){return t.apply(xs(this),e),Ut(cl.get(this))}:function(...e){return Ut(t.apply(xs(this),e))}}function Tp(t){return typeof t=="function"?Cp(t):(t instanceof IDBTransaction&&Ip(t),yp(t,bp())?new Proxy(t,Zs):t)}function Ut(t){if(t instanceof IDBRequest)return Ep(t);if(Rs.has(t))return Rs.get(t);const e=Tp(t);return e!==t&&(Rs.set(t,e),Ai.set(e,t)),e}const xs=t=>Ai.get(t);function Ap(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ut(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ut(o.result),c.oldVersion,c.newVersion,Ut(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Rp=["get","getKey","getAll","getAllKeys","count"],xp=["put","add","delete","clear"],Ps=new Map;function Go(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ps.get(e))return Ps.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=xp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Rp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ps.set(e,i),i}Sp(t=>({...t,get:(e,n,r)=>Go(e,n)||t.get(e,n,r),has:(e,n)=>!!Go(e,n)||t.has(e,n)}));/**
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
 */class Pp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kp(t){return t.getComponent()?.type==="VERSION"}const Xs="@firebase/app",qo="0.14.2";/**
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
 */const bt=new al("@firebase/app"),Op="@firebase/app-compat",Mp="@firebase/analytics-compat",Np="@firebase/analytics",Dp="@firebase/app-check-compat",Lp="@firebase/app-check",Up="@firebase/auth",$p="@firebase/auth-compat",Fp="@firebase/database",Bp="@firebase/data-connect",Hp="@firebase/database-compat",Vp="@firebase/functions",jp="@firebase/functions-compat",Wp="@firebase/installations",Kp="@firebase/installations-compat",zp="@firebase/messaging",Gp="@firebase/messaging-compat",qp="@firebase/performance",Jp="@firebase/performance-compat",Yp="@firebase/remote-config",Zp="@firebase/remote-config-compat",Xp="@firebase/storage",Qp="@firebase/storage-compat",eg="@firebase/firestore",tg="@firebase/ai",ng="@firebase/firestore-compat",rg="firebase",sg="12.2.0";/**
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
 */const Qs="[DEFAULT]",ig={[Xs]:"fire-core",[Op]:"fire-core-compat",[Np]:"fire-analytics",[Mp]:"fire-analytics-compat",[Lp]:"fire-app-check",[Dp]:"fire-app-check-compat",[Up]:"fire-auth",[$p]:"fire-auth-compat",[Fp]:"fire-rtdb",[Bp]:"fire-data-connect",[Hp]:"fire-rtdb-compat",[Vp]:"fire-fn",[jp]:"fire-fn-compat",[Wp]:"fire-iid",[Kp]:"fire-iid-compat",[zp]:"fire-fcm",[Gp]:"fire-fcm-compat",[qp]:"fire-perf",[Jp]:"fire-perf-compat",[Yp]:"fire-rc",[Zp]:"fire-rc-compat",[Xp]:"fire-gcs",[Qp]:"fire-gcs-compat",[eg]:"fire-fst",[ng]:"fire-fst-compat",[tg]:"fire-vertex","fire-js":"fire-js",[rg]:"fire-js-all"};/**
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
 */const Ur=new Map,og=new Map,ei=new Map;function Jo(t,e){try{t.container.addComponent(e)}catch(n){bt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qn(t){const e=t.name;if(ei.has(e))return bt.debug(`There were multiple attempts to register component ${e}.`),!1;ei.set(e,t);for(const n of Ur.values())Jo(n,t);for(const n of og.values())Jo(n,t);return!0}function ul(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ag={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new ar("app","Firebase",ag);/**
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
 */class cg{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
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
 */const lr=sg;function fl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Qs,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw $t.create("bad-app-name",{appName:String(s)});if(n||(n=il()),!n)throw $t.create("no-options");const i=Ur.get(s);if(i){if(bn(n,i.options)&&bn(r,i.config))return i;throw $t.create("duplicate-app",{appName:s})}const o=new pp(s);for(const c of ei.values())o.addComponent(c);const a=new cg(n,r,o);return Ur.set(s,a),a}function lg(t=Qs){const e=Ur.get(t);if(!e&&t===Qs&&il())return fl();if(!e)throw $t.create("no-app",{appName:t});return e}function pn(t,e,n){let r=ig[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bt.warn(o.join(" "));return}Qn(new wn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ug="firebase-heartbeat-database",fg=1,er="firebase-heartbeat-store";let ks=null;function dl(){return ks||(ks=Ap(ug,fg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(er)}catch(n){console.warn(n)}}}}).catch(t=>{throw $t.create("idb-open",{originalErrorMessage:t.message})})),ks}async function dg(t){try{const n=(await dl()).transaction(er),r=await n.objectStore(er).get(hl(t));return await n.done,r}catch(e){if(e instanceof Ht)bt.warn(e.message);else{const n=$t.create("idb-get",{originalErrorMessage:e?.message});bt.warn(n.message)}}}async function Yo(t,e){try{const r=(await dl()).transaction(er,"readwrite");await r.objectStore(er).put(e,hl(t)),await r.done}catch(n){if(n instanceof Ht)bt.warn(n.message);else{const r=$t.create("idb-set",{originalErrorMessage:n?.message});bt.warn(r.message)}}}function hl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const hg=1024,pg=30;class gg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _g(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zo();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>pg){const s=vg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){bt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zo(),{heartbeatsToSend:n,unsentEntries:r}=mg(this._heartbeatsCache.heartbeats),s=rl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return bt.warn(e),""}}}function Zo(){return new Date().toISOString().substring(0,10)}function mg(t,e=hg){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _g{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return np()?rp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dg(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Xo(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}function vg(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function yg(t){Qn(new wn("platform-logger",e=>new Pp(e),"PRIVATE")),Qn(new wn("heartbeat",e=>new gg(e),"PRIVATE")),pn(Xs,qo,t),pn(Xs,qo,"esm2020"),pn("fire-js","")}yg("");var bg="firebase",wg="12.2.1";/**
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
 */pn(bg,wg,"app");function pl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Eg=pl,gl=new ar("auth","Firebase",pl());/**
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
 */const $r=new al("@firebase/auth");function Ig(t,...e){$r.logLevel<=ce.WARN&&$r.warn(`Auth (${lr}): ${t}`,...e)}function Cr(t,...e){$r.logLevel<=ce.ERROR&&$r.error(`Auth (${lr}): ${t}`,...e)}/**
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
 */function qe(t,...e){throw Ri(t,...e)}function it(t,...e){return Ri(t,...e)}function ml(t,e,n){const r={...Eg(),[e]:n};return new ar("auth","Firebase",r).create(e,{appName:t.name})}function Ft(t){return ml(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ri(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gl.create(t,...e)}function V(t,e,...n){if(!t)throw Ri(e,...n)}function mt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cr(e),new Error(e)}function wt(t,e){t||mt(e)}/**
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
 */function ti(){return typeof self<"u"&&self.location?.href||""}function Sg(){return Qo()==="http:"||Qo()==="https:"}function Qo(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Cg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sg()||Qh()||"connection"in navigator)?navigator.onLine:!0}function Tg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ur{constructor(e,n){this.shortDelay=e,this.longDelay=n,wt(n>e,"Short delay should be less than long delay!"),this.isMobile=Zh()||ep()}get(){return Cg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xi(t,e){wt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _l{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ag={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Rg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xg=new ur(3e4,6e4);function tn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Vt(t,e,n,r,s={}){return vl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=cr({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...i};return Xh()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&is(t.emulatorConfig.host)&&(l.credentials="include"),_l.fetch()(await yl(t,t.config.apiHost,n,a),l)})}async function vl(t,e,n){t._canInitEmulator=!1;const r={...Ag,...e};try{const s=new kg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw vr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ml(t,u,l);qe(t,u)}}catch(s){if(s instanceof Ht)throw s;qe(t,"network-request-failed",{message:String(s)})}}async function os(t,e,n,r,s={}){const i=await Vt(t,e,n,r,s);return"mfaPendingCredential"in i&&qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function yl(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?xi(t.config,s):`${t.config.apiScheme}://${s}`;return Rg.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Pg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),xg.get())})}}function vr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=it(t,e,r);return s.customData._tokenResponse=n,s}function ea(t){return t!==void 0&&t.enterprise!==void 0}class Og{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Pg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Mg(t,e){return Vt(t,"GET","/v2/recaptchaConfig",tn(t,e))}/**
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
 */async function Ng(t,e){return Vt(t,"POST","/v1/accounts:delete",e)}async function Fr(t,e){return Vt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function jn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dg(t,e=!1){const n=It(t),r=await n.getIdToken(e),s=Pi(r);V(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:jn(Os(s.auth_time)),issuedAtTime:jn(Os(s.iat)),expirationTime:jn(Os(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Os(t){return Number(t)*1e3}function Pi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cr("JWT malformed, contained fewer than 3 sections"),null;try{const s=sl(n);return s?JSON.parse(s):(Cr("Failed to decode base64 JWT payload"),null)}catch(s){return Cr("Caught error parsing JWT payload as JSON",s?.toString()),null}}function ta(t){const e=Pi(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ht&&Lg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Lg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ug{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ni{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jn(this.lastLoginAt),this.creationTime=jn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Br(t){const e=t.auth,n=await t.getIdToken(),r=await tr(t,Fr(e,{idToken:n}));V(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?bl(s.providerUserInfo):[],o=Fg(t.providerData,i),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!o?.length,l=a?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ni(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,u)}async function $g(t){const e=It(t);await Br(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bl(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Bg(t,e){const n=await vl(t,{},async()=>{const r=cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await yl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return t.emulatorConfig&&is(t.emulatorConfig.host)&&(c.credentials="include"),_l.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Hg(t,e){return Vt(t,"POST","/v2/accounts:revokeToken",tn(t,e))}/**
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
 */class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ta(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){V(e.length!==0,"internal-error");const n=ta(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Bg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new gn;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(V(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(V(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
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
 */function At(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ve{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Ug(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ni(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await tr(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Dg(this,e)}reload(){return $g(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ve({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Br(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rt(this.auth.app))return Promise.reject(Ft(this.auth));const e=await this.getIdToken();return await tr(this,Ng(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:f,emailVerified:h,isAnonymous:g,providerData:I,stsTokenManager:T}=n;V(f&&T,e,"internal-error");const H=gn.fromJSON(this.name,T);V(typeof f=="string",e,"internal-error"),At(r,e.name),At(s,e.name),V(typeof h=="boolean",e,"internal-error"),V(typeof g=="boolean",e,"internal-error"),At(i,e.name),At(o,e.name),At(a,e.name),At(c,e.name),At(l,e.name),At(u,e.name);const M=new Ve({uid:f,auth:e,email:s,emailVerified:h,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:H,createdAt:l,lastLoginAt:u});return I&&Array.isArray(I)&&(M.providerData=I.map(x=>({...x}))),c&&(M._redirectEventId=c),M}static async _fromIdTokenResponse(e,n,r=!1){const s=new gn;s.updateFromServerResponse(n);const i=new Ve({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Br(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];V(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?bl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new gn;a.updateFromIdToken(r);const c=new Ve({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ni(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
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
 */const na=new Map;function _t(t){wt(t instanceof Function,"Expected a class definition");let e=na.get(t);return e?(wt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,na.set(t,e),e)}/**
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
 */class wl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wl.type="NONE";const ra=wl;/**
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
 */function Tr(t,e,n){return`firebase:${t}:${e}:${n}`}class mn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Tr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Tr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Fr(this.auth,{idToken:e}).catch(()=>{});return n?Ve._fromGetAccountInfoResponse(this.auth,n,e):null}return Ve._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new mn(_t(ra),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||_t(ra);const o=Tr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const h=await Fr(e,{idToken:u}).catch(()=>{});if(!h)break;f=await Ve._fromGetAccountInfoResponse(e,h,u)}else f=Ve._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new mn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new mn(i,e,r))}}/**
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
 */function sa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(El(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Al(e))return"Blackberry";if(Rl(e))return"Webos";if(Il(e))return"Safari";if((e.includes("chrome/")||Sl(e))&&!e.includes("edge/"))return"Chrome";if(Tl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function El(t=Ae()){return/firefox\//i.test(t)}function Il(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sl(t=Ae()){return/crios\//i.test(t)}function Cl(t=Ae()){return/iemobile/i.test(t)}function Tl(t=Ae()){return/android/i.test(t)}function Al(t=Ae()){return/blackberry/i.test(t)}function Rl(t=Ae()){return/webos/i.test(t)}function ki(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Vg(t=Ae()){return ki(t)&&!!window.navigator?.standalone}function jg(){return tp()&&document.documentMode===10}function xl(t=Ae()){return ki(t)||Tl(t)||Rl(t)||Al(t)||/windows phone/i.test(t)||Cl(t)}/**
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
 */function Pl(t,e=[]){let n;switch(t){case"Browser":n=sa(Ae());break;case"Worker":n=`${sa(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${lr}/${r}`}/**
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
 */class Wg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Kg(t,e={}){return Vt(t,"GET","/v2/passwordPolicy",tn(t,e))}/**
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
 */const zg=6;class Gg{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??zg,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class qg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ia(this),this.idTokenSubscription=new ia(this),this.beforeStateQueue=new Wg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_t(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await mn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fr(this,{idToken:e}),r=await Ve._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(rt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Br(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rt(this.app))return Promise.reject(Ft(this));const n=e?It(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rt(this.app)?Promise.reject(Ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rt(this.app)?Promise.reject(Ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kg(this),n=new Gg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ar("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Hg(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_t(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await mn.create(this,[_t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Ig(`Error while retrieving App Check token: ${e.error}`),e?.token}}function In(t){return It(t)}class ia{constructor(e){this.auth=e,this.observer=null,this.addObserver=cp(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let as={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jg(t){as=t}function kl(t){return as.loadJS(t)}function Yg(){return as.recaptchaEnterpriseScript}function Zg(){return as.gapiScript}function Xg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Qg{constructor(){this.enterprise=new em}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class em{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const tm="recaptcha-enterprise",Ol="NO_RECAPTCHA";class nm{constructor(e){this.type=tm,this.auth=In(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Mg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Og(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ea(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Ol)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Qg().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ea(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Yg();c.length!==0&&(c+=a),kl(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function oa(t,e,n,r=!1,s=!1){const i=new nm(t);let o;if(s)o=Ol;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function aa(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await oa(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await oa(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function rm(t,e){const n=ul(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(bn(i,e??{}))return s;qe(s,"already-initialized")}return n.initialize({options:e})}function sm(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(_t);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function im(t,e,n){const r=In(t);V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ml(e),{host:o,port:a}=om(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){V(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),V(bn(l,r.config.emulator)&&bn(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,is(o)?(Gh(`${i}//${o}${c}`),Yh("Auth",!0)):am()}function Ml(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function om(t){const e=Ml(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ca(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ca(o)}}}function ca(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function am(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Oi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,n){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}}async function cm(t,e){return Vt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lm(t,e){return os(t,"POST","/v1/accounts:signInWithPassword",tn(t,e))}/**
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
 */async function um(t,e){return os(t,"POST","/v1/accounts:signInWithEmailLink",tn(t,e))}async function fm(t,e){return os(t,"POST","/v1/accounts:signInWithEmailLink",tn(t,e))}/**
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
 */class nr extends Oi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new nr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new nr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return aa(e,n,"signInWithPassword",lm);case"emailLink":return um(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return aa(e,r,"signUpPassword",cm);case"emailLink":return fm(e,{idToken:n,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function _n(t,e){return os(t,"POST","/v1/accounts:signInWithIdp",tn(t,e))}/**
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
 */const dm="http://localhost";class Qt extends Oi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Qt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _n(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_n(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_n(e,n)}buildRequest(){const e={requestUri:dm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cr(n)}return e}}/**
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
 */function hm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pm(t){const e=Pn(kn(t)).link,n=e?Pn(kn(e)).deep_link_id:null,r=Pn(kn(t)).deep_link_id;return(r?Pn(kn(r)).link:null)||r||n||e||t}class Mi{constructor(e){const n=Pn(kn(e)),r=n.apiKey??null,s=n.oobCode??null,i=hm(n.mode??null);V(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=pm(e);try{return new Mi(n)}catch{return null}}}/**
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
 */class Sn{constructor(){this.providerId=Sn.PROVIDER_ID}static credential(e,n){return nr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mi.parseLink(n);return V(r,"argument-error"),nr._fromEmailAndCode(e,r.code,r.tenantId)}}Sn.PROVIDER_ID="password";Sn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Sn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Nl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fr extends Nl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ot extends fr{constructor(){super("facebook.com")}static credential(e){return Qt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
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
 */class Mt extends fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qt._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mt.credential(n,r)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
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
 */class Nt extends fr{constructor(){super("github.com")}static credential(e){return Qt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.GITHUB_SIGN_IN_METHOD="github.com";Nt.PROVIDER_ID="github.com";/**
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
 */class Dt extends fr{constructor(){super("twitter.com")}static credential(e,n){return Qt._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dt.credential(n,r)}catch{return null}}}Dt.TWITTER_SIGN_IN_METHOD="twitter.com";Dt.PROVIDER_ID="twitter.com";/**
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
 */class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ve._fromIdTokenResponse(e,r,s),o=la(r);return new En({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=la(r);return new En({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function la(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Hr extends Ht{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Hr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Hr(e,n,r,s)}}function Dl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hr._fromErrorAndOperation(t,i,e,r):i})}async function gm(t,e,n=!1){const r=await tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return En._forOperation(t,"link",r)}/**
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
 */async function mm(t,e,n=!1){const{auth:r}=t;if(rt(r.app))return Promise.reject(Ft(r));const s="reauthenticate";try{const i=await tr(t,Dl(r,s,e,t),n);V(i.idToken,r,"internal-error");const o=Pi(i.idToken);V(o,r,"internal-error");const{sub:a}=o;return V(t.uid===a,r,"user-mismatch"),En._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&qe(r,"user-mismatch"),i}}/**
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
 */async function Ll(t,e,n=!1){if(rt(t.app))return Promise.reject(Ft(t));const r="signIn",s=await Dl(t,r,e),i=await En._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function _m(t,e){return Ll(In(t),e)}/**
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
 */async function vm(t){const e=In(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ym(t,e,n){return rt(t.app)?Promise.reject(Ft(t)):_m(It(t),Sn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vm(t),r})}function bm(t,e,n,r){return It(t).onIdTokenChanged(e,n,r)}function wm(t,e,n){return It(t).beforeAuthStateChanged(e,n)}function Ul(t,e,n,r){return It(t).onAuthStateChanged(e,n,r)}function $l(t){return It(t).signOut()}const Vr="__sak";/**
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
 */class Fl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vr,"1"),this.storage.removeItem(Vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Em=1e3,Im=10;class Bl extends Fl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);jg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Im):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Em)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bl.type="LOCAL";const Sm=Bl;/**
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
 */class Hl extends Fl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hl.type="SESSION";const Vl=Hl;/**
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
 */function Cm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new cs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Cm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cs.receivers=[];/**
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
 */class Tm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ni("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ot(){return window}function Am(t){ot().location.href=t}/**
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
 */function jl(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function Rm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xm(){return navigator?.serviceWorker?.controller||null}function Pm(){return jl()?self:null}/**
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
 */const Wl="firebaseLocalStorageDb",km=1,jr="firebaseLocalStorage",Kl="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ls(t,e){return t.transaction([jr],e?"readwrite":"readonly").objectStore(jr)}function Om(){const t=indexedDB.deleteDatabase(Wl);return new dr(t).toPromise()}function ri(){const t=indexedDB.open(Wl,km);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jr,{keyPath:Kl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jr)?e(r):(r.close(),await Om(),e(await ri()))})})}async function ua(t,e,n){const r=ls(t,!0).put({[Kl]:e,value:n});return new dr(r).toPromise()}async function Mm(t,e){const n=ls(t,!1).get(e),r=await new dr(n).toPromise();return r===void 0?null:r.value}function fa(t,e){const n=ls(t,!0).delete(e);return new dr(n).toPromise()}const Nm=800,Dm=3;class zl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ri(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Dm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cs._getInstance(Pm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Rm(),!this.activeServiceWorker)return;this.sender=new Tm(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ri();return await ua(e,Vr,"1"),await fa(e,Vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ua(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Mm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ls(s,!1).getAll();return new dr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zl.type="LOCAL";const Lm=zl;new ur(3e4,6e4);/**
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
 */function Um(t,e){return e?_t(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Di extends Oi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _n(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _n(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _n(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $m(t){return Ll(t.auth,new Di(t),t.bypassAuthState)}function Fm(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),mm(n,new Di(t),t.bypassAuthState)}async function Bm(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),gm(n,new Di(t),t.bypassAuthState)}/**
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
 */class Gl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $m;case"linkViaPopup":case"linkViaRedirect":return Bm;case"reauthViaPopup":case"reauthViaRedirect":return Fm;default:qe(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Hm=new ur(2e3,1e4);class cn extends Gl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=Ni();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hm.get())};e()}}cn.currentPopupAction=null;/**
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
 */const Vm="pendingRedirect",Ar=new Map;class jm extends Gl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ar.get(this.auth._key());if(!e){try{const r=await Wm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ar.set(this.auth._key(),e)}return this.bypassAuthState||Ar.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wm(t,e){const n=Gm(e),r=zm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Km(t,e){Ar.set(t._key(),e)}function zm(t){return _t(t._redirectPersistence)}function Gm(t){return Tr(Vm,t.config.apiKey,t.name)}async function qm(t,e,n=!1){if(rt(t.app))return Promise.reject(Ft(t));const r=In(t),s=Um(r,e),o=await new jm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Jm=600*1e3;class Ym{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!ql(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(it(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jm&&this.cachedEventUids.clear(),this.cachedEventUids.has(da(e))}saveEventToCache(e){this.cachedEventUids.add(da(e)),this.lastProcessedEventTime=Date.now()}}function da(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ql({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Zm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ql(t);default:return!1}}/**
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
 */async function Xm(t,e={}){return Vt(t,"GET","/v1/projects",e)}/**
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
 */const Qm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,e_=/^https?/;async function t_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Xm(t);for(const n of e)try{if(n_(n))return}catch{}qe(t,"unauthorized-domain")}function n_(t){const e=ti(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!e_.test(n))return!1;if(Qm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const r_=new ur(3e4,6e4);function ha(){const t=ot().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function s_(t){return new Promise((e,n)=>{function r(){ha(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ha(),n(it(t,"network-request-failed"))},timeout:r_.get()})}if(ot().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ot().gapi?.load)r();else{const s=Xg("iframefcb");return ot()[s]=()=>{gapi.load?r():n(it(t,"network-request-failed"))},kl(`${Zg()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw Rr=null,e})}let Rr=null;function i_(t){return Rr=Rr||s_(t),Rr}/**
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
 */const o_=new ur(5e3,15e3),a_="__/auth/iframe",c_="emulator/auth/iframe",l_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},u_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function f_(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xi(e,c_):`https://${t.config.authDomain}/${a_}`,r={apiKey:e.apiKey,appName:t.name,v:lr},s=u_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${cr(r).slice(1)}`}async function d_(t){const e=await i_(t),n=ot().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:f_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:l_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=it(t,"network-request-failed"),a=ot().setTimeout(()=>{i(o)},o_.get());function c(){ot().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const h_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},p_=500,g_=600,m_="_blank",__="http://localhost";class pa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function v_(t,e,n,r=p_,s=g_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...h_,width:r.toString(),height:s.toString(),top:i,left:o},l=Ae().toLowerCase();n&&(a=Sl(l)?m_:n),El(l)&&(e=e||__,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[g,I])=>`${h}${g}=${I},`,"");if(Vg(l)&&a!=="_self")return y_(e||"",a),new pa(null);const f=window.open(e||"",a,u);V(f,t,"popup-blocked");try{f.focus()}catch{}return new pa(f)}function y_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const b_="__/auth/handler",w_="emulator/auth/handler",E_=encodeURIComponent("fac");async function ga(t,e,n,r,s,i){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:lr,eventId:s};if(e instanceof Nl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ap(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof fr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${E_}=${encodeURIComponent(c)}`:"";return`${I_(t)}?${cr(a).slice(1)}${l}`}function I_({config:t}){return t.emulator?xi(t,w_):`https://${t.authDomain}/${b_}`}/**
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
 */const Ms="webStorageSupport";class S_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vl,this._completeRedirectFn=qm,this._overrideRedirectResult=Km}async _openPopup(e,n,r,s){wt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await ga(e,n,r,ti(),s);return v_(e,i,Ni())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ga(e,n,r,ti(),s);return Am(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(wt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await d_(e),r=new Ym(e);return n.register("authEvent",s=>(V(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ms,{type:Ms},s=>{const i=s?.[0]?.[Ms];i!==void 0&&n(!!i),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=t_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xl()||Il()||ki()}}const C_=S_;var ma="@firebase/auth",_a="1.11.0";/**
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
 */class T_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function A_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function R_(t){Qn(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pl(t)},l=new qg(r,s,i,c);return sm(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qn(new wn("auth-internal",e=>{const n=In(e.getProvider("auth").getImmediate());return(r=>new T_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(ma,_a,A_(t)),pn(ma,_a,"esm2020")}/**
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
 */const x_=300,P_=ol("authIdTokenMaxAge")||x_;let va=null;const k_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>P_)return;const s=n?.token;va!==s&&(va=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Jl(t=lg()){const e=ul(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rm(t,{popupRedirectResolver:C_,persistence:[Lm,Sm,Vl]}),r=ol("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=k_(i.toString());wm(n,o,()=>o(n.currentUser)),bm(n,a=>o(a))}}const s=Kh("auth");return s&&im(n,`http://${s}`),n}function O_(){return document.getElementsByTagName("head")?.[0]??document}Jg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=it("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",O_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});R_("Browser");const M_={apiKey:"AIzaSyDcriwDy-Wl8BYIbZO8_GtIwctqxUzEAJ4",authDomain:"prueba1-esmn.firebaseapp.com",projectId:"prueba1-esmn",storageBucket:"prueba1-esmn.firebasestorage.app",messagingSenderId:"155924203510",appId:"1:155924203510:web:b7b99a9b766d092f0529d7"},N_=fl(M_),us=Jl(N_),xr=kt(null);Ul(us,t=>{xr.value=t});function Yl(){const t=Oe(()=>!!xr.value),e=Oe(()=>xr.value?.email||"");return{user:xr,isLoggedIn:t,email:e}}function Zl(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"})])}function D_(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"})])}function ya(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"})])}function L_(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function ba(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"})])}function U_(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"})])}function $_(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})])}function F_(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"})])}function wa(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"})])}function B_(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"})])}function H_(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"})])}function V_(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"}),_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})])}function j_(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"})])}function W_(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"})])}function K_(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})])}function z_(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"})])}function G_(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"})])}function Ea(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"})])}function Ia(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"})])}function q_(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"}),_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.867 19.125h.008v.008h-.008v-.008Z"})])}const fs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},J_={class:"bg-teal-800 text-white px-4 py-3 md:px-6 flex items-center justify-between relative"},Y_={class:"hidden md:flex items-center"},Z_={key:0,class:"md:hidden absolute top-full left-0 w-full bg-teal-800 flex flex-col space-y-2 px-4 py-3 shadow-lg"},X_={class:"flex items-center space-x-2"},Q_={class:"hidden md:inline text-sm"},e0={__name:"BarraApp",setup(t){const e=kt(!1);function n(){e.value=!e.value}const{user:r}=Yl(),s=Ci();async function i(){await $l(us),s.push("/")}return(o,a)=>{const c=gc("router-link");return J(),Y("nav",J_,[_("button",{onClick:n,class:"md:hidden text-white hover:text-teal-200 transition","aria-label":"Menú"},[$(z(L_),{class:"h-8 w-8"})]),_("div",Y_,[$(c,{to:"/dashboard",class:"hover:bg-teal-500 px-2 py-2 flex rounded transition"},{default:et(()=>[$(z(ba),{class:"h-5 w-5"}),a[6]||(a[6]=me()),a[7]||(a[7]=_("span",{class:"px-1"},"Dashboard ",-1))]),_:1}),$(c,{to:"/inscripciones",class:"hover:bg-teal-500 px-2 py-2 flex rounded transition"},{default:et(()=>[$(z(Ea),{class:"h-5 w-5"}),a[8]||(a[8]=me()),a[9]||(a[9]=_("span",{class:"px-1"}," Inscripciones",-1))]),_:1}),$(c,{to:"/otras",onClick:a[0]||(a[0]=l=>e.value=!1),class:"hover:bg-teal-500 px-2 py-2 flex rounded transition"},{default:et(()=>[$(z(wa),{class:"h-5 w-5"}),a[10]||(a[10]=me()),a[11]||(a[11]=_("span",{class:"px-1"}," Funciones",-1))]),_:1}),$(c,{to:"/tablero",onClick:a[1]||(a[1]=l=>e.value=!1),class:"hover:bg-teal-500 px-2 py-2 flex rounded transition"},{default:et(()=>[$(z(Ia),{class:"h-5 w-5"}),a[12]||(a[12]=me()),a[13]||(a[13]=_("span",{class:"px-1"}," Tablero",-1))]),_:1}),_("button",{onClick:i,class:"w-full flex text-left hover:bg-red-600 px-2 py-2 rounded transition"},[$(z(ya),{class:"h-6 w-6"}),a[14]||(a[14]=_("span",{class:"px-1"},"Salir",-1))])]),$(td,{name:"slide"},{default:et(()=>[e.value?(J(),Y("div",Z_,[$(c,{to:"/dashboard",onClick:a[2]||(a[2]=l=>e.value=!1),class:"hover:bg-teal-500 px-3 py-2 flex rounded transition"},{default:et(()=>[$(z(ba),{class:"h-5 w-5"}),a[15]||(a[15]=me()),a[16]||(a[16]=_("span",{class:"px-2"},"Dashboard ",-1))]),_:1}),$(c,{to:"/inscripciones",onClick:a[3]||(a[3]=l=>e.value=!1),class:"hover:bg-teal-500 px-3 py-2 flex rounded transition"},{default:et(()=>[$(z(Ea),{class:"h-5 w-5"}),a[17]||(a[17]=me()),a[18]||(a[18]=_("span",{class:"px-2"}," Inscripciones",-1))]),_:1}),$(c,{to:"/otras",onClick:a[4]||(a[4]=l=>e.value=!1),class:"hover:bg-teal-500 px-3 py-2 rounded flex transition"},{default:et(()=>[$(z(wa),{class:"h-5 w-5"}),a[19]||(a[19]=me()),a[20]||(a[20]=_("span",{class:"px-2"}," Otras funciones",-1))]),_:1}),$(c,{to:"/tablero",onClick:a[5]||(a[5]=l=>e.value=!1),class:"hover:bg-teal-500 px-3 py-2 rounded flex transition"},{default:et(()=>[$(z(Ia),{class:"h-5 w-5"}),a[21]||(a[21]=me()),a[22]||(a[22]=_("span",{class:"px-2"}," Tablero",-1))]),_:1}),_("button",{onClick:i,class:"w-full flex text-left hover:bg-red-600 px-3 py-2 rounded transition"},[$(z(ya),{class:"h-6 w-6"}),a[23]||(a[23]=_("span",{class:"px-2"},"Salir",-1))])])):Lc("",!0)]),_:1}),_("div",X_,[_("span",Q_,sr(z(r)?.email||"Usuario no registrado"),1),a[24]||(a[24]=_("img",{src:Lh,alt:"Usuario",class:"w-8 h-8 rounded-full object-cover border-2 border-teal-300"},null,-1))])])}}},t0=fs(e0,[["__scopeId","data-v-577e81c4"]]);function n0(t,e){return J(),Y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[_("path",{"fill-rule":"evenodd",d:"M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm4.78 1.97a.75.75 0 0 1 0 1.06L5.81 8l.97.97a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 0Zm2.44 1.06a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97Z","clip-rule":"evenodd"})])}const r0={class:"bg-gray-700 text-white text-xs text-center py-2"},s0={flex:""},i0={__name:"FooterApp",setup(t){return(e,n)=>(J(),Y("footer",r0,[$(z(n0),{class:"h-5 w-5 inline-block ml-2 text-teal-200"}),n[0]||(n[0]=_("span",null,"Sistema en desarrollo",-1)),n[1]||(n[1]=me(" | ",-1)),n[2]||(n[2]=_("span",null,[me(" Versión "),_("i",null,"0.0.1")],-1)),n[3]||(n[3]=me(" | ",-1)),n[4]||(n[4]=_("span",null,[_("i",null,"InformaticaESMN")],-1)),$(z(B_),{class:"h-5 w-5 inline-block ml-2 text-teal-200"}),_("div",s0,[_("span",null,"© "+sr(new Date().getFullYear())+" Escuela Superior de Música de Neuquén",1),$(z(Zl),{class:"h-5 w-5 inline-block ml-2"})])]))}},o0={class:"min-h-screen bg-stone-100 flex flex-col"},a0={class:"flex-grow"},c0={__name:"App",setup(t){const e=Dh(),n=Oe(()=>e.name==="Login");return(r,s)=>{const i=gc("router-view");return J(),Y("div",o0,[n.value?Lc("",!0):(J(),Nc(t0,{key:0})),_("main",a0,[$(i)]),$(i0)])}}},Xl="/rac/logoesmn140.png",l0={class:"min-h-screen flex flex-col bg-gradient-to-br from-teal-600 to-gray-600"},u0={class:"flex-1 flex items-center justify-center p-4"},f0={class:"max-w-4xl w-full grid md:grid-cols-3 bg-white rounded-xl shadow-2xl overflow-hidden"},d0={class:"md:col-span-2 p-8"},h0={class:"relative"},p0={class:"relative"},g0={class:"flex items-center text-sm text-gray-600"},m0=["disabled"],_0={__name:"LoginE",setup(t){const e=kt(""),n=kt(""),r=kt(!1),s=kt(!1),i=kt(""),o=Ci(),a=async()=>{s.value=!0,i.value="";try{await ym(us,e.value,n.value),o.push("/dashboard")}catch(c){i.value=c.code==="auth/user-not-found"?"Usuario no encontrado":c.code==="auth/wrong-password"?"Contraseña incorrecta":"Error al ingresar"}finally{s.value=!1}};return(c,l)=>(J(),Y("div",l0,[_("main",u0,[_("div",f0,[l[10]||(l[10]=_("div",{class:"md:col-span-1 bg-teal-600 text-white flex flex-col items-center justify-center p-8"},[_("img",{src:Xl,alt:"Logo ESMN",class:"max-h-36 mb-4"}),_("h1",{class:"text-2xl font-light"},"RAC - ESMN"),_("p",{class:"font-light text-sm text-center opacity-80 mt-1"},"Sistema interno de gestión educativa")],-1)),_("div",d0,[l[9]||(l[9]=_("h2",{class:"text-xl font-semibold text-center mb-6"},"Acceso Estudiantes",-1)),_("form",{onSubmit:Td(a,["prevent"]),class:"space-y-5"},[_("div",null,[l[4]||(l[4]=_("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Email",-1)),_("div",h0,[l[3]||(l[3]=_("span",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[_("i",{class:"fas fa-user text-gray-400"})],-1)),_s(_("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>e.value=u),type:"email",placeholder:"Tu email",class:"w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500",required:""},null,512),[[Eo,e.value]])])]),_("div",null,[l[6]||(l[6]=_("label",{class:"block text-sm font-medium text-gray-700 mb-1"},"Contraseña",-1)),_("div",p0,[l[5]||(l[5]=_("span",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[_("i",{class:"fas fa-lock text-gray-400"})],-1)),_s(_("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>n.value=u),type:"password",placeholder:"••••••",autocomplete:"current-password",class:"w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500",required:""},null,512),[[Eo,n.value]])])]),_("label",g0,[_s(_("input",{"onUpdate:modelValue":l[2]||(l[2]=u=>r.value=u),type:"checkbox",class:"mr-2 rounded"},null,512),[[Ed,r.value]]),l[7]||(l[7]=me(" No me olvides ",-1))]),_("button",{type:"submit",disabled:s.value,class:"w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 rounded-md disabled:opacity-60"},sr(s.value?"Ingresando…":"Ingresar"),9,m0),l[8]||(l[8]=_("p",{class:"text-xs text-center text-gray-500 space-x-2"},[_("a",{href:"#",class:"hover:underline"},"¿Olvidaste tu contraseña?"),_("span",null,"|"),_("a",{href:"#",class:"hover:underline"},"¿No tienes cuenta?")],-1))],32)])])])]))}},v0={class:"p-8"},y0={key:0},b0={key:1},w0={__name:"DashboardE",setup(t){const{user:e}=Yl(),n=Ci(),r=async()=>{await $l(us),n.push("/")};return(s,i)=>(J(),Y(He,null,[_("div",v0,[i[1]||(i[1]=_("h1",{class:"text-2xl font-bold mb-4"},"Tablero, Ficha, Legajo Estudiante",-1)),z(e)?(J(),Y("p",y0,[i[0]||(i[0]=me(" Bienvenido/a ",-1)),_("strong",null,sr(z(e).email),1)])):(J(),Y("p",b0,"Cargando…")),_("button",{onClick:r,class:"mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"}," Cerrar sesión ")]),i[2]||(i[2]=_("main",null,[_("h1",{class:"text-2xl font-bold mb-4"},"Dashboard Estudiante"),_("p",null,"Contenido del dashboard para estudiantes. Aca tienen que ir sus datos personales")],-1))],64))}},E0={},I0={class:"p-4"};function S0(t,e){return J(),Y("div",I0,[...e[0]||(e[0]=[_("h1",{class:"text-2xl font-bold mb-4"},"Inscripciones",-1),_("p",null,"Esta es la página de inscripciones.",-1)])])}const C0=fs(E0,[["render",S0]]),T0={},A0={class:"p-4"};function R0(t,e){return J(),Y("div",A0,[...e[0]||(e[0]=[_("h1",{class:"text-2xl font-bold mb-4"},"Funciones",-1),_("p",null,"Esta página es para otras funciones.",-1)])])}const x0=fs(T0,[["render",R0]]),P0={class:"bg-stone-100 min-h-screen font-sans"},k0={class:"container mx-auto px-4 py-6"},O0={class:"grid grid-cols-1 lg:grid-cols-3 gap-6"},M0={class:"lg:col-span-1"},N0={class:"bg-white rounded-lg shadow-md p-6 mb-6 card-hover transition-all duration-300"},D0={class:"space-y-3"},L0={class:"flex items-center"},U0={class:"flex items-center"},$0={class:"flex items-center"},F0={class:"flex items-center"},B0={class:"mt-6 w-full py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"},H0={class:"bg-white rounded-lg shadow-md p-6 card-hover transition-all duration-300"},V0={class:"flex items-center mb-4"},j0={class:"mt-4 w-full py-2 bg-stone-100 text-stone-800 rounded-lg hover:bg-stone-200 transition"},W0={class:"mt-4 w-full py-2 bg-stone-100 text-stone-800 rounded-lg hover:bg-stone-200 transition"},K0={class:"mt-4 w-full py-2 bg-stone-100 text-stone-800 rounded-lg hover:bg-stone-200 transition"},z0={class:"lg:col-span-2"},G0={class:"bg-white rounded-lg shadow-md p-6 mb-6 card-hover transition-all duration-300"},q0={class:"flex items-center mb-4"},J0={class:"overflow-x-auto"},Y0={class:"w-full"},Z0={class:"border-b"},X0={class:"p-3"},Q0={class:"text-teal-600 hover:text-teal-800"},e1={class:"bg-white rounded-lg shadow-md p-6 card-hover transition-all duration-300"},t1={class:"flex items-center mb-4"},n1={class:"mt-4 w-full py-3 bg-stone-100 text-stone-800 rounded-lg hover:bg-stone-200 transition"},r1={__name:"TableroE",setup(t){return(e,n)=>(J(),Y("div",P0,[_("div",k0,[n[19]||(n[19]=_("h1",{class:"text-2xl md:text-3xl font-bold text-stone-800 mb-6"},"Dashboard Estudiantil",-1)),_("div",O0,[_("div",M0,[_("div",N0,[n[5]||(n[5]=_("div",{class:"flex flex-col items-center mb-4"},[_("img",{src:Xl,alt:"Foto estudiante",class:"w-24 h-24 rounded-full border-4 border-teal-500 mb-4"}),_("h2",{class:"text-xl font-bold text-stone-800"},"Juan Perez"),_("p",{class:"text-stone-600"},"662- Profesorado de Música")],-1)),_("div",D0,[_("div",L0,[$(z(H_),{class:"h-5 w-5 inline-block ml-2 text-teal-600"}),n[0]||(n[0]=_("span",{class:"px-2"},"juanperez@gmail.com",-1))]),_("div",U0,[$(z(W_),{class:"h-5 w-5 inline-block ml-2 text-teal-600"}),n[1]||(n[1]=_("span",{class:"px-2"},"DNI: 40123123",-1))]),_("div",$0,[$(z(Zl),{class:"h-5 w-5 inline-block ml-2 text-teal-600"}),n[2]||(n[2]=_("span",{class:"px-2"},"Legajo: 40123123",-1))]),_("div",F0,[$(z(G_),{class:"h-5 w-5 inline-block ml-2 text-teal-600"}),n[3]||(n[3]=_("span",{class:"px-2"},"Estado: Activo",-1))])]),_("button",B0,[$(z(z_),{class:"h-5 w-5 inline-block ml-2"}),n[4]||(n[4]=_("span",{class:"px-2"},"Editar Perfil",-1))])]),_("div",H0,[_("div",V0,[$(z(q_),{class:"h-5 w-5 inline-block ml-2 text-teal-600"}),n[6]||(n[6]=_("span",{class:"text-lg font-bold flex items-center text-stone-800 px-2"},"Acciones",-1))]),_("button",j0,[$(z(j_),{class:"h-5 w-5 inline-block text-stone-400"}),n[7]||(n[7]=me(" Datos Personales",-1))]),_("button",W0,[$(z(D_),{class:"h-5 w-5 inline-block text-stone-400"}),n[8]||(n[8]=me(" Legajo",-1))]),_("button",K0,[$(z(U_),{class:"h-5 w-5 inline-block text-stone-400"}),n[9]||(n[9]=me(" Mensaje a Bedelia",-1))])])]),_("div",z0,[_("div",G0,[_("div",q0,[$(z(F_),{class:"h-5 w-5 inline-block ml-2 text-teal-600"}),n[10]||(n[10]=_("span",{class:"text-lg font-bold flex items-center text-stone-800 px-2"},"Planes de Estudio",-1))]),_("div",J0,[_("table",Y0,[n[15]||(n[15]=_("thead",null,[_("tr",{class:"bg-stone-100 text-left text-stone-800"},[_("th",{class:"p-3"},"Plan"),_("th",{class:"p-3"},"Estado"),_("th",{class:"p-3"},"Progreso"),_("th",{class:"p-3"},"Acciones")])],-1)),_("tbody",null,[_("tr",Z0,[n[12]||(n[12]=_("td",{class:"p-3 font-medium"},"662 Profesorado de Música",-1)),n[13]||(n[13]=_("td",{class:"p-3"},[_("span",{class:"px-2 py-1 rounded-full text-sm bg-green-100 text-green-800"}," Activo ")],-1)),n[14]||(n[14]=_("td",{class:"p-3"},[_("div",{class:"w-full bg-stone-200 rounded-full h-2.5"},[_("div",{class:"bg-teal-600 h-2.5 rounded-full progress-bar"})])],-1)),_("td",X0,[_("button",Q0,[$(z(V_),{class:"h-5 w-5 inline-block"}),n[11]||(n[11]=me(" Detalle ",-1))])])])])])])]),_("div",e1,[_("div",t1,[$(z($_),{class:"h-5 w-5 inline-block ml-2 text-teal-600"}),n[16]||(n[16]=_("span",{class:"text-lg font-bold flex items-center text-stone-800 px-2"},"Materias Aprobadas",-1))]),n[18]||(n[18]=$f('<div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-6db0f5e5><div class="bg-stone-100 rounded-lg p-4" data-v-6db0f5e5><div class="flex justify-between items-start" data-v-6db0f5e5><h4 class="font-medium text-stone-800" data-v-6db0f5e5>Psicología General</h4><span class="px-2 py-1 rounded-full text-sm bg-green-100 text-green-800" data-v-6db0f5e5> Nota: 8 </span></div><p class="text-sm text-stone-600 mt-2" data-v-6db0f5e5>Código: 6620105</p><p class="text-sm text-stone-600" data-v-6db0f5e5>Aprobada: 11/2022</p></div></div>',1)),_("button",n1,[$(z(K_),{class:"h-6 w-6 inline-block text-stone-400"}),n[17]||(n[17]=me(" Detalle del historial académico ",-1))])])])])])]))}},s1=fs(r1,[["__scopeId","data-v-6db0f5e5"]]),i1=[{path:"/",name:"Login",component:_0},{path:"/dashboard",name:"Dashboard",component:w0},{path:"/inscripciones",name:"Inscripciones",component:C0},{path:"/otras",name:"OtrasFunciones",component:x0,meta:{requiresAuth:!0}},{path:"/tablero",name:"Tablero",component:s1}],Ql=Mh({history:ch(),routes:i1});Ql.beforeEach(async(t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=Jl();s.currentUser,Ul(s,i=>{r&&!i?n("/"):n()})});xd(c0).use(Ql).mount("#app");
