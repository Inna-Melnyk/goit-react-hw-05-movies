"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[216],{9608:function(e,r,n){n.d(r,{D:function(){return o},v:function(){return i}});var t=n(5861),a=n(4687),u=n.n(a),c=n(1243),s="a3efd2dd48cf6aca9d1b3d7226cefee9";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,t.Z)(u().mark((function e(r,n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(r,{signal:n,params:{api_key:s,language:"en-US"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(r,n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie",{signal:n,params:{api_key:s,language:"en-US",query:r}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()},5713:function(e,r,n){n.d(r,{X:function(){return a}});var t=n(184),a=function(e){var r=e.children;return(0,t.jsx)("div",{style:{color:"red"},children:r})}},1216:function(e,r,n){n.r(r),n.d(r,{default:function(){return d}});var t=n(5861),a=n(9439),u=n(4687),c=n.n(u),s=n(2791),i=n(7689),o=n(9608),l=n(184),f=function(e){var r=e.reviews;return(0,l.jsx)("ul",{children:r.map((function(e){return(0,l.jsxs)("li",{children:[(0,l.jsxs)("h4",{children:["Author: ",e.author]}),(0,l.jsx)("p",{children:e.content})]},e.id)}))})},p=n(5193),v=n(5713),d=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),n=r[0],u=r[1],d=(0,s.useState)(!1),h=(0,a.Z)(d,2),x=h[0],m=h[1],w=(0,s.useState)(null),g=(0,a.Z)(w,2),k=g[0],b=g[1],j=(0,i.UO)().movieId,Z="movie/".concat(j,"/reviews"),y=(0,s.useRef)();return(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y.current&&y.current.abort(),y.current=new AbortController,e.prev=2,m(!0),b(null),e.next=7,(0,o.v)(Z,y.current.signal);case 7:r=e.sent,u(r.results),b(null),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),"ERR_CANCELED"!==e.t0.code&&b(e.t0.message);case 15:return e.prev=15,m(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,12,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z]),(0,l.jsxs)("div",{children:[x&&(0,l.jsx)(p.a,{}),k&&(0,l.jsx)(v.X,{children:k}),0!==n.length?(0,l.jsx)(f,{reviews:n}):(0,l.jsx)("p",{children:"There's no reviews yet"})]})}}}]);
//# sourceMappingURL=216.47bf0f92.chunk.js.map