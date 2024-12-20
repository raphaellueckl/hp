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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/overview/overview.component */ "./src/app/dashboard/overview/overview.component.ts");
/* harmony import */ var _dashboard_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/projects/projects.component */ "./src/app/dashboard/projects/projects.component.ts");
/* harmony import */ var _dashboard_donations_donations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/donations/donations.component */ "./src/app/dashboard/donations/donations.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_github_github_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/github/github.component */ "./src/app/dashboard/github/github.component.ts");
/* harmony import */ var _dashboard_minecraft_minecraft_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/minecraft/minecraft.component */ "./src/app/dashboard/minecraft/minecraft.component.ts");
/* harmony import */ var angular2_markdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-markdown */ "./node_modules/angular2-markdown/index.js");
/* harmony import */ var _dashboard_auth_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/auth/auth.service */ "./src/app/dashboard/auth/auth.service.ts");
/* harmony import */ var _dashboard_auth_logged_in_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/auth/logged-in.guard */ "./src/app/dashboard/auth/logged-in.guard.ts");
/* harmony import */ var _dashboard_auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/auth/login/login.component */ "./src/app/dashboard/auth/login/login.component.ts");
/* harmony import */ var _dashboard_auth_member_member_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/auth/member/member.component */ "./src/app/dashboard/auth/member/member.component.ts");
/* harmony import */ var _dashboard_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/auth/logout/logout.component */ "./src/app/dashboard/auth/logout/logout.component.ts");
/* harmony import */ var _dashboard_music_notes_music_notes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/music-notes/music-notes.component */ "./src/app/dashboard/music-notes/music-notes.component.ts");
/* harmony import */ var _dashboard_music_notes_single_music_note_single_music_note_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/music-notes/single-music-note/single-music-note.component */ "./src/app/dashboard/music-notes/single-music-note/single-music-note.component.ts");
/* harmony import */ var _dashboard_adverts_adverts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/adverts/adverts.component */ "./src/app/dashboard/adverts/adverts.component.ts");
/* harmony import */ var _dashboard_donations_donation_donation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/donations/donation/donation.component */ "./src/app/dashboard/donations/donation/donation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _dashboard_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__["OverviewComponent"],
                _dashboard_donations_donations_component__WEBPACK_IMPORTED_MODULE_9__["DonationsComponent"],
                _dashboard_github_github_component__WEBPACK_IMPORTED_MODULE_12__["GithubComponent"],
                _dashboard_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
                _dashboard_minecraft_minecraft_component__WEBPACK_IMPORTED_MODULE_13__["MinecraftComponent"],
                _dashboard_auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _dashboard_auth_member_member_component__WEBPACK_IMPORTED_MODULE_18__["MemberComponent"],
                _dashboard_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__["LogoutComponent"],
                _dashboard_music_notes_music_notes_component__WEBPACK_IMPORTED_MODULE_20__["MusicNotesComponent"],
                _dashboard_music_notes_single_music_note_single_music_note_component__WEBPACK_IMPORTED_MODULE_21__["SingleMusicNoteComponent"],
                _dashboard_adverts_adverts_component__WEBPACK_IMPORTED_MODULE_22__["AdvertsComponent"],
                _dashboard_donations_donation_donation_component__WEBPACK_IMPORTED_MODULE_23__["DonationComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_11__["DashboardRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                angular2_markdown__WEBPACK_IMPORTED_MODULE_14__["MarkdownModule"].forRoot()
            ],
            providers: [
                _dashboard_auth_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                _dashboard_auth_logged_in_guard__WEBPACK_IMPORTED_MODULE_16__["LoggedInGuard"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/adverts/adverts.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/adverts/adverts.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/adverts/adverts.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/adverts/adverts.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ins class=\"adsbygoogle\"\n     style=\"display:block\"\n     data-ad-client=\"ca-pub-5994211815108738\"\n     data-ad-slot=\"2088618392\"\n     data-ad-format=\"auto\">\n</ins>\n"

/***/ }),

/***/ "./src/app/dashboard/adverts/adverts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/adverts/adverts.component.ts ***!
  \********************************************************/
