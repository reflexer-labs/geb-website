"use strict";(self.webpackChunkgeb_website=self.webpackChunkgeb_website||[]).push([[567],{9806:function(e,n,t){var r,o=t(7294),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t.g?t.g:"undefined"!=typeof self?self:{};var l,a,f,s=(l=function(e,n){Object.defineProperty(n,"__esModule",{value:!0});var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,n){return e(n={exports:{}},n.exports),n.exports}var o=function(e){return e&&e.Math==Math&&e},u=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof t&&t)||function(){return this}()||Function("return this")(),i=function(e){try{return!!e()}catch(n){return!0}},l=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,s={f:f&&!a.call({1:2},1)?function(e){var n=f(this,e);return!!n&&n.enumerable}:a},p=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}},E={}.toString,d=function(e){return E.call(e).slice(8,-1)},y="".split,h=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==d(e)?y.call(e,""):Object(e)}:Object,T=function(e){return h(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},v=function(e){return"object"==typeof e?null!==e:"function"==typeof e},m=function(e,n){if(!v(e))return e;var t,r;if(n&&"function"==typeof(t=e.toString)&&!v(r=t.call(e)))return r;if("function"==typeof(t=e.valueOf)&&!v(r=t.call(e)))return r;if(!n&&"function"==typeof(t=e.toString)&&!v(r=t.call(e)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,g=function(e,n){return b.call(e,n)},O=u.document,_=v(O)&&v(O.createElement),I=function(e){return _?O.createElement(e):{}},S=!l&&!i((function(){return 7!=Object.defineProperty(I("div"),"a",{get:function(){return 7}}).a})),D=Object.getOwnPropertyDescriptor,N={f:l?D:function(e,n){if(e=T(e),n=m(n,!0),S)try{return D(e,n)}catch(t){}if(g(e,n))return p(!s.f.call(e,n),e[n])}},A=function(e){if(!v(e))throw TypeError(String(e)+" is not an object");return e},L=Object.defineProperty,w={f:l?L:function(e,n,t){if(A(e),n=m(n,!0),A(t),S)try{return L(e,n,t)}catch(r){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(e[n]=t.value),e}},P=l?function(e,n,t){return w.f(e,n,p(1,t))}:function(e,n,t){return e[n]=t,e},R=function(e,n){try{P(u,e,n)}catch(t){u[e]=n}return n},M="__core-js_shared__",j=u[M]||R(M,{}),H=Function.toString;"function"!=typeof j.inspectSource&&(j.inspectSource=function(e){return H.call(e)});var k,G,C,Y=j.inspectSource,B=u.WeakMap,x="function"==typeof B&&/native code/.test(Y(B)),K=r((function(e){(e.exports=function(e,n){return j[e]||(j[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.10.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),U=0,F=Math.random(),V=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++U+F).toString(36)},z=K("keys"),Q=function(e){return z[e]||(z[e]=V(e))},W={},q=u.WeakMap;if(x){var X=j.state||(j.state=new q),J=X.get,Z=X.has,$=X.set;k=function(e,n){return n.facade=e,$.call(X,e,n),n},G=function(e){return J.call(X,e)||{}},C=function(e){return Z.call(X,e)}}else{var ee=Q("state");W[ee]=!0,k=function(e,n){return n.facade=e,P(e,ee,n),n},G=function(e){return g(e,ee)?e[ee]:{}},C=function(e){return g(e,ee)}}var ne={set:k,get:G,has:C,enforce:function(e){return C(e)?G(e):k(e,{})},getterFor:function(e){return function(n){var t;if(!v(n)||(t=G(n)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return t}}},te=r((function(e){var n=ne.get,t=ne.enforce,r=String(String).split("String");(e.exports=function(e,n,o,i){var c,l=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,f=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof n||g(o,"name")||P(o,"name",n),(c=t(o)).source||(c.source=r.join("string"==typeof n?n:""))),e!==u?(l?!f&&e[n]&&(a=!0):delete e[n],a?e[n]=o:P(e,n,o)):a?e[n]=o:R(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||Y(this)}))})),re=u,oe=function(e){return"function"==typeof e?e:void 0},ue=function(e,n){return arguments.length<2?oe(re[e])||oe(u[e]):re[e]&&re[e][n]||u[e]&&u[e][n]},ie=Math.ceil,ce=Math.floor,le=function(e){return isNaN(e=+e)?0:(e>0?ce:ie)(e)},ae=Math.min,fe=Math.max,se=Math.min,pe=function(e){return function(n,t,r){var o,u,i=T(n),c=(o=i.length)>0?ae(le(o),9007199254740991):0,l=function(e,n){var t=le(e);return t<0?fe(t+n,0):se(t,n)}(r,c);if(e&&t!=t){for(;c>l;)if((u=i[l++])!=u)return!0}else for(;c>l;l++)if((e||l in i)&&i[l]===t)return e||l||0;return!e&&-1}},Ee={includes:pe(!0),indexOf:pe(!1)},de=Ee.indexOf,ye=function(e,n){var t,r=T(e),o=0,u=[];for(t in r)!g(W,t)&&g(r,t)&&u.push(t);for(;n.length>o;)g(r,t=n[o++])&&(~de(u,t)||u.push(t));return u},he=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Te=he.concat("length","prototype"),ve={f:Object.getOwnPropertyNames||function(e){return ye(e,Te)}},me={f:Object.getOwnPropertySymbols},be=ue("Reflect","ownKeys")||function(e){var n=ve.f(A(e)),t=me.f;return t?n.concat(t(e)):n},ge=function(e,n){for(var t=be(n),r=w.f,o=N.f,u=0;u<t.length;u++){var i=t[u];g(e,i)||r(e,i,o(n,i))}},Oe=/#|\.prototype\./,_e=function(e,n){var t=Se[Ie(e)];return t==Ne||t!=De&&("function"==typeof n?i(n):!!n)},Ie=_e.normalize=function(e){return String(e).replace(Oe,".").toLowerCase()},Se=_e.data={},De=_e.NATIVE="N",Ne=_e.POLYFILL="P",Ae=_e,Le=N.f,we=function(e,n){var t,r,o,i,c,l=e.target,a=e.global,f=e.stat;if(t=a?u:f?u[l]||R(l,{}):(u[l]||{}).prototype)for(r in n){if(i=n[r],o=e.noTargetGet?(c=Le(t,r))&&c.value:t[r],!Ae(a?r:l+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;ge(i,o)}(e.sham||o&&o.sham)&&P(i,"sham",!0),te(t,r,i,e)}},Pe=Object.keys||function(e){return ye(e,he)},Re=s.f,Me=function(e){return function(n){for(var t,r=T(n),o=Pe(r),u=o.length,i=0,c=[];u>i;)t=o[i++],l&&!Re.call(r,t)||c.push(e?[t,r[t]]:r[t]);return c}},je=(Me(!0),Me(!1));we({target:"Object",stat:!0},{values:function(e){return je(e)}}),re.Object.values;var He,ke,Ge="process"==d(u.process),Ce=ue("navigator","userAgent")||"",Ye=u.process,Be=Ye&&Ye.versions,xe=Be&&Be.v8;xe?ke=(He=xe.split("."))[0]+He[1]:Ce&&(!(He=Ce.match(/Edge\/(\d+)/))||He[1]>=74)&&(He=Ce.match(/Chrome\/(\d+)/))&&(ke=He[1]);var Ke,Ue=ke&&+ke,Fe=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(Ge?38===Ue:Ue>37&&Ue<41)})),Ve=Fe&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ze=K("wks"),Qe=u.Symbol,We=Ve?Qe:Qe&&Qe.withoutSetter||V,qe=l?Object.defineProperties:function(e,n){A(e);for(var t,r=Pe(n),o=r.length,u=0;o>u;)w.f(e,t=r[u++],n[t]);return e},Xe=ue("document","documentElement"),Je="prototype",Ze="script",$e=Q("IE_PROTO"),en=function(){},nn=function(e){return"<"+Ze+">"+e+"</"+Ze+">"},tn=function(){try{Ke=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var e,n,t;tn=Ke?function(e){e.write(nn("")),e.close();var n=e.parentWindow.Object;return e=null,n}(Ke):(n=I("iframe"),t="java"+Ze+":",n.style.display="none",Xe.appendChild(n),n.src=String(t),(e=n.contentWindow.document).open(),e.write(nn("document.F=Object")),e.close(),e.F);for(var r=he.length;r--;)delete tn[Je][he[r]];return tn()};W[$e]=!0;var rn,on=Object.create||function(e,n){var t;return null!==e?(en[Je]=A(e),t=new en,en[Je]=null,t[$e]=e):t=tn(),void 0===n?t:qe(t,n)},un=(g(ze,rn="unscopables")&&(Fe||"string"==typeof ze[rn])||(Fe&&g(Qe,rn)?ze[rn]=Qe[rn]:ze[rn]=We("Symbol."+rn)),ze[rn]),cn=Array.prototype;null==cn[un]&&w.f(cn,un,{configurable:!0,value:on(null)});var ln,an=Ee.includes;we({target:"Array",proto:!0},{includes:function(e){return an(this,e,arguments.length>1?arguments[1]:void 0)}}),ln="includes",cn[un][ln]=!0;var fn,sn,pn,En=function(e,n,t){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===n)return e;switch(t){case 0:return function(){return e.call(n)};case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}},dn=Function.call;fn="includes",En(dn,u.Array.prototype[fn],sn),function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(pn||(pn={}));var yn,hn=pn;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(yn||(yn={}));var Tn,vn=yn,mn=[hn.PARAGRAPH,hn.HEADING_1,hn.HEADING_2,hn.HEADING_3,hn.HEADING_4,hn.HEADING_5,hn.HEADING_6,hn.OL_LIST,hn.UL_LIST,hn.HR,hn.QUOTE,hn.EMBEDDED_ENTRY,hn.EMBEDDED_ASSET],bn=[hn.HR,hn.EMBEDDED_ENTRY,hn.EMBEDDED_ASSET],gn=((Tn={})[hn.OL_LIST]=[hn.LIST_ITEM],Tn[hn.UL_LIST]=[hn.LIST_ITEM],Tn[hn.LIST_ITEM]=mn.slice(),Tn[hn.QUOTE]=[hn.PARAGRAPH],Tn),On={nodeType:hn.DOCUMENT,data:{},content:[{nodeType:hn.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]},_n=Object.freeze({isInline:function(e){return Object.values(vn).includes(e.nodeType)},isBlock:function(e){return Object.values(hn).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});n.BLOCKS=hn,n.CONTAINERS=gn,n.EMPTY_DOCUMENT=On,n.INLINES=vn,n.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},n.TOP_LEVEL_BLOCKS=mn,n.VOID_BLOCKS=bn,n.helpers=_n},l(a={exports:{}},a.exports),a.exports);(f=s)&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")&&f.default;var p,E,d=s.BLOCKS,y=(s.CONTAINERS,s.EMPTY_DOCUMENT,s.INLINES),h=s.MARKS,T=(s.TOP_LEVEL_BLOCKS,s.VOID_BLOCKS,s.helpers);function v(e,n){return e.map((function(e,t){return r=m(e,n),u=t,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function m(e,n){var t=n.renderNode,r=n.renderMark,o=n.renderText;if(T.isText(e))return e.marks.reduce((function(e,n){return r[n.type]?r[n.type](e):e}),o?o(e.value):e.value);var i=v(e.content,n);return e.nodeType&&t[e.nodeType]?t[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}var b=((p={})[d.DOCUMENT]=function(e,n){return n},p[d.PARAGRAPH]=function(e,n){return u.createElement("p",null,n)},p[d.HEADING_1]=function(e,n){return u.createElement("h1",null,n)},p[d.HEADING_2]=function(e,n){return u.createElement("h2",null,n)},p[d.HEADING_3]=function(e,n){return u.createElement("h3",null,n)},p[d.HEADING_4]=function(e,n){return u.createElement("h4",null,n)},p[d.HEADING_5]=function(e,n){return u.createElement("h5",null,n)},p[d.HEADING_6]=function(e,n){return u.createElement("h6",null,n)},p[d.EMBEDDED_ENTRY]=function(e,n){return u.createElement("div",null,n)},p[d.UL_LIST]=function(e,n){return u.createElement("ul",null,n)},p[d.OL_LIST]=function(e,n){return u.createElement("ol",null,n)},p[d.LIST_ITEM]=function(e,n){return u.createElement("li",null,n)},p[d.QUOTE]=function(e,n){return u.createElement("blockquote",null,n)},p[d.HR]=function(){return u.createElement("hr",null)},p[y.ASSET_HYPERLINK]=function(e){return O(y.ASSET_HYPERLINK,e)},p[y.ENTRY_HYPERLINK]=function(e){return O(y.ENTRY_HYPERLINK,e)},p[y.EMBEDDED_ENTRY]=function(e){return O(y.EMBEDDED_ENTRY,e)},p[y.HYPERLINK]=function(e,n){return u.createElement("a",{href:e.data.uri},n)},p),g=((E={})[h.BOLD]=function(e){return u.createElement("b",null,e)},E[h.ITALIC]=function(e){return u.createElement("i",null,e)},E[h.UNDERLINE]=function(e){return u.createElement("u",null,e)},E[h.CODE]=function(e){return u.createElement("code",null,e)},E);function O(e,n){return u.createElement("span",{key:n.data.target.sys.id},"type: ",n.nodeType," id: ",n.data.target.sys.id)}n.h=function(e,n){return void 0===n&&(n={}),e?m(e,{renderNode:i({},b,n.renderNode),renderMark:i({},g,n.renderMark),renderText:n.renderText}):null}}}]);
//# sourceMappingURL=c0e710ba845dd5b18d1f5de70351ee5eb80481c9-b21bb58f9f647f301a61.js.map