"use strict";(self.webpackChunksip_hass_docs=self.webpackChunksip_hass_docs||[]).push([[3204],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8141:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:1,title:"Text-to-Speech",tags:["TTS","Google","Send Action Service"]},l=void 0,c={unversionedId:"integration/guides/text-to-speech",id:"integration/guides/text-to-speech",title:"Text-to-Speech",description:"In this guide, I will show you how to setup a service call that can call a SIP endpoint, say something and hangup.",source:"@site/docs/integration/guides/text-to-speech.md",sourceDirName:"integration/guides",slug:"/integration/guides/text-to-speech",permalink:"/sip-hass-docs/docs/integration/guides/text-to-speech",editUrl:"https://github.com/TECH7Fox/sip-hass-docs/edit/main/docs/integration/guides/text-to-speech.md",tags:[{label:"TTS",permalink:"/sip-hass-docs/docs/tags/tts"},{label:"Google",permalink:"/sip-hass-docs/docs/tags/google"},{label:"Send Action Service",permalink:"/sip-hass-docs/docs/tags/send-action-service"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Text-to-Speech",tags:["TTS","Google","Send Action Service"]},sidebar:"integrationSidebar",previous:{title:"Guides",permalink:"/sip-hass-docs/docs/integration/guides"},next:{title:"Services",permalink:"/sip-hass-docs/docs/integration/services"}},u={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Dialplan",id:"dialplan",level:2},{value:"Service",id:"service",level:2}],d={toc:p};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this guide, I will show you how to setup a service call that can call a SIP endpoint, say something and hangup."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"For this guide you will need the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Googletts",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Preinstalled in the add-on"),(0,a.kt)("li",{parentName:"ul"},"If your not using the add-on, you can install it ",(0,a.kt)("a",{href:"https://zaf.github.io/asterisk-googletts"},"here"),"."))),(0,a.kt)("li",{parentName:"ul"},"Asterisk integration installed")),(0,a.kt)("h2",{id:"dialplan"},"Dialplan"),(0,a.kt)("p",null,"First, let's make a dialplan extension."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-editorconfig",metastring:'title="extensions.conf"',title:'"extensions.conf"'},'[speech]                                       ; The context\nexten => 123,1,Answer()                        ; Answer the call\nexten => 123,n,agi(googletts.agi,"${TEXT}",en) ; Execute the googletts agi script with the TEXT variable\n')),(0,a.kt)("h2",{id:"service"},"Service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Service"',title:'"Service"'},"service: asterisk.send_action\ndata:\n    action: Originate\n    parameters:\n        channel: PJSIP/100            # The device it will call\n        context: speech               # The context we created in the dialplan\n        exten: '123'                  # The extension inside that context\n        priority: '1'                 # Priority of the call\n        caller_id: 'Home Assistant'   # The callerID it calls as\n        timeout: 60                   # Time until giving up\n        variables: TEXT: Hello world! # Variables that you can use in the dialplan\n")))}g.isMDXComponent=!0}}]);