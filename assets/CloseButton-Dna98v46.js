import{R as x,G as T,r as c,j as N,c as M}from"./index-BWZp9pjs.js";import{P as O}from"./Heading-C02lxtKi.js";function z(t,e){if(t==null)return{};var i={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;i[r]=t[r]}return i}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},D(t,e)}function q(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,D(t,e)}function J(t){return t&&t.ownerDocument||document}function K(t){var e=J(t);return e&&e.defaultView||window}function Q(t,e){return K(t).getComputedStyle(t,e)}var tt=/([A-Z])/g;function et(t){return t.replace(tt,"-$1").toLowerCase()}var nt=/^ms-/;function y(t){return et(t).replace(nt,"-ms-")}var rt=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function st(t){return!!(t&&rt.test(t))}function I(t,e){var i="",r="";if(typeof e=="string")return t.style.getPropertyValue(y(e))||Q(t).getPropertyValue(y(e));Object.keys(e).forEach(function(s){var n=e[s];!n&&n!==0?t.style.removeProperty(y(s)):st(s)?r+=s+"("+n+") ":i+=y(s)+": "+n+";"}),r&&(i+="transform: "+r+";"),t.style.cssText+=";"+i}const j={disabled:!1},G=x.createContext(null);var it=function(e){return e.scrollTop},g="unmounted",v="exited",p="entering",m="entered",k="exiting",l=function(t){q(e,t);function e(r,s){var n;n=t.call(this,r,s)||this;var a=s,o=a&&!a.isMounting?r.enter:r.appear,u;return n.appearStatus=null,r.in?o?(u=v,n.appearStatus=p):u=m:r.unmountOnExit||r.mountOnEnter?u=g:u=v,n.state={status:u},n.nextCallback=null,n}e.getDerivedStateFromProps=function(s,n){var a=s.in;return a&&n.status===g?{status:v}:null};var i=e.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(s){var n=null;if(s!==this.props){var a=this.state.status;this.props.in?a!==p&&a!==m&&(n=p):(a===p||a===m)&&(n=k)}this.updateStatus(!1,n)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var s=this.props.timeout,n,a,o;return n=a=o=s,s!=null&&typeof s!="number"&&(n=s.exit,a=s.enter,o=s.appear!==void 0?s.appear:a),{exit:n,enter:a,appear:o}},i.updateStatus=function(s,n){if(s===void 0&&(s=!1),n!==null)if(this.cancelNextCallback(),n===p){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:T.findDOMNode(this);a&&it(a)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===v&&this.setState({status:g})},i.performEnter=function(s){var n=this,a=this.props.enter,o=this.context?this.context.isMounting:s,u=this.props.nodeRef?[o]:[T.findDOMNode(this),o],f=u[0],d=u[1],E=this.getTimeouts(),S=o?E.appear:E.enter;if(!s&&!a||j.disabled){this.safeSetState({status:m},function(){n.props.onEntered(f)});return}this.props.onEnter(f,d),this.safeSetState({status:p},function(){n.props.onEntering(f,d),n.onTransitionEnd(S,function(){n.safeSetState({status:m},function(){n.props.onEntered(f,d)})})})},i.performExit=function(){var s=this,n=this.props.exit,a=this.getTimeouts(),o=this.props.nodeRef?void 0:T.findDOMNode(this);if(!n||j.disabled){this.safeSetState({status:v},function(){s.props.onExited(o)});return}this.props.onExit(o),this.safeSetState({status:k},function(){s.props.onExiting(o),s.onTransitionEnd(a.exit,function(){s.safeSetState({status:v},function(){s.props.onExited(o)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(s,n){n=this.setNextCallback(n),this.setState(s,n)},i.setNextCallback=function(s){var n=this,a=!0;return this.nextCallback=function(o){a&&(a=!1,n.nextCallback=null,s(o))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},i.onTransitionEnd=function(s,n){this.setNextCallback(n);var a=this.props.nodeRef?this.props.nodeRef.current:T.findDOMNode(this),o=s==null&&!this.props.addEndListener;if(!a||o){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],f=u[0],d=u[1];this.props.addEndListener(f,d)}s!=null&&setTimeout(this.nextCallback,s)},i.render=function(){var s=this.state.status;if(s===g)return null;var n=this.props,a=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var o=z(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(G.Provider,{value:null},typeof a=="function"?a(s,o):x.cloneElement(x.Children.only(a),o))},e}(x.Component);l.contextType=G;l.propTypes={};function C(){}l.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C};l.UNMOUNTED=g;l.EXITED=v;l.ENTERING=p;l.ENTERED=m;l.EXITING=k;const at=!!(typeof window<"u"&&window.document&&window.document.createElement);var L=!1,_=!1;try{var w={get passive(){return L=!0},get once(){return _=L=!0}};at&&(window.addEventListener("test",w,w),window.removeEventListener("test",w,!0))}catch{}function ot(t,e,i,r){if(r&&typeof r!="boolean"&&!_){var s=r.once,n=r.capture,a=i;!_&&s&&(a=i.__once||function o(u){this.removeEventListener(e,o,n),i.call(this,u)},i.__once=a),t.addEventListener(e,a,L?r:n)}t.addEventListener(e,i,r)}function ut(t,e,i,r){var s=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,i,s),i.__once&&t.removeEventListener(e,i.__once,s)}function W(t,e,i,r){return ot(t,e,i,r),function(){ut(t,e,i,r)}}function ct(t,e,i,r){if(r===void 0&&(r=!0),t){var s=document.createEvent("HTMLEvents");s.initEvent(e,i,r),t.dispatchEvent(s)}}function ft(t){var e=I(t,"transitionDuration")||"",i=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*i}function lt(t,e,i){i===void 0&&(i=5);var r=!1,s=setTimeout(function(){r||ct(t,"transitionend",!0)},e+i),n=W(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(s),n()}}function pt(t,e,i,r){i==null&&(i=ft(t)||0);var s=lt(t,i,r),n=W(t,"transitionend",e);return function(){s(),n()}}function U(t,e){const i=I(t,e)||"",r=i.indexOf("ms")===-1?1e3:1;return parseFloat(i)*r}function dt(t,e){const i=U(t,"transitionDuration"),r=U(t,"transitionDelay"),s=pt(t,n=>{n.target===t&&(s(),e(n))},i+r)}function Et(t){t.offsetHeight}const F=t=>!t||typeof t=="function"?t:e=>{t.current=e};function ht(t,e){const i=F(t),r=F(e);return s=>{i&&i(s),r&&r(s)}}function vt(t,e){return c.useMemo(()=>ht(t,e),[t,e])}function mt(t){return t&&"setState"in t?T.findDOMNode(t):t??null}const xt=x.forwardRef(({onEnter:t,onEntering:e,onEntered:i,onExit:r,onExiting:s,onExited:n,addEndListener:a,children:o,childRef:u,...f},d)=>{const E=c.useRef(null),S=vt(E,u),P=b=>{S(mt(b))},h=b=>R=>{b&&E.current&&b(E.current,R)},$=c.useCallback(h(t),[t]),V=c.useCallback(h(e),[e]),A=c.useCallback(h(i),[i]),B=c.useCallback(h(r),[r]),H=c.useCallback(h(s),[s]),Y=c.useCallback(h(n),[n]),Z=c.useCallback(h(a),[a]);return N.jsx(l,{ref:d,...f,onEnter:$,onEntered:A,onEntering:V,onExit:B,onExited:Y,onExiting:H,addEndListener:Z,nodeRef:E,children:typeof o=="function"?(b,R)=>o(b,{...R,ref:P}):x.cloneElement(o,{ref:P})})});function bt(t){const e=c.useRef(t);return c.useEffect(()=>{e.current=t},[t]),e}function St(t){const e=bt(t);return c.useCallback(function(...i){return e.current&&e.current(...i)},[e])}const Rt=t=>c.forwardRef((e,i)=>N.jsx("div",{...e,ref:i,className:M(e.className,t)})),Ct={[p]:"show",[m]:"show"},Tt=c.forwardRef(({className:t,children:e,transitionClasses:i={},onEnter:r,...s},n)=>{const a={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...s},o=c.useCallback((u,f)=>{Et(u),r==null||r(u,f)},[r]);return N.jsx(xt,{ref:n,addEndListener:dt,...a,onEnter:o,childRef:e.ref,children:(u,f)=>c.cloneElement(e,{...f,className:M("fade",t,e.props.className,Ct[u],i[u])})})});Tt.displayName="Fade";const gt={"aria-label":O.string,onClick:O.func,variant:O.oneOf(["white"])},X=c.forwardRef(({className:t,variant:e,"aria-label":i="Close",...r},s)=>N.jsx("button",{ref:s,type:"button",className:M("btn-close",e&&`btn-close-${e}`,t),"aria-label":i,...r}));X.displayName="CloseButton";X.propTypes=gt;export{X as C,v as E,Tt as F,xt as T,z as _,k as a,p as b,m as c,Et as d,ot as e,vt as f,Rt as g,at as h,pt as i,W as l,J as o,ut as r,I as s,dt as t,St as u};
