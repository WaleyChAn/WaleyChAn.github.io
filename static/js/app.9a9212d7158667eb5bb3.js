webpackJsonp([0],{"0Dks":function(t,e){},"2+hb":function(t,e){},"6hTs":function(t,e){},"8tHZ":function(t,e){},JDP9:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},n,!1,function(t){i("b/o3")},"data-v-640ba6b7",null).exports,r=i("/ocq"),o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"oc-container clear-both"},[t._m(0),t._v(" "),i("div",{staticClass:"oc-nav"},[i("div",{staticClass:"oc-nav-content"},[i("ul",{staticClass:"clear-both"},t._l(t.navList,function(e,a){return i("li",{key:a,class:{active:a===t.navActive},on:{click:function(e){return t.navClick(a)}}},[i("a",[t._v(t._s(e.title))])])}),0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"oc-logo"},[e("img",{attrs:{src:i("iQH9")}})])}]};var c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"oc-container"},[this._v("\n  Make by Waley\n")])},staticRenderFns:[]};var l={name:"OcLayout",components:{OcHeader:i("VU/8")({name:"OcHeader",data:function(){return{navActive:0,navList:[{title:"home",type:""},{title:"skill",type:"type-1"},{title:"acg",type:"type-2"},{title:"pet",type:"type-3"}]}},methods:{navClick:function(t){this.navActive=t}}},o,!1,function(t){i("8tHZ")},"data-v-15810646",null).exports,OcFooter:i("VU/8")({name:"OcFooter",data:function(){return{}}},c,!1,function(t){i("0Dks")},"data-v-4907874a",null).exports},data:function(){return{}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout"},[e("div",{staticClass:"oc-header"},[e("oc-header")],1),this._v(" "),e("div",{staticClass:"oc-content"},[e("router-view")],1),this._v(" "),e("div",{staticClass:"oc-footer"},[e("oc-footer")],1)])},staticRenderFns:[]};var v=i("VU/8")(l,p,!1,function(t){i("YAoO")},"data-v-d3420ad8",null).exports,u=(i("v2ns"),i("7QTg")),d={name:"CardSwiper",components:{swiper:u.swiper,swiperSlide:u.swiperSlide},props:{swiperList:Array},data:function(){return{infoOption:{loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},spaceBetween:20,pagination:{el:".info .swiper-pagination",clickable:!0},navigation:{nextEl:".info .swiper-button-next",prevEl:".info .swiper-button-prev"}},coverOption:{effect:"fade",simulateTouch:!1}}},computed:{infoSwiper:function(){return this.$refs.infoSwiper.swiper},coverSwiper:function(){return this.$refs.coverSwiper.swiper}},methods:{sliderChange:function(){var t=this.infoSwiper.activeIndex;this.coverSwiper.slideTo(t)},coverBackground:function(t){return{backgroundImage:"url("+t+")"}}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"oc-card-swiper"},[i("div",{staticClass:"cover"},[i("swiper",{ref:"coverSwiper",attrs:{options:t.coverOption}},t._l(t.swiperList,function(e,a){return i("swiper-slide",{key:a},[i("div",{staticClass:"cover-item",style:t.coverBackground(e.cover)})])}),1)],1),t._v(" "),i("div",{staticClass:"info"},[i("swiper",{ref:"infoSwiper",attrs:{options:t.infoOption},on:{slideChangeTransitionStart:function(e){return t.sliderChange()}}},[t._l(t.swiperList,function(e,a){return i("swiper-slide",{key:a},[i("dl",{staticClass:"info-item"},[i("dt",[t._v(t._s(e.title))]),t._v(" "),i("dd",[t._v(t._s(e.summary))])])])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),i("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[i("i",{staticClass:"fa fa-arrow-left"})]),t._v(" "),i("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[i("i",{staticClass:"fa fa-arrow-right"})])],2)],1)])},staticRenderFns:[]};var m={name:"OcHome",components:{CardSwiper:i("VU/8")(d,f,!1,function(t){i("JDP9")},"data-v-498558ea",null).exports},data:function(){return{cardList:[{title:"基于 CPU 的 AI 深度优化，如何打造业内领先的 MLPerf 推理性能？",cover:"../../../static/images/cover-1.jpg",type:"type-1",date:"2019/12/27 17:01",summary:"几天前，英特尔正式宣布以 20 亿美元收购成立仅三年的 AI 芯片公司 Habana Labs。这是继收购 Mobileye、Nervana 之后，英特尔在 AI 领域第三次收购 AI 初创公司。与此同时，腾讯也在不断加大 AI 布局。两强联手，看科技巨头如何引领未来变革？"},{title:"XGBoost 在携程搜索排序中的应用",cover:"../../../static/images/cover-2.jpg",type:"type-2",date:"2019/12/27 17:01",summary:"在互联网高速发展的今天，越来越复杂的特征被应用到搜索中，对于检索模型的排序，基本的业务规则排序或者人工调参的方式已经不能满足需求了，此时由于大数据的加持，机器学习、深度学习成为了一项可以选择的方式。"},{title:"AI 芯片年终盘点：有些公司年产 N 片，有些 N 年产 1 片都难",cover:"../../../static/images/cover-3.jpg",type:"type-3",date:"2019/12/27 17:01",summary:"过去几年，人工智能产业无论是算法实现、海量数据获取和存储还是计算能力的体现都离不开目前唯一的物理基础——芯片。可以说，“无芯片不 AI”，能否开发出具有超高运算能力、符合市场需求的芯片，已成为人工智能领域可持续发展的重要因素。 年终在即，AI 前线小组盘点了 2019 年国内外主流科技公司在 AI 芯片方面的进展，有些公司因为 2019 年没有发布新的 AI 芯片而未计入本次统计，统计维度分为主要特点、芯片参数和应用场景三部分，如有疏漏，欢迎各位留言。"},{title:"敏捷开发落地不实际？原因可能在于你的 IDE 工具",cover:"../../../static/images/cover-4.jpg",type:"",date:"2019/12/27 17:01",summary:"对于企业来说，效率就是一切。开发效率的工程化建设已经开始被各大企业提到技术管理日程中。而且现阶段，无论是框架也好、模板也好，目的都是在为提升代码开发效率而努力。随着云计算的深入，端 + 云的开发模式以及完全云端化的开发模式都先后上线，这些无疑都是在对传统 IDE 开发模式的挑战。云端 IDE，会是未来的趋势吗？"},{title:"Facebook 首席 AI 科学家：机器学习的杀手级应用是 AR 眼镜",cover:"../../../static/images/cover-5.jpg",type:"type-1",date:"2019/12/27 17:01",summary:"想要实现理想中的 AR 眼镜，还需要面临一系列的挑战，尤其是在能效比方面，越来越多的开发者开始去考虑低功耗的问题。近期，关于机器学习的应用场景，Facebook 首席 AI 科学家 Lann LeCun 就曾表示，AR 眼镜将是机器学习从业者的绝佳挑战领域，它将成为高效节能的机器学习杀手级应用。"}]}},methods:{setType:function(t){var e="";switch(t){case"type-1":e="Skill";break;case"type-2":e="ACG";break;case"type-3":e="Pet";break;default:e="Others"}return e},swiperList:function(){return this.makeRandomArr(this.cardList,4)},makeRandomArr:function(t,e){var i=t.slice(0),a=[];if(e>t.length)a=t;else for(var n=0;n<e;n++){var s=Math.floor(Math.random()*(i.length-1)),r=i[s];i.splice(s,1),a.push(r)}return a}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"oc-container"},[i("div",{staticClass:"oc-card clear-both"},[i("div",{staticClass:"oc-card-news col-box-4"},[i("card-swiper",{attrs:{swiperList:t.swiperList()}})],1),t._v(" "),i("div",{staticClass:"oc-card-main col-box-8"},t._l(t.cardList,function(e,a){return i("div",{key:a,staticClass:"oc-card-column col-box-6"},[i("div",{staticClass:"oc-card-item"},[i("div",{staticClass:"oc-card-cover"},[i("img",{attrs:{src:e.cover}}),t._v(" "),i("span",[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"oc-card-info"},[i("dl",[i("dt",[i("span",{class:e.type},[t._v(t._s(t.setType(e.type)))])]),t._v(" "),i("dd",[t._v(t._s(e.date))])]),t._v(" "),i("p",[t._v(t._s(e.summary))])])])])}),0)])])},staticRenderFns:[]};var _=i("VU/8")(m,h,!1,function(t){i("gOKV")},"data-v-503856be",null).exports;a.a.use(r.a);var w=new r.a({routes:[{path:"/",component:v,children:[{path:"/",name:"OcHome",component:_}]}]});i("6hTs"),i("uXoL"),i("2+hb"),i("UxLs"),i("mKAB");a.a.config.productionTip=!1,new a.a({el:"#app",router:w,components:{App:s},template:"<App/>"})},UxLs:function(t,e){},YAoO:function(t,e){},"b/o3":function(t,e){},gOKV:function(t,e){},iQH9:function(t,e,i){t.exports=i.p+"static/img/logo.c685c2c.png"},mKAB:function(t,e){},uXoL:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9a9212d7158667eb5bb3.js.map