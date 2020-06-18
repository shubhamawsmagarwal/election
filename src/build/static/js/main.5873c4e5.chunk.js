(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{165:function(e,t,n){e.exports=n(423)},171:function(e,t,n){},182:function(e,t){},191:function(e,t){},209:function(e,t){},211:function(e,t){},235:function(e,t){},257:function(e,t){},259:function(e,t){},268:function(e,t){},270:function(e,t){},295:function(e,t){},297:function(e,t){},298:function(e,t){},304:function(e,t){},306:function(e,t){},324:function(e,t){},327:function(e,t){},343:function(e,t){},346:function(e,t){},351:function(e,t){},366:function(e,t){},367:function(e,t){},369:function(e,t){},422:function(e,t,n){},423:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(163),r=n.n(o),i=(n(170),n(171),n(164)),s=n(12),u=n.n(s),l=n(55),d=n(32),m=n(35),p=n(26),f=n(34),h=n(33),b=n(81),y=n.n(b),v=(n(422),[{constant:!0,inputs:[],name:"candidatesCount",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"candidates",outputs:[{name:"id",type:"uint256"},{name:"name",type:"string"},{name:"voteCount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!1,inputs:[{name:"_name",type:"string"}],name:"addCandidate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"voter",type:"address"}],name:"addVoters",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_candidateId",type:"uint256"}],name:"vote",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]),E=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"card container"},c.a.createElement("h1",{className:"text-center py-4"},"Admin's Page"),c.a.createElement("h6",{className:"card-header text-center py-4"},"Your Account address :",c.a.createElement("strong",null,this.props.account)),c.a.createElement("div",{className:"card-body px-lg-5"},c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n=e.candidate.value;e.candidate.value="",e.props.addCandidate(n)},className:"text-center py-4"},c.a.createElement("label",null,c.a.createElement("strong",null,"Register a candidate(By Writing name)")),c.a.createElement("input",{type:"text",ref:function(t){e.candidate=t},placeholder:"Enter name of candidate",className:"form-control my-4",required:!0,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}}),c.a.createElement("button",{className:"btn btn-outline-success my-4",type:"submit"},"Register")),c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n=e.voter.value;e.voter.value="",e.props.addVoters(n)},className:"text-center"},c.a.createElement("label",null,c.a.createElement("strong",null,"Register a voter(By Writing its account address)")),c.a.createElement("input",{type:"text",ref:function(t){e.voter=t},placeholder:"Enter address of voter",className:"form-control my-4",required:!0,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}}),c.a.createElement("button",{className:"btn btn-outline-success my-4",type:"submit"},"Register"))))}}]),n}(a.Component),w=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"card container"},c.a.createElement("h1",{className:"text-center py-4"},"Voters Page"),c.a.createElement("h6",{className:"card-header text-center py-4"},"Your Account address :",c.a.createElement("strong",null,this.props.account)),c.a.createElement("div",{className:"card-body px-lg-5"},c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Name of the candidate"),c.a.createElement("th",{scope:"col"},"No of Votes to the candidate"))),c.a.createElement("tbody",null,this.props.candidates.map((function(e){return c.a.createElement("tr",{key:e.id.toString()},c.a.createElement("th",null,e.id.toString()),c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.voteCount.toString()))})))),c.a.createElement("hr",null),c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n=e.id.value;e.props.vote(n)},className:"text-center"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,c.a.createElement("strong",null,"Select Candidate")),c.a.createElement("select",{className:"form-control",ref:function(t){e.id=t}},this.props.candidates.map((function(e){return c.a.createElement("option",{key:e.id.toString(),value:e.id.toString()},e.name)})))),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Vote"))))}}]),n}(a.Component),g=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={account:"",candidates:[],loading:!0},a.addCandidate=a.addCandidate.bind(Object(m.a)(a)),a.addVoters=a.addVoters.bind(Object(m.a)(a)),a.vote=a.vote.bind(Object(m.a)(a)),a}return Object(p.a)(n,[{key:"componentWillMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadWeb3();case 2:return e.next=4,this.loadBlockchainData();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadWeb3",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=6;break}return window.web3=new y.a(window.ethereum),e.next=4,window.ethereum.enable();case 4:e.next=7;break;case 6:window.web3?window.web3=new y.a(window.web3.currentProvider):window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"loadBlockchainData",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a,c,o,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3,e.next=3,t.eth.getAccounts();case 3:return n=e.sent,this.setState({account:n[0]}),a=new t.eth.Contract(v,"0x1b0139f789629f9685ffa65e5a3f41f20e56a814"),this.setState({election:a}),e.next=9,a.methods.owner().call();case 9:return c=e.sent,this.setState({owner:c}),e.next=13,a.methods.candidatesCount().call();case 13:o=e.sent,r=1;case 15:if(!(r<=o)){e.next=23;break}return e.next=18,a.methods.candidates(r).call();case 18:s=e.sent,this.setState({candidates:[].concat(Object(i.a)(this.state.candidates),[s])});case 20:r++,e.next=15;break;case 23:this.setState({loading:!1});case 24:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),Object(p.a)(n,[{key:"addCandidate",value:function(e){var t=this;this.setState({loading:!0}),this.state.election.methods.addCandidate(e).send({from:this.state.account}).once("receipt",(function(e){t.setState({loading:!1})}))}},{key:"addVoters",value:function(e){var t=this;this.setState({loading:!0}),this.state.election.methods.addVoters(e).send({from:this.state.account}).once("receipt",(function(e){t.setState({loading:!1})}))}},{key:"vote",value:function(e){var t=this;this.setState({loading:!0}),this.state.election.methods.vote(e).send({from:this.state.account}).once("receipt",(function(e){t.setState({loading:!1})}))}},{key:"render",value:function(){return this.state.loading?c.a.createElement("div",{className:"text-center"},"Loading..."):this.state.account===this.state.owner?c.a.createElement(E,{account:this.state.account,addCandidate:this.addCandidate,addVoters:this.addVoters}):c.a.createElement(w,{account:this.state.account,candidates:this.state.candidates,vote:this.vote})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[165,1,2]]]);
//# sourceMappingURL=main.5873c4e5.chunk.js.map