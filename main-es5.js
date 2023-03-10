function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_UserService_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/UserService/users.service */
    "./src/app/services/UserService/users.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(userData) {
        _classCallCheck(this, AppComponent);

        this.userData = userData;
        this.currentPage = 1;
        this.view = "home";
        this.title = 'user-app';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
          //Add 'implements OnInit' to the class.
          this.setUserValues('1');
        }
      }, {
        key: "goToUserDetails",
        value: function goToUserDetails(id) {
          this.view = "details";
          this.idClicked = id;
        }
      }, {
        key: "goToHome",
        value: function goToHome() {
          this.view = "home";
        }
      }, {
        key: "goToNext",
        value: function goToNext() {
          if (this.userValues.total_pages > this.currentPage) {
            this.currentPage++;
            this.setUserValues(String(this.currentPage));
          }
        }
      }, {
        key: "goToPrevious",
        value: function goToPrevious() {
          if (1 < this.currentPage) {
            this.currentPage--;
            this.setUserValues(String(this.currentPage));
          }
        }
      }, {
        key: "setUserValues",
        value: function setUserValues(page) {
          var _this = this;

          this.userData.getUsers(page).subscribe(function (result) {
            _this.userValues = result;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_UserService_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]));
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 73,
      vars: 0,
      consts: [[1, "content"], [1, "navbar", "navbar-expand-lg", "bg-primary"], [1, "container-fluid"], [1, "fs-2", 2, "color", "white", "margin-left", "0.5em"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", 2, "margin-left", "2.5em"], [1, "navbar-nav"], ["aria-current", "page", "href", "#", 1, "nav-link", "active", 2, "color", "white"], ["href", "#", 1, "nav-link", 2, "color", "white"], [1, "nav-link", "disabled", 2, "color", "white"], [1, "container", "text-center", 2, "margin-top", "3em"], [1, "row"], [1, "col"], [1, "card"], ["src", "../assets/index.png", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-primary"], ["src", "../assets/Detective-with-magnifying-glass-clipart-2.jpg", "alt", "...", 1, "card-img-top"], ["src", "../assets/networking-abstract-scribble-networking-people-connection-circle-hand-drawing-91179513.jpg", "alt", "...", 1, "card-img-top"], [1, "container", "text-center", 2, "margin-top", "10em"], [1, "col-md-8"], [1, "col-6", "col-md-4"], ["src", "../assets/abook.jpg", "alt", "...", 1, "img-thumbnail", 2, "width", "100%", "height", "100%"], [1, "row", 2, "margin-top", "3em"], ["src", "../assets/index.png", "alt", "...", 1, "img-thumbnail", 2, "width", "100%", "height", "100%"], [1, "footer"], [1, "version"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "ISN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Career Development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Job Opportunities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Networking Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Language Change");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Virtual Chat Bot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Some quick example text to build on the card title and make up the bulk of the card's content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Go somewhere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Career Development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Some quick example text to build on the card title and make up the bulk of the card's content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Go somewhere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Networking Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Some quick example text to build on the card title and make up the bulk of the card's content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Go somewhere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "International Student Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Sit amet consectetur adipiscing elit duis. Donec adipiscing tristique risus nec feugiat in. Aliquam nulla facilisi cras fermentum odio eu. Enim ut tellus elementum sagittis vitae et. Commodo ullamcorper a lacus vestibulum sed arcu. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Sodales ut eu sem integer vitae justo. Amet aliquam id diam maecenas ultricies. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ornare arcu odio ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et. Diam sollicitudin tempor id eu nisl nunc. Elementum pulvinar etiam non quam. Tempor orci eu lobortis elementum nibh. Et sollicitudin ac orci phasellus egestas tellus rutrum. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Ac turpis egestas sed tempus. Amet risus nullam eget felis eget nunc. Turpis cursus in hac habitasse. Sit amet mattis vulputate enim nulla. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Sit amet aliquam id diam maecenas. Dignissim convallis aenean et tortor at risus viverra. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Scelerisque eu ultrices vitae auctor eu augue ut. Pellentesque habitant morbi tristique senectus. Donec enim diam vulputate ut");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Visa Consultation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec et odio pellentesque diam volutpat. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Sit amet consectetur adipiscing elit duis. Donec adipiscing tristique risus nec feugiat in. Aliquam nulla facilisi cras fermentum odio eu. Enim ut tellus elementum sagittis vitae et. Commodo ullamcorper a lacus vestibulum sed arcu. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Sodales ut eu sem integer vitae justo. Amet aliquam id diam maecenas ultricies. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ornare arcu odio ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et. Diam sollicitudin tempor id eu nisl nunc. Elementum pulvinar etiam non quam. Tempor orci eu lobortis elementum nibh. Et sollicitudin ac orci phasellus egestas tellus rutrum. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Ac turpis egestas sed tempus. Amet risus nullam eget felis eget nunc. Turpis cursus in hac habitasse. Sit amet mattis vulputate enim nulla. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Sit amet aliquam id diam maecenas. Dignissim convallis aenean et tortor at risus viverra. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Scelerisque eu ultrices vitae auctor eu augue ut. Pellentesque habitant morbi tristique senectus. Donec enim diam vulputate ut");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "\xA9 Microsoft Corporation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "v 1.0.0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["div.content[_ngcontent-%COMP%]   div.data_table[_ngcontent-%COMP%] {\n  margin-top: 3vw;\n}\ndiv.content[_ngcontent-%COMP%]   div.nxt_records[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: large;\n}\ndiv.content[_ngcontent-%COMP%]   div.nxt-buttons[_ngcontent-%COMP%] {\n  margin-top: 1vw;\n  text-align: center;\n}\ndiv.content[_ngcontent-%COMP%]   div.footer[_ngcontent-%COMP%] {\n  background-color: #0275d8;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 3vw;\n  border-top: 1px solid #e7eff6;\n  display: flex;\n  align-items: center;\n  border-radius: 5%;\n  justify-content: space-between;\n}\ndiv.content[_ngcontent-%COMP%]   div.footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 2vw;\n  font-size: 1.2vw;\n}\ndiv.content[_ngcontent-%COMP%]   div.footer[_ngcontent-%COMP%]   div.version[_ngcontent-%COMP%] {\n  margin-right: 2vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFx0ZW1wXFx1c2VyLWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQVI7QURFSTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNBUjtBRENRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NaO0FEQ1E7RUFDSSxpQkFBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRlbnR7XHJcbiAgICBkaXYuZGF0YV90YWJsZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzdnc7XHJcbiAgICB9XHJcbiAgICBkaXYubnh0X3JlY29yZHN7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB9XHJcbiAgICBkaXYubnh0LWJ1dHRvbnN7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGRpdi5mb290ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzVkODtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzdnc7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlN2VmZjY7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYudmVyc2lvbntcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAydnc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZGl2LmNvbnRlbnQgZGl2LmRhdGFfdGFibGUge1xuICBtYXJnaW4tdG9wOiAzdnc7XG59XG5kaXYuY29udGVudCBkaXYubnh0X3JlY29yZHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5kaXYuY29udGVudCBkaXYubnh0LWJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAxdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmRpdi5jb250ZW50IGRpdi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NWQ4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3Z3O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U3ZWZmNjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmRpdi5jb250ZW50IGRpdi5mb290ZXIgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAydnc7XG4gIGZvbnQtc2l6ZTogMS4ydnc7XG59XG5kaXYuY29udGVudCBkaXYuZm9vdGVyIGRpdi52ZXJzaW9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAydnc7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_UserService_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-detail/user-detail.component */
    "./src/app/user-detail/user-detail.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/DetailsService/details.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/services/DetailsService/details.service.ts ***!
    \************************************************************/

  /*! exports provided: DetailsService */

  /***/
  function srcAppServicesDetailsServiceDetailsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsService", function () {
      return DetailsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DetailsService = /*#__PURE__*/function () {
      function DetailsService(http) {
        _classCallCheck(this, DetailsService);

        this.http = http;
        this.URL = "https://reqres.in/api/users/";
      }

      _createClass(DetailsService, [{
        key: "getDetails",
        value: function getDetails(id) {
          return this.http.get(this.URL + id);
        }
      }]);

      return DetailsService;
    }();

    DetailsService.??fac = function DetailsService_Factory(t) {
      return new (t || DetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DetailsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: DetailsService,
      factory: DetailsService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/UserService/users.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/UserService/users.service.ts ***!
    \*******************************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppServicesUserServiceUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UsersService = /*#__PURE__*/function () {
      function UsersService(http) {
        _classCallCheck(this, UsersService);

        this.http = http;
        this.URL = "https://reqres.in/api/users?page=";
      }

      _createClass(UsersService, [{
        key: "getUsers",
        value: function getUsers(page) {
          return this.http.get(this.URL + page);
        }
      }]);

      return UsersService;
    }();

    UsersService.??fac = function UsersService_Factory(t) {
      return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UsersService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: UsersService,
      factory: UsersService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-detail/user-detail.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/user-detail/user-detail.component.ts ***!
    \******************************************************/

  /*! exports provided: UserDetailComponent */

  /***/
  function srcAppUserDetailUserDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function () {
      return UserDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_DetailsService_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/DetailsService/details.service */
    "./src/app/services/DetailsService/details.service.ts");

    var UserDetailComponent = /*#__PURE__*/function () {
      function UserDetailComponent(details) {
        _classCallCheck(this, UserDetailComponent);

        this.details = details;
      }

      _createClass(UserDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.details.getDetails(this.userID).subscribe(function (result) {
            _this2.userDetails = result;
          });
        }
      }]);

      return UserDetailComponent;
    }();

    UserDetailComponent.??fac = function UserDetailComponent_Factory(t) {
      return new (t || UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_DetailsService_details_service__WEBPACK_IMPORTED_MODULE_1__["DetailsService"]));
    };

    UserDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: UserDetailComponent,
      selectors: [["app-user-detail"]],
      inputs: {
        userID: "userID"
      },
      decls: 25,
      vars: 4,
      consts: [[1, "user-values"], [1, "text-center"], [1, "rounded", 3, "src"], [1, "value-table"], [1, "value-heading"], [1, "table-container"], [1, "table", "table-striped"], ["scope", "row"]],
      template: function UserDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "User Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " First Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Last Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Email Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.userDetails.data.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.userDetails.data.first_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.userDetails.data.last_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.userDetails.data.email);
        }
      },
      styles: ["div.user-values[_ngcontent-%COMP%] {\n  margin-top: 3vw;\n}\ndiv.user-values[_ngcontent-%COMP%]   div.text-center[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25em;\n  height: 25em;\n}\ndiv.user-values[_ngcontent-%COMP%]   div.value-table[_ngcontent-%COMP%]   div.value-heading[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  margin-top: 3vw;\n  text-align: center;\n  margin-bottom: 2vw;\n}\ndiv.user-values[_ngcontent-%COMP%]   div.value-table[_ngcontent-%COMP%]   div.table-container[_ngcontent-%COMP%] {\n  margin-left: 40vw;\n  margin-right: 40vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWwvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFx0ZW1wXFx1c2VyLWFwcC9zcmNcXGFwcFxcdXNlci1kZXRhaWxcXHVzZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyLWRldGFpbC91c2VyLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjtBRENRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDWjtBREdRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RaO0FER1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC91c2VyLWRldGFpbC91c2VyLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi51c2VyLXZhbHVlc3tcclxuICAgIG1hcmdpbi10b3A6IDN2dztcclxuICAgIGRpdi50ZXh0LWNlbnRlcntcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNWVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGl2LnZhbHVlLXRhYmxle1xyXG4gICAgICAgIGRpdi52YWx1ZS1oZWFkaW5ne1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzdnc7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYudGFibGUtY29udGFpbmVye1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNDB2dztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHZ3OyBcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG59IiwiZGl2LnVzZXItdmFsdWVzIHtcbiAgbWFyZ2luLXRvcDogM3Z3O1xufVxuZGl2LnVzZXItdmFsdWVzIGRpdi50ZXh0LWNlbnRlciBpbWcge1xuICB3aWR0aDogMjVlbTtcbiAgaGVpZ2h0OiAyNWVtO1xufVxuZGl2LnVzZXItdmFsdWVzIGRpdi52YWx1ZS10YWJsZSBkaXYudmFsdWUtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIG1hcmdpbi10b3A6IDN2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAydnc7XG59XG5kaXYudXNlci12YWx1ZXMgZGl2LnZhbHVlLXRhYmxlIGRpdi50YWJsZS1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogNDB2dztcbiAgbWFyZ2luLXJpZ2h0OiA0MHZ3O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-detail',
          templateUrl: './user-detail.component.html',
          styleUrls: ['./user-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _services_DetailsService_details_service__WEBPACK_IMPORTED_MODULE_1__["DetailsService"]
        }];
      }, {
        userID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\User\Desktop\temp\user-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map