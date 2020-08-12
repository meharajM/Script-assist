(this["webpackJsonpscript-assist"]=this["webpackJsonpscript-assist"]||[]).push([[0],{204:function(e,t,n){e.exports=n(368)},210:function(e,t,n){},211:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){},218:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){},269:function(e,t,n){},368:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),o=n.n(i),c=(n(209),n(210),n(153)),l=n(34),s=n(49),u=n(50),m=n(57),d=n(56),h=n(405),f=n(46),E=n(127),v=n(176),g=n(177),b=n.n(g),p="CHARECTOR",y="ACTION",C="PARANTHETICAL",w="DIALOGUE",k="SCENE_HEADING",O="TRANSITION",S="LOGLINE",j=function(e,t){return{type:C,id:"board-".concat(t,"-paranthetical-").concat(e.parantheticals)}},N=function(e,t){return{type:O,id:"board-".concat(t,"-transition-").concat(e.transition)}},T=function(e,t){return{type:w,id:"board-".concat(t,"-dialogue-").concat(e.dialogue)}},L=function(e,t){return{type:p,id:"board-".concat(t,"-character-").concat(e.charector)}},A=function(e,t){return{type:y,id:"board-".concat(t,"-action-").concat(e.action)}},D=(n(211),n(82)),H=n(178),I=n.n(H);n(215);var B=function(e){var t=e.value,n=e.elementRef,a=Object(D.a)(e,["value","elementRef"]);return r.a.createElement(I.a,Object.assign({innerRef:n,html:"".concat(t||""),tagName:"div"},a))};n(216);var F=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(s.a)(this,n),a=t.call(this,e);var r=e.id;return a.int_id="".concat(r,"-int_ext"),a.location_id="".concat(r,"-location"),a.time_id="".concat(r,"-time"),a.summary_id="".concat(r,"-summary"),a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.onKeyDownHere,t=this.int_id,n=this.location_id,a=this.time_id,i=this.summary_id,o=this.props,c=o.content,l=o.sceneNumber,s=o.elementRef,u=o.onFocus,m=o.onKeyDown,d=Object(D.a)(o,["content","sceneNumber","elementRef","onFocus","onKeyDown"]);return r.a.createElement("div",null,r.a.createElement("div",{className:"scene-heading-summary-header"},r.a.createElement("div",{className:"scene-number"},"Scene ",l,": "),r.a.createElement(B,{key:i,className:"scene-heading-summary",id:i,placeholder:"  Scene description",value:c[i],onKeyDown:m})),r.a.createElement("div",{className:"scene-heading"},r.a.createElement(B,{key:t,className:"int-ext",placeholder:"INT/EXT",elementRef:s,id:t,onKeyUp:e,value:c[t],onFocus:u,onKeyDown:m}),r.a.createElement(B,{key:n,className:"location",placeholder:"LOCATION",id:n,onKeyUp:e,value:c[n],onFocus:u,onKeyDown:m}),r.a.createElement(B,Object.assign({key:a,className:"time",contentEditable:!0,placeholder:"DAY/NIGHT"},d,{onKeyUp:e,id:a,value:c[a],onFocus:u,onKeyDown:m}))))}}]),n}(r.a.Component);n(217);var P=function(e){var t=e.content,n=Object(D.a)(e,["content"]);return r.a.createElement("div",{className:"action"},r.a.createElement(B,Object.assign({placeholder:"Action",value:t[e.id]},n)))};n(218);var R=function(e){return r.a.createElement("div",{className:"charector"},r.a.createElement(B,Object.assign({placeholder:"Character name"},e,{value:e.content[e.id]})))};n(219);var W=function(e){return r.a.createElement("div",{className:"paranthetical"},r.a.createElement(B,Object.assign({placeholder:"describe state of charector"},e,{value:e.content[e.id]})))};n(220);var K=function(e){return r.a.createElement("div",{className:"dialogue"},r.a.createElement("div",{className:"dialogue-container"},r.a.createElement(B,Object.assign({placeholder:"Dialogue"},e,{value:e.content[e.id]}))))};n(221);var x=function(e){return r.a.createElement("div",{className:"transition"},r.a.createElement(B,Object.assign({className:"transition",contentEditable:!0,placeholder:"FADEIN/FADEOUT/CUTTO"},e,{value:e.content[e.id]})))},G=n(410),_=n(196);var U=function(e){var t=e.show,n=e.handleClose,a=e.addSceneHeading,i=e.addAction,o=e.insChar,c=e.addDialogue,l=e.addParanthetical,s=e.addTransition,u=function(e){e(),n()};return r.a.createElement(_.a,{id:"elements-menu",open:t,onClose:n},r.a.createElement(G.a,{onClick:function(){return u(a)}},"Scene heading"),r.a.createElement(G.a,{onClick:function(){return u(i)}},"Action"),r.a.createElement(G.a,{onClick:function(){return u(o)}},"Character"),r.a.createElement(G.a,{onClick:function(){return u(l)}},"Paranthetical"),r.a.createElement(G.a,{onClick:function(){return u(c)}},"Dialogue"),r.a.createElement(G.a,{onClick:function(){return u(s)}},"Transition"))};var Y=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).setShow=function(e){a.setState({show:e})},a.onKeyDown=function(e){var t=a.props,n=t.removeElement,r=t.id,i=t.onContentChange,o=e.currentTarget.innerText,c=e.currentTarget.id,l=c.split("-"),s=Object(E.a)(l,5),u=(s[0],s[1],s[2]),m=(s[3],s[4]),d="Enter"===e.key,h="Backspace"===e.key,f=(e.key,e.shiftKey,a.props,!1);if(f)f(),e.preventDefault();else if(d&&e.shiftKey)a.setShow(!a.state.show),e.preventDefault();else if(h&&!o.length)("sceneHeading"!==u||"sceneHeading"===u&&"int_ext"===m)&&(n(r),e.preventDefault());else if(!d||"character"!==u&&"paranthetical"!==u&&"sceneHeading"!==u){var v=e.key.toLowerCase();if(console.log(e.keyCode),"sceneHeading"===u){var g=String.fromCharCode(e.keyCode),b=/[a-zA-Z0-9-_ ]/.test(g);"int_ext"===m?"backspace"===v?(o="",e.preventDefault()):"INT"!==o&&"EXT"!==o||!b?"i"===v?(o="INT",e.preventDefault()):"e"===v&&(o="EXT",e.preventDefault()):e.preventDefault():"time"===m&&("backspace"===v?(o="",e.preventDefault()):"DAY"!==o&&"NIGHT"!==o||!b?"d"===v?(o="DAY",e.preventDefault()):"n"===v&&(o="NIGHT",e.preventDefault()):e.preventDefault())}else"transition"===u&&("c"===v?o="CUT TO":"fi"===o?o="FADE IN":"fo"===o&&(o="FADE OUT"));i(c,o)}else e.preventDefault()},a.state={show:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.type,a=t.id,i=this.state.show,o={onKeyDown:this.onKeyDown},c=null;switch(n){case k:c=F;break;case y:c=P;break;case p:c=R;break;case C:c=W;break;case w:c=K;break;case O:c=x}return r.a.createElement("div",{className:"element"},r.a.createElement(c,Object.assign({key:a},o,this.props)),r.a.createElement(U,Object.assign({show:i},this.props,{handleClose:function(){e.setShow(!1)}})))}}]),n}(r.a.Component);n(223);var M=function(e){e.elements;var t=e.content,n=e.setElementCount,i=e.elementsCount,o=e.addBoard,c=e.elementsList,l=e.setElemetsList,s=e.currentElement,u=e.setCurrentElement,m=e.removeElement,d=e.id,h=Object(a.useRef)(null);Object(a.useEffect)((function(){h&&h.focus&&(h.focus(),document.execCommand("selectAll",!1,null),document.getSelection().collapseToEnd())}));var f=function(e){l(e),u(e.id)},E=function(e){h=e},v={removeElement:m,addAction:function(){f(A(i,d)),n({action:i.action+1})},addTransition:function(){f(N(i,d)),n({transition:i.transition+1})},addDialogue:function(){f(T(i,d)),n({dialogue:i.dialogue+1})},addParanthetical:function(){f(j(i,d)),n({parantheticals:i.parantheticals+1})},insChar:function(){f(L(i,d)),n({charector:i.charector+1})},addSceneHeading:function(){n({sceneHeading:i.sceneHeading+1}),o()},onContentChange:function(t,n){e.setContent(t,n)},content:t,onFocus:u};return r.a.createElement("div",{className:"board"},c.map((function(e){return r.a.createElement(Y,Object.assign({},e,v,{elementRef:e.id===s?E:null}))})))},V=(n(224),n(409)),z=n(407),X=n(406),q=n(411),J=n(408),Q=n(404),Z=n(179),$=n.n(Z),ee=(n(269),V.a.Option),te=(z.a.Title,["Action Adventure","Thriller","Romantic Comedy","Horror","Drama","Romantic Drama","Mystery","Science Fiction","Horror","Love Story","Family","Fantasy","Animation","Western","Period","Historical","Musical"]),ne=["None","Comedy","Horror","Drama","Thriller","Family","Psychological","Political","Parody","Farce","Slapstick","Dark","Epic","True Story","Suspense","Erotic","Fish-out-of water","Coming-of-age"],ae=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).setVisible=function(e){a.setState({visible:e})},a.setFieldValue=function(e,t){a.setState((function(n){return $()(n,e,t)}))},a.getShortLogline=function(){var e=a.state.logline;return"".concat(e.character," ").concat(e.crisis," ").concat(e.response)},a.onSave=function(){a.setState({isEdit:!1})},a.onEdit=function(){a.setState({isEdit:!0})},a.state={visible:!1,logline:{character:"",crisis:"",response:""},theme:"",genre:te[0],subGanre:ne[0],title:"",isEdit:!0},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.logline,n=e.visible,a=e.theme,i=e.genre,o=e.subGanre,c=e.title,l=e.isEdit,s=this.setVisible,u=this.setFieldValue;return r.a.createElement("div",{className:"logline-container"},r.a.createElement(f.a,{type:"link",onClick:function(){return s(!0)}},"How to write a logline"),l?r.a.createElement("div",{className:"logline-create"},r.a.createElement("div",null,r.a.createElement(X.a,{title:"1. Your Story Idea",subTitle:"These three questions will get at the guts of your story. Sentence length is limited - if you find you can't add more letters, use fewer or shorter words."},r.a.createElement(q.a,{column:1},r.a.createElement(q.a.Item,{label:"a. Your main character (use adjectives, emotional state) who wants x (a basic desire)"},r.a.createElement(Q.a,{value:t.character,onChange:function(e){return u("logline.character",e.target.value)},fullWidth:!0,label:"....E.g., A shy young suburban boy who wants to be noticed..."})),r.a.createElement(q.a.Item,{label:"b. What CRISIS is he/she/are they facing? Hint: Start with an ACTIVE VERB."},r.a.createElement(Q.a,{value:t.crisis,onChange:function(e){return u("logline.crisis",e.target.value)},fullWidth:!0,label:"...... discovers a strange but friendly alien living in his shed..."})),r.a.createElement(q.a.Item,{label:"c. How does he/she/do they respond to try and deal with it? Hint: Not too much detail."},r.a.createElement(Q.a,{value:t.response,onChange:function(e){return u("logline.response",e.target.value)},fullWidth:!0,label:"...... and tries to help him get home while keeping his existence a secret. (E.T., The Extra Terrestrial)"}))))),r.a.createElement("div",null,r.a.createElement(X.a,{title:"2. Your Theme",subTitle:'THEME is what people want to know when they ask that annoying question, "So what\'s it about?"'},r.a.createElement(q.a,{column:1},r.a.createElement(q.a.Item,{label:"Make it a one word answer, as corny as it may sound, like Love, Betrayal, or Prejudice. Philadelphia, for example is a story about prejudice; Star Wars is a story about heroism."},r.a.createElement(Q.a,{value:a,onChange:function(e){return u("theme",e.target.value)},fullWidth:!0,label:"Your theme:....."}))))),r.a.createElement("div",null,r.a.createElement(X.a,{title:"3. Your Title"},r.a.createElement(q.a,{column:1},r.a.createElement(q.a.Item,{label:"Based on your theme, choose a title (for now)."},r.a.createElement(Q.a,{value:c,onChange:function(e){return u("title",e.target.value)},fullWidth:!0,label:"Your title:........."}))))),r.a.createElement("div",null,r.a.createElement(X.a,{title:"4. What type of film is it?"},r.a.createElement(q.a,{column:1},r.a.createElement(q.a.Item,{label:"Genre"},r.a.createElement(V.a,{name:"Genre",value:i,style:{width:200},onChange:function(e){return u("genre",e)}},te.map((function(e,t){return r.a.createElement(ee,{key:"genre-".concat(t),value:e},e)})))),r.a.createElement(q.a.Item,{label:"Sub-Genre"},r.a.createElement(V.a,{name:"Sub-Genre",value:o,style:{width:200},onChange:function(e){return u("subGanre",e)}},ne.map((function(e,t){return r.a.createElement(ee,{key:"sub-genre-".concat(t),value:e},e)})))),r.a.createElement(q.a.Item,null,r.a.createElement(f.a,{onClick:this.onSave,type:"primary"},"Save")))))):r.a.createElement("div",{className:"logline-view"},r.a.createElement(X.a,{ghost:!1,title:c,extra:[r.a.createElement(f.a,{key:"2"},"Print"),r.a.createElement(f.a,{key:"1",type:"primary",onClick:this.onEdit},"Edit")]},r.a.createElement(q.a,{size:"small",column:1},r.a.createElement(q.a.Item,{label:"Logline (elivator pitch)"},this.getShortLogline()),r.a.createElement(q.a.Item,{label:"Theme"},a),r.a.createElement(q.a.Item,{label:"Genre"},i,", ",o)),r.a.createElement(q.a,{size:"small",column:2},r.a.createElement(q.a.Item,{label:"Writer(s)"},"name of user"),r.a.createElement(q.a.Item,{label:"Last modified"},"2017-01-10")))),r.a.createElement(J.a,{title:"How to write log line",visible:n,onOk:function(){return s(!1)},onCancel:function(){return s(!1)},width:600,footer:null},r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/r0Fj_H9Q73k",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}}]),n}(r.a.Component),re=h.a.TabPane,ie=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(s.a)(this,n),(a=t.call(this,e)).setElemetsList=function(e){a.setState((function(t){var n=Object(l.a)({},t.elementsLists);return n[t.activeBoard]=[].concat(Object(c.a)(n[t.activeBoard]),[e]),Object(l.a)(Object(l.a)({},t),{},{elementsLists:n,currentElementsList:n[t.activeBoard]})}))},a.removeElement=function(e){var t=a.state,n=t.currentElementsList,r=t.activeBoard,i=Object(l.a)({},a.state.elementsLists);if(n.length>1&&e){var o=n.filter((function(t){return t.id!==e}));i[r]=o,a.setState({elementsLists:i,currentElementsList:o}),a.setCurrentElement(o[o.length-1].id),a.setContent(e,void 0,!0)}},a.setCurrentElement=function(e){a.setState({currentElement:e})},a.addBoard=function(){var e=a.state.elementsCount;a.setState((function(t){var n=Object(c.a)(t.boards),a={id:n.length+1,note:"",name:"Scene-".concat(n.length+1)};n.push(a);var r=Object(l.a)({},t.elementsLists);return r[a.id]=[{type:k,sceneNumber:e.sceneHeading,id:"board-".concat(a.id,"-sceneHeading-").concat(e.sceneHeading)}],Object(l.a)(Object(l.a)({},t),{},{boards:n,activeBoard:a.id,elementsLists:r,currentElementsList:r[a.id]})}))},a.setContent=function(e,t,n){a.setState((function(a){var r=a.content,i=a.scriptContent;return n?(i.delete(e),delete r[e]):(i.set(e,t),r[e]=t),Object(l.a)(Object(l.a)({},a),{},{content:r,scriptContent:i})}))},a.setElementCount=function(e){a.setState((function(t){var n=t.elementsCount,a=Object(l.a)(Object(l.a)({},n),e);return Object(l.a)(Object(l.a)({},t),{},{elementsCount:a})}))},a.onTabChange=function(e){var t={activeBoard:e};if("logline"!==e){var n=a.state.elementsLists;t.currentElementsList=n[e]}a.setState(t)},a.onSave=function(){!function(e){console.log(e);var t,n="",a=Object(v.a)(e);try{for(a.s();!(t=a.n()).done;){var r=Object(E.a)(t.value,2),i=(r[0],r[1]);n="".concat(n," ").concat(i)}}catch(c){a.e(c)}finally{a.f()}var o=new Blob([n],{type:"text/plain;charset=utf-8"});b.a.saveAs(o,"screenplay.txt")}(a.state.scriptContent)};var r={sceneHeading:1,action:0,charector:0,dialogue:0,parantheticals:0,transition:0},i={1:[{type:k,sceneNumber:r.sceneHeading,id:"board-".concat(1,"-sceneHeading-",r.sceneHeading)}]};return a.state={boards:[{id:"logline",type:S,name:"Logline"},{id:1,note:"",name:"Scene-1"}],activeBoard:1,content:{},scriptContent:new Map,elementsCount:r,elementsLists:i,currentElementsList:i[1],currentElement:"sceneHeading-".concat(r.sceneHeading)},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.activeBoard,a=t.currentElement,i=t.elementsCount,o=t.currentElementsList;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header center"},"Script assist",r.a.createElement("div",{className:"options"},r.a.createElement(f.a,{className:"save-button",onClick:this.onSave},"Save"))),r.a.createElement("div",{className:"App-container"},r.a.createElement(h.a,{activeKey:n.toString(),className:"boards",onChange:this.onTabChange,tabPosition:"top",type:"editable-card",hideAdd:!0},this.state.boards.map((function(t,n){return r.a.createElement(re,{tab:t.name,key:t.id.toString()},t.type===S?r.a.createElement(ae,{content:e.state.content,onChange:function(n){var a=n.target.value;e.setContent(t.id,a)},id:t.id}):r.a.createElement(M,{id:t.id,key:"board-".concat(t.id),content:e.state.content,setContent:e.setContent,elementsCount:e.state.elementsCount,setElementCount:e.setElementCount,addBoard:e.addBoard,elementsList:o,setElemetsList:e.setElemetsList,currentElement:a,setCurrentElement:e.setCurrentElement,removeElement:e.removeElement}))})))),r.a.createElement("footer",null,/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)&&r.a.createElement("div",{className:"mobile-footer"},r.a.createElement("div",{className:"mobile-options"},r.a.createElement(f.a,{onClick:function(){e.setElementCount({sceneHeading:i.sceneHeading+1}),e.addBoard()}},"Scene heading"),r.a.createElement(f.a,{onClick:function(){e.setElemetsList(A(i,n)),e.setElementCount({action:i.action+1})}},"Action"),r.a.createElement(f.a,{onClick:function(){e.setElemetsList(L(i,n)),e.setElementCount({charector:i.charector+1})}},"Character"),r.a.createElement(f.a,{onClick:function(){e.setElemetsList(j(i,n)),e.setElementCount({parantheticals:i.parantheticals+1})}},"Paranthetical"),r.a.createElement(f.a,{onClick:function(){e.setElemetsList(T(i,n)),e.setElementCount({dialogue:i.dialogue+1})}},"Dialogue"),r.a.createElement(f.a,{onClick:function(){e.setElemetsList(N(i,n)),e.setElementCount({transition:i.transition+1})}},"Transition")))))}}]),n}(r.a.Component),oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Script-assist",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Script-assist","/service-worker.js");oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ce(t,e)}))}}()}},[[204,1,2]]]);
//# sourceMappingURL=main.f6c08a92.chunk.js.map