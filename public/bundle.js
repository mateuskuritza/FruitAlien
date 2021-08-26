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

/***/ "./src/AutonomousObject.ts":
/*!*********************************!*\
  !*** ./src/AutonomousObject.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AutonomousObject)\n/* harmony export */ });\n/* harmony import */ var _Drawable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawable */ \"./src/Drawable.ts\");\n\r\nclass AutonomousObject extends _Drawable__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(canvas, imagePath, sizeX, sizeY) {\r\n        super(canvas, imagePath, Math.random() * (canvas.width), -70, sizeX, sizeY);\r\n        this.speedY = 6;\r\n    }\r\n    move() {\r\n        this.positionY += this.speedY;\r\n    }\r\n    outOfScreen() {\r\n        return this.positionY > this.screenHeight;\r\n    }\r\n    attPoints(points) {\r\n        return points + this.points;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://banana-game/./src/AutonomousObject.ts?");

/***/ }),

/***/ "./src/Bomb.ts":
/*!*********************!*\
  !*** ./src/Bomb.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bomb)\n/* harmony export */ });\n/* harmony import */ var _AutonomousObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutonomousObject */ \"./src/AutonomousObject.ts\");\n\r\nconst bombImg = document.querySelector(\"#bomb\");\r\nclass Bomb extends _AutonomousObject__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(canvas) {\r\n        super(canvas, bombImg, 67, 67);\r\n        this.points = -Infinity;\r\n        this.speedY = 3;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://banana-game/./src/Bomb.ts?");

/***/ }),

/***/ "./src/Drawable.ts":
/*!*************************!*\
  !*** ./src/Drawable.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Drawable)\n/* harmony export */ });\nclass Drawable {\r\n    constructor(canvas, imagePath, positionX, positionY, sizeX, sizeY) {\r\n        this.context = canvas.getContext('2d');\r\n        this.imagePath = imagePath;\r\n        this.sizeX = sizeX;\r\n        this.sizeY = sizeY;\r\n        this.positionX = positionX;\r\n        this.positionY = positionY;\r\n        this.screenWidth = canvas.width;\r\n        this.screenHeight = canvas.height;\r\n    }\r\n    draw() {\r\n        this.context.drawImage(this.imagePath, this.positionX, this.positionY, this.sizeX, this.sizeY);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://banana-game/./src/Drawable.ts?");

/***/ }),

/***/ "./src/Fruit.ts":
/*!**********************!*\
  !*** ./src/Fruit.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Fruit)\n/* harmony export */ });\n/* harmony import */ var _AutonomousObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutonomousObject */ \"./src/AutonomousObject.ts\");\n\r\nclass Fruit extends _AutonomousObject__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(canvas, imagePath, sizeX, sizeY) {\r\n        super(canvas, imagePath, sizeX, sizeY);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://banana-game/./src/Fruit.ts?");

/***/ }),

/***/ "./src/Fruits/AllFruits.ts":
/*!*********************************!*\
  !*** ./src/Fruits/AllFruits.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Banana__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Banana */ \"./src/Fruits/Banana.ts\");\n/* harmony import */ var _Orange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orange */ \"./src/Fruits/Orange.ts\");\n/* harmony import */ var _RedApple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RedApple */ \"./src/Fruits/RedApple.ts\");\n/* harmony import */ var _StrawBerry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StrawBerry */ \"./src/Fruits/StrawBerry.ts\");\n/* harmony import */ var _Watermelon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Watermelon */ \"./src/Fruits/Watermelon.ts\");\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ Banana: _Banana__WEBPACK_IMPORTED_MODULE_0__.default, Orange: _Orange__WEBPACK_IMPORTED_MODULE_1__.default, RedApple: _RedApple__WEBPACK_IMPORTED_MODULE_2__.default, StrawBerry: _StrawBerry__WEBPACK_IMPORTED_MODULE_3__.default, Watermelon: _Watermelon__WEBPACK_IMPORTED_MODULE_4__.default });\r\n\n\n//# sourceURL=webpack://banana-game/./src/Fruits/AllFruits.ts?");

/***/ }),

/***/ "./src/Fruits/Banana.ts":
/*!******************************!*\
  !*** ./src/Fruits/Banana.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Banana)\n/* harmony export */ });\n/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Fruit */ \"./src/Fruit.ts\");\n\r\nconst bananaImg = document.querySelector(\"#banana\");\r\nclass Banana extends _Fruit__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(canvas) {\r\n        super(canvas, bananaImg, 61, 67);\r\n    }\r\n    attPoints(points) {\r\n        return points * 2;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://banana-game/./src/Fruits/Banana.ts?");

/***/ }),

/***/ "./src/Fruits/Orange.ts":
/*!******************************!*\
  !*** ./src/Fruits/Orange.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Orange)\n/* harmony export */ });\n/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Fruit */ \"./src/Fruit.ts\");\n\r\nconst orangeImage = document.querySelector(\"#orange\");\r\nclass Orange extends _Fruit__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(canvas) {\r\n        super(canvas, orangeImage, 64, 67);\r\n        this.points = 5;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://banana-game/./src/Fruits/Orange.ts?");

