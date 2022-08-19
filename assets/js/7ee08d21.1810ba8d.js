"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2496],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=l(r),f=o,m=y["".concat(i,".").concat(f)]||y[f]||u[f]||p;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<p;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},48141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const p={sidebar_label:"ConsoleMessageType"},a="ConsoleMessageType type",s={unversionedId:"api/puppeteer.consolemessagetype",id:"version-16.2.0/api/puppeteer.consolemessagetype",title:"ConsoleMessageType type",description:"The supported types for console messages.",source:"@site/versioned_docs/version-16.2.0/api/puppeteer.consolemessagetype.md",sourceDirName:"api",slug:"/api/puppeteer.consolemessagetype",permalink:"/api/puppeteer.consolemessagetype",draft:!1,tags:[],version:"16.2.0",frontMatter:{sidebar_label:"ConsoleMessageType"},sidebar:"sidebar",previous:{title:"ConsoleMessageLocation.url",permalink:"/api/puppeteer.consolemessagelocation.url"},next:{title:"ContinueRequestOverrides.headers",permalink:"/api/puppeteer.continuerequestoverrides.headers"}},i={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consolemessagetype-type"},"ConsoleMessageType type"),(0,o.kt)("p",null,"The supported types for console messages."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type ConsoleMessageType =\n  | 'log'\n  | 'debug'\n  | 'info'\n  | 'error'\n  | 'warning'\n  | 'dir'\n  | 'dirxml'\n  | 'table'\n  | 'trace'\n  | 'clear'\n  | 'startGroup'\n  | 'startGroupCollapsed'\n  | 'endGroup'\n  | 'assert'\n  | 'profile'\n  | 'profileEnd'\n  | 'count'\n  | 'timeEnd'\n  | 'verbose';\n")))}u.isMDXComponent=!0}}]);