"use strict";(self.webpackChunksip_hass_docs=self.webpackChunksip_hass_docs||[]).push([[1049],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:1,title:"Introduction"},c=void 0,u={unversionedId:"integration/introduction",id:"integration/introduction",title:"Introduction",description:"The Asterisk integration detects your PJSIP and SIP extensions and creates devices for each, with sensors to trigger automations with. It also includes services like hangup and originate.",source:"@site/docs/integration/introduction.md",sourceDirName:"integration",slug:"/integration/introduction",permalink:"/sip-hass-docs/docs/integration/introduction",editUrl:"https://github.com/TECH7Fox/sip-hass-docs/edit/main/docs/integration/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"integrationSidebar",next:{title:"Settings",permalink:"/sip-hass-docs/docs/integration/settings"}},l={},p=[{value:"Goal",id:"goal",level:2},{value:"Features",id:"features",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Asterisk integration detects your ",(0,o.kt)("strong",{parentName:"p"},"PJSIP")," and ",(0,o.kt)("strong",{parentName:"p"},"SIP")," extensions and creates devices for each, with sensors to trigger automations with. It also includes services like ",(0,o.kt)("inlineCode",{parentName:"p"},"hangup")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"originate"),"."),(0,o.kt)("h2",{id:"goal"},"Goal"),(0,o.kt)("p",null,"The integration is designed to automate your ",(0,o.kt)("strong",{parentName:"p"},"Asterisk server")," using ",(0,o.kt)("strong",{parentName:"p"},"Home Assistant"),"."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"PJSIP")," / ",(0,o.kt)("strong",{parentName:"li"},"SIP")," detection"),(0,o.kt)("li",{parentName:"ul"},"Callee sensor"),(0,o.kt)("li",{parentName:"ul"},"Extension status sensor"),(0,o.kt)("li",{parentName:"ul"},"Server device"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hangup")," service"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Originate")," service")))}f.isMDXComponent=!0}}]);