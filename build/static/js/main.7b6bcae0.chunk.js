(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),r=n(14),i=n.n(r),s=(n(23),n(13)),o=n.n(s),u=n(15),d=n(10),j=(n(25),n(9)),b=(n(32),n(27),n(31),n(17)),l=n(18),h=n(4);j.a.initializeApp({apiKey:"AIzaSyDsvnuuWvvnTjYDaCFFqAMjeJsrSuIlAnc",authDomain:"uni-chat-1a5cd.firebaseapp.com",projectId:"uni-chat-1a5cd",storageBucket:"uni-chat-1a5cd.appspot.com",messagingSenderId:"325026748807",appId:"1:325026748807:web:bda4d67a59f56b1e1c9b22",measurementId:"G-XYL2FSDKM2"});var p=j.a.auth(),O=j.a.firestore();j.a.analytics();function m(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"btn-sec",children:[Object(h.jsx)("button",{className:"sign-in",onClick:function(){var e=new j.a.auth.GoogleAuthProvider;p.signInWithPopup(e)},children:"Sign in with Google"}),Object(h.jsx)("p",{children:"Do not violate the community guidelines or you will be banned for life!"})]})})}function f(){return p.currentUser&&Object(h.jsx)("button",{className:"sign-out",onClick:function(){return p.signOut()},children:"Sign Out"})}function g(){var e=Object(c.useRef)(),t=O.collection("messages"),n=t.orderBy("createdAt").limit(25),a=Object(l.a)(n,{idField:"id"}),r=Object(d.a)(a,1)[0],i=Object(c.useState)(""),s=Object(d.a)(i,2),b=s[0],m=s[1],f=function(){var n=Object(u.a)(o.a.mark((function n(c){var a,r,i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),a=p.currentUser,r=a.uid,i=a.photoURL,n.next=4,t.add({text:b,createdAt:j.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:i});case 4:m(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("main",{children:[r&&r.map((function(e){return Object(h.jsx)(x,{message:e},e.id)})),Object(h.jsx)("span",{ref:e})]}),Object(h.jsxs)("form",{onSubmit:f,children:[Object(h.jsx)("input",{value:b,onChange:function(e){return m(e.target.value)},placeholder:"say something nice"}),Object(h.jsx)("button",{type:"submit",disabled:!b,children:"Send"})]})]})}function x(e){var t=e.message,n=t.text,c=t.uid,a=t.photoURL,r=c===p.currentUser.uid?"sent":"received";return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"message ".concat(r),children:[Object(h.jsx)("img",{src:a||"https://api.adorable.io/avatars/23/abott@adorable.png"}),Object(h.jsx)("p",{children:n})]})})}var v=function(){var e=Object(b.a)(p),t=Object(d.a)(e,1)[0];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{children:"Lets-Chat"}),Object(h.jsx)(f,{})]}),Object(h.jsx)("section",{children:t?Object(h.jsx)(g,{}):Object(h.jsx)(m,{})})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),F()}},[[30,1,2]]]);
//# sourceMappingURL=main.7b6bcae0.chunk.js.map