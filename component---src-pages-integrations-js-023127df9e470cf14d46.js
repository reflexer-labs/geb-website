"use strict";(self.webpackChunkgeb_website=self.webpackChunkgeb_website||[]).push([[186],{3167:function(e,t,n){var a=n(3366),o=n(7294),i=n(9),r=["x","i"],s=function(){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},o.createElement("line",{className:"top",x1:"0",y1:"0",x2:"900",y2:"0"}),o.createElement("line",{className:"left",x1:"0",y1:"420",x2:"0",y2:"-840"}),o.createElement("line",{className:"bottom",x1:"300",y1:"420",x2:"-600",y2:"420"}),o.createElement("line",{className:"right",x1:"300",y1:"0",x2:"300",y2:"1260"}))};t.Z=function(e){var t=e.x,n=e.i,i=(0,a.Z)(e,r);return o.createElement(l,Object.assign({className:"wow fadeInUp","data-wow-delay":.4+.3*(n+1)+"s"},i),o.createElement("a",{className:"customLink",href:t.node.link.link,target:"_blank",rel:"noreferrer"},o.createElement("div",{className:"box"},o.createElement(s,null),o.createElement("div",{className:"int-image"},o.createElement("img",{src:t.node.image.file.url,alt:t.node.title.title})),o.createElement("h3",null,t.node.title.title),o.createElement("span",null,t.node.content.content))))};var l=i.default.div.withConfig({displayName:"IntegrationItem__Container",componentId:"sc-70q6l4-0"})([".customLink{color:inherit;text-decoration:none;}.box{width:300px;height:420px;position:relative;display:inline-block;margin:0px 30px 20px;cursor:pointer;background:",';color:#2c3e50;padding:20px;text-align:center;box-shadow:inset 0 0 0 3px #2c3e50;-webkit-transition:background 0.4s 0.5s;transition:background 0.4s 0.5s;@media (max-width:1150px) and (min-width:1024px){margin:0px 5px 20px;}@media (max-width:500px){margin:0 0 20px;}}.box:hover{background:rgba(255,255,255,0);-webkit-transition-delay:0s;transition-delay:0s;}.box span{display:block;font-weight:400;letter-spacing:1px;font-size:15px;padding:5px;line-height:23px;}.box h3{font-weight:bold;font-family:"inter-medium";}.box h3,.box span{-webkit-transition:color 0.4s 0.5s;transition:color 0.4s 0.5s;}.box:hover h3,.box:hover span{color:#fff;-webkit-transition-delay:0s;transition-delay:0s;}.box svg{position:absolute;top:0;left:0;fill:blue;}.box svg line{stroke-width:3;stroke:',";fill:none;-webkit-transition:all 0.8s ease-in-out;transition:all 0.8s ease-in-out;}.box:hover svg line{-webkit-transition-delay:0.1s;transition-delay:0.1s;stroke:",";}.box svg line.top,.box svg line.bottom{stroke-dasharray:330 240;}.box svg line.left,.box svg line.right{stroke-dasharray:455 350;}.box{color:#fff;box-shadow:none;-webkit-transition:background 0.3s;transition:background 0.3s;}.box:hover{background:rgba(0,0,0,0.4);}.box h3,.box span{-webkit-transition:none;transition:none;}.box svg line{-webkit-transition:all 0.5s;transition:all 0.5s;}.box:hover svg line{stroke-width:10;-webkit-transition-delay:0s;transition-delay:0s;}.box:hover svg line.top{-webkit-transform:translateX(-300px);transform:translateX(-300px);}.box:hover svg line.bottom{-webkit-transform:translateX(300px);transform:translateX(300px);}.box:hover svg line.left{-webkit-transform:translateY(420px);transform:translateY(420px);}.box:hover svg line.right{-webkit-transform:translateY(-420px);transform:translateY(-420px);}.int-image{width:175px;height:175px;margin:20px auto 30px auto;display:flex;align-items:center;justify-content:center;img{width:120px;height:120px;}}"],(function(e){return e.theme.colors.foreground}),(function(e){return e.theme.colors.foreground}),(function(e){return e.theme.colors.blueish}))},9612:function(e,t,n){var a=n(3366),o=n(7294),i=n(9),r=["outline","text","color"];t.Z=function(e){var t=e.outline,n=e.text,i=e.color,l=(0,a.Z)(e,r);return o.createElement(s,Object.assign({headerColor:i},l),o.createElement("span",{className:"outlined wow fadeInLeft"},t)," ",o.createElement("span",{className:"wow fadeInRight"},n))};var s=i.default.h2.withConfig({displayName:"OutlineHeader__Header",componentId:"sc-1banztl-0"})(['font-size:70px;font-family:"unicode_impact";display:flex;align-items:center;justify-content:center;letter-spacing:2px;color:',";.outlined{color:transparent;-webkit-text-stroke-width:0.001em;-webkit-text-stroke-color:",";margin-right:10px;}@media (max-width:767px){font-size:50px;.outlined{-webkit-text-stroke-width:0.001em;}}"],(function(e){var t=e.theme,n=e.headerColor;return n?t.colors[n]:t.colors.blueish}),(function(e){var t=e.theme,n=e.headerColor;return n?t.colors[n]:t.colors.blueish}))},7423:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(5444);function o(){return(0,a.K2)("3430196757").allContentfulRaiUsage.edges}},3361:function(e,t,n){n.r(t);var a,o=n(1880),i=n(7294),r=n(9),s=n(507),l=n(3167),c=n(9612),d=n(7423);t.default=function(){var e=(0,i.useState)("dashboards"),t=e[0],n=e[1],a=(0,d.Z)().map((function(e){return e.node})).reduce((function(e,t){return e[t.category.category]?e[t.category.category].push(t):e[t.category.category]=[t],e}),{}),o=["dashboards","dapps","earn","swap"],r=o.reduce((function(e,t){return e[t]=a[t],e}),{});return i.createElement(s.Z,{customTitle:"Tray RAI",headerStyle:{position:"absolute",width:"100%",top:"20px"},isWhiteLogo:!0,onlyBrand:!0,hasBackground:!0},i.createElement(m,null,i.createElement(c.Z,{outline:"Try",text:"RAI",color:"greenish"}),i.createElement(u,{className:"wow fadeInUp","data-wow-delay":"0.3s"},"Projects and interfaces that accept RAI"),i.createElement(x,{className:"wow fadeInUp","data-wow-delay":"0.5s"},o.map((function(e){return i.createElement(p,{key:e,className:t===e?"active":"",onClick:function(){return n(e)}},e)})))),i.createElement(f,{className:"wow fadeInUp","data-wow-delay":"0.6s"},r[t].map((function(e,t){var n={node:e};return i.createElement(l.Z,{className:"int-item",x:n,i:t,key:n.id})}))))};var m=r.default.div.withConfig({displayName:"integrations__Container",componentId:"sc-4be98h-0"})(["max-width:80vw;margin:0 auto;padding:100px 15px 0;",""],(function(e){return e.theme.mediaWidth.upToMedium(a||(a=(0,o.Z)(["\n flex-direction:column;\n max-width: 100%;\n"])))})),u=r.default.div.withConfig({displayName:"integrations__Subtitle",componentId:"sc-4be98h-1"})(["font-size:22px;text-align:center;color:",";"],(function(e){return e.theme.colors.neutral})),x=r.default.div.withConfig({displayName:"integrations__Tabs",componentId:"sc-4be98h-2"})(["display:flex;align-items:center;max-width:600px;margin:50px auto;justify-content:space-between;"]),p=r.default.div.withConfig({displayName:"integrations__TabItem",componentId:"sc-4be98h-3"})(["border-radius:25px;background:",";padding:8px 13px;min-width:120px;text-align:center;cursor:pointer;font-size:14px;text-transform:capitalize;color:",";&.active{background:",";}@media (max-width:767px){min-width:auto;}"],(function(e){return e.theme.colors.foreground}),(function(e){return e.theme.colors.neutral}),(function(e){return e.theme.colors.greenish})),f=r.default.div.withConfig({displayName:"integrations__Content",componentId:"sc-4be98h-4"})(["max-width:80vw;margin:0 auto 100px;display:flex;align-items:center;justify-content:center;.int-item{.box{margin:20px 10px;}}flex-wrap:wrap;"])},3366:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-integrations-js-023127df9e470cf14d46.js.map