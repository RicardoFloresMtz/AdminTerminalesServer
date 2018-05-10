webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<div class=\"modal fade\" id=\"modal_please_wait\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" data-backdrop=\"static\" loading-indicator>\n    <div class=\"modal-dialog sumando-loading-modal-dialog\" style=\"height:  1920px;\">\n        <div class=\"modal-content center_Modal\" style=\"height: 100%;\">\n            <img src=\"assets/img/loader-banorte.gif\" style=\"margin-top: 240px;\" width=\"100%\" id=\"imgGif\" />\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pages_module__ = __webpack_require__("./src/app/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_app_service__ = __webpack_require__("./src/app/session-app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_login_component__ = __webpack_require__("./src/app/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_header_header_component__ = __webpack_require__("./src/app/login/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../../node_modules/cordova-plugin-mfp/typings/worklight.d.ts" />









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_header_header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__app_routes__["a" /* APP_ROUTES */],
                __WEBPACK_IMPORTED_MODULE_3__pages_pages_module__["a" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__session_app_service__["a" /* SessionAppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NavigateRoutingModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_login_component__ = __webpack_require__("./src/app/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");


var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_login_component__["a" /* LoginComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_0__login_login_login_component__["a" /* LoginComponent */] }
];
var NavigateRoutingModule = /** @class */ (function () {
    function NavigateRoutingModule() {
    }
    return NavigateRoutingModule;
}());

var APP_ROUTES = __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true });


/***/ }),

/***/ "./src/app/databd-operaciones.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataBD_Operaciones; });
// tslint:disable-next-line:class-name
var DataBD_Operaciones = /** @class */ (function () {
    function DataBD_Operaciones() {
    }
    DataBD_Operaciones.prototype.DataBD_Operaciones = function () { };
    DataBD_Operaciones.prototype.getAcceso = function (type, usr, key) {
        var formParameters = {
            type: type,
            usr: usr,
            key: key
        };
        var resourceRequest = new WLResourceRequest('adapters/AdapterBanorteAdminTerminales/resource/getAcceso', WLResourceRequest.POST);
        resourceRequest.setTimeout(30000);
        resourceRequest
            .sendFormParameters(formParameters);
        return resourceRequest.sendFormParameters(formParameters);
    };
    DataBD_Operaciones.prototype.getRegistros = function () {
        var formParameters = {};
        var resourceRequest = new WLResourceRequest('adapters/AdapterBanorteAdminTerminales/resource/getRegistros', WLResourceRequest.POST);
        resourceRequest.setTimeout(30000);
        resourceRequest
            .sendFormParameters(formParameters);
        return resourceRequest.sendFormParameters(formParameters);
    };
    DataBD_Operaciones.prototype.setUpdateCrStatus = function (terminal_id, sucursal_id, activo) {
        var formParameters = {
            terminal_id: terminal_id,
            sucursal_id: sucursal_id,
            activo: activo
        };
        var resourceRequest = new WLResourceRequest('adapters/AdapterBanorteAdminTerminales/resource/setUpdateCrStatus', WLResourceRequest.POST);
        resourceRequest.setTimeout(30000);
        resourceRequest
            .sendFormParameters(formParameters);
        return resourceRequest.sendFormParameters(formParameters);
    };
    DataBD_Operaciones.prototype.insertaUserPassLegacy = function (usrLegacy, passLegacy, idTerminal) {
        var formParameters = {
            usrLegacy: usrLegacy,
            passLegacy: passLegacy,
            idTerminal: idTerminal
        };
        var resourceRequest = new WLResourceRequest('adapters/AdapterBanorteAdminTerminales/resource/insertaUserPassLegacy', WLResourceRequest.POST);
        resourceRequest.setTimeout(30000);
        resourceRequest.sendFormParameters(formParameters);
        return resourceRequest.sendFormParameters(formParameters);
    };
    DataBD_Operaciones.prototype.insertaUserPassLegacyMasiva = function (idTerminal, registros) {
        var formParameters = {
            idTerminal: idTerminal,
            registros: registros
        };
        var resourceRequest = new WLResourceRequest('adapters/AdapterBanorteAdminTerminales/resource/insertaUserPassLegacyDataMasiva', WLResourceRequest.POST);
        resourceRequest.setTimeout(30000);
        resourceRequest
            .sendFormParameters(formParameters);
        return resourceRequest.sendFormParameters(formParameters);
    };
    return DataBD_Operaciones;
}());



/***/ }),

