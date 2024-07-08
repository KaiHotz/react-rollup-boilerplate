import{r as l}from"./index-CDs2tPxN.js";var p={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=l,y=Symbol.for("react.element"),m=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,v=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,o){var r,n={},f=null,i=null;o!==void 0&&(f=""+o),e.key!==void 0&&(f=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)c.call(e,r)&&!x.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:y,type:t,key:f,ref:i,props:n,_owner:v.current}}s.Fragment=m;s.jsx=u;s.jsxs=u;p.exports=s;var E=p.exports;function a(t){var e,o,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(e=0;e<n;e++)t[e]&&(o=a(t[e]))&&(r&&(r+=" "),r+=o)}else for(o in t)t[o]&&(r&&(r+=" "),r+=o);return r}function O(){for(var t,e,o=0,r="",n=arguments.length;o<n;o++)(t=arguments[o])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r}export{O as c,E as j};
