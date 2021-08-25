/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Lifes.ts":
/*!**********************!*\
  !*** ./src/Lifes.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar Lifes = /** @class */ (function () {\r\n    function Lifes(container) {\r\n        this.lifesQuantity = 4;\r\n        this.heart = '<img alt=\"life heart\" src=\"images/heart.png\"/> ';\r\n        this.emptyHeart = '<img alt=\"empty life heart\" src=\"images/heart-empty.png\"/> ';\r\n        this.container = container;\r\n    }\r\n    Lifes.prototype.reset = function () {\r\n        this.lifesQuantity = 4;\r\n        this.draw();\r\n    };\r\n    Lifes.prototype.decreaseOne = function () {\r\n        this.lifesQuantity--;\r\n        this.draw();\r\n    };\r\n    Lifes.prototype.draw = function () {\r\n        var _this = this;\r\n        var drawHearts = Array(4).fill(0).map(function (e, i) {\r\n            if (i + 1 <= _this.lifesQuantity)\r\n                return _this.heart;\r\n            return _this.emptyHeart;\r\n        }).join(' ');\r\n        this.container.innerHTML = drawHearts;\r\n    };\r\n    return Lifes;\r\n}());\r\nexports.default = Lifes;\r\n\n\n//# sourceURL=webpack://banana-game/./src/Lifes.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar Lifes_1 = __webpack_require__(/*! ./Lifes */ \"./src/Lifes.ts\");\r\nvar scoreContainer = document.querySelector(\"#score\");\r\nvar lifesContainer = document.querySelector(\"#lifes\");\r\nvar canvas = document.querySelector(\"#canvas\");\r\nvar lifes = new Lifes_1[\"default\"](lifesContainer);\r\nscoreContainer.addEventListener(\"click\", function () { return lifes.decreaseOne(); });\r\ncanvas.addEventListener(\"click\", function () { return lifes.reset(); });\r\nlifes.draw();\r\n\n\n//# sourceURL=webpack://banana-game/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;