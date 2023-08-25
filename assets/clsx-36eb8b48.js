import{r as _}from"./index-61bf1805.js";var p={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=_,c=Symbol.for("react.element"),x=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,j=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,o){var r,s={},f=null,i=null;o!==void 0&&(f=""+o),t.key!==void 0&&(f=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)y.call(t,r)&&!v.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:c,type:e,key:f,ref:i,props:s,_owner:j.current}}n.Fragment=x;n.jsx=u;n.jsxs=u;p.exports=n;var a=p.exports;const g=a.Fragment,E=a.jsx,O=a.jsxs;function l(e){var t,o,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=l(e[t]))&&(r&&(r+=" "),r+=o);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function R(){for(var e,t,o=0,r="";o<arguments.length;)(e=arguments[o++])&&(t=l(e))&&(r&&(r+=" "),r+=t);return r}export{g as F,O as a,R as c,E as j};
//# sourceMappingURL=clsx-36eb8b48.js.map