/***/ "./src/app/login/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <nav class=\"nav-img-banorte navbar navbar-expand-lg \">\n        <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n            <ul class=\"navbar-nav mr-auto\">\n\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n            \n            </ul>\n        </div>\n        </nav>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/login/header/header.component.html"),
            styles: [__webpack_require__("./src/app/login/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\" novalidate>\n  <fieldset class=\"fielsetLogin container\" style=\"padding-left: 12% !important;padding-right: 12% !important\">\n    <div style=\"background-color: white\">\n          <div class=\"row letranegrita padding-InFieldset\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" style=\"padding-top: 5%\">\n                <h3 class=\"text-center  color-letra\">Modulo de Administaci&oacute;n de Terminales (PC AIO)</h3>\n            </div>\n          </div>\n          <div class=\"row  letranegrita padding-InFieldset\" align=\"right\">\n              <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\" >\n                  <label>Perfil</label>\n              </div>\n              <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\" align=\"left\">\n                  <select class=\"form-control selectModificado\"   #rPerfil (change)=\"setValuePerfil();\">\n                    <option value=\"0\"  disabled selected>Seleccione un perfil...</option>\n                    <option value=\"1\"  >Seguridad</option>\n                    <option value=\"2\"  >Ejecutivo de Cuenta</option>\n                  </select>\n                </div>\n          </div>\n          <div class=\"row  letranegrita padding-InFieldset\" align=\"right\">\n              <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n                <label>Usuario</label>\n              </div>\n              <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\" align=\"left\">\n                  <input type=\"text\" class=\"form-control\" #rNombreUsuario formControlName=\"fcNombreUsuario\">\n                  <div *ngIf=\"myForm.get('fcNombreUsuario').errors && myForm.get('fcNombreUsuario').dirty\" >\n                        <p *ngIf=\"myForm.get('fcNombreUsuario').hasError('required')\" class=\"alert alert-danger\">Dato obligatorio, favor de capturar.</p>\n                  </div>\n                </div>\n          </div>\n          <div class=\"row  letranegrita padding-InFieldset\" align=\"right\">\n              <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n                <label>Password</label>\n              </div>\n              <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\" align=\"left\">\n                  <input type=\"password\" class=\"form-control\" #rPass formControlName=\"fcPass\">\n                  <div *ngIf=\"myForm.get('fcPass').errors && myForm.get('fcPass').dirty\" >\n                        <p *ngIf=\"myForm.get('fcPass').hasError('required')\" class=\"alert alert-danger\">Dato obligatorio, favor de capturar.</p>\n                  </div>\n                </div>\n          </div>\n          <div class=\"row  letranegrita \" >\n              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                  <hr>\n              </div>\n          </div>\n          <div class=\"row padding-InFieldset\" >\n              <div class=\"col-xs-4 col-sm-4 col-md-7 col-lg-7\"></div>\n              <div class=\"col-xs-3 col-sm-3 col-md-2 col-lg-2\" align=\"right\">\n                 \n              </div>\n              <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\" align=\"center\">\n                  <button type=\"button\" class=\"btn btn-danger \" [disabled]=\"((Perfil === '0') || (myForm.invalid))\"  (click)=\"LogIn(rNombreUsuario.value,rPass.value )\">\n                        LOG IN\n                  </button>\n              </div>\n           </div>\n        </div>\n    </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__session_app_service__ = __webpack_require__("./src/app/session-app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__databd_operaciones__ = __webpack_require__("./src/app/databd-operaciones.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, fb, router) {
        this.service = service;
        this.fb = fb;
        this.router = router;
        this.Perfil = '0';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            fcNombreUsuario: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            fcPass: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]]
        });
    };
    LoginComponent.prototype.setValuePerfil = function () {
        var this_aux = this;
        this_aux.Perfil = this_aux.rPerfil.nativeElement.value;
        console.log(this_aux.rPerfil.nativeElement.value);
    };
    LoginComponent.prototype.LogIn = function (usr, key) {
        $('#modal_please_wait').modal('show');
        var this_aux = this;
        var operaciones = new __WEBPACK_IMPORTED_MODULE_4__databd_operaciones__["a" /* DataBD_Operaciones */]();
        operaciones.getAcceso(this_aux.Perfil, usr, key).then(function (resp) {
            console.log(resp);
            var resp_json = resp.responseJSON;
            if (resp_json.Acceso === true) {
                sessionStorage.setItem('sesion', 'activa');
                if (this_aux.Perfil === '1') {
                    this_aux.router.navigate(['/usr_seguridad']);
                }
                else if (this_aux.Perfil === '2') {
                    this_aux.router.navigate(['/usr_ejecutivo']);
                }
            }
            else {
                setTimeout(function () {
                    $('#modal_please_wait').modal('hide');
                    $('#errorModal').modal('show');
                    document.getElementById('mnsError').innerHTML = 'Los datos proporcionados son incorrectos, favor de verificar.';
                }, 500);
            }
        }, function (error) {
            setTimeout(function () {
                $('#modal_please_wait').modal('hide');
                $('#errorModal').modal('show');
                if (error.errorCode === 'API_INVOCATION_FAILURE') {
                    document.getElementById('mnsError').innerHTML = 'Tu sesión ha expirado';
                }
                else {
                    document.getElementById('mnsError').innerHTML = 'El servicio no esta disponible, favor de intentar mas tarde';
                }
            }, 500);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])('rPerfil', { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], LoginComponent.prototype, "rPerfil", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__session_app_service__["a" /* SessionAppService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/navbar-usr-info/navbar-usr-info.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/navbar-usr-info/navbar-usr-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row page-titles breadcroms-color\" style=\" height: 50px;\">\n  <div class=\" col-xs-6 col-sm-6 col-md-6 align-self-center\">\n        <h5 class=\"breadcrombs-text\">\n            <i> MÓDULO DE ADMINISTRACIÓN DE TERMINALES (PC AIO)</i>\n        </h5>\n\n  </div>  \n  <div class=\"col-xs-4 col-sm-4 col-md-4 align-self-center\">\n        <h3 class=\"breadcrombs-text\">\n            <i class=\"fa fa-user breadcroms-icon\"></i>\n        </h3>\n\n    </div>\n    <div class=\"col-xs-2 col-sm-2 col-md-2 align-self-center\">\n        <h3 class=\"breadcrombs-out\" >\n            <i class=\"fa fa-sign-out\"(click)=\"cerrarSesion()\"> Salir</i> \n        </h3>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/navbar-usr-info/navbar-usr-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarUsrInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarUsrInfoComponent = /** @class */ (function () {
    function NavbarUsrInfoComponent(router) {
        this.router = router;
    }
    NavbarUsrInfoComponent.prototype.ngOnInit = function () {
    };
    NavbarUsrInfoComponent.prototype.cerrarSesion = function () {
        sessionStorage.removeItem('sesion');
        this.router.navigate(['/login']);
    };
    NavbarUsrInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar-usr-info',
            template: __webpack_require__("./src/app/pages/navbar-usr-info/navbar-usr-info.component.html"),
            styles: [__webpack_require__("./src/app/pages/navbar-usr-info/navbar-usr-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], NavbarUsrInfoComponent);
    return NavbarUsrInfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pages.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar-usr-info></app-navbar-usr-info>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pages',
            template: __webpack_require__("./src/app/pages/pages.component.html"),
            styles: [__webpack_require__("./src/app/pages/pages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usr_seguridad_test_constants__ = __webpack_require__("./src/app/pages/usr-seguridad/test.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usr_seguridad_file_util__ = __webpack_require__("./src/app/pages/usr-seguridad/file.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_component__ = __webpack_require__("./src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_routes__ = __webpack_require__("./src/app/pages/pages.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__usr_seguridad_usr_seguridad_component__ = __webpack_require__("./src/app/pages/usr-seguridad/usr-seguridad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__usr_ejecutivo_usr_ejecutivo_component__ = __webpack_require__("./src/app/pages/usr-ejecutivo/usr-ejecutivo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_usr_info_navbar_usr_info_component__ = __webpack_require__("./src/app/pages/navbar-usr-info/navbar-usr-info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__pages_component__["a" /* PagesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__usr_seguridad_usr_seguridad_component__["a" /* UsrSeguridadComponent */],
                __WEBPACK_IMPORTED_MODULE_8__usr_ejecutivo_usr_ejecutivo_component__["a" /* UsrEjecutivoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_usr_info_navbar_usr_info_component__["a" /* NavbarUsrInfoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__pages_routes__["a" /* PAGES_ROUTES */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__usr_seguridad_file_util__["a" /* FileUtil */], __WEBPACK_IMPORTED_MODULE_1__usr_seguridad_test_constants__["a" /* Constants */]],
            bootstrap: []
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FeatureRoutingModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAGES_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usr_ejecutivo_usr_ejecutivo_component__ = __webpack_require__("./src/app/pages/usr-ejecutivo/usr-ejecutivo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usr_seguridad_usr_seguridad_component__ = __webpack_require__("./src/app/pages/usr-seguridad/usr-seguridad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_component__ = __webpack_require__("./src/app/pages/pages.component.ts");




var pagesRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__pages_component__["a" /* PagesComponent */],
        children: [
            { path: 'usr_seguridad', component: __WEBPACK_IMPORTED_MODULE_1__usr_seguridad_usr_seguridad_component__["a" /* UsrSeguridadComponent */] },
            { path: 'usr_ejecutivo', component: __WEBPACK_IMPORTED_MODULE_0__usr_ejecutivo_usr_ejecutivo_component__["a" /* UsrEjecutivoComponent */] }
        ]
    }
];
var FeatureRoutingModule = /** @class */ (function () {
    function FeatureRoutingModule() {
    }
    return FeatureRoutingModule;
}());

var PAGES_ROUTES = __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(pagesRoutes, { useHash: true });
// export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);


/***/ }),

/***/ "./src/app/pages/usr-ejecutivo/usr-ejecutivo.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myForm\" novalidate>\n    <div class=\"contenedor-tabla\">\n        <table id=\"tableBeneficiary\" class=\"table table-fixed\">\n                <thead >\n                            <tr >\n                              <th class=\"col-md-1 style-th\" style=\"text-align: center\">ID BDD</th>\n                              <th class=\"col-md-2 style-th\" style=\"text-align: center\">Usuario Ofuscado</th>\n                              <th class=\"col-md-2 style-th\" style=\"text-align: center\">Password Ofuscado</th>\n                              <th class=\"col-md-2 style-th\" style=\"text-align: center\">ID de Terminal</th>\n                              <th class=\"col-md-1 style-th\" style=\"text-align: center\"> CR</th>\n                              <th class=\"col-md-2 style-th\" style=\"text-align: center\">Estado de Terminal</th>\n                              <th class=\"col-md-2 style-th\" style=\"text-align: center\">Modificar</th>\n                            </tr>\n                </thead>\n            <tbody>\n                <tr *ngFor = 'let registro of arrayRegistros' #rTr>\n                    <td class=\"col-md-1\" style=\"text-align: center\">{{registro.ID}}</td>\n                    <td class=\"col-md-2\" style=\"text-align: center\"><div *ngIf=\"registro.USRLEGACY !== '' || registro.USRLEGACY !== undefined\">Cargado OK</div></td>\n                    <td class=\"col-md-2\" style=\"text-align: center\"><div *ngIf=\"registro.PASSLEGACY !== '' || registro.PASSLEGACY !== undefined\"></div>Cargado OK</td>\n                    <td class=\"col-md-2\" style=\"text-align: center\">{{registro.TERMINAL_ID}}</td>\n                    <td  class=\"col-md-1\" style=\"text-align: center\">{{registro.SUCURSAL_ID}}</td>\n                    <td class=\"col-md-2\" style=\"text-align: center\">\n                        <div *ngIf=\"registro.ACTIVO === '1'\">ACTIVA</div>\n                        <div *ngIf=\"registro.ACTIVO === '0'\">INACTIVA</div>\n                        <div *ngIf=\"registro.ACTIVO === '' || registro.ACTIVO === undefined\">NA</div>\n                    </td>\n                    <td class=\"col-md-2\" align=\"center\" (click)=\"getValuesTr(rTr)\"    >\n                    <img  class=\"img-edit\" src=\"./assets/img/edit.png\" \n                            alt= \"Modificar\" />\n                    </td>\n                </tr>\n             </tbody>\n        </table>\n    </div>\n    <div class=\"modal fade\" id=\"modalModificaEstatus\" role=\"dialog\">\n            <div class=\"modal-dialog modal-dialog-aux\">\n                <div class=\"modal-content\">\n    \n                    <div class=\"modal-body\">\n                        <div class=\"row padding-InFieldset\" align=\"center\">\n                            <div class=\"col-sm-12 col-md-12 col-lg-12\">\n                                    <h4 class=\"color-letra\">Asignación de CR / modificación de estado de terminal</h4>\n                            </div>\n                        </div>\n                        <div class=\"row padding-InFieldset\">\n                            <div class=\"col-sm-5 col-md-5 col-lg-5\" align=\"right\">\n                                   <label class=\"letranegrita\">ID de Terminal</label>\n                            </div>\n                            <div class=\"col-sm-5 col-md-5 col-lg-5\" align=\"left\">\n                                    <label #rIdTeerminal>{{IdTerminalSelect}}</label>\n                            </div>\n                           \n                        </div>\n                        <div class=\"row padding-InFieldset\">\n                                <div class=\"col-sm-5 col-md-5 col-lg-5\" align=\"right\">\n                                       <label class=\"letranegrita\">CR\n                                        </label>\n                                </div>\n                                <div class=\"col-sm-5 col-md-5 col-lg-5\" align=\"left\">\n                                        <input type=\"text\" class=\"form-control\" #rCR formControlName=\"fcrCR\" >\n                                        <div *ngIf=\"myForm.get('fcrCR').errors && myForm.get('fcrCR').dirty\" >\n                                                <p *ngIf=\"myForm.get('fcrCR').hasError('required')\" class=\"alert alert-danger\">Dato obligatorio, favor de capturar.</p>\n                                          </div>\n                                </div>\n                               \n                            </div>\n                            <div class=\"row padding-InFieldset\">\n                                    <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\" align=\"right\">\n                                            <label class=\"letranegrita\">Estado de terminal </label>\n                                        </div>\n                                        <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\" align=\"left\">\n                                            <select class=\"form-control selectModificado\"   #rEstatus >\n                                              <option value=\"2\"  disabled selected>NA</option>\n                                              <option value=\"1\" >ACTIVA</option>\n                                              <option value=\"0\" >INACTIVA</option>\n                                            </select>\n                                        </div>\n                            </div>\n                    </div>\n                    <div class=\"modal-footer modal-footer-aux\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-8 col-md-8 col-lg-8\">  </div>\n                            <div class=\"col-sm-2 col-md-2 col-lg-2\" style=\"padding-left: 6% !important;\">  \n                                    <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">CANCELAR</button>\n                            </div>\n                            <div class=\"col-sm-2 col-md-2 col-lg-2\"  style=\"padding-left: 0px\">  \n                                    <button type=\"button\" class=\"btn  btn-danger\" data-dismiss=\"modal\" \n                                    [disabled]=\"rCR.value === ''\"\n                                     (click)=\"showConfirmaStatus(rCR.value,rEstatus.value,rIdTeerminal.innerText)\" >GUARDAR</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n        \n            </div>\n        </div>\n        <div class=\"modal fade\" id=\"modalConfirma\" role=\"dialog\">\n                <div class=\"modal-dialog modal-dialog-aux\">\n                        <div class=\"modal-content\">\n            \n                            <div class=\"modal-body\">\n                                <div class=\"row padding-InFieldset\" align=\"center\">\n                                    <div class=\"col-sm-12 col-md-12 col-lg-12\">\n                                            <h4 class=\"color-letra\">Operación exitosa </h4>\n                                    </div>\n                                </div>\n                                <div  class=\"row \">\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"right\">\n                                            <label class=\"letranegrita\">ID de Terminal</label>\n                                         </div>\n                                         <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"left\">\n                                                <label>{{IdTerminalSelect}}</label>\n                                             </div>\n                                </div>\n                                <div  class=\"row \">\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"right\">\n                                            <label class=\"letranegrita\">CR</label>\n                                         </div>\n                                         <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"left\">\n                                                <label>{{CrModal}}</label>\n                                             </div>\n                                </div>\n                                <div  class=\"row \">\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"right\">\n                                            <label class=\"letranegrita\">Estado de terminal   </label>\n                                         </div>\n                                         <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"left\">\n                                                <label>{{EdoTerminalModal}}</label>\n                                             </div>\n                                </div>\n                            </div>\n                            <div class=\"modal-footer modal-footer-aux\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-8 col-md-8 col-lg-8\">  </div>\n                                    <div class=\"col-sm-2 col-md-2 col-lg-2\" > </div>\n                                    <div class=\"col-sm-2 col-md-2 col-lg-2\"  style=\"padding-left: 0px\">  \n                                            <button type=\"button\" class=\"btn  btn-danger\" data-dismiss=\"modal\"  >ACEPTAR  </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                \n                    </div>\n            </div>\n         \n</form>"

/***/ }),

/***/ "./src/app/pages/usr-ejecutivo/usr-ejecutivo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsrEjecutivoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__databd_operaciones__ = __webpack_require__("./src/app/databd-operaciones.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsrEjecutivoComponent = /** @class */ (function () {
    function UsrEjecutivoComponent(fb) {
        this.fb = fb;
        this.arrayRegistros = [];
        this.myForm = this.fb.group({
            fcrCR: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
        });
    }
    UsrEjecutivoComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('sesion') === 'activa') {
            this.getRegistros();
        }
        else {
            $('#errorModal').modal('show');
            document.getElementById('mnsError').innerHTML = 'Tu sesión ha expirado';
        }
    };
    UsrEjecutivoComponent.prototype.getRegistros = function () {
        var this_aux = this;
        var operaciones = new __WEBPACK_IMPORTED_MODULE_0__databd_operaciones__["a" /* DataBD_Operaciones */]();
        operaciones.getRegistros().then(function (res) {
            console.log('Regreso respuesta');
            console.log(res);
            var res_json = res.responseJSON;
            if (res_json.Id === '1') {
                setTimeout(function () {
                    $('#modal_please_wait').modal('hide');
                    this_aux.arrayRegistros = res_json.ArrayRegistros;
                }, 500);
            }
            else {
                setTimeout(function () {
                    $('#modal_please_wait').modal('hide');
                    $('#errorModal').modal('show');
                    document.getElementById('mnsError').innerHTML = 'El servicio no esta disponible, favor de intentar mas tarde.';
                }, 500);
            }
        }, function (error) {
            setTimeout(function () {
                $('#modal_please_wait').modal('hide');
                $('#errorModal').modal('show');
                if (error.errorCode === 'API_INVOCATION_FAILURE') {
                    document.getElementById('mnsError').innerHTML = 'Tu sesión ha expirado';
                }
                else {
                    document.getElementById('mnsError').innerHTML = 'El servicio no esta disponible, favor de intentar mas tarde';
                }
            }, 500);
        });
    };
    UsrEjecutivoComponent.prototype.getValuesTr = function (elementHTML) {
        var this_aux = this;
        console.log(elementHTML.cells);
        var tds = elementHTML.cells;
        this_aux.IdTerminalSelect = tds[3].innerText;
        this_aux.rCR.nativeElement.value = tds[4].innerText;
        var edo = tds[5].innerText;
        var edo_aux = edo.toString().trim();
        if (edo_aux === 'NA') {
            this_aux.rEstatus.nativeElement.value = '2';
        }
        if (edo_aux === 'ACTIVA') {
            this_aux.rEstatus.nativeElement.value = '1';
        }
        if (edo_aux === 'INACTIVA') {
            this_aux.rEstatus.nativeElement.value = '0';
        }
        $('#modalModificaEstatus').modal('show');
    };
    UsrEjecutivoComponent.prototype.showConfirmaStatus = function (rCRvalue, rEstatusvalue, idTerminalvalue) {
        var this_aux = this;
        this_aux.CrModal = rCRvalue;
        if (rEstatusvalue === '2') {
            this_aux.EdoTerminalModal = 'NA';
        }
        if (rEstatusvalue === '1') {
            this_aux.EdoTerminalModal = 'ACTIVA';
        }
        if (rEstatusvalue === '0') {
            this_aux.EdoTerminalModal = 'INACTIVA';
        }
        this_aux.setUpdateCrStatus(idTerminalvalue, rCRvalue, rEstatusvalue);
    };
    UsrEjecutivoComponent.prototype.setUpdateCrStatus = function (idTerminalvalue, sucursal_id, activo) {
        $('#modal_please_wait').modal('show');
        var this_aux = this;
        var operaciones = new __WEBPACK_IMPORTED_MODULE_0__databd_operaciones__["a" /* DataBD_Operaciones */]();
        operaciones.setUpdateCrStatus(idTerminalvalue, sucursal_id, activo).then(function (response) {
            console.log(response);
            var jsonResp = response.responseJSON;
            if (jsonResp.Id === '1') {
                setTimeout(function () {
                    $('#modal_please_wait').modal('hide');
                    this_aux.getRegistros();
                    $('#modalConfirma').modal('show');
                }, 500);
            }
            else {
                setTimeout(function () {
                    $('#modal_please_wait').modal('hide');
                    $('#errorModal').modal('show');
                    document.getElementById('mnsError').innerHTML = 'El servicio no esta disponible, favor de intentar mas tarde.';
                }, 500);
            }
        }, function (error) {
            setTimeout(function () {
                $('#modal_please_wait').modal('hide');
                $('#errorModal').modal('show');
                if (error.errorCode === 'API_INVOCATION_FAILURE') {
                    document.getElementById('mnsError').innerHTML = 'Tu sesión ha expirado';
                }
                else {
                    document.getElementById('mnsError').innerHTML = 'El servicio no esta disponible, favor de intentar mas tarde';
                }
            }, 500);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])('rCR'),
        __metadata("design:type", Object)
    ], UsrEjecutivoComponent.prototype, "rCR", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])('rEstatus'),
        __metadata("design:type", Object)
    ], UsrEjecutivoComponent.prototype, "rEstatus", void 0);
    UsrEjecutivoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-usr-ejecutivo',
            template: __webpack_require__("./src/app/pages/usr-ejecutivo/usr-ejecutivo.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], UsrEjecutivoComponent);
    return UsrEjecutivoComponent;
}());



/***/ }),

