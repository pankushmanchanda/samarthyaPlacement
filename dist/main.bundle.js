webpackJsonp([1,4],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// this service is used to authenticate the current user is logged in or not
var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post('/api/authenticate', { username: username, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json().auth_token;
            if (token) {
                var usertype = response.json().role;
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                // return true to indicate successful login
                return response.json();
            }
            else {
                // return false to indicate failed login
                return response.json();
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    };
    AuthenticationService = __decorate([
        // map operatror for observable
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/authentication.service.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = (function () {
    //   public data2 :LoginComponent  ;
    function EmailService(http) {
        this.http = http;
        this.url = "/api/emailVerification";
    }
    EmailService.prototype.postdata = function (mailObj) {
        // var data1=JSON.stringify({to :"sheenamnarula1993@yahoo.com", subject:"abc", text:"hello" });
        var mailObjString = JSON.stringify(mailObj);
        //var data1 = JSON.stringify(this.data2.getdata());
        var params = 'json=' + mailObjString;
        var res;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this.http.post(this.url, params, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    EmailService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], EmailService);
    return EmailService;
    var _a;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/email.service.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiDetails; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UiDetails = (function () {
    function UiDetails(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.url = '/api/layout/navigationlinks';
    }
    ;
    UiDetails.prototype.getMenuDetails = function (token) {
        return this.http.get(this.url, this.authoriZation(token))
            .map(function (response) {
            var body = response.json();
            return body;
        });
    };
    UiDetails.prototype.authoriZation = function (userToken) {
        if (userToken) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': userToken });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    UiDetails = __decorate([
        // map operatror for observable
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], UiDetails);
    return UiDetails;
    var _a, _b;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/uidetails.service.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(848),
            styles: [__webpack_require__(832)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/about-us.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_placementRegister_service__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AdminRegistrationComponent = (function () {
    function AdminRegistrationComponent(fb, PlacementRegisterService, route, router) {
        this.PlacementRegisterService = PlacementRegisterService;
        this.route = route;
        this.router = router;
        //For google map giving latitude and longitutde
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.disabled = "false";
        //Dropdown values.Should be data driven
        this.roles = ['Admin', 'Coorinator', 'Supervisor'];
        this.professions = ['FullStackDeveloper', 'BPO'];
        this.placementCenters = ['Pune', 'Bangalore', 'Chennai'];
        this.languages = ['English', 'Hindi', 'Tamizh'];
        this.status = ['Active', 'Inactive'];
        this.pincodeHidden = true;
        this.mapHidden = true;
        //building the form using FormBuilder and FormGroup
        this.userForm = fb.group({
            nameControl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[A-Za-z]{2,}')]],
            genderControl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            emailControl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            passwordControl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, this.passwordValidator()]],
            confirmPasswordControl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, this.matchPassword()]],
            mobileControl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[0-9]{10}')]],
            roleControl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            professionControl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            pincodeControl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[0-9]{6}')]],
            locationControl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            placementControl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            statusControl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            languageControl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
        });
    }
    AdminRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.title = params['title']; });
        if (this.title == 'Coordinator') {
            this.userForm.patchValue({
                roleControl: "Coordinator"
            });
            this.hiddenRole = true;
            this.hiddenParticularRole = false;
            this.disabled = "true";
        }
        else if (this.title == 'Supervisor') {
            this.userForm.patchValue({
                roleControl: "Supervisor"
            });
            this.hiddenRole = true;
            this.hiddenParticularRole = false;
            this.disabled = "true";
        }
        else if (this.title == 'Admin') {
            this.title = "Admin";
            this.disabled = "false";
            this.hiddenRole = false;
            this.hiddenParticularRole = true;
        }
    };
    //password validation which is calling from form building of passwordControl
    AdminRegistrationComponent.prototype.passwordValidator = function () {
        var _this = this;
        return function (c) {
            if (_this.userForm && _this.userForm.get('confirmPasswordControl').value) {
                if (_this.userForm.get('passwordControl').value == _this.userForm.get('confirmPasswordControl').value) {
                    return null;
                }
                else {
                    return { valid: false };
                }
            }
        };
    };
    //password validation which is calling from form building of confirmPasswordControl
    AdminRegistrationComponent.prototype.matchPassword = function () {
        var _this = this;
        return function (c) {
            if (_this.userForm && _this.userForm.get('passwordControl').value) {
                if (_this.userForm.get('passwordControl').value == _this.userForm.get('confirmPasswordControl').value) {
                    return null;
                }
                else {
                    return { valid: false };
                }
            }
        };
    };
    AdminRegistrationComponent.prototype.showPincode = function () {
        if (this.pincodeHidden == true) {
            this.pincodeHidden = false;
            this.mapHidden = true;
        }
        else {
            this.pincodeHidden = true;
        }
    };
    AdminRegistrationComponent.prototype.showMap = function () {
        if (this.mapHidden == true) {
            this.mapHidden = false;
            this.pincodeHidden = true;
        }
        else {
            this.mapHidden = true;
        }
    };
    //user choose the location by pincode which is calling from close dialog and it should set location to the entered pincode
    AdminRegistrationComponent.prototype.getPincode = function () {
        this.userForm.patchValue({
            locationControl: 'salem'
        });
    };
    //user choose the location by pincode which is calling from html pincode input and it should set location to the entered pincode and close the dialog
    AdminRegistrationComponent.prototype.close = function (dialog) {
        this.getPincode();
        dialog.close();
    };
    //after submitting the form,it should executed and call service to add the data to json
    AdminRegistrationComponent.prototype.save = function (userData) {
        if (this.PlacementRegisterService.add(userData) == true) {
            this.userForm.reset();
            window.alert("registered successfully");
            return true;
        }
        else {
            window.alert("Sorry.....try some other time");
            return false;
        }
    };
    AdminRegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-registration',
            template: __webpack_require__(849),
            styles: [__webpack_require__(833)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_placementRegister_service__["a" /* PlacementRegisterService */]]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_placementRegister_service__["a" /* PlacementRegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_placementRegister_service__["a" /* PlacementRegisterService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], AdminRegistrationComponent);
    return AdminRegistrationComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/admin-registration.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_authentication_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_data_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterLoginHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AfterLoginHeaderComponent = (function () {
    function AfterLoginHeaderComponent(JsonDataService, AuthenticationService, data, router) {
        this.JsonDataService = JsonDataService;
        this.AuthenticationService = AuthenticationService;
        this.data = data;
        this.router = router;
        this.languages = [];
        this.navList = [];
    }
    AfterLoginHeaderComponent.prototype.ngOnInit = function () {
        // getting languages form json file
        var _this = this;
        this.JsonDataService.getJsonData().subscribe(function (resJsonData) { return _this.getdata(resJsonData); });
        var tokenVerification = JSON.parse(localStorage.getItem('currentUser'))["token"];
        this.JsonDataService.getJsonNavList(tokenVerification)
            .subscribe(function (role) {
            if (role["success"]) {
                _this.getNavList(role["jsondata"]);
            }
            else {
                tokenVerification = null;
                localStorage.removeItem('currentUser');
                _this.router.navigate(['/login']);
                _this.data.openSnackBar(role["message"], 'Ok');
            }
        }, function (error) {
            console.log(error);
        });
    };
    AfterLoginHeaderComponent.prototype.getdata = function (jsonData) {
        this.languages = jsonData;
    };
    AfterLoginHeaderComponent.prototype.getNavList = function (navListItem) {
        this.navList = navListItem;
    };
    AfterLoginHeaderComponent.prototype.logoutUser = function () {
        this.AuthenticationService.logout();
        this.data.openSnackBar("logged out successfully", "OK");
    };
    AfterLoginHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(851),
            styles: [__webpack_require__(835)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */], __WEBPACK_IMPORTED_MODULE_2_app_services_authentication_service__["a" /* AuthenticationService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_data_service__["a" /* Data */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], AfterLoginHeaderComponent);
    return AfterLoginHeaderComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/headerLayout.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CandidateRegisterComponent = (function () {
    function CandidateRegisterComponent() {
    }
    CandidateRegisterComponent.prototype.ngOnInit = function () {
    };
    CandidateRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-candidate-register',
            template: __webpack_require__(852),
            styles: [__webpack_require__(836)]
        }), 
        __metadata('design:paramtypes', [])
    ], CandidateRegisterComponent);
    return CandidateRegisterComponent;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/candidate-register.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CandidateSearchComponent = (function () {
    function CandidateSearchComponent() {
    }
    CandidateSearchComponent.prototype.ngOnInit = function () {
    };
    CandidateSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-candidate-search',
            template: __webpack_require__(853),
            styles: [__webpack_require__(837)]
        }), 
        __metadata('design:paramtypes', [])
    ], CandidateSearchComponent);
    return CandidateSearchComponent;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/candidate-search.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uidetails_service__ = __webpack_require__(269);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(route, data, uiDetails, router) {
        this.route = route;
        this.data = data;
        this.uiDetails = uiDetails;
        this.router = router;
        // this.dataByRole=JSON.stringify(this.data.storage);
        //  this.title=this.dataByRole;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tokenVerification = JSON.parse(localStorage.getItem('currentUser'))["token"];
        this.uiDetails.getMenuDetails(tokenVerification)
            .subscribe(function (role) {
            if (role["success"]) {
                _this.title = role["object"].role;
            }
            else {
                tokenVerification = null;
                localStorage.removeItem('currentUser');
                _this.router.navigate(['/login']);
                _this.data.openSnackBar(role["message"], 'Ok');
            }
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(854),
            styles: [__webpack_require__(838)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* Data */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_uidetails_service__["a" /* UiDetails */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_uidetails_service__["a" /* UiDetails */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/dashboard.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventPostComponent = (function () {
    function EventPostComponent() {
    }
    EventPostComponent.prototype.ngOnInit = function () {
    };
    EventPostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-event-post',
            template: __webpack_require__(856),
            styles: [__webpack_require__(840)]
        }), 
        __metadata('design:paramtypes', [])
    ], EventPostComponent);
    return EventPostComponent;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/event-post.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobPostComponent = (function () {
    function JobPostComponent() {
    }
    JobPostComponent.prototype.ngOnInit = function () {
    };
    JobPostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-job-post',
            template: __webpack_require__(857),
            styles: [__webpack_require__(841)]
        }), 
        __metadata('design:paramtypes', [])
    ], JobPostComponent);
    return JobPostComponent;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/job-post.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginLayoutComponent = (function () {
    function LoginLayoutComponent(JsonDataService) {
        this.JsonDataService = JsonDataService;
        this.languages = [];
    }
    LoginLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        // getting languages form json file
        this.JsonDataService.getJsonData().subscribe(function (resJsonData) { return _this.getdata(resJsonData); });
    };
    LoginLayoutComponent.prototype.getdata = function (jsonData) {
        this.languages = jsonData;
    };
    LoginLayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-layout',
            template: __webpack_require__(858),
            styles: [__webpack_require__(842)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _a) || Object])
    ], LoginLayoutComponent);
    return LoginLayoutComponent;
    var _a;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/login-layout.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_uidetails_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_data_service__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var LoginComponent = (function () {
    function LoginComponent(fb, emailservice, JsonDataService, snackBar, viewContainerRef, router, route, authenticationService, uiDetails, data) {
        this.emailservice = emailservice;
        this.JsonDataService = JsonDataService;
        this.snackBar = snackBar;
        this.viewContainerRef = viewContainerRef;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.uiDetails = uiDetails;
        this.data = data;
        this.candidates = [];
        this.user = {};
        this.menuLinks = [];
        // getting login form data
        this.userForm = fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern("[A-Za-z0-9.@!$*&]{6,}")]]
        });
    }
    // on login submit
    LoginComponent.prototype.onSubmit = function () {
    };
    LoginComponent.prototype.ngOnInit = function () {
        // if (localStorage.getItem('currentUser')) {
        //   this.redirect();
        // }
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.router.navigate(['/forgotPassword']);
    };
    LoginComponent.prototype.verifyEmail = function () {
        this.router.navigate(['/verifyEmail']);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var value = this.userForm.value;
        this.authenticationService.login(value["email"], value["password"])
            .subscribe(function (data) {
            _this.data.openSnackBar(data["message"], 'Ok');
            _this.router.navigate(['/home']);
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.redirect = function () {
        this.router.navigate(['/home']);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(859),
            styles: [__webpack_require__(843)],
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSnackBar */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__services_uidetails_service__["a" /* UiDetails */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_uidetails_service__["a" /* UiDetails */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* Data */]) === 'function' && _k) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/login.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyEmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var VerifyEmailComponent = (function () {
    function VerifyEmailComponent(fb, emailservice, JsonDataService, data, viewContainerRef, router) {
        this.emailservice = emailservice;
        this.JsonDataService = JsonDataService;
        this.data = data;
        this.viewContainerRef = viewContainerRef;
        this.router = router;
        this.user = [];
        // getting login form data
        this.userForm = fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
        });
    }
    VerifyEmailComponent.prototype.ngOnInit = function () { };
    //snackBar for notification
    // verify user if already exist or not for registration
    VerifyEmailComponent.prototype.verifyUserRegistration = function () {
        var _this = this;
        if (this.user.length == 0) {
            //console.log(this.candidates);
            this.infoobj = {
                'to': this.userForm.value.email,
                'subject': "Email verification",
                'redirect': "http://localhost:3000/register",
                'mailBody': "Please Click on this link to verify your Email"
            };
            this.emailservice.postdata(this.infoobj).subscribe(function (data) { return _this.postobject = data; }, function (error) { return [_this.data.openSnackBar('VERIFICATION MAIL SENT', 'Please Check your MAIL'),
                _this.timer = setTimeout(function () { return _this.router.navigate(['/login']); }, 500)]; });
        }
        else {
            this.data.openSnackBar('User already Exist', 'Please Login');
            this.timer = setTimeout(function () { return _this.router.navigate(['/login']); }, 500);
        }
    };
    // on create account submit
    VerifyEmailComponent.prototype.onVerifyLink = function () {
        var _this = this;
        this.JsonDataService.getEmail(this.userForm.value.email).subscribe(function (resJsonData) { return [
            _this.user = resJsonData, _this.verifyUserRegistration()]; });
    };
    VerifyEmailComponent.prototype.onBack = function () {
        this.router.navigate(['/login']);
    };
    VerifyEmailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(862),
            styles: [__webpack_require__(846)],
            providers: [__WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__["a" /* JsonDataService */]]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_email_service__["a" /* EmailService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* Data */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _f) || Object])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/verify-email.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// auhentication gaurd if without login user will try to access differnt menu links navigate it to login page
var AuthGuard = (function () {
    function AuthGuard(router, data) {
        this.router = router;
        this.data = data;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            //logged in user return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        //this.data.openSnackBar('Please Login!!',"OK");
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* Data */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/auth.guard.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacementRegisterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {CandidateRegister} from '../modal/candidate-register.modal';
var PlacementRegisterService = (function () {
    function PlacementRegisterService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.url = 'http://localhost:3001/CandidateRegister';
    }
    PlacementRegisterService.prototype.add = function (userdata) {
        this.http
            .post(this.url, JSON.stringify({ Name: userdata.get('nameControl').value, Gender: userdata.get('genderControl').value, Email: userdata.get('emailControl').value, Password: userdata.get('passwordControl').value, MobileNo: userdata.get('mobileControl').value, Role: userdata.get('roleControl').value, Profession: userdata.get('professionControl').value, Location: userdata.get('pincodeControl').value, PlacementCenter: userdata.get('placementControl').value, Status: userdata.get('statusControl').value, Language: userdata.get('languageControl').value }), { headers: this.headers })
            .toPromise()
            .then(function (res) { res.json().data; })
            .catch(this.handleError);
        return true;
    };
    PlacementRegisterService.prototype.handleError = function (error) {
        return false;
    };
    PlacementRegisterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], PlacementRegisterService);
    return PlacementRegisterService;
    var _a;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/placementRegister.service.js.map

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 553;


/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(728);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/main.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_layout_login_layout_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_about_us_about_us_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_candidate_search_candidate_search_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_candidate_register_candidate_register_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_event_post_event_post_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_job_post_job_post_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_verify_email_verify_email_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_registration_admin_registration_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_guard__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_afterLogin_registration_layout_headerLayout_headerLayout_component__ = __webpack_require__(471);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














// routes
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'login-layout', component: __WEBPACK_IMPORTED_MODULE_3__components_login_layout_login_layout_component__["a" /* LoginLayoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_auth_guard__["a" /* AuthGuard */]] },
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_13__components_afterLogin_registration_layout_headerLayout_headerLayout_component__["a" /* AfterLoginHeaderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'aboutUs', component: __WEBPACK_IMPORTED_MODULE_4__components_about_us_about_us_component__["a" /* AboutUsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'candidateRegister', component: __WEBPACK_IMPORTED_MODULE_7__components_candidate_register_candidate_register_component__["a" /* CandidateRegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'candidateSearch', component: __WEBPACK_IMPORTED_MODULE_6__components_candidate_search_candidate_search_component__["a" /* CandidateSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'eventPost', component: __WEBPACK_IMPORTED_MODULE_8__components_event_post_event_post_component__["a" /* EventPostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'jobPost', component: __WEBPACK_IMPORTED_MODULE_9__components_job_post_job_post_component__["a" /* JobPostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__components_admin_registration_admin_registration_component__["a" /* AdminRegistrationComponent */] },
            { path: 'register/:title', component: __WEBPACK_IMPORTED_MODULE_11__components_admin_registration_admin_registration_component__["a" /* AdminRegistrationComponent */] },
            { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'verifyEmail', component: __WEBPACK_IMPORTED_MODULE_10__components_verify_email_verify_email_component__["a" /* VerifyEmailComponent */] }
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
;
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/app-routing.module.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.loading = true;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.doLogOut = function () {
        this.authService.logout();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(847),
            styles: [__webpack_require__(831)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/app.component.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_md2__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_about_us_about_us_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_candidate_register_candidate_register_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_candidate_search_candidate_search_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_employers_employers_component__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_event_post_event_post_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_job_post_job_post_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_login_layout_login_layout_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_verify_email_verify_email_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_registration_admin_registration_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_authentication_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_placementRegister_service__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_auth_guard__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_app_services_email_service__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_app_services_json_data_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_app_services_uidetails_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_app_services_data_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_google_maps_core__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_login_registration_headerLayout_login_header_login_header_component__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_login_registration_headerLayout_login_footer_login_footer_component__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_afterLogin_registration_layout_headerLayout_headerLayout_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_afterLogin_registration_layout_footerLayout_footer_component__ = __webpack_require__(729);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["FlexLayoutModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_md2__["a" /* Md2Module */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_28_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAFrDXmfEyDR7DPrwGJYtmK4fAyXGgRic4'
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_22__services_placementRegister_service__["a" /* PlacementRegisterService */], __WEBPACK_IMPORTED_MODULE_21__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_23__services_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_25_app_services_json_data_service__["a" /* JsonDataService */], __WEBPACK_IMPORTED_MODULE_24_app_services_email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_26_app_services_uidetails_service__["a" /* UiDetails */], __WEBPACK_IMPORTED_MODULE_27_app_services_data_service__["a" /* Data */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_login_layout_login_layout_component__["a" /* LoginLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_candidate_register_candidate_register_component__["a" /* CandidateRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_candidate_search_candidate_search_component__["a" /* CandidateSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_employers_employers_component__["a" /* EmployersComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_event_post_event_post_component__["a" /* EventPostComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_job_post_job_post_component__["a" /* JobPostComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_admin_registration_admin_registration_component__["a" /* AdminRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_login_registration_headerLayout_login_header_login_header_component__["a" /* LoginHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_login_registration_headerLayout_login_footer_login_footer_component__["a" /* LoginFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_afterLogin_registration_layout_headerLayout_headerLayout_component__["a" /* AfterLoginHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_afterLogin_registration_layout_footerLayout_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_admin_registration_admin_registration_component__["a" /* AdminRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_verify_email_verify_email_component__["a" /* VerifyEmailComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/app.module.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(850),
            styles: [__webpack_require__(834)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/footer.component.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployersComponent = (function () {
    function EmployersComponent() {
    }
    EmployersComponent.prototype.ngOnInit = function () {
    };
    EmployersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employers',
            template: __webpack_require__(855),
            styles: [__webpack_require__(839)]
        }), 
        __metadata('design:paramtypes', [])
    ], EmployersComponent);
    return EmployersComponent;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/employers.component.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginFooterComponent = (function () {
    function LoginFooterComponent() {
    }
    LoginFooterComponent.prototype.ngOnInit = function () {
    };
    LoginFooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-footer',
            template: __webpack_require__(860),
            styles: [__webpack_require__(844)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginFooterComponent);
    return LoginFooterComponent;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/login-footer.component.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginHeaderComponent = (function () {
    function LoginHeaderComponent(JsonDataService) {
        this.JsonDataService = JsonDataService;
        this.languages = [];
    }
    LoginHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // getting languages form json file
        this.JsonDataService.getJsonData().subscribe(function (resJsonData) { return _this.getdata(resJsonData); });
    };
    LoginHeaderComponent.prototype.getdata = function (jsonData) {
        this.languages = jsonData;
    };
    LoginHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-header',
            template: __webpack_require__(861),
            styles: [__webpack_require__(845)],
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_json_data_service__["a" /* JsonDataService */]) === 'function' && _a) || Object])
    ], LoginHeaderComponent);
    return LoginHeaderComponent;
    var _a;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/login-header.component.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/environment.js.map

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "md-card\r\n{\r\n    margin: auto;\r\n    width:50%;\r\n    margin-top:20px; \r\n    background-color: #f2f2f2;\r\n    \r\n}\r\nh2{\r\n   color: #0044cc;\r\n   margin: 0px;\r\n   padding: 0px;\r\n}\r\n.full-width\r\n{\r\n    width:100%;\r\n}\r\n\r\ntable\r\n{\r\n    margin: auto;\r\n    width:80%;\r\n}\r\ntr\r\n{\r\n    width: 100%;\r\n    height:55px;\r\n}\r\n\r\n\r\n\r\ntd:nth-child(1)\r\n{\r\n    color:black;\r\n    padding-right: 20px;\r\n    border:-100px;\r\n    width:30px;\r\n}\r\nmd-checkbox:after,md-checkbox:before\r\n{\r\n    content: \" \";\r\n}\r\n.text-center\r\n{\r\n    text-align: center;\r\n}\r\n.registerButton\r\n{\r\nfont-size: 25px;    \r\ncolor:black;\r\nbackground: lightgrey;\r\n}\r\n.pincodeButton\r\n{\r\n font-size: 10px;    \r\ncolor:black;\r\nbackground: lightgrey;\r\n}\r\n\r\n@media (max-width: 600px){\r\n\r\n.title{\r\n    font-size: 20px;\r\n}\r\nmd-card{\r\n    width: 80%;\r\n}\r\n\r\n\r\n}\r\n\r\n@media (max-width: 800px) and (min-width:610px){\r\n\r\n.title{\r\n    font-size: 20px;\r\n}\r\nmd-card{\r\n    width: 90%;\r\n}\r\n\r\n\r\n}\r\nsmall{\r\n    \r\n    color:red;\r\n}\r\n\r\nsmall:before\r\n{\r\n     content:'\\21EA';\r\n     -webkit-animation: blinker 1s linear infinite;\r\n             animation: blinker 1s linear infinite;\r\n}\r\n@-webkit-keyframes blinker {  \r\n    \r\n  50% { opacity: 0;\r\n   }\r\n}\r\n@keyframes blinker {  \r\n    \r\n  50% { opacity: 0;\r\n   }\r\n}\r\n.sebm-google-map-container {\r\n  height: 300px;\r\n  \r\n}"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = ".copyright {\r\n   \r\n  position: relative;\r\n  \r\n  bottom: 0;\r\n  text-align: center;\r\n}\r\n   \r\n  \r\n\r\n\r\n.copyright p {\r\n    font-size: 15px;\r\n    padding: 0px;\r\n    margin: auto;\r\n}\r\n\r\n"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n\r\nmd-toolbar {\r\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\r\n}\r\n\r\n\r\n/*for smaller screens*/\r\n\r\n@media (min-width: 10px) {\r\n    .toolbar {\r\n        font-size: 13px;\r\n    }\r\n    .navItem {\r\n        font-size: 13px;\r\n    }\r\n    md-sidenav {\r\n        width: 150px;\r\n    }\r\n}\r\n\r\n\r\n/*for Medium screens*/\r\n\r\n@media (min-width: 480px) {\r\n    .toolbar {\r\n        font-size: 15px;\r\n    }\r\n    .navItem {\r\n        font-size: 15px;\r\n    }\r\n    md-sidenav {\r\n        width: 200px;\r\n    }\r\n}\r\n\r\n\r\n/*\r\nfor large screens*/\r\n\r\n@media (min-width: 768px) {\r\n    .toolbar {\r\n        font-size: 22px;\r\n    }\r\n    .navItem {\r\n        font-size: 18px;\r\n    }\r\n    md-sidenav {\r\n        width: 250px;\r\n    }\r\n}\r\n.formIcons {\r\n    line-height: unset;\r\n}\r\n\r\n.mainHeader {\r\n    top: 0px;\r\n    position: fixed;\r\n    z-index: 1000;\r\n}\r\n\r\n.langBar {\r\n   \r\n    background-color: #EEEEEE;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.langBtn {\r\n    color: white;\r\n    color: #616161;\r\n    margin: 1px;\r\n}\r\n\r\n.logo {\r\n    text-align: center;\r\n    margin: auto;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    color: whitesmoke;\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none\r\n}\r\n\r\n.center {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\nmd-select {\r\n    color: red;\r\n}\r\n\r\n.logo:hover {\r\n    color: white;\r\n}\r\n\r\n.footer {\r\n    margin-top: 100px;\r\n    opacity: .9;\r\n    display: block;\r\n    max-height: unset;\r\n    height: 150px;\r\n    /*display: block;*/\r\n    /*position: relative;*/\r\n}\r\n\r\n.footerHead {\r\n    margin: auto;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.footerLinks {\r\n    color: white;\r\n}\r\n\r\n.footerLinks ul li a {\r\n    color: white;\r\n    font-size: 15px;\r\n    text-decoration: unset;\r\n}\r\n\r\n.footerLinks ul li {\r\n    list-style: none;\r\n}\r\n\r\n.copyright {\r\n    display: block;\r\n}\r\n\r\n.copyright p {\r\n    font-size: 15px;\r\n    padding: 0px;\r\n    margin: auto;\r\n}\r\n.material-icons{\r\n    font-weight: normal;\r\n    padding-right: 8px;\r\n}\r\nmd-nav-list{\r\n    width: 200px;\r\n}\r\n\r\n\r\n\r\n/*for smaller screens*/\r\n\r\n@media (min-width: 10px) {}\r\n\r\n@media (min-width: 370px) {}\r\n\r\n\r\n/*for Medium screens*/\r\n\r\n@media (min-width: 480px) {}\r\n\r\n\r\n/*\r\nfor large screens*/\r\n\r\n@media (min-width: 768px) {}\r\n\r\n\r\n/*\r\n@media (min-height: 10px) {\r\n.page-footer {\r\nmargin: 0px;\r\ntext-align: center;\r\n}\r\n}\r\n\r\n@media (min-height: 1000px) {\r\n.page-footer {\r\nmargin: 0px;\r\nposition: absolute;\r\nbottom: 0px;\r\ntext-align: center;\r\nwidth: 100%;\r\n}\r\n}*/"

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 842:
/***/ (function(module, exports) {

module.exports = ".formIcons {\r\n    line-height: unset;\r\n}\r\n\r\n.mainHeader {\r\n    top: 0px;\r\n    position: fixed;\r\n    z-index: 1000;\r\n}\r\n\r\n.langBar {\r\n    margin-top: 64px;\r\n    background-color: #EEEEEE;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.langBtn {\r\n    color: white;\r\n    color: #616161;\r\n    margin: 1px;\r\n}\r\n\r\n.logo {\r\n    text-align: center;\r\n    margin: auto;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    color: whitesmoke;\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none\r\n}\r\n\r\n.center {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\nmd-select {\r\n    color: red;\r\n}\r\n\r\n.logo:hover {\r\n    color: white;\r\n}\r\n\r\n.footer {\r\n    opacity: .9;\r\n    display: block;\r\n    max-height: unset;\r\n    height: 150px;\r\n    /*display: block;*/\r\n    /*position: relative;*/\r\n}\r\n\r\n.footerHead {\r\n    margin: auto;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.footerLinks {\r\n    /*padding-left: 30%;*/\r\n    color: white;\r\n}\r\n\r\n.footerLinks ul li a {\r\n    color: white;\r\n    font-size: 15px;\r\n    text-decoration: unset;\r\n}\r\n\r\n.footerLinks ul li {\r\n    list-style: none;\r\n}\r\n\r\n.copyright {\r\n    display: block;\r\n}\r\n\r\n.copyright p {\r\n    font-size: 15px;\r\n    padding: 0px;\r\n    margin: auto;\r\n}\r\n\r\n\r\n/*for smaller screens*/\r\n\r\n@media (min-width: 10px) {}\r\n\r\n@media (min-width: 370px) {}\r\n\r\n\r\n/*for Medium screens*/\r\n\r\n@media (min-width: 480px) {}\r\n\r\n\r\n/*\r\nfor large screens*/\r\n\r\n@media (min-width: 768px) {}\r\n\r\n\r\n/*\r\n@media (min-height: 10px) {\r\n.page-footer {\r\nmargin: 0px;\r\ntext-align: center;\r\n}\r\n}\r\n\r\n@media (min-height: 1000px) {\r\n.page-footer {\r\nmargin: 0px;\r\nposition: absolute;\r\nbottom: 0px;\r\ntext-align: center;\r\nwidth: 100%;\r\n}\r\n}*/"

/***/ }),

/***/ 843:
/***/ (function(module, exports) {

module.exports = "md-card {\r\n    width: 500px;\r\n}\r\n\r\n.formIcons {\r\n    padding-bottom: 30px;\r\n    color: gray;\r\n}\r\n\r\nform {\r\n    font-size: 17px;\r\n}\r\n\r\nbutton {\r\n    font-size: 15px;\r\n}\r\n\r\nmd-card-title {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    font-size: 25px;\r\n}\r\n\r\n.full-width {\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.errorStyle {\r\n    position: absolute;\r\n    font-size: 12px;\r\n    -webkit-transition: all .7s;\r\n    transition: all .7s;\r\n    color: #F44336;\r\n}\r\n\r\n.googleBtn {\r\n    background-color: #F44336;\r\n    color: white;\r\n}\r\n\r\n.fbBtn {\r\n    background-color: #3f51b5;\r\n    color: white;\r\n}"

/***/ }),

/***/ 844:
/***/ (function(module, exports) {

module.exports = ".formIcons {\r\n    line-height: unset;\r\n}\r\n\r\n\r\n.center {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\nmd-select {\r\n    color: red;\r\n}\r\n\r\n.footer {\r\n    margin-top: 0px;\r\n    bottom:0;\r\n    left: 0;\r\n    \r\n    opacity: .9;\r\n    display: block;\r\n    max-height: unset;\r\n    height: 150px;\r\n    /*display: block;*/\r\n    /*position: relative;*/\r\n}\r\n\r\n.footerHead {\r\n    margin: auto;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.footerLinks {\r\n    color: white;\r\n}\r\n\r\n.footerLinks ul li a {\r\n    color: white;\r\n    font-size: 15px;\r\n    text-decoration: unset;\r\n}\r\n\r\n.footerLinks ul li {\r\n    list-style: none;\r\n}\r\n\r\n.copyright {\r\n    display: block;\r\n}\r\n\r\n.copyright p {\r\n    font-size: 15px;\r\n    padding: 0px;\r\n    margin: auto;\r\n}\r\n\r\n\r\n/*for smaller screens*/\r\n\r\n@media (min-width: 10px) {}\r\n\r\n@media (min-width: 370px) {}\r\n\r\n\r\n/*for Medium screens*/\r\n\r\n@media (min-width: 480px) {}\r\n\r\n\r\n/*\r\nfor large screens*/\r\n\r\n@media (min-width: 768px) {}\r\n\r\n\r\n/*\r\n@media (min-height: 10px) {\r\n.page-footer {\r\nmargin: 0px;\r\ntext-align: center;\r\n}\r\n}\r\n\r\n@media (min-height: 1000px) {\r\n.page-footer {\r\nmargin: 0px;\r\nposition: absolute;\r\nbottom: 0px;\r\ntext-align: center;\r\nwidth: 100%;\r\n}\r\n}*/"

/***/ }),

/***/ 845:
/***/ (function(module, exports) {

module.exports = ".formIcons {\r\n    line-height: unset;\r\n}\r\n\r\n.mainHeader {\r\n    top: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    position: fixed;\r\n    z-index: 1000;\r\n}\r\n\r\n.langBar {\r\n    background-color: #EEEEEE;\r\n    position: relative;\r\n    top: 60px;\r\n    left: 0px;\r\n    right: 0px;\r\n    text-align: center;\r\n}\r\n\r\n.langBtn {\r\n    color: white;\r\n    color: #616161;\r\n    margin: 1px;\r\n}\r\n\r\n.logo {\r\n    text-align: center;\r\n    margin: auto;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    color: whitesmoke;\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none\r\n}\r\n\r\n.center {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\nmd-select {\r\n    color: red;\r\n}\r\n\r\n.logo:hover {\r\n    color: white;\r\n}\r\n\r\n\r\n/*for smaller screens*/\r\n\r\n@media (min-width: 10px) {}\r\n\r\n@media (min-width: 370px) {}\r\n\r\n\r\n/*for Medium screens*/\r\n\r\n@media (min-width: 480px) {}\r\n\r\n\r\n/*\r\nfor large screens*/\r\n\r\n@media (min-width: 768px) {}\r\n\r\n\r\n/*\r\n@media (min-height: 10px) {\r\n.page-footer {\r\nmargin: 0px;\r\ntext-align: center;\r\n}\r\n}\r\n\r\n@media (min-height: 1000px) {\r\n.page-footer {\r\nmargin: 0px;\r\nposition: absolute;\r\nbottom: 0px;\r\ntext-align: center;\r\nwidth: 100%;\r\n}\r\n}*/"

/***/ }),

/***/ 846:
/***/ (function(module, exports) {

module.exports = "md-card {\r\n    width: 500px;\r\n}\r\n\r\n.formIcons {\r\n    padding-bottom: 30px;\r\n    color: gray;\r\n}\r\n\r\nform {\r\n    font-size: 17px;\r\n}\r\n\r\nbutton {\r\n    font-size: 15px;\r\n}\r\n\r\nmd-card-title {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n    font-size: 25px;\r\n}\r\n\r\n.full-width {\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.errorStyle {\r\n    position: absolute;\r\n    font-size: 12px;\r\n    -webkit-transition: all .7s;\r\n    transition: all .7s;\r\n    color: #F44336;\r\n}\r\n\r\n.googleBtn {\r\n    background-color: #F44336;\r\n    color: white;\r\n}\r\n\r\n.fbBtn {\r\n    background-color: #3f51b5;\r\n    color: white;\r\n}"

/***/ }),

/***/ 847:
/***/ (function(module, exports) {

module.exports = "<!--routing outlet-->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 848:
/***/ (function(module, exports) {

module.exports = "<p>\r\n    About us\r\n</p>\r\n<app-footer></app-footer>"

/***/ }),

/***/ 849:
/***/ (function(module, exports) {

module.exports = "\r\n<app-login-header *ngIf=\"title=='Coordinator' || title=='Supervisor'\"></app-login-header>\r\n<app-header *ngIf=\"title=='Admin'\"></app-header>\r\n<md-card>\r\n <span mdTooltip=\"Register Admin or Coordinator or Supervisor\" mdTooltipPosition=\"above\">\r\n  <h2 class=\"text-center title\">{{title}} Registration</h2>\r\n </span>\r\n\r\n  <form class=\"registrationForm\" [formGroup]=\"userForm\" (ngSubmit)=\"save(userForm)\">\r\n    <table>\r\n      <tr>\r\n        <!-- Name icon-->\r\n        <td>\r\n          <i class=\"material-icons\">account_box</i>\r\n        </td>\r\n        <!--Name -->\r\n        <td colspan=\"2\">\r\n          <md-input-container class=\"full-width\">\r\n            <input formControlName=\"nameControl\" mdInput placeholder=\"Name\">\r\n          </md-input-container>\r\n          <!-- Name required validation-->\r\n          <small *ngIf=\"userForm.get('nameControl').hasError('required') && userForm.get('nameControl').touched\">\r\n          Name is required\r\n        </small>\r\n          <!-- Name pattern validation-->\r\n          <small *ngIf=\"userForm.get('nameControl').hasError('pattern') && userForm.get('nameControl').touched\">\r\n          Name should be more than 2 alphabets\r\n        </small>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <!-- Gender icon-->\r\n        <td>\r\n          <i class=\"material-icons\">wc</i>\r\n        </td>\r\n        <!-- Gender radio buttons-->\r\n        <td colspan=\"2\">\r\n          <md-radio-group formControlName=\"genderControl\">\r\n            <md-radio-button value=\"male\">Male</md-radio-button>\r\n            <md-radio-button value=\"female\">female</md-radio-button>\r\n          </md-radio-group><br>\r\n          <!-- Name required validation-->\r\n          <small *ngIf=\"userForm.get('genderControl').hasError('required') && userForm.get('genderControl').touched\">\r\n          Gender is required\r\n        </small>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <!-- Email icon-->\r\n        <td>\r\n          <i class=\"material-icons\">email</i>\r\n        </td>\r\n        <!-- Email-->\r\n        <td colspan=\"2\">\r\n          <md-input-container class=\"full-width\">\r\n            <input formControlName=\"emailControl\" type=\"text\" mdInput placeholder=\"Email\">\r\n          </md-input-container>\r\n          <!-- Email required validation-->\r\n          <small *ngIf=\"userForm.get('emailControl').hasError('required') && userForm.get('emailControl').touched\">\r\n          Email is required\r\n        </small>\r\n          <!-- Email pattern validation-->\r\n          <small *ngIf=\"userForm.get('emailControl').hasError('pattern') && userForm.get('emailControl').touched\">\r\n          Invalid email\r\n        </small>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <!-- Password icon -->\r\n        <td>\r\n          <i class=\"material-icons\">lock</i>\r\n        </td>\r\n        <!-- Password-->\r\n        <td colspan=\"2\">\r\n          <md-input-container class=\"full-width\">\r\n            <input formControlName=\"passwordControl\" mdInput minlength=\"8\" placeholder=\"Password\" type=\"password\">\r\n          </md-input-container>\r\n          <!-- Password required validation-->\r\n          <small *ngIf=\"userForm.get('passwordControl').hasError('required') && userForm.get('passwordControl').touched\">\r\n          Password is required\r\n        </small>\r\n         <!--Password length validation-->\r\n          <small *ngIf=\"userForm.get('passwordControl').hasError('minlength') && userForm.get('passwordControl').touched\">\r\n          Password should more than 7 character\r\n        </small> \r\n          <!-- Matching password  validation-->\r\n            <small *ngIf=\"(!userForm.get('passwordControl').valid) && !userForm.get('passwordControl').hasError('required') &&!userForm.get('confirmPasswordControl').hasError('required') && userForm.get('passwordControl').touched\">\r\n          Mismatch Password\r\n        </small>\r\n          \r\n\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <!-- Confirm password-->\r\n        <td>\r\n          <i class=\"material-icons\">lock</i>\r\n        </td>\r\n        <!-- Confirm password-->\r\n        <td colspan=\"2\">\r\n          <md-input-container class=\"full-width\">\r\n            <input formControlName=\"confirmPasswordControl\" mdInput minlength=\"8\" placeholder=\"Confirm Password\" type=\"password\">\r\n          </md-input-container>\r\n          <!-- Confirm password required validation-->\r\n          <small *ngIf=\"userForm.get('confirmPasswordControl').hasError('required') && userForm.get('confirmPasswordControl').touched\">\r\n          Confirm Password is required \r\n        </small>\r\n             <!--Confirm Password length validation-->\r\n          <small *ngIf=\"userForm.get('confirmPasswordControl').hasError('minlength') && userForm.get('confirmPasswordControl').touched\">\r\n          Password should more than 7 character\r\n        </small>\r\n          <!-- Matching password  validation-->\r\n          <small *ngIf=\"(!userForm.get('confirmPasswordControl').valid) && !userForm.get('confirmPasswordControl').hasError('required') &&!userForm.get('passwordControl').hasError('required') && userForm.get('confirmPasswordControl').touched\">\r\n          Mismatch Password\r\n        </small>\r\n        \r\n      \r\n\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <!-- Mobile icon-->\r\n        <td>\r\n          <i class=\"material-icons\">phone</i>\r\n        </td>\r\n        <!-- Mobile number-->\r\n        <td colspan=\"2\">\r\n          <md-input-container class=\"full-width\">\r\n            <input formControlName=\"mobileControl\" mdInput placeholder=\"Mobile Number\" >\r\n          </md-input-container>\r\n          <!-- Mobile number required validation-->\r\n          <small *ngIf=\"userForm.get('mobileControl').hasError('required') && userForm.get('mobileControl').touched\">\r\n          Mobile Number is required\r\n        </small>\r\n          <!-- Mobile number pattern validation-->\r\n          <small *ngIf=\"userForm.get('mobileControl').hasError('pattern') && userForm.get('mobileControl').touched\">\r\n          Mobile Number should be 10 digit\r\n        </small>\r\n        </td>\r\n      </tr>\r\n         <tr [hidden]=\"hiddenParticularRole\">\r\n        <!-- Role icon-->\r\n        <td>\r\n          <i class=\"material-icons\">supervisor_account</i>\r\n        </td>\r\n        <!-- Role  -->\r\n        <td>\r\n          <md-input-container class=\"full-width\" >\r\n            <input formControlName=\"roleControl\" mdInput placeholder=\"Role\" [readonly]=\"disabled\">\r\n          </md-input-container>\r\n        </td>\r\n      </tr>\r\n      <tr [hidden]=\"hiddenRole\">\r\n        <!-- Role icon-->\r\n        <td>\r\n          <i class=\"material-icons\">supervisor_account</i>\r\n        </td>\r\n        <!-- Role  -->\r\n        <td>\r\n\r\n          <md2-select  formControlName=\"roleControl\" placeholder=\"Role\" [multiple]=\"true\" #selectMultipleControl >\r\n            <md2-option *ngFor=\"let currentRole of roles\" value=\"{{currentRole}}\" >{{currentRole}}</md2-option>\r\n          </md2-select>\r\n\r\n          <!-- Role required validation-->\r\n          <small *ngIf=\"userForm.get('roleControl').hasError('required') && userForm.get('roleControl').touched\">\r\n         Role is required\r\n        </small>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <!-- Profession icon-->\r\n        <td>\r\n          <i class=\"material-icons\">layers</i>\r\n        </td>\r\n        <!-- Profession-->\r\n        <td>\r\n          <md2-select formControlName=\"professionControl\" placeholder=\"Profession\" [multiple]=\"true\" #selectMultipleControl>\r\n            <md2-option *ngFor=\"let currentProfession of professions\" value=\"{{currentProfession}}\">{{currentProfession}}</md2-option>\r\n          </md2-select>\r\n\r\n          <!-- Profession required validation-->\r\n          <small *ngIf=\"userForm.get('professionControl').hasError('required') && userForm.get('professionControl').touched\">\r\n          Profession is required\r\n        </small>\r\n        </td>\r\n\r\n      </tr>\r\n      <tr>\r\n        <!-- PIN code icon-->\r\n        <td>\r\n          <i class=\"material-icons\">my_location</i>\r\n        </td>\r\n        <!-- PIN code-->\r\n        <td colspan=\"2\">\r\n          <md-input-container class=\"full-width\">\r\n            <input (click)=\"locationDialog.open()\" formControlName=\"locationControl\" mdInput  placeholder=\"Location\">\r\n          </md-input-container>\r\n          \r\n         \r\n         <md2-dialog #locationDialog title=\"Give your Location\">\r\n             <button (click)=\"showPincode()\" type=\"button\" class=\"pincodeButton\"  md-button>Pick by pincode</button>\r\n         <button (click)=\"showMap()\" type=\"button\" class=\"pincodeButton\"  md-button>Pick from Map</button>\r\n           <div [hidden]=\"pincodeHidden\">\r\n             <md-input-container >\r\n            <input formControlName=\"pincodeControl\" mdInput  placeholder=\"Pincode\">\r\n          </md-input-container>\r\n          <button type=\"button\" class=\"pincodeButton\" md-button [disabled]=\"!userForm.get('pincodeControl').valid \"  (click)=\"close(locationDialog)\">Get Location</button>\r\n          \r\n           <!-- PIN code required validation-->\r\n          <small *ngIf=\"userForm.get('pincodeControl').hasError('required') && userForm.get('pincodeControl').touched\">\r\n          PIN Code is required\r\n        </small>\r\n          <!-- PIN code pattern validation-->\r\n          <small *ngIf=\"userForm.get('pincodeControl').hasError('pattern') && userForm.get('pincodeControl').touched\">\r\n          PIN Code should be 6 digit\r\n        </small>\r\n          </div>\r\n\r\n          <div [hidden]=\"mapHidden\">\r\n           <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n              <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>\r\n            </sebm-google-map>\r\n         </div><br>\r\n          <small *ngIf=\"userForm.get('locationControl').hasError('required') && userForm.get('locationControl').touched\">\r\n          Location is required\r\n        </small>\r\n         </md2-dialog>\r\n\r\n         \r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <!-- Placement center icon-->\r\n        <td>\r\n          <i class=\"material-icons\">place</i>\r\n        </td>\r\n        <!-- Placement center-->\r\n        <td>\r\n          <md-select formControlName=\"placementControl\" ng-model=\"placementSelect\" #placementCenterId class=\"full-width\" placeholder=\"Placement Center\">\r\n            <md-option *ngFor=\"let center of placementCenters\" value=\"{{center}}\">{{center}}</md-option>\r\n          </md-select>\r\n          <!-- Placement center required validation-->\r\n          <small *ngIf=\"userForm.get('placementControl').hasError('required') && userForm.get('placementControl').touched\">\r\n          Placement is required\r\n        </small>\r\n        </td>\r\n\r\n      </tr>\r\n      <tr>\r\n        <!-- Status icon-->\r\n        <td>\r\n          <i class=\"material-icons\">local_activity</i>\r\n        </td>\r\n        <!-- Status-->\r\n        <td>\r\n          <md-select formControlName=\"statusControl\" ng-model=\"statusSelect\" #statusId class=\"full-width\" placeholder=\"Status\">\r\n            <md-option *ngFor=\"let status of status\" value=\"{{status}}\">{{status}}</md-option>\r\n          </md-select>\r\n          <!-- Status required validation-->\r\n          <small *ngIf=\"userForm.get('statusControl').hasError('required') && userForm.get('statusControl').touched\">\r\n         Status is required\r\n        </small>\r\n        </td>\r\n\r\n      </tr>\r\n      <tr>\r\n        <!-- Language icon-->\r\n        <td>\r\n          <i class=\"material-icons\">language</i>\r\n        </td>\r\n        <!-- Language-->\r\n        <td>\r\n          <md2-select  formControlName=\"languageControl\" placeholder=\"Language\" [multiple]=\"true\" #selectMultipleControl>\r\n            <md2-option *ngFor=\"let language of languages\" value=\"{{language}}\">{{language}}\r\n\r\n            </md2-option>\r\n          </md2-select>\r\n          <!-- Name required validation-->\r\n          <small *ngIf=\"userForm.get('languageControl').hasError('required') && userForm.get('languageControl').touched\">\r\n          Language is required\r\n        </small>\r\n        </td>\r\n\r\n      </tr>\r\n      <tr>\r\n        <!-- Register button-->\r\n        <td colspan=\"3\" class=\"text-center\">\r\n          <span mdTooltip=\"All fields are required\" mdTooltipPosition=\"above\">\r\n          <button  md-fab [disabled]=\"!userForm.valid\" type=\"submit\" ><md-icon>check</md-icon></button>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n\r\n    </table>\r\n  </form>\r\n\r\n</md-card>\r\n<app-footer *ngIf=\"title=='Admin'\"></app-footer>\r\n<app-login-footer *ngIf=\"title=='Coordinator' || title=='Supervisor'\"></app-login-footer>"

/***/ }),

/***/ 850:
/***/ (function(module, exports) {

module.exports = "<md-toolbar  color=\"primary\" class=\"copyright\" >\r\n    <p class=\"center\"> © Copyright Samarthya 2017</p>\r\n</md-toolbar>"

/***/ }),

/***/ 851:
/***/ (function(module, exports) {

module.exports = "<!--sidenav and toolbar with content-->\r\n<md-sidenav-container fullscreen>\r\n\r\n    <!--sidenav starts here..-->\r\n    <md-sidenav #sidenav mode=\"over\" opened=\"false\">\r\n\r\n        <!--sidenav toobar-->\r\n        <md-toolbar color=\"primary\" class=\"toolbar\">\r\n            <b>Samarthya</b>\r\n        </md-toolbar>\r\n\r\n        <!--sidenav ites list-->\r\n        <md-nav-list>\r\n          \r\n            <md-list-item *ngFor=\"let navItem of navList\" routerLink={{navItem.path}} routerLinkActive=\"active\" (click)=\"sidenav.toggle()\">\r\n                 <i class=\"material-icons\">{{navItem.icon}}</i>  \r\n                <p class=\"navItem\"> {{navItem.name}}</p>\r\n            </md-list-item>\r\n        </md-nav-list>\r\n    </md-sidenav>\r\n    <!--sidenav ends-->\r\n\r\n    <!--main appbar starts-->\r\n    <md-toolbar color=\"primary\" class=\"toolbar\">\r\n\r\n        <!--sidebar toggle button-->\r\n        <button md-icon-button (click)=\"sidenav.toggle()\" #myButton id=\"sidebarButton\">\r\n                <i class=\"material-icons\">menu</i>\r\n            </button>\r\n        <span><b>Samarthya Placement Portal</b></span>\r\n\r\n        <span class=\"fill-remaining-space\"></span>\r\n\r\n        <!--appbar buttons-->\r\n        <span>\r\n            <!--notification button-->\r\n            <button md-icon-button [mdMenuTriggerFor]=\"menuNotification\">\r\n                 <i class=\"material-icons\">notifications_active</i>  \r\n            </button>\r\n            <md-menu #menuNotification x-position=\"before\">\r\n               <md-list>\r\n                    <md-list-item>\r\n                        <p md-line>No new Notification</p>\r\n                    </md-list-item>\r\n                </md-list>\r\n            </md-menu>\r\n\r\n            <!--user account button-->\r\n            <button md-icon-button [mdMenuTriggerFor]=\"menuAccount\">\r\n                <i class=\"material-icons\">account_circle</i>  \r\n            </button>\r\n            <md-menu class=\"menu\" #menuAccount x-position=\"before\">\r\n                <md-nav-list>\r\n                    <md-list-item>\r\n    \r\n                        <p md-line><b>User</b></p>\r\n                    </md-list-item>\r\n                   \r\n                    <md-list-item>\r\n                         <i class=\"material-icons\">face</i> \r\n                        <p>Profile</p>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                        <i class=\"material-icons\">lock</i> \r\n                        <p >Change Password</p>\r\n                    </md-list-item>\r\n                    <md-list-item (click)=\"logoutUser()\" routerLinkActive=\"active\">\r\n                        <i class=\"material-icons\">power_settings_new</i> \r\n                        <p>Log Out</p>\r\n                    </md-list-item>\r\n                </md-nav-list>\r\n            </md-menu>\r\n        </span>\r\n    </md-toolbar>\r\n    <div class=\"langBar\" fxFlex fxHide.xs>\r\n    <button *ngFor=\"let lang of languages\" title={{lang.name}} class=\"langBtn\" md-button>\r\n   <div> {{lang.nativeName}}</div>\r\n    </button>\r\n</div>\r\n    <!--main appbar starts-->\r\n\r\n    <!--main ceiontent goes here-->\r\n \r\n                <!--routing outlet-->\r\n                <router-outlet></router-outlet>\r\n     \r\n\r\n    <!--add the components tags here....-->\r\n\r\n    <!--main content ends here-->\r\n</md-sidenav-container>\r\n<!--sidenav and toolbar with content ends-->\r\n\r\n"

/***/ }),

/***/ 852:
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Candidate Register page\r\n</p>\r\n<p>\r\n    Coming soon...\r\n</p>\r\n<app-footer></app-footer>"

/***/ }),

/***/ 853:
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Candidate Search page\r\n</p>\r\n<p>\r\n    Coming soon...\r\n</p>\r\n<app-footer></app-footer>"

/***/ }),

