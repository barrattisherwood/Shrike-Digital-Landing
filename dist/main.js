(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-hero></app-hero>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hero/hero.component */ "./src/app/components/hero/hero.component.ts");
/* harmony import */ var _components_particles_particles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/particles/particles.component */ "./src/app/components/particles/particles.component.ts");
/* harmony import */ var _components_email_box_email_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/email-box/email-box.component */ "./src/app/components/email-box/email-box.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"],
                _components_particles_particles_component__WEBPACK_IMPORTED_MODULE_5__["ParticlesComponent"],
                _components_email_box_email_box_component__WEBPACK_IMPORTED_MODULE_6__["EmailBoxComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/email-box/email-box.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/email-box/email-box.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"email-box\">\n  <input placeholder=\"Your Email\" type=\"email\" />\n  <button type=\"submit\">Submit</button>\n</div>"

/***/ }),

/***/ "./src/app/components/email-box/email-box.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/email-box/email-box.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  border: 1px solid #0e1f25;\n  background: #172c33;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 100;\n  flex: 1;\n  padding: 4px 19px; }\n\n.email-box {\n  position: relative;\n  display: flex;\n  margin-top: 38px; }\n\nbutton {\n  font-size: 18px;\n  color: #050505;\n  background: #b7c4c9;\n  padding: 4px 19px;\n  font-weight: bold;\n  border: none;\n  border-radius: 0 5px 5px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbWFpbC1ib3gvRTpcXFdvcmtcXFNocmlrZSBEaWdpdGFsXFxzaHJpa2UtZGlnaXRhbC1sYW5kaW5nL3NyY1xcYXBwXFxjb21wb25lbnRzXFxlbWFpbC1ib3hcXGVtYWlsLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLGNBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VtYWlsLWJveC9lbWFpbC1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGUxZjI1O1xyXG4gICAgYmFja2dyb3VuZDogIzE3MmMzMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiA0cHggMTlweDtcclxufVxyXG5cclxuLmVtYWlsLWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMzhweDtcclxufVxyXG5cclxuYnV0dG9uIHsgICAgXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjojMDUwNTA1O1xyXG4gICAgYmFja2dyb3VuZDogI2I3YzRjOTtcclxuICAgIHBhZGRpbmc6IDRweCAxOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/email-box/email-box.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/email-box/email-box.component.ts ***!
  \*************************************************************/
/*! exports provided: EmailBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailBoxComponent", function() { return EmailBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailBoxComponent = /** @class */ (function () {
    function EmailBoxComponent() {
    }
    EmailBoxComponent.prototype.ngOnInit = function () {
    };
    EmailBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-box',
            template: __webpack_require__(/*! ./email-box.component.html */ "./src/app/components/email-box/email-box.component.html"),
            styles: [__webpack_require__(/*! ./email-box.component.scss */ "./src/app/components/email-box/email-box.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmailBoxComponent);
    return EmailBoxComponent;
}());



/***/ }),