/***/ "./src/app/pages/usr-seguridad/file.util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FileUtil = /** @class */ (function () {
    function FileUtil() {
    }
    FileUtil.prototype.isCSVFile = function (file) {
        return file.name.endsWith('.csv');
    };
    FileUtil.prototype.getHeaderArray = function (csvRecordsArr, tokenDelimeter) {
        var headers = csvRecordsArr[0].split(tokenDelimeter);
        var headerArray = [];
        for (var j = 0; j < headers.length; j++) {
            headerArray.push(headers[j]);
        }
        return headerArray;
    };
    FileUtil.prototype.validateHeaders = function (origHeaders, fileHeaaders) {
        if (origHeaders.length !== fileHeaaders.length) {
            return false;
        }
        var fileHeaderMatchFlag = true;
        for (var j = 0; j < origHeaders.length; j++) {
            if (origHeaders[j] !== fileHeaaders[j]) {
                fileHeaderMatchFlag = false;
                break;
            }
        }
        return fileHeaderMatchFlag;
    };
    FileUtil.prototype.getDataRecordsArrayFromCSVFile = function (csvRecordsArray, headerLength, validateHeaderAndRecordLengthFlag, tokenDelimeter) {
        var dataArr = [];
        for (var i = 0; i < csvRecordsArray.length; i++) {
            var data = csvRecordsArray[i].split(tokenDelimeter);
            if (validateHeaderAndRecordLengthFlag && data.length !== headerLength) {
                if (data === '') {
                    alert('Extra blank line is present at line number ' + i + ', please remove it.');
                    return null;
                }
                else {
                    // tslint:disable-next-line:max-line-length
                    alert('Record at line number ' + i + ' contain ' + data.length + ' tokens, and is not matching with header length of :' + headerLength);
                    return null;
                }
            }
            var col = [];
            for (var j = 0; j < data.length; j++) {
                col.push(data[j]);
            }
            dataArr.push(col);
        }
        return dataArr;
    };
    FileUtil = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FileUtil);
    return FileUtil;
}());



