"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var n=a(861),r=a(439),s=a(757),i=a.n(s),c=a(791),o=a(87),l=a(689),u=a(253),_="MovieDetails_wrapper__YMWLn",m="MovieDetails_btn__7L5IF",p="MovieDetails_title__cUGs9",d="MovieDetails_text__RHcc4",v="MovieDetails_img__uOAom",f="MovieDetails_list__dbNMP",h="MovieDetails_link__U+v+7",g="MovieDetails_wrapper_img__CAo9V",x="MovieDetails_wrapper_text__7gv05",j=a(184);var k=function(){var e,t=(0,c.useState)([]),a=(0,r.Z)(t,2),s=a[0],k=a[1],w=(0,c.useState)([]),N=(0,r.Z)(w,2),b=N[0],M=N[1],Z=(0,c.useState)(null),y=(0,r.Z)(Z,2),D=y[0],U=y[1],C=(0,l.UO)().id,S=(0,l.s0)(),L=(null===(e=(0,l.TH)().state)||void 0===e?void 0:e.from)||"/";return(0,c.useEffect)((function(){if(C){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Vm)(Number(C));case 3:t=e.sent,k(t.data),M(t.data.genres),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),U(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[C,D]),(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{className:_,children:[(0,j.jsx)("button",{className:m,onClick:function(){return S(L)},children:"Go back"}),(0,j.jsxs)("div",{className:g,children:[s.poster_path&&(0,j.jsx)("img",{className:v,src:"https://image.tmdb.org/t/p/w500/".concat(s.poster_path),alt:s.title,width:"200"}),(0,j.jsxs)("div",{className:x,children:[(0,j.jsx)("h2",{className:p,children:s.title}),(0,j.jsx)("p",{className:d,children:s.overview}),(0,j.jsx)("p",{className:d,children:s.popularity}),(0,j.jsx)("p",{className:p,children:"Genres:"}),(0,j.jsx)("ul",{children:b.map((function(e){var t=e.id,a=e.name;return(0,j.jsx)("li",{className:f,children:(0,j.jsx)("p",{className:d,children:a})},t)}))})]})]}),(0,j.jsx)(o.OL,{className:h,state:{from:L},to:"cast",children:"Cast"}),(0,j.jsx)(o.OL,{className:h,state:{from:L},to:"reviews",children:"Reviews"}),(0,j.jsx)(l.j3,{})]})})}},253:function(e,t,a){a.d(t,{Cr:function(){return l},Vm:function(){return i},Zg:function(){return c},dd:function(){return s},k7:function(){return o}});var n=a(912);n.Z.defaults.baseURL="https://api.themoviedb.org/3/";var r="6c57fb02719926393bb8c06aa147886f",s=function(e){return n.Z.get("/search/movie?api_key=".concat(r,"&query=").concat(e,"&page=1&include_adult=false"))},i=function(e){return n.Z.get("/movie/".concat(e,"?api_key=").concat(r,"&language=en-US"))},c=function(){return n.Z.get("/trending/movie/day?api_key=".concat(r))},o=function(e){return n.Z.get("/movie/".concat(e,"/credits?api_key=").concat(r,"&language=en-US"))},l=function(e){return n.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(r,"&language=en-US&page=1"))}}}]);
//# sourceMappingURL=135.6aab7882.chunk.js.map