/*! exports provided: AdvertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertsComponent", function() { return AdvertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvertsComponent = /** @class */ (function () {
    function AdvertsComponent() {
    }
    AdvertsComponent.prototype.ngOnInit = function () {
    };
    AdvertsComponent.prototype.ngAfterViewInit = function () {
        try {
            (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
        }
        catch (e) {
            console.error('Ad error');
        }
    };
    AdvertsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adverts',
            template: __webpack_require__(/*! ./adverts.component.html */ "./src/app/dashboard/adverts/adverts.component.html"),
            styles: [__webpack_require__(/*! ./adverts.component.css */ "./src/app/dashboard/adverts/adverts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvertsComponent);
    return AdvertsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/auth/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/auth/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService, AUTH_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_PROVIDERS", function() { return AUTH_PROVIDERS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (user, password) {
        if (user === 'user' && password === 'password') {
            localStorage.setItem('username', user);
            return true;
        }
        return false;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('username');
    };
    AuthService.prototype.getUser = function () {
        return localStorage.getItem('username');
    };
    AuthService.prototype.isLoggedIn = function () {
        console.log("Is user logged in? ' + " + (this.getUser() !== null));
        return this.getUser() !== null;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());

var AUTH_PROVIDERS = [
    { provide: AuthService, useClass: AuthService }
];


/***/ }),

/***/ "./src/app/dashboard/auth/logged-in.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/auth/logged-in.guard.ts ***!
  \***************************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/dashboard/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(authService) {
        this.authService = authService;
    }
    LoggedInGuard.prototype.canActivate = function (next, state) {
        var isLoggedIn = this.authService.isLoggedIn();
        console.log('canActivate', isLoggedIn);
        return isLoggedIn;
    };
    LoggedInGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoggedInGuard);
    return LoggedInGuard;
}());



/***/ }),

