(this["webpackJsonpassignment-solution"]=this["webpackJsonpassignment-solution"]||[]).push([[0],{22:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(3),o=t.n(c),i=t(11),s=t(4),d=t.n(s),u=t(1),h=function(){return Object(u.jsxs)("header",{className:"".concat(d.a.wrapper," px-16 py-64"),children:[Object(u.jsx)("div",{className:"".concat(d.a.wrapper__overlay," bg-header")}),Object(u.jsx)("h1",{className:"".concat(d.a.wrapper__heading," text-primary-inverted fs-xl my-0"),children:"Plan your trip!"})]})},m=t(10),p=t(2),l=Object(p.c)({name:"theme",initialState:{theme:"default"},reducers:{changeTheme:function(e,n){e.theme=n.payload}}}),f=l.actions,j=Object(p.b)({onError:function(){return console.error}}),_=Object(p.a)({reducer:Object(m.a)({},l.name,l.reducer),middleware:function(e){return e().prepend(j.middleware)}}),b=j.startListening;function w(e){document.documentElement.className="theme",document.documentElement.classList.add("theme--".concat(e.payload))}function g(){Object(r.useEffect)((function(){var e=function(e){var n=[e({actionCreator:f.changeTheme,effect:w})];return function(){return n.forEach((function(e){return e()}))}}(b),n=window.matchMedia("(prefers-color-scheme: dark)");function t(){_.dispatch(f.changeTheme(n.matches?"dark":"default"))}return t(),n.addEventListener("change",t),function(){e(),n.removeEventListener("change",t)}}),[])}var x=function(){return g(),Object(u.jsx)("main",{children:Object(u.jsx)(h,{})})};t(22);o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(i.a,{store:_,children:Object(u.jsx)(x,{})})}),document.getElementById("root"))},4:function(e,n,t){e.exports={wrapper:"header_wrapper__3H3nS",wrapper__overlay:"header_wrapper__overlay__2PuWm",wrapper__heading:"header_wrapper__heading__3PxEY"}}},[[23,1,2]]]);
//# sourceMappingURL=main.e5fad617.chunk.js.map