(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\" class=\"form-signin\" id=\"form\">\n  <h1 class=\"h3 mb-3 font-weight-normal\">Staying Alive</h1>\n  <span>Bitte geben Sie die SA-ID ein:</span>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" id=\"said\" placeholder=\"SA-ID\" formControlName=\"SAID\">\n  </div>\n  <div *ngIf=\"!validSAID\" class=\"alert alert-danger\" role=\"alert\">\n    Ungültige SA-ID.\n  </div>\n  <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" id=\"submit\">Abrufen</button>\n  <p class=\"mt-5 mb-3 text-muted\">MSO @ HS-MA WS 2019</p>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/med-infos/med-infos.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/med-infos/med-infos.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation said=\"{{said}}\"></app-navigation>\n\n<div *ngIf=\"mzd\">\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <h3 class=\"display-4\">Medizinische Informationen</h3>\n      </div>\n      <!-- Allergien-->\n      <p class=\"lead\" data-toggle=\"collapse\" href=\"#collapseAllergien\" aria-expanded=\"false\"\n         aria-controls=\"collapseExample\">Allergien</p>\n      <hr class=\"my-4\">\n      <div class=\"collapse show\" id=\"collapseAllergien\">\n        <div class=\"card card-body\">\n          <ul class=\"list-group\">\n            <li *ngFor=\"let allergen of mzd.allergien\" class=\"list-group-item\">{{allergen}}</li>\n          </ul>\n        </div>\n        <hr class=\"my-4\">\n      </div>\n\n      <!--Erkrankungen-->\n      <p class=\"lead\" data-toggle=\"collapse\" href=\"#collapseErkrankungen\" aria-expanded=\"false\"\n         aria-controls=\"collapseExample\">Erkrankungen und Befunde:</p>\n      <hr class=\"my-4\">\n      <div class=\"collapse show\" id=\"collapseErkrankungen\">\n        <div class=\"card card-body\">\n          <ul class=\"list-group\">\n            <li *ngFor=\"let allergen of mzd.erkankungUndBefunde\" class=\"list-group-item\">{{allergen}}</li>\n          </ul>\n        </div>\n        <hr class=\"my-4\">\n      </div>\n\n      <!--Medikamente-->\n      <p class=\"lead\" data-toggle=\"collapse\" href=\"#collapseMedikamente\" aria-expanded=\"false\"\n         aria-controls=\"collapseExample\">Medikamente</p>\n      <hr class=\"my-4\">\n      <div class=\"collapse show\" id=\"collapseMedikamente\">\n        <div class=\"card card-body\">\n          <ul class=\"list-group\">\n            <li *ngFor=\"let allergen of mzd.medikamente\" class=\"list-group-item\">{{allergen}}</li>\n          </ul>\n        </div>\n        <hr class=\"my-4\">\n      </div>\n\n      <!--Blutgruppe-->\n      <div>\n        <p class=\"lead\">Blutgruppe: {{mzd.blutgruppe}}</p>\n        <hr class=\"my-4\">\n      </div>\n\n      <div class=\"row\">\n        <!--Organspender-->\n        <div class=\"col\">\n          <p class=\"lead\" data-toggle=\"collapse\" href=\"#collapseOrgaPatient\" aria-expanded=\"false\"\n             aria-controls=\"collapseExample\">Organspender:\n            <ng-template\n              *ngIf=\"mzd.organspender.istOrganspender;then organspender; else notOrganspender\">\n            </ng-template>\n            <ng-template #organspender>Ja</ng-template>\n            <ng-template #notOrganspender>Nein</ng-template>\n          </p>\n        </div>\n\n        <!--Patientenverfügung-->\n        <div class=\"col\">\n          <p class=\"lead\" data-toggle=\"collapse\" href=\"#collapseOrgaPatient\" aria-expanded=\"false\"\n             aria-controls=\"collapseExample\">Patientenverfügung:\n            <ng-template\n              *ngIf=\"mzd.patientenverfuegung.hatPatientenverfuegung;then patient; else notPatient\">\n            </ng-template>\n            <ng-template #patient>Ja</ng-template>\n            <ng-template #notPatient>Nein</ng-template>\n          </p>\n        </div>\n      </div>\n\n      <!--Organspender und Patientenverfügungs - Informationen-->\n      <div class=\"collapse show\" id=\"collapseOrgaPatient\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"card card-body\">\n              <p>{{mzd.organspender.information}}</p>\n            </div>\n            <hr class=\"my-4\">\n          </div>\n          <div class=\"col\">\n            <div class=\"card card-body\">\n              <p>{{mzd.patientenverfuegung.information}}</p>\n            </div>\n            <hr class=\"my-4\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"\">Staying Alive</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n          aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <div *ngIf=\"router.url === '/said/' + said\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a [routerLink]=\"['/said', said]\" class=\"nav-link\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/medInfos', said]\" class=\"nav-link\">Medizinische Informationen</a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/privateInfos', said]\" class=\"nav-link\">Private Informationen</a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/persoenlicheInfos', said]\" class=\"nav-link\">Persönliche Informationen</a>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"router.url === '/medInfos/' + said\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/said', said]\" class=\"nav-link\">Home</a>\n        </li>\n        <li class=\"nav-item active\">\n          <a [routerLink]=\"['/medInfos', said]\" class=\"nav-link\">Medizinische Informationen</a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/privateInfos', said]\" class=\"nav-link\">Private Informationen</a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/persoenlicheInfos', said]\" class=\"nav-link\">Persönliche Informationen</a>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"router.url === '/privateInfos/' + said\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/said', said]\" class=\"nav-link\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/medInfos', said]\" class=\"nav-link\">Medizinische Informationen</a>\n        </li>\n        <li class=\"nav-item active\">\n          <a [routerLink]=\"['/privateInfos', said]\" class=\"nav-link\">Private Informationen</a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/persoenlicheInfos', said]\" class=\"nav-link\">Persönliche Informationen</a>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"router.url === '/persoenlicheInfos/' + said\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/said', said]\" class=\"nav-link\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/medInfos', said]\" class=\"nav-link\">Medizinische Informationen</a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"['/privateInfos', said]\" class=\"nav-link\">Private Informationen</a>\n        </li>\n        <li class=\"nav-item active\">\n          <a [routerLink]=\"['/persoenlicheInfos', said]\" class=\"nav-link\">Persönliche Informationen</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/persoenliche-infos/persoenliche-infos.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/persoenliche-infos/persoenliche-infos.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation said=\"{{said}}\"></app-navigation>\n\n<div *ngIf=\"perd\">\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <h3 class=\"display-4\">Persönliche Informationen</h3>\n      </div>\n      <!--Vor- und Nachname-->\n      <div class=\"row\">\n        <div class=\"col\">\n          <h4>Vorname</h4>\n          <input readonly type=\"text\" class=\"form-control\" placeholder=\"{{perd.vorname}}\">\n          <hr class=\"my-4\">\n        </div>\n        <div class=\"col\">\n          <h4>Nachname</h4>\n          <input readonly type=\"text\" class=\"form-control\" placeholder=\"{{perd.name}}\">\n          <hr class=\"my-4\">\n        </div>\n      </div>\n\n      <!--Geburtsdatum- und Beruf-->\n      <div class=\"row\">\n        <div class=\"col\">\n          <h4>Geburtsdatum</h4>\n          <input readonly type=\"text\" class=\"form-control\" placeholder=\"{{perd.geburtsdatum}}\">\n          <hr class=\"my-4\">\n        </div>\n        <div class=\"col\">\n          <h4>Beruf</h4>\n          <input readonly type=\"text\" class=\"form-control\" placeholder=\"{{perd.beruf}}\">\n          <hr class=\"my-4\">\n        </div>\n      </div>\n\n      <!--Gewicht- und Groesse-->\n      <div class=\"row\">\n        <div class=\"col\">\n          <h4>Gewicht</h4>\n          <input readonly type=\"text\" class=\"form-control\" placeholder=\"{{perd.gewicht}}\">\n          <hr class=\"my-4\">\n        </div>\n        <div class=\"col\">\n          <h4>Größe</h4>\n          <input readonly type=\"text\" class=\"form-control\" placeholder=\"{{perd.groesse}}\">\n          <hr class=\"my-4\">\n        </div>\n      </div>\n\n      <!--Adresse-->\n      <div class=\"row\">\n        <div class=\"col\">\n          <h4>Adresse</h4>\n          <input readonly type=\"text\" class=\"form-control\" placeholder=\"{{perd.anschrift.strasse}}\n      {{perd.anschrift.hausnummer}} {{perd.anschrift.adresszusatz}},{{perd.anschrift.plz}} {{perd.anschrift.ort}}\">\n          <hr class=\"my-4\">\n        </div>\n      </div>\n\n      <!--Kontaktdaten-->\n      <div>\n        <h4 data-toggle=\"collapse\" href=\"#collapseKontakt\" aria-expanded=\"false\"\n            aria-controls=\"collapseExample\">Kontaktdaten</h4>\n        <hr class=\"my-4\">\n        <div class=\"collapse show\" id=\"collapseKontakt\">\n          <div class=\"card card-body\">\n            <ul class=\"list-group\">\n              <li *ngFor=\"let kontakt of perd.kontaktdaten\" class=\"list-group-item\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <p class=\"kontaktFarbe\"><b>Email:</b> {{kontakt.email}}</p>\n                      <p class=\"kontaktFarbe\"><b>Handy:</b> {{kontakt.handynummer}}</p>\n                      <p class=\"kontaktFarbe\"><b>Telefon:</b> {{kontakt.telefonnummer}}</p>\n                    </div>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n          <hr class=\"my-4\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/private-infos/private-infos.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/private-infos/private-infos.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation said=\"{{said}}\"></app-navigation>\n<div *ngIf=\"prid\">\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <h3 class=\"display-4\">Private Informationen</h3>\n      </div>\n      <!--Notfallkontakte-->\n      <p class=\"lead\" data-toggle=\"collapse\" href=\"#collapseNotfallKontakte\" aria-expanded=\"false\"\n         aria-controls=\"collapseExample\">Notfallkontakte</p>\n      <hr class=\"my-4\">\n      <div class=\"collapse show\" id=\"collapseNotfallKontakte\">\n        <div class=\"card card-body\">\n          <ul class=\"list-group\">\n            <li *ngFor=\"let notfall of prid.notfallkontakte\" class=\"list-group-item\">{{notfall}}</li>\n          </ul>\n        </div>\n        <hr class=\"my-4\">\n      </div>\n\n      <!--Relevtante Daten-->\n      <p class=\"lead\" data-toggle=\"collapse\" href=\"#collapseRelevanteDaten\" aria-expanded=\"false\"\n         aria-controls=\"collapseExample\">Relevante Daten</p>\n      <hr class=\"my-4\">\n      <div class=\"collapse show\" id=\"collapseRelevanteDaten\">\n        <div class=\"card card-body\">\n          <ul class=\"list-group\">\n            <li *ngFor=\"let data of prid.relevanteDaten\" class=\"list-group-item\">{{data}}</li>\n          </ul>\n        </div>\n        <hr class=\"my-4\">\n      </div>\n\n      <!--Testament -->\n      <div *ngIf=\"prid.testament.testamentVorhanden\">\n        <p class=\"lead\" data-toggle=\"collapse\" href=\"#collapseTestament\" aria-expanded=\"false\"\n           aria-controls=\"collapseExample\">Testament</p>\n        <hr class=\"my-4\">\n        <div class=\"collapse show\" id=\"collapseTestament\">\n          <div class=\"card card-body\">\n            <textarea readonly class=\"form-control\" rows=\"3\">{{prid.testament.informationen}}</textarea>\n          </div>\n          <hr class=\"my-4\">\n        </div>\n\n        <!--Notar-->\n        <div *ngIf=\"prid.testament.testamentVorhanden\">\n          <p><b>Name:</b> {{prid.testament.notar.name}}</p>\n          <p><b>Kontaktart:</b> {{prid.testament.notar.kontaktart}}</p>\n          <p><b>Email:</b> {{prid.testament.notar.kontaktdaten.email}}</p>\n          <p><b>Handy:</b> {{prid.testament.notar.handynummer}}</p>\n          <p><b>Telefon:</b> {{prid.testament.notar.telefonnummer}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/said/said.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/said/said.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation said=\"{{said}}\"></app-navigation>\n<div *ngIf=\"data\">\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <h3 class=\"display-4\" id=\"pers\">Persönliche Informationen</h3>\n      </div>\n      <!--Vor- und Nachname-->\n      <div class=\"row\">\n        <div class=\"col\">\n          <h4>Vorname</h4>\n          <input readonly type=\"text\" class=\"form-control\" placeholder=\"{{perd.vorname}}\">\n          <hr class=\"my-4\">\n        </div>\n        <div class=\"col\">\n          <h4>Nachname</h4>\n          <input readonly type=\"text\" class=\"form-control\" placeholder=\"{{perd.name}}\">\n          <hr class=\"my-4\">\n        </div>\n      </div>\n\n      <!--Geburtsdatum- und Beruf-->\n      <div class=\"row\">\n        <div class=\"col\">\n          <h4>Geburtsdatum</h4>\n          <input readonly type=\"text\" class=\"form-control\" placeholder=\"{{perd.geburtsdatum}}\">\n          <hr class=\"my-4\">\n        </div>\n        <div class=\"col\">\n          <h4>Beruf</h4>\n          <input readonly type=\"text\" class=\"form-control\" placeholder=\"{{perd.beruf}}\">\n          <hr class=\"my-4\">\n        </div>\n      </div>\n\n      <!--Gewicht- und Groesse-->\n      <div class=\"row\">\n        <div class=\"col\">\n          <h4>Gewicht</h4>\n          <input readonly type=\"text\" class=\"form-control\" placeholder=\"{{perd.gewicht}}\">\n          <hr class=\"my-4\">\n        </div>\n        <div class=\"col\">\n          <h4>Größe</h4>\n          <input readonly type=\"text\" class=\"form-control\" placeholder=\"{{perd.groesse}}\">\n          <hr class=\"my-4\">\n        </div>\n      </div>\n\n      <!--Adresse-->\n      <div class=\"row\">\n        <div class=\"col\">\n          <h4>Adresse</h4>\n          <input readonly type=\"text\" class=\"form-control\" placeholder=\"{{perd.anschrift.strasse}}\n      {{perd.anschrift.hausnummer}} {{perd.anschrift.adresszusatz}},{{perd.anschrift.plz}} {{perd.anschrift.ort}}\">\n          <hr class=\"my-4\">\n        </div>\n      </div>\n\n      <!--Kontaktdaten-->\n      <div>\n        <h4 data-toggle=\"collapse\" href=\"#collapseKontakt\" aria-expanded=\"false\"\n            aria-controls=\"collapseExample\">Kontaktdaten</h4>\n        <hr class=\"my-4\">\n        <div class=\"collapse show\" id=\"collapseKontakt\">\n          <div class=\"card card-body\">\n            <ul class=\"list-group\">\n              <li *ngFor=\"let kontakt of perd.kontaktdaten\" class=\"list-group-item\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <p><b>Email:</b> {{kontakt.email}}</p>\n                      <p><b>Handy:</b> {{kontakt.handynummer}}</p>\n                      <p><b>Telefon:</b> {{kontakt.telefonnummer}}</p>\n                    </div>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n          <hr class=\"my-4\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <h3 class=\"display-4\" id=\"med\">Medizinische Informationen</h3>\n      </div>\n      <!-- Allergien-->\n      <p class=\"lead\" data-toggle=\"collapse\" href=\"#collapseAllergien\" aria-expanded=\"false\"\n         aria-controls=\"collapseExample\">Allergien</p>\n      <hr class=\"my-4\">\n      <div class=\"collapse show\" id=\"collapseAllergien\">\n        <div class=\"card card-body\">\n          <ul class=\"list-group\">\n            <li *ngFor=\"let allergen of mzd.allergien\" class=\"list-group-item\">{{allergen}}</li>\n          </ul>\n        </div>\n        <hr class=\"my-4\">\n      </div>\n\n      <!--Erkrankungen-->\n      <p class=\"lead\" data-toggle=\"collapse\" href=\"#collapseErkrankungen\" aria-expanded=\"false\"\n         aria-controls=\"collapseExample\">Erkrankungen und Befunde:</p>\n      <hr class=\"my-4\">\n      <div class=\"collapse show\" id=\"collapseErkrankungen\">\n        <div class=\"card card-body\">\n          <ul class=\"list-group\">\n            <li *ngFor=\"let allergen of mzd.erkankungUndBefunde\" class=\"list-group-item\">{{allergen}}</li>\n          </ul>\n        </div>\n        <hr class=\"my-4\">\n      </div>\n\n      <!--Medikamente-->\n      <p class=\"lead\" data-toggle=\"collapse\" href=\"#collapseMedikamente\" aria-expanded=\"false\"\n         aria-controls=\"collapseExample\">Medikamente</p>\n      <hr class=\"my-4\">\n      <div class=\"collapse show\" id=\"collapseMedikamente\">\n        <div class=\"card card-body\">\n          <ul class=\"list-group\">\n            <li *ngFor=\"let allergen of mzd.medikamente\" class=\"list-group-item\">{{allergen}}</li>\n          </ul>\n        </div>\n        <hr class=\"my-4\">\n      </div>\n\n      <!--Blutgruppe-->\n      <div>\n        <p class=\"lead\">Blutgruppe: {{mzd.blutgruppe}}</p>\n        <hr class=\"my-4\">\n      </div>\n\n      <div class=\"row\">\n        <!--Organspender-->\n        <div class=\"col\">\n          <p class=\"lead\" data-toggle=\"collapse\" href=\"#collapseOrgaPatient\" aria-expanded=\"false\"\n             aria-controls=\"collapseExample\">Organspender:\n            <ng-template\n              *ngIf=\"mzd.organspender.istOrganspender;then organspender; else notOrganspender\">\n            </ng-template>\n            <ng-template #organspender>Ja</ng-template>\n            <ng-template #notOrganspender>Nein</ng-template>\n          </p>\n        </div>\n\n        <!--Patientenverfügung-->\n        <div class=\"col\">\n          <p class=\"lead\" data-toggle=\"collapse\" href=\"#collapseOrgaPatient\" aria-expanded=\"false\"\n             aria-controls=\"collapseExample\">Patientenverfügung:\n            <ng-template\n              *ngIf=\"mzd.patientenverfuegung.hatPatientenverfuegung;then patient; else notPatient\">\n            </ng-template>\n            <ng-template #patient>Ja</ng-template>\n            <ng-template #notPatient>Nein</ng-template>\n          </p>\n        </div>\n      </div>\n\n      <!--Organspender und Patientenverfügungs - Informationen-->\n      <div class=\"collapse show\" id=\"collapseOrgaPatient\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"card card-body\">\n              <p>{{mzd.organspender.information}}</p>\n            </div>\n            <hr class=\"my-4\">\n          </div>\n          <div class=\"col\">\n            <div class=\"card card-body\">\n              <p>{{mzd.patientenverfuegung.information}}</p>\n            </div>\n            <hr class=\"my-4\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <h3 class=\"display-4\" id=\"priv\">Private Informationen</h3>\n      </div>\n      <!--Notfallkontakte-->\n      <p class=\"lead\" data-toggle=\"collapse\" href=\"#collapseNotfallKontakte\" aria-expanded=\"false\"\n         aria-controls=\"collapseExample\">Notfallkontakte</p>\n      <hr class=\"my-4\">\n      <div class=\"collapse show\" id=\"collapseNotfallKontakte\">\n        <div class=\"card card-body\">\n          <ul class=\"list-group\">\n            <li *ngFor=\"let notfall of prid.notfallkontakte\" class=\"list-group-item\">{{notfall}}</li>\n          </ul>\n        </div>\n        <hr class=\"my-4\">\n      </div>\n\n      <!--Relevtante Daten-->\n      <p class=\"lead\" data-toggle=\"collapse\" href=\"#collapseRelevanteDaten\" aria-expanded=\"false\"\n         aria-controls=\"collapseExample\">Relevante Daten</p>\n      <hr class=\"my-4\">\n      <div class=\"collapse show\" id=\"collapseRelevanteDaten\">\n        <div class=\"card card-body\">\n          <ul class=\"list-group\">\n            <li *ngFor=\"let data of prid.relevanteDaten\" class=\"list-group-item\">{{data}}</li>\n          </ul>\n        </div>\n        <hr class=\"my-4\">\n      </div>\n\n      <!--Testament -->\n      <div *ngIf=\"prid.testament.testamentVorhanden\">\n        <p class=\"lead\" data-toggle=\"collapse\" href=\"#collapseTestament\" aria-expanded=\"false\"\n           aria-controls=\"collapseExample\">Testament</p>\n        <hr class=\"my-4\">\n        <div class=\"collapse show\" id=\"collapseTestament\">\n          <div class=\"card card-body\">\n            <textarea readonly class=\"form-control\" rows=\"3\">{{prid.testament.informationen}}</textarea>\n          </div>\n          <hr class=\"my-4\">\n        </div>\n\n        <!--Notar-->\n        <div *ngIf=\"prid.testament.testamentVorhanden\">\n          <p><b>Name:</b> {{prid.testament.notar.name}}</p>\n          <p><b>Kontaktart:</b> {{prid.testament.notar.kontaktart}}</p>\n          <p><b>Email:</b> {{prid.testament.notar.kontaktdaten.email}}</p>\n          <p><b>Handy:</b> {{prid.testament.notar.handynummer}}</p>\n          <p><b>Telefon:</b> {{prid.testament.notar.telefonnummer}}</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_said_said_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/said/said.component */ "./src/app/components/said/said.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_med_infos_med_infos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/med-infos/med-infos.component */ "./src/app/components/med-infos/med-infos.component.ts");
/* harmony import */ var _components_private_infos_private_infos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/private-infos/private-infos.component */ "./src/app/components/private-infos/private-infos.component.ts");
/* harmony import */ var _components_persoenliche_infos_persoenliche_infos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/persoenliche-infos/persoenliche-infos.component */ "./src/app/components/persoenliche-infos/persoenliche-infos.component.ts");














const appRoutes = [
    { path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'said/:id',
        component: _components_said_said_component__WEBPACK_IMPORTED_MODULE_9__["SAIDComponent"],
    },
    { path: 'medInfos/:id',
        component: _components_med_infos_med_infos_component__WEBPACK_IMPORTED_MODULE_11__["MedInfosComponent"],
    },
    { path: 'privateInfos/:id',
        component: _components_private_infos_private_infos_component__WEBPACK_IMPORTED_MODULE_12__["PrivateInfosComponent"],
    },
    { path: 'persoenlicheInfos/:id',
        component: _components_persoenliche_infos_persoenliche_infos_component__WEBPACK_IMPORTED_MODULE_13__["PersoenlicheInfosComponent"],
    },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _components_said_said_component__WEBPACK_IMPORTED_MODULE_9__["SAIDComponent"],
            _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
            _components_med_infos_med_infos_component__WEBPACK_IMPORTED_MODULE_11__["MedInfosComponent"],
            _components_private_infos_private_infos_component__WEBPACK_IMPORTED_MODULE_12__["PrivateInfosComponent"],
            _components_persoenliche_infos_persoenliche_infos_component__WEBPACK_IMPORTED_MODULE_13__["PersoenlicheInfosComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  height: 100%;\n}\n\nbody {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n\n@media (max-width: 500px) {\n  .form-signin {\n    width: 100%;\n    max-width: 330px;\n    padding: 15px;\n    margin: auto;\n  }\n}\n\n@media (min-width: 501px) {\n  .form-signin {\n    position: absolute;\n    width: 500px;\n    height: 500px;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n  }\n}\n\n.form-signin .checkbox {\n  font-weight: 400;\n}\n\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBRUUsb0JBQWE7RUFBYixhQUFhO0VBRWIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZm9ybS1zaWduaW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDUwMXB4KSB7XG4gIC5mb3JtLXNpZ25pbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cblxuLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIHotaW5kZXg6IDI7XG59XG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/components/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(router, loginService, formBuilder, elementRef) {
        this.router = router;
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.elementRef = elementRef;
        this.loginForm = this.formBuilder.group({
            SAID: ''
        });
        this.validSAID = true;
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#F0F2F1';
    }
    onSubmit(loginData) {
        this.loginService.getSAID(loginData.SAID)
            .subscribe((said) => {
            this.validSAID = true;
            this.router.navigate(['/said/' + loginData.SAID]);
        }, error => {
            this.validSAID = false;
        });
        this.loginForm.reset();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/login/login.service.ts":
/*!***************************************************!*\
  !*** ./src/app/components/login/login.service.ts ***!
  \***************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
    }
    getSAID(id) {
        return this.http.get('/storage/' + id);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/components/med-infos/med-infos.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/med-infos/med-infos.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lead {\n  color: #8EB9BF;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZWQtaW5mb3MvbWVkLWluZm9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZWQtaW5mb3MvbWVkLWluZm9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVhZCB7XG4gIGNvbG9yOiAjOEVCOUJGO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/med-infos/med-infos.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/med-infos/med-infos.component.ts ***!
  \*************************************************************/
/*! exports provided: MedInfosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedInfosComponent", function() { return MedInfosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _said_said_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../said/said.service */ "./src/app/components/said/said.service.ts");




let MedInfosComponent = class MedInfosComponent {
    constructor(route, router, saidService, elementRef) {
        this.route = route;
        this.router = router;
        this.saidService = saidService;
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#F0F2F1';
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.said = params.get('id');
        });
        this.saidService.getData(this.said)
            .subscribe((data) => {
            this.data = data;
            this.mzd = data.medizinischeInformationen;
        }, error => {
            console.log(error);
        });
    }
};
MedInfosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _said_said_service__WEBPACK_IMPORTED_MODULE_3__["SaidService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
MedInfosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-med-infos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./med-infos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/med-infos/med-infos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./med-infos.component.css */ "./src/app/components/med-infos/med-infos.component.css")).default]
    })
], MedInfosComponent);



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavigationComponent = class NavigationComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavigationComponent.prototype, "said", void 0);
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/components/persoenliche-infos/persoenliche-infos.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/persoenliche-infos/persoenliche-infos.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lead {\n  color: #F2C36B;\n}\n\nh4 {\n  color: #F2C36B;\n}\n\n.kontaktFarbe {\n  color: #F2C36B;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXJzb2VubGljaGUtaW5mb3MvcGVyc29lbmxpY2hlLWluZm9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BlcnNvZW5saWNoZS1pbmZvcy9wZXJzb2VubGljaGUtaW5mb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWFkIHtcbiAgY29sb3I6ICNGMkMzNkI7XG59XG5cbmg0IHtcbiAgY29sb3I6ICNGMkMzNkI7XG59XG5cbi5rb250YWt0RmFyYmUge1xuICBjb2xvcjogI0YyQzM2Qjtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/components/persoenliche-infos/persoenliche-infos.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/persoenliche-infos/persoenliche-infos.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PersoenlicheInfosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersoenlicheInfosComponent", function() { return PersoenlicheInfosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _said_said_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../said/said.service */ "./src/app/components/said/said.service.ts");




let PersoenlicheInfosComponent = class PersoenlicheInfosComponent {
    constructor(route, router, saidService, elementRef) {
        this.route = route;
        this.router = router;
        this.saidService = saidService;
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#F0F2F1';
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.said = params.get('id');
        });
        this.saidService.getData(this.said)
            .subscribe((data) => {
            this.data = data;
            this.perd = data.persoenlicheDaten;
        }, error => {
            console.log(error);
        });
    }
};
PersoenlicheInfosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _said_said_service__WEBPACK_IMPORTED_MODULE_3__["SaidService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
PersoenlicheInfosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-persoenliche-infos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./persoenliche-infos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/persoenliche-infos/persoenliche-infos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./persoenliche-infos.component.css */ "./src/app/components/persoenliche-infos/persoenliche-infos.component.css")).default]
    })
], PersoenlicheInfosComponent);



/***/ }),

/***/ "./src/app/components/private-infos/private-infos.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/private-infos/private-infos.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lead {\n  color: #F56067;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcml2YXRlLWluZm9zL3ByaXZhdGUtaW5mb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByaXZhdGUtaW5mb3MvcHJpdmF0ZS1pbmZvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlYWQge1xuICBjb2xvcjogI0Y1NjA2Nztcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/private-infos/private-infos.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/private-infos/private-infos.component.ts ***!
  \*********************************************************************/
/*! exports provided: PrivateInfosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateInfosComponent", function() { return PrivateInfosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _said_said_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../said/said.service */ "./src/app/components/said/said.service.ts");




let PrivateInfosComponent = class PrivateInfosComponent {
    constructor(route, router, saidService, elementRef) {
        this.route = route;
        this.router = router;
        this.saidService = saidService;
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#F0F2F1';
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.said = params.get('id');
        });
        this.saidService.getData(this.said)
            .subscribe((data) => {
            this.data = data;
            this.prid = data.privateDaten;
        }, error => {
            console.log(error);
        });
    }
};
PrivateInfosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _said_said_service__WEBPACK_IMPORTED_MODULE_3__["SaidService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
PrivateInfosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-private-infos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./private-infos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/private-infos/private-infos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./private-infos.component.css */ "./src/app/components/private-infos/private-infos.component.css")).default]
    })
], PrivateInfosComponent);



/***/ }),

/***/ "./src/app/components/said/said.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/said/said.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#pers {\n  color: #F2C36B;\n}\n\n#priv {\n  color: #F56067;\n}\n\n#med {\n  color: #8EB9BF;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zYWlkL3NhaWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2FpZC9zYWlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGVycyB7XG4gIGNvbG9yOiAjRjJDMzZCO1xufVxuXG4jcHJpdiB7XG4gIGNvbG9yOiAjRjU2MDY3O1xufVxuXG4jbWVkIHtcbiAgY29sb3I6ICM4RUI5QkY7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/said/said.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/said/said.component.ts ***!
  \***************************************************/
/*! exports provided: SAIDComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAIDComponent", function() { return SAIDComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _said_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./said.service */ "./src/app/components/said/said.service.ts");




let SAIDComponent = class SAIDComponent {
    constructor(route, router, saidService) {
        this.route = route;
        this.router = router;
        this.saidService = saidService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.said = params.get('id');
        });
        this.saidService.getData(this.said)
            .subscribe((data) => {
            this.data = data;
            this.mzd = this.data.medizinischeInformationen;
            this.prid = this.data.privateDaten;
            this.perd = this.data.persoenlicheDaten;
        }, error => {
            console.log(error);
        });
    }
};
SAIDComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _said_service__WEBPACK_IMPORTED_MODULE_3__["SaidService"] }
];
SAIDComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-said',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./said.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/said/said.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./said.component.css */ "./src/app/components/said/said.component.css")).default]
    })
], SAIDComponent);



/***/ }),

/***/ "./src/app/components/said/said.service.ts":
/*!*************************************************!*\
  !*** ./src/app/components/said/said.service.ts ***!
  \*************************************************/
/*! exports provided: SaidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaidService", function() { return SaidService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SaidService = class SaidService {
    constructor(http) {
        this.http = http;
    }
    getData(id) {
        return this.http.get('/storage/' + id);
    }
};
SaidService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SaidService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SaidService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/patrickdomscheid/GitHub/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map