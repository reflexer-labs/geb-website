"use strict";(self.webpackChunkgeb_website=self.webpackChunkgeb_website||[]).push([[186],{6179:function(e,t,n){var a=n(7294),o=n(3494);t.Z=e=>{let{outline:t,text:n,color:o,...r}=e;return a.createElement(i,Object.assign({headerColor:o},r,{isFireFox:"undefined"!=typeof InstallTrigger}),a.createElement("span",{className:"outlined wow fadeInLeft"},t)," ",a.createElement("span",{className:"wow fadeInRight"},n))};const i=o.default.h2.withConfig({displayName:"OutlineHeader__Header",componentId:"sc-1banztl-0"})(['font-size:70px;font-family:"unicode_impact";display:flex;align-items:center;justify-content:center;letter-spacing:2px;color:',";.outlined{color:transparent;-webkit-text-stroke-width:0.03em;-webkit-text-stroke-color:",";margin-right:10px;}@media (max-width:767px){font-size:50px;.outlined{-webkit-text-stroke-width:0.03em;}}"],(e=>{let{theme:t,headerColor:n}=e;return n?t.colors[n]:t.colors.blueish}),(e=>{let{theme:t,headerColor:n}=e;return n?t.colors[n]:t.colors.blueish}))},3016:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(1880),o=n(7294),i=n(3494),r=n(3488);const s=()=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%"},o.createElement("line",{className:"top",x1:"0",y1:"0",x2:"900",y2:"0"}),o.createElement("line",{className:"left",x1:"0",y1:"420",x2:"0",y2:"-840"}),o.createElement("line",{className:"bottom",x1:"300",y1:"420",x2:"-600",y2:"420"}),o.createElement("line",{className:"right",x1:"300",y1:"0",x2:"300",y2:"1260"}));var l=e=>{let{x:t,i:n,...a}=e;return o.createElement(c,Object.assign({className:"wow fadeInUp","data-wow-delay":.4+.3*(n+1)+"s"},a),o.createElement("a",{className:"customLink",href:t.node.link.link,target:"_blank",rel:"noreferrer"},o.createElement("div",{className:"box"},o.createElement(s,null),o.createElement("div",{className:"int-image"},o.createElement("img",{src:t.node.image.file.url,alt:t.node.title.title})),o.createElement("h3",null,t.node.title.title),o.createElement("span",null,t.node.content.content))))};const c=i.default.div.withConfig({displayName:"IntegrationItem__Container",componentId:"sc-70q6l4-0"})([".customLink{color:inherit;text-decoration:none;}.box{width:300px;height:420px;position:relative;display:inline-block;margin:0px 30px 20px;cursor:pointer;background:",';color:#2c3e50;padding:20px;text-align:center;box-shadow:inset 0 0 0 3px #2c3e50;-webkit-transition:background 0.4s 0.5s;transition:background 0.4s 0.5s;@media (max-width:1150px) and (min-width:1024px){margin:0px 5px 20px;}@media (max-width:500px){margin:0 0 20px;}}.box:hover{background:rgba(255,255,255,0);-webkit-transition-delay:0s;transition-delay:0s;}.box span{display:block;font-weight:400;letter-spacing:1px;font-size:15px;padding:5px;line-height:23px;}.box h3{font-weight:bold;font-family:"inter-medium";}.box h3,.box span{-webkit-transition:color 0.4s 0.5s;transition:color 0.4s 0.5s;}.box:hover h3,.box:hover span{color:#fff;-webkit-transition-delay:0s;transition-delay:0s;}.box svg{position:absolute;top:0;left:0;fill:blue;}.box svg line{stroke-width:3;stroke:',";fill:none;-webkit-transition:all 0.8s ease-in-out;transition:all 0.8s ease-in-out;}.box:hover svg line{-webkit-transition-delay:0.1s;transition-delay:0.1s;stroke:",";}.box svg line.top,.box svg line.bottom{stroke-dasharray:330 240;}.box svg line.left,.box svg line.right{stroke-dasharray:455 350;}.box{color:#fff;box-shadow:none;-webkit-transition:background 0.3s;transition:background 0.3s;}.box:hover{background:rgba(0,0,0,0.4);}.box h3,.box span{-webkit-transition:none;transition:none;}.box svg line{-webkit-transition:all 0.5s;transition:all 0.5s;}.box:hover svg line{stroke-width:10;-webkit-transition-delay:0s;transition-delay:0s;}.box:hover svg line.top{-webkit-transform:translateX(-300px);transform:translateX(-300px);}.box:hover svg line.bottom{-webkit-transform:translateX(300px);transform:translateX(300px);}.box:hover svg line.left{-webkit-transform:translateY(420px);transform:translateY(420px);}.box:hover svg line.right{-webkit-transform:translateY(-420px);transform:translateY(-420px);}.int-image{width:175px;height:175px;margin:20px auto 30px auto;display:flex;align-items:center;justify-content:center;img{width:120px;height:120px;}}"],(e=>e.theme.colors.foreground),(e=>e.theme.colors.foreground),(e=>e.theme.colors.blueish));var d,m=n(6179),p=n(1082);var x=()=>{const{0:e,1:t}=(0,o.useState)("dashboards"),n=function(){const{allContentfulRaiUsage:e}=(0,p.K2)("3430196757");return e.edges}().map((e=>e.node)).reduce(((e,t)=>(e[t.category.category]?e[t.category.category].push(t):e[t.category.category]=[t],e)),{}),a=["dashboards","dapps","earn","swap","DAO","spend"],i=a.reduce(((e,t)=>(e[t]=n[t],e)),{});return o.createElement(r.Z,{customTitle:"Try RAI",headerStyle:{position:"absolute",width:"100%",top:"20px"},isWhiteLogo:!0,onlyBrand:!0,hasBackground:!0},o.createElement(g,null,o.createElement(m.Z,{outline:"Try",text:"RAI",color:"greenish"}),o.createElement(h,{className:"wow fadeInUp","data-wow-delay":"0.3s"},"Projects and interfaces that accept RAI"),o.createElement(b,{className:"wow fadeInUp","data-wow-delay":"0.5s"},a.map((n=>o.createElement(u,{key:n,className:e===n?"active":"",onClick:()=>t(n)},n))))),o.createElement(w,{className:"wow fadeInUp","data-wow-delay":"0.6s"},i[e].map(((e,t)=>{const n={node:e};return o.createElement(l,{className:"int-item",x:n,i:t,key:e.id})}))))};const g=i.default.div.withConfig({displayName:"integrations__Container",componentId:"sc-4be98h-0"})(["max-width:80vw;margin:0 auto;padding:100px 15px 0;",""],(e=>{let{theme:t}=e;return t.mediaWidth.upToMedium(d||(d=(0,a.Z)(["\n flex-direction:column;\n max-width: 100%;\n"])))})),h=i.default.div.withConfig({displayName:"integrations__Subtitle",componentId:"sc-4be98h-1"})(["font-size:22px;text-align:center;color:",";"],(e=>e.theme.colors.neutral)),b=i.default.div.withConfig({displayName:"integrations__Tabs",componentId:"sc-4be98h-2"})(["display:flex;align-items:center;margin:50px auto;justify-content:center;@media (max-width:767px){flex-wrap:wrap;}"]),u=i.default.div.withConfig({displayName:"integrations__TabItem",componentId:"sc-4be98h-3"})(["border-radius:25px;background:",";padding:8px 13px;min-width:120px;margin:10px;text-align:center;cursor:pointer;font-size:14px;text-transform:capitalize;color:",";&.active{background:",";}@media (max-width:767px){min-width:auto;}"],(e=>e.theme.colors.foreground),(e=>e.theme.colors.neutral),(e=>e.theme.colors.greenish)),w=i.default.div.withConfig({displayName:"integrations__Content",componentId:"sc-4be98h-4"})(["max-width:80vw;margin:0 auto 100px;display:flex;align-items:center;justify-content:center;.int-item{.box{margin:20px 10px;}}flex-wrap:wrap;"])}}]);
//# sourceMappingURL=component---src-pages-integrations-js-075d2f2b25c14e5d3fb8.js.map