/***/ 854:
/***/ (function(module, exports) {

module.exports = "<p>\r\n    {{title}} Dashboard\r\n</p>\r\n<p>\r\n    Coming soon..\r\n</p>\r\n<app-footer></app-footer>"

/***/ }),

/***/ 855:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  employers works!\r\n</p>\r\n<app-footer></app-footer>"

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  event-post works!\r\n</p>\r\n<app-footer></app-footer>"

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  job-post works!\r\n</p>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

module.exports = "<!--Header start-->\r\n<md-toolbar color=\"primary\" class=\"mainHeader\">\r\n    <!--<a href=\"/\">-->\r\n    <p class=\"logo\">Samarthya</p>\r\n    <!--</a>-->\r\n\r\n</md-toolbar>\r\n<div class=\"langBar\" fxFlex fxHide.xs>\r\n    <button *ngFor=\"let lang of languages\" title={{lang.name}} class=\"langBtn\" md-button>\r\n   <div> {{lang.nativeName}}</div>\r\n    </button>\r\n</div>\r\n\r\n<!--RouterLinks for login password reset and candidate register-->\r\n<!--<a routerLink=\"/login\" routerLinkactive=\"active\">LOGIN</a>\r\n    <a routerLink=\"/candidateRegister\" routerLinkactive=\"active\">REG</a>-->\r\n<!--<a routerLink=\"/passwordReset\" routerLinkactive=\"active\">RESET</a>-->\r\n<router-outlet></router-outlet>\r\n\r\n<!--footer starts-->\r\n<md-toolbar color=\"primary\" class=\"footer\" fxLayout=\"column\">\r\n    <div fxFlex=\"50\" class=\"footerHead\">\r\n        <h5>Samarthya</h5>\r\n    </div>\r\n    <div fxFlex></div>\r\n    <div fxFlex=\"50\" class=\"footerLinks\">\r\n        <ul>\r\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">Samarthya Candidate</a></li>\r\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">Samarthya Placement</a></li>\r\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">FAQ</a></li>\r\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">About Us</a></li>\r\n        </ul>\r\n    </div>\r\n</md-toolbar>\r\n<md-toolbar color=\"primary\" class=\"copyright\">\r\n    <p> © Copyright Samarthya 2017</p>\r\n</md-toolbar>"

/***/ }),

/***/ 859:
/***/ (function(module, exports) {

module.exports = "<app-login-header></app-login-header>\r\n<!--login card-->\r\n<md-grid-list cols=\"1\" rowHeight=\"600px\">\r\n    <md-grid-tile>\r\n        <md-card class=\"loginCard\">\r\n            <md-card-title>LOGIN</md-card-title>\r\n            <md-card-content>\r\n\r\n                <form [formGroup]=\"userForm\" (ngSubmit)=\"login()\">\r\n\r\n                    <!--Email input-->\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\r\n                        <div fxFlex>\r\n                            <i class=\"material-icons formIcons\">mail</i>\r\n                        </div>\r\n                        <div fxFlex=\"93\">\r\n                            <md-input-container class=\"full-width\">\r\n                                <input mdInput formControlName=\"email\" type=\"text\" class=\"validate\" placeholder=\"Email\" />\r\n\r\n                            </md-input-container>\r\n                            <small *ngIf=\"userForm.get('email').hasError('pattern')\" align=\"start\" class=\"full-width\">\r\n                                    Invalid email\r\n                                </small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!--passowrd input-->\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\r\n                        <div fxFlex>\r\n                            <i class=\"material-icons formIcons\">lock</i>\r\n                        </div>\r\n                        <div fxFlex=\"93\">\r\n                            <md-input-container class=\"full-width\">\r\n                                <input mdInput id=\"password\" type=\"password\" class=\"validate\" formControlName=\"password\" placeholder=\"Password\">\r\n                            </md-input-container>\r\n                            <small *ngIf=\"userForm.get('password').hasError('pattern')\" align=\"start\" class=\"full-width\">\r\n                                    Password should contain uppercase and lowercase alphabets,minimum one digit/special characters\r\n                                </small>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!--sign in button-->\r\n                    <div fxLayout=\"row\">\r\n                        <div fxFlex=\"100\">\r\n                            <button md-raised-button color=\"accent\" type=\"submit\" class=\"full-width largeBtn\" [disabled]=\"!userForm.valid\">Sign in</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n\r\n                <!--forgot Password button-->\r\n                <div fxLayout=\"row\">\r\n                    <div fxFlex=\"100\" fxLayoutAlign=\"center center\">\r\n                        <button md-button color=\"primary\" (click)=\"forgotPassword()\" class=\"\">Forgot Password ?</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <!--create account button-->\r\n                <div fxLayout=\"row\">\r\n                    <div fxFlex=\"100\">\r\n                        <button md-raised-button color=\"primary\" (click)=\"verifyEmail()\" class=\"full-width largeBtn\">Create Account</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <!--social media button-->\r\n                <!--<div fxLayout.gt-sm=\"row\" fxLayout.sm=\"column\" fxHide.sm>-->\r\n                <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                    <div fxFlex=\"48\">\r\n                        <button md-raised-button class=\"full-width largeBtn googleBtn\">\r\n                                <i class=\"zmdi zmdi-google zmdi-hc-lg\"></i>\r\n                                Login with Google</button>\r\n                    </div>\r\n                    <div fxFlex></div>\r\n                    <div fxFlex=\"48\">\r\n                        <button md-raised-button class=\"full-width largeBtn fbBtn\">\r\n                                <i class=\"zmdi zmdi-facebook-box zmdi-hc-lg\"></i>    \r\n                                Login with Facebook\r\n                            </button>\r\n                    </div>\r\n                </div>\r\n            </md-card-content>\r\n        </md-card>\r\n        <!--card-ends-->\r\n    </md-grid-tile>\r\n</md-grid-list>\r\n<app-login-footer></app-login-footer>"

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(169);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//  this service is used to pass the data between components
var Data = (function () {
    function Data(snackBar) {
        this.snackBar = snackBar;
    }
    Data.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    Data = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */]) === 'function' && _a) || Object])
    ], Data);
    return Data;
    var _a;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/data.service.js.map

/***/ }),

/***/ 860:
/***/ (function(module, exports) {

module.exports = "<!--footer starts-->\r\n<md-toolbar color=\"primary\" class=\"footer\" fxLayout=\"column\">\r\n    <div fxFlex=\"50\" class=\"footerHead\">\r\n        <h5>Samarthya</h5>\r\n    </div>\r\n    <div fxFlex></div>\r\n    <div fxFlex=\"50\" class=\"footerLinks\">\r\n        <ul>\r\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">Samarthya Candidate</a></li>\r\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">Samarthya Placement</a></li>\r\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">FAQ</a></li>\r\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">About Us</a></li>\r\n        </ul>\r\n    </div>\r\n</md-toolbar>\r\n<md-toolbar color=\"primary\" class=\"copyright\">\r\n    <p> © Copyright Samarthya 2017</p>\r\n</md-toolbar>"

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = "<!--Header start-->\r\n<md-toolbar color=\"primary\" class=\"mainHeader\">\r\n    <!--<a href=\"/\">-->\r\n    <p class=\"logo\">Samarthya</p>\r\n    <!--</a>-->\r\n\r\n</md-toolbar>\r\n<div class=\"langBar\" fxFlex fxHide.xs>\r\n    <button *ngFor=\"let lang of languages\" title={{lang.name}} class=\"langBtn\" md-button>\r\n   <div> {{lang.nativeName}}</div>\r\n    </button>\r\n</div>"

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = "<!--login card\r\n<md-grid-list cols=\"1\" rowHeight=\"350px\">\r\n    <md-grid-tile>\r\n        <md-card class=\"loginCard\">\r\n            <md-card-title>Verify Email</md-card-title>\r\n            <md-card-content>\r\n                <form class=\"col s12\" [formGroup]=\"userForm\" (ngSubmit)=\"onVerifyLink()\">\r\n\r\n                    <!--Email input-->\r\n<!--<div fxLayout=\"row\" fxLayoutAlign=\"start end\">\r\n                        <div fxFlex>\r\n                            <i class=\"material-icons formIcons\">email</i>\r\n                        </div>\r\n                        <div fxFlex=\"93\">\r\n                            <md-input-container class=\"full-width\">\r\n                                <input mdInput formControlName=\"email\" id=\"email\" type=\"text\" class=\"validate\" placeholder=\"Email\" />\r\n                                <md-hint align=\"start\" class=\"full-width\">\r\n                                    <app-control-messages [control]=\"userForm.controls.email\" class=\"errorStyle\"></app-control-messages>\r\n                                </md-hint>\r\n                            </md-input-container>\r\n                        </div>\r\n                    </div>-->\r\n\r\n<!--Reset in button-->\r\n<!--<div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                        <div fxFlex=\"48\">\r\n                            <button md-raised-button color=\"accent\" class=\"full-width\" type=\"submit\" [disabled]=\"!userForm.valid\">Verify</button>\r\n                        </div>\r\n                        <div fxFlex></div>\r\n                        <div fxFlex=\"48\">\r\n                            <button md-raised-button color=\"warn\" class=\"full-width\" (click)=onBack()>Back</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </md-card-content>\r\n        </md-card>-->\r\n<!--card-ends-->\r\n<!--</md-grid-tile>\r\n</md-grid-list>-->"

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JsonDataService = (function () {
    function JsonDataService(http, snackBar, router) {
        this.http = http;
        this.snackBar = snackBar;
        this.router = router;
        // url to store data from json file for Registration details
        this.urlRegister = 'http://localhost:3001/candidates';
        // url to retrive data from json file for languages
        this.url = "";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    //snackBar for notification
    JsonDataService.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    // Store Registration details in json file
    JsonDataService.prototype.create = function (formData) {
        var _this = this;
        this.http.post(this.urlRegister, formData).subscribe(function (data) {
            _this.openSnackBar(formData.email, 'Register Successfully');
            _this.timer = setTimeout(function () { return _this.router.navigate(['/login']); }, 4000);
        }, function (error) {
            console.log(error.json());
        });
    };
    // get json data for langauges and dropdown
    JsonDataService.prototype.getJsonData = function () {
        this.url = "/api/languages";
        return this.http.get(this.url).map(function (response) { return response.json().data; });
    };
    ;
    JsonDataService.prototype.getJsonNavList = function (tokenVerification) {
        this.url = '/api/layout/navigationlinks';
        return this.http.get(this.url, this.authoriZation(tokenVerification))
            .map(function (response) {
            var body = response.json();
            return body;
        });
    };
    JsonDataService.prototype.authoriZation = function (userToken) {
        if (userToken) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': userToken });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    JsonDataService.prototype.getEmail = function (email) {
        return this.http.get(this.urlRegister + '?email=' + email).map(function (response) { return response.json(); });
    };
    ;
    JsonDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], JsonDataService);
    return JsonDataService;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/workspace/GitHub/samarthyaPlacement/src/json-data.service.js.map

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(554);


/***/ })

},[902]);
//# sourceMappingURL=main.bundle.map