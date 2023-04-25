"use strict";(self.webpackChunksip_hass_docs=self.webpackChunksip_hass_docs||[]).push([[4485],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},972:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2,title:"Add-on",tags:["Asterisk","PBX"]},l=void 0,c={unversionedId:"developers/add-on",id:"developers/add-on",title:"Add-on",description:"Here is everything you need to setup developing for the add-on. Thank you for your help with this project!",source:"@site/docs/developers/add-on.md",sourceDirName:"developers",slug:"/developers/add-on",permalink:"/sip-hass-docs/docs/developers/add-on",editUrl:"https://github.com/TECH7Fox/sip-hass-docs/edit/main/docs/developers/add-on.md",tags:[{label:"Asterisk",permalink:"/sip-hass-docs/docs/tags/asterisk"},{label:"PBX",permalink:"/sip-hass-docs/docs/tags/pbx"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Add-on",tags:["Asterisk","PBX"]},sidebar:"developersSidebar",previous:{title:"Introduction",permalink:"/sip-hass-docs/docs/developers/introduction"},next:{title:"Card",permalink:"/sip-hass-docs/docs/developers/card"}},d={},p=[{value:"About",id:"about",level:2},{value:"How to Test",id:"how-to-test",level:2},{value:"Running locally with Docker",id:"running-locally-with-docker",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here is everything you need to setup developing for the add-on. Thank you for your help with this project!"),(0,a.kt)("h2",{id:"about"},"About"),(0,a.kt)("p",null,"The Asterisk add-on is a docker container for Home Assistant that set's up a Asterisk server and configures it to use with the card."),(0,a.kt)("h2",{id:"how-to-test"},"How to Test"),(0,a.kt)("p",null,"You can test the add-on on your Home Assistant to make sure it works."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Comment out the ",(0,a.kt)("inlineCode",{parentName:"li"},"image")," option in ",(0,a.kt)("inlineCode",{parentName:"li"},"config.yaml"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml" {6-6}',title:'"config.yaml"',"{6-6}":!0},'name: Asterisk\nversion: 1.3.2\nslug: asterisk\ndescription: PBX server for SIP devices like doorbells and phones\nurl: https://github.com/TECH7Fox/Asterisk-add-on\n#image: "ghcr.io/tech7fox/{arch}-addon-asterisk"\narch:\n  - armhf\n  - armv7\n  - aarch64\n  - amd64\n  - i386\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Copy the ",(0,a.kt)("inlineCode",{parentName:"li"},"Asterisk")," folder to ",(0,a.kt)("inlineCode",{parentName:"li"},"/addons"),"."),(0,a.kt)("li",{parentName:"ul"},"Reload the repositories and install the add-on.")),(0,a.kt)("h2",{id:"running-locally-with-docker"},"Running locally with Docker"),(0,a.kt)("p",null,"The repository contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file that can be used to locally build and run a standalone version of the add-on."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Copy the example ",(0,a.kt)("inlineCode",{parentName:"li"},"json")," configuration file and set your own values:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," cp asterisk/config.json.example asterisk/config.json\n"))),(0,a.kt)("li",{parentName:"ul"},"Build a Docker image:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose build asterisk\n"))),(0,a.kt)("li",{parentName:"ul"},"Run the built image:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up asterisk\n"))),(0,a.kt)("li",{parentName:"ul"},"If you want to easily edit and test the scripts without having to rebuild the whole image, you can mount the local files from the project directory in the container.\nSee the ",(0,a.kt)("inlineCode",{parentName:"li"},"volumes:")," section for examples.")))}m.isMDXComponent=!0}}]);