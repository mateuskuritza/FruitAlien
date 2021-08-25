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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Lifes)\n/* harmony export */ });\nclass Lifes {\r\n    constructor(container) {\r\n        this._lifesQuantity = 4;\r\n        this._heart = '<img alt=\"life heart\" src=\"images/heart.png\"/> ';\r\n        this._emptyHeart = '<img alt=\"empty life heart\" src=\"images/heart-empty.png\"/> ';\r\n        this._container = container;\r\n    }\r\n    reset() {\r\n        this._lifesQuantity = 4;\r\n        this.draw();\r\n    }\r\n    decreaseOne() {\r\n        this._lifesQuantity--;\r\n        this.draw();\r\n    }\r\n    draw() {\r\n        const drawHearts = Array(4).fill(0).map((e, i) => {\r\n            if (i + 1 <= this._lifesQuantity)\r\n                return this._heart;\r\n            return this._emptyHeart;\r\n        }).join(' ');\r\n        this._container.innerHTML = drawHearts;\r\n    }\r\n    get lifesQuantity() {\r\n        return this._lifesQuantity;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://banana-game/./src/Lifes.ts?");

/***/ }),

/***/ "./src/Score.ts":
/*!**********************!*\
  !*** ./src/Score.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Score)\n/* harmony export */ });\nclass Score {\r\n    constructor(container) {\r\n        this._score = 0;\r\n        this._container = container;\r\n    }\r\n    reset() {\r\n        this._score = 0;\r\n    }\r\n    increaseScore(value) {\r\n        this._score += value;\r\n    }\r\n    decreaseScore(value) {\r\n        this._score -= value;\r\n    }\r\n    draw() {\r\n        this._container.innerHTML = 'Score: ' + this._score;\r\n    }\r\n    get score() {\r\n        return this._score;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://banana-game/./src/Score.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Lifes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lifes */ \"./src/Lifes.ts\");\n/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Score */ \"./src/Score.ts\");\n\r\n\r\nconst scoreContainer = document.querySelector(\"#score\");\r\nconst lifesContainer = document.querySelector(\"#lifes\");\r\nconst canvas = document.querySelector(\"#canvas\");\r\nconst lifes = new _Lifes__WEBPACK_IMPORTED_MODULE_0__.default(lifesContainer);\r\nconst score = new _Score__WEBPACK_IMPORTED_MODULE_1__.default(scoreContainer);\r\n\n\n//# sourceURL=webpack://banana-game/./src/index.ts?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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