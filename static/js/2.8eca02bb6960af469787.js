webpackJsonp([2],{Id4J:function(t,a){},KreC:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={data:function(){return{barDropdown:!1,scrollHeader:!1,isMenuOpen:!1,routerName:this.$route.name}},methods:{scrollPage:function(){var t=this,a=$(window).scrollTop(),s=this.routerName;switch(!0){case"Home"===s&&a>0:window.addEventListener("scroll",t.scrollPage),t.scrollHeader=!0;break;case"Home"===s:window.addEventListener("scroll",t.scrollPage),t.scrollHeader=!1;break;default:window.removeEventListener("scroll",t.scrollPage),t.scrollHeader=!0}}},watch:{$route:function(t,a){t.path!==a.path&&(this.routerName=t.name,this.isMenuOpen=!1,this.scrollPage())}},created:function(){this.scrollPage()}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",{staticClass:"navbar navbar-expand-md navbar-light py-md-1 px-md-5 p-0",class:{"navbar-scroll":t.isMenuOpen||t.scrollHeader}},[s("div",{staticClass:"container-fluid container-md"},[s("h1",{staticClass:"ml-5 ml-md-0"},[s("router-link",{staticClass:"navbar-logo",attrs:{to:{name:"Home"}}},[t._v("Emily")])],1),t._v(" "),s("button",{staticClass:"navbar-toggler py-3 px-5",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:function(a){t.barDropdown=!t.barDropdown}}},[s("div",{staticClass:"position-relative"},[s("span",{staticClass:"toggler-bar toggler-bar-top",class:{"toggler-bar-top-rotate":t.barDropdown}}),t._v(" "),s("span",{staticClass:"toggler-bar toggler-bar-middle",class:{"d-none":t.barDropdown}}),t._v(" "),s("span",{staticClass:"toggler-bar toggler-bar-bottom",class:{"toggler-bar-bottom-rotate":t.barDropdown}})])]),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo02"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("li",{staticClass:"nav-item ml-xl-9 ml-lg-5 ml-md-3"},[s("router-link",{staticClass:"nav-link h5 text-center px-3 py-md-3 py-5",attrs:{to:"/login"}},[s("span",{staticClass:"material-icons align-bottom d-md-inline-block d-none mr-1"},[t._v("account_box")]),t._v("登入後台\n          ")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link h5 text-center px-3 py-md-3 py-5",attrs:{href:"#"}},[a("span",{staticClass:"material-icons align-bottom d-md-inline-block d-none mr-1"},[this._v("receipt_long")]),this._v("所有商品\n          ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item ml-xl-9 ml-lg-5 ml-md-3"},[a("a",{staticClass:"nav-link h5 text-center px-3 py-md-3 py-5",attrs:{href:"#"}},[a("span",{staticClass:"material-icons align-bottom d-md-inline-block d-none mr-1"},[this._v("favorite")]),this._v("Blog\n          ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item ml-xl-9 ml-lg-5 ml-md-3"},[a("a",{staticClass:"nav-link h5 text-center px-3 py-md-3 py-5",attrs:{href:"#"}},[a("span",{staticClass:"material-icons align-bottom d-md-inline-block d-none mr-1"},[this._v("thumb_up")]),this._v("門市據點\n          ")])])}]};var i={components:{Navbar:s("VU/8")(e,l,!1,function(t){s("QBGS")},null,null).exports},data:function(){return{}},methods:{scrollToTop:function(){window.scrollTo(0,0)},ScrollHeight:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;document.querySelector(".scroll-top").style.opacity=t>300?"1":"0"}},mounted:function(){window.addEventListener("scroll",this.ScrollHeight)},destroyed:function(){window.removeEventListener("scroll",this.ScrollHeight)}},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Navbar"),t._v(" "),s("router-view"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"scroll-top position-fixed"},[s("a",{staticClass:"scroll-up h2 d-flex justify-content-center align-items-center",attrs:{href:"#"},on:{click:t.scrollToTop}},[s("i",{staticClass:"fa fa-angle-up"})])]),t._v(" "),t._m(2)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("footer",{staticClass:"bg-warning"},[a("div",{staticClass:"container-fluid container-md py-5"},[a("ul",{staticClass:"footer-icon d-flex align-items-center justify-content-center"},[a("li",[a("a",{staticClass:"text-center mr-sm-10 mr-4",attrs:{href:"#"}},[a("span",{staticClass:"material-icons h1 align-bottom"},[this._v("facebook")])])]),this._v(" "),a("li",[a("a",{staticClass:"text-center mr-sm-10 mr-4",attrs:{href:"#"}},[a("i",{staticClass:"fab fa-github-square h1"})])]),this._v(" "),a("li",[a("a",{staticClass:"text-center",attrs:{href:"#"}},[a("span",{staticClass:"material-icons h1 align-bottom"},[this._v("local_post_office")])])])]),this._v(" "),a("p",{staticClass:"text-topic text-center pt-2 mb-0"},[this._v("© 2021. 僅為作品用無商業用途")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"fixcart position-fixed"},[a("button",{staticClass:"btn btn-warning",attrs:{type:"button","data-toggle":"modal","data-target":"#cartModal"}},[a("span",{staticClass:"material-icons h2 pt-1"},[this._v("shopping_cart")]),this._v(" "),a("span",{staticClass:"cart-badge badge position-absolute badge-pill badge-warning"},[this._v("3")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal fade",attrs:{id:"cartModal",tabindex:"-1",role:"dialog","aria-labelledby":"cartModal","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header border-0 pb-0"},[s("h4",{staticClass:"modal-title text-warning font-weight-bold",attrs:{id:"cartModalCenterTitle"}},[t._v("已選擇商品")])]),t._v(" "),s("div",{staticClass:"modal-body pb-0"},[s("div",{staticClass:"table-responsive-md"},[s("table",{staticClass:"table mb-3"},[s("thead",[s("tr",[s("th",{staticClass:"text-center py-3",attrs:{scope:"col",width:"60"}}),t._v(" "),s("th",{staticClass:"py-3",attrs:{scope:"col"}},[t._v("商品")]),t._v(" "),s("th",{staticClass:"py-3",attrs:{scope:"col",width:"60"}},[t._v("數量")]),t._v(" "),s("th",{staticClass:"py-3",attrs:{scope:"col",width:"80"}},[t._v("單價")])])]),t._v(" "),s("tbody",[s("tr",[s("th",{staticClass:"text-center py-2",attrs:{scope:"row"}},[s("div",{staticClass:"btn btn-outline-danger btn-sm p-0 border-0"},[s("span",{staticClass:"material-icons h2 text-danger"},[t._v("delete_forever")])])]),t._v(" "),s("td",{staticClass:"pb-0"},[s("span",[t._v("Lorem ipsum dolor sit, amet ")])]),t._v(" "),s("td",{staticClass:"text-left"},[t._v("100")]),t._v(" "),s("td",{staticClass:"text-right"},[t._v("20000")])])]),t._v(" "),s("tfoot",[s("tr",[s("td",{attrs:{colspan:"4"}},[s("div",{staticClass:"text-right h5 py-4"},[t._v("\n                      小計  NT $1234\n                    ")])])])])])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-warning btn-block font-weight-bolder",attrs:{type:"button"}},[t._v("結帳去")])])])])])}]};var r=s("VU/8")(i,n,!1,function(t){s("Id4J")},null,null);a.default=r.exports},QBGS:function(t,a){}});
//# sourceMappingURL=2.8eca02bb6960af469787.js.map