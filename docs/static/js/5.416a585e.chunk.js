(this.webpackJsonpstar_wars_explorer=this.webpackJsonpstar_wars_explorer||[]).push([[5],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"fetchPeople",(function(){return l})),n.d(t,"fetchPlanets",(function(){return i})),n.d(t,"fetchMovies",(function(){return u}));var a=n(122),r=n.n(a),o=["1","2","3","4","5","6","7"],c=function(e){return o.map((function(t){return function(n){fetch("https://swapi.co/api/".concat(e,"/").concat(t,"/"),{method:"GET",mode:"cors",cache:"default",credentials:"omit",headers:{"Content-Type":"application/json"},redirect:"error",referrerPolicy:"no-referrer"}).then((function(e){return function(e){return e.ok||console.error(e.statusText),e.json()}(e)})).then((function(e,t){t?console.error(t):n(null,e)}))}}))},l=function(){return function(e){r()(c("people"),(function(t,n){t&&console.error(t),e({type:"fetch_people",payload:n})}))}},i=function(){return function(e){r()(c("planets"),(function(t,n){t&&console.error(t),e({type:"fetch_planets",payload:n})}))}},u=function(){return function(e){r()(c("films"),(function(t,n){t&&console.error(t),e({type:"fetch_movies",payload:n})}))}}},119:function(e,t,n){"use strict";t.a=function(e){return{people:e.people,planets:e.planets,movies:e.movies}}},120:function(e,t,n){"use strict";var a=n(46),r=n(0),o=n.n(r),c=n(105),l=n(112),i=n(117),u=n(113),s=o.a.lazy((function(){return n.e(7).then(n.bind(null,128))})),p=Object(c.a)((function(e){return{root:{width:"100%",marginTop:"64px",padding:"0",backgroundColor:e.palette.background.paper},margin:{marginRight:"15px"}}}));t.a=function(e){var t=p(),n=Object(r.useState)(!1),c=Object(a.a)(n,2),f=c[0],m=c[1],d=Object(r.useState)(null),h=Object(a.a)(d,2),v=h[0],b=h[1],y=e.avatar,g=function(){m(!f)},E=e.itemTitles.map((function(n,a){return o.a.createElement("div",{key:n,onClick:function(){return t=e.modalData[a],g(),void b(t);var t}},o.a.createElement(i.a,{button:!0,divider:!0},o.a.createElement(y,{className:t.margin}),o.a.createElement(u.a,{primary:n})))}));return o.a.createElement(o.a.Fragment,null,f&&o.a.createElement(s,{modalData:v,closeModal:g}),o.a.createElement(l.a,{component:"nav",className:t.root,"aria-label":"mailbox folders"},E))}},171:function(e,t,n){"use strict";var a=n(32);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(38)).default)(r.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle");t.default=o},177:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(45),c=n(118),l=n(119),i=n(120),u=n(24),s=n(171),p=n.n(s);t.default=Object(o.b)(l.a,c)((function(e){Object(a.useEffect)((function(){e.people||e.fetchPeople()}),[e]);var t=e.people?e.people.map((function(e){return[{title:"Name",value:e.name},{title:"Height",value:e.height},{title:"Mass",value:e.mass},{title:"Hair Color",value:e.hair_color},{title:"Skin Color",value:e.skin_color},{title:"Gender",value:e.gender},{title:"Birth Year",value:e.birth_year}]})):null,n=e.people?e.people.map((function(e){return e.name})):null;return e.people?r.a.createElement(i.a,{modalData:t,itemTitles:n,avatar:p.a}):r.a.createElement(u.a,null)}))}}]);
//# sourceMappingURL=5.416a585e.chunk.js.map