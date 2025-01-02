import{g as pn,R as Oe}from"./index-Bq_BoyWd.js";var Pe={exports:{}},gn="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",hn=gn,bn=hn;function Se(){}function Ee(){}Ee.resetWarningCache=Se;var yn=function(){function t(a,r,o,i,s,c){if(c!==bn){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ee,resetWarningCache:Se};return n.PropTypes=n,n};Pe.exports=yn();var vn=Pe.exports;const d=pn(vn);/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function xn(t,e,n){return(e=kn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Bt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bt(Object(n),!0).forEach(function(a){xn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bt(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function An(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function kn(t){var e=An(t,"string");return typeof e=="symbol"?e:e+""}const Kt=()=>{};let Dt={},Ie={},Ce=null,Te={mark:Kt,measure:Kt};try{typeof window<"u"&&(Dt=window),typeof document<"u"&&(Ie=document),typeof MutationObserver<"u"&&(Ce=MutationObserver),typeof performance<"u"&&(Te=performance)}catch{}const{userAgent:qt=""}=Dt.navigator||{},L=Dt,h=Ie,Qt=Ce,Z=Te;L.document;const F=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Ne=~qt.indexOf("MSIE")||~qt.indexOf("Trident/");var wn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,On=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,_e={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Pn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fe=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],A="classic",it="duotone",Sn="sharp",En="sharp-duotone",Me=[A,it,Sn,En],In={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Cn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Tn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Nn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},_n=["fak","fa-kit","fakd","fa-kit-duotone"],Jt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Fn=["kit"],Mn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Ln=["fak","fakd"],Rn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Zt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},tt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Dn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],jn=["fak","fa-kit","fakd","fa-kit-duotone"],zn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Wn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Yn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},yt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Un=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],vt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Dn,...Un],Hn=["solid","regular","light","thin","duotone","brands"],Le=[1,2,3,4,5,6,7,8,9,10],Gn=Le.concat([11,12,13,14,15,16,17,18,19,20]),Xn=[...Object.keys(Yn),...Hn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",tt.GROUP,tt.SWAP_OPACITY,tt.PRIMARY,tt.SECONDARY].concat(Le.map(t=>"".concat(t,"x"))).concat(Gn.map(t=>"w-".concat(t))),$n={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const N="___FONT_AWESOME___",xt=16,Re="fa",De="svg-inline--fa",z="data-fa-i2svg",At="data-fa-pseudo-element",Vn="data-fa-pseudo-element-pending",jt="data-prefix",zt="data-icon",te="fontawesome-i2svg",Bn="async",Kn=["HTML","HEAD","STYLE","SCRIPT"],je=(()=>{try{return!0}catch{return!1}})();function Q(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[A]}})}const ze=l({},_e);ze[A]=l(l(l(l({},{"fa-duotone":"duotone"}),_e[A]),Jt.kit),Jt["kit-duotone"]);const qn=Q(ze),kt=l({},Nn);kt[A]=l(l(l(l({},{duotone:"fad"}),kt[A]),Zt.kit),Zt["kit-duotone"]);const ee=Q(kt),wt=l({},yt);wt[A]=l(l({},wt[A]),Rn.kit);const Wt=Q(wt),Ot=l({},Wn);Ot[A]=l(l({},Ot[A]),Mn.kit);Q(Ot);const Qn=wn,We="fa-layers-text",Jn=On,Zn=l({},In);Q(Zn);const ta=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mt=Pn,ea=[...Fn,...Xn],V=L.FontAwesomeConfig||{};function na(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function aa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=aa(na(n));r!=null&&(V[a]=r)});const Ye={styleDefault:"solid",familyDefault:A,cssPrefix:Re,replacementClass:De,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};V.familyPrefix&&(V.cssPrefix=V.familyPrefix);const G=l(l({},Ye),V);G.autoReplaceSvg||(G.observeMutations=!1);const u={};Object.keys(Ye).forEach(t=>{Object.defineProperty(u,t,{enumerable:!0,set:function(e){G[t]=e,B.forEach(n=>n(u))},get:function(){return G[t]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(t){G.cssPrefix=t,B.forEach(e=>e(u))},get:function(){return G.cssPrefix}});L.FontAwesomeConfig=u;const B=[];function ra(t){return B.push(t),()=>{B.splice(B.indexOf(t),1)}}const M=xt,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function oa(t){if(!t||!F)return;const e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=h.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return h.head.insertBefore(e,a),t}const ia="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function K(){let t=12,e="";for(;t-- >0;)e+=ia[Math.random()*62|0];return e}function X(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Yt(t){return t.classList?X(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ue(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function sa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ue(t[n]),'" '),"").trim()}function st(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ut(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function la(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(o," ").concat(i," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:f}}function fa(t){let{transform:e,width:n=xt,height:a=xt,startCentered:r=!1}=t,o="";return r&&Ne?o+="translate(".concat(e.x/M-n/2,"em, ").concat(e.y/M-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/M,"em), calc(-50% + ").concat(e.y/M,"em)) "):o+="translate(".concat(e.x/M,"em, ").concat(e.y/M,"em) "),o+="scale(".concat(e.size/M*(e.flipX?-1:1),", ").concat(e.size/M*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var ca=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function He(){const t=Re,e=De,n=u.cssPrefix,a=u.replacementClass;let r=ca;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let ne=!1;function dt(){u.autoAddCss&&!ne&&(oa(He()),ne=!0)}var ua={mixout(){return{dom:{css:He,insertCss:dt}}},hooks(){return{beforeDOMElementCreation(){dt()},beforeI2svg(){dt()}}}};const _=L||{};_[N]||(_[N]={});_[N].styles||(_[N].styles={});_[N].hooks||(_[N].hooks={});_[N].shims||(_[N].shims=[]);var C=_[N];const Ge=[],Xe=function(){h.removeEventListener("DOMContentLoaded",Xe),at=1,Ge.map(t=>t())};let at=!1;F&&(at=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),at||h.addEventListener("DOMContentLoaded",Xe));function ma(t){F&&(at?setTimeout(t,0):Ge.push(t))}function J(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ue(t):"<".concat(e," ").concat(sa(n),">").concat(a.map(J).join(""),"</").concat(e,">")}function ae(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var pt=function(e,n,a,r){var o=Object.keys(e),i=o.length,s=n,c,f,m;for(a===void 0?(c=1,m=e[o[0]]):(c=0,m=a);c<i;c++)f=o[c],m=s(m,e[f],f,e);return m};function da(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Pt(t){const e=da(t);return e.length===1?e[0].toString(16):null}function pa(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function re(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function St(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=re(e);typeof C.hooks.addPack=="function"&&!a?C.hooks.addPack(t,re(e)):C.styles[t]=l(l({},C.styles[t]||{}),r),t==="fas"&&St("fa",e)}const{styles:q,shims:ga}=C,$e=Object.keys(Wt),ha=$e.reduce((t,e)=>(t[e]=Object.keys(Wt[e]),t),{});let Ht=null,Ve={},Be={},Ke={},qe={},Qe={};function ba(t){return~ea.indexOf(t)}function ya(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ba(r)?r:null}const Je=()=>{const t=a=>pt(q,(r,o,i)=>(r[i]=pt(o,a,{}),r),{});Ve=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=o}),a)),Be=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=o}),a)),Qe=t((a,r,o)=>{const i=r[2];return a[o]=o,i.forEach(s=>{a[s]=o}),a});const e="far"in q||u.autoFetchSvg,n=pt(ga,(a,r)=>{const o=r[0];let i=r[1];const s=r[2];return i==="far"&&!e&&(i="fas"),typeof o=="string"&&(a.names[o]={prefix:i,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:i,iconName:s}),a},{names:{},unicodes:{}});Ke=n.names,qe=n.unicodes,Ht=lt(u.styleDefault,{family:u.familyDefault})};ra(t=>{Ht=lt(t.styleDefault,{family:u.familyDefault})});Je();function Gt(t,e){return(Ve[t]||{})[e]}function va(t,e){return(Be[t]||{})[e]}function j(t,e){return(Qe[t]||{})[e]}function Ze(t){return Ke[t]||{prefix:null,iconName:null}}function xa(t){const e=qe[t],n=Gt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function R(){return Ht}const tn=()=>({prefix:null,iconName:null,rest:[]});function Aa(t){let e=A;const n=$e.reduce((a,r)=>(a[r]="".concat(u.cssPrefix,"-").concat(r),a),{});return Me.forEach(a=>{(t.includes(n[a])||t.some(r=>ha[a].includes(r)))&&(e=a)}),e}function lt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=A}=e,a=qn[n][t];if(n===it&&!t)return"fad";const r=ee[n][t]||ee[n][a],o=t in C.styles?t:null;return r||o||null}function ka(t){let e=[],n=null;return t.forEach(a=>{const r=ya(u.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function oe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ft(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=vt.concat(jn),o=oe(t.filter(g=>r.includes(g))),i=oe(t.filter(g=>!vt.includes(g))),s=o.filter(g=>(a=g,!Fe.includes(g))),[c=null]=s,f=Aa(o),m=l(l({},ka(i)),{},{prefix:lt(c,{family:f})});return l(l(l({},m),Sa({values:t,family:f,styles:q,config:u,canonical:m,givenPrefix:a})),wa(n,a,m))}function wa(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?Ze(r):{},i=j(a,r);return r=o.iconName||i||r,a=o.prefix||a,a==="far"&&!q.far&&q.fas&&!u.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Oa=Me.filter(t=>t!==A||t!==it),Pa=Object.keys(yt).filter(t=>t!==A).map(t=>Object.keys(yt[t])).flat();function Sa(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:i={}}=t,s=n===it,c=e.includes("fa-duotone")||e.includes("fad"),f=i.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(c||f||m)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Oa.includes(n)&&(Object.keys(o).find(p=>Pa.includes(p))||i.autoFetchSvg)){const p=Tn.get(n).defaultShortPrefixId;a.prefix=p,a.iconName=j(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=R()||"fas"),a}class Ea{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=l(l({},this.definitions[o]||{}),r[o]),St(o,r[o]);const i=Wt[A][o];i&&St(i,r[o]),Je()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:i,icon:s}=a[r],c=s[2];e[o]||(e[o]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(e[o][f]=s)}),e[o][i]=s}),e}}let ie=[],Y={};const H={},Ia=Object.keys(H);function Ca(t,e){let{mixoutsTo:n}=e;return ie=t,Y={},Object.keys(H).forEach(a=>{Ia.indexOf(a)===-1&&delete H[a]}),ie.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=r[o][i]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(i=>{Y[i]||(Y[i]=[]),Y[i].push(o[i])})}a.provides&&a.provides(H)}),n}function Et(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Y[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function W(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(Y[t]||[]).forEach(o=>{o.apply(null,n)})}function D(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return H[t]?H[t].apply(null,e):void 0}function It(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||R();if(e)return e=j(n,e)||e,ae(en.definitions,n,e)||ae(C.styles,n,e)}const en=new Ea,Ta=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,W("noAuto")},Na={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(W("beforeI2svg",t),D("pseudoElements2svg",t),D("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,ma(()=>{Fa({autoReplaceSvgRoot:e}),W("watch",t)})}},_a={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:j(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=lt(t[0]);return{prefix:n,iconName:j(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(u.cssPrefix,"-"))>-1||t.match(Qn))){const e=ft(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||R(),iconName:j(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=R();return{prefix:e,iconName:j(e,t)||t}}}},O={noAuto:Ta,config:u,dom:Na,parse:_a,library:en,findIconDefinition:It,toHtml:J},Fa=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=h}=t;(Object.keys(C.styles).length>0||u.autoFetchSvg)&&F&&u.autoReplaceSvg&&O.dom.i2svg({node:e})};function ct(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>J(n))}}),Object.defineProperty(t,"node",{get:function(){if(!F)return;const n=h.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ma(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:i}=t;if(Ut(i)&&n.found&&!a.found){const{width:s,height:c}=n,f={x:s/c/2,y:.5};r.style=st(l(l({},o),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function La(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const i=o===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:a}]}]}function Xt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:i,title:s,maskId:c,titleId:f,extra:m,watchable:g=!1}=t,{width:p,height:y}=n.found?n:e,w=Ln.includes(a),P=[u.replacementClass,r?"".concat(u.cssPrefix,"-").concat(r):""].filter(S=>m.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(m.classes).join(" ");let b={children:[],attributes:l(l({},m.attributes),{},{"data-prefix":a,"data-icon":r,class:P,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(y)})};const x=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(p/y*16*.0625,"em")}:{};g&&(b.attributes[z]=""),s&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(f||K())},children:[s]}),delete b.attributes.title);const v=l(l({},b),{},{prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:o,symbol:i,styles:l(l({},x),m.styles)}),{children:k,attributes:T}=n.found&&e.found?D("generateAbstractMask",v)||{children:[],attributes:{}}:D("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=k,v.attributes=T,i?La(v):Ma(v)}function se(t){const{content:e,width:n,height:a,transform:r,title:o,extra:i,watchable:s=!1}=t,c=l(l(l({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});s&&(c[z]="");const f=l({},i.styles);Ut(r)&&(f.transform=fa({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const m=st(f);m.length>0&&(c.style=m);const g=[];return g.push({tag:"span",attributes:c,children:[e]}),o&&g.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),g}function Ra(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=st(a.styles);o.length>0&&(r.style=o);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:gt}=C;function Ct(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(mt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(mt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(mt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Da={found:!1,width:512,height:512};function ja(t,e){!je&&!u.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Tt(t,e){let n=e;return e==="fa"&&u.styleDefault!==null&&(e=R()),new Promise((a,r)=>{if(n==="fa"){const o=Ze(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&gt[e]&&gt[e][t]){const o=gt[e][t];return a(Ct(o))}ja(t,e),a(l(l({},Da),{},{icon:u.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}const le=()=>{},Nt=u.measurePerformance&&Z&&Z.mark&&Z.measure?Z:{mark:le,measure:le},$='FA "6.7.1"',za=t=>(Nt.mark("".concat($," ").concat(t," begins")),()=>nn(t)),nn=t=>{Nt.mark("".concat($," ").concat(t," ends")),Nt.measure("".concat($," ").concat(t),"".concat($," ").concat(t," begins"),"".concat($," ").concat(t," ends"))};var $t={begin:za,end:nn};const et=()=>{};function fe(t){return typeof(t.getAttribute?t.getAttribute(z):null)=="string"}function Wa(t){const e=t.getAttribute?t.getAttribute(jt):null,n=t.getAttribute?t.getAttribute(zt):null;return e&&n}function Ya(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(u.replacementClass)}function Ua(){return u.autoReplaceSvg===!0?nt.replace:nt[u.autoReplaceSvg]||nt.replace}function Ha(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function Ga(t){return h.createElement(t)}function an(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ha:Ga}=e;if(typeof t=="string")return h.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(an(o,{ceFn:n}))}),a}function Xa(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const nt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(an(n),e)}),e.getAttribute(z)===null&&u.keepOriginalSource){let n=h.createComment(Xa(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Yt(e).indexOf(u.replacementClass))return nt.replace(t);const a=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,s)=>(s===u.replacementClass||s.match(a)?i.toSvg.push(s):i.toNode.push(s),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>J(o)).join(`
`);e.setAttribute(z,""),e.innerHTML=r}};function ce(t){t()}function rn(t,e){const n=typeof e=="function"?e:et;if(t.length===0)n();else{let a=ce;u.mutateApproach===Bn&&(a=L.requestAnimationFrame||ce),a(()=>{const r=Ua(),o=$t.begin("mutate");t.map(r),o(),n()})}}let Vt=!1;function on(){Vt=!0}function _t(){Vt=!1}let rt=null;function ue(t){if(!Qt||!u.observeMutations)return;const{treeCallback:e=et,nodeCallback:n=et,pseudoElementsCallback:a=et,observeMutationsRoot:r=h}=t;rt=new Qt(o=>{if(Vt)return;const i=R();X(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!fe(s.addedNodes[0])&&(u.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&u.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&fe(s.target)&&~ta.indexOf(s.attributeName))if(s.attributeName==="class"&&Wa(s.target)){const{prefix:c,iconName:f}=ft(Yt(s.target));s.target.setAttribute(jt,c||i),f&&s.target.setAttribute(zt,f)}else Ya(s.target)&&n(s.target)})}),F&&rt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function $a(){rt&&rt.disconnect()}function Va(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function Ba(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ft(Yt(t));return r.prefix||(r.prefix=R()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=va(r.prefix,t.innerText)||Gt(r.prefix,Pt(t.innerText))),!r.iconName&&u.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ka(t){const e=X(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return u.autoA11y&&(n?e["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(a||K()):(e["aria-hidden"]="true",e.focusable="false")),e}function qa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function me(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ba(t),o=Ka(t),i=Et("parseNodeAttributes",{},t);let s=e.styleParser?Va(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:o}},i)}const{styles:Qa}=C;function sn(t){const e=u.autoReplaceSvg==="nest"?me(t,{styleParser:!1}):me(t);return~e.extra.classes.indexOf(We)?D("generateLayersText",t,e):D("generateSvgReplacementMutation",t,e)}function Ja(){return[..._n,...vt]}function de(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();const n=h.documentElement.classList,a=m=>n.add("".concat(te,"-").concat(m)),r=m=>n.remove("".concat(te,"-").concat(m)),o=u.autoFetchSvg?Ja():Fe.concat(Object.keys(Qa));o.includes("fa")||o.push("fa");const i=[".".concat(We,":not([").concat(z,"])")].concat(o.map(m=>".".concat(m,":not([").concat(z,"])"))).join(", ");if(i.length===0)return Promise.resolve();let s=[];try{s=X(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const c=$t.begin("onTree"),f=s.reduce((m,g)=>{try{const p=sn(g);p&&m.push(p)}catch(p){je||p.name==="MissingIcon"&&console.error(p)}return m},[]);return new Promise((m,g)=>{Promise.all(f).then(p=>{rn(p,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),m()})}).catch(p=>{c(),g(p)})})}function Za(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sn(t).then(n=>{n&&rn([n],e)})}function tr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:It(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:It(r||{})),t(a,l(l({},n),{},{mask:r}))}}const er=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,symbol:a=!1,mask:r=null,maskId:o=null,title:i=null,titleId:s=null,classes:c=[],attributes:f={},styles:m={}}=e;if(!t)return;const{prefix:g,iconName:p,icon:y}=t;return ct(l({type:"icon"},t),()=>(W("beforeDOMElementCreation",{iconDefinition:t,params:e}),u.autoA11y&&(i?f["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(s||K()):(f["aria-hidden"]="true",f.focusable="false")),Xt({icons:{main:Ct(y),mask:r?Ct(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:p,transform:l(l({},I),n),symbol:a,title:i,maskId:o,titleId:s,extra:{attributes:f,styles:m,classes:c}})))};var nr={mixout(){return{icon:tr(er)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=de,t.nodeCallback=Za,t}}},provides(t){t.i2svg=function(e){const{node:n=h,callback:a=()=>{}}=e;return de(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:i,transform:s,symbol:c,mask:f,maskId:m,extra:g}=n;return new Promise((p,y)=>{Promise.all([Tt(a,i),f.iconName?Tt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[P,b]=w;p([e,Xt({icons:{main:P,mask:b},prefix:i,iconName:a,transform:s,symbol:c,maskId:m,title:r,titleId:o,extra:g,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:i}=e;const s=st(i);s.length>0&&(a.style=s);let c;return Ut(o)&&(c=D("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},ar={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ct({type:"layer"},()=>{W("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},rr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return ct({type:"counter",content:t},()=>(W("beforeDOMElementCreation",{content:t,params:e}),Ra({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(u.cssPrefix,"-layers-counter"),...a]}})))}}}},or={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,title:a=null,classes:r=[],attributes:o={},styles:i={}}=e;return ct({type:"text",content:t},()=>(W("beforeDOMElementCreation",{content:t,params:e}),se({content:t,transform:l(l({},I),n),title:a,extra:{attributes:o,styles:i,classes:["".concat(u.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let i=null,s=null;if(Ne){const c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();i=f.width/c,s=f.height/c}return u.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,se({content:e.innerHTML,width:i,height:s,transform:r,title:a,extra:o,watchable:!0})])}}};const ir=new RegExp('"',"ug"),pe=[1105920,1112319],ge=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Cn),$n),zn),Ft=Object.keys(ge).reduce((t,e)=>(t[e.toLowerCase()]=ge[e],t),{}),sr=Object.keys(Ft).reduce((t,e)=>{const n=Ft[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function lr(t){const e=t.replace(ir,""),n=pa(e,0),a=n>=pe[0]&&n<=pe[1],r=e.length===2?e[0]===e[1]:!1;return{value:Pt(r?e[0]:e),isSecondary:a||r}}function fr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Ft[n]||{})[r]||sr[n]}function he(t,e){const n="".concat(Vn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=X(t.children).filter(p=>p.getAttribute(At)===e)[0],s=L.getComputedStyle(t,e),c=s.getPropertyValue("font-family"),f=c.match(Jn),m=s.getPropertyValue("font-weight"),g=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&g!=="none"&&g!==""){const p=s.getPropertyValue("content");let y=fr(c,m);const{value:w,isSecondary:P}=lr(p),b=f[0].startsWith("FontAwesome");let x=Gt(y,w),v=x;if(b){const k=xa(w);k.iconName&&k.prefix&&(x=k.iconName,y=k.prefix)}if(x&&!P&&(!i||i.getAttribute(jt)!==y||i.getAttribute(zt)!==v)){t.setAttribute(n,v),i&&t.removeChild(i);const k=qa(),{extra:T}=k;T.attributes[At]=e,Tt(x,y).then(S=>{const mn=Xt(l(l({},k),{},{icons:{main:S,mask:tn()},prefix:y,iconName:v,extra:T,watchable:!0})),ut=h.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ut,t.firstChild):t.appendChild(ut),ut.outerHTML=mn.map(dn=>J(dn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function cr(t){return Promise.all([he(t,"::before"),he(t,"::after")])}function ur(t){return t.parentNode!==document.head&&!~Kn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(At)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function be(t){if(F)return new Promise((e,n)=>{const a=X(t.querySelectorAll("*")).filter(ur).map(cr),r=$t.begin("searchPseudoElements");on(),Promise.all(a).then(()=>{r(),_t(),e()}).catch(()=>{r(),_t(),n()})})}var mr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=be,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=h}=e;u.searchPseudoElements&&be(n)}}};let ye=!1;var dr={mixout(){return{dom:{unwatch(){on(),ye=!0}}}},hooks(){return{bootstrap(){ue(Et("mutationObserverCallbacks",{}))},noAuto(){$a()},watch(t){const{observeMutationsRoot:e}=t;ye?_t():ue(Et("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const ve=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let i=r.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var pr={mixout(){return{parse:{transform:t=>ve(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=ve(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const i={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(s," ").concat(c," ").concat(f)},g={transform:"translate(".concat(o/2*-1," -256)")},p={outer:i,inner:m,path:g};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),p.path)}]}]}}}};const ht={x:0,y:0,width:"100%",height:"100%"};function xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function gr(t){return t.tag==="g"?t.children:[t]}var hr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ft(n.split(" ").map(r=>r.trim())):tn();return a.prefix||(a.prefix=R()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:i,transform:s}=e;const{width:c,icon:f}=r,{width:m,icon:g}=o,p=la({transform:s,containerWidth:m,iconWidth:c}),y={tag:"rect",attributes:l(l({},ht),{},{fill:"white"})},w=f.children?{children:f.children.map(xe)}:{},P={tag:"g",attributes:l({},p.inner),children:[xe(l({tag:f.tag,attributes:l(l({},f.attributes),p.path)},w))]},b={tag:"g",attributes:l({},p.outer),children:[P]},x="mask-".concat(i||K()),v="clip-".concat(i||K()),k={tag:"mask",attributes:l(l({},ht),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,b]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:gr(g)},k]};return n.push(T,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(x,")")},ht)}),{children:n,attributes:a}}}},br={provides(t){let e=!1;L.matchMedia&&(e=L.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=l(l({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},yr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},vr=[ua,nr,ar,rr,or,mr,dr,pr,hr,br,yr];Ca(vr,{mixoutsTo:O});O.noAuto;O.config;O.library;O.dom;const Mt=O.parse;O.findIconDefinition;O.toHtml;const xr=O.icon;O.layer;O.text;O.counter;function Ae(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ae(Object(n),!0).forEach(function(a){U(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ae(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ot(t){"@babel/helpers - typeof";return ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ot(t)}function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ar(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function kr(t,e){if(t==null)return{};var n=Ar(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Lt(t){return wr(t)||Or(t)||Pr(t)||Sr()}function wr(t){if(Array.isArray(t))return Rt(t)}function Or(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Pr(t,e){if(t){if(typeof t=="string")return Rt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rt(t,e)}}function Rt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Sr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Er(t){var e,n=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,i=t.shake,s=t.flash,c=t.spin,f=t.spinPulse,m=t.spinReverse,g=t.pulse,p=t.fixedWidth,y=t.inverse,w=t.border,P=t.listItem,b=t.flip,x=t.size,v=t.rotation,k=t.pull,T=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":c,"fa-spin-reverse":m,"fa-spin-pulse":f,"fa-pulse":g,"fa-fw":p,"fa-inverse":y,"fa-border":w,"fa-li":P,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},U(e,"fa-".concat(x),typeof x<"u"&&x!==null),U(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),U(e,"fa-pull-".concat(k),typeof k<"u"&&k!==null),U(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(T).map(function(S){return T[S]?S:null}).filter(function(S){return S})}function Ir(t){return t=t-0,t===t}function ln(t){return Ir(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Cr=["style"];function Tr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Nr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=ln(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[Tr(r)]=o:e[r]=o,e},{})}function fn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(c){return fn(t,c)}),r=Object.keys(e.attributes||{}).reduce(function(c,f){var m=e.attributes[f];switch(f){case"class":c.attrs.className=m,delete e.attributes.class;break;case"style":c.attrs.style=Nr(m);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=m:c.attrs[ln(f)]=m}return c},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=kr(n,Cr);return r.attrs.style=E(E({},r.attrs.style),i),t.apply(void 0,[e.tag,E(E({},r.attrs),s)].concat(Lt(a)))}var cn=!1;try{cn=!0}catch{}function _r(){if(!cn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ke(t){if(t&&ot(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Mt.icon)return Mt.icon(t);if(t===null)return null;if(t&&ot(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function bt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?U({},t,e):{}}var we={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},un=Oe.forwardRef(function(t,e){var n=E(E({},we),t),a=n.icon,r=n.mask,o=n.symbol,i=n.className,s=n.title,c=n.titleId,f=n.maskId,m=ke(a),g=bt("classes",[].concat(Lt(Er(n)),Lt((i||"").split(" ")))),p=bt("transform",typeof n.transform=="string"?Mt.transform(n.transform):n.transform),y=bt("mask",ke(r)),w=xr(m,E(E(E(E({},g),p),y),{},{symbol:o,title:s,titleId:c,maskId:f}));if(!w)return _r("Could not find icon",m),null;var P=w.abstract,b={ref:e};return Object.keys(n).forEach(function(x){we.hasOwnProperty(x)||(b[x]=n[x])}),Fr(P[0],b)});un.displayName="FontAwesomeIcon";un.propTypes={beat:d.bool,border:d.bool,beatFade:d.bool,bounce:d.bool,className:d.string,fade:d.bool,flash:d.bool,mask:d.oneOfType([d.object,d.array,d.string]),maskId:d.string,fixedWidth:d.bool,inverse:d.bool,flip:d.oneOf([!0,!1,"horizontal","vertical","both"]),icon:d.oneOfType([d.object,d.array,d.string]),listItem:d.bool,pull:d.oneOf(["right","left"]),pulse:d.bool,rotation:d.oneOf([0,90,180,270]),shake:d.bool,size:d.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:d.bool,spinPulse:d.bool,spinReverse:d.bool,symbol:d.oneOfType([d.bool,d.string]),title:d.string,titleId:d.string,transform:d.oneOfType([d.string,d.object]),swapOpacity:d.bool};var Fr=fn.bind(null,Oe.createElement);export{un as F,d as P};
