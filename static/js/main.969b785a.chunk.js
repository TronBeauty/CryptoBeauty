(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),o=a.n(s),i=a(125),l=(a(58),a(51)),c=a(2),d=a.n(c),m=a(4),p=a(8),u=a(9),h=a(11),g=a(10),f=a(12),w=a(124),y=a(127),b=a(126),v=a(45),E=a(50),_=a(24);function N(e){return new Promise(function(t){return setTimeout(t,e)})}var C=function(){return new Promise(function(e,t){window.addEventListener("load",Object(m.a)(d.a.mark(function a(){var n;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,N(100);case 2:window.tronWeb?(n=window.tronWeb,e(n)):t("no tron link");case 3:case"end":return a.stop()}},a,this)})))})},D="img/frames/",j={0:{name:"\u53f2\u65fa\u57fa"}},x={0:{name:"\u5a77\u5a77"},1:{name:"\u601d\u5afa"},2:{name:"\u5c0f\u656c"},3:{name:"\u59a4\u73ca"},4:{name:"\u5e1b\u745c"},5:{name:"\u4f73\u4f73"}},k={0:{model_id:0,photographer_id:0,file_name:"0-0.jpg"},1:{model_id:0,photographer_id:0,file_name:"0-1.jpg"},2:{model_id:0,photographer_id:0,file_name:"0-2.jpg"},3:{model_id:0,photographer_id:0,file_name:"0-3.jpg"},4:{model_id:0,photographer_id:0,file_name:"0-4.jpg"},5:{model_id:1,photographer_id:0,file_name:"1-0.jpg"},6:{model_id:1,photographer_id:0,file_name:"1-1.jpg"},7:{model_id:1,photographer_id:0,file_name:"1-2.jpg"},8:{model_id:1,photographer_id:0,file_name:"1-3.jpg"},9:{model_id:1,photographer_id:0,file_name:"1-4.jpg"},10:{model_id:2,photographer_id:0,file_name:"2-0.jpg"},11:{model_id:2,photographer_id:0,file_name:"2-1.jpg"},12:{model_id:2,photographer_id:0,file_name:"2-2.jpg"},13:{model_id:2,photographer_id:0,file_name:"2-3.jpg"},14:{model_id:2,photographer_id:0,file_name:"2-4.jpg"},15:{model_id:3,photographer_id:0,file_name:"3-0.jpg"},16:{model_id:3,photographer_id:0,file_name:"3-1.jpg"},17:{model_id:3,photographer_id:0,file_name:"3-2.jpg"},18:{model_id:3,photographer_id:0,file_name:"3-3.jpg"},19:{model_id:3,photographer_id:0,file_name:"3-4.jpg"},20:{model_id:4,photographer_id:0,file_name:"4-0.jpg"},21:{model_id:4,photographer_id:0,file_name:"4-1.jpg"},22:{model_id:4,photographer_id:0,file_name:"4-2.jpg"},23:{model_id:4,photographer_id:0,file_name:"4-3.jpg"},24:{model_id:4,photographer_id:0,file_name:"4-4.jpg"},25:{model_id:5,photographer_id:0,file_name:"5-0.jpg"},26:{model_id:5,photographer_id:0,file_name:"5-1.jpg"},27:{model_id:5,photographer_id:0,file_name:"5-2.jpg"},28:{model_id:5,photographer_id:0,file_name:"5-3.jpg"},29:{model_id:5,photographer_id:0,file_name:"5-4.jpg"}},S={N:{file_name:"01_normal.png"},R:{file_name:"02_rare.png"},SR:{file_name:"03_superrare.png"},SSR:{file_name:"04_ssrare.png"},UR:{file_name:"05_ultrarare.png"}};var I=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.card,t=e.photoId,a=e.rarityScore,n="img/photos/"+k[t].file_name,s=x[k[t].model_id].name,o=j[k[t].photographer_id].name,i=(function(e){var t=parseInt(e)}(a),function(e){var t=parseInt(e);return D+S[t<=0?"UR":t<=20?"SSR":t<=120?"SR":t<=370?"R":"N"].file_name}(a));return r.a.createElement("article",{className:"article-card"},r.a.createElement("div",{className:"portfolio-item"},r.a.createElement("div",{className:"card-image-container"},r.a.createElement("img",{className:"card-photo",src:n,alt:""}),r.a.createElement("img",{className:"card-frame",src:i,alt:""})),r.a.createElement("div",{className:"portfolio-desc align-center"},r.a.createElement("div",{className:"folio-info"},r.a.createElement("h3",{className:"text-white white"},r.a.createElement("a",null,"# ",t)),r.a.createElement("h3",{className:"text-white white"},r.a.createElement("a",null,s)),r.a.createElement("h5",{className:"text-white white"},r.a.createElement("a",null,"By ",o)),r.a.createElement("a",{href:n,className:"fancybox"},r.a.createElement("i",{className:"fa fa-plus fa-2x"}))))))}}]),t}(n.Component),M=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cards,a=[];return a=e.reversed?t.slice(0).reverse().map(function(e,t){return r.a.createElement(I,{card:e,key:"card-"+t.toString()})}):t.map(function(e,t){return r.a.createElement(I,{card:e,key:"card-"+t.toString()})}),r.a.createElement("div",{className:"text-center",style:{width:"100%"}},a)}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).secToDHMS=function(e){return e>=0?{d:Math.floor(e/86400),h:Math.floor(e%86400/3600),m:Math.floor(e%3600/60),s:Math.floor(e%60)}:{d:0,h:0,m:0,s:0}},a.secToTimeStr=function(e){if(e<0)return"Free";var t=a.secToDHMS(e),n=t.d>0?t.d.toString()+" "+a.props.daysStr+" ":"";return n=n+t.h.toString().padStart(2,"0")+":"+t.m.toString().padStart(2,"0")+":"+t.s.toString().padStart(2,"0")},a.state={now:Math.round(Date.now()/1e3)},setInterval(function(){a.setState({now:Math.round(Date.now()/1e3)})},1e3),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.secToTimeStr(this.props.endTime-this.state.now);return r.a.createElement("span",null,e)}}]),t}(n.Component),T=(a(120),2e3),P=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={tronWebState:{installed:!1,loggedIn:!1},tronWeb:null,defaultAddress:null,ContractJSON:_,networkId:"1",networkName:"Mainnet",abi:[],accounts:null,contract:null,drawCardPrice:2e7,myCards:[],playerLastFreeDrawTime:0,freeDrawTimeGap:82800,alerts:[],isDrawingCard:!1,isDrawingCardSent:!1,isDrawingCardFailed:!1,justDrawnCards:[]},a.componentDidMount=Object(m.a)(d.a.mark(function e(){var t,n,r,s,o,i,l,c,m;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C();case 3:return t=e.sent,n="1",r="Mainnet",t.fullNode.host.includes("shasta")?(n="2",r="Shasta Testnet"):t.fullNode.host.includes("api.trongrid.io")?(n="1",r="Mainnet"):r="Unknown Network",console.log("networkId",n),s={installed:!!t,loggedIn:!!t&&t.ready},console.log("tronWebState",s),a.setState({tronWeb:t,tronWebState:s,networkId:n,networkName:r}),o=_.abi,i=_.networks[n].address,l="T"===i[0]?t.address.toHex(i):i,console.log("contractAddressHex",l),e.next=17,t.contract().at(l);case 17:if(c=e.sent,console.log("contract",c),a.setState({contract:c,abi:o}),s.loggedIn){e.next=22;break}return e.abrupt("return");case 22:m=t.defaultAddress,console.log("defaultAddress",m),a.setState({defaultAddress:m},function(){a.getLatestPhotoId(),a.getCardPrice(),a.getMyCards(),a.getPlayerLastFreeDrawTime()}),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(0),console.error(e.t0);case 30:case"end":return e.stop()}},e,this,[[0,27]])})),a.triggerContract=function(){var e=Object(m.a)(d.a.mark(function e(t,a,n){var r,s,o,i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=this.state,s=r.abi,o=r.contract,i="send",s.forEach(function(e){e.name===t&&(i=/payable/.test(e.stateMutability)?"send":"call")}),o[t].apply(o,Object(l.a)(a))[i]({feeLimit:this.feeLimit,callValue:this.callValue||0}).then(function(e){e&&n&&n(e)});case 4:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.getLatestPhotoId=Object(m.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.contract,e.next=3,t.getLatestPhotoId().call();case 3:n=e.sent,console.log("latestPhotoId",n);case 5:case"end":return e.stop()}},e,this)})),a.getFreeDrawTimeGap=Object(m.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.contract,e.next=3,t.freeDrawTimeGap().call();case 3:n=e.sent,console.log("freeDrawTimeGap",n,n.toNumber()),a.setState({freeDrawTimeGap:n.toNumber()});case 6:case"end":return e.stop()}},e,this)})),a.getCardPrice=Object(m.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.contract,e.next=3,t.drawCardPrice().call();case 3:n=e.sent,console.log("drawCardPrice",n),a.setState({drawCardPrice:n.toNumber()});case 6:case"end":return e.stop()}},e,this)})),a.getTransferEvents=Object(m.a)(d.a.mark(function e(){var t,n,r,s,o,i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.tronWeb,r=t.networkId,s=t.ContractJSON,o=s.networks[r].addressBase58,console.log("getTransferEvents"),e.next=5,n.getEventResult(o,154653014e4,"Transfer");case 5:i=e.sent,console.log("events",i);case 7:case"end":return e.stop()}},e,this)})),a.getCardDrawnEvents=Object(m.a)(d.a.mark(function e(){var t,n,r,s,o,i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.tronWeb,r=t.networkId,s=t.ContractJSON,o=s.networks[r].addressBase58,console.log("getCardDrawnEvents"),e.next=5,n.getEventResult(o,154653014e4,"CardDrawn");case 5:i=e.sent,console.log("events",i);case 7:case"end":return e.stop()}},e,this)})),a.getMyCards=Object(m.a)(d.a.mark(function e(){var t,n,r,s,o,i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.contract,r=t.defaultAddress,console.log("getMyCards"),e.next=4,n.drawnCardsOf(r.hex).call();case 4:for(s=e.sent,console.log("drawnCards",s),o=[],i=0;i<s.cardIds.length;i++)o.push({cardId:s.cardIds[i].toNumber(),photoId:s.photoIds[i].toNumber(),rarityScore:s.rarityScores[i].toNumber()});return a.setState({myCards:o}),e.abrupt("return",o);case 10:case"end":return e.stop()}},e,this)})),a.getPlayerLastFreeDrawTime=Object(m.a)(d.a.mark(function e(){var t,n,r,s;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.contract,r=t.defaultAddress,e.next=3,n.playerLastFreeDrawTime(r.hex).call();case 3:s=e.sent,console.log("playerLastFreeDrawTime",s,s.toNumber()),a.setState({playerLastFreeDrawTime:s.toNumber()});case 6:case"end":return e.stop()}},e,this)})),a.freeDrawCard=Object(m.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.state.contract,console.log("freeDrawCard"),a.onDrawingCard(),t.freeDrawCard(0).send({feeLimit:void 0,callValue:0,shouldPollResponse:!1}).then(function(e){console.log("freeDrawCard result",e),a.onDrawingCardSent(1)},function(e){console.log("freeDrawCard error",e),a.onDrawingCardFailed()});case 4:case"end":return e.stop()}},e,this)})),a.drawCard=Object(m.a)(d.a.mark(function e(){var t,n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.state,n=t.contract,r=t.drawCardPrice,console.log("drawCard"),a.onDrawingCard(),n.drawCard(0).send({feeLimit:void 0,callValue:r,shouldPollResponse:!1}).then(function(e){console.log("drawCard result",e),a.onDrawingCardSent(1)},function(e){console.log("drawCard error",e),a.onDrawingCardFailed()});case 4:case"end":return e.stop()}},e,this)})),a.draw10Cards=Object(m.a)(d.a.mark(function e(){var t,n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.state,n=t.contract,r=t.drawCardPrice,console.log("draw10Cards"),a.onDrawingCard(),10,n.drawMultipleCards(0,10).send({feeLimit:void 0,callValue:10*r,shouldPollResponse:!1}).then(function(e){console.log("draw10Cards result",e),a.onDrawingCardSent(10)},function(e){console.log("draw10Cards error",e),a.onDrawingCardFailed()});case 5:case"end":return e.stop()}},e,this)})),a.onDrawingCard=Object(m.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({isDrawingCard:!0});case 1:case"end":return e.stop()}},e,this)})),a.onDrawingCardSent=function(){var e=Object(m.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({isDrawingCardSent:!0}),setTimeout(function(){a.pollDrawingCard(t)},T);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.pollDrawingCard=function(){var e=Object(m.a)(d.a.mark(function e(t){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("pollDrawingCard"),n=a.state.myCards.length,e.next=4,a.getMyCards();case 4:e.sent.length>n?a.onPollCardDrawn(t):setTimeout(function(){a.pollDrawingCard(t)},T);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onDrawingCardFailed=Object(m.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({isDrawingCard:!1,isDrawingCardSent:!1,isDrawingCardFailed:!0});case 1:case"end":return e.stop()}},e,this)})),a.onCardDrawn=function(){var e=Object(m.a)(d.a.mark(function e(t){var n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onCardDrawn"),e.next=3,a.getMyCards();case 3:n=a.state.myCards,r=n.slice(Math.max(n.length-t,0)),console.log("justDrawnCards",r),a.setState({isDrawingCard:!1,isDrawingCardSent:!1,justDrawnCards:r});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onPollCardDrawn=function(){var e=Object(m.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("onPollCardDrawn"),setTimeout(Object(m.a)(d.a.mark(function e(){var n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getMyCards();case 2:n=a.state.myCards,r=n.slice(Math.max(n.length-t,0)),console.log("justDrawnCards",r),a.setState({isDrawingCard:!1,isDrawingCardSent:!1,justDrawnCards:r}),a.getPlayerLastFreeDrawTime();case 7:case"end":return e.stop()}},e,this)})),T);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.pushAlert=function(){var e=Object(m.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.state.alerts.push(t),a.setState({alerts:a.state.alerts});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.dismissAlert=function(){var e=Object(m.a)(d.a.mark(function e(t){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("input",t),n=a.state.alerts.filter(function(e){return e.id!=t.id}),a.setState({alerts:n});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.playerLastFreeDrawTime+this.state.freeDrawTimeGap,t=Date.now()/1e3>e;return r.a.createElement(v.ParallaxProvider,{init:{smoothScrollingDuration:500,smoothScrolling:!0,forceHeight:!1}},r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{timeout:5e3,onDismiss:this.dismissAlert,position:"bottom-left",alerts:this.state.alerts}),r.a.createElement("section",{id:"header",className:"appear"}),r.a.createElement("div",{className:"navbar navbar-fixed-top navbar-default-style",style:{backgroundColor:"rgba(68,188,221,1)",paddingLeft:"15px"},role:"navigation","data-0":"line-height:60px; height:60px; background-color:rgba(68,188,221,1);","data-300":"line-height:40px; height:40px; background-color:rgba(68,188,221,0.6);"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":".navbar-collapse"},r.a.createElement("span",{className:"fa fa-bars color-white"})),r.a.createElement("h1",null,r.a.createElement(w.a,{to:"/",className:"navbar-brand navbar-brand-default-style","data-0":"line-height:60px;","data-300":"line-height:50px;"},"CryptoBeauty"))),r.a.createElement("div",{className:"navbar-collapse collapse"},r.a.createElement("ul",{className:"nav navbar-nav","data-0":"margin-top:10px;","data-300":"margin-top:5px;"},r.a.createElement("li",null,r.a.createElement("a",{style:{color:"#DDD"}},"on ",this.state.networkName)),r.a.createElement("li",null,r.a.createElement(y.a,null,r.a.createElement(b.a,{exact:!0,path:"/asset"},r.a.createElement(w.a,{to:"/"},"Own A Girl")),r.a.createElement(b.a,null,r.a.createElement(w.a,{to:"/asset"},"My Girls")))))))),r.a.createElement(y.a,null,r.a.createElement(b.a,{exact:!0,path:"/asset"},r.a.createElement("div",null,r.a.createElement("section",{id:"section-works",className:"section appear clearfix"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mar-bot40"},r.a.createElement("div",{className:"col-md-offset-3 col-md-6"},r.a.createElement("div",{className:"section-header"},r.a.createElement("h2",{className:"section-heading animated","data-animation":"bounceInUp"},"Girls in the house")))),this.state.tronWebState.loggedIn?r.a.createElement("div",{className:"row"},0===this.state.myCards.length?r.a.createElement("h3",null,"\u4f60\u9084\u6c92\u6709\u5361\u7247\uff0c\u5feb",r.a.createElement(w.a,{to:"/"},"\u56de\u5230\u9996\u9801"),"\u62bd\u4e00\u5f35\u5427\uff01"):r.a.createElement(M,{cards:this.state.myCards,reversed:!0})):r.a.createElement("div",null,r.a.createElement("h3",null,"\u8acb\u5728\u96fb\u8166\u4e0a\u7528 ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/chrome/"},"Chrome")," \u958b\u555f\u7db2\u9801"),r.a.createElement("h3",null,"\u4e26\u5b89\u88dd\u8207\u89e3\u9396 ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec"},"TronLink"))))))),r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement("section",{id:"parallax4",className:"section pad-top150 pad-bot150","data-stellar-background-ratio":"0.5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"align-center pad-top150 pad-bot150"},r.a.createElement("img",{className:"align-left cryptobeauty-logo-img",style:{width:"400px",left:"40px",top:"45px",position:"absolute"},src:"img/logo/cryptobeautylogo01.png",alt:""}),r.a.createElement("h1",{className:"align-left text-white-outlined pad-top20"},"Crypto Beauty ",r.a.createElement("span",{className:"cryptobeauty-title"},"\u5bc6\u78bc\u5973\u5b69")),r.a.createElement("h3",{className:"align-left text-white-outlined"},r.a.createElement("b",null,"\u4f60\u5c08\u5c6c\u7684\u5340\u584a\u93c8\u5c11\u5973\u5361\u7247\u5275\u4f5c\u4ea4\u6613\u5e73\u53f0"))))),r.a.createElement("section",{id:"section-services",className:"section pad-bot20 bg-white"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"align-center color-swimsuitblue pad-bot20"},"\u4f60\u7684\u5973\u5b69\uff0c\u4e00\u9375\u64c1\u6709"),this.state.tronWebState.loggedIn?r.a.createElement("div",{className:"row mar-bot40"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"align-center"},t?r.a.createElement("div",{className:"button-container button-slide-horizontal"},r.a.createElement("div",{className:"slider slider-horizontal"},r.a.createElement("div",{className:"button",onClick:this.freeDrawCard},r.a.createElement("i",{className:"color-white"},"\u6bcf\u65e5\u514d\u8cbb\u62bd")))):r.a.createElement("div",{className:"button-container"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"button button-muted"},r.a.createElement("i",{className:"color-white"},"\u6bcf\u65e5\u514d\u8cbb\u62bd")))),r.a.createElement("h4",{className:"color-2blue"},r.a.createElement(O,{endTime:e})))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"align-center"},r.a.createElement("div",{className:"button-container button-slide-horizontal"},r.a.createElement("div",{className:"slider slider-horizontal"},r.a.createElement("div",{className:"button",onClick:this.drawCard},r.a.createElement("i",{className:"color-white"},"\u55ae\u5f35\u62bd\u5361")))),r.a.createElement("h4",{className:"color-2blue"},this.state.drawCardPrice/1e6," TRX"))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"align-center"},r.a.createElement("div",{className:"button-container button-slide-horizontal"},r.a.createElement("div",{className:"slider slider-horizontal"},r.a.createElement("div",{className:"button",onClick:this.draw10Cards},r.a.createElement("i",{className:"color-white"},"\u8d85\u503c\u5361\u5305")))),r.a.createElement("h4",{className:"color-2blue"},this.state.drawCardPrice/1e6*10," TRX")))):r.a.createElement("div",null,r.a.createElement("h3",null,"\u8acb\u5728\u96fb\u8166\u4e0a\u7528 ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/chrome/"},"Chrome")," \u958b\u555f\u7db2\u9801"),r.a.createElement("h3",null,"\u4e26\u5b89\u88dd\u8207\u89e3\u9396 ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec"},"TronLink"))),this.state.isDrawingCard?r.a.createElement("div",null,r.a.createElement("div",{className:"spinner"}),this.state.isDrawingCardSent&&r.a.createElement("h3",{className:""},"\u62bd\u5361\u4e2d\uff0c\u82e5\u5361\u7247\u4e45\u672a\u51fa\u73fe\uff0c\u8acb\u624b\u52d5",r.a.createElement(w.a,{to:"/asset"},"\u8df3\u8f49\u81f3 My Girls \u67e5\u770b"))):this.state.isDrawingCardFailed?r.a.createElement("div",null,r.a.createElement("h3",null,"\u62bd\u5361\u5931\u6557"),r.a.createElement("h4",null,"\u8acb\u78ba\u5b9a TronLink \u9023\u63a5\u5230\u4e3b\u7db2\u4e0a\uff0c\u4e26\u4e14\u64c1\u6709\u8db3\u5920\u7684 TRX")):r.a.createElement(M,{cards:this.state.justDrawnCards,reversed:!0}))),r.a.createElement("section",{id:"testimonials",className:"section","data-stellar-background-ratio":"0.5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"align-center"},r.a.createElement("div",{className:"testimonial pad-top40 pad-bot40"},r.a.createElement("h1",{className:"text-white-outlined"},"\u53d6\u5f97\u7db2\u7d05\u79c1\u5bc6\u7dda\u4e0b\u6d3b\u52d5\u7684\u5c08\u5c6c\u9580\u7968"),r.a.createElement("br",null))))))),r.a.createElement("section",{id:"section-about",className:"section appear clearfix"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mar-bot40"},r.a.createElement("div",{className:"col-md-offset-3 col-md-6"},r.a.createElement("div",{className:"section-header"},r.a.createElement("h2",{className:"section-heading animated","data-animation":"bounceInUp"},"\u5340\u584a\u93c8 X \u6a21\u7279"),r.a.createElement("p",null,"\u6e05\u7d14\u5236\u670d / \u9650\u91cf\u7248\u578b / \u5340\u584a\u93c8 / \u6578\u4f4d\u52a0\u5bc6 / \u79c1\u6709\u8cc7\u7522 ")))),r.a.createElement("div",{className:"row align-center mar-bot40"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"team-member"},r.a.createElement("figure",{className:"member-photo"},r.a.createElement("img",{src:"img/team/member5.jpg",alt:""})),r.a.createElement("div",{className:"team-detail"},r.a.createElement("h4",null,"\u5a77\u5a77"),r.a.createElement("span",null,"IG:tinaaalee")))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"team-member"},r.a.createElement("figure",{className:"member-photo"},r.a.createElement("img",{src:"img/team/member6.jpg",alt:""})),r.a.createElement("div",{className:"team-detail"},r.a.createElement("h4",null,"\u601d\u5afa")))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"team-member"},r.a.createElement("figure",{className:"member-photo"},r.a.createElement("img",{src:"img/team/member7.jpg",alt:""})),r.a.createElement("div",{className:"team-detail"},r.a.createElement("h4",null,"\u5c0f\u656c")))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"team-member"},r.a.createElement("figure",{className:"member-photo"},r.a.createElement("img",{src:"img/team/member8.jpg",alt:""})),r.a.createElement("div",{className:"team-detail"},r.a.createElement("h4",null,"\u59a4\u73ca")))))))))),r.a.createElement("section",{id:"footer",className:"section footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-center copyright"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("p",null,"All rights reserved by CryptoBeauty")))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e){e.exports={contractName:"CryptoBeauty",abi:{entrys:[{name:"drawMultipleCards",inputs:[{name:"_photoPoolId",type:"uint256"},{name:"_amount",type:"uint256"}],type:2,payable:!0,stateMutability:4},{name:"drawMultipleCardsFromMultiplePools",inputs:[{name:"_photoPoolIds",type:"uint256[]"}],type:2,payable:!0,stateMutability:4},{constant:!0,name:"isValidPhotoId",inputs:[{name:"_photoId",type:"uint256"}],outputs:[{type:"bool"}],type:2,stateMutability:2},{constant:!0,name:"drawnCardIdsOf",inputs:[{name:"_user",type:"address"}],outputs:[{name:"cardIds",type:"uint256[]"}],type:2,stateMutability:2},{name:"addPhotos",inputs:[{name:"_modelIds",type:"uint256[]"},{name:"_photographerIds",type:"uint256[]"}],type:2,stateMutability:3},{name:"withdraw",inputs:[{name:"amount",type:"uint256"}],type:2,stateMutability:3},{constant:!0,name:"isValidPoolId",inputs:[{name:"_photoPoolId",type:"uint256"}],outputs:[{type:"bool"}],type:2,stateMutability:2},{name:"renounceOwnership",type:2,stateMutability:3},{name:"addPhotoPool",inputs:[{name:"_photoIds",type:"uint256[]"}],type:2,stateMutability:3},{constant:!0,name:"drawnCardsOf",inputs:[{name:"_user",type:"address"}],outputs:[{name:"cardIds",type:"uint256[]"},{name:"photoIds",type:"uint256[]"},{name:"rarityScores",type:"uint256[]"}],type:2,stateMutability:2},{constant:!0,name:"getLatestPhotoPoolId",outputs:[{type:"uint256"}],type:2,stateMutability:2},{name:"setDrawCardPrice",inputs:[{name:"_price",type:"uint256"}],type:2,stateMutability:3},{constant:!0,name:"owner",outputs:[{type:"address"}],type:2,stateMutability:2},{constant:!0,name:"cards",inputs:[{type:"uint256"}],outputs:[{name:"photoId",type:"uint256"},{name:"rarityScore",type:"uint256"},{name:"holder",type:"address"}],type:2,stateMutability:2},{constant:!0,name:"isOwner",outputs:[{type:"bool"}],type:2,stateMutability:2},{constant:!0,name:"ownerWalletAddr",outputs:[{type:"address"}],type:2,stateMutability:2},{constant:!0,name:"getLatestPhotoId",outputs:[{type:"uint256"}],type:2,stateMutability:2},{constant:!0,name:"playerLastFreeDrawTime",inputs:[{type:"address"}],outputs:[{type:"uint256"}],type:2,stateMutability:2},{constant:!0,name:"photos",inputs:[{type:"uint256"}],outputs:[{name:"modelId",type:"uint256"},{name:"photographerId",type:"uint256"}],type:2,stateMutability:2},{name:"drawCard",inputs:[{name:"_photoPoolId",type:"uint256"}],type:2,payable:!0,stateMutability:4},{name:"transfer",inputs:[{name:"_cardId",type:"uint256"},{name:"_to",type:"address"}],type:2,stateMutability:3},{name:"addPhoto",inputs:[{name:"_modelId",type:"uint256"},{name:"_photographerId",type:"uint256"}],type:2,stateMutability:3},{constant:!0,name:"isValidCardId",inputs:[{name:"_cardId",type:"uint256"}],outputs:[{type:"bool"}],type:2,stateMutability:2},{constant:!0,name:"drawCardPrice",outputs:[{type:"uint256"}],type:2,stateMutability:2},{constant:!0,name:"playerDrawnCardIds",inputs:[{type:"address"},{type:"uint256"}],outputs:[{type:"uint256"}],type:2,stateMutability:2},{name:"setFreeDrawTimeGap",inputs:[{name:"_gap",type:"uint256"}],type:2,stateMutability:3},{constant:!0,name:"freeDrawTimeGap",outputs:[{type:"uint256"}],type:2,stateMutability:2},{name:"freeDrawCard",inputs:[{name:"_photoPoolId",type:"uint256"}],type:2,stateMutability:3},{name:"transferOwnership",inputs:[{name:"newOwner",type:"address"}],type:2,stateMutability:3},{inputs:[{name:"_drawCardPrice",type:"uint256"},{name:"_ownerWalletAddr",type:"address"}],type:1,stateMutability:3},{name:"PoolAdded",inputs:[{indexed:!0,name:"photoPoolId",type:"uint256"}],type:3},{name:"PhotoAdded",inputs:[{indexed:!0,name:"photoId",type:"uint256"},{indexed:!0,name:"modelId",type:"uint256"},{indexed:!0,name:"photographerId",type:"uint256"}],type:3},{name:"CardDrawn",inputs:[{indexed:!0,name:"cardId",type:"uint256"},{indexed:!0,name:"photoId",type:"uint256"},{name:"rarityScore",type:"uint256"},{indexed:!0,name:"to",type:"address"}],type:3},{name:"Transfer",inputs:[{indexed:!0,name:"cardId",type:"uint256"},{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"}],type:3},{name:"OwnershipTransferred",inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],type:3}]},compiler:{name:"solc",version:"0.4.23+commit.124ca40d.Emscripten.clang"},networks:{1:{addressBase58:"TXh5o25svsvgmxqDG35gU1Xcq5BcmwmcqS",addressHex:"",address:"TXh5o25svsvgmxqDG35gU1Xcq5BcmwmcqS"},2:{addressBase58:"TDjTNAHiQsJ6zYE6E5Qmq7DC1D7GRzofrX",addressHex:"",address:"TDjTNAHiQsJ6zYE6E5Qmq7DC1D7GRzofrX"}},updatedAt:"2019-01-03T21:23:43.409Z"}},53:function(e,t,a){e.exports=a(123)},58:function(e,t,a){}},[[53,2,1]]]);
//# sourceMappingURL=main.969b785a.chunk.js.map