/***/ "./src/app/dashboard/auth/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/auth/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/auth/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/auth/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@flyInOut]>\n  <div class=\"ui piled segment\">\n    <p>Restricted area!</p>\n  </div>\n\n  <div class=\"fourteen wide column middle aligned\">\n    <div *ngIf=\"wrongCredentialsInserted\"\n         class=\"ui error message\">Invalid credentials\n    </div>\n  </div>\n\n  <div class=\"ui raised segment\">\n    <form [formGroup]=\"myForm\"\n          (ngSubmit)=\"onSubmit(myForm.value)\"\n          class=\"ui form\"\n          [class.error]=\"!myForm.valid\">\n\n      <div class=\"field\"\n           [class.error]=\"!username.valid && username.touched\">\n        <label for=\"username\">Username:</label>\n        <input type=\"text\"\n               id=\"username\"\n               placeholder=\"Username\"\n               [formControl]=\"username\">\n        <div *ngIf=\"username.hasError('required') && username.touched\"\n             class=\"ui error message\">\n          Username is required\n        </div>\n      </div>\n\n      <div class=\"field\"\n           [class.error]=\"!password.valid && username.touched\">\n        <label for=\"password\">Password:</label>\n        <input type=\"text\"\n               id=\"password\"\n               placeholder=\"Password\"\n               [formControl]=\"password\">\n        <div *ngIf=\"password.hasError('required') && password.touched\"\n             class=\"ui error message\">Password is required\n        </div>\n      </div>\n\n      <button type=\"submit\"\n              class=\"ui button\">Submit\n      </button>\n\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/auth/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/auth/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _router_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.transition */ "./src/app/dashboard/router.transition.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/dashboard/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, location) {
        this.fb = fb;
        this.authService = authService;
        this.location = location;
        this.USERNAME = 'username';
        this.PASSWORD = 'password';
        this.myForm = fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.username = this.myForm.controls[this.USERNAME];
        this.password = this.myForm.controls[this.PASSWORD];
        this.wrongCredentialsInserted = false;
    }
    LoginComponent.prototype.onSubmit = function (login) {
        console.log("User '" + login.username + "' attempts to login...");
        if (this.authService.login(login.username, login.password)) {
            this.location.back();
        }
        else {
            this.wrongCredentialsInserted = true;
        }
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        return false;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/dashboard/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/dashboard/auth/login/login.component.css")],
            animations: [Object(_router_transition__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/auth/logout/logout.component.css":
/*!************************************************************!*\
  !*** ./src/app/dashboard/auth/logout/logout.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/auth/logout/logout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/auth/logout/logout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/dashboard/auth/logout/logout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/auth/logout/logout.component.ts ***!
  \***********************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/dashboard/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(auth, location) {
        this.auth = auth;
        this.location = location;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.auth.logout();
        this.location.back();
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/dashboard/auth/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/dashboard/auth/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/auth/member/member.component.css":
/*!************************************************************!*\
  !*** ./src/app/dashboard/auth/member/member.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/auth/member/member.component.html":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/auth/member/member.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  member works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/auth/member/member.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/auth/member/member.component.ts ***!
  \***********************************************************/
/*! exports provided: MemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberComponent", function() { return MemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.transition */ "./src/app/dashboard/router.transition.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberComponent = /** @class */ (function () {
    function MemberComponent() {
    }
    MemberComponent.prototype.ngOnInit = function () {
    };
    MemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member',
            template: __webpack_require__(/*! ./member.component.html */ "./src/app/dashboard/auth/member/member.component.html"),
            styles: [__webpack_require__(/*! ./member.component.css */ "./src/app/dashboard/auth/member/member.component.css")],
            animations: [Object(_router_transition__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overview/overview.component */ "./src/app/dashboard/overview/overview.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/dashboard/projects/projects.component.ts");
/* harmony import */ var _donations_donations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donations/donations.component */ "./src/app/dashboard/donations/donations.component.ts");
/* harmony import */ var _github_github_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./github/github.component */ "./src/app/dashboard/github/github.component.ts");
/* harmony import */ var _minecraft_minecraft_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./minecraft/minecraft.component */ "./src/app/dashboard/minecraft/minecraft.component.ts");
/* harmony import */ var _auth_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/logged-in.guard */ "./src/app/dashboard/auth/logged-in.guard.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/dashboard/auth/login/login.component.ts");
/* harmony import */ var _auth_member_member_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/member/member.component */ "./src/app/dashboard/auth/member/member.component.ts");
/* harmony import */ var _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/logout/logout.component */ "./src/app/dashboard/auth/logout/logout.component.ts");
/* harmony import */ var _music_notes_music_notes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./music-notes/music-notes.component */ "./src/app/dashboard/music-notes/music-notes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/overview', pathMatch: 'full' },
    { path: 'overview', component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_2__["OverviewComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"] },
    { path: 'github', component: _github_github_component__WEBPACK_IMPORTED_MODULE_5__["GithubComponent"] },
    { path: 'donations', component: _donations_donations_component__WEBPACK_IMPORTED_MODULE_4__["DonationsComponent"] },
    { path: 'minecraft', component: _minecraft_minecraft_component__WEBPACK_IMPORTED_MODULE_6__["MinecraftComponent"] },
    { path: 'music-notes', component: _music_notes_music_notes_component__WEBPACK_IMPORTED_MODULE_11__["MusicNotesComponent"] },
    { path: 'member', component: _auth_member_member_component__WEBPACK_IMPORTED_MODULE_9__["MemberComponent"], canActivate: [_auth_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__["LoggedInGuard"]] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'logout', component: _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"] }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%;\n  margin: 0;\n}\n\n.main,\n.footer {\n  /*color: white;*/\n  padding: 1em;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  min-height: 98vh;\n}\n\n.main {\n  flex: 1;\n}\n\n.footer {\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\n\n  <br>\n\n  <div class=\"container\">\n    <div class=\"main\">\n\n      <div class=\"ui stackable secondary menu\">\n        <div class=\"header item\" routerLink=\"\">\n          <img src=\"favicon.png\" alt=\"\">\n          &nbsp;&nbsp;codepleb\n        </div>\n\n        <a [@flyInOut] class=\"item\" routerLink=\"/overview\" routerLinkActive=\"active\">Overview</a>\n        <a [@flyInOut] class=\"item\" routerLink=\"/projects\" routerLinkActive=\"active\">Projects</a>\n        <a [@flyInOut] class=\"item\" routerLink=\"/github\" routerLinkActive=\"active\">GitHub</a>\n        <a [@flyInOut] class=\"item\" routerLink=\"/minecraft\" routerLinkActive=\"active\">Minecraft</a>\n        <a [@flyInOut] class=\"item\" routerLink=\"/music-notes\" routerLinkActive=\"active\">Music Notes</a>\n        <a [@flyInOut] class=\"item\" routerLink=\"/donations\" routerLinkActive=\"active\">Donations</a>\n        <a [@flyInOut] class=\"item\" routerLink=\"/member\" *ngIf=\"isLoggedIn()\" routerLinkActive=\"active\">Member Area</a>\n        <a [@flyInOut] class=\"item\" routerLink=\"/login\" *ngIf=\"!isLoggedIn()\" routerLinkActive=\"active\">Login</a>\n        <a [@flyInOut] class=\"item\" routerLink=\"/logout\" *ngIf=\"isLoggedIn()\" routerLinkActive=\"active\">Logout</a>\n      </div>\n\n      <div class=\"ui divider\"></div>\n      <br>\n\n      <router-outlet></router-outlet>\n    </div>\n\n    <div class=\"footer\">\n      <div class=\"ui divider\"></div>\n\n      <div class=\"ui center aligned grid\">\n        <div class=\"sixteen wide column\">\n          © Made by codepleb | Mail: codepleb4@gmail.com | Telegram: @codepleb\n        </div>\n        <div class=\"sixteen wide column\">\n          <app-adverts></app-adverts>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.transition */ "./src/app/dashboard/router.transition.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/dashboard/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth) {
        this.auth = auth;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.isLoggedIn = function () {
        return this.auth.isLoggedIn();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")],
            animations: [Object(_router_transition__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/donations/donation/donation-item.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/donations/donation/donation-item.ts ***!
  \***************************************************************/
/*! exports provided: DonationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationItem", function() { return DonationItem; });
var DonationItem = /** @class */ (function () {
    function DonationItem(logoPath, qrCodeSrc, title, walletAddress) {
        this.logoPath = logoPath;
        this.qrCodeSrc = qrCodeSrc;
        this.title = title;
        this.walletAddress = walletAddress;
    }
    return DonationItem;
}());



/***/ }),

/***/ "./src/app/dashboard/donations/donation/donation.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/donations/donation/donation.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/donations/donation/donation.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/donations/donation/donation.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui header\">\n  <img class=\"ui image\" src=\"{{donationInfo.logoPath}}\">\n  <div class=\"content\">\n    <h2>\n      {{donationInfo.title}}\n    </h2>\n  </div>\n</div>\n\n<div class=\"ui center aligned basic segment\" *ngIf=\"donationInfo.walletAddress\">\n  <strong class=\"ui header\">\n    Address:\n  </strong>\n  <p>{{donationInfo.walletAddress}}</p>\n</div>\n\n<div class=\"ui center aligned basic segment\">\n  <img src=\"{{donationInfo.qrCodeSrc}}\" width=\"30%\">\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/donations/donation/donation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/donations/donation/donation.component.ts ***!
  \********************************************************************/
/*! exports provided: DonationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationComponent", function() { return DonationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _donation_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donation-item */ "./src/app/dashboard/donations/donation/donation-item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DonationComponent = /** @class */ (function () {
    function DonationComponent() {
    }
    DonationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _donation_item__WEBPACK_IMPORTED_MODULE_1__["DonationItem"])
    ], DonationComponent.prototype, "donationInfo", void 0);
    DonationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donation-entry',
            template: __webpack_require__(/*! ./donation.component.html */ "./src/app/dashboard/donations/donation/donation.component.html"),
            styles: [__webpack_require__(/*! ./donation.component.css */ "./src/app/dashboard/donations/donation/donation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DonationComponent);
    return DonationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/donations/donations.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/donations/donations.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/donations/donations.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/donations/donations.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@flyInOut]>\n\n  <div class=\"ui piled segment\">\n    <p>If you're here for a donation, feel free to choose from one of the below options. :)</p>\n  </div>\n\n  <div class=\"ui header\">\n    <img class=\"ui image\" src=\"assets/images/donations/paypal_logo.png\">\n    <div class=\"content\">\n      <h2>\n        PayPal\n      </h2>\n    </div>\n  </div>\n  <div class=\"ui center aligned basic segment\">\n    <a href=\"https://www.paypal.me/codepleb\" target=\"_blank\">\n      <img src=\"assets/images/donations/paypal_wallet.png\" alt=\"PayPal donate link: https://www.paypal.me/codepleb\">\n    </a>\n  </div>\n\n\n  <div *ngFor=\"let entry of donationSources\">\n    <div class=\"ui divider\"></div>\n    <app-donation-entry [donationInfo]=\"entry\"></app-donation-entry>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/donations/donations.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/donations/donations.component.ts ***!
  \************************************************************/
/*! exports provided: DonationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsComponent", function() { return DonationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.transition */ "./src/app/dashboard/router.transition.ts");
/* harmony import */ var _donation_donation_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donation/donation-item */ "./src/app/dashboard/donations/donation/donation-item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DonationsComponent = /** @class */ (function () {
    function DonationsComponent() {
        this.donationSources = [
            new _donation_donation_item__WEBPACK_IMPORTED_MODULE_2__["DonationItem"]('assets/images/donations/nem_logo.svg', 'assets/images/donations/nem_wallet.svg', 'NEM Wallet', 'NBBE5D-HXFSES-U3IQ4L-TJQ6I7-WP4E22-HBVRE6-ZXFV'),
            new _donation_donation_item__WEBPACK_IMPORTED_MODULE_2__["DonationItem"]('assets/images/donations/iota_logo.svg', 'assets/images/donations/iota_wallet.svg', 'IOTA Wallet', 'FPYGNMBXDZNFKUUM9CQNRKBYGAFRIAWCTZDZ9ZOQQPHHECMSPQWCKMDLITRTPHZOOEZPEN9SGKUDAJOSXKDAPGOAJX'),
            new _donation_donation_item__WEBPACK_IMPORTED_MODULE_2__["DonationItem"]('assets/images/donations/btc_logo.svg', 'assets/images/donations/btc_wallet.svg', 'Bitcoin Wallet', '32o6kbgZqJ9nhT2aRsfEGcMtpThJ2za89T'),
            new _donation_donation_item__WEBPACK_IMPORTED_MODULE_2__["DonationItem"]('assets/images/donations/ltc_logo.svg', 'assets/images/donations/ltc_wallet.svg', 'Litecoin Wallet', 'LgfSNjqVpXFj9xN8ZWPR9qTZQJpcRRNXRZ')
        ];
    }
    DonationsComponent.prototype.ngOnInit = function () {
    };
    DonationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donations',
            template: __webpack_require__(/*! ./donations.component.html */ "./src/app/dashboard/donations/donations.component.html"),
            styles: [__webpack_require__(/*! ./donations.component.css */ "./src/app/dashboard/donations/donations.component.css")],
            animations: [Object(_router_transition__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], DonationsComponent);
    return DonationsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/github/github.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/github/github.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/github/github.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/github/github.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@flyInOut]>\n\n  <div class=\"ui piled segment\">\n    <p>\n      A list of my projects, hosted on github.\n    </p>\n  </div>\n\n  <div class=\"ui stackable grid\">\n    <div class=\"five wide column\">\n      <div class=\"ui vertical fluid tabular menu\">\n        <a class=\"item\" *ngFor=\"let git of gitProjects\" (click)=\"onSelectEntry(git)\"\n           [class.active]=\"git === selectedGitEntry\">\n          {{git.name}}\n        </a>\n      </div>\n    </div>\n    <div class=\"eleven wide stretched column\">\n      <div class=\"ui segment\">\n        <markdown [data]=\"content\"></markdown>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/github/github.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/github/github.component.ts ***!
  \******************************************************/
