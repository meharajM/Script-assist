(this["webpackJsonpscript-assist"]=this["webpackJsonpscript-assist"]||[]).push([[0],{44:function(e,n,t){e.exports=t(64)},50:function(e,n,t){},51:function(e,n,t){},52:function(e,n,t){},53:function(e,n,t){},54:function(e,n,t){},55:function(e,n,t){},56:function(e,n,t){},57:function(e,n,t){},58:function(e,n,t){},62:function(e,n,t){},63:function(e,n,t){},64:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),i=t(3),r=t.n(i),o=(t(49),t(50),t(32)),s=t(33),l=t(41),u=t(39),d=t(40),f=t(9),m=(t(51),t(27));t(52);var h=function(e){if(e.value){var n=e.value,t=e.elementRef,a=Object(m.a)(e,["value","elementRef"]);return c.a.createElement("div",Object.assign({contentEditable:!0},a,{ref:t}),n)}return c.a.createElement("div",Object.assign({contentEditable:!0},e,{ref:e.elementRef}))};t(53);var g=function(e){var n=e.elementRef,t=e.id,i=e.onKeyDown,r=Object(m.a)(e,["elementRef","id","onKeyDown"]),o=Object(a.useState)(""),s=Object(f.a)(o,2),l=s[0],u=s[1],d=Object(a.useState)(""),g=Object(f.a)(d,2),p=g[0],v=g[1],b=Object(a.useState)(""),E=Object(f.a)(b,2),O=(E[0],E[1]),w=function(e){var n=e.currentTarget.innerText.trim(),t=(e.currentTarget.id,e.currentTarget.id.split("-")),a=Object(f.a)(t,3),c=a[0],i=(a[1],a[2]);"sceneHeading"===c&&"int_ext"===i&&(n="i"===n.toLowerCase()?"INT":"e"===n.toLowerCase()?"EXT":"",u(n)),"sceneHeading"===c&&"time"===i?(n="d"===n.toLowerCase()?"DAY":"n"===n.toLowerCase()?"NIGHT":"",v(n)):O(n)},j="".concat(t,"-int_ext"),k="".concat(t,"-location"),y="".concat(t,"-time");return c.a.createElement("div",{className:"scene-heading"},c.a.createElement("span",{className:"scene-number"},"Scene ",e.sceneNumber,": "),c.a.createElement(h,{key:j,className:"int-ext",placeholder:"INT/EXT",elementRef:n,id:j,onKeyDown:i,onKeyUp:w,value:l}),c.a.createElement(h,{key:k,className:"location",placeholder:"LOCATION",id:k,onKeyDown:i,onKeyUp:w}),c.a.createElement(h,Object.assign({key:y,className:"time",contentEditable:!0,placeholder:"DAY/NIGHT"},r,{onKeyDown:i,onKeyUp:w,id:y,value:p})))};t(54);var p=function(e){return c.a.createElement("div",{className:"action"},c.a.createElement(h,Object.assign({placeholder:"Action"},e)))};t(55);var v=function(e){return c.a.createElement("div",{className:"charector"},c.a.createElement(h,Object.assign({placeholder:"Character name"},e)))},b="CHARECTOR",E="ACTION",O="PARANTHETICAL",w="DIALOGUE",j="SCENE_HEADING",k="TRANSITION";t(56);var y=function(e){return c.a.createElement("div",{className:"paranthetical"},c.a.createElement(h,Object.assign({placeholder:"describe state of charector"},e)))};t(57);var N=function(e){return c.a.createElement("div",{className:"dialogue"},c.a.createElement("div",{className:"dialogue-container"},c.a.createElement(h,Object.assign({placeholder:"Dialogue"},e))))};t(58);var C=function(e){return c.a.createElement("div",{className:"transition"},c.a.createElement(h,Object.assign({className:"transition",contentEditable:!0,placeholder:"FADEIN/FADEOUT/CUTTO"},e)))},T=t(91),A=t(90);var H=function(e){var n=e.show,t=e.handleClose,a=e.addSceneHeading,i=e.addAction,r=e.insChar,o=e.addDialogue,s=e.addParanthetical,l=e.addTransition,u=function(e){e(),t()};return c.a.createElement(A.a,{id:"elements-menu",open:n,onClose:t},c.a.createElement(T.a,{onClick:function(){return u(a)}},"Scene heading"),c.a.createElement(T.a,{onClick:function(){return u(i)}},"Action"),c.a.createElement(T.a,{onClick:function(){return u(r)}},"Character"),c.a.createElement(T.a,{onClick:function(){return u(o)}},"Dialogue"),c.a.createElement(T.a,{onClick:function(){return u(s)}},"Paranthetical"),c.a.createElement(T.a,{onClick:function(){return u(l)}},"Transition"))};var S=function(e){var n=e.type,t=e.removeElement,i=e.id,r=Object(a.useState)(!1),o=Object(f.a)(r,2),s=o[0],l=o[1],u=null,d={onKeyDown:function(n){var a=n.currentTarget.innerText.trim(),c=n.currentTarget.id.split("-"),r=Object(f.a)(c,3),o=r[0],s=(r[1],r[2]),u="Enter"===n.key,d="Backspace"===n.key,m=function(e,n,t){var a,c=t.addAction,i=t.addTransition,r=t.addDialogue,o=t.addParanthetical,s=t.insChar,l=t.addSceneHeading;switch(n&&e.toLowerCase()){case"s":a=l;break;case"a":a=c;break;case"t":a=i;break;case"d":a=r;break;case"p":a=o;break;case"c":a=s;break;default:a=null}return a}(n.key,n.shiftKey,e);m?(m(),n.preventDefault()):u&&n.shiftKey?(l((function(e){return!e})),n.preventDefault()):d&&!a.length?("sceneHeading"!==o||"sceneHeading"===o&&"int_ext"===s)&&(t(i),n.preventDefault()):!u||"character"!==o&&"paranthetical"!==o&&"sceneHeading"!==o||n.preventDefault()}};switch(n){case j:u=g;break;case E:u=p;break;case b:u=v;break;case O:u=y;break;case w:u=N;break;case k:u=C}return c.a.createElement("div",{className:"element"},c.a.createElement(u,Object.assign({},d,e)),c.a.createElement(H,Object.assign({show:s},e,{handleClose:function(){l(!1)}})))};t(62);var D=function(e){var n=e.elements,t={sceneHeading:1,action:0,charector:0,dialogue:0,paranthetical:0,transition:0},i=Object(a.useState)(n||[{type:j,sceneNumber:t.sceneHeading,id:"sceneHeading-".concat(t.sceneHeading)}]),r=Object(f.a)(i,2),o=r[0],s=r[1],l=Object(a.useState)("sceneHeading-".concat(t.sceneHeading)),u=Object(f.a)(l,2),m=u[0],h=u[1],g=Object(a.useRef)(null);Object(a.useEffect)((function(){g&&g.focus&&(g.focus(),document.execCommand("selectAll",!1,null),document.getSelection().collapseToEnd())}));var p=function(e){s((function(n){return[].concat(Object(d.a)(n),[e])})),h(e.id)},v=function(e){g=e},y={removeElement:function(e){if(o.length>1&&e){var n=o.filter((function(n){return n.id!==e}));s((function(t){return e?n:t})),h(n[n.length-1].id)}},addAction:function(){t.action+=1,p({type:E,id:"action-".concat(t.action)})},addTransition:function(){t.transition+=1,p({type:k,id:"transition-".concat(t.transition)})},addDialogue:function(){t.dialogue+=1,p({type:w,id:"dialogue-".concat(t.dialogue)})},addParanthetical:function(){t.parantheticals+=1,p({type:O,id:"paranthetical-".concat(t.parantheticals)})},insChar:function(){t.charector+=1,p({type:b,id:"character-".concat(t.charector)})},addSceneHeading:function(){t.sceneHeading+=1,p({type:j,id:"sceneHeading-".concat(t.sceneHeading),sceneNumber:t.sceneHeading})}};return c.a.createElement("div",{className:"board"},o.map((function(e){return c.a.createElement(S,Object.assign({},e,y,{elementRef:e.id===m?v:null}))})))},R=(t(63),function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header center"},"Script assist"),c.a.createElement("div",{className:"App-container"},c.a.createElement(D,null)))}}]),t}(c.a.Component)),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Script-assist",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/Script-assist","/service-worker.js");I?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(n,e)}))}}()}},[[44,1,2]]]);
//# sourceMappingURL=main.186b7947.chunk.js.map