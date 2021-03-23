(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){},118:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(75),i=a.n(s),c=a(6),l=a(4),o=a(79),u=a(1),d=function(e){return{loggedIn:e.session.isAuthenticated}},m=Object(u.g)(Object(c.b)(d)(function(e){var t=e.component,a=e.path,n=e.loggedIn,s=e.exact;return r.a.createElement(u.b,{path:a,exact:s,render:function(e){return n?r.a.createElement(u.a,{to:"/wordlists"}):r.a.createElement(t,e)}})})),h=Object(u.g)(Object(c.b)(d)(function(e){var t=e.component,a=e.loggedIn,n=Object(o.a)(e,["component","loggedIn"]);return r.a.createElement(u.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(u.a,{to:"/"})}}))})),p=a(12),E=a.n(p),f=function(e){e?E.a.defaults.headers.common.Authorization=e:delete E.a.defaults.headers.common.Authorization},b=a(35),v=a.n(b),g=function(e){return{type:"RECEIVE_SESSION_ERRORS",errors:e}},O=function(e){return function(t){return(a=e,E.a.post("/api/users/register",a)).then(function(){return t({type:"RECEIVE_USER_SIGN_IN"})},function(e){return t(g(e.response.data))});var a}},w=function(e){return function(t){return(a=e,E.a.post("/api/users/login",a)).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),f(a);var n=v()(a);t({type:"RECEIVE_CURRENT_USER",currentUser:n})}).catch(function(e){t(g(e.response.data))});var a}},y=function(){return function(e){localStorage.removeItem("jwtToken"),f(!1),e({type:"RECEIVE_USER_LOGOUT"})}},k=a(22),S=a(14),j=a.n(S),L=a(36),N=a(15),C=a(16),_=a(18),R=a(17),I=a(19),U=a(3),x=function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(_.a)(this,Object(R.a)(t).call(this,e))).state={handle:"",password:"",errors:{}},a.demoLogin=a.demoLogin.bind(Object(U.a)(Object(U.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(U.a)(Object(U.a)(a))),a.renderErrors=a.renderErrors.bind(Object(U.a)(Object(U.a)(a))),a}return Object(I.a)(t,e),Object(C.a)(t,[{key:"demoLogin",value:function(){var e=Object(L.a)(j.a.mark(function e(t){var a,n,r,s;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a={handle:"GuestUser",password:"password"},n=function(e){return new Promise(function(t){return setTimeout(t,e)})},document.getElementById("handle").focus(),r=1;case 5:if(!(r<=a.handle.length)){e.next=12;break}return this.setState({handle:a.handle.substr(0,r)}),e.next=9,n(50);case 9:r++,e.next=5;break;case 12:return e.next=14,n(250);case 14:document.getElementById("password-input").focus(),s=1;case 16:if(!(s<=a.password.length)){e.next=23;break}return this.setState({password:a.password.substr(0,s)}),e.next=20,n(50);case 20:s++,e.next=16;break;case 23:return e.next=25,n(250);case 25:document.getElementById("submit-login").click(),document.getElementById("password-input").blur();case 27:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"componentWillReceiveProps",value:function(e){!0===e.currentUser&&this.props.history.push("/"),this.setState({errors:e.errors})}},{key:"update",value:function(e){var t=this;return function(a){return t.setState(Object(k.a)({},e,a.currentTarget.value))}}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={handle:this.state.handle,password:this.state.password};this.props.login(t)}},{key:"renderErrors",value:function(){var e=this;return r.a.createElement("ul",null,Object.keys(this.state.errors).map(function(t,a){return r.a.createElement("li",{key:"error-".concat(a)},e.state.errors[t])}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"login-form-box"},r.a.createElement("h1",null,"Internet Bingo"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"login-form"},r.a.createElement("input",{type:"text",className:"input-field",id:"handle",value:this.state.handle,onChange:this.update("handle"),placeholder:"Username"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",id:"password-input",className:"input-field",value:this.state.password,onChange:this.update("password"),placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("input",{className:"submit-btn",id:"submit-login",type:"submit",value:"Sign-in"}),r.a.createElement("br",null),r.a.createElement("input",{className:"demo-user-btn",type:"submit",value:"Guest User",onClick:this.demoLogin})),this.renderErrors(),r.a.createElement("p",{className:"signup-text"},"Don't have an account?",r.a.createElement("br",null),r.a.createElement(l.b,{className:"signup-link",to:"/signup"}," Sign-up here!")))))}}]),t}(r.a.Component),A=Object(u.g)(x),P=Object(c.b)(function(e){return{errors:e.errors.session}},function(e){return{login:function(t){return e(w(t))}}})(A),T=function(){return r.a.createElement("div",{className:"splash"},r.a.createElement("div",{className:"splash-right-box"},r.a.createElement(P,null)))};var D=Object(c.b)(function(e){return{loggedIn:e.session.isAuthenticated,handle:e.session.user?e.session.user.handle:"guest",id:e.session.user?e.session.user.id:"guest"}},function(e){return{logout:function(){y()(e)}}})(Object(u.g)(function(e){return r.a.createElement("div",{className:"buttonbar"},r.a.createElement("div",null,r.a.createElement("button",{title:"Home",onClick:function(){return e.history.push("/")}},r.a.createElement("span",{title:"Home","aria-label":"Home",role:"img"},"\ud83c\udfe1")),e.loggedIn&&r.a.createElement("button",{title:"Sign-out",onClick:function(){return e.logout()}},r.a.createElement("span",{title:"Sign-out","aria-label":"Sign-out",role:"img"},"\ud83d\udeaa"))),r.a.createElement("a",{href:"https://github.com/hechtoid/Bingo",title:"View Source on GitHub",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"GitHub Logo",src:"/github.png"})))})),z=function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(_.a)(this,Object(R.a)(t).call(this,e))).state={handle:"",password:"",password2:"",errors:{}},a.handleSubmit=a.handleSubmit.bind(Object(U.a)(Object(U.a)(a))),a.clearedErrors=!1,a}return Object(I.a)(t,e),Object(C.a)(t,[{key:"componentWillReceiveProps",value:function(e){!0===e.signedIn&&this.props.history.push("/"),this.setState({errors:e.errors})}},{key:"update",value:function(e){var t=this;return function(a){return t.setState(Object(k.a)({},e,a.currentTarget.value))}}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={handle:this.state.handle,password:this.state.password,password2:this.state.password2};this.props.signup(t,this.props.history)}},{key:"renderErrors",value:function(){var e=this;return r.a.createElement("ul",null,Object.keys(this.state.errors).map(function(t,a){return r.a.createElement("li",{key:"error-".concat(a)},e.state.errors[t])}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"splash"},r.a.createElement("div",null,r.a.createElement("div",{className:"signup-form-box"},r.a.createElement("h1",null,"Internet Bingo - Add User"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"signup-form"},r.a.createElement("input",{type:"text",className:"input-field",value:this.state.handle,onChange:this.update("handle"),placeholder:"Username"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",className:"input-field",value:this.state.password,onChange:this.update("password"),placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",className:"input-field",value:this.state.password2,onChange:this.update("password2"),placeholder:"Confirm Password"}),r.a.createElement("br",null),r.a.createElement("input",{className:"submit-btn",type:"submit",value:"Create Account"}),this.renderErrors(),r.a.createElement("p",null,"Already have an account?",r.a.createElement(l.b,{className:"signup-link",to:"/"}," Sign-in here!")))))))}}]),t}(r.a.Component),M=Object(u.g)(z),W=Object(c.b)(function(e){return{signedIn:e.session.isSignedIn,errors:e.errors.session}},function(e){return{signup:function(t){return e(O(t))}}})(M),G=function(e){return E.a.get("/api/wordlists/".concat(e))},B=function(e){return{type:"RECEIVE_NEW_WORD_LIST",wordList:e}},V=function(e){return function(t){return function(e){return E.a.get("/api/wordlists/user/".concat(e))}(e).then(function(e){return t(function(e){return{type:"RECEIVE_USER_WORD_LISTS",lists:e}}(e))}).catch(function(e){return console.log(e)})}},F=function(e){return function(t){return function(e){return E.a.post("/api/wordlists/",e)}(e).then(function(e){return t(B(e))}).catch(function(e){return console.log(e)})}},H=function(e){return function(t){return function(e){return E.a.put("/api/wordlists/",e)}(e).then(function(e){return t(B(e))}).catch(function(e){return console.log(e)})}},q=function(e){return function(t){return function(e){return E.a.delete("/api/wordlists/".concat(e))}(e).then(function(){return t(function(e){return{type:"REMOVE_WORD_LIST",id:e}}(e))}).catch(function(e){return console.log(e)})}},J=a(37),K=a(23),Q=a(77),X=function(e){e.target.select()},Y=function(e){var t=Object(n.useState)(!1),a=Object(K.a)(t,2),s=a[0],i=a[1],c=r.a.createRef(),l=function(t){t.preventDefault(),c.current.value.length>0&&e.edit(e.idx,c.current.value),i(!1)};return r.a.createElement("div",{className:"phrase"},r.a.createElement("li",null,r.a.createElement("div",null,e.edit&&r.a.createElement("button",{title:"Edit Phrase",onClick:function(e){s?l(e):i(!0)}},r.a.createElement("div",null,r.a.createElement("span",{className:"pencil",title:"Edit Phrase","aria-label":"Edit Phrase",role:"img"},"\u270f\ufe0f"))),s?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:l},r.a.createElement("input",{type:"text",ref:c,defaultValue:e.phrase,onFocus:X,autoFocus:!0})),r.a.createElement("button",{title:"Cancel",onClick:function(){return i(!1)}},r.a.createElement("div",null,r.a.createElement("span",{title:"Cancel","aria-label":"Cancel",role:"img"},"\u274c")))):e.phrase),e.delete&&!s&&r.a.createElement("button",{title:"Delete Phrase",onClick:e.delete(e.idx)},r.a.createElement("div",null,r.a.createElement("span",{title:"Delete Phrase","aria-label":"Delete Phrase",role:"img"},"\ud83d\uddd1\ufe0f")))),r.a.createElement(Q.CopyToClipboard,{text:e.phrase},r.a.createElement("div",{title:"Click to Copy"})))},Z=function(){return"".concat((new Date).toLocaleString("default",{month:"long",day:"2-digit",year:"numeric"}))},$=(a(58),function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(_.a)(this,Object(R.a)(t).call(this,e))).makeList=function(){a.props.location.list?a.setState(a.props.location.list):a.props.match.params.id?G(a.props.match.params.id).then(function(e){a.setState(e.data)}).catch(a.setState({name:"".concat(a.props.currentUser.handle,"'s New Phrase List - ").concat(Z()),unlisted:!1,words:[]})):a.setState({name:"".concat(a.props.currentUser.handle,"'s New Phrase List - ").concat(Z()),unlisted:!1,words:[]})},a.state={name:"",unlisted:!1,words:[]},a.handleSubmit=a.handleSubmit.bind(Object(U.a)(Object(U.a)(a))),a.saveWordList=a.saveWordList.bind(Object(U.a)(Object(U.a)(a))),a.editWordList=a.editWordList.bind(Object(U.a)(Object(U.a)(a))),a.deletePhraseAt=a.deletePhraseAt.bind(Object(U.a)(Object(U.a)(a))),a.editPhraseAt=a.editPhraseAt.bind(Object(U.a)(Object(U.a)(a))),a}return Object(I.a)(t,e),Object(C.a)(t,[{key:"selectID",value:function(e){e.target.select()}},{key:"componentDidMount",value:function(){this.makeList()}},{key:"componentDidUpdate",value:function(){document.title="Writing List: ".concat(this.state.name," - Internet Bingo")}},{key:"gameResponse",value:function(e){this.props.history.push({pathname:"/game/".concat(e.wordList.data._id,"/").concat(encodeURIComponent(e.wordList.data.name)),list:{words:e.wordList.data.words,name:e.wordList.data.name,_id:e.wordList.data._id}})}},{key:"saveWordList",value:function(e,t){var a=this;e.preventDefault(),this.state.words.length>=3&&this.props.saveWordList(this.state).then(function(e){return a.gameResponse(e)})}},{key:"editWordList",value:function(e,t){var a=this;e.preventDefault(),this.state.words.length>=3&&this.props.editWordList(this.state).then(function(e){return a.gameResponse(e)})}},{key:"handleSubmit",value:function(e){e.preventDefault(),e.target[0].value.length>0&&(this.setState({words:[].concat(Object(J.a)(this.state.words),[e.target[0].value])}),e.target[0].value="")}},{key:"editPhraseAt",value:function(e,t){var a=this.state.words;a[e]=t,this.setState({words:a})}},{key:"deletePhraseAt",value:function(e){var t=this;return function(a){var n=t.state.words;n.splice(e,1),t.setState({words:n})}}},{key:"updateName",value:function(){var e=this;return function(t){return e.setState({name:t.currentTarget.value})}}},{key:"updateListed",value:function(){var e=this;return function(t){return e.setState({unlisted:t.currentTarget.checked})}}},{key:"render",value:function(){var e=this,t=this.state.words.map(function(t,a){return r.a.createElement(Y,{phrase:t,delete:e.deletePhraseAt,edit:e.editPhraseAt,idx:a,key:a})}),a=0===this.state.words.length?this.props.location.pathname:this.state._id?{pathname:"/game/".concat(this.state._id,"/").concat(encodeURIComponent(this.state.name)),list:this.state}:{pathname:"/game/new/".concat(encodeURIComponent(this.state.name)),list:{words:this.state.words,name:this.state.name,_id:"new"}};return r.a.createElement("div",{className:"new-wordlist"},r.a.createElement("div",null,r.a.createElement("div",{className:"title"},r.a.createElement(l.b,{to:a},r.a.createElement("button",{title:"Start Game",disabled:0===this.state.words.length},r.a.createElement("div",null,r.a.createElement("span",{title:"Start Game","aria-label":"Start Game",role:"img"},"\ud83c\udfb0")))),r.a.createElement("input",{type:"text",value:this.state.name,onChange:this.updateName(),onFocus:this.selectID,autoFocus:!0}),r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",onChange:this.updateListed(),checked:this.state.unlisted}),"UnListed")),r.a.createElement("div",{className:this.state.words.length>=4?"save-button":"save-button-disabled",onClick:this.state._id&&this.state.user===this.props.currentUser.id?this.editWordList:this.saveWordList,title:"Persist This List"},this.state._id?this.state.user===this.props.currentUser.id?"UPDATE":"CLONE":"SAVE"),r.a.createElement("div",{className:this.state.words.length>=24?["hidden","disclaimer"].join(" "):"disclaimer"},"Lists need at least 24 phrases to play a standard 5x5 board without repeats."),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null,this.state.words.length),"Phrases"),r.a.createElement("input",{type:"text",placeholder:"Add Phrase"}),r.a.createElement("input",{type:"submit",value:"Add to List",title:"Add to List"}))),r.a.createElement("ul",{className:"wordlist"},t)))}}]),t}(r.a.Component)),ee=Object(u.g)($),te=Object(c.b)(function(e){return{currentUser:e.session.user}},function(e){return{saveWordList:function(t){return e(F(t))},editWordList:function(t){return e(H(t))}}})(ee),ae=function(e){var t=Object(n.useState)(!1),a=Object(K.a)(t,2),s=a[0],i=a[1];return r.a.createElement("div",{className:"delete",onClick:function(){return i(!s)}},r.a.createElement("div",{className:s?"confirm":"zero",onClick:e.delete},r.a.createElement("span",null,"CONFIRM")),r.a.createElement("div",{className:s?"zero":"question"},r.a.createElement("span",null,"DELETE\xa0LIST")),r.a.createElement("div",{className:s?"cancel":"zero",onClick:function(){return i(!s)}},r.a.createElement("span",null,"CANCEL")))};var ne=function(e){return Object(n.useEffect)(function(){function t(){return(t=Object(L.a)(j.a.mark(function t(){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchUserWordLists(e.currentUser.id);case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}document.title="List of Phrase Lists - Internet Bingo",function(){t.apply(this,arguments)}()},[]),r.a.createElement("div",{className:"wordlists"},r.a.createElement("div",null,r.a.createElement("div",{className:"new"},r.a.createElement(l.b,{to:"/wordlists/new"},r.a.createElement("div",null,r.a.createElement("div",{className:"title"},"Compose New Phrase List"),r.a.createElement("button",{title:"New List"},r.a.createElement("div",null,r.a.createElement("span",{className:"pencil",title:"New List","aria-label":"New List",role:"img"},"\u270f\ufe0f")))),r.a.createElement("div",null,"Make a New Phrase List to share with your Friends!")),r.a.createElement("div",null,"Click a Green Title to Start a Game!")),e.lists.map(function(t,a){return r.a.createElement("ul",{key:a},r.a.createElement("div",{className:"title",title:"Play Game"},r.a.createElement("div",null,r.a.createElement(l.b,{to:{pathname:"/game/".concat(t._id,"/").concat(encodeURIComponent(t.name)),list:t}},t.name)),r.a.createElement("div",null,r.a.createElement(l.b,{to:{pathname:"/wordlists/".concat(t._id,"/").concat(encodeURIComponent(t.name)),list:t}},r.a.createElement("button",{title:"Edit List"},r.a.createElement("div",null,r.a.createElement("span",{className:"pencil",title:"Edit List","aria-label":"Edit List",role:"img"},"\u270f\ufe0f")))))),r.a.createElement("div",null,t.words.map(function(e,t){return r.a.createElement(Y,{phrase:e,key:t})})),r.a.createElement("div",null,r.a.createElement(ae,{delete:function(){return e.removeWordList(t._id)}})))})))},re=Object(c.b)(function(e){return{currentUser:e.session.user,lists:Object.values(e.lists.user)}},function(e){return{fetchUserWordLists:function(t){return e(V(t))},removeWordList:function(t){return e(q(t))}}})(ne),se=j.a.mark(ie);function ie(e,t){var a,n;return j.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:a=Array.from(e);case 1:if(!(t>0&&a.length)){r.next=9;break}return n=ce(a.length),le(a,n,a.length-1),r.next=6,a.pop();case 6:t-=1,r.next=1;break;case 9:case"end":return r.stop()}},se)}var ce=function(e){return Math.floor(Math.random()*e)};function le(e,t,a){var n=e[t];return e[t]=e[a],e[a]=n,e}var oe=function(e){return Array.from(ie(e,e.length))},ue=function(e,t){return function(e,t){for(var a=0;a<t;a++){for(var n=!0,r=0;r<t;r++)!1===e[a][r]&&(n=!1);if(n)return n}for(var s=0;s<t;s++){for(var i=!0,c=0;c<t;c++)!1===e[c][s]&&(i=!1);if(i)return i}}(e,t)||function(e,t){for(var a=!0,n=0;n<t;n++)!1===e[n][n]&&(a=!1);return a}(e,t)||function(e,t){for(var a=!0,n=0;n<t;n++)!1===e[n][t-1-n]&&(a=!1);return a}(e,t)},de=function(e,t){for(var a=!0,n=0;n<t;n++)for(var r=0;r<t;r++)!1===e[n][r]&&(a=!1);return a};var me=function(e){var t=Array.from(Array(e.size),function(){return Array.from(Array(e.size),function(){return!1})}),a=Object(n.useState)(t),s=Object(K.a)(a,2),i=s[0],c=s[1];Object(n.useEffect)(function(){return u()},[e.free]);var o=!(!e.free||e.size%2!==1)&&Math.floor(e.size/2),u=function(){if(o){var e=i.slice();e[o][o]=!0,c(e)}},d=function(){o&&(t[o][o]=!0),c(t)},m=de(i,e.size),h=ue(i,e.size);Object(n.useEffect)(function(){document.title="Playing Board: ".concat(e.name," ").concat(e.size,"x").concat(e.size," - Internet Bingo")},[e.name,e.size]);var p=e.list.slice();return r.a.createElement("div",{className:"game"},r.a.createElement("div",null,h?r.a.createElement("div",{className:"win"},"BINGO"):r.a.createElement("div",{className:"play"},"BINGO"),m?r.a.createElement("div",{className:"win"},"BLACKOUT"):r.a.createElement("div",{className:"play"},"BLACKOUT")),r.a.createElement("div",null,r.a.createElement("div",{className:"thead"},e.link&&r.a.createElement(l.b,{to:e.link},r.a.createElement("button",{title:"Edit List"},r.a.createElement("div",null,r.a.createElement("span",{className:"pencil",title:"Edit List","aria-label":"Edit List",role:"img"},"\u270f\ufe0f")))),r.a.createElement("div",null,e.name),r.a.createElement("div",null)),r.a.createElement("table",{className:m?"blackout":""},r.a.createElement("tbody",null,i.map(function(e,t){return r.a.createElement("tr",{key:t},e.map(function(e,a){return o&&t===o&&a===o?r.a.createElement("td",{className:h?["winner","free-spot"].join(" "):"free-spot",key:a},r.a.createElement("div",null,"FREE")):r.a.createElement("td",{key:a,className:e?h?"winner":"clicked":"unclicked",onClick:function(){return function(e,t){var a=i.slice();a[e][t]=!a[e][t],c(a)}(t,a)}},r.a.createElement("div",null,p.pop()))}))})))),r.a.createElement("div",null,r.a.createElement("button",{onClick:d},"CLEAR"),r.a.createElement("button",{onClick:function(){d(),e.shuffleList()}},"CLEAR & SHUFFLE"),r.a.createElement("button",{onClick:e.smaller,disabled:e.size<=2},"smaller"),r.a.createElement("button",{onClick:e.bigger},"BIGGER"),r.a.createElement("label",{className:e.size%2===0?"disabled":""},r.a.createElement("input",{type:"checkbox",onChange:e.setFree,checked:o,disabled:e.size%2===0}),"Free Square"),r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",onChange:e.setRepeat,checked:e.repeat}),"Repeat Phrases")))},he=(a(116),function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(_.a)(this,Object(R.a)(t).call(this,e))).makeList=function(){a.props.location.list?a.setState({phrases:oe(a.props.location.list.words),name:a.props.location.list.name,user:a.props.location.list.user,_id:a.props.location.list._id}):a.props.match.params.id?G(a.props.match.params.id).then(function(e){a.setState({phrases:oe(e.data.words),name:e.data.name,user:e.data.user,_id:e.data._id})}).catch(function(e){a.setState({phrases:[]})}):a.setState({phrases:["Bee","Eye","En","Gee","Oh"]})},a.shuffleList=function(){a.setState({phrases:oe(a.state.phrases)})},a.setFree=function(){a.setState({free:!a.state.free,key:a.state.key+1})},a.setRepeat=function(){a.setState({repeat:!a.state.repeat,key:a.state.key+1})},a.bigger=function(){a.setState({size:a.state.size+1,key:a.state.key+1})},a.smaller=function(){a.state.size>2&&a.setState({size:a.state.size-1,key:a.state.key+1})},a.phraseLister=function(){for(var e=a.state.phrases;a.state.repeat&&e.length>0&&e.length<=Math.pow(a.state.size,2);)e=e.concat(oe(a.state.phrases));return e},a.state={name:"",phrases:[],free:!0,repeat:!0,size:5,key:1},a}return Object(I.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.makeList()}},{key:"render",value:function(){var e=this.phraseLister(),t={pathname:"/wordlists/".concat(this.state._id,"/").concat(encodeURIComponent(this.state.name)),list:{words:this.state.phrases,name:this.state.name,user:this.state.user,_id:"new"===this.state._id?null:this.state._id}};return r.a.createElement("div",{className:"games"},r.a.createElement(me,{name:this.state.name,list:e,shuffleList:this.shuffleList,free:this.state.free,setFree:this.setFree,repeat:this.state.repeat,setRepeat:this.setRepeat,size:this.state.size,bigger:this.bigger,smaller:this.smaller,link:t,key:this.state.key}))}}]),t}(r.a.Component)),pe=Object(u.g)(he),Ee=(a(118),Object(u.g)(function(e){return r.a.createElement("div",{className:"app"},r.a.createElement(D,null),r.a.createElement("main",{className:"main"},r.a.createElement(u.d,null,r.a.createElement(m,{exact:!0,path:"/",component:T}),r.a.createElement(m,{exact:!0,path:"/signup",component:W}),r.a.createElement(h,{exact:!0,path:"/wordlists/",component:re}),r.a.createElement(h,{exact:!0,path:"/wordlists/new",component:te}),r.a.createElement(h,{exact:!0,path:"/wordlists/:id/:name?",component:te}),r.a.createElement(u.b,{exact:!0,path:"/game/:id?/:name?",component:pe}))))})),fe=function(e){var t=e.store;return r.a.createElement(c.a,{store:t},r.a.createElement(l.a,null,r.a.createElement(Ee,null)))},be=a(13),ve=a(78),ge=(a(120),a(47)),Oe={isAuthenticated:!1,user:{}},we=[],ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"RECEIVE_SESSION_ERRORS":return t.errors;case"RECEIVE_CURRENT_USER":return we;default:return e}},ke=Object(be.c)({session:ye}),Se={userModalOpen:!1,contactUsModalOpen:!1,itemModal:{open:!1,data:null,clothingtype:null}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(Object.freeze(e),t.type){case"CLOSE_CONTACT_MODAL":return Object.assign({},e,{contactUsModalOpen:!1});case"OPEN_CONTACT_MODAL":return Object.assign({},e,{contactUsModalOpen:!0});case"CLOSE_USER_MODAL":return Object.assign({},e,{userModalOpen:!1});case"OPEN_USER_MODAL":return Object.assign({},e,{userModalOpen:!0});case"CLOSE_ITEM_MODAL":return Object.assign({},e,{itemModal:{open:!1,data:null,clothingtype:null}});case"OPEN_ITEM_MODAL":return Object.assign({},e,{itemModal:{open:!0,data:t.data,clothingtype:t.clothingtype}});default:return e}},Le=a(48),Ne=a.n(Le),Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{all:{},user:{},new:{}},t=arguments.length>1?arguments[1]:void 0;Object.freeze(e);var a=Object.assign({},e);switch(t.type){case"RECEIVE_USER_WORD_LISTS":return a.user=t.lists.data,a;case"RECEIVE_NEW_WORD_LIST":return(a=Ne()({},e)).user=a.user.length?[t.wordList.data].concat(Object(J.a)(a.user)):[t.wordList.data],a;case"REMOVE_WORD_LIST":return(a=Ne()({},e)).user=a.user.filter(function(e){return e._id!==t.id}),a;default:return e}},_e=Object(be.c)({errors:ke,session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_CURRENT_USER":return Object(ge.a)({},e,{isAuthenticated:!!t.currentUser,user:t.currentUser});case"RECEIVE_USER_LOGOUT":return{isAuthenticated:!1,user:void 0};case"RECEIVE_USER_SIGN_IN":return Object(ge.a)({},e,{isSignedIn:!0});default:return e}},ui:je,lists:Ce}),Re=[ve.a];var Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(be.d)(_e,e,be.a.apply(void 0,Re))};document.addEventListener("DOMContentLoaded",function(){var e;if(localStorage.jwtToken){f(localStorage.jwtToken);var t=v()(localStorage.jwtToken);e=Ie({session:{isAuthenticated:!0,user:t}});var a=Date.now()/1e3;t.exp<a&&(e.dispatch(y()),window.location.href="/")}else e=Ie({});var n=document.getElementById("root");i.a.render(r.a.createElement(fe,{store:e}),n)})},58:function(e,t,a){},80:function(e,t,a){e.exports=a(187)}},[[80,2,1]]]);
//# sourceMappingURL=main.a9e9adac.chunk.js.map