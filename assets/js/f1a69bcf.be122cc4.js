"use strict";(self.webpackChunksip_hass_docs=self.webpackChunksip_hass_docs||[]).push([[5911],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(f,s(s({ref:t},c),{},{components:o})):n.createElement(f,s({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<a;u++)s[u]=o[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7995:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),s=["components"],l={sidebar_position:5,title:"Docs",tags:["Developers","Docs"]},i=void 0,u={unversionedId:"developers/docs",id:"developers/docs",title:"Docs",description:"Want to contribute to the central HASS-SIP docs? That's great! Thank you for your help!",source:"@site/docs/developers/docs.md",sourceDirName:"developers",slug:"/developers/docs",permalink:"/sip-hass-docs/docs/developers/docs",editUrl:"https://github.com/TECH7Fox/sip-hass-docs/tree/main/docs/developers/docs.md",tags:[{label:"Developers",permalink:"/sip-hass-docs/docs/tags/developers"},{label:"Docs",permalink:"/sip-hass-docs/docs/tags/docs"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Docs",tags:["Developers","Docs"]},sidebar:"developersSidebar",previous:{title:"Integration",permalink:"/sip-hass-docs/docs/developers/integration"}},c={},p=[{value:"About",id:"about",level:2},{value:"How to Build",id:"how-to-build",level:2},{value:"Online",id:"online",level:3},{value:"Local build",id:"local-build",level:3},{value:"Styling",id:"styling",level:2}],d={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Want to contribute to the central ",(0,a.kt)("strong",{parentName:"p"},"HASS-SIP docs"),"? That's great! Thank you for your help!"),(0,a.kt)("p",null,"Here is everything you should know if you want to create or change pages here."),(0,a.kt)("h2",{id:"about"},"About"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"HASS-SIP docs")," website is build using ",(0,a.kt)("strong",{parentName:"p"},"Docusaurus"),", which is a easy to use framework to create a nice-looking website from some markdown files. It can also build the website static, so we can deploy it to ",(0,a.kt)("strong",{parentName:"p"},"github pages")," which is free!"),(0,a.kt)("h2",{id:"how-to-build"},"How to Build"),(0,a.kt)("p",null,"There are 2 ways to work on the docs. We recommend to create a local build to test everything."),(0,a.kt)("h3",{id:"online"},"Online"),(0,a.kt)("p",null,"If you only want to make small changes and don't need to test, you can do that directly on Github."),(0,a.kt)("h3",{id:"local-build"},"Local build"),(0,a.kt)("p",null,"If you want to test your work, you can build locally."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clone the repository"),(0,a.kt)("li",{parentName:"ul"},"Install packages")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start docusaurus")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"This opens the page, and everytime you save a file it automaticly reloads the page too."),(0,a.kt)("h2",{id:"styling"},"Styling"),(0,a.kt)("p",null,"The pages are simple markdown files. But if you want to do something fancy, you can also use react.\nSee the ",(0,a.kt)("a",{href:"https://docusaurus.io/docs/markdown-features"},"docusaurus guides")," for more info."),(0,a.kt)("p",null,"For Asterisk ",(0,a.kt)("inlineCode",{parentName:"p"},".conf")," codeblocks, please use the ",(0,a.kt)("inlineCode",{parentName:"p"},"editorconfig")," language for the code styling. Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-editorconfig"},'``editorconfig title="pjsip_custom.conf"\n[context] ; comment\nkey=value\n``\n')),(0,a.kt)("p",null,"If you have some steps that are different for the add-on then a custom PBX like FreePBX, you can add tabs so people don't get confused."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="page.mdx"',title:'"page.mdx"'},'<Tabs groupId="pbx">\n  <TabItem value="addon" label="Add-on" default>\n    For the add-on, simply turn on <code>video_support</code> and restart.\n  </TabItem>\n  <TabItem value="custom" label="Custom PBX">\n    If you have a custom PBX, add <code>video_support=on</code> to your <b>SIP</b> endpoint. If you have something like <b>FreePBX</b>, turn on the <b>video support</b> option.\n  </TabItem>\n</Tabs>\n')),(0,a.kt)("p",null,"More about tabs info ",(0,a.kt)("a",{href:"https://docusaurus.io/docs/markdown-features/tabs"},"here"),"."))}m.isMDXComponent=!0}}]);