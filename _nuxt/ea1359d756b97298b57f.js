(window.webpackJsonp=window.webpackJsonp||[]).push([[18,16,19],{262:function(t,e,s){var n=s(265);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(34).default)("0dc3a8f2",n,!0,{sourceMap:!1})},263:function(t,e,s){var n=s(268);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(34).default)("144ff794",n,!0,{sourceMap:!1})},264:function(t,e,s){"use strict";var n=s(262);s.n(n).a},265:function(t,e,s){(t.exports=s(33)(!1)).push([t.i,"\n.link-button[data-v-37a5013e]{font-size:120%;padding:5px 10px;margin:15px\n}\n.custom-icon[data-v-37a5013e],.v-icon[data-v-37a5013e]{width:20px\n}",""])},266:function(t,e,s){"use strict";s.r(e);var n={name:"Sourcelink",components:{GithubIcon:s(270).b},props:{address:{type:String,default:""}}},a=(s(264),s(12)),i=Object(a.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",[e("el-col",{attrs:{offset:18,span:6,xs:{span:10,offset:14}}},[e("a",{attrs:{href:this.address}},[e("el-button",{staticClass:"link-button",attrs:{plain:""}},[e("github-icon",{staticClass:"custom-icon",attrs:{name:"github"}}),this._v(" "),e("div",{staticClass:"source-text"},[this._v("Source")])],1)],1)])],1)},[],!1,null,"37a5013e",null);i.options.__file="sourceLink.vue";e.default=i.exports},267:function(t,e,s){"use strict";var n=s(263);s.n(n).a},268:function(t,e,s){(t.exports=s(33)(!1)).push([t.i,"\n.work-card[data-v-1def0d7e]{margin:0 0 50px\n}\n.description[data-v-1def0d7e]{text-align:left\n}\n.description[data-v-1def0d7e],.screen-shots[data-v-1def0d7e]{margin:30px 0\n}\n.sub-header[data-v-1def0d7e]{margin:20px 0 5px;font-weight:700\n}\n.tech[data-v-1def0d7e]{margin:0 5px\n}\n.publication[data-v-1def0d7e]{margin:5px 20px;text-align:left\n}",""])},269:function(t,e,s){"use strict";s.r(e);var n={name:"Portfolio",components:{sourceLink:s(266).default},props:{title:{type:String,default:"title"},date:{type:String,default:"20xx"},description:{type:String,default:"description"},screenShots:{type:Array,default:function(){return[]}},technologies:{type:Array,default:function(){return[]}},publications:{type:Array,default:function(){return[]}},sourceAddress:{type:String,default:""}},data:function(){return{carouselHeight:"300px"}},created:function(){this.resizeWindow(),window.addEventListener("resize",this.resizeWindow,!1)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeWindow,!1)},methods:{resizeWindow:function(){window.innerWidth<768?this.carouselHeight="150px":this.carouselHeight="300px"}}},a=(s(267),s(12)),i=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",[s("el-col",{attrs:{span:20,offset:2}},[s("el-card",{staticClass:"work-card"},[s("el-row",[s("el-col",{attrs:{span:24}},[s("h2",[t._v(t._s(t.title))]),t._v(" "),s("h3",[t._v(t._s(t.date))]),t._v(" "),s("div",{staticClass:"description"},[s("el-row",[s("el-col",{attrs:{md:{span:16,offset:4}}},[s("span",{domProps:{innerHTML:t._s(t.description)}})])],1)],1),t._v(" "),s("div",{staticClass:"screen-shots"},[0===t.screenShots.length?s("div"):1===t.screenShots.length?s("div",[s("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.screenShots[0]}})]):s("div",[s("el-carousel",{attrs:{height:t.carouselHeight,autoplay:!1,trigger:"click","indicator-position":"outside"}},t._l(t.screenShots,function(t,e){return s("el-carousel-item",{key:e},[s("img",{staticStyle:{"max-width":"100%"},attrs:{src:t}})])}))],1)]),t._v(" "),t.technologies.length>0?s("div",[s("div",{staticClass:"sub-header"},[t._v("Technologies")]),t._v(" "),t._l(t.technologies,function(e,n){return s("span",{key:n,staticClass:"tech"},[t._v("\n              "+t._s(e)+"\n            ")])})],2):t._e(),t._v(" "),t.publications.length>0?s("div",[s("div",{staticClass:"sub-header"},[t._v("Publications")]),t._v(" "),t._l(t.publications,function(e,n){return s("div",{key:n,staticClass:"publication"},[t._v("\n              "+t._s(e)+"\n            ")])})],2):t._e(),t._v(" "),""!==t.sourceAddress?s("sourceLink",{attrs:{address:t.sourceAddress}}):t._e()],1)],1)],1)],1)],1)},[],!1,null,"1def0d7e",null);i.options.__file="work.vue";e.default=i.exports},281:function(t,e,s){var n=s(307);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(34).default)("af8ba726",n,!0,{sourceMap:!1})},306:function(t,e,s){"use strict";var n=s(281);s.n(n).a},307:function(t,e,s){(t.exports=s(33)(!1)).push([t.i,"",""])},318:function(t,e,s){"use strict";s.r(e);var n={name:"Wagayakane",components:{work:s(269).default}},a=(s(306),s(12)),i=Object(a.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("work",{attrs:{"screen-shots":["/works/wagayakane/figure0.png"],technologies:["Python","Raspberry Pi","MMD(Miku Miku Dance)"],title:"我が家のあかねちゃんプロジェクト",date:"2017/8",description:"友人と共に実施した，我が家のあかねちゃんプロジェクト．自作スマートスピーカーのようなもの．売り文句は，'ラズパイことraspberry piを使って音声認識やらTwitterから家電を操作できるやつを作ってみました'．詳細はWebページや，動画を参照．<a href='http://wagayakane.html.xdomain.jp/index.html'>公式サイト</a>","source-address":"https://github.com/hama1080/WagayaNoAkaneChan"}})],1)},[],!1,null,"46e7c1e0",null);i.options.__file="wagayakane.vue";e.default=i.exports}}]);