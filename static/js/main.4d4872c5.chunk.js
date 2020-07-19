(this["webpackJsonpscript-assist"]=this["webpackJsonpscript-assist"]||[]).push([[0],{188:function(e,t,n){e.exports=n(312)},194:function(e,t,n){},195:function(e,t,n){},199:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},312:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),i=n.n(r),c=(n(193),n(194),n(143)),l=n(42),s=n(71),u=n(72),m=n(82),d=n(77),h=n(338),f=n(38),E=n(80),v=n(163),p=n(164),b=n.n(p),g="CHARECTOR",y="ACTION",w="PARANTHETICAL",C="DIALOGUE",k="SCENE_HEADING",O="TRANSITION",S="LOGLINE",j=function(e){return{type:w,id:"paranthetical-".concat(e.parantheticals)}},N=function(e){return{type:O,id:"transition-".concat(e.transition)}},T=function(e){return{type:C,id:"dialogue-".concat(e.dialogue)}},A=function(e){return{type:g,id:"character-".concat(e.charector)}},D=function(e){return{type:y,id:"action-".concat(e.action)}},H=(n(195),n(81)),L=n(165),I=n.n(L);n(199);var P=function(e){var t=e.value,n=e.elementRef,a=Object(H.a)(e,["value","elementRef"]);return o.a.createElement(I.a,Object.assign({innerRef:n,html:"".concat(t||""),tagName:"div"},a))};n(200);var R=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(s.a)(this,n),a=t.call(this,e);var o=e.id;return a.int_id="".concat(o,"-int_ext"),a.location_id="".concat(o,"-location"),a.time_id="".concat(o,"-time"),a.summary_id="".concat(o,"-summary"),a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.onKeyDownHere,t=this.int_id,n=this.location_id,a=this.time_id,r=this.summary_id,i=this.props,c=i.content,l=i.sceneNumber,s=i.elementRef,u=i.onFocus,m=i.onKeyDown,d=Object(H.a)(i,["content","sceneNumber","elementRef","onFocus","onKeyDown"]);return o.a.createElement("div",null,o.a.createElement("div",{className:"scene-heading-summary-header"},o.a.createElement("div",{className:"scene-number"},"Scene ",l,": "),o.a.createElement(P,{key:r,className:"scene-heading-summary",id:r,placeholder:"  Scene description",value:c[r],onKeyDown:m})),o.a.createElement("div",{className:"scene-heading"},o.a.createElement(P,{key:t,className:"int-ext",placeholder:"INT/EXT",elementRef:s,id:t,onKeyUp:e,value:c[t],onFocus:u,onKeyDown:m}),o.a.createElement(P,{key:n,className:"location",placeholder:"LOCATION",id:n,onKeyUp:e,value:c[n],onFocus:u,onKeyDown:m}),o.a.createElement(P,Object.assign({key:a,className:"time",contentEditable:!0,placeholder:"DAY/NIGHT"},d,{onKeyUp:e,id:a,value:c[a],onFocus:u,onKeyDown:m}))))}}]),n}(o.a.Component);n(201);var F=function(e){var t=e.content,n=Object(H.a)(e,["content"]);return o.a.createElement("div",{className:"action"},o.a.createElement(P,Object.assign({placeholder:"Action",value:t[e.id]},n)))};n(202);var B=function(e){return o.a.createElement("div",{className:"charector"},o.a.createElement(P,Object.assign({placeholder:"Character name"},e,{value:e.content[e.id]})))};n(203);var K=function(e){return o.a.createElement("div",{className:"paranthetical"},o.a.createElement(P,Object.assign({placeholder:"describe state of charector"},e,{value:e.content[e.id]})))};n(204);var x=function(e){return o.a.createElement("div",{className:"dialogue"},o.a.createElement("div",{className:"dialogue-container"},o.a.createElement(P,Object.assign({placeholder:"Dialogue"},e,{value:e.content[e.id]}))))};n(205);var _=function(e){return o.a.createElement("div",{className:"transition"},o.a.createElement(P,Object.assign({className:"transition",contentEditable:!0,placeholder:"FADEIN/FADEOUT/CUTTO"},e,{value:e.content[e.id]})))},W=n(343),U=n(337);var G=function(e){var t=e.show,n=e.handleClose,a=e.addSceneHeading,r=e.addAction,i=e.insChar,c=e.addDialogue,l=e.addParanthetical,s=e.addTransition,u=function(e){e(),n()};return o.a.createElement(U.a,{id:"elements-menu",open:t,onClose:n},o.a.createElement(W.a,{onClick:function(){return u(a)}},"Scene heading"),o.a.createElement(W.a,{onClick:function(){return u(r)}},"Action"),o.a.createElement(W.a,{onClick:function(){return u(i)}},"Character"),o.a.createElement(W.a,{onClick:function(){return u(l)}},"Paranthetical"),o.a.createElement(W.a,{onClick:function(){return u(c)}},"Dialogue"),o.a.createElement(W.a,{onClick:function(){return u(s)}},"Transition"))};var Y=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).setShow=function(e){a.setState({show:e})},a.onKeyDown=function(e){var t=a.props,n=t.removeElement,o=t.id,r=t.onContentChange,i=e.currentTarget.innerText,c=e.currentTarget.id,l=c.split("-"),s=Object(E.a)(l,3),u=s[0],m=(s[1],s[2]),d="Enter"===e.key,h="Backspace"===e.key,f=function(e,t,n){var a,o=n.addAction,r=n.addTransition,i=n.addDialogue,c=n.addParanthetical,l=n.insChar,s=n.addSceneHeading;switch(t&&e.toLowerCase()){case"s":a=s;break;case"a":a=o;break;case"t":a=r;break;case"d":a=i;break;case"p":a=c;break;case"c":a=l;break;default:a=null}return a}(e.key,e.shiftKey,a.props);if(f)f(),e.preventDefault();else if(d&&e.shiftKey)a.setShow(!a.state.show),e.preventDefault();else if(h&&!i.length)("sceneHeading"!==u||"sceneHeading"===u&&"int_ext"===m)&&(n(o),e.preventDefault());else if(!d||"character"!==u&&"paranthetical"!==u&&"sceneHeading"!==u){var v=e.key.toLowerCase();"sceneHeading"===u?"int_ext"===m?"i"===v?(i="INT",e.preventDefault()):"e"===v&&(i="EXT",e.preventDefault()):"time"===m&&("d"===v?(i="DAY",e.preventDefault()):"n"===v&&(i="NIGHT",e.preventDefault())):"transition"===u&&("c"===v?i="CUT TO":"fi"===i?i="FADE IN":"fo"===i&&(i="FADE OUT")),r(c,i)}else e.preventDefault()},a.state={show:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.type,a=t.id,r=this.state.show,i={onKeyDown:this.onKeyDown},c=null;switch(n){case k:c=R;break;case y:c=F;break;case g:c=B;break;case w:c=K;break;case C:c=x;break;case O:c=_}return o.a.createElement("div",{className:"element"},o.a.createElement(c,Object.assign({key:a},i,this.props)),o.a.createElement(G,Object.assign({show:r},this.props,{handleClose:function(){e.setShow(!1)}})))}}]),n}(o.a.Component);n(207);var M=function(e){e.elements;var t=e.content,n=e.setElementCount,r=e.elementsCount,i=e.addBoard,c=e.elementsList,l=e.setElemetsList,s=e.currentElement,u=e.setCurrentElement,m=e.removeElement,d=Object(a.useRef)(null);Object(a.useEffect)((function(){d&&d.focus&&(d.focus(),document.execCommand("selectAll",!1,null),document.getSelection().collapseToEnd())}));var h=function(e){l(e),u(e.id)},f=function(e){d=e},E={removeElement:m,addAction:function(){h(D(r)),n({action:r.action+1})},addTransition:function(){h(N(r)),n({transition:r.transition+1})},addDialogue:function(){h(T(r)),n({dialogue:r.dialogue+1})},addParanthetical:function(){h(j(r)),n({parantheticals:r.parantheticals+1})},insChar:function(){h(A(r)),n({charector:r.charector+1})},addSceneHeading:function(){n({sceneHeading:r.sceneHeading+1}),i()},onContentChange:function(t,n){e.setContent(t,n)},content:t,onFocus:u};return o.a.createElement("div",{className:"board"},c.map((function(e){return o.a.createElement(Y,Object.assign({},e,E,{elementRef:e.id===s?f:null}))})))},z=(n(208),n(342)),V=n(340),q=n(339),J=n(344),X=n(345),Q=n(341),$=(n(209),z.a.Option),Z=V.a.Title,ee=["Action Adventure","Thriller","Romantic Comedy","Horror","Drama","Romantic Drama","Mystery","Science Fiction","Horror","Love Story","Family","Fantasy","Animation","Western","Period","Historical","Musical"],te=["None","Comedy","Horror","Drama","Thriller","Family","Psychological","Political","Parody","Farce","Slapstick","Dark","Epic","True Story","Suspense","Erotic","Fish-out-of water","Coming-of-age"];var ne=function(e){var t=Object(a.useState)(!1),n=Object(E.a)(t,2),r=n[0],i=n[1];return o.a.createElement("div",{className:"logline-container"},o.a.createElement(f.a,{type:"link",onClick:function(){return i(!0)}},"How to write a logline"),o.a.createElement("div",{className:"logline"},o.a.createElement("div",null,o.a.createElement(q.a,{title:"1. Your Story Idea",subTitle:"These three questions will get at the guts of your story. Sentence length is limited - if you find you can't add more letters, use fewer or shorter words."},o.a.createElement(J.a,{size:"small",column:1},o.a.createElement(J.a.Item,{label:"a. Your main character (use adjectives, emotional state) who wants x (a basic desire)"},o.a.createElement(X.a,{style:{width:"100%"},placeholder:"....E.g., A shy young suburban boy who wants to be noticed..."})),o.a.createElement(J.a.Item,{label:"b. What CRISIS is he/she/are they facing? Hint: Start with an ACTIVE VERB."},o.a.createElement(X.a,{placeholder:"...... discovers a strange but friendly alien living in his shed..."})),o.a.createElement(J.a.Item,{label:"c. How does he/she/do they respond to try and deal with it? Hint: Not too much detail."},o.a.createElement(X.a,{placeholder:"...... and tries to help him get home while keeping his existence a secret. (E.T., The Extra Terrestrial)"}))))),o.a.createElement("div",null,o.a.createElement(q.a,{title:"2. Your Theme",subTitle:'THEME is what people want to know when they ask that annoying question, "So what\'s it about?"'},o.a.createElement(J.a,{size:"small",column:1},o.a.createElement(J.a.Item,{label:"Make it a one word answer, as corny as it may sound, like Love, Betrayal, or Prejudice. Philadelphia, for example is a story about prejudice; Star Wars is a story about heroism."},o.a.createElement(X.a,{placeholder:"Your theme:....."}))))),o.a.createElement("div",null,o.a.createElement(q.a,{title:"3. Your Title"},o.a.createElement(J.a,{size:"small",column:1},o.a.createElement(J.a.Item,{label:"Based on your theme, choose a title (for now)."},o.a.createElement(X.a,{placeholder:"Your title:........."}))))),o.a.createElement("div",null,o.a.createElement(q.a,{title:"4. What type of film is it?"},o.a.createElement(J.a,{size:"small",column:1},o.a.createElement(J.a.Item,{label:"Genre"},o.a.createElement(z.a,{name:"Genre",defaultValue:ee[0],style:{width:200}},ee.map((function(e){return o.a.createElement($,{value:e},e)})))),o.a.createElement(J.a.Item,{label:"Sub-Genre"},o.a.createElement(z.a,{name:"Sub-Genre",defaultValue:te[0],style:{width:200}},te.map((function(e){return o.a.createElement($,{value:e},e)}))))))),o.a.createElement(Z,{level:4},"Now put the three answers together as a sentence, and you have your logline! You will probably have to work on it some more."),o.a.createElement(Q.a,{title:"How to write log line",visible:r,onOk:function(){return i(!1)},onCancel:function(){return i(!1)},width:600,footer:null},o.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/r0Fj_H9Q73k",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))))},ae=h.a.TabPane,oe=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(s.a)(this,n),(a=t.call(this,e)).setElemetsList=function(e){a.setState((function(t){var n=t.elementsList;return Object(l.a)(Object(l.a)({},t),{},{elementsList:[].concat(Object(c.a)(n),[e])})}))},a.removeElement=function(e){var t=a.state.elementsList;if(t.length>1&&e){var n=t.filter((function(t){return t.id!==e}));a.setState({elementsList:n}),a.setCurrentElement(n[n.length-1].id),a.setContent(e,void 0,!0)}},a.setCurrentElement=function(e){a.setState({currentElement:e})},a.addBoard=function(){a.setState((function(e){var t=Object(c.a)(e.boards),n={id:t.length+1,note:"",name:"Scene-".concat(t.length+1)};return t.push(n),Object(l.a)(Object(l.a)({},e),{},{boards:t,activeBoard:n.id})}))},a.setContent=function(e,t,n){a.setState((function(a){var o=a.content,r=a.scriptContent;return n?(r.delete(e),delete o[e]):(r.set(e,t),o[e]=t),Object(l.a)(Object(l.a)({},a),{},{content:o,scriptContent:r})}))},a.setElementCount=function(e){a.setState((function(t){var n=t.elementsCount,a=Object(l.a)(Object(l.a)({},n),e);return Object(l.a)(Object(l.a)({},t),{},{elementsCount:a})}))},a.onTabChange=function(e){a.setState({activeBoard:e})},a.onSave=function(){!function(e){console.log(e);var t,n="",a=Object(v.a)(e);try{for(a.s();!(t=a.n()).done;){var o=Object(E.a)(t.value,2),r=(o[0],o[1]);n="".concat(n," ").concat(r)}}catch(c){a.e(c)}finally{a.f()}var i=new Blob([n],{type:"text/plain;charset=utf-8"});b.a.saveAs(i,"screenplay.txt")}(a.state.scriptContent)};var o={sceneHeading:1,action:0,charector:0,dialogue:0,parantheticals:0,transition:0};return a.state={boards:[{id:"logline",type:S,name:"Logline"},{id:1,note:"",name:"Scene-1"}],activeBoard:1,content:{},scriptContent:new Map,elementsCount:o,elementsList:[{type:k,sceneNumber:o.sceneHeading,id:"sceneHeading-".concat(o.sceneHeading)}],currentElement:"sceneHeading-".concat(o.sceneHeading)},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.activeBoard,a=t.currentElement,r=t.elementsCount;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header center"},"Script assist",o.a.createElement("div",{className:"options"},o.a.createElement(f.a,{className:"save-button",onClick:this.onSave},"Save"))),o.a.createElement("div",{className:"App-container"},o.a.createElement(h.a,{activeKey:n.toString(),className:"boards",onChange:this.onTabChange,tabPosition:"top",type:"editable-card",hideAdd:!0},this.state.boards.map((function(t,n){return o.a.createElement(ae,{tab:t.name,key:t.id.toString()},t.type===S?o.a.createElement(ne,{content:e.state.content,onChange:function(n){var a=n.target.value;e.setContent(t.id,a)},id:t.id}):o.a.createElement(M,{id:t.id,content:e.state.content,setContent:e.setContent,elementsCount:e.state.elementsCount,setElementCount:e.setElementCount,addBoard:e.addBoard,elementsList:e.state.elementsList,setElemetsList:e.setElemetsList,currentElement:a,setCurrentElement:e.setCurrentElement,removeElement:e.removeElement}))})))),o.a.createElement("footer",null,/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)&&o.a.createElement("div",{className:"mobile-footer"},o.a.createElement("div",{className:"mobile-options"},o.a.createElement(f.a,{onClick:function(){e.setElementCount({sceneHeading:r.sceneHeading+1}),e.addBoard()}},"Scene heading"),o.a.createElement(f.a,{onClick:function(){e.setElemetsList(D(r)),e.setElementCount({action:r.action+1})}},"Action"),o.a.createElement(f.a,{onClick:function(){e.setElemetsList(A(r)),e.setElementCount({charector:r.charector+1})}},"Character"),o.a.createElement(f.a,{onClick:function(){e.setElemetsList(j(r)),e.setElementCount({parantheticals:r.parantheticals+1})}},"Paranthetical"),o.a.createElement(f.a,{onClick:function(){e.setElemetsList(T(r)),e.setElementCount({dialogue:r.dialogue+1})}},"Dialogue"),o.a.createElement(f.a,{onClick:function(){e.setElemetsList(N(r)),e.setElementCount({transition:r.transition+1})}},"Transition")))))}}]),n}(o.a.Component),re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(oe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Script-assist",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Script-assist","/service-worker.js");re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ie(t,e)}))}}()}},[[188,1,2]]]);
//# sourceMappingURL=main.4d4872c5.chunk.js.map