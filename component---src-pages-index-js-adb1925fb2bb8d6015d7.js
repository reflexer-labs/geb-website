(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8+s/":function(e,t,n){"use strict";var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(p,"canUseDOM",c),p}}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("vOnD"),i=n("7oih"),c=n("qhky"),l=n("Wbzz");var u=n("nScc"),s=function(e){var t=e.pathname,n=Object(l.c)("3912223076").site.siteMetadata,r=n.siteUrl,a=n.title,i=n.twitter,s=n.favicon,p=n.image,f=n.description,m=n.titleTemplate,d=""+r+t;return o.a.createElement(c.a,{title:a,titleTemplate:m},o.a.createElement("link",{rel:"canonical",href:d}),o.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:Object(u.a)(s)}),o.a.createElement("meta",{name:"description",content:f}),o.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"}),o.a.createElement("meta",{property:"og:url",content:d}),o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:site_name",content:a}),o.a.createElement("meta",{property:"og:description",content:f}),o.a.createElement("meta",{property:"og:image",content:""+r+Object(u.a)(p)}),o.a.createElement("meta",{property:"og:image:alt",content:"Reflexer Logo"}),o.a.createElement("meta",{property:"og:image:width",content:"512"}),o.a.createElement("meta",{property:"og:image:height",content:"512"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:site",content:i}))},p=n("MUpH"),f=n("PhR0");function m(){var e=Object(p.a)(["\n    font-size: 32px;\n    text-align:center;\n  "]);return m=function(){return e},e}function d(){var e=Object(p.a)(["\n    margin-bottom:30px; \n  "]);return d=function(){return e},e}function h(){var e=Object(p.a)(["\n  flex: 0 0 100%;\n  &.left {\n      order:1;\n  }\n  "]);return h=function(){return e},e}var g=function(){return o.a.createElement(y,null,o.a.createElement(v,null,o.a.createElement(b,null,o.a.createElement(w,{className:"left"},o.a.createElement(T,null,"Developer",o.a.createElement("br",null),"Documentation"),o.a.createElement(x,null,"Vel, malesuada dis quam morbi sit. Lorem a luctus mauris odio risus. Et neque molestie etiam nullam facilisi volutpat amet. Velit nulla fringilla mollis dui, amet. Tristique consectetur lorem laoreet enim. Enim, aliquet scelerisque cursus scelerisque cursus. Tortor a lacinia egestas quis venenatis dictum est."),o.a.createElement(C,{href:"/"},"View Program ",o.a.createElement("img",{src:Object(u.a)("/arrow.svg"),alt:""}))),o.a.createElement(w,null,o.a.createElement(E,null,o.a.createElement("img",{src:Object(u.a)("/placeholder.png"),alt:""}))))))},y=a.c.div.withConfig({displayName:"DeveloperBlock__Container",componentId:"otlvsk-0"})(["padding:80px 20px;"]),v=a.c.div.withConfig({displayName:"DeveloperBlock__SplitBlocks",componentId:"otlvsk-1"})(["max-width:1170px;margin:0 auto;"]),b=a.c.div.withConfig({displayName:"DeveloperBlock__Row",componentId:"otlvsk-2"})(["margin:0 -10px;display:flex;flex-wrap:wrap;align-items:center;"]),w=a.c.div.withConfig({displayName:"DeveloperBlock__Col",componentId:"otlvsk-3"})(["padding:0 10px;flex:0 0 50%;",""],(function(e){return e.theme.mediaWidth.upToSmall(h())})),E=a.c.div.withConfig({displayName:"DeveloperBlock__ImgContainer",componentId:"otlvsk-4"})(["border:1px dashed #d7d7d7;img{width:100%;}",""],(function(e){return e.theme.mediaWidth.upToSmall(d())})),T=a.c.div.withConfig({displayName:"DeveloperBlock__Title",componentId:"otlvsk-5"})(["font-size:48px;font-weight:600;color:",";letter-spacing:-0.33px;",""],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.mediaWidth.upToSmall(m())})),x=a.c.div.withConfig({displayName:"DeveloperBlock__Text",componentId:"otlvsk-6"})(["font-size:",";color:",";line-height:24px;letter-spacing:-0.18px;margin-top:20px;margin-bottom:20px;"],(function(e){return e.theme.font.small}),(function(e){return e.theme.colors.secondary})),C=a.c.a.withConfig({displayName:"DeveloperBlock__Link",componentId:"otlvsk-7"})(["",""],f.a);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,c=A(e,["color","size"]);return o.a.createElement("svg",O({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("polyline",{points:"18 15 12 9 6 15"}))}));j.displayName="ChevronUp";var k=j;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var I=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,c=_(e,["color","size"]);return o.a.createElement("svg",S({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("polyline",{points:"6 9 12 15 18 9"}))}));I.displayName="ChevronDown";var N=I,L=[{title:"First Question",text:"Metus egestas placerat vel sed pretium, tellus. Ut tincidunt sit a nec velit proin. Lobortis a fermentum ipsum cras eu et neque iaculis nulla. Eu egestas vulputate ut arcu."},{title:"Second Question",text:"Metus egestas placerat vel sed pretium, tellus. Ut tincidunt sit a nec velit proin. Lobortis a fermentum ipsum cras eu et neque iaculis nulla. Eu egestas vulputate ut arcu."},{title:"Third Question",text:"Metus egestas placerat vel sed pretium, tellus. Ut tincidunt sit a nec velit proin. Lobortis a fermentum ipsum cras eu et neque iaculis nulla. Eu egestas vulputate ut arcu."},{title:"Fourth Question",text:"Metus egestas placerat vel sed pretium, tellus. Ut tincidunt sit a nec velit proin. Lobortis a fermentum ipsum cras eu et neque iaculis nulla. Eu egestas vulputate ut arcu."}],P=function(){var e=Object(r.useState)(0),t=e[0],n=e[1];return o.a.createElement(q,null,o.a.createElement(B,null,o.a.createElement(R,null,o.a.createElement(M,null,"FAQ's"),o.a.createElement(H,null,"To learn more about Reflexer head to the ",o.a.createElement(l.a,{to:"/"},"FAQ’s."))),o.a.createElement(z,null,L.map((function(e,r){return o.a.createElement(U,{key:e.title,onClick:function(){return function(e){e===t?n():n(e)}(r)}},o.a.createElement(D,null,e.title," ",r===t?o.a.createElement(k,{size:25}):o.a.createElement(N,{size:25})),r===t?o.a.createElement(F,null,e.text):null)})))))},q=a.c.div.withConfig({displayName:"FAQsCollapse__Container",componentId:"q8cc8d-0"})(["padding:80px 20px;background:",";"],(function(e){return e.theme.colors.foreground})),B=a.c.div.withConfig({displayName:"FAQsCollapse__Inner",componentId:"q8cc8d-1"})(["max-width:650px;margin:0 auto;"]),R=a.c.div.withConfig({displayName:"FAQsCollapse__Header",componentId:"q8cc8d-2"})(["text-align:center;"]),M=a.c.div.withConfig({displayName:"FAQsCollapse__Title",componentId:"q8cc8d-3"})(["color:",";font-size:48px;font-weight:600;"],(function(e){return e.theme.colors.primary})),H=a.c.div.withConfig({displayName:"FAQsCollapse__Text",componentId:"q8cc8d-4"})(["color:",";line-height:24px;a{background:",";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;color:",";}"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.gradient}),(function(e){return e.theme.colors.inputBorderColor})),z=a.c.div.withConfig({displayName:"FAQsCollapse__CollapseSection",componentId:"q8cc8d-5"})(["margin-top:20px;"]),D=a.c.div.withConfig({displayName:"FAQsCollapse__CollapseTitle",componentId:"q8cc8d-6"})(["color:",";font-size:",";font-weight:600;display:flex;align-items:center;justify-content:space-between;"],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.font.medium})),F=a.c.div.withConfig({displayName:"FAQsCollapse__CollapseText",componentId:"q8cc8d-7"})(["color:",";font-size:",";letter-spacing:-0.18px;line-height:24px;margin-top:10px;"],(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.font.default})),U=a.c.div.withConfig({displayName:"FAQsCollapse__CollapseBlock",componentId:"q8cc8d-8"})(["padding:20px;cursor:pointer;"]);function Q(){var e=Object(p.a)(["\n  flex: 0 0 100%;\n  "]);return Q=function(){return e},e}var W=function(){return o.a.createElement(Y,null,o.a.createElement(V,null,o.a.createElement(K,null,o.a.createElement(J,null,o.a.createElement(Z,null,o.a.createElement("img",{src:Object(u.a)("/box-ph.svg"),alt:""})),o.a.createElement($,null,"Leverage RAI"),o.a.createElement(G,null,"Auctor cursus tellus pretium dolor convallis ornare lectus. Nam sem etiam netus eget vitae amet."),o.a.createElement(X,null,o.a.createElement("a",{href:"/"},"Get Leverage ",o.a.createElement("img",{src:Object(u.a)("/arrow.svg"),alt:""}))))),o.a.createElement(K,null,o.a.createElement(J,null,o.a.createElement(Z,null,o.a.createElement("img",{src:Object(u.a)("/box-ph.svg"),alt:""})),o.a.createElement($,null,"Use RAI"),o.a.createElement(G,null,"Auctor cursus tellus pretium dolor convallis ornare lectus. Nam sem etiam netus eget vitae amet."),o.a.createElement(X,null,o.a.createElement("a",{href:"/"},"Start Using ",o.a.createElement("img",{src:Object(u.a)("/arrow.svg"),alt:""}))))),o.a.createElement(K,null,o.a.createElement(J,null,o.a.createElement(Z,null,o.a.createElement("img",{src:Object(u.a)("/box-ph.svg"),alt:""})),o.a.createElement($,null,"Protocol Statistics"),o.a.createElement(G,null,"Auctor cursus tellus pretium dolor convallis ornare lectus. Nam sem etiam netus eget vitae amet."),o.a.createElement(X,null,o.a.createElement("a",{href:"/"},"View Stats ",o.a.createElement("img",{src:Object(u.a)("/arrow.svg"),alt:""})))))))},Y=a.c.div.withConfig({displayName:"HeroBox__Container",componentId:"upohmv-0"})(["max-width:1170px;padding:0 20px;margin:0 auto;"]),V=a.c.div.withConfig({displayName:"HeroBox__Row",componentId:"upohmv-1"})(["display:flex;flex-wrap:wrap;margin:0 -10px;"]),K=a.c.div.withConfig({displayName:"HeroBox__Col",componentId:"upohmv-2"})(["padding:0 10px;flex:0 0 33.33%;margin-bottom:20px;",""],(function(e){return e.theme.mediaWidth.upToSmall(Q())})),J=a.c.div.withConfig({displayName:"HeroBox__Block",componentId:"upohmv-3"})(["border:1px solid ",";background:",";border-radius:",";padding:20px;"],(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.global.borderRadius})),Z=a.c.div.withConfig({displayName:"HeroBox__ImgBox",componentId:"upohmv-4"})(["img{max-width:70px;}"]),$=a.c.div.withConfig({displayName:"HeroBox__Title",componentId:"upohmv-5"})(["font-size:",";color:",";font-weight:bold;margin-top:10px;"],(function(e){return e.theme.font.medium}),(function(e){return e.theme.colors.primary})),G=a.c.div.withConfig({displayName:"HeroBox__Text",componentId:"upohmv-6"})(["font-size:",";color:",";margin-top:5px;"],(function(e){return e.theme.font.extraSmall}),(function(e){return e.theme.colors.secondary})),X=a.c.div.withConfig({displayName:"HeroBox__LinkContainer",componentId:"upohmv-7"})(["display:flex;justify-content:flex-end;margin-top:5px;a{","}"],f.a);function ee(){var e=Object(p.a)(["\n    font-size:35px;\n    line-height: 50px;\n  "]);return ee=function(){return e},e}function te(){var e=Object(p.a)(["\n    font-size:50px;\n    line-height: 60px;\n  "]);return te=function(){return e},e}var ne=function(){return o.a.createElement(re,null,o.a.createElement(oe,null,o.a.createElement(ae,null,"Leverage ETH at Fixed Interest Rates"),o.a.createElement(ie,null,"Fermentum sit egestas amet ornare cras. Et donec eu nulla egestas. Ornare vitae faucibus sit pellentesque tellus posuere potenti id.")))},re=a.c.div.withConfig({displayName:"HeroSeciton__Container",componentId:"ejku3j-0"})(["min-height:calc(100vh - 150px);background:",";display:flex;align-items:center;justify-content:center;"],(function(e){return e.theme.colors.gradient})),oe=a.c.div.withConfig({displayName:"HeroSeciton__Content",componentId:"ejku3j-1"})(["max-width:800px;margin:0 auto;text-align:center;padding:0 20px;"]),ae=a.c.div.withConfig({displayName:"HeroSeciton__Heading",componentId:"ejku3j-2"})(["font-size:78px;font-weight:600;color:",";letter-spacing:-0.69px;line-height:90px;font-style:italic;"," ",""],(function(e){return e.theme.colors.neutral}),(function(e){return e.theme.mediaWidth.upToSmall(te())}),(function(e){return e.theme.mediaWidth.upToExtraSmall(ee())})),ie=a.c.div.withConfig({displayName:"HeroSeciton__Text",componentId:"ejku3j-3"})(["color:",";font-size:",";margin-top:20px;"],(function(e){return e.theme.colors.neutral}),(function(e){return e.theme.font.default})),ce=(t.default=function(){return o.a.createElement(i.a,null,o.a.createElement(s,null),o.a.createElement(ne,null),o.a.createElement(ce,null,o.a.createElement(W,null)),o.a.createElement(g,null),o.a.createElement(P,null))},a.c.div.withConfig({displayName:"pages__BoxesContainer",componentId:"y30b29-0"})(["margin-top:-95px;"]))},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,o="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=t.entries();!(l=s.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(o&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(n&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!e(t[u[l]],i[u[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));var r,o,a,i,c=n("17x9"),l=n.n(c),u=n("8+s/"),s=n.n(u),p=n("ZhWT"),f=n.n(p),m=n("q1tI"),d=n.n(m),h=n("YVoz"),g=n.n(h),y="bodyAttributes",v="htmlAttributes",b="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",x="href",C="http-equiv",O="innerHTML",A="itemprop",j="name",k="property",S="rel",_="src",I="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",P="defer",q="encodeSpecialCharacters",B="onChangeClientState",R="titleTemplate",M=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),H=[w.NOSCRIPT,w.SCRIPT,w.STYLE],z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=G(e,w.TITLE),n=G(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=G(e,L);return t||r||void 0},K=function(e){return G(e,B)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||n===S&&"canonical"===e[n].toLowerCase()||l===S&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==O&&c!==T&&c!==A||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],l=g()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},G=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,p=e.title,f=e.titleAttributes;le(w.BODY,r),le(w.HTML,o),ce(p,f);var m={baseTag:ue(w.BASE,n),linkTags:ue(w.LINK,a),metaTags:ue(w.META,i),noscriptTags:ue(w.NOSCRIPT,c),scriptTags:ue(w.SCRIPT,u),styleTags:ue(w.STYLE,s)},d={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),l(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(w.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=a.indexOf(l);-1!==s&&a.splice(s,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=pe(n,r),[d.a.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Y(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case v:return{toComponent:function(){return pe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===O||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),d.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,p=void 0===s?"":s,f=e.titleAttributes;return{base:fe(w.BASE,t,r),bodyAttributes:fe(y,n,r),htmlAttributes:fe(v,o,r),link:fe(w.LINK,a,r),meta:fe(w.META,i,r),noscript:fe(w.NOSCRIPT,c,r),script:fe(w.SCRIPT,l,r),style:fe(w.STYLE,u,r),title:fe(w.TITLE,{title:p,titleAttributes:f},r)}},de=s()((function(e){return{baseTag:Z([x,I],e),bodyAttributes:J(y,e),defer:G(e,P),encode:G(e,q),htmlAttributes:J(v,e),linkTags:$(w.LINK,[S,x],e),metaTags:$(w.META,[j,E,C,k,A],e),noscriptTags:$(w.NOSCRIPT,[O],e),onChangeClientState:K(e),scriptTags:$(w.SCRIPT,[_,O],e),styleTags:$(w.STYLE,[T],e),title:V(e),titleAttributes:J(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),me)((function(){return null})),he=(o=de,i=a=function(e){function t(){return D(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return U({},o,((t={})[r.type]=i,t.titleAttributes=U({},a),t));case w.BODY:return U({},o,{bodyAttributes:U({},a)});case w.HTML:return U({},o,{htmlAttributes:U({},a)})}return U({},o,((n={})[r.type]=U({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)}(Q(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Q(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.a.createElement(o,r)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.a.Component),a.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-js-adb1925fb2bb8d6015d7.js.map