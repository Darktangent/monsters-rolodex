(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(20)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(3),c=t.n(o),s=(t(15),t(4)),l=t(5),i=t(8),u=t(6),h=t(1),m=t(7),d=(t(16),t(17),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set3&size=180x180")}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),f=function(e){return console.log(e),r.a.createElement("div",{className:"card-list"},e.monsters.map(function(e){return r.a.createElement(d,{key:e.id,monster:e})}))},p=(t(18),function(e){var n=e.placeholder,t=e.handleChange;return r.a.createElement("div",null,r.a.createElement("input",{type:"search",className:"search",placeholder:n,onChange:t}))}),v=(t(19),function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(i.a)(this,Object(u.a)(n).call(this,e))).state={monsters:[],searchField:""},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e.setState({monsters:n})})}},{key:"handleChange",value:function(e){this.setState({searchField:e.target.value})}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,a=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(p,{placeholder:"search monsters",handleChange:this.handleChange}),r.a.createElement(f,{monsters:a}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.68b5f52a.chunk.js.map