/***/ }),

/***/ "./src/app/pages/usr-seguridad/test.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.tokenDelimeter = ',';
    Constants.isHeaderPresentFlag = true;
    Constants.validateHeaderAndRecordLengthFlag = false;
    Constants.valildateFileExtenstionFlag = true;
    Constants = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Constants);
    return Constants;
}());



/***/ }),

/***/ "./src/app/pages/usr-seguridad/usr-seguridad.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/usr-seguridad/usr-seguridad.component.html":
/***/ (function(module, exports) {

module.exports = "<form  [formGroup]=\"myForm\" novalidate>\n<div>\n    <div class=\"row seguridad-bar-options\" align=\"center\">\n        <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1\"></div>\n        <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 seguridad-bar-td\" id=\"divParticular\" (click)=\"cagaParticular()\">\n            <label>CARGA DE USUARIO LEGACY</label>\n        </div>\n        <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 seguridad-bar-td\"  id=\"divMasiva\" (click)=\"cagaMasiva()\">\n                <label>CARGA MASIVA DE USUARIOS LEGACY                    </label>\n        </div>\n        <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\"></div>\n    </div>    \n</div>\n    <div class=\"contenedor-tabla\">\n            <table id=\"tableBeneficiary\" class=\"table table-fixed\">\n                    <thead >\n                                <tr >\n                                  <th class=\"col-md-2 style-th\" style=\"text-align: center\">ID BDD</th>\n                                  <th class=\"col-md-2 style-th\" style=\"text-align: center\">Usuario Ofuscado</th>\n                                  <th class=\"col-md-2 style-th\" style=\"text-align: center\">Password Ofuscado</th>\n                                  <th class=\"col-md-2 style-th\" style=\"text-align: center\">ID de Terminal</th>\n                                  <th class=\"col-md-2 style-th\" style=\"text-align: center\"> CR</th>\n                                  <th class=\"col-md-2 style-th\" style=\"text-align: center\">Estado de Terminal</th>\n                                  <th class=\"col-md-0 style-th\" style=\"text-align: center;display: none\">Modificar</th>\n                                </tr>\n                    </thead>\n                <tbody>\n                    <tr *ngFor = 'let registro of arrayRegistros' #rTr>\n                        <td class=\"col-md-2\" style=\"text-align: center\">{{registro.ID}}</td>\n                        <td class=\"col-md-2\" style=\"text-align: center\"><div *ngIf=\"registro.USRLEGACY !== '' || registro.USRLEGACY !== undefined\">Cargado OK</div></td>\n                        <td class=\"col-md-2\" style=\"text-align: center\"><div *ngIf=\"registro.PASSLEGACY !== '' || registro.PASSLEGACY !== undefined\"></div>Cargado OK</td>\n                        <td class=\"col-md-2\" style=\"text-align: center\">{{registro.TERMINAL_ID}}</td>\n                        <td  class=\"col-md-2\" style=\"text-align: center\">{{registro.SUCURSAL_ID}}</td>\n                        <td class=\"col-md-2\" style=\"text-align: center\">\n                            <div *ngIf=\"registro.ACTIVO === '1'\">ACTIVA</div>\n                            <div *ngIf=\"registro.ACTIVO === '0'\">INACTIVA</div>\n                            <div *ngIf=\"registro.ACTIVO === '' || registro.ACTIVO === undefined\">NA</div>\n                        </td>\n                        <td class=\"col-md-0\" align=\"center\" (click)=\"getValuesTr(rTr)\"  style=\"display: none\"  >\n                        <img  class=\"img-edit\" src=\"./assets/img/edit.png\" \n                                alt= \"Modificar\" />\n                        </td>\n                    </tr>\n                 </tbody>\n            </table>\n        </div>\n\n    <div class=\"modal fade\" id=\"modalCargaParticular\" role=\"dialog\">\n            <div class=\"modal-dialog modal-dialog-aux\">\n                <div class=\"modal-content\">\n    \n                    <div class=\"modal-body\">\n                        <div class=\"row padding-InFieldset\" align=\"center\">\n                            <div class=\"col-sm-12 col-md-12 col-lg-12\">\n                                    <h4 class=\"color-letra\">Alta de usuario Legacy</h4>\n                            </div>\n                        </div>\n                        <div class=\"row padding-InFieldset\">\n                            <div class=\"col-sm-4 col-md-4 col-lg-4\" align=\"right\">\n                                   <label class=\"letranegrita\">Usuario Legacy</label>\n                            </div>\n                            <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"left\">\n                                    <input type=\"text\" class=\"form-control\" #rUsuarioLegacy formControlName=\"fcUsrLegacy\">\n                                    <div *ngIf=\"myForm.get('fcUsrLegacy').errors && myForm.get('fcUsrLegacy').dirty\" >\n                                            <p *ngIf=\"myForm.get('fcUsrLegacy').hasError('required')\" class=\"alert alert-danger\">Dato obligatorio, favor de capturar.</p>\n                                      </div>\n                            </div>\n                           \n                        </div>\n                        <div class=\"row padding-InFieldset\">\n                                <div class=\"col-sm-4 col-md-4 col-lg-4\" align=\"right\">\n                                       <label class=\"letranegrita\">Password Legacy\n                                        </label>\n                                </div>\n                                <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"left\">\n                                        <input type=\"text\" class=\"form-control\" #rPassLegacy formControlName=\"fcPassLegacy\">\n                                        <div *ngIf=\"myForm.get('fcPassLegacy').errors && myForm.get('fcPassLegacy').dirty\" >\n                                                <p *ngIf=\"myForm.get('fcPassLegacy').hasError('required')\" class=\"alert alert-danger\">Dato obligatorio, favor de capturar.</p>\n                                          </div>\n                                </div>\n                               \n                            </div>\n                            <div class=\"row padding-InFieldset\">\n                                    <div class=\"col-sm-4 col-md-4 col-lg-4\" align=\"right\">\n                                           <label class=\"letranegrita\">Confirmaci&oacute;n de password\n                                            </label>\n                                    </div>\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"left\">\n                                            <input type=\"text\" class=\"form-control\" formControlName=\"fcPassLegacyConfirm\">\n                                            <div *ngIf=\"myForm.get('fcPassLegacyConfirm').errors && myForm.get('fcPassLegacyConfirm').dirty\" >\n                                                    <p *ngIf=\"myForm.get('fcPassLegacyConfirm').hasError('required')\" class=\"alert alert-danger\">Dato obligatorio, favor de capturar.</p>\n                                            </div>\n                                            <div *ngIf=\" myForm.get('fcPassLegacyConfirm').dirty && (myForm.get('fcPassLegacyConfirm').value !== '') \" >\n                                                    <p *ngIf=\"myForm.get('fcPassLegacyConfirm').value !== myForm.get('fcPassLegacy').value\" class=\"alert alert-danger\">Password no coincide.</p>\n                                            </div>\n                                    </div>\n                                   \n                                </div>\n                    </div>\n                    <div class=\"modal-footer modal-footer-aux\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-8 col-md-8 col-lg-8\">  </div>\n                            <div class=\"col-sm-2 col-md-2 col-lg-2\" style=\"padding-left: 6% !important;\">  \n                                    <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">CANCELAR</button>\n                            </div>\n                            <div class=\"col-sm-2 col-md-2 col-lg-2\"  style=\"padding-left: 0px\">  \n                                    <button type=\"button\" class=\"btn  btn-danger\"data-dismiss=\"modal\" \n                                    [disabled]=\"((myForm.get('fcPassLegacy').value === '')|| (myForm.get('fcPassLegacyConfirm').value === '')||(myForm.get('fcUsrLegacy').value === '')||(myForm.get('fcPassLegacyConfirm').value !== myForm.get('fcPassLegacy').value))\"\n                                     (click)=\"showConfirmacionCPart(rUsuarioLegacy.value, rPassLegacy.value)\" >GUARDAR</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n        \n            </div>\n        </div>\n        <div class=\"modal fade\" id=\"modalCargaMasiva\" role=\"dialog\">\n                <div class=\"modal-dialog modal-dialog-aux\">\n                        <div class=\"modal-content\">\n            \n                            <div class=\"modal-body\">\n                                <div class=\"row padding-InFieldset\" align=\"center\">\n                                    <div class=\"col-sm-12 col-md-12 col-lg-12\">\n                                            <h4 class=\"color-letra\">Carga masiva de usuarios Legacy\n                                                </h4>\n                                    </div>\n                                </div>\n                                <div class=\"row padding-InFieldset\">\n                                    <div class=\"col-sm-12 col-md-12 col-lg-12\" >\n                                           <P >Da clic en Examinar y, a continuación, selecciona el archivo. Una vez seleccionado el archivo, da clic en CONTINUAR.\n                                           </P>\n                                    </div>\n                                   \n                                </div>\n                                <div class=\"row uploader padding-InFieldset\">\n                                    <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n                                    <div class=\"col-sm-7 col-md-7 col-lg-7 form-control\" style=\"\n                                    padding-bottom: 0px !important;\">\n                                      <div id=\"inputval\" class=\"input-value \" ></div>\n                                    </div>\n                                    <div class=\"col-sm-2 col-md-2 col-lg-2\" style=\"background-color: orangered; padding-top: 4px;\" align=\"center\">\n                                      <label for=\"txtFileUpload\">Examinar</label>\n                                      <input  class=\"upload\" type=\"file\" accept=\".csv\" id=\"txtFileUpload\" name=\"File Upload\" #fileImportInput (change)=\"fileChangeListener($event,fileImportInput.value )\">\n                                    </div>\n                                    <div class=\"col-sm-3 col-md-3 col-lg-3\"></div>\n                                </div>  \n                            </div>\n                            <br><br>\n                            <div class=\"modal-footer modal-footer-aux\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-8 col-md-8 col-lg-8\">  </div>\n                                    <div class=\"col-sm-2 col-md-2 col-lg-2\" style=\"padding-left: 4% !important;\">  \n                                            <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">CANCELAR</button>\n                                    </div>\n                                    <div class=\"col-sm-2 col-md-2 col-lg-2\"  style=\"padding-left: 0px\">  \n                                            <button type=\"button\" class=\"btn  btn-danger\" data-dismiss=\"modal\" [disabled]=\"fileImportInput.value === ''\" (click)=\"showConfirmacion()\" >CONTINUAR\n                                                </button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                \n                    </div>\n                </div>\n                <div class=\"modal fade\" id=\"modalConfirmaCMasiva\" role=\"dialog\">\n                        <div class=\"modal-dialog modal-dialog-aux\">\n                                <div class=\"modal-content\">\n                    \n                                    <div class=\"modal-body\">\n                                        <div class=\"row padding-InFieldset\" align=\"center\">\n                                            <div class=\"col-sm-12 col-md-12 col-lg-12\">\n                                                    <h4 class=\"color-letra\">Confirma la operación                                                        </h4>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-12 col-md-12 col-lg-12\" >\n                                                   <P >La escritura en Base de Datos se ejecutará hasta que des clic en el botón CONFIRMAR. Por favor verifica el nombre del archivo.\n                                                   </P>\n                                            </div>\n                                        </div>\n                                        <div  class=\"row \">\n                                                <div class=\"col-sm-12 col-md-12 col-lg-12\" >\n                                                        <p >Archivo fuente para carga masiva de usuarios Legacy:</p>\n                                                 </div>\n                                        </div>\n                                        <div  class=\"row padding-InFieldset\">\n                                                <div class=\"col-sm-10 col-md-10 col-lg-10\"  >\n                                                        <label class=\"form-control\" id=\"nameFile\" readonly></label>\n                                                 </div>\n                                                 <div class=\"col-sm-1 col-md-1 col-lg-1\"></div>\n                                        </div>\n                                    </div>\n                                    <div class=\"modal-footer modal-footer-aux\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-8 col-md-8 col-lg-8\">  </div>\n                                            <div class=\"col-sm-2 col-md-2 col-lg-2\" style=\"padding-left: 4% !important;\">  \n                                                    <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">CANCELAR</button>\n                                            </div>\n                                            <div class=\"col-sm-2 col-md-2 col-lg-2\"  style=\"padding-left: 0px\">  \n                                                    <button type=\"button\" class=\"btn  btn-danger \" data-dismiss=\"modal\" (click)=\"doCargaMasiva()\">CONFIRMAR\n                                                        </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                        \n                            </div>\n                    </div>\n                        <div class=\"modal fade\" id=\"modalConfirmaCParticular\" role=\"dialog\">\n                            <div class=\"modal-dialog modal-dialog-aux\">\n                                    <div class=\"modal-content\">\n                        \n                                        <div class=\"modal-body\">\n                                            <div class=\"row padding-InFieldset\" align=\"center\">\n                                                <div class=\"col-sm-12 col-md-12 col-lg-12\">\n                                                        <h4 class=\"color-letra\">Operación exitosa </h4>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-12 col-md-12 col-lg-12\" align=\"center\">\n                                                       <label class=\"letranegrita\" >Alta de usuario Legacy  </label>\n                                                </div>\n                                            </div>\n                                            <div  class=\"row \">\n                                                    <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"right\">\n                                                        <label class=\"letranegrita\">ID BDD</label>\n                                                     </div>\n                                                     <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"left\">\n                                                            <label>{{IDDataBase}}</label>\n                                                         </div>\n                                            </div>\n                                            <div  class=\"row \">\n                                                    <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"right\">\n                                                        <label class=\"letranegrita\">Usuario Legacy</label>\n                                                     </div>\n                                                     <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"left\">\n                                                            <label>{{usrLegacy}}</label>\n                                                         </div>\n                                            </div>\n                                            <div  class=\"row \">\n                                                    <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"right\">\n                                                        <label class=\"letranegrita\">Password Legacy</label>\n                                                     </div>\n                                                     <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"left\">\n                                                            <label>{{passLegacy}}</label>\n                                                         </div>\n                                            </div>\n                                            <div  class=\"row \">\n                                                    <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"right\">\n                                                        <label class=\"letranegrita\">ID Terminal</label>\n                                                     </div>\n                                                     <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"left\">\n                                                            <label>{{Terminal_Id}}</label>\n                                                         </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"modal-footer modal-footer-aux\">\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-8 col-md-8 col-lg-8\">  </div>\n                                                <div class=\"col-sm-2 col-md-2 col-lg-2\" > </div>\n                                                <div class=\"col-sm-2 col-md-2 col-lg-2\"  style=\"padding-left: 0px\">  \n                                                        <button type=\"button\" class=\"btn  btn-danger\" data-dismiss=\"modal\" >ACEPTAR  </button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                            \n                                </div>\n                        </div>\n                        <div class=\"modal fade\" id=\"modalFinCMasiva\" role=\"dialog\">\n                            <div class=\"modal-dialog modal-dialog-aux\">\n                                    <div class=\"modal-content\">\n                        \n                                        <div class=\"modal-body\">\n                                            <div class=\"row padding-InFieldset\" align=\"center\">\n                                                <div class=\"col-sm-12 col-md-12 col-lg-12\">\n                                                        <h4 class=\"color-letra\">Operación exitosa </h4>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-12 col-md-12 col-lg-12\" align=\"center\">\n                                                       <label class=\"letranegrita\" >Carga masiva de usuarios Legacy     </label>\n                                                </div>\n                                            </div>\n                                            <div  class=\"row \">\n                                                    <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"right\">\n                                                        <label class=\"letranegrita\">Archivo fuente        </label>\n                                                     </div>\n                                                     <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"left\">\n                                                            <label>{{NameArchivo}}</label>\n                                                         </div>\n                                            </div>\n                                            <div  class=\"row \">\n                                                    <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"right\">\n                                                        <label class=\"letranegrita\">Registros insertados      </label>\n                                                     </div>\n                                                     <div class=\"col-sm-6 col-md-6 col-lg-6\" align=\"left\">\n                                                            <label>{{NumRegistros}}</label>\n                                                         </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"modal-footer modal-footer-aux\">\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-8 col-md-8 col-lg-8\">  </div>\n                                                <div class=\"col-sm-2 col-md-2 col-lg-2\" > </div>\n                                                <div class=\"col-sm-2 col-md-2 col-lg-2\"  style=\"padding-left: 0px\">  \n                                                        <button type=\"button\" class=\"btn  btn-danger\" data-dismiss=\"modal\" (click)=\"validaCarga()\">ACEPTAR  </button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                            \n                                </div>\n                        </div>\n                      \n    \n    </form>"

/***/ }),