/*! exports provided: GithubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubComponent", function() { return GithubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.transition */ "./src/app/dashboard/router.transition.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/themes/prism.css */ "./node_modules/prismjs/themes/prism.css");
/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GithubComponent = /** @class */ (function () {
    function GithubComponent(http) {
        this.http = http;
        this.gitUser = 'codepleb';
        this.content = '';
    }
    GithubComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://api.github.com/users/codepleb/repos').subscribe(function (res) {
            _this.gitProjects = res.json();
            _this.selectedGitEntry = _this.gitProjects[0];
            _this.onSelectEntry(_this.selectedGitEntry);
        });
    };
    GithubComponent.prototype.onSelectEntry = function (newSelect) {
        var _this = this;
        this.selectedGitEntry = newSelect;
        this.http.get('https://api.github.com/repos/' + this.gitUser + '/' + newSelect.name + '/readme').subscribe(function (result) { return _this.content = atob(result.json().content); }, function (error) { return _this.content = '##### No readme.md found for this project...'; });
    };
    GithubComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-github',
            template: __webpack_require__(/*! ./github.component.html */ "./src/app/dashboard/github/github.component.html"),
            styles: [__webpack_require__(/*! ./github.component.css */ "./src/app/dashboard/github/github.component.css")],
            animations: [Object(_router_transition__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], GithubComponent);
    return GithubComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/minecraft/minecraft.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/minecraft/minecraft.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/minecraft/minecraft.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/minecraft/minecraft.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@flyInOut]>\n\n  <div class=\"ui piled segment\">\n    <p>We run a minecraft server at: <strong>codepleb.net</strong></p>\n    <p>If you want to join, you need to request access by providing your username.</p>\n    <p>Write me on telegram: <strong>@codepleb</strong></p>\n  </div>\n\n  <!--<div class=\"ui center aligned basic segment\">-->\n    <!--<object data=\"assets/mc_maps/overworld/index.html\" width=\"80%\" height=\"800\" type=\"text/html\">-->\n      <!--\"The End\" should appear here...-->\n    <!--</object>-->\n  <!--</div>-->\n\n  <!--<div class=\"ui divider\"></div>-->\n\n  <!--<div class=\"ui center aligned basic segment\">-->\n    <!--<object data=\"assets/mc_maps/end/index.html\" width=\"80%\" height=\"800\" type=\"text/html\">-->\n      <!--\"Overworld\" should appear here...-->\n    <!--</object>-->\n  <!--</div>-->\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/minecraft/minecraft.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/minecraft/minecraft.component.ts ***!
  \************************************************************/
