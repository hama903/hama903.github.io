(window.webpackJsonp=window.webpackJsonp||[]).push([[15,16,19],{262:function(t,e,s){var n=s(265);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(34).default)("0dc3a8f2",n,!0,{sourceMap:!1})},263:function(t,e,s){var n=s(268);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(34).default)("144ff794",n,!0,{sourceMap:!1})},264:function(t,e,s){"use strict";var n=s(262);s.n(n).a},265:function(t,e,s){(t.exports=s(33)(!1)).push([t.i,"\n.link-button[data-v-37a5013e]{font-size:120%;padding:5px 10px;margin:15px\n}\n.custom-icon[data-v-37a5013e],.v-icon[data-v-37a5013e]{width:20px\n}",""])},266:function(t,e,s){"use strict";s.r(e);var n={name:"Sourcelink",components:{GithubIcon:s(270).b},props:{address:{type:String,default:""}}},i=(s(264),s(12)),r=Object(i.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",[e("el-col",{attrs:{offset:18,span:6,xs:{span:10,offset:14}}},[e("a",{attrs:{href:this.address}},[e("el-button",{staticClass:"link-button",attrs:{plain:""}},[e("github-icon",{staticClass:"custom-icon",attrs:{name:"github"}}),this._v(" "),e("div",{staticClass:"source-text"},[this._v("Source")])],1)],1)])],1)},[],!1,null,"37a5013e",null);r.options.__file="sourceLink.vue";e.default=r.exports},267:function(t,e,s){"use strict";var n=s(263);s.n(n).a},268:function(t,e,s){(t.exports=s(33)(!1)).push([t.i,"\n.work-card[data-v-1def0d7e]{margin:0 0 50px\n}\n.description[data-v-1def0d7e]{text-align:left\n}\n.description[data-v-1def0d7e],.screen-shots[data-v-1def0d7e]{margin:30px 0\n}\n.sub-header[data-v-1def0d7e]{margin:20px 0 5px;font-weight:700\n}\n.tech[data-v-1def0d7e]{margin:0 5px\n}\n.publication[data-v-1def0d7e]{margin:5px 20px;text-align:left\n}",""])},269:function(t,e,s){"use strict";s.r(e);var n={name:"Portfolio",components:{sourceLink:s(266).default},props:{title:{type:String,default:"title"},date:{type:String,default:"20xx"},description:{type:String,default:"description"},screenShots:{type:Array,default:function(){return[]}},technologies:{type:Array,default:function(){return[]}},publications:{type:Array,default:function(){return[]}},sourceAddress:{type:String,default:""}},data:function(){return{carouselHeight:"300px"}},created:function(){this.resizeWindow(),window.addEventListener("resize",this.resizeWindow,!1)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeWindow,!1)},methods:{resizeWindow:function(){window.innerWidth<768?this.carouselHeight="150px":this.carouselHeight="300px"}}},i=(s(267),s(12)),r=Object(i.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-row",[s("el-col",{attrs:{span:20,offset:2}},[s("el-card",{staticClass:"work-card"},[s("el-row",[s("el-col",{attrs:{span:24}},[s("h2",[t._v(t._s(t.title))]),t._v(" "),s("h3",[t._v(t._s(t.date))]),t._v(" "),s("div",{staticClass:"description"},[s("el-row",[s("el-col",{attrs:{md:{span:16,offset:4}}},[s("span",{domProps:{innerHTML:t._s(t.description)}})])],1)],1),t._v(" "),s("div",{staticClass:"screen-shots"},[0===t.screenShots.length?s("div"):1===t.screenShots.length?s("div",[s("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.screenShots[0]}})]):s("div",[s("el-carousel",{attrs:{height:t.carouselHeight,autoplay:!1,trigger:"click","indicator-position":"outside"}},t._l(t.screenShots,function(t,e){return s("el-carousel-item",{key:e},[s("img",{staticStyle:{"max-width":"100%"},attrs:{src:t}})])}))],1)]),t._v(" "),t.technologies.length>0?s("div",[s("div",{staticClass:"sub-header"},[t._v("Technologies")]),t._v(" "),t._l(t.technologies,function(e,n){return s("span",{key:n,staticClass:"tech"},[t._v("\n              "+t._s(e)+"\n            ")])})],2):t._e(),t._v(" "),t.publications.length>0?s("div",[s("div",{staticClass:"sub-header"},[t._v("Publications")]),t._v(" "),t._l(t.publications,function(e,n){return s("div",{key:n,staticClass:"publication"},[t._v("\n              "+t._s(e)+"\n            ")])})],2):t._e(),t._v(" "),""!==t.sourceAddress?s("sourceLink",{attrs:{address:t.sourceAddress}}):t._e()],1)],1)],1)],1)],1)},[],!1,null,"1def0d7e",null);r.options.__file="work.vue";e.default=r.exports},273:function(t,e,s){var n=s(291);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(34).default)("347681a2",n,!0,{sourceMap:!1})},290:function(t,e,s){"use strict";var n=s(273);s.n(n).a},291:function(t,e,s){(t.exports=s(33)(!1)).push([t.i,"",""])},328:function(t,e,s){"use strict";s.r(e);var n={name:"Reversi",components:{work:s(269).default}},i=(s(290),s(12)),r=Object(i.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("work",{attrs:{"screen-shots":["/works/reversi/figure0.png","/works/reversi/figure1.png","/works/reversi/figure2.png"],technologies:["C","GrWin"],title:"リバーシ",date:"2011",description:"\n    C言語+GrWinで作成したリバーシ(オセロ)ゲーム。\n    αβアルゴリズムを利用した簡単なCPUも搭載している。\n    ","source-address":""}})],1)},[],!1,null,"0fbbb32d",null);r.options.__file="reversi.vue";e.default=r.exports}}]);