/***/ "./src/app/components/hero/hero.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/hero/hero.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#hero-container {\r\n    /* background: #2b3b44; */\r\n    background: linear-gradient(to top right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100));\r\n}\r\n.logo {\r\n    border-radius: 50%;\r\n    background: #2b3c43;\r\n    /* triad: #433f2b #432b33 */\r\n    width: 250px;\r\n    height: 250px;\r\n    margin-bottom: -17px;  \r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.particles {\r\n    opacity: 0.1;\r\n    width:100%;\r\n    height:100%;\r\n}\r\nh1 {\r\n    font-size: 3rem;\r\n    font-weight: 900;\r\n    margin-bottom: 12px;\r\n}\r\nh2 {\r\n    font-size: 2rem;\r\n    font-weight: 900;\r\n    font-style: italic;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qiw2RkFBNkY7QUFDakc7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlcm8vaGVyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlcm8tY29udGFpbmVyIHtcclxuICAgIC8qIGJhY2tncm91bmQ6ICMyYjNiNDQ7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCByZ2IoMTUsIDMyLCAzOSksIHJnYigzMiwgNTgsIDY3KSwgcmdiKDQ0LCA4MywgMTAwKSk7XHJcbn1cclxuLmxvZ28ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzJiM2M0MztcclxuICAgIC8qIHRyaWFkOiAjNDMzZjJiICM0MzJiMzMgKi9cclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTdweDsgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLnBhcnRpY2xlcyB7XHJcbiAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn0gXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/hero/hero.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/hero/hero.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"hero-container\">\n  <div class=\"hero-container\">\n    <div class=\"logo m-auto\">\n<svg viewBox=\"280 90 280 200\">\n<style type=\"text/css\">\n\t.st0{fill:#2C3C43;}\n\t.st1{fill:#111A1D;}\n\t.st2{fill:#EFEFEF;}\n\t.st3{fill:#1B2B30;}\n\t.st4{fill:#818282;}\n\t.st5{fill:#C1C0C0;}\n\t.st6{fill:#DEE2E0;}\n\t.st7{fill:#FFFFFF;}\n\t.st8{fill:#848484;}\n\t.st9{fill:#A5A5A5;}\n</style>\n\t\t<g>\n\t\t\t<path class=\"st1\" d=\"M555.3,232.9c0,0,0.7-20-16.7-26.3s-32.6-7.8-32.6-7.8s7.4,12.6,2.2,13.3c-5.2,0.7-29.6-1.1-31.9,5.2\n\t\t\t\tc-2.2,6.3,7.4,15.6,31.9,15.6s38.9-6.7,38.9-6.7S554.6,227.7,555.3,232.9z\"/>\n\t\t\t<path class=\"st2\" d=\"M507.6,232.9c0,0,0.2,6.9,1.5,9.1c0,0-3.9-1.8-5.2-3.4c0,0,0,6.8,2.6,13c0,0-2.9-1.7-7.1-5.9\n\t\t\t\tc0,0-3,11.1,0,17.6c0,0-8.7-10.5-9.9-12.2c0,0-16,9-16.4,30.8c0,0-11.9-2.1-21-2.1c0,0-50.3-7.1-47.7-37.7\n\t\t\t\tc0,0,8.4-10.1,15.9-13.5s23.2-3.1,28.8-2.8c5.6,0.3,26.7,1.5,31.1,0.1C480.1,225.9,487.2,232.7,507.6,232.9z\"/>\n\t\t\t<path class=\"st3\" d=\"M385.8,229.4c0,0-0.8-5.3,2.7-9.1c3.2-3.5,6.7-6.9,10.6-9.7c6.5-4.8,13.7-8.7,20.9-12.4\n\t\t\t\tc6.2-3.2,12.2-6.1,18.8-8.2c6.4-2.1,14.1-0.8,20.6,0.8c4.7,1.1,9.3,2.6,13.9,4c4.2,1.3,8.2,2.7,12,5.2c2.2,1.5,5.3,5.2,8.3,4.5\n\t\t\t\tc2.6-0.6,13.6-3.5,13.6-3.5s2.7,5.3,2.9,7.8c0.2,2.5-0.1,3.5-2.8,3.6c-2.7,0.1-16.5-0.1-21.2,0.9c-4.8,0.9-10.2,1.6-9.9,6.1\n\t\t\t\tc0,0,0,3.6,4,6.7c0,0-4,1-14.4,0.6c-10.4-0.4-19.2-0.8-19.2-0.8s-12.7-0.8-23,1.8c0,0-5.7,1.3-11,6.3c-5.3,5-8.1,8.2-8.1,8.2\n\t\t\t\ts-4.5,5.8-8.6,6.2c-4.1,0.4-7.5-4.2-8.5-8.9S385.8,229.4,385.8,229.4z\"/>\n\t\t\t<path class=\"st4\" d=\"M452,279.7c0,0-25.9,0.3-40.3-7.6c-14.3-8-18.8-17.8-19.5-24.7c0,0,2,1.1,3.6,0.9c1.5-0.3,4.4-1.2,8.6-6.2\n\t\t\t\tc0,0-0.6,7.5,2.2,12.6c2.9,5.1,6.7,10.2,16,15.3c0,0,10.3,5.4,20.4,7.8L452,279.7z\"/>\n\t\t\t<path class=\"st5\" d=\"M513.6,245.2c0,0,0.8,27.2-15.7,52.8c0,0,0.7-12.1-24.8-16.2c0,0-0.7-19.6,16.4-30.8l9.9,12.2\n\t\t\t\tc0,0-2.9-5.1,0-17.6c0,0,4.3,4.4,7.1,5.9c0,0-2.3-5.2-2.6-13c0,0,3.7,2.7,5.2,3.4c0,0-1.5-1.7-1.5-9.1l5.5-0.1\n\t\t\t\tC513,232.8,513.7,242,513.6,245.2z\"/>\n\t\t\t<path class=\"st5\" d=\"M315.1,278.8c-0.1-0.2,3.3-2.4,3.5-2.6c3-2.3,5.8-4.8,8.5-7.4c4.9-4.8,9.4-10.1,12.7-16.2\n\t\t\t\tc7.9-14.6,14.1-30.4,24.5-43.5c8.4-10.6,16.7-21,28.2-28.5c23.5-15.4,58.7-15.2,84.3-5.6c5.9,2.2,17.3,6.9,20.5,12.8\n\t\t\t\tc0,0-19.9-36.9-70.5-45.6c-50.7-8.8-89.1,25-101,45S300.7,233.4,315.1,278.8z\"/>\n\t\t\t<path class=\"st1\" d=\"M479.5,206.7c-3.4-1.8-6.7-3.6-10.1-5.4c-8-4.3-16.9-11.3-26.2-6.3c-9.4,5.1-3.5,19.5,13.2,18.7\n\t\t\t\tC473.3,212.9,479.5,206.7,479.5,206.7z\"/>\n\t\t\t<path class=\"st6\" d=\"M467.8,204.1c0,0-7.5-5.5-11.7-7c-4.1-1.6-9.8-2.8-12.2,1.1s6.9,4.7,10.4,3.5S467.8,204.1,467.8,204.1z\"/>\n\t\t\t<path class=\"st7\" d=\"M513.8,202.8c1.3,0.3,2.6,0.5,3.9,0.8c1.5,0.3,3,0.6,4.5,1c3.8,0.9,7.6,2,11.3,3.3c3.5,1.3,7.1,2.8,10.1,5.2\n\t\t\t\tc1,0.8,2,1.7,2.7,2.8c0,0-21.6-11.2-31.6-7.4c0,0-1.4-5.1-2.1-6C513,202.6,513.4,202.7,513.8,202.8z\"/>\n\t\t</g>\n\t\t<path class=\"st1\" d=\"M555.3,232.9c0,0,0.7-20-16.7-26.3s-32.6-7.8-32.6-7.8s7.4,12.6,2.2,13.3c-5.2,0.7-29.6-1.1-31.9,5.2\n\t\t\tc-2.2,6.3,7.4,15.6,31.9,15.6s38.9-6.7,38.9-6.7S554.6,227.7,555.3,232.9z\"/>\n\t\t<path class=\"st8\" d=\"M507.6,232.9c0,0,0.2,6.9,1.5,9.1c0,0-3.9-1.8-5.2-3.4c0,0,0,6.8,2.6,13c0,0-2.9-1.7-7.1-5.9\n\t\t\tc0,0-3,11.1,0,17.6c0,0-8.7-10.5-9.9-12.2c0,0-16,9-16.4,30.8c0,0-11.9-2.1-21-2.1c0,0-50.3-7.1-47.7-37.7c0,0,8.4-10.1,15.9-13.5\n\t\t\ts23.2-3.1,28.8-2.8c5.6,0.3,26.7,1.5,31.1,0.1C480.1,225.9,487.2,232.7,507.6,232.9z\"/>\n\t\t<path class=\"st3\" d=\"M385.8,229.4c0,0-0.8-5.3,2.7-9.1c3.2-3.5,6.7-6.9,10.6-9.7c6.5-4.8,13.7-8.7,20.9-12.4\n\t\t\tc6.2-3.2,12.2-6.1,18.8-8.2c6.4-2.1,14.1-0.8,20.6,0.8c4.7,1.1,9.3,2.6,13.9,4c4.2,1.3,8.2,2.7,12,5.2c2.2,1.5,5.3,5.2,8.3,4.5\n\t\t\tc2.6-0.6,13.6-3.5,13.6-3.5s2.7,5.3,2.9,7.8c0.2,2.5-0.1,3.5-2.8,3.6c-2.7,0.1-16.5-0.1-21.2,0.9c-4.8,0.9-10.2,1.6-9.9,6.1\n\t\t\tc0,0,0,3.6,4,6.7c0,0-4,1-14.4,0.6c-10.4-0.4-19.2-0.8-19.2-0.8s-12.7-0.8-23,1.8c0,0-5.7,1.3-11,6.3c-5.3,5-8.1,8.2-8.1,8.2\n\t\t\ts-4.5,5.8-8.6,6.2c-4.1,0.4-7.5-4.2-8.5-8.9S385.8,229.4,385.8,229.4z\"/>\n\t\t<path class=\"st9\" d=\"M452,279.7c0,0-25.9,0.3-40.3-7.6c-14.3-8-18.8-17.8-19.5-24.7c0,0,2,1.1,3.6,0.9c1.5-0.3,4.4-1.2,8.6-6.2\n\t\t\tc0,0-0.6,7.5,2.2,12.6c2.9,5.1,6.7,10.2,16,15.3c0,0,10.3,5.4,20.4,7.8L452,279.7z\"/>\n\t\t<path class=\"st5\" d=\"M513.6,245.2c0,0,0.8,27.2-15.7,52.8c0,0,0.7-12.1-24.8-16.2c0,0-0.7-19.6,16.4-30.8l9.9,12.2\n\t\t\tc0,0-2.9-5.1,0-17.6c0,0,4.3,4.4,7.1,5.9c0,0-2.3-5.2-2.6-13c0,0,3.7,2.7,5.2,3.4c0,0-1.5-1.7-1.5-9.1l5.5-0.1\n\t\t\tC513,232.8,513.7,242,513.6,245.2z\"/>\n\t\t<path class=\"st5\" d=\"M315.1,278.8c-0.1-0.2,3.3-2.4,3.5-2.6c3-2.3,5.8-4.8,8.5-7.4c4.9-4.8,9.4-10.1,12.7-16.2\n\t\t\tc7.9-14.6,14.1-30.4,24.5-43.5c8.4-10.6,16.7-21,28.2-28.5c23.5-15.4,58.7-15.2,84.3-5.6c5.9,2.2,17.3,6.9,20.5,12.8\n\t\t\tc0,0-19.9-36.9-70.5-45.6c-50.7-8.8-89.1,25-101,45S300.7,233.4,315.1,278.8z\"/>\n\t\t<path class=\"st1\" d=\"M479.5,206.7c-3.4-1.8-6.7-3.6-10.1-5.4c-8-4.3-16.9-11.3-26.2-6.3c-9.4,5.1-3.5,19.5,13.2,18.7\n\t\t\tC473.3,212.9,479.5,206.7,479.5,206.7z\"/>\n\t\t<path class=\"st6\" d=\"M467.8,204.1c0,0-7.5-5.5-11.7-7c-4.1-1.6-9.8-2.8-12.2,1.1s6.9,4.7,10.4,3.5S467.8,204.1,467.8,204.1z\"/>\n\t\t<path class=\"st7\" d=\"M513.8,202.8c1.3,0.3,2.6,0.5,3.9,0.8c1.5,0.3,3,0.6,4.5,1c3.8,0.9,7.6,2,11.3,3.3c3.5,1.3,7.1,2.8,10.1,5.2\n\t\t\tc1,0.8,2,1.7,2.7,2.8c0,0-21.6-11.2-31.6-7.4c0,0-1.4-5.1-2.1-6C513,202.6,513.4,202.7,513.8,202.8z\"/>\n</svg>      \n    </div>\n    <h1 class=\"text-center\">SHRIKE DIGITAL</h1>\n    <h2 class=\"text-center\">COMING SOON</h2>\n    <app-email-box></app-email-box>\n  </div>\n  <app-particles class=\"particles\"></app-particles>\n</div>"

/***/ }),

/***/ "./src/app/components/hero/hero.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/hero/hero.component.ts ***!
  \***************************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () { };
    HeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero',
            template: __webpack_require__(/*! ./hero.component.html */ "./src/app/components/hero/hero.component.html"),
            styles: [__webpack_require__(/*! ./hero.component.css */ "./src/app/components/hero/hero.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/components/particles/particles.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/particles/particles.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFydGljbGVzL3BhcnRpY2xlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/particles/particles.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/particles/particles.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas id=\"particles\"></canvas>"

/***/ }),

/***/ "./src/app/components/particles/particles.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/particles/particles.component.ts ***!
  \*************************************************************/
/*! exports provided: ParticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticlesComponent", function() { return ParticlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var particlesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! particlesjs */ "./node_modules/particlesjs/dist/particles.min.js");
/* harmony import */ var particlesjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(particlesjs__WEBPACK_IMPORTED_MODULE_2__);



var ParticlesComponent = /** @class */ (function () {
    function ParticlesComponent() {
    }
    ParticlesComponent.prototype.ngOnInit = function () {
        particlesjs__WEBPACK_IMPORTED_MODULE_2__["init"]({
            selector: '#particles',
            maxParticles: 250,
            color: ['#ffffff'],
            minDistance: 120,
            connectParticles: true,
            sizeVariations: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    options: {
                        maxParticles: 200,
                        color: '#48F2E3',
                        connectParticles: false
                    }
                }, {
                    breakpoint: 320,
                    options: {
                        maxParticles: 0 // disables particles.js
                    }
                }
            ]
        });
    };
    ParticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-particles',
            template: __webpack_require__(/*! ./particles.component.html */ "./src/app/components/particles/particles.component.html"),
            styles: [__webpack_require__(/*! ./particles.component.css */ "./src/app/components/particles/particles.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParticlesComponent);
    return ParticlesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Work\Shrike Digital\shrike-digital-landing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map