/*! exports provided: MinecraftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinecraftComponent", function() { return MinecraftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.transition */ "./src/app/dashboard/router.transition.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MinecraftComponent = /** @class */ (function () {
    function MinecraftComponent() {
    }
    MinecraftComponent.prototype.ngOnInit = function () {
    };
    MinecraftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-minecraft',
            template: __webpack_require__(/*! ./minecraft.component.html */ "./src/app/dashboard/minecraft/minecraft.component.html"),
            styles: [__webpack_require__(/*! ./minecraft.component.css */ "./src/app/dashboard/minecraft/minecraft.component.css")],
            animations: [Object(_router_transition__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], MinecraftComponent);
    return MinecraftComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/music-notes/music-notes.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/music-notes/music-notes.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#slidecontainer {\n  width: 100%;\n  padding-bottom: 10px;\n}\n\n.slider {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 15px;\n  border-radius: 5px;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  transition: opacity .2s;\n}\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #21BA45;\n  cursor: pointer;\n}\n\n.slider::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #21BA45;\n  cursor: pointer;\n}\n\n.slider:hover {\n  opacity: 1;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/music-notes/music-notes.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/music-notes/music-notes.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@flyInOut]>\n\n  <div class=\"ui piled segment\">\n    <p>I made this app to learn scales. Feel free to use it too.</p>\n  </div>\n\n  <div class=\"ui center aligned stackable grid\">\n\n    <div class=\"six wide column\">\n      <div class=\"ui centered cards\">\n        <div class=\"card\">\n          <div class=\"content\">\n            <div class=\"header\">\n              Control Board\n            </div>\n\n            <div class=\"ui divider\"></div>\n\n            <div class=\"ui items\">\n              <div class=\"item\">\n                <div class=\"ui toggle checkbox\">\n                  <input name=\"public\" type=\"checkbox\" [(ngModel)]=\"sharpsActivated\" (click)=\"toggleSharps()\">\n                  <label>Sharps</label>\n                </div>\n              </div>\n              <div class=\"item\">\n                <div class=\"ui toggle checkbox\">\n                  <input name=\"public\" type=\"checkbox\" [(ngModel)]=\"lettersActivated\" (click)=\"toggleLetters()\">\n                  <label>Show letters</label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"ui divider\"></div>\n\n            <div id=\"slidecontainer\">\n              <input type=\"range\" min=\"{{minInterval}}\" max=\"{{maxInterval}}\" step=\"100\" [(ngModel)]=\"interval\"\n                     (change)=\"onStart()\" class=\"slider\">\n            </div>\n\n            <div class=\"ui label\">\n              Interval: {{interval / 1000}} seconds\n            </div>\n          </div>\n          <div class=\"extra content\">\n            <div class=\"ui two buttons\">\n              <button class=\"ui green button\" (click)=\"onStart()\">\n                Start\n              </button>\n              <button class=\"ui orange button\" (click)=\"onStop()\">\n                Stop\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ten wide column\" *ngIf=\"currentNote\">\n      <app-single-music-note [currentNote]=\"currentNote\" [showLetters]=\"lettersActivated\"></app-single-music-note>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/music-notes/music-notes.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/music-notes/music-notes.component.ts ***!
  \****************************************************************/
/*! exports provided: MusicNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicNotesComponent", function() { return MusicNotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.transition */ "./src/app/dashboard/router.transition.ts");
/* harmony import */ var _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-music-note/note */ "./src/app/dashboard/music-notes/single-music-note/note.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MusicNotesComponent = /** @class */ (function () {
    function MusicNotesComponent() {
        this.notes = [
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('A#', 'assets/images/music-notes/a0.png', 'sharp'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('A', 'assets/images/music-notes/a.png'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('A#', 'assets/images/music-notes/a_0.png', 'sharp'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('A', 'assets/images/music-notes/a_.png'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('B', 'assets/images/music-notes/b.png'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('B', 'assets/images/music-notes/b_.png'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('C#', 'assets/images/music-notes/c0.png', 'sharp'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('C', 'assets/images/music-notes/c.png'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('C#', 'assets/images/music-notes/c_0.png', 'sharp'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('C', 'assets/images/music-notes/c_.png'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('D#', 'assets/images/music-notes/d0.png', 'sharp'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('D', 'assets/images/music-notes/d.png'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('D#', 'assets/images/music-notes/d_0.png', 'sharp'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('D', 'assets/images/music-notes/d_.png'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('E', 'assets/images/music-notes/e.png'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('E', 'assets/images/music-notes/e_.png'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('F#', 'assets/images/music-notes/f0.png', 'sharp'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('F', 'assets/images/music-notes/f.png'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('F', 'assets/images/music-notes/f_.png'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('G#', 'assets/images/music-notes/g0.png', 'sharp'),
            new _single_music_note_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('G', 'assets/images/music-notes/g.png')
        ];
        this.map = new Map();
        this.sharpsActivated = true;
        this.lettersActivated = true;
        this.interval = 3000;
        this.minInterval = 0;
        this.maxInterval = 5000;
    }
    MusicNotesComponent.prototype.ngOnInit = function () {
    };
    MusicNotesComponent.prototype.onStart = function () {
        var _this = this;
        clearInterval(this.spitRandomChars);
        this.currentNote = this.randomNote();
        var previousNote = this.currentNote;
        this.spitRandomChars = setInterval(function () {
            _this.currentNote = _this.randomNote();
            while (_this.currentNote === previousNote || !_this.sharpsActivated && _this.currentNote.category === 'sharp') {
                _this.currentNote = _this.randomNote();
            }
        }, this.interval);
    };
    MusicNotesComponent.prototype.onStop = function () {
        clearInterval(this.spitRandomChars);
        this.currentNote = undefined;
    };
    MusicNotesComponent.prototype.toggleSharps = function () {
        this.sharpsActivated = !this.sharpsActivated;
    };
    MusicNotesComponent.prototype.toggleLetters = function () {
        this.lettersActivated = !this.lettersActivated;
    };
    MusicNotesComponent.prototype.randomNote = function () {
        return this.notes[Math.floor(Math.random() * this.notes.length)];
    };
    MusicNotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-music-notes',
            template: __webpack_require__(/*! ./music-notes.component.html */ "./src/app/dashboard/music-notes/music-notes.component.html"),
            styles: [__webpack_require__(/*! ./music-notes.component.css */ "./src/app/dashboard/music-notes/music-notes.component.css")],
            animations: [Object(_router_transition__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], MusicNotesComponent);
    return MusicNotesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/music-notes/single-music-note/note.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/music-notes/single-music-note/note.ts ***!
  \*****************************************************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
var Note = /** @class */ (function () {
    function Note(letter, imagePath, category) {
        if (category === void 0) { category = 'standard'; }
        this.letter = letter;
        this.imagePath = imagePath;
        this.category = category;
    }
    return Note;
}());



/***/ }),

/***/ "./src/app/dashboard/music-notes/single-music-note/single-music-note.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/music-notes/single-music-note/single-music-note.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/music-notes/single-music-note/single-music-note.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/music-notes/single-music-note/single-music-note.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui two column centered grid\">\n  <img src=\"{{currentNote?.imagePath}}\">\n</div>\n<div class=\"ui two column centered grid\" *ngIf=\"showLetters\">\n  <h1 class=\"ui header\">\n    {{currentNote?.letter}}\n  </h1>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/music-notes/single-music-note/single-music-note.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/music-notes/single-music-note/single-music-note.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SingleMusicNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleMusicNoteComponent", function() { return SingleMusicNoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note */ "./src/app/dashboard/music-notes/single-music-note/note.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleMusicNoteComponent = /** @class */ (function () {
    function SingleMusicNoteComponent() {
    }
    SingleMusicNoteComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _note__WEBPACK_IMPORTED_MODULE_1__["Note"])
    ], SingleMusicNoteComponent.prototype, "currentNote", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SingleMusicNoteComponent.prototype, "showLetters", void 0);
    SingleMusicNoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-music-note',
            template: __webpack_require__(/*! ./single-music-note.component.html */ "./src/app/dashboard/music-notes/single-music-note/single-music-note.component.html"),
            styles: [__webpack_require__(/*! ./single-music-note.component.css */ "./src/app/dashboard/music-notes/single-music-note/single-music-note.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleMusicNoteComponent);
    return SingleMusicNoteComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/overview/overview.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/overview/overview.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gradient {\n  border-radius: 999em;\n  width: 100%;\n  height: auto;\n  padding: 15px;\n  line-height: 0;\n}\n\nimg {\n  border-radius: 999em;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  background: linear-gradient(to right, #0084e9 0%, #fff 50%, #0084e9 100%); /* W3C */\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#b3dced', endColorstr='#bce0ee', GradientType=1); /* IE6-9 */\n}\n"

/***/ }),

/***/ "./src/app/dashboard/overview/overview.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/overview/overview.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@flyInOut]>\n\n  <img class=\"ui centered medium image gradient\" src=\"assets/images/overview/codepleb.png\">\n\n  <div class=\"ui large centered header\">Hi! :)</div>\n\n  <div class=\"ui centered grid\">\n    <div class=\"ten wide column\">\n      <p>I'm a software engineer working for a swiss IT consultant company.</p>\n      <p>I like to code, relax, walk, run, lift and spend time with my wife and friends.</p>\n\n      <p>I did several coding projects already. I link to here from a lot of places and I'm aware, that this is a real\n        mess here. My own personal playground.</p>\n      <p>My interest in the coding world basically relies on things users can interact with, on the back- and also\n        frontend side.\n        I love to see the reactions and the feedback. If you have some, I'm always open to any kind of it.</p>\n      <p>Coming from the countryside, most of my friends aren't related to IT, so I'm always open to get to know new\n        people.</p>\n      <p>Feel free to connect if you like. :)</p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/overview/overview.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/overview/overview.component.ts ***!
  \**********************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.transition */ "./src/app/dashboard/router.transition.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverviewComponent = /** @class */ (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    OverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/dashboard/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.css */ "./src/app/dashboard/overview/overview.component.css")],
            animations: [Object(_router_transition__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/projects/projects.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/projects/projects.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/projects/projects.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/projects/projects.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@flyInOut]>\n\n  <div class=\"ui piled segment\">\n    <p>Here is a list of some older projects that aren't on github.</p>\n  </div>\n\n  <div class=\"ui large celled animated list\">\n\n    <div class=\"item\">\n      <a href=\"https://sourceforge.net/projects/duplexmerger/\">\n        <div class=\"content\">\n          <div class=\"header\">Nubage - DuplexMerger</div>\n          Merge your Scans :)\n        </div>\n      </a>\n    </div>\n\n    <div class=\"item\">\n      <a href=\"https://sourceforge.net/projects/nubageexpensescalculator/\">\n        <div class=\"content\">\n          <div class=\"header\">Nubage - Expenses Calculator</div>\n          Calculate your life :)\n        </div>\n      </a>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/projects/projects.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/projects/projects.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.transition */ "./src/app/dashboard/router.transition.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/dashboard/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/dashboard/projects/projects.component.css")],
            animations: [Object(_router_transition__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/router.transition.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/router.transition.ts ***!
  \************************************************/
/*! exports provided: routerTransition, flyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return flyInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return flyInOut();
}
function flyInOut() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)', opacity: 1 })),
        // state('out', style({transform: 'translateX(100)'})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200)
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)', opacity: 1 }))
        ])
    ]);
}


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! /Users/taalura5/workspace/test/hp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map