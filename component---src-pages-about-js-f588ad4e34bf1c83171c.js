(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3XHS":function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),r=n.n(i),o=n("vOnD"),a=n("7oih"),c=n("BQd6"),l=n("Wbzz");var u={background:"#fff",boxShadow:"0px 1px 0px #eef3f9",borderBottom:"1px solid #eef3f9"},f=(e.default=function(t){var e=t.location,n=Object(l.d)("272130478").allContentfulAbout.edges.map((function(t){return t.node}));return r.a.createElement(a.a,{customTitle:"About",onlyBrand:!1,headerStyle:u,smallLogo:!0,location:e},r.a.createElement(f,null,r.a.createElement(d,null,r.a.createElement(c.a,{isAbout:!0,data:n,topOffset:300}))))},o.d.div.withConfig({displayName:"about__Container",componentId:"sc-10wbipz-0"})(["padding:80px 20px;background:",";"],(function(t){return t.theme.colors.foreground}))),d=o.d.div.withConfig({displayName:"about__InnerContent",componentId:"sc-10wbipz-1"})(["max-width:1280px;margin:0 auto;"])},BQd6:function(t,e,n){"use strict";var i=n("MUpH"),r=n("q1tI"),o=n.n(r),a=n("vOnD"),c=n("R8uD"),l=n("nScc"),u=n("yWgo"),f=n("PhR0"),d=n("nkPT"),p="object"==typeof window,s=(n.n(d).a,function(t,e){void 0===e&&(e=!1);var n=Object(r.useState)(p?function(){return window.matchMedia(t).matches}:e),i=n[0],o=n[1];return Object(r.useEffect)((function(){var e=!0,n=window.matchMedia(t),i=function(){e&&o(!!n.matches)};return n.addListener(i),o(n.matches),function(){e=!1,n.removeListener(i)}}),[t]),i}),m=n("vbKG");function g(){var t=Object(i.a)(["\n    flex: 0 0 100%;\n  "]);return g=function(){return t},t}function h(){var t=Object(i.a)(["\n     font-size: 20px;\n  "]);return h=function(){return t},t}function w(){var t=Object(i.a)(["\n    padding-left: 0px;\n  "]);return w=function(){return t},t}function b(){var t=Object(i.a)(["\n    display:none;\n  "]);return b=function(){return t},t}e.a=function(t){var e=t.data,n=t.topOffset,i=t.isAbout,a=void 0!==i&&i,f="undefined"!=typeof window,d=s("(min-width: 991px)"),p=Object(r.useState)(0),g=p[0],h=p[1],w={};Object(r.useEffect)((function(){if(f&&w&&w.length&&d)return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)};function t(){var t=n||250;Object.values(w).map((function(t){return t.getBoundingClientRect().top})).forEach((function(e,n){e>0&&e<t&&h(n)}))}}),[f,w,n,d]);return o.a.createElement(y,null,o.a.createElement(v,null,e.map((function(t,e){return o.a.createElement(k,{key:t.id+1,isAbout:a,onClick:function(){return function(t,e){if(e!==g){if(w){var n=w[t];f&&n&&u.a.SmoothVerticalScrolling(n,300,"top")}h(e)}}(t.id,e)},className:g===e?"active":""},t.title.title," ",g===e?o.a.createElement("img",{src:Object(l.a)("/arrow.svg"),alt:""}):null)}))),o.a.createElement(x,null,e.map((function(t){return o.a.createElement(S,{key:t.id,ref:function(e){return w[t.id]=e}},o.a.createElement(_,null,t.title.title),o.a.createElement(E,null,o.a.createElement(I,null,(n=t.content.json,Object(c.documentToReactComponents)(n,{renderNode:(i={},i[m.INLINES.HYPERLINK]=function(t){return o.a.createElement("a",{href:t.data.uri.includes("zip")?Object(l.a)(t.data.uri):t.data.uri,rel:"noreferrer",target:t.data.uri.includes("mailto")||t.data.uri.includes("zip")?"":"_blank",download:t.data.uri.includes("zip")},t.content[0].value)},i)}))),(e=t.links)?(Array.isArray(e)?e:[e]).map((function(t){return o.a.createElement(O,{key:t.link+Math.random(),href:t.link,target:"_blank",rel:"noreferrer"},t.name," ",o.a.createElement("img",{src:Object(l.a)("/arrow-up.svg"),alt:""}))})):null,function(t){if(t){var e=t.json.content.find((function(t){return"unordered-list"===t.nodeType})),n=u.a.findAllByKey(e,"value"),i=u.a.findAllByKey(e,"url"),r=[];return n.length>0&&i.length>0&&(n=n.filter((function(t){return""!==t})),i=i.filter((function(t){return""!==t})),r=n.map((function(t,e){return{link:t,image:i[e]}}))),r.length>0?o.a.createElement(j,null,r.map((function(t,e){return o.a.createElement(C,{key:t.image+e},o.a.createElement("a",{href:t.link,target:"_blank",rel:"noreferrer"},o.a.createElement("img",{src:t.image,alt:""})))}))):null}}(t.images)));var e,n,i}))))};var y=a.d.div.withConfig({displayName:"SplitView__Content",componentId:"sc-4ftne0-0"})(["min-height:300px;display:flex;"]),v=a.d.div.withConfig({displayName:"SplitView__SideBar",componentId:"sc-4ftne0-1"})(["flex:0 0 350px;position:sticky;top:30px;min-width:350px;max-height:93vh;height:",";overflow-y:auto;transition:all 0.1s ease;margin-top:10px;padding-right:50px;::-webkit-scrollbar{width:4px;height:4px;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-button{display:none;}::-webkit-scrollbar-corner{display:none;}::-webkit-scrollbar-thumb{background:rgba(0,0,0,0.16);border-radius:2px;}",""],(function(t){return t.isAbout?"300px":"auto"}),(function(t){return t.theme.mediaWidth.upToMedium(b())})),x=a.d.div.withConfig({displayName:"SplitView__MainContent",componentId:"sc-4ftne0-2"})(["flex-grow:1;margin-left:auto;padding-left:70px;",""],(function(t){return t.theme.mediaWidth.upToMedium(w())})),k=a.d.div.withConfig({displayName:"SplitView__SideTitle",componentId:"sc-4ftne0-3"})(["color:",";margin-bottom:20px;font-size:",";cursor:pointer;&:last-child{margin-bottom:0;}&:hover,&.active{background:",";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;color:",";}"],(function(t){return t.theme.colors.customSecondary}),(function(t){return t.theme.font.default}),(function(t){return t.theme.colors.gradient}),(function(t){return t.theme.colors.inputBorderColor})),S=a.d.div.withConfig({displayName:"SplitView__SideContent",componentId:"sc-4ftne0-4"})(["margin-bottom:40px;"]),_=a.d.div.withConfig({displayName:"SplitView__MainTitle",componentId:"sc-4ftne0-5"})(['font-weight:normal;font-family:"Inter-Medium";font-size:24px;letter-spacing:-0.33px;color:',";",""],(function(t){return t.theme.font.primary}),(function(t){return t.theme.mediaWidth.upToSmall(h())})),E=a.d.div.withConfig({displayName:"SplitView__MainDescription",componentId:"sc-4ftne0-6"})(["font-size:",";color:",";line-height:24px;letter-spacing:-0.18px;"],(function(t){return t.theme.font.default}),(function(t){return t.theme.colors.customSecondary})),O=a.d.a.withConfig({displayName:"SplitView__CustomLink",componentId:"sc-4ftne0-7"})([""," margin-right:20px;img{width:8px;height:8px;}"],f.a),j=a.d.div.withConfig({displayName:"SplitView__Row",componentId:"sc-4ftne0-8"})(["display:flex;margin:0 -10px;flex-wrap:wrap;"]),C=a.d.div.withConfig({displayName:"SplitView__Col",componentId:"sc-4ftne0-9"})(["flex:0 0 50%;padding:0 10px;img{width:100%;margin-top:15px;}",""],(function(t){return t.theme.mediaWidth.upToSmall(g())})),I=a.d.div.withConfig({displayName:"SplitView__Text",componentId:"sc-4ftne0-10"})(["a{","}"],f.a)},nkPT:function(t,e,n){"use strict";t.exports=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var i,r,o;if(Array.isArray(e)){if((i=e.length)!=n.length)return!1;for(r=i;0!=r--;)if(!t(e[r],n[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((i=(o=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(r=i;0!=r--;)if(!Object.prototype.hasOwnProperty.call(n,o[r]))return!1;for(r=i;0!=r--;){var a=o[r];if(("_owner"!==a||!e.$$typeof)&&!t(e[a],n[a]))return!1}return!0}return e!=e&&n!=n}},yWgo:function(t,e,n){"use strict";n("E9XD");var i=function(t,e){"center"!==e&&""!==e||window.scrollBy(0,t/2),"top"===e&&window.scrollBy(0,t)};e.a={SmoothVerticalScrolling:function(t,e,n){for(var r=t.getBoundingClientRect().top/100,o=0;o<=e;)window.setTimeout(i,o,r,n),o+=e/100},findAllByKey:function t(e,n){return Object.entries(e).reduce((function(e,i){var r=i[0],o=i[1];return r===n?e.concat(o):"object"==typeof o?e.concat(t(o,n)):e}),[])}}}}]);
//# sourceMappingURL=component---src-pages-about-js-f588ad4e34bf1c83171c.js.map