/***/ "./src/app/pages/usr-seguridad/usr-seguridad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsrSeguridadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__session_app_service__ = __webpack_require__("./src/app/session-app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__test_constants__ = __webpack_require__("./src/app/pages/usr-seguridad/test.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_util__ = __webpack_require__("./src/app/pages/usr-seguridad/file.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__databd_operaciones__ = __webpack_require__("./src/app/databd-operaciones.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsrSeguridadComponent = /** @class */ (function () {
    function UsrSeguridadComponent(service, fb, router, _fileUtil) {
        this.service = service;
        this.fb = fb;
        this.router = router;
        this._fileUtil = _fileUtil;
        this.csvRecords = [];
        this.arrayRegistros = [];
        this.NameArchivo = '1';
        this.IDDataBase = '1';
        this.Terminal_Id = '1';
        this.myForm = this.fb.group({
            fcUsrLegacy: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required]],
            fcPassLegacy: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required]],
            fcPassLegacyConfirm: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required]],
        });
    }
    UsrSeguridadComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('sesion') === 'activa') {
            this.getRegistros();
        }
        else {
            $('#errorModal').modal('show');
            document.getElementById('mnsError').innerHTML = 'Tu sesión ha expirado';
        }
    };
    UsrSeguridadComponent.prototype.getRegistros = function () {
        var this_aux = this;
        var operaciones = new __WEBPACK_IMPORTED_MODULE_6__databd_operaciones__["a" /* DataBD_Operaciones */]();
        operaciones.getRegistros().then(function (res) {
            console.log('Regreso respuesta');
            console.log(res);
            var res_json = res.responseJSON;
            if (res_json.Id === '1') {
                setTimeout(function () {
                    $('#modal_please_wait').modal('hide');
                    this_aux.arrayRegistros = res_json.ArrayRegistros;
                }, 500);
            }
            else {
                setTimeout(function () {
                    $('#modal_please_wait').modal('hide');
                    $('#errorModal').modal('show');
                    document.getElementById('mnsError').innerHTML = 'El servicio no esta disponible, favor de intentar mas tarde.';
                }, 500);
            }
        }, function (error) {
            setTimeout(function () {
                $('#modal_please_wait').modal('hide');
                $('#errorModal').modal('show');
                if (error.errorCode === 'API_INVOCATION_FAILURE') {
                    document.getElementById('mnsError').innerHTML = 'Tu sesión ha expirado';
                }
                else {
                    document.getElementById('mnsError').innerHTML = 'El servicio no esta disponible, favor de intentar mas tarde';
                }
            }, 500);
        });
    };
    UsrSeguridadComponent.prototype.cagaParticular = function () {
        document.getElementById('divParticular').style.backgroundColor = '#e2062d';
        document.getElementById('divMasiva').style.backgroundColor = '#4f525d';
        $('#modalCargaParticular').modal('show');
    };
    UsrSeguridadComponent.prototype.cagaMasiva = function () {
        document.getElementById('divMasiva').style.backgroundColor = '#e2062d';
        document.getElementById('divParticular').style.backgroundColor = '#4f525d';
        $('#modalCargaMasiva').modal('show');
    };
    UsrSeguridadComponent.prototype.fileChangeListener = function (event, value) {
        var _this = this;
        var text = [];
        var this_aux = this;
        var files = event.currentTarget.files;
        this_aux.routeFile = value;
        $('#inputval').text(value);
        if (__WEBPACK_IMPORTED_MODULE_1__test_constants__["a" /* Constants */].validateHeaderAndRecordLengthFlag) {
            if (!this_aux._fileUtil.isCSVFile(files[0])) {
                this_aux.fileReset();
            }
        }
        var input = event.target;
        var reader = new FileReader();
        reader.readAsText(input.files[0]);
        reader.onload = function (data) {
            var csvData = reader.result;
            var csvRecordsArray = csvData.split(/\r\n|\n/);
            var headerLength = -1;
            if (__WEBPACK_IMPORTED_MODULE_1__test_constants__["a" /* Constants */].isHeaderPresentFlag) {
                var headersRow = this_aux._fileUtil.getHeaderArray(csvRecordsArray, __WEBPACK_IMPORTED_MODULE_1__test_constants__["a" /* Constants */].tokenDelimeter);
                headerLength = headersRow.length;
            }
            this_aux.csvRecords = _this._fileUtil.getDataRecordsArrayFromCSVFile(csvRecordsArray, headerLength, __WEBPACK_IMPORTED_MODULE_1__test_constants__["a" /* Constants */].validateHeaderAndRecordLengthFlag, __WEBPACK_IMPORTED_MODULE_1__test_constants__["a" /* Constants */].tokenDelimeter);
            console.log(this_aux.csvRecords);
            if (this_aux.csvRecords == null) {
                this_aux.fileReset();
            }
        };
        reader.onerror = function () {
            $('#errorModal').modal('show');
            document.getElementById('mnsError').innerHTML = 'Tipo de archivo incorrecto, el archivo debe ser .csv, favor de verificar.';
        };
    };
    UsrSeguridadComponent.prototype.fileReset = function () {
        $('#errorModal').modal('show');
        document.getElementById('mnsError').innerHTML = 'Tipo de archivo incorrecto, el archivo debe ser .csv, favor de verificar.';
        this.fileImportInput.nativeElement.value = '';
        this.csvRecords = [];
    };
    UsrSeguridadComponent.prototype.showConfirmacion = function () {
        $('#nameFile').text(this.routeFile);
        $('#modalConfirmaCMasiva').modal('show');
    };
    UsrSeguridadComponent.prototype.showConfirmacionCPart = function (usr, pass) {
        var this_aux = this;
        this_aux.usrLegacy = usr;
        this_aux.passLegacy = pass;
        // Calcular la terminal
        var tam_ArrayReg = this_aux.arrayRegistros.length;
        var columna = this_aux.arrayRegistros[tam_ArrayReg - 1];
        var idTerminal = columna.TERMINAL_ID;
        this_aux.insertUsrPassLegacy(usr, pass, idTerminal);
    };
    UsrSeguridadComponent.prototype.insertUsrPassLegacy = function (usr, pass, idTerminal) {
        $('#modal_please_wait').modal('show');
        var this_aux = this;
        var operaciones = new __WEBPACK_IMPORTED_MODULE_6__databd_operaciones__["a" /* DataBD_Operaciones */]();
        operaciones.insertaUserPassLegacy(usr, pass, idTerminal).then(function (res) {
            console.log('Regreso respuesta');
            console.log(res);
            var res_json = res.responseJSON;
            if (res_json.Id === '1') {
                setTimeout(function () {
                    $('#modal_please_wait').modal('hide');
                    this_aux.IDDataBase = res_json.ID;
                    this_aux.Terminal_Id = res_json.TERMINAL_ID;
                    this_aux.getRegistros();
                    $('#modalConfirmaCParticular').modal('show');
                }, 500);
            }
            else {
                setTimeout(function () {
                    $('#modal_please_wait').modal('hide');
                    $('#errorModal').modal('show');
                    document.getElementById('mnsError').innerHTML = 'El servicio no esta disponible, favor de intentar mas tarde.';
                }, 500);
            }
        }, function (error) {
            setTimeout(function () {
                $('#modal_please_wait').modal('hide');
                $('#errorModal').modal('show');
                if (error.errorCode === 'API_INVOCATION_FAILURE') {
                    document.getElementById('mnsError').innerHTML = 'Tu sesión ha expirado';
                }
                else {
                    document.getElementById('mnsError').innerHTML = 'El servicio no esta disponible, favor de intentar mas tarde';
                }
            }, 500);
        });
    };
    UsrSeguridadComponent.prototype.doCargaMasiva = function () {
        var this_aux = this;
        if (this_aux.csvRecords == null) {
            // error no hay registros a cargar
        }
        else {
            // trego el ultimo el elemnto para sacar el Terminal ID con el que iniciara la insercion
            var tam_ArrayReg = this_aux.arrayRegistros.length;
            var tam_csvRecords = this_aux.csvRecords.length;
            this_aux.NumRegistros = tam_csvRecords;
            var columna = this_aux.arrayRegistros[tam_ArrayReg - 1];
            var idTerminal = columna.TERMINAL_ID;
            var firstColum = this_aux.csvRecords[0];
            var lastColum = this_aux.csvRecords[tam_csvRecords - 1];
            if (firstColum[0] === 'Usuario' || firstColum[1] === 'Usuario Base 64' || firstColum[1] === 'Contraseña Base 64') {
                this_aux.csvRecords.shift();
                this_aux.NumRegistros = this_aux.NumRegistros - 1;
            }
            if (lastColum[0] === '') {
                this_aux.csvRecords.pop();
                this_aux.NumRegistros = this_aux.NumRegistros - 1;
            }
            console.log(this_aux.csvRecords);
            if (this_aux.NumRegistros <= 200) {
                this_aux.iniCargaMasivaMasiva(idTerminal, this_aux.csvRecords);
            }
            else {
                $('#errorModal').modal('show');
                // tslint:disable-next-line:max-line-length
                document.getElementById('mnsError').innerHTML = 'El archivo de carga no debe contener más de 200 registros, favor de verificar.';
            }
        }
    };
    UsrSeguridadComponent.prototype.iniCargaMasivaMasiva = function (idTerminal, csvRecords) {
        $('#modal_please_wait').modal('show');
        var arraycsvRecords = [];
        var this_aux = this;
        var operaciones = new __WEBPACK_IMPORTED_MODULE_6__databd_operaciones__["a" /* DataBD_Operaciones */]();
        csvRecords.forEach(function (element1) {
            var json = '{ "Identificador":"' + element1[0] + '", "User":"' + element1[1] + '", "Pass":"' + element1[2] + '" }';
            arraycsvRecords.push(json);
        });
        var arraycsvRecordS = '{"Array":[' + arraycsvRecords + ']}';
        console.log(arraycsvRecordS);
        var jsonArray = JSON.parse(arraycsvRecordS);
        var stringArray = JSON.stringify(jsonArray);
        operaciones.insertaUserPassLegacyMasiva(idTerminal, stringArray).then(function (res) {
            console.log('Regreso respuesta');
            console.log(res);
            var res_json = res.responseJSON;
            if (res_json.Id === '1') {
                setTimeout(function () {
                    $('#modal_please_wait').modal('hide');
                    var arrayNameArchivo = this_aux.routeFile.split('\\');
                    var tam_arrayNameArchivo = arrayNameArchivo.length;
                    this_aux.NameArchivo = arrayNameArchivo[tam_arrayNameArchivo - 1];
                    $('#modalFinCMasiva').modal('show');
                }, 500);
            }
            else {
                setTimeout(function () {
                    $('#modal_please_wait').modal('hide');
                    $('#errorModal').modal('show');
                    document.getElementById('mnsError').innerHTML = 'El servicio no esta disponible, favor de intentar mas tarde.';
                }, 500);
            }
        }, function (error) {
            setTimeout(function () {
                $('#modal_please_wait').modal('hide');
                $('#errorModal').modal('show');
                if (error.errorCode === 'API_INVOCATION_FAILURE') {
                    document.getElementById('mnsError').innerHTML = 'Tu sesión ha expirado';
                }
                else {
                    document.getElementById('mnsError').innerHTML = 'El servicio no esta disponible, favor de intentar mas tarde';
                }
            }, 500);
        });
    };
    UsrSeguridadComponent.prototype.validaCarga = function () {
        $('#modal_please_wait').modal('show');
        var this_aux = this;
        var operaciones = new __WEBPACK_IMPORTED_MODULE_6__databd_operaciones__["a" /* DataBD_Operaciones */]();
        operaciones.getRegistros().then(function (res) {
            console.log('Regreso respuesta');
            console.log(res);
            var res_json = res.responseJSON;
            if (res_json.Id === '1') {
                setTimeout(function () {
                    $('#modal_please_wait').modal('hide');
                    this_aux.arrayRegistros = res_json.ArrayRegistros;
                }, 1000);
            }
            else {
                setTimeout(function () {
                    $('#modal_please_wait').modal('hide');
                    $('#errorModal').modal('show');
                    document.getElementById('mnsError').innerHTML = 'El servicio no esta disponible, favor de intentar mas tarde.';
                }, 1000);
            }
        }, function (error) {
            setTimeout(function () {
                $('#modal_please_wait').modal('hide');
                $('#errorModal').modal('show');
                if (error.errorCode === 'API_INVOCATION_FAILURE') {
                    document.getElementById('mnsError').innerHTML = 'Tu sesión ha expirado';
                }
                else {
                    document.getElementById('mnsError').innerHTML = 'El servicio no esta disponible, favor de intentar mas tarde';
                }
            }, 500);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_9" /* ViewChild */])('fileImportInput'),
        __metadata("design:type", Object)
    ], UsrSeguridadComponent.prototype, "fileImportInput", void 0);
    UsrSeguridadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'app-usr-seguridad',
            template: __webpack_require__("./src/app/pages/usr-seguridad/usr-seguridad.component.html"),
            styles: [__webpack_require__("./src/app/pages/usr-seguridad/usr-seguridad.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__session_app_service__["a" /* SessionAppService */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__file_util__["a" /* FileUtil */]])
    ], UsrSeguridadComponent);
    return UsrSeguridadComponent;
}());



/***/ }),

/***/ "./src/app/session-app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionAppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionAppService = /** @class */ (function () {
    function SessionAppService() {
    }
    SessionAppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SessionAppService);
    return SessionAppService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map