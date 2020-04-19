(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{168:function(e,t,a){e.exports=a(354)},173:function(e,t,a){},174:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},175:function(e,t,a){},354:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(51),s=a.n(i);a(173),a(174),a(175);a(77);var l=a(23),o=a(24),c=a(36),d=a(30),u=a(29),m=a(7),h=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},n}return Object(o.a)(a,[{key:"getUS_Timeline",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://thevirustracker.com/free-api?countryTimeline=US").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t})}),(function(t){console.log("Could not access data"),e.setState({isLoaded:!0,error:t})}))}},{key:"componentDidMount",value:function(){this.getUS_Timeline()}},{key:"arrangeForGraph",value:function(){var e=this.state.items,t=[],a=1;for(var n in e.timelineitems[0]){new Date(n);var r={new_daily_deaths:e.timelineitems[0][n].new_daily_deaths,new_daily_cases:e.timelineitems[0][n].new_daily_cases,dates:n,day:a};t.push(r),a+=1}return t.pop(),t}},{key:"render",value:function(){var e=this.state,t=(e.error,e.isLoaded),a=e.items;if(t){var n=this.arrangeForGraph(a);return console.log(n),r.a.createElement("div",null,r.a.createElement("h4",null,"United States Cases"),r.a.createElement("div",{className:"align-self-center"},r.a.createElement(m.d,{width:1e3,height:300,data:n},r.a.createElement(m.a,{stroke:"#efe",strokeDasharray:"1 1"}),r.a.createElement(m.f,{dataKey:"dates"}),r.a.createElement(m.g,null),r.a.createElement(m.e,null),r.a.createElement(m.b,null),r.a.createElement(m.c,{type:"monotone",dataKey:"new_daily_cases",stroke:"#8884d8"}),r.a.createElement(m.c,{type:"monotone",dataKey:"new_daily_deaths",stroke:"#82ca9d"}))))}return r.a.createElement("p",null,"Loading graph...")}}]),a}(n.Component),p=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},n}return Object(o.a)(a,[{key:"getIndiaData",value:function(){var e=this;fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({isLoaded:!0,items:t})}),(function(t){console.log("Could not access data"),e.setState({isLoaded:!0,error:t})}))}},{key:"componentDidMount",value:function(){this.getIndiaData()}},{key:"arrangeForGraph",value:function(){var e=this.state.items,t=[],a=1;for(var n in e.cases_time_series){var r={new_daily_deaths:e.cases_time_series[n].dailydeceased,new_daily_cases:e.cases_time_series[n].dailyconfirmed,dates:e.cases_time_series[n].date,day:a};t.push(r),a+=1}return t.pop(),t}},{key:"render",value:function(){var e=this.state,t=(e.error,e.isLoaded),a=e.items;if(t){var n=this.arrangeForGraph(a);return console.log(n),r.a.createElement("div",{className:"align-self-center"},r.a.createElement("h4",null,"India Cases"),r.a.createElement(m.d,{width:1e3,height:300,data:n},r.a.createElement(m.a,{stroke:"#efe",strokeDasharray:"1 1"}),r.a.createElement(m.f,{dataKey:"dates"}),r.a.createElement(m.g,null),r.a.createElement(m.e,null),r.a.createElement(m.b,null),r.a.createElement(m.c,{type:"monotone",dataKey:"new_daily_cases",stroke:"#8884d8"}),r.a.createElement(m.c,{type:"monotone",dataKey:"new_daily_deaths",stroke:"#82ca9d"})))}return r.a.createElement("p",null,"Loading graph...")}}]),a}(n.Component),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={showIndia:!1},n.handleClickIndia=n.handleClickIndia.bind(Object(c.a)(n)),n.handleClickUS=n.handleClickUS.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handleClickIndia",value:function(){this.setState((function(e){return{showIndia:!0}}))}},{key:"handleClickUS",value:function(){this.setState((function(e){return{showIndia:!1}}))}},{key:"render",value:function(){return this.state.showIndia?r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(p,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group mr-2"},r.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-group",onClick:this.handleClickUS},"United States")),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-group"},"India"))))):r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(h,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group mr-2"},r.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-group"},"United States")),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-group",onClick:this.handleClickIndia},"India")))))}}]),a}(r.a.Component);a(353);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[168,1,2]]]);
//# sourceMappingURL=main.d6052091.chunk.js.map