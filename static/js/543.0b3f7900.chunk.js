"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[543],{9608:function(n,e,t){t.d(e,{D:function(){return u},v:function(){return s}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243),c="a3efd2dd48cf6aca9d1b3d7226cefee9";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get(e,{signal:t,params:{api_key:c,language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie",{signal:t,params:{api_key:c,language:"en-US",query:e}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},5713:function(n,e,t){t.d(e,{X:function(){return a}});var r=t(184),a=function(n){var e=n.children;return(0,r.jsx)("div",{children:e})}},5545:function(n,e,t){t.d(e,{O:function(){return v}});var r,a,i,o,c,s=t(7689),u=t(168),p=t(7686),d=t(1087),l=p.Z.ul(r||(r=(0,u.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 24px;\n  @media screen and (max-width: 458px) {\n    gap: 12px;\n  }\n"]))),h=p.Z.li(a||(a=(0,u.Z)(["\n  max-width: 300px;\n  border: none;\n  border-radius: 8px;\n  padding: 0;\n  margin: 0;\n  background-color: #ebbfaf;\n  overflow: hidden;\n  transition: transform 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n  &:hover {\n    transform: scale(1.02);\n  }\n  @media screen and (max-width: 458px) {\n    max-width: 170px;\n    max-height: 350px;\n  }\n"]))),x=(0,p.Z)(d.rU)(i||(i=(0,u.Z)(["\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n  &:hover {\n    color: orangered;\n  }\n"]))),f=p.Z.img(o||(o=(0,u.Z)(["\n  display: block;\n  height: auto;\n  max-height: 420px;\n  max-width: 100%;\n  @media screen and (max-width: 458px) {\n    max-width: 170px;\n    max-height: 250px;\n    object-fit: cover;\n  }\n"]))),m=p.Z.h3(c||(c=(0,u.Z)(["\n  font-size: 14px;\n  line-height: 1.30;\n  padding: 12px;\n  margin:0;\n"]))),g=t(184),v=function(n){var e=n.data,t=(0,s.TH)();return(0,g.jsx)(l,{children:e.map((function(n){return console.log(n),(0,g.jsx)(h,{children:(0,g.jsxs)(x,{to:"/movies"===t.pathname?"".concat(n.id):"movies/".concat(n.id),state:{from:t},children:[n.poster_path?(0,g.jsx)(f,{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title||n.name,width:"300"}):(0,g.jsx)(f,{src:"https://cringemdb.com/img/movie-poster-placeholder.png",alt:"placeholder",width:"300"}),(0,g.jsx)(m,{children:n.title?n.title:n.name})]})},n.id)}))})}},7543:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,i,o=t(5861),c=t(9439),s=t(4687),u=t.n(s),p=t(2791),d=t(1087),l=t(9608),h=t(168),x=t(7686),f=t(8617),m=x.Z.div(r||(r=(0,h.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),g=x.Z.input(a||(a=(0,h.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),v=(0,x.Z)(f.G4C)(i||(i=(0,h.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 6px;\n"]))),b=t(184),w=function(n){var e=n.value,t=n.onChange;return(0,b.jsxs)(m,{children:[(0,b.jsx)(v,{}),(0,b.jsx)(g,{type:"text",value:e,onChange:function(n){return t(n.target.value)}})]})},Z=t(5545),j=t(5193),k=t(5713),y=function(){var n,e=(0,p.useState)([]),t=(0,c.Z)(e,2),r=t[0],a=t[1],i=(0,p.useState)(!1),s=(0,c.Z)(i,2),h=s[0],x=s[1],f=(0,p.useState)(null),m=(0,c.Z)(f,2),g=m[0],v=m[1],y=(0,d.lr)(),C=(0,c.Z)(y,2),_=C[0],S=C[1],E=null!==(n=_.get("query"))&&void 0!==n?n:"",R=(0,p.useRef)();return(0,p.useEffect)((function(){var n=function(){var n=(0,o.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return R.current&&R.current.abort(),R.current=new AbortController,n.prev=2,x(!0),v(null),n.next=7,(0,l.D)(E,R.current.signal);case 7:e=n.sent,a(e),v(null),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),"ERR_CANCELED"!==n.t0.code&&v(n.t0.message);case 15:return n.prev=15,x(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[2,12,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}),[E]),(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{children:"Find your movie!"}),h&&(0,b.jsx)(j.a,{}),g&&(0,b.jsx)(k.X,{children:g})," ",(0,b.jsx)(w,{value:E,onChange:function(n){S(""!==n?{query:n}:{})}}),!h&&0!==r.length&&(0,b.jsx)(Z.O,{data:r})," "]})}}}]);
//# sourceMappingURL=543.0b3f7900.chunk.js.map