/***/ }),

/***/ "./src/Fruits/RedApple.ts":
/*!********************************!*\
  !*** ./src/Fruits/RedApple.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RedApple)\n/* harmony export */ });\n/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Fruit */ \"./src/Fruit.ts\");\n\r\nconst redAppleImg = document.querySelector(\"#redApple\");\r\nclass RedApple extends _Fruit__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(canvas) {\r\n        super(canvas, redAppleImg, 64, 67);\r\n        this.points = 10;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://banana-game/./src/Fruits/RedApple.ts?");

/***/ }),

/***/ "./src/Fruits/StrawBerry.ts":
/*!**********************************!*\
  !*** ./src/Fruits/StrawBerry.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StrawBerry)\n/* harmony export */ });\n/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Fruit */ \"./src/Fruit.ts\");\n\r\nconst strawberryImg = document.querySelector(\"#strawberry\");\r\nclass StrawBerry extends _Fruit__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(canvas) {\r\n        super(canvas, strawberryImg, 65, 67);\r\n        this.points = 30;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://banana-game/./src/Fruits/StrawBerry.ts?");

/***/ }),

/***/ "./src/Fruits/Watermelon.ts":
/*!**********************************!*\
  !*** ./src/Fruits/Watermelon.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Watermelon)\n/* harmony export */ });\n/* harmony import */ var _Fruit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Fruit */ \"./src/Fruit.ts\");\n\r\nconst watermelonImg = document.querySelector(\"#watermelon\");\r\nclass Watermelon extends _Fruit__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(canvas) {\r\n        super(canvas, watermelonImg, 82, 67);\r\n        this.points = 20;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://banana-game/./src/Fruits/Watermelon.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Bomb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bomb */ \"./src/Bomb.ts\");\n/* harmony import */ var _Fruits_AllFruits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fruits/AllFruits */ \"./src/Fruits/AllFruits.ts\");\n\r\n\r\nclass Game {\r\n    constructor(canvas, player, lifes, score, loseText) {\r\n        this.objects = [];\r\n        this.runningGame = false;\r\n        this.canvas = canvas;\r\n        this.player = player;\r\n        this.context = canvas.getContext('2d');\r\n        this.screenHeight = canvas.height;\r\n        this.screenWidth = canvas.width;\r\n        this.lifes = lifes;\r\n        this.score = score;\r\n        this.loseText = loseText;\r\n    }\r\n    start() {\r\n        if (!this.runningGame) {\r\n            this.gameIntervalId = window.setInterval(() => this.loop(), 1000 / 60);\r\n            this.spawnFruitIntervalId = window.setInterval(() => this.spawnRandomFruit(), 700);\r\n            this.spawnBombIntervalId = window.setInterval(() => this.spawnBomb(), 3000);\r\n            this.runningGame = true;\r\n        }\r\n        else {\r\n            this.restart();\r\n        }\r\n    }\r\n    loop() {\r\n        this.updateState();\r\n        this.checkCollisions();\r\n        this.render();\r\n        if (this.lifes.lifesQuantity <= 0 || this.score.score < 0)\r\n            this.end();\r\n    }\r\n    render() {\r\n        this.context.clearRect(0, 0, this.screenWidth, this.screenHeight);\r\n        this.player.draw();\r\n        this.objects.forEach(object => object.draw());\r\n        this.score.draw();\r\n        this.lifes.draw();\r\n    }\r\n    checkCollisions() {\r\n        this.objects.forEach(object => {\r\n            if (this.player.checkCollision(object)) {\r\n                this.score.changeScoreTo(object.attPoints(this.score.score));\r\n                this.objects = this.objects.filter(obj => obj !== object);\r\n            }\r\n        });\r\n    }\r\n    updateState() {\r\n        this.objects.forEach(object => object.move());\r\n        this.objects.forEach(object => {\r\n            if (object.outOfScreen()) {\r\n                this.lifes.decreaseOne();\r\n                this.objects = this.objects.filter(obj => obj !== object);\r\n            }\r\n        });\r\n    }\r\n    restart() {\r\n        this.loseText.textContent = \"\";\r\n        this.clearIntervals();\r\n        this.objects = [];\r\n        this.runningGame = false;\r\n        this.score.reset();\r\n        this.lifes.reset();\r\n        this.start();\r\n    }\r\n    spawnRandomFruit() {\r\n        const random = Math.random() * 100;\r\n        let fruit;\r\n        if (random > 70)\r\n            fruit = new _Fruits_AllFruits__WEBPACK_IMPORTED_MODULE_1__.default.Orange(this.canvas);\r\n        if (random > 40 && random <= 70)\r\n            fruit = new _Fruits_AllFruits__WEBPACK_IMPORTED_MODULE_1__.default.RedApple(this.canvas);\r\n        if (random > 20 && random <= 40)\r\n            fruit = new _Fruits_AllFruits__WEBPACK_IMPORTED_MODULE_1__.default.Watermelon(this.canvas);\r\n        if (random > 5 && random <= 20)\r\n            fruit = new _Fruits_AllFruits__WEBPACK_IMPORTED_MODULE_1__.default.StrawBerry(this.canvas);\r\n        if (random <= 5)\r\n            fruit = new _Fruits_AllFruits__WEBPACK_IMPORTED_MODULE_1__.default.Banana(this.canvas);\r\n        this.objects.push(fruit);\r\n    }\r\n    spawnBomb() {\r\n        this.objects.push(new _Bomb__WEBPACK_IMPORTED_MODULE_0__.default(this.canvas));\r\n    }\r\n    end() {\r\n        this.clearIntervals();\r\n        this.loseText.textContent = \"Você perdeu!\";\r\n    }\r\n    clearIntervals() {\r\n        clearInterval(this.gameIntervalId);\r\n        clearInterval(this.spawnFruitIntervalId);\r\n        clearInterval(this.spawnBombIntervalId);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://banana-game/./src/Game.ts?");

/***/ }),

/***/ "./src/Lifes.ts":
/*!**********************!*\
  !*** ./src/Lifes.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Lifes)\n/* harmony export */ });\nclass Lifes {\r\n    constructor(container) {\r\n        this._lifesQuantity = 4;\r\n        this._heart = '<img alt=\"life heart\" src=\"images/heart.png\"/> ';\r\n        this._emptyHeart = '<img alt=\"empty life heart\" src=\"images/heart-empty.png\"/> ';\r\n        this._container = container;\r\n    }\r\n    reset() {\r\n        this._lifesQuantity = 4;\r\n    }\r\n    decreaseOne() {\r\n        this._lifesQuantity--;\r\n    }\r\n    draw() {\r\n        const drawHearts = Array(4).fill(0).map((e, i) => {\r\n            if (i + 1 <= this._lifesQuantity)\r\n                return this._heart;\r\n            return this._emptyHeart;\r\n        }).join(' ');\r\n        this._container.innerHTML = drawHearts;\r\n    }\r\n    get lifesQuantity() {\r\n        return this._lifesQuantity;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://banana-game/./src/Lifes.ts?");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Drawable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawable */ \"./src/Drawable.ts\");\n\r\nclass Player extends _Drawable__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(canvas, imagePath) {\r\n        super(canvas, imagePath, canvas.width / 2, canvas.height - 97, 53, 97);\r\n        this.speedX = 8;\r\n    }\r\n    move(key) {\r\n        if (key === \"ArrowRight\" && this.positionX < this.screenWidth - 53) {\r\n            this.positionX += this.speedX;\r\n        }\r\n        if (key === \"ArrowLeft\" && this.positionX > 0) {\r\n            this.positionX -= this.speedX;\r\n        }\r\n    }\r\n    checkCollision(object) {\r\n        const distance = Math.sqrt(Math.pow((this.positionX - object.positionX), 2) + Math.pow((this.positionY - object.positionY), 2));\r\n        return distance < this.sizeY / 2 + object.sizeY / 2;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://banana-game/./src/Player.ts?");

/***/ }),

/***/ "./src/Score.ts":
/*!**********************!*\
  !*** ./src/Score.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Score)\n/* harmony export */ });\nclass Score {\r\n    constructor(container) {\r\n        this._score = 0;\r\n        this._container = container;\r\n    }\r\n    reset() {\r\n        this._score = 0;\r\n    }\r\n    changeScoreTo(value) {\r\n        this._score = value;\r\n        this.draw();\r\n    }\r\n    draw() {\r\n        this._container.innerHTML = 'Score: ' + this._score;\r\n    }\r\n    get score() {\r\n        return this._score;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://banana-game/./src/Score.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Lifes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lifes */ \"./src/Lifes.ts\");\n/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Score */ \"./src/Score.ts\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ \"./src/Player.ts\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\r\n\r\n\r\n\r\nconst scoreContainer = document.querySelector(\"#score\");\r\nconst lifesContainer = document.querySelector(\"#lifes\");\r\nconst canvas = document.querySelector(\"#canvas\");\r\nconst app = document.querySelector(\"#app\");\r\nconst startButton = document.querySelector(\"#startButton\");\r\nconst loseText = document.querySelector(\"#lose\");\r\nconst screenWidth = app.clientWidth;\r\nconst screenHeight = app.clientHeight;\r\ncanvas.width = screenWidth;\r\ncanvas.height = screenHeight;\r\nconst alien = document.querySelector(\"#alien\");\r\nconst lifes = new _Lifes__WEBPACK_IMPORTED_MODULE_0__.default(lifesContainer);\r\nconst score = new _Score__WEBPACK_IMPORTED_MODULE_1__.default(scoreContainer);\r\nconst player = new _Player__WEBPACK_IMPORTED_MODULE_2__.default(canvas, alien);\r\nconst game = new _Game__WEBPACK_IMPORTED_MODULE_3__.default(canvas, player, lifes, score, loseText);\r\nwindow.setTimeout(() => player.draw(), 100);\r\nwindow.addEventListener('keydown', (e) => player.move(e.key));\r\nstartButton.addEventListener(\"click\", () => game.start());\r\n\n\n//# sourceURL=webpack://banana-game/./src/index.ts?");

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