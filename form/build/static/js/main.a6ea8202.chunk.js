(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{32:function(e,t,a){e.exports=a(76)},37:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(1),c=a.n(i),r=a(5),o=a(8),s=a(6),m=a(7),u=(a(37),a(9)),p=a(12),d=a.n(p),f=(a(53),a(54),{infinite:!0,arrows:!1,autoplay:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,pauseOnHover:!1,fade:!0}),E=Object(u.a)(Object(u.a)({},f),{},{autoplaySpeed:5e3}),h=Object(u.a)(Object(u.a)({},f),{},{autoplaySpeed:6e3}),g=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).render=function(){return l.a.createElement("div",{className:"key-visual"},l.a.createElement("div",{className:"key-visual-item"},l.a.createElement(d.a,E,l.a.createElement("img",{src:"./images/h/brandimage_1.jpg",alt:""}),l.a.createElement("img",{src:"./images/h/brandimage_2.jpg",alt:""}))),l.a.createElement("div",{className:"key-visual-item"},l.a.createElement(d.a,f,l.a.createElement("div",null,l.a.createElement("img",{src:"./images/h/key_title.png",alt:""})))),l.a.createElement("div",{className:"key-visual-item"},l.a.createElement(d.a,h,l.a.createElement("img",{src:"./images/h/brandimage_3.jpg",alt:""}),l.a.createElement("img",{src:"./images/h/brandimage_4.jpg",alt:""}))))},e}return a}(l.a.Component),v=(l.a.Component,function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("div",{class:"footer-info"},l.a.createElement("p",{class:"company"},"\u30e1\u30f3\u30ea\u30c3\u30b1\u30d8\u30eb\u30b9\u30b1\u30a2\u682a\u5f0f\u4f1a\u793e"),l.a.createElement("p",{class:"sub-text"},"\u6771\u4eac\u90fd\u65b0\u5bbf\u533a\u897f\u65b0\u5bbf6-20-7"),l.a.createElement("p",{class:"sub-text"},"\u30b3\u30f3\u30b7\u30a7\u30ea\u30a2\u897f\u65b0\u5bbf\u30bf\u30ef\u30fc\u30ba\u30a6\u30a8\u30b9\u30c8"),l.a.createElement("p",{class:"sub-text"},"TEL\uff1a03-6914-5004")),l.a.createElement("div",{class:"footer-logo"},l.a.createElement("img",{src:"./images/logo2.png",alt:""})))}}]),a}(l.a.Component)),y=a(25),C=a.n(y),b=a(95),N=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).renderErrorDialog=function(){var e=n.state,t=e.show_error_dialog,a=e.error_messages;return l.a.createElement(b.a,{onClose:n.closeErrorDialog,open:t},l.a.createElement("div",{className:"error-dialog"},l.a.createElement("div",{className:"messages"},Object.values(a).map((function(e){return e.map((function(e){return l.a.createElement("p",null,e)}))}))),l.a.createElement("button",{onClick:n.closeErrorDialog,className:"btn"},"\u9589\u3058\u308b")))},n.closeErrorDialog=function(){n.setState({show_error_dialog:!1})},n.complementAddress=function(){console.log("complementAddress"),window.AjaxZip3.zip2addr("zip_code","","prefecture","city","address")},n.onBlurZipcode=function(){console.log("onBlurZipcode"),n.setState({prefecture:document.getElementById("prefecture").value,city:document.getElementById("city").value,address:document.getElementById("address").value})},n.componentDidMount=function(){setTimeout(n.modalClose,7e3)},n.onClickDetailExplain=function(e){console.log("onClickDetailExplain"),n.setState({detail_explain:e})},n.isCheckedDetailExplain=function(e){return e==n.state.detail_explain},n.onClickDocumentSend=function(){n.setState({document_send:n.state.document_send?0:1})},n.isClickDocumentSend=function(){return console.log("isClickDocumentSend"),1==n.state.document_send},n.onChangeName=function(e){n.setState({name:e.target.value})},n.onChangeEmail=function(e){n.setState({email:e.target.value})},n.onChangeTel=function(e){n.setState({tel:e.target.value})},n.onChangeFacility=function(e){n.setState({facility:e.target.value})},n.onChangeDepartment=function(e){n.setState({department:e.target.value})},n.onChangezip_code=function(e){n.setState({zip_code:e.target.value})},n.onChangePrefecture=function(e){n.setState({prefecture:e.target.value})},n.onChangeCity=function(e){n.setState({city:e.target.value})},n.onChangeAdress=function(e){n.setState({adress:e.target.value})},n.clickNotification=function(e){n.setState({notification:e})},n.isNoticicationChecked=function(e){return n.state.notification==e},n.onClickPolicy=function(e){n.setState({policy:!n.state.policy})},n.isPolicyClicked=function(){return 1==n.state.policy},n.post=function(){n.validation()&&C.a.post("/api/public/",Object(u.a)({},n.state)).then((function(e){console.log("then"),console.log(e)})).catch((function(e){console.log("catch"),console.log("err",e.response)}))},n.validation=function(){var e=n.state,t=e.name,a=e.email,l=e.tel,i=e.facility,c=e.department,r=e.zip_code,o=e.prefecture,s=e.city,m=e.adress,u=e.notification,p=[];if(t||(p.name=["\u540d\u524d\u304c\u672a\u5165\u529b\u3067\u3059"]),a||(p.email=["\u96fb\u5b50\u30e1\u30fc\u30eb\u304c\u672a\u5165\u529b\u3067\u3059"]),l||(p.tel=["\u96fb\u8a71\u756a\u53f7\u304c\u672a\u5165\u529b\u3067\u3059"]),i||(p.facility=["\u65bd\u8a2d\u540d\u304c\u672a\u5165\u529b\u3067\u3059"]),c||(p.department=["\u90e8\u7f72\u304c\u672a\u5165\u529b\u3067\u3059"]),r||(p.zip_code=["\u90f5\u4fbf\u756a\u53f7\u304c\u672a\u5165\u529b\u3067\u3059"]),o||(p.prefecture=["\u90fd\u9053\u5e9c\u770c\u304c\u672a\u5165\u529b\u3067\u3059"]),s||(p.city=["\u5e02\u533a\u753a\u6751\u304c\u672a\u5165\u529b\u3067\u3059"]),m||(p.adress=["\u756a\u5730\u304c\u672a\u5165\u529b\u3067\u3059"]),u||(p.notification=["\u6848\u5185\u306e\u5e0c\u671b\u304c\u672a\u5165\u529b\u3067\u3059"]),0==p.keys().length)return!0;n.setState({error_messages:p,show_error_dialog:!0})},n.state={detail_explain:null,document_send:null,name:"",email:"",tel:"",facility:"",department:"",zip_code:"",prefecture:"",city:"",address:"",notification:null,policy:null,error_messages:{},show_error_dialog:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state),l.a.createElement("main",{className:"main"},this.renderErrorDialog(),l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,"\u7b2c34\u56de\u65e5\u672c\u624b\u8853\u770b\u8b77\u5b66\u4f1a\u5e74\u6b21\u5927\u4f1a Web\u958b\u50ac \u5c02\u2f64\u30b5\u30a4\u30c8")),l.a.createElement("div",{className:"description"},l.a.createElement("p",null,"\u8853\u4e2d\u306e\u76ae\u819a\u4fdd\u8b77\u306b\u3069\u306e\u69d8\u306b\u53d6\u308a\u7d44\u3093\u3067\u304a\u3089\u308c\u307e\u3059\u3067\u3057\u3087\u3046\u304b\uff1f"),l.a.createElement("p",null,"\u6628\u4eca\u3001\u8853\u4e2d\u306b\u304a\u3051\u308b\u76ae\u819a\u4fdd\u8b77\u304c\u5927\u304d\u304f\u898b\u76f4\u3055\u308c\u3066\u304d\u3066\u304a\u308a\u307e\u3059\u3002"),l.a.createElement("p",null,"\u95a2\u9023\u306e\u8cc7\u6599\u3092\u304a\u9001\u308a\u3055\u305b\u3066\u9802\u304d\u307e\u3059\u306e\u3067\u3001\u4e0b\u8a18\u306e\u30d5\u30a9\u30fc\u30e0\u3088\u308a\u304a\u7533\u8fbc\u307f\u4e0b\u3055\u3044\u3002")),l.a.createElement("div",{className:"product-description"},"\u88fd\u54c1\u8aac\u660e"),l.a.createElement("div",{className:"form"},l.a.createElement("form",{method:"post"},l.a.createElement("div",{className:"form-item"},l.a.createElement("label",{className:"form-label"},"\u30e1\u30d4\u30ec\u30c3\u30af\u30b9 \u30dc\u30fc\u30c0\u30fc \u30d7\u30ed\u30c6\u30af\u30c8\u306b\u3064\u3044\u3066\u3001\u3055\u3089\u306b\u8a73\u3057\u304f\u3054\u8aac\u660e\u3044\u305f\u3057\u307e\u3059\u3002",l.a.createElement("br",null),"\u30d5\u30a9\u30fc\u30e0\u306e\u3054\u5e0c\u671b\u6b04\u306b\u30c1\u30a7\u30c3\u30af\u3092\u2f0a\u308c\u3066\u3044\u305f\u3060\u304d\u3001\u5fc5\u8981\u4e8b\u9805\u3092\u2f0a\u2f12\u306e\u4e0a\u3001\u9001\u4fe1\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u5f8c\u2f47\u3001\u62c5\u5f53\u8005\u3088\u308a\u3054\u9023\u7d61\u3044\u305f\u3057\u307e\u3059\u3002"),l.a.createElement("div",{className:"form-radio-wrap",onClick:function(){return e.onClickDetailExplain(1)}},l.a.createElement("input",{type:"radio",name:"detail_explain1",id:"detail_explain1-1",checked:this.isCheckedDetailExplain(1)}),l.a.createElement("label",null,"\u8aac\u660e\u4f1a\u5e0c\u671b")),l.a.createElement("div",{className:"form-radio-wrap",onClick:function(){return e.onClickDetailExplain(2)}},l.a.createElement("input",{type:"radio",name:"detail_explain",id:"detail_explain1-2",checked:this.isCheckedDetailExplain(2)}),l.a.createElement("label",null,"\u30c7\u30e2\u5e0c\u671b")),l.a.createElement("div",{className:"form-radio-wrap",onClick:function(){return e.onClickDetailExplain(3)}},l.a.createElement("input",{type:"radio",name:"detail_explain1",id:"detail_explain1-3",checked:this.isCheckedDetailExplain(3)}),l.a.createElement("label",null,"\u88fd\u54c1\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u805e\u304d\u305f\u3044"))),l.a.createElement("div",{className:"form-item"},l.a.createElement("label",{className:"form-label"},"\u30e1\u30d4\u30ec\u30c3\u30af\u30b9 \u30dc\u30fc\u30c0\u30fc \u30d7\u30ed\u30c6\u30af\u30c8\u306b\u3064\u3044\u3066\u3001\u3055\u3089\u306b\u8a73\u3057\u3044\u8cc7\u6599\u3092\u304a\u9001\u308a\u3057\u307e\u3059\u3002 \u8cc7\u6599\u9001\u4ed8\u306e\u3054\u5e0c\u671b\u3092\u9802\u3044\u305f\u65b9\u306b\u306f\u30ae\u30df\u30c3\u30af\u3092\u5dee\u3057\u4e0a\u3052\u307e\u3059\u3002"),l.a.createElement("div",{className:"form-radio-wrap",onClick:this.onClickDocumentSend},l.a.createElement("input",{type:"checkbox",name:"document_send",id:"document_send",checked:this.isClickDocumentSend()}),l.a.createElement("label",null,"\u8cc7\u6599\u9001\u4ed8\u5e0c\u671b"))),l.a.createElement("div",{className:"description"},"\u4e0b\u8a18\u306b\u3054\u5165\u529b\u304a\u9858\u3044\u81f4\u3057\u307e\u3059\u3002\u30e1\u30f3\u30ea\u30c3\u30b1\u304b\u3089\u306e\u3054\u9023\u7d61\u3001\u8cc7\u6599\u306e\u9001\u4ed8\u306b\u4f7f\u308f\u305b\u3066\u9802\u304d\u307e\u3059\u3002\uff08\uff0a\u306f\u5fc5\u9808\u9805\u76ee\u3067\u3059\uff09"),l.a.createElement("div",{className:"form-item"},l.a.createElement("label",{className:"form-label"},"\u304a\u540d\u524d",l.a.createElement("span",{className:"require"},"\uff0a")),l.a.createElement("input",{className:"form-input",type:"text",name:"name",onChange:this.onChangeName,value:this.state.name})),l.a.createElement("div",{className:"form-item"},l.a.createElement("label",{className:"form-label"},"\u96fb\u5b50\u30e1\u30fc\u30eb",l.a.createElement("span",{className:"require"},"\uff0a")),l.a.createElement("input",{className:"form-input",type:"email",name:"email",onChange:this.onChangeEmail,value:this.state.email})),l.a.createElement("div",{className:"form-item"},l.a.createElement("label",{className:"form-label"},"\u96fb\u8a71\u756a\u53f7",l.a.createElement("span",{className:"require"},"\uff0a")),l.a.createElement("input",{className:"form-input",type:"tel",name:"tel",onChange:this.onChangeTel,value:this.state.tel})),l.a.createElement("div",{className:"form-item"},l.a.createElement("label",{className:"form-label"},"\u65bd\u8a2d\u540d",l.a.createElement("span",{className:"require"},"\uff0a")),l.a.createElement("input",{className:"form-input",type:"text",name:"facility",onChange:this.onChangeFacility,value:this.state.facility})),l.a.createElement("div",{className:"form-item"},l.a.createElement("label",{className:"form-label"},"\u90e8\u7f72\u540d",l.a.createElement("span",{className:"require"},"\uff0a")),l.a.createElement("input",{className:"form-input",type:"text",name:"department",onChange:this.onChangeDepartment,value:this.state.department})),l.a.createElement("div",{className:"form-item"},l.a.createElement("label",{className:"form-label"},"\u3054\u4f4f\u6240",l.a.createElement("span",{className:"require"},"\uff0a")),l.a.createElement("input",{className:"form-input",type:"text",maxLength:"7",name:"zip_code",placeholder:"\u90f5\u4fbf\u756a\u53f7(\u6570\u5b57\u306e\u307f\u3067\u3054\u5165\u529b\u304f\u3060\u3055\u3044)\uff0a",onChange:this.onChangezip_code,value:this.state.zip_code,onKeyUp:this.complementAddress,onBlur:this.onBlurZipcode}),l.a.createElement("input",{className:"form-input",type:"text",name:"prefecture",id:"prefecture",required:!0,placeholder:"\u90fd\u9053\u5e9c\u770c\uff0a",onChange:this.onChangePrefecture,value:this.state.prefecture}),l.a.createElement("input",{className:"form-input",type:"text",name:"city",id:"city",required:!0,placeholder:"\u5e02\u533a\u753a\u6751\uff0a",onChange:this.onChangeCity,value:this.state.city}),l.a.createElement("input",{className:"form-input",type:"text",name:"address",id:"address",required:!0,placeholder:"\u756a\u5730\uff0a",onChange:this.onChangeAdress,value:this.state.address})),l.a.createElement("div",{className:"form-item"},l.a.createElement("label",{className:"form-label"},"\u4eca\u5f8c\u30e1\u30f3\u30ea\u30c3\u30b1\u30d8\u30eb\u30b9\u30b1\u30a2\u682a\u5f0f\u4f1a\u793e\u304b\u3089\u306e\u30bb\u30df\u30ca\u30fc\u3084\u88fd\u54c1\u306b\u3064\u3044\u3066\u306e\u3054\u6848\u5185\u306a\u3069\u3092\u304a\u53d7\u3051\u53d6\u308a\u306b\u306a\u3089\u308c\u308b\u3053\u3068\u3092\u3054\u5e0c\u671b\u306e\u5834\u5408\u306f\u201d\u306f\u3044\u201d\u3092\u9078\u629e\u3057\u3066\u4e0b\u3055\u3044\u3002",l.a.createElement("span",{className:"require"},"\uff0a")),l.a.createElement("div",{className:"policy-wrapper"},l.a.createElement("span",{className:"form-radio-wrap",onClick:function(){return e.clickNotification(1)}},l.a.createElement("input",{type:"radio",name:"notification",id:"notification-1",checked:this.isNoticicationChecked(1)}),l.a.createElement("label",{for:"notification-1"},"\u306f\u3044")),l.a.createElement("span",{className:"form-radio-wrap",onClick:function(){return e.clickNotification(2)}},l.a.createElement("input",{type:"radio",name:"notification",id:"notification-2",checked:this.isNoticicationChecked(2)}),l.a.createElement("label",{for:"notification-2"},"\u3044\u3044\u3048")),l.a.createElement("p",{className:"submit-note"},"\u203b\u3044\u3044\u3048\u3092\u9078\u629e\u3055\u308c\u305f\u5834\u5408\u3067\u3082\u3001\u8cc7\u6599\u3001\u30ae\u30df\u30c3\u30af\u767a\u9001\u306e\u3054\u9023\u7d61\u306e\u305f\u3081\u3001\u3054\u5e0c\u671b\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u30a2\u30dd\u30a4\u30f3\u30c8\u53d6\u5f97\u306e\u305f\u3081\u306bE-mail\u3067\u3054\u9023\u7d61\u7533\u3057\u4e0a\u3052\u308b\u5834\u5408\u304c\u3054\u3056\u3044\u307e\u3059\u3002"))),l.a.createElement("div",{className:"form-item"},l.a.createElement("div",{className:"policy-wrapper"},l.a.createElement("label",{className:"form-label"},"M\xf6lnlycke\u306e",l.a.createElement("a",{href:"https://www.molnlycke.com/about-this-site/terms-of-use/",target:"_blank"},"\u30ea\u30fc\u30ac\u30eb"),"\u3068",l.a.createElement("a",{href:"https://www.molnlycke.com/about-this-site/policies/",target:"_blank"},"\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc"),"\u306b\u540c\u610f\u81f4\u3057\u307e\u3059\u3002",l.a.createElement("span",{className:"require"},"\uff0a")),l.a.createElement("input",{type:"checkbox",name:"policy",id:"policy",className:"checkbox",onClick:this.onClickPolicy,checked:this.isPolicyClicked()}),l.a.createElement("p",{className:"policy-note"},"Box 13080, Gamlestadv\xe4gen 3C, SE-40252 G\xf6teborg, Sweden. Privacy Policy The M\xf6lnlycke trademark, name and respective logo are registered globally to one or more of the M\xf6lnlycke Health Care Group of Companies. \xa9 2020 M\xf6lnlycke Health Care AB. All rights reserved."))),l.a.createElement("input",{type:"button",className:"btn",value:"\u9001\u4fe1",disabled:!this.state.policy,onClick:this.post}),l.a.createElement("p",{className:"submit-note",id:"submit-note"},"\u203b\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc\u306b\u540c\u610f\u3044\u305f\u3060\u304b\u306a\u3044\u3068\u9001\u4fe1\u51fa\u6765\u307e\u305b\u3093\u3002"))))}}]),a}(l.a.Component),k=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={open:n.props.open,onClickClose:n.props.onClickClose},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=(e.open,e.onClickClose);return l.a.createElement("div",{className:"movie-wrapper"},l.a.createElement("video",{clssName:"start-movie",id:"vid",src:"./images/wondcare_no_sound.mp4",autoplay:"true",muted:"muted"}),l.a.createElement("div",{class:"close-btn close-position",onClick:t},"\u30b9\u30ad\u30c3\u30d7 \uff1e"))}}]),a}(l.a.Component),_=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){setTimeout(n.modalClose,0)},n.modalClose=function(){n.setState({open:!1})},n.onClickClose=function(){n.setState({open:!1})},n.state={open:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.open,t={opacity:e?1:0},a={transition:"2s",opacity:e?0:1};return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"modal_wrapper",style:t},e&&l.a.createElement(k,{open:e,onClickClose:this.onClickClose})),l.a.createElement("div",{style:a},!e&&l.a.createElement("div",{className:"contents_wrapper"},l.a.createElement("div",{className:"key-visual__area"},l.a.createElement(g,null)),l.a.createElement(N,null),l.a.createElement(v,null))))}}]),a}(l.a.Component);c.a.render(l.a.createElement(_,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.a6ea8202.chunk.js.map