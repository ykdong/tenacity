(this.webpackJsonptenacity=this.webpackJsonptenacity||[]).push([[0],{20:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var o,i=n(1),r=n.n(i),c=n(11),a=n.n(c),s=n(12),u=n.n(s),l=(n(20),n(4)),b=n(3),j=n(9),d=n.n(j),O=n(5),m=n(6),f=n(2),x="FORWARD",p=Object(O.a)({},x,{name:"Move Forward"}),g=function(t,e){for(var n={},o=0;o<e.length;o++){var i=e[o];void 0===n[i]?n[i]=1:n[i]++}return t.reduce((function(t,e){var o=Object(l.a)(e,2),i=o[0],r=o[1];return[].concat(Object(m.a)(t),[[i,r-(n[i]||0)]])}),[])},h=n(0),y=function(t){var e=t.addToProgram,n=t.blocks,o=t.onResetProgram,i=t.onSubmitProgram,r=t.program,c=t.programSubmitted;return Object(h.jsx)("div",{id:"control-panel",children:Object(h.jsxs)("div",{id:"control-panel-container",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{id:"program",children:r.map((function(t,e){return Object(h.jsx)("div",{children:p[t].name},e)}))}),!c&&Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:o,children:"Reset"}),Object(h.jsx)("button",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"}),setTimeout(i,1e3)},children:"Submit Instructions"})]})]}),Object(h.jsx)("div",{id:"blocks",children:n.map((function(t,n){var o=Object(l.a)(t,2),i=o[0],r=o[1];if(0!=r)return Object(h.jsxs)("button",{className:"block",onClick:function(){return function(t){c||e(t)}(i)},children:[p[i].name," (x",r,")"]},n)}))})]})})},v=800,S=600,I=100,T=(n(27),function(t){var e=t.onCompleteIntro,n=t.onStartPlaying,o=Object(i.useState)(!1),r=Object(l.a)(o,2),c=r[0],a=r[1],s=Object(b.b)({to:{opacity:c?0:1},from:{opacity:0},config:{duration:1500},onRest:function(){c&&e()}}),u=function(){n(),a(!0)};return Object(h.jsxs)(b.a.g,{opacity:s.opacity,children:[Object(h.jsx)("text",{x:"50%",y:"30%",dominantBaseline:"middle",textAnchor:"middle",className:"titleText",opacity:s.opacity,children:"Tenacity"}),Object(h.jsx)("text",{x:"50%",y:"45%",dominantBaseline:"middle",textAnchor:"middle",className:"subheadText",opacity:s.opacity,children:"A game by Brian Yu"}),Object(h.jsx)("rect",{x:300,y:"360",height:80,width:200,rx:20,fill:"white",className:"hoverable",onClick:u}),Object(h.jsx)("text",{x:400,y:"400",dominantBaseline:"middle",textAnchor:"middle",style:{fontSize:"48px",fill:"black"},className:"hoverable",onClick:u,children:"Play"})]})}),k=function(t){var e=t.planet;return Object(h.jsxs)("g",{children:[Object(h.jsx)("rect",{x:0,y:500,width:v,height:I,fill:e.colors.main}),Object(m.a)(Array(8).keys()).map((function(t){return Object(h.jsx)("rect",{x:100*t-.5,y:500,width:1,height:10},t)}))]})},C=n.p+"static/media/rocket.0dec99f9.svg",R={ROVER:{image:n.p+"static/media/rover.b107911f.svg",height:80,width:80},ROCKET:{image:C,height:100,width:57}},N=[{name:"Mercury",introConfig:{size:15,scale:2,orbitDuration:1e4,textColor:"black"},colors:{main:"#ae7c43",sky:"#dbb78f",text:"black"},briefing:"The Tenacity rover has arrived on Mercury. Use the control panel to help Tenacity complete its missions.",missions:[{objective:"Navigate Tenacity back to the spacecraft for refueling.",blocks:[[x,2]],items:{rocket:{object:R.ROCKET,x:500},rover:{object:R.ROVER,x:300}},criteria:[{category:"rover_x",value:500}]},{objective:"This Mission has yet to be created. Check back soon!",blocks:[],items:{},criteria:[]}]},{name:"Venus"}],E=function(t){var e=t.onCompleteIntro,n=t.onZoomIntro,o=t.planetIndex,r=N[o],c=r.introConfig.scale,a=Object(i.useState)(!1),s=Object(l.a)(a,2),u=s[0],j=s[1],d=Object(i.useState)(!1),O=Object(l.a)(d,2),m=O[0],f=O[1],x=Object(i.useState)(!1),p=Object(l.a)(x,2),g=p[0],y=p[1],v=Object(i.useState)(!1),S=Object(l.a)(v,2),I=S[0],T=S[1],k=Object(b.b)({to:{opacity:1},from:{opacity:0},config:{duration:1500},delay:1500}),C=Object(b.b)({to:{opacity:1},from:{opacity:0},config:{duration:1500},delay:3e3}),R=Object(b.b)({to:{angle:2*Math.PI},from:{angle:0},config:{duration:1e4},reset:u,onRest:function(){return j((function(t){return!t}))}}),E=Object(b.b)({to:{opacity:m?0:1},from:{opacity:1},config:{duration:2e3},onRest:function(){m&&e()}}),P=Object(b.b)({to:{opacity:I?1:0},from:{opacity:0},config:{duration:1e3},onRest:function(){I&&setTimeout((function(){f(!0)}),2e3)}}),M=N.slice(0,1+o).map((function(t,e){var i=e==o,r=void 0;i&&(r=Object(b.b)({to:{r:g?1600:t.introConfig.size*c},from:{r:t.introConfig.size*c},config:{duration:1e3},onRest:function(){g&&(n(),T(!0))}}));var a=100+20*e;return Object(h.jsxs)(b.a.g,{opacity:C.opacity,children:[Object(h.jsx)(b.a.circle,{cx:400,cy:300,r:a*c,fillOpacity:0,stroke:"white",strokeWidth:2}),Object(h.jsx)(b.a.circle,{cx:R.angle.interpolate((function(t){return 400+c*(a*Math.cos(t))})),cy:R.angle.interpolate((function(t){return 300-c*(a*Math.sin(t))})),r:i?r.r:t.introConfig.size*c,style:{fill:t.colors.main}})]},e)}));return Object(i.useEffect)((function(){var t=setTimeout((function(){y(!0)}),1e4);return function(){return clearTimeout(t)}}),[]),Object(h.jsxs)(b.a.g,{opacity:E.opacity,children:[Object(h.jsx)(b.a.circle,{cx:400,cy:300,r:50*c,style:{fill:"#f0f067"},opacity:k.opacity}),M,Object(h.jsx)(b.a.text,{x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle",style:{fontSize:"80px",fill:r.introConfig.textColor},opacity:P.opacity,children:r.name})]})},P=function(t){var e=t.planet,n=t.completedMissions;return Object(h.jsxs)("g",{children:[Object(h.jsx)("text",{textAnchor:"end",dominantBaseline:"hanging",x:785,y:15,style:{fill:e.colors.text,fontSize:"24px"},children:e.name}),e.missions.map((function(t,o){return Object(h.jsx)("circle",{cx:35+55*o,cy:35,r:20,style:{fill:n>o?e.colors.main:"rgba(0, 0, 0, 0)",stroke:e.colors.main,strokeWidth:n>o?0:1}},o)}))]})},M=Object(b.a)((function(t){var e=t.object,n=t.x,o=t.y,i=t.center;return Object(h.jsx)("image",{href:e.image,height:e.height,x:!1===i?n:n-e.width/2,y:o})})),w=function(t){var e=t.currentInstruction,n=t.planetIndex,o=t.missionIndex,r=t.onSuccess,c=t.onFailure,a=t.setCurrentInstruction,s=t.program,u=t.programSubmitted,j=N[n],d=j.missions[o],O=Object(i.useState)(0),m=Object(l.a)(O,2),p=m[0],g=m[1],y=Object(i.useState)(d.items),v=Object(l.a)(y,2),S=v[0],I=v[1],T=Object(i.useState)(!1),k=Object(l.a)(T,2),C=k[0],R=k[1],E=Object(i.useState)(!1),P=Object(l.a)(E,2),w=P[0],A=P[1];function _(t){switch(t.category){case"rover_x":return t.value===S.rover.x;default:return console.log("Error: Unknown criterion."),!1}}if(u&&e<s.length&&p==e)switch(s[e]){case x:g((function(t){return t+1})),I((function(t){var e=t.rover;return Object(f.a)(Object(f.a)({},t),{},{rover:Object(f.a)(Object(f.a)({},e),{},{x:e.x+100,prev:{x:e.x+100}})})}));break;default:console.log("ERROR: Unknown block.")}var B=Object(b.b)({to:{opacity:C?1:0},from:{opacity:0},config:{duration:1e3},delay:500,onRest:function(){C&&setTimeout((function(){r()}),2500)}}),L=Object(b.b)({to:{opacity:w?1:0},from:{opacity:0},config:{duration:1e3},delay:500,onRest:function(){w&&setTimeout((function(){c()}),2500)}});return Object(h.jsxs)("g",{children:[Object.keys(S).map((function(t,n){var o=S[t],i=Object(b.b)({to:{x:o.x,elevation:o.elevation||0},from:{x:o.prev&&o.prev.x?o.prev.x:o.x,elevation:o.prev&&o.prev.elevation?o.prev.elevation:o.elevation||0},config:{duration:1e3},onRest:function(){"rover"===t&&u&&p===s.length&&(!function(){for(var t=0;t<d.criteria.length;t++)if(!_(d.criteria[t]))return!1;return!0}()?A(!0):R(!0)),"rover"===t&&u&&p>e&&p!=s.length&&setTimeout((function(){a(e+1)}),250)}});return Object(h.jsx)(M,{object:o.object,x:i.x,y:i.elevation.interpolate((function(t){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 500-t.height-e}(o.object,t)}))},n)})),Object(h.jsx)(b.a.text,{x:"50%",y:"20%",dominantBaseline:"middle",textAnchor:"middle",opacity:B.opacity,style:{fontSize:"80px",fill:j.colors.text},children:"Mission Success"}),Object(h.jsx)(b.a.text,{x:"50%",y:"20%",dominantBaseline:"middle",textAnchor:"middle",opacity:L.opacity,style:{fontSize:"80px",fill:j.colors.text},children:"Try Again"})]})},A=function(t){var e=t.missionNumber,n=t.objective;return Object(h.jsxs)("div",{style:{fontSize:"24px",textAlign:"center"},children:[Object(h.jsxs)("strong",{children:["Mission ",e," Objective"]}),Object(h.jsx)("br",{}),n]})},_=function(t){var e=t.briefing,n=t.onCompleteBriefing;return Object(h.jsxs)("div",{style:{fontSize:"24px",textAlign:"center"},children:[e,Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:n,children:"Continue"})]})},B="COMPLETE_INTRO",L="COMPLETE_PLANET_INTRO",z="ZOOM_PLANET_INTRO",G="COMPLETE_BRIEFING",F="ADD_TO_PROGRAM",Z="RESET_PROGRAM",W="SUBMIT_PROGRAM",D="SET_INST_PTR",U="NEXT_MISSION",H="REPEAT_MISSION",V=(o={},Object(O.a)(o,B,(function(t){return Object(f.a)(Object(f.a)({},t),{},{introShown:!0})})),Object(O.a)(o,z,(function(t){return t.planetIntroStatus===J.NOT_SHOWN?Object(f.a)(Object(f.a)({},t),{},{planetIntroStatus:J.ZOOMING}):t})),Object(O.a)(o,L,(function(t){return Object(f.a)(Object(f.a)({},t),{},{planetIntroStatus:J.COMPLETE})})),Object(O.a)(o,G,(function(t){return Object(f.a)(Object(f.a)({},t),{},{briefingShown:!0})})),Object(O.a)(o,F,(function(t,e){return Object(f.a)(Object(f.a)({},t),{},{program:[].concat(Object(m.a)(t.program),[e])})})),Object(O.a)(o,Z,(function(t){return Object(f.a)(Object(f.a)({},t),{},{program:[]})})),Object(O.a)(o,W,(function(t){return Object(f.a)(Object(f.a)({},t),{},{programSubmitted:!0})})),Object(O.a)(o,D,(function(t,e){return Object(f.a)(Object(f.a)({},t),{},{currentInstruction:e})})),Object(O.a)(o,U,(function(t){var e=N[t.planetIndex];return t.missionIndex+1<e.missions.length?Object(f.a)(Object(f.a)({},t),{},{missionIndex:t.missionIndex+1,round:t.round+1,program:[],programSubmitted:!1,currentInstruction:0}):t.planetIndex+1<N.length?Object(f.a)(Object(f.a)({},t),{},{planetIndex:t.planetIndex+1,missionIndex:0,round:t.round+1,planetIntroShown:!1,briefingShown:!1,program:[],programSubmitted:!1,currentInstruction:0}):Object(f.a)(Object(f.a)({},t),{},{done:!0})})),Object(O.a)(o,H,(function(t){return Object(f.a)(Object(f.a)({},t),{},{round:t.round+1,program:[],programSubmitted:!1,currentInstruction:0})})),o),J={NOT_SHOWN:0,ZOOMING:1,COMPLETE:2},K=function(t,e){var n=e.type,o=e.payload,i=V[n];return i?i(t,o):t},Y=function(t){var e,n=t.onStartPlaying,o=Object(i.useReducer)(K,{planetIndex:0,missionIndex:0,done:!1,round:0,introShown:!!(e=!1),planetIntroStatus:e?J.COMPLETE:J.NOT_SHOWN,briefingShown:!!e,program:[],programSubmitted:!1,currentInstruction:0}),r=Object(l.a)(o,2),c=r[0],a=r[1],s=function(t,e){return a({type:t,payload:e})},u=c.planetIndex,j=c.missionIndex,d=c.introShown,O=c.planetIntroStatus,m=c.briefingShown,f=c.program,x=c.programSubmitted,p=c.round,I=c.currentInstruction,C=c.done,R=N[u],M=R.missions[j];function V(){s(B)}function Y(){s(z)}function X(){s(L)}function q(){s(G)}function Q(t){s(D,t)}var $=Object(b.b)({to:{color:d?O>=J.ZOOMING?R.colors.sky:"black":"rgba(0, 0, 0, 0)"},from:{color:"rgba(0, 0, 0, 0)"},config:{duration:1500}}),tt=O==J.COMPLETE,et=tt&&m;return C?Object(h.jsx)("div",{children:"game over"}):Object(h.jsxs)("div",{style:{maxWidth:v},children:[Object(h.jsxs)(b.a.svg,{width:v,height:S,className:"scene",style:{backgroundColor:$.color},children:[O>=J.ZOOMING&&Object(h.jsx)(k,{planet:R}),tt&&Object(h.jsx)(P,{planet:R,completedMissions:j}),d?tt?Object(h.jsx)(w,{currentInstruction:I,planetIndex:u,missionIndex:j,onFailure:function(){return s(H)},onSuccess:function(){return s(U)},setCurrentInstruction:Q,program:f,programSubmitted:x},p):Object(h.jsx)(E,{planetIndex:u,onZoomIntro:Y,onCompleteIntro:X}):Object(h.jsx)(T,{onStartPlaying:n,onCompleteIntro:V})]}),tt&&(m?Object(h.jsx)(A,{missionNumber:j+1,objective:M.objective}):Object(h.jsx)(_,{briefing:R.briefing,onCompleteBriefing:q})),et&&Object(h.jsx)(y,{addToProgram:function(t){s(F,t)},blocks:g(M.blocks,f),onResetProgram:function(){return s(Z)},onSubmitProgram:function(){return s(W)},program:f,programSubmitted:x})]})},X=n.p+"static/media/amerika.421d9361.mp3",q=Object(b.a)(d.a),Q=function(){var t=Object(i.useState)(!1),e=Object(l.a)(t,2),n=e[0],o=e[1],r=Object(b.b)({to:{volume:n?100:0},from:{volume:0},config:{duration:8e3}});return Object(h.jsxs)("div",{className:"page",children:[Object(h.jsx)("div",{className:"scene-container",children:Object(h.jsx)(Y,{onStartPlaying:function(){return o(!0)}})}),Object(h.jsx)(q,{url:X,playStatus:n?d.a.status.PLAYING:d.a.status.STOPPED,autoLoad:!0,loop:!0,volume:r.volume})]})},$=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),o(t),i(t),r(t),c(t)}))};u.a.initialize({gtmId:"G-NZ8LEP7MN2"}),a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(Q,{})}),document.getElementById("root")),$()}},[[28,1,2]]]);
//# sourceMappingURL=main.65f085d4.chunk.js.map