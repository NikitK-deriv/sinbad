"use strict";(self.webpackChunksinbad_dev=self.webpackChunksinbad_dev||[]).push([[511],{7059:function(e,t,n){n.d(t,{L:function(){return g},M:function(){return x},P:function(){return b},S:function(){return A},_:function(){return s},a:function(){return o},b:function(){return d},g:function(){return c},h:function(){return l}});var r=n(257),a=(n(2369),n(5697)),i=n.n(a);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function d(e,t,n,r,a){return void 0===a&&(a={}),o({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function c(e,t,n,r,a,i,s,l){var d={};i&&(d.backgroundColor=i,"fixed"===n?(d.width=r,d.height=a,d.backgroundColor=i,d.position="relative"):("constrained"===n||"fullWidth"===n)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),s&&(d.objectFit=s),l&&(d.objectPosition=l);var c=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return c}var u,f=["children"],p=function(e){var t=e.layout,n=e.width,a=e.height;return"fullWidth"===t?r.default.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.default.createElement("div",{style:{maxWidth:n,display:"block"}},r.default.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,n=s(e,f);return r.default.createElement(r.Fragment,null,r.default.createElement(p,o({},n)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,n=e.srcSet,a=e.loading,i=e.alt,l=void 0===i?"":i,d=e.shouldLoad,c=s(e,m);return r.default.createElement("img",o({},c,{decoding:"async",loading:a,src:d?t:void 0,"data-src":d?void 0:t,srcSet:d?n:void 0,"data-srcset":d?void 0:n,alt:l}))},v=function(e){var t=e.fallback,n=e.sources,a=void 0===n?[]:n,i=e.shouldLoad,l=void 0===i||i,d=s(e,h),c=d.sizes||(null==t?void 0:t.sizes),u=r.default.createElement(y,o({},d,t,{sizes:c,shouldLoad:l}));return a.length?r.default.createElement("picture",null,a.map((function(e){var t=e.media,n=e.srcSet,a=e.type;return r.default.createElement("source",{key:t+"-"+a+"-"+n,type:a,media:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,sizes:c})})),u):u};y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},v.displayName="Picture",v.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var w=["fallback"],b=function(e){var t=e.fallback,n=s(e,w);return t?r.default.createElement(v,o({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.default.createElement("div",o({},n))};b.displayName="Placeholder",b.propTypes={fallback:a.string,sources:null==(u=v.propTypes)?void 0:u.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var x=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement(v,o({},e)),r.default.createElement("noscript",null,r.default.createElement(v,o({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=v.propTypes;var C,_,L=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},E={image:i().object.isRequired,alt:L},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],I=new Set,S=function(e){var t=e.as,a=void 0===t?"div":t,i=e.image,d=e.style,c=e.backgroundColor,u=e.className,f=e.class,p=e.onStartLoad,g=e.onLoad,m=e.onError,h=s(e,k),y=i.width,v=i.height,w=i.layout,b=function(e,t,n){var r={},a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}(y,v,w),x=b.style,L=b.className,E=s(b,j),S=(0,r.useRef)(),T=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);f&&(u=f);var N=function(e,t,n){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,v);return(0,r.useEffect)((function(){C||(C=n.e(698).then(n.bind(n,2698)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return _=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,r=S.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void I.add(T)):_&&I.has(T)?void 0:(C.then((function(n){var r=n.renderImageToString,a=n.swapPlaceholderImage;S.current&&(S.current.innerHTML=r(o({isLoading:!0,isLoaded:I.has(T),image:i},h)),I.has(T)||(e=requestAnimationFrame((function(){S.current&&(t=a(S.current,T,I,d,p,g,m))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){I.has(T)&&_&&(S.current.innerHTML=_(o({isLoading:I.has(T),isLoaded:I.has(T),image:i},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(a,o({},E,{style:o({},x,d,{backgroundColor:c}),className:L+(u?" "+u:""),ref:S,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},T=(0,r.memo)((function(e){return e.image?(0,r.createElement)(S,e):null}));T.propTypes=E,T.displayName="GatsbyImage";var N,O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],z=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},q=new Set(["fixed","fullWidth","constrained"]),W={src:i().string.isRequired,alt:L,width:z,height:z,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!q.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(N=T,function(e){var t=e.src,n=e.__imageData,a=e.__error,i=s(e,O);return a&&console.warn(a),n?r.default.createElement(N,o({image:n},i)):(console.warn("Image not loaded",t),null)});A.displayName="StaticImage",A.propTypes=W},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,r=!1,a=0;a<e.length;a++){var i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,r=n,n=!0,a++):n&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},2934:function(e,t,n){n.d(t,{Gh:function(){return o},jL:function(){return c},qc:function(){return s},xO:function(){return l},zO:function(){return d}});var r=n(1074),a=n(8467),i=n(655),o=r.default.div.withConfig({displayName:"style__HeaderTitle",componentId:"sc-1vdjz8b-0"})(["font-size:3.4rem;line-height:58px;color:",";padding-left:",";padding-right:",";font-family:",";"],(function(e){return e.color||"var(--color-black-1)"}),(function(e){return e.padding_left||"0px"}),(function(e){return e.padding_right||"0px"}),(function(e){return e.font_family||"Maven Pro"})),s=r.default.footer.withConfig({displayName:"style__DefaultFooter",componentId:"sc-1vdjz8b-1"})(["background-color:var(--color-blue-1);color:white;width:100%;display:flex;justify-content:center;@media ","{padding-bottom:6rem;@media ","{padding-bottom:0;}}"],i.Z.mobileL,i.Z.tabletL),l=r.default.div.withConfig({displayName:"style__SocialWrapper",componentId:"sc-1vdjz8b-2"})(["align-items:center;height:175px;background:var(--color-blue-1);color:white;display:flex;justify-content:space-between;@media ","{display:flex;flex-direction:column;justify-content:center;margin:3rem 0 1rem;a:first-child{img{margin-left:0;}}}"],i.Z.tabletL),d=r.default.div.withConfig({displayName:"style__DisclaimerWrapper",componentId:"sc-1vdjz8b-3"})(["width:100%;height:100px;background:var(--color-blue-1);color:white;border-top:1px solid gray;display:flex;"]),c=((0,r.default)(a.Z).withConfig({displayName:"style__PagesWrapper",componentId:"sc-1vdjz8b-4"})(["align-items:center;color:white;display:flex;justify-content:space-between;width:100%;"]),r.default.div.withConfig({displayName:"style__ContainerWrapper",componentId:"sc-1vdjz8b-5"})(["display:flex;width:90%;justify-content:center;overflow:hidden;max-width:1200px;"]))},8467:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(5785);var a,i,o=n(1074),s=n(655),l=Object.keys(s.d).sort((function(e,t){return s.d[t]-s.d[e]})).reduce((function(e,t){return e[t]=function(){return(0,o.css)(["@media (max-width:","px){",";}"],s.d[t],o.css.apply(void 0,arguments))},e}),{}),d=(i=function(e){var t=e.jc,n=e.ai,r=e.fw,a=e.fd;return(0,o.css)(["justify-content:",";align-items:",";flex-wrap:",";flex-direction:",";"],t,n,r,a)},function(e){return Object.keys(l).reduce((function(t,n){if(!e[n])return t;var o,s,d=l[n](a||(o=["        \n        ","\n        "],s||(s=o.slice(0)),o.raw=s,a=o),i(e[n]));return[].concat((0,r.Z)(t),[d])}),[])}),c=o.default.div.withConfig({displayName:"flex__Box",componentId:"sc-1e3fxt7-0"})(["width:",";height:",";min-height:",";max-width:",";position:",";background:",";",""],(function(e){return e.width||""}),(function(e){return e.height||""}),(function(e){return e.min_height||""}),(function(e){return e.max_width||""}),(function(e){return e.position||""}),(function(e){return e.background||e.bg?e.background||e.bg:""}),d),u=(0,o.default)(c).withConfig({displayName:"flex__Flex",componentId:"sc-1e3fxt7-1"})(["display:flex;width:",";height:",";flex-wrap:",";justify-content:",";align-items:",";flex-direction:",";@media ","{flex-direction:",";align-items:",";justify-content:",";flex-wrap:",";}",""],(function(e){return e.width||"100%"}),(function(e){return e.height||"100%"}),(function(e){return e.wrap||e.fw?e.wrap||e.fw:""}),(function(e){return e.jc||"center"}),(function(e){return e.ai||""}),(function(e){return e.direction||e.fd?e.direction||e.fd:""}),s.Z.tablet,(function(e){return e.tablet_direction||""}),(function(e){return e.tablet_ai||""}),(function(e){return e.tablet_jc||""}),(function(e){return e.tablet_fw}),d)}}]);
//# sourceMappingURL=c442489ce85d0481e0457c26d3d7e4dab04aa424-8f96b4b06cf577426269.js.map