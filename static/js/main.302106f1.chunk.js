(this.webpackJsonptenacity=this.webpackJsonptenacity||[]).push([[0],{19:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var o,a=n(2),c=n.n(a),i=n(14),r=n.n(i),s=(n(19),n(5)),l=n(3),u=n(11),b=n.n(u),d=n(4),j=n(6),O=n(0),m=n(7),p="ROCKET_LAUNCH",f={BRIDGE:"BUILD_BRIDGE",FORWARD:"FORWARD",TAKE_PHOTO:"TAKE_PHOTO",TURN:"TURN",PICK_UP:"PICK_UP",DROP:"DROP",REPEAT:"REPEAT",END_REPEAT:"END REPEAT"},h=(o={},Object(d.a)(o,f.BRIDGE,{name:"Build Bridge"}),Object(d.a)(o,f.FORWARD,{name:"Move Forward"}),Object(d.a)(o,f.TURN,{name:"Turn Around"}),Object(d.a)(o,f.PICK_UP,{name:"Pick Up Object"}),Object(d.a)(o,f.DROP,{name:"Drop Object"}),Object(d.a)(o,f.LAUNCH_ROCKET,{name:"Launch Rocket"}),Object(d.a)(o,f.TAKE_PHOTO,{name:"Take Photo"}),Object(d.a)(o,f.REPEAT,{name:"Repeat",args:[{key:"count",text:"How many times to repeat?"}]}),Object(d.a)(o,f.END_REPEAT,{name:"End Repeat"}),o),g=function(e,t){for(var n={},o=0;o<t.length;o++){var a=t[o].block;void 0===n[a]?n[a]=1:n[a]++}return e.reduce((function(e,t){var o=Object(s.a)(t,2),a=o[0],c=o[1];return[].concat(Object(j.a)(e),[[a,c-(n[a]||0)]])}),[])},v=function(e){var t=e.block,n=e.args,o=h[t].name;switch(t){case f.REPEAT:return"".concat(o," ").concat(n.count);default:return o}},x=n(12),y=n.p+"static/media/bridge.76f2dfc2.svg",R=n.p+"static/media/rocket.0dec99f9.svg",E=n.p+"static/media/rover.b107911f.svg",T=n.p+"static/media/rover_flipped.1ce4141d.svg",k=n.p+"static/media/mercury_crater.af0b0b06.svg",C=n.p+"static/media/rock_blue.2c73d521.svg",A=n.p+"static/media/rock_red.31b2b06f.svg",I=n.p+"static/media/volcano.957d8bd8.svg",P=n.p+"static/media/photograph.86f8d649.svg",S=800,_=600,w=100,N={BRIDGE:{images:[y],height:13.5,width:90},ROVER:{images:[E,T],height:80,width:80},ROCKET:{images:[R],height:100,width:57},MERCURY_CRATER:{images:[k],height:30,width:90},VENUS_CRATER:{images:[k],height:30,width:90},ROCK_RED:{images:[A],height:30,width:40},ROCK_BLUE:{images:[C],height:30,width:40},VOLCANO:{images:[I],height:100,width:100},PHOTOGRAPH:{images:[P],height:60,width:60}},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 500-e.height-t},M={elevation:0,opacity:1,costumeNumber:0},U=[{name:"Mercury",introConfig:{size:15,scale:2,orbitDuration:1e4,textColor:"black"},colors:{main:"#bfbaac",sky:"#7d705b",text:"black"},briefing:"The Tenacity rover has arrived on Mercury. Use the control panel to help Tenacity complete its missions.",missions:[{objective:"Navigate Tenacity back to the spacecraft for refueling.",hint:'Click on a function to add it to Tenacity\'s program. Click "Submit Instructions" when the program is ready to run.',blocks:[[f.FORWARD,2]],items:[Object(O.a)(Object(O.a)({},M),{},{id:"rocket",object:N.ROCKET,x:500}),Object(O.a)(Object(O.a)({},M),{},{id:"rover",object:N.ROVER,x:300})],criteria:[{category:"rover_x",value:500,message:"Tenacity did not make it back to spacecraft."}]},{objective:"Get close to the crater to explore it. But be careful not to fall in!",blocks:[[f.FORWARD,5]],items:[Object(O.a)(Object(O.a)({},M),{},{id:"rocket",object:N.ROCKET,x:100}),Object(O.a)(Object(O.a)({},M),{},{id:"crater",object:N.MERCURY_CRATER,x:500,elevation:-30,allowFall:!0}),Object(O.a)(Object(O.a)({},M),{},{id:"rover",object:N.ROVER,x:100})],criteria:[{category:"rover_x",value:400,message:"Tenacity did not make it close enough to crater."}]},{objective:"Return the rock sample back to the rocket.",blocks:[[f.FORWARD,5],[f.PICK_UP,1],[f.TURN,1]],items:[Object(O.a)(Object(O.a)({},M),{},{id:"rocket",object:N.ROCKET,x:100}),Object(O.a)(Object(O.a)({},M),{},{id:"crater",object:N.MERCURY_CRATER,x:500,elevation:-30,allowFall:!0}),Object(O.a)(Object(O.a)({},M),{},{id:"rock",object:N.ROCK_RED,x:400,elevation:-30}),Object(O.a)(Object(O.a)({},M),{},{id:"rover",object:N.ROVER,x:400})],criteria:[{category:"rover_x",value:100,message:"Tenacity did not make it back to rocket."},{category:"rover_carry",value:"rock",message:"Tenacity does not have rock sample."}]},{objective:"We're done here on Mercury! Launch the rocket to head to the next planet.",blocks:[[f.LAUNCH_ROCKET,1]],items:[Object(O.a)(Object(O.a)({},M),{},{id:"rocket",object:N.ROCKET,x:400}),Object(O.a)(Object(O.a)({},M),{},{id:"rover",object:N.ROVER,x:400})],criteria:[{category:"event",value:p,message:"Rocket did not launch."}]}]},{name:"Venus",introConfig:{size:20,scale:1.7,orbitDuration:28900,textColor:"black"},colors:{main:"#ae7c43",sky:"#dbb78f",text:"black"},briefing:"Welcome to Venus! Tenacity's mission is to explore the volcanos on the planet.",missions:[{objective:"Get to the base of the volcano and take a photo.",hint:'To repeat a section of a program multiple times, put it in between a "Repeat" and "End Repeat" instruction.',blocks:[[f.FORWARD,1],[f.TAKE_PHOTO,1],[f.REPEAT,1],[f.END_REPEAT,1]],items:[Object(O.a)(Object(O.a)({},M),{},{id:"volcano",object:N.VOLCANO,x:700}),Object(O.a)(Object(O.a)({},M),{},{id:"rocket",object:N.ROCKET,x:100}),Object(O.a)(Object(O.a)({},M),{},{id:"rover",object:N.ROVER,x:200})],criteria:[{category:"photograph",value:700,message:"Tenacity did not take photograph of volcano."}]},{objective:"Collect the rock sample.",blocks:[[f.FORWARD,2],[f.BRIDGE,1],[f.PICK_UP,1],[f.REPEAT,1],[f.END_REPEAT,1]],items:[Object(O.a)(Object(O.a)({},M),{},{id:"crater",object:N.VENUS_CRATER,x:300,allowFall:!0,elevation:-30}),Object(O.a)(Object(O.a)({},M),{},{id:"rock",object:N.ROCK_RED,x:600,elevation:-30}),Object(O.a)(Object(O.a)({},M),{},{id:"rover",object:N.ROVER,x:100})],criteria:[{category:"rover_carry",value:"rock",message:"Tenacity does not have rock sample."}]},{objective:"Take photos at each of the five volcanos.",blocks:[[f.FORWARD,3],[f.TURN,2],[f.TAKE_PHOTO,1],[f.REPEAT,1],[f.END_REPEAT,1]],items:[Object(O.a)(Object(O.a)({},M),{},{id:"volcano1",object:N.VOLCANO,x:200}),Object(O.a)(Object(O.a)({},M),{},{id:"volcano2",object:N.VOLCANO,x:300}),Object(O.a)(Object(O.a)({},M),{},{id:"volcano3",object:N.VOLCANO,x:400}),Object(O.a)(Object(O.a)({},M),{},{id:"volcano4",object:N.VOLCANO,x:500}),Object(O.a)(Object(O.a)({},M),{},{id:"volcano5",object:N.VOLCANO,x:600}),Object(O.a)(Object(O.a)({},M),{},{id:"rover",object:N.ROVER,x:400})],criteria:[{category:"photograph",value:200,message:"Tenacity did not take photograph of all volcano."},{category:"photograph",value:300,message:"Tenacity did not take photograph of all volcano."},{category:"photograph",value:400,message:"Tenacity did not take photograph of all volcano."},{category:"photograph",value:500,message:"Tenacity did not take photograph of all volcano."},{category:"photograph",value:600,message:"Tenacity did not take photograph of all volcano."}]},{objective:"Drop off both rock samples at the rocket.",hint:"Tenacity can only hold one object at a time.",blocks:[[f.FORWARD,5],[f.TURN,1],[f.BRIDGE,1],[f.PICK_UP,1],[f.DROP,1],[f.REPEAT,1],[f.END_REPEAT,1]],items:[Object(O.a)(Object(O.a)({},M),{},{id:"crater1",object:N.VENUS_CRATER,x:500,allowFall:!0,elevation:-30}),Object(O.a)(Object(O.a)({},M),{},{id:"rock1",object:N.ROCK_BLUE,x:600,elevation:-30}),Object(O.a)(Object(O.a)({},M),{},{id:"crater2",object:N.VENUS_CRATER,x:300,allowFall:!0,elevation:-30}),Object(O.a)(Object(O.a)({},M),{},{id:"rock2",object:N.ROCK_BLUE,x:200,elevation:-30}),Object(O.a)(Object(O.a)({},M),{},{id:"rocket",object:N.ROCKET,x:400}),Object(O.a)(Object(O.a)({},M),{},{id:"rover",object:N.ROVER,x:400})],criteria:[{category:"location_x",id:"rock1",value:400,message:"Both rock samples were not dropped off at rocket."},{category:"location_x",id:"rock2",value:400,message:"Both rock samples were not dropped off at rocket."}]},{objective:"We're done here on Venus! Launch the rocket to head to the next planet.",blocks:[[f.LAUNCH_ROCKET,1]],items:[Object(O.a)(Object(O.a)({},M),{},{id:"crater1",object:N.VENUS_CRATER,x:500,allowFall:!0,elevation:-30}),Object(O.a)(Object(O.a)({},M),{},{id:"crater2",object:N.VENUS_CRATER,x:300,allowFall:!0,elevation:-30}),Object(O.a)(Object(O.a)({},M),{},{id:"rocket",object:N.ROCKET,x:400}),Object(O.a)(Object(O.a)({},M),{},{id:"rover",object:N.ROVER,x:400})],criteria:[{category:"event",value:p,message:"Rocket did not launch."}]}]}];x.a.initialize("UA-123778931-5");var B,L=function(e,t){return"".concat(U[e].name,", Mission ").concat(t+1)},V=function(e){x.a.event(e)},K=n(1),F=function(e){var t=e.addToProgram,n=e.blocks,o=e.onResetProgram,a=e.onSubmitProgram,c=e.program,i=e.programSubmitted,r=e.planetIndex,l=e.missionIndex;return Object(K.jsx)("div",{id:"control-panel",children:Object(K.jsxs)("div",{id:"control-panel-container",children:[Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{id:"program",children:c.map((function(e,t){return Object(K.jsx)("div",{children:v(e)},t)}))}),!i&&Object(K.jsxs)("div",{children:[Object(K.jsx)("button",{onClick:o,children:"Reset"}),Object(K.jsx)("button",{onClick:function(){var e=function(e){for(var t=[],n=[],o=0;o<e.length;o++){var a=Object.assign({},e[o]);switch(a.meta={id:o},a.block){case f.REPEAT:n.push({type:f.REPEAT,line:o});var c=parseInt(a.args.count);if(isNaN(c))return{isValid:!1,error:"Tenacity only understands an integer number of times to repeat!"};a.args.count=c;break;case f.END_REPEAT:var i=n.pop();if(void 0===i)return{isValid:!1,error:"Tenacity can only End Repeat after a matching Repeat instruction."};if(i.type!==f.REPEAT)return{isValid:!1,error:"Tenacity tried to End Repeat, but it looks like some other part of the program needs to be resolved first."};a.meta.jumpBackTo=i.line,t[i.line].meta.jumpTo=o+1}t.push(a)}var r=n.pop();return void 0!==r?r.type===f.REPEAT?{isValid:!1,error:"Tenacity found a Repeat instruction, but it needs a matching End Repeat instruction so that it knows when to stop repeating."}:{isValid:!1,error:"Tenacity found a mistake in the program."}:{isValid:!0,augmentedProgram:t}}(c),t=e.isValid,n=e.augmentedProgram,o=e.error;if(!t)return V({category:"Error",action:"Invalid Program Error",label:L(r,l),value:o}),void alert(o);window.scrollTo({top:0,behavior:"smooth"}),setTimeout((function(){a(n)}),1e3)},children:"Submit Instructions"})]})]}),Object(K.jsx)("div",{id:"blocks",children:n.map((function(e,n){var o=Object(s.a)(e,2),a=o[0],c=o[1];return 0!==c&&Object(K.jsxs)("button",{className:"block",onClick:function(){return function(e){if(!i){var n=h[e],o={};if(void 0!==n.args){var a,c=Object(m.a)(n.args);try{for(c.s();!(a=c.n()).done;){var r=a.value;if(o[r.key]=window.prompt(r.text),null===o[r.key])return}}catch(s){c.e(s)}finally{c.f()}}t(e,o)}}(a)},children:[h[a].name," (x",c,")"]},n)}))})]})})},W=(n(25),function(e){var t=e.onCompleteIntro,n=e.onStartPlaying,o=Object(a.useState)(!1),c=Object(s.a)(o,2),i=c[0],r=c[1],u=Object(l.b)({to:{opacity:i?0:1},from:{opacity:0},config:{duration:1500},onRest:function(){i&&t()}}),b=function(){V({category:"Game",action:"Play Game"}),n(),r(!0)};return Object(K.jsxs)(l.a.g,{opacity:u.opacity,children:[Object(K.jsx)("text",{x:"50%",y:"30%",dominantBaseline:"middle",textAnchor:"middle",className:"titleText",opacity:u.opacity,children:"Tenacity"}),Object(K.jsx)("text",{x:"50%",y:"45%",dominantBaseline:"middle",textAnchor:"middle",className:"subheadText",opacity:u.opacity,children:"A game by Brian Yu"}),Object(K.jsx)("rect",{x:300,y:"360",height:80,width:200,rx:20,fill:"white",className:"hoverable",onClick:b}),Object(K.jsx)("text",{x:400,y:"400",dominantBaseline:"middle",textAnchor:"middle",style:{fontSize:"48px",fill:"black"},className:"hoverable",onClick:b,children:"Play"})]})}),G=function(){return Object(K.jsxs)("div",{style:{maxWidth:"500px"},children:[Object(K.jsx)("div",{children:"Tenacity is a work in progress, and you've reached the end of what's been developed so far! Check back soon for more missions."}),Object(K.jsx)("br",{}),Object(K.jsxs)("div",{children:["Tenacity is developed by Brian Yu at Harvard Graduate School of Education. While the game is in development, I would love to hear thoughts, feedback, and recommendations: you can reach me at ",Object(K.jsx)("a",{style:{color:"white"},href:"mailto:brian@brianyu.me",children:"brian@brianyu.me"}),"."]})]})},z=function(e){var t=e.planet;return Object(K.jsxs)("g",{children:[Object(K.jsx)("rect",{x:0,y:500,width:S,height:w,fill:t.colors.main}),Object(j.a)(Array(8).keys()).map((function(e){return Object(K.jsx)("rect",{x:100*e-.5,y:500,width:1,height:10},e)}))]})},H=function(e){var t=e.onCompleteIntro,n=e.onZoomIntro,o=e.planetIndex,c=U[o],i=c.introConfig.scale,r=Object(a.useState)(!1),u=Object(s.a)(r,2),b=u[0],d=u[1],j=Object(a.useState)(!1),O=Object(s.a)(j,2),m=O[0],p=O[1],f=Object(a.useState)(!1),h=Object(s.a)(f,2),g=h[0],v=h[1],x=Object(a.useState)(!1),y=Object(s.a)(x,2),R=y[0],E=y[1],T=Object(l.b)({to:{opacity:1},from:{opacity:0},config:{duration:1500},delay:1500}),k=Object(l.b)({to:{opacity:1},from:{opacity:0},config:{duration:1500},delay:3e3}),C=Object(l.b)({to:{angle:4*Math.PI},from:{angle:0},config:{duration:2e4},reset:b,onRest:function(){return d((function(e){return!e}))}}),A=Object(l.b)({to:{zoom:g?1:0},from:{zoom:0},config:{duration:1e3},onRest:function(){g&&(n(),E(!0))}}),I=Object(l.b)({to:{opacity:m?0:1},from:{opacity:1},config:{duration:2e3},onRest:function(){m&&t()}}),P=Object(l.b)({to:{opacity:R?1:0},from:{opacity:0},config:{duration:1e3},onRest:function(){R&&setTimeout((function(){p(!0)}),2e3)}}),S=U.slice(0,1+o).map((function(e,t){var n=t==o,a=100+50*t;return Object(K.jsxs)(l.a.g,{opacity:k.opacity,children:[Object(K.jsx)(l.a.circle,{cx:400,cy:300,r:a*i,fillOpacity:0,stroke:"white",strokeWidth:2}),Object(K.jsx)(l.a.circle,{cx:C.angle.interpolate((function(t){return 400+i*(a*Math.cos(t*(1e4/e.introConfig.orbitDuration)))})),cy:C.angle.interpolate((function(t){return 300-i*(a*Math.sin(t*(1e4/e.introConfig.orbitDuration)))})),r:n?A.zoom.interpolate((function(t){return e.introConfig.size*i+t*(1600-e.introConfig.size*i)})):e.introConfig.size*i,style:{fill:e.colors.main}})]},t)}));return Object(a.useEffect)((function(){var e=setTimeout((function(){v(!0)}),1e4);return function(){return clearTimeout(e)}}),[]),Object(K.jsxs)(l.a.g,{opacity:I.opacity,children:[Object(K.jsx)(l.a.circle,{cx:400,cy:300,r:50*i,style:{fill:"#f0f067"},opacity:T.opacity}),S,Object(K.jsx)(l.a.text,{x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle",style:{fontSize:"80px",fill:c.introConfig.textColor},opacity:P.opacity,children:c.name})]})},Y=function(e){var t=e.planet,n=e.completedMissions;return Object(K.jsxs)("g",{children:[Object(K.jsx)("text",{textAnchor:"end",dominantBaseline:"hanging",x:785,y:15,style:{fill:t.colors.text,fontSize:"24px"},children:t.name}),t.missions.map((function(e,o){return Object(K.jsx)("circle",{cx:35+55*o,cy:35,r:20,style:{fill:n>o?t.colors.main:"rgba(0, 0, 0, 0)",stroke:t.colors.main,strokeWidth:n>o?0:1}},o)}))]})},Z=function(e){var t=e.object,n=e.x,o=e.y,a=e.center,c=e.costumeIndex,i=e.opacity;return void 0===c&&(c=0),Object(K.jsx)("image",{href:t.images[c],height:t.height,x:!1===a?n:n-t.width/2,y:o,opacity:i})},J=100,X=Object(l.a)(Z),q=function(e){var t=e.planetIndex,n=e.missionIndex,o=e.onSuccess,c=e.onFailure,i=e.program,r=e.programSubmitted,u=U[t],b=u.missions[n];Object(a.useEffect)((function(){V({category:"Level",action:"Start Level",label:L(t,n)})}),[n,t]);var h=Object(a.useState)({startTime:new Date,currentInstruction:0,instructionsCompleted:0,items:b.items,winMessage:!1,loseMessage:!1,photographs:[],bridges:[],loopMetadata:{},events:[]}),g=Object(s.a)(h,2),v=g[0],x=g[1],y=v.startTime,R=v.currentInstruction,E=v.instructionsCompleted,T=v.items,k=v.photographs,C=v.bridges,A=v.winMessage,I=v.loseMessage,P=T.findIndex((function(e){return"rover"===e.id})),S=-1!==P?T[P]:null,_=T.findIndex((function(e){return"rocket"===e.id})),w=-1!==_?T[_]:null;function M(e){switch(e.category){case"rover_x":return e.value===S.x;case"location_x":var t,n=Object(m.a)(T);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.id===e.id&&o.x===e.value)return!0}}catch(j){n.e(j)}finally{n.f()}return!1;case"rover_carry":var a,c=Object(m.a)(T);try{for(c.s();!(a=c.n()).done;){var i=a.value;if(i.id===e.value&&!0===i.carried)return!0}}catch(j){c.e(j)}finally{c.f()}return!1;case"event":var r,s=Object(m.a)(v.events);try{for(s.s();!(r=s.n()).done;){var l=r.value;if(e.value===l)return!0}}catch(j){s.e(j)}finally{s.f()}return!1;case"photograph":var u,b=Object(m.a)(k);try{for(b.s();!(u=b.n()).done;){var d=u.value;if(e.value===d)return!0}}catch(j){b.e(j)}finally{b.f()}return!1;default:return console.log("Error: Unknown criterion."),!1}}function B(e){return e.map((function(e,t){return t===P?Object(O.a)(Object(O.a)({},S),{},{util:(S.util||0)+1}):e}))}if(r&&R<i.length&&E===R&&!A&&!I){var F,W=i[R];switch(W.block){case f.FORWARD:x((function(e){return Object(O.a)(Object(O.a)({},e),{},{instructionsCompleted:e.instructionsCompleted+1,items:e.items.map((function(e,t){return t===P||!0===e.carried?Object(O.a)(Object(O.a)({},e),{},{x:0===S.costumeNumber?e.x+J:e.x-J}):e}))})}));break;case f.TURN:x((function(e){return Object(O.a)(Object(O.a)({},e),{},{instructionsCompleted:e.instructionsCompleted+1,items:e.items.map((function(e,t){return t===P?Object(O.a)(Object(O.a)({},S),{},{costumeNumber:0===S.costumeNumber?1:0}):e}))})}));break;case f.PICK_UP:F=function(){var e,t=null,n=Object(m.a)(T);try{for(n.s();!(e=n.n()).done;){var o=e.value;!o.carried&&o!==S&&o.x===S.x&&(null===t||o.elevation>t.elevation)&&(t=o)}}catch(a){n.e(a)}finally{n.f()}return t}(),x(null!==F?function(e){return Object(O.a)(Object(O.a)({},e),{},{instructionsCompleted:e.instructionsCompleted+1,items:e.items.map((function(e,t){return e===F?Object(O.a)(Object(O.a)({},F),{},{elevation:30,prevElevation:F.elevation,carried:!0}):t===P?Object(O.a)(Object(O.a)({},S),{},{util:(S.util||0)+1}):e}))})}:function(e){return Object(O.a)(Object(O.a)({},e),{},{instructionsCompleted:e.instructionsCompleted+1,items:B(e.items)})});break;case f.DROP:F=function(){var e,t=Object(m.a)(T);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(n.carried)return n}}catch(o){t.e(o)}finally{t.f()}return null}(),x(null!==F?function(e){return Object(O.a)(Object(O.a)({},e),{},{instructionsCompleted:e.instructionsCompleted+1,items:e.items.map((function(e,t){return e===F?Object(O.a)(Object(O.a)({},F),{},{elevation:F.prevElevation,carried:!1}):t===P?Object(O.a)(Object(O.a)({},S),{},{util:(S.util||0)+1}):e}))})}:function(e){return Object(O.a)(Object(O.a)({},e),{},{instructionsCompleted:e.instructionsCompleted+1,items:B(e.items)})});break;case f.LAUNCH_ROCKET:var G=w&&S&&w.x===S.x;x((function(e){return Object(O.a)(Object(O.a)({},e),{},{instructionsCompleted:e.instructionsCompleted+1,items:G?e.items.map((function(e,t){return t===P?Object(O.a)(Object(O.a)({},S),{},{opacity:-10}):t===_?Object(O.a)(Object(O.a)({},w),{},{elevation:600}):e})):e.items,events:[].concat(Object(j.a)(e.events),[p])})}));break;case f.REPEAT:var z=v.loopMetadata[W.meta.id]||0;z>=W.args.count?x((function(e){return Object(O.a)(Object(O.a)({},e),{},{currentInstruction:W.meta.jumpTo-1,instructionsCompleted:W.meta.jumpTo,items:B(e.items)})})):x((function(e){return Object(O.a)(Object(O.a)({},e),{},{currentInstruction:e.currentInstruction+1,instructionsCompleted:e.instructionsCompleted+1,items:B(e.items),loopMetadata:Object(O.a)(Object(O.a)({},e.loopMetadata),{},Object(d.a)({},W.meta.id,z+1))})}));break;case f.END_REPEAT:x((function(e){return Object(O.a)(Object(O.a)({},e),{},{currentInstruction:W.meta.jumpBackTo,instructionsCompleted:W.meta.jumpBackTo,items:B(e.items)})}));break;case f.TAKE_PHOTO:x((function(e){return Object(O.a)(Object(O.a)({},e),{},{instructionsCompleted:e.instructionsCompleted+1,photographs:[].concat(Object(j.a)(e.photographs),[S.x]),items:B(e.items)})}));break;case f.BRIDGE:var H=0===S.costumeNumber?S.x+J:S.x-J;!function(e){var t,n=Object(m.a)(T);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.allowFall&&o.x===e)return!0}}catch(a){n.e(a)}finally{n.f()}return!1}(H)?x((function(e){return Object(O.a)(Object(O.a)({},e),{},{loseMessage:"Tenacity can only build bridges over craters."})})):x((function(e){return Object(O.a)(Object(O.a)({},e),{},{instructionsCompleted:e.instructionsCompleted+1,bridges:[].concat(Object(j.a)(e.bridges),[H]),items:B(e.items)})}));break;default:console.log("ERROR: Unknown block.")}}var Y=Object(l.b)({to:{opacity:A?1:0},from:{opacity:0},config:{duration:1e3},delay:500,onRest:function(){A&&(V({category:"Level",action:"Win Level",label:L(t,n),value:Math.round((new Date-y)/1e3)}),setTimeout((function(){o()}),2500))}}),Z=Object(l.b)({to:{opacity:I?1:0},from:{opacity:0},config:{duration:1e3},delay:500,onRest:function(){I&&(V({category:"Level",action:"Lose Level",label:L(t,n),value:Math.round((new Date-y)/1e3)}),setTimeout((function(){c()}),2500))}}),q=Object(l.c)(T.length,T.map((function(e,t){return{to:{x:e.x,elevation:e.elevation,opacity:e.opacity,util:e.util||0},config:{duration:1e3},onRest:function(){if(!A&&!I)if(t===P&&r&&function(e){var t,n=Object(m.a)(C);try{for(n.s();!(t=n.n()).done;)if(t.value===e.x)return!1}catch(i){n.e(i)}finally{n.f()}var o,a=Object(m.a)(T);try{for(a.s();!(o=a.n()).done;){var c=o.value;if(c.allowFall&&c.x===e.x&&0===e.elevation)return!0}}catch(i){a.e(i)}finally{a.f()}return!1}(e))x((function(e){return Object(O.a)(Object(O.a)({},e),{},{items:e.items.map((function(e,t){return t===P||!0===e.carried?Object(O.a)(Object(O.a)({},e),{},{elevation:e.elevation-20}):e})),loseMessage:"Tenacity fell into crater."})}));else{if(t===P&&r&&v.instructionsCompleted===i.length){var n=function(){for(var e=0;e<b.criteria.length;e++)if(!M(b.criteria[e]))return{isWin:!1,message:b.criteria[e].message||!0};return{isWin:!0}}(),o=n.isWin,a=n.message;x(o?function(e){return Object(O.a)(Object(O.a)({},e),{},{winMessage:!0})}:function(e){return Object(O.a)(Object(O.a)({},e),{},{loseMessage:a})})}t===P&&r&&v.instructionsCompleted>R&&v.instructionsCompleted!==i.length&&setTimeout((function(){x((function(e){return Object(O.a)(Object(O.a)({},e),{},{currentInstruction:e.currentInstruction+1})}))}),250)}}}})));return Object(K.jsxs)("g",{children:[q.map((function(e,t){var n=T[t];return Object(K.jsx)(X,{object:n.object,x:e.x,y:e.elevation.interpolate((function(e){return D(n.object,e)})),costumeIndex:n.costumeNumber,center:!1!==n.object.center,opacity:e.opacity},t)})),C.map((function(e,t){var n=N.BRIDGE;return Object(K.jsx)(X,{object:n,x:e,y:D(n,-n.height),costumeIndex:0,center:!0,opacity:1},t)})),k.map((function(e,t){var n=N.PHOTOGRAPH;return Object(K.jsx)(X,{object:n,x:e,y:D(n,-80),costumeIndex:0,center:!0,opacity:1},t)})),Object(K.jsx)(l.a.text,{x:"50%",y:"20%",dominantBaseline:"middle",textAnchor:"middle",opacity:Y.opacity,style:{fontSize:"80px",fill:u.colors.text},children:"Mission Success"}),Object(K.jsx)(l.a.text,{x:"50%",y:"20%",dominantBaseline:"middle",textAnchor:"middle",opacity:Z.opacity,style:{fontSize:"80px",fill:u.colors.text},children:"Try Again"}),Object(K.jsx)(l.a.text,{x:"50%",y:"35%",dominantBaseline:"middle",textAnchor:"middle",opacity:Z.opacity,style:{fontSize:"30px",fill:u.colors.text},children:!0===I?"":I})]})},Q=function(e){var t=e.missionNumber,n=e.objective,o=e.hint;return Object(K.jsxs)("div",{style:{fontSize:"24px",textAlign:"center"},children:[Object(K.jsxs)("strong",{children:["Mission ",t," Objective"]}),Object(K.jsx)("br",{}),n,o&&Object(K.jsxs)("div",{style:{fontSize:"18px",textAlign:"center"},children:[Object(K.jsx)("hr",{}),o,Object(K.jsx)("br",{})]})]})},$=function(e){var t=e.briefing,n=e.onCompleteBriefing;return Object(K.jsxs)("div",{style:{fontSize:"24px",textAlign:"center"},children:[t,Object(K.jsx)("br",{}),Object(K.jsx)("button",{onClick:n,children:"Continue"})]})},ee="COMPLETE_INTRO",te="COMPLETE_PLANET_INTRO",ne="ZOOM_PLANET_INTRO",oe="COMPLETE_BRIEFING",ae="ADD_TO_PROGRAM",ce="RESET_PROGRAM",ie="SUBMIT_PROGRAM",re="NEXT_MISSION",se="REPEAT_MISSION",le=0,ue=1,be=2,de=(B={},Object(d.a)(B,ee,(function(e){return Object(O.a)(Object(O.a)({},e),{},{introShown:!0})})),Object(d.a)(B,ne,(function(e){return e.planetIntroStatus===le?Object(O.a)(Object(O.a)({},e),{},{planetIntroStatus:ue}):e})),Object(d.a)(B,te,(function(e){return Object(O.a)(Object(O.a)({},e),{},{planetIntroStatus:be})})),Object(d.a)(B,oe,(function(e){return Object(O.a)(Object(O.a)({},e),{},{briefingShown:!0})})),Object(d.a)(B,ae,(function(e,t){var n=t.block,o=t.args;return Object(O.a)(Object(O.a)({},e),{},{program:[].concat(Object(j.a)(e.program),[{block:n,args:o}])})})),Object(d.a)(B,ce,(function(e){return Object(O.a)(Object(O.a)({},e),{},{program:[]})})),Object(d.a)(B,ie,(function(e,t){return Object(O.a)(Object(O.a)({},e),{},{program:t,programSubmitted:!0})})),Object(d.a)(B,re,(function(e){var t=U[e.planetIndex];return e.missionIndex+1<t.missions.length?Object(O.a)(Object(O.a)({},e),{},{missionIndex:e.missionIndex+1,round:e.round+1,program:[],programSubmitted:!1}):e.planetIndex+1<U.length?Object(O.a)(Object(O.a)({},e),{},{planetIndex:e.planetIndex+1,missionIndex:0,round:e.round+1,planetIntroStatus:le,briefingShown:!1,program:[],programSubmitted:!1}):Object(O.a)(Object(O.a)({},e),{},{done:!0})})),Object(d.a)(B,se,(function(e){return Object(O.a)(Object(O.a)({},e),{},{round:e.round+1,program:[],programSubmitted:!1})})),B),je=function(e,t){var n=t.type,o=t.payload,a=de[n];return a?a(e,o):e},Oe=function(e){var t,n=e.onStartPlaying,o=Object(a.useReducer)(je,{planetIndex:0,missionIndex:0,done:!1,round:0,introShown:!!(t=!1),planetIntroStatus:t?be:le,briefingShown:!!t,program:[],programSubmitted:!1}),c=Object(s.a)(o,2),i=c[0],r=c[1],u=function(e,t){return r({type:e,payload:t})},b=i.planetIndex,d=i.missionIndex,j=i.introShown,O=i.planetIntroStatus,m=i.briefingShown,p=i.program,f=i.programSubmitted,h=i.round,v=i.done,x=U[b],y=x.missions[d];function R(){u(ee)}function E(){u(ne)}function T(){u(te)}function k(){u(oe)}var C=Object(l.b)({to:{color:j?O>=ue?x.colors.sky:"black":"rgba(0, 0, 0, 0)"},from:{color:"rgba(0, 0, 0, 0)"},config:{duration:1500}}),A=O===be,I=A&&m;return v?Object(K.jsx)(G,{}):Object(K.jsxs)("div",{style:{maxWidth:S},children:[Object(K.jsxs)(l.a.svg,{width:S,height:_,className:"scene",style:{backgroundColor:C.color},children:[O>=ue&&Object(K.jsx)(z,{planet:x}),A&&Object(K.jsx)(Y,{planet:x,completedMissions:d}),j?A?Object(K.jsx)(q,{planetIndex:b,missionIndex:d,onFailure:function(){return u(se)},onSuccess:function(){return u(re)},program:p,programSubmitted:f},h):Object(K.jsx)(H,{planetIndex:b,onZoomIntro:E,onCompleteIntro:T}):Object(K.jsx)(W,{onStartPlaying:n,onCompleteIntro:R})]}),A&&(m?Object(K.jsx)(Q,{missionNumber:d+1,objective:y.objective,hint:y.hint}):Object(K.jsx)($,{briefing:x.briefing,onCompleteBriefing:k})),I&&Object(K.jsx)(F,{planetIndex:b,missionIndex:d,addToProgram:function(e,t){u(ae,{block:e,args:t})},blocks:g(y.blocks,p),onResetProgram:function(){return u(ce)},onSubmitProgram:function(e){return u(ie,e)},program:p,programSubmitted:f})]})},me=n.p+"static/media/amerika.421d9361.mp3",pe=Object(l.a)(b.a),fe=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(l.b)({to:{volume:n?100:0},from:{volume:0},config:{duration:8e3}});return Object(K.jsxs)("div",{className:"page",children:[Object(K.jsx)("div",{className:"scene-container",children:Object(K.jsx)(Oe,{onStartPlaying:function(){return o(!0)}})}),Object(K.jsx)(pe,{url:me,playStatus:n?b.a.status.PLAYING:b.a.status.STOPPED,autoLoad:!0,loop:!0,volume:c.volume})]})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),c(e),i(e)}))};x.a.pageview(window.location.pathname+window.location.search),r.a.render(Object(K.jsx)(c.a.StrictMode,{children:Object(K.jsx)(fe,{})}),document.getElementById("root")),he()}},[[26,1,2]]]);
//# sourceMappingURL=main.302106f1.chunk.js.map