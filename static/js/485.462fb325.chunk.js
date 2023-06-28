"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{9608:function(n,e,t){t.d(e,{D:function(){return u},v:function(){return s}});var r=t(5861),a=t(4687),i=t.n(a),c=t(1243),o="a3efd2dd48cf6aca9d1b3d7226cefee9";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(e,{signal:t,params:{api_key:o,language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie",{signal:t,params:{api_key:o,language:"en-US",query:e}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},5713:function(n,e,t){t.d(e,{X:function(){return a}});var r=t(184),a=function(n){var e=n.children;return(0,r.jsx)("div",{children:e})}},5545:function(n,e,t){t.d(e,{O:function(){return v}});var r,a,i,c,o,s=t(7689),u=t(168),d=t(7686),p=t(1087),l=d.Z.ul(r||(r=(0,u.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 24px;\n  @media screen and (max-width: 458px) {\n    gap: 12px;\n  }\n"]))),h=d.Z.li(a||(a=(0,u.Z)(["\n  max-width: 300px;\n  border: none;\n  border-radius: 8px;\n  padding: 0;\n  margin: 0;\n  background-color: #ebbfaf;\n  overflow: hidden;\n  transition: transform 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n  &:hover {\n    transform: scale(1.02);\n  }\n  @media screen and (max-width: 458px) {\n    max-width: 170px;\n    max-height: 350px;\n  }\n"]))),f=(0,d.Z)(p.rU)(i||(i=(0,u.Z)(["\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n  &:hover {\n    color: orangered;\n  }\n"]))),x=d.Z.img(c||(c=(0,u.Z)(["\n  display: block;\n  height: auto;\n  max-height: 420px;\n  max-width: 100%;\n  @media screen and (max-width: 458px) {\n    max-width: 170px;\n    max-height: 250px;\n    object-fit: cover;\n  }\n"]))),m=d.Z.h3(o||(o=(0,u.Z)(["\n  font-size: 14px;\n  line-height: 1.30;\n  padding: 12px;\n  margin:0;\n"]))),g=t(184),v=function(n){var e=n.data,t=(0,s.TH)();return(0,g.jsx)(l,{children:e.map((function(n){return console.log(n),(0,g.jsx)(h,{children:(0,g.jsxs)(f,{to:"/movies"===t.pathname?"".concat(n.id):"movies/".concat(n.id),state:{from:t},children:[n.poster_path?(0,g.jsx)(x,{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title||n.name,width:"300"}):(0,g.jsx)(x,{src:"https://cringemdb.com/img/movie-poster-placeholder.png",alt:"placeholder",width:"300"}),(0,g.jsx)(m,{children:n.title?n.title:n.name})]})},n.id)}))})}},3485:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,a=t(5861),i=t(9439),c=t(4687),o=t.n(c),s=t(2791),u=t(9608),d=t(5193),p=t(5545),l=t(5713),h=t(168),f=t(7686).Z.h1(r||(r=(0,h.Z)(["\n  font-size: 28px;\n  line-height: 1.3;\n  padding: 6px;\n  margin: 0 0 30px;\n  @media screen and (max-width: 665px) {\n    text-align: center;\n  }\n"]))),x=t(184),m=function(){var n=(0,s.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],c=(0,s.useState)(!1),h=(0,i.Z)(c,2),m=h[0],g=h[1],v=(0,s.useState)(null),w=(0,i.Z)(v,2),b=w[0],Z=w[1],k=(0,s.useRef)();return(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return k.current&&k.current.abort(),k.current=new AbortController,n.prev=2,g(!0),Z(null),n.next=7,(0,u.v)("trending/all/day",k.current.signal);case 7:e=n.sent,r(e.results),Z(null),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),"ERR_CANCELED"!==n.t0.code&&Z(n.t0.message);case 15:return n.prev=15,g(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[2,12,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{children:"Trending today"}),m&&(0,x.jsx)(d.a,{}),b&&(0,x.jsx)(l.X,{children:b}),!m&&t.length>0&&(0,x.jsx)(p.O,{data:t})]})}}}]);
//# sourceMappingURL=485.462fb325.chunk.js.map