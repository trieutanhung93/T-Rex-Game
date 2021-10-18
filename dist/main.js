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

/***/ "./src/abstracts/canvas.ts":
/*!*********************************!*\
  !*** ./src/abstracts/canvas.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas\": () => (/* binding */ Canvas)\n/* harmony export */ });\nvar Canvas = /** @class */ (function () {\r\n    function Canvas() {\r\n    }\r\n    Canvas.init = function (el) {\r\n        el.width = window.innerWidth;\r\n        el.height = window.innerHeight;\r\n        this.width = el.width;\r\n        this.height = el.height;\r\n        Canvas.ctx = el.getContext('2d');\r\n    };\r\n    return Canvas;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/abstracts/canvas.ts?");

/***/ }),

/***/ "./src/abstracts/control.ts":
/*!**********************************!*\
  !*** ./src/abstracts/control.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Control\": () => (/* binding */ Control)\n/* harmony export */ });\nvar Control = /** @class */ (function () {\r\n    function Control() {\r\n    }\r\n    Control.prototype.handleInput = function () {\r\n        document.addEventListener('keydown', function (event) {\r\n            Control.keys[event.code] = true;\r\n        });\r\n        document.addEventListener('keyup', function (event) {\r\n            Control.keys[event.code] = false;\r\n        });\r\n    };\r\n    Control.keys = {};\r\n    return Control;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/abstracts/control.ts?");

/***/ }),

/***/ "./src/abstracts/gameObject.ts":
/*!*************************************!*\
  !*** ./src/abstracts/gameObject.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameObject\": () => (/* binding */ GameObject)\n/* harmony export */ });\nvar GameObject = /** @class */ (function () {\r\n    function GameObject(x, y, w, h) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.w = w;\r\n        this.h = h;\r\n    }\r\n    return GameObject;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/abstracts/gameObject.ts?");

/***/ }),

/***/ "./src/abstracts/sceneManager.ts":
/*!***************************************!*\
  !*** ./src/abstracts/sceneManager.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SceneManager\": () => (/* binding */ SceneManager)\n/* harmony export */ });\nvar SceneManager = /** @class */ (function () {\r\n    function SceneManager() {\r\n    }\r\n    SceneManager.prototype.addScene = function (scene) {\r\n        //console.log(\"SceneManager: addScene\")\r\n        SceneManager.scenes.push(scene);\r\n        if (SceneManager.scenes.length == 1) {\r\n            SceneManager.currentScene = scene;\r\n        }\r\n        //console.log(SceneManager.currentScene);\r\n    };\r\n    SceneManager.prototype.findSceneIndex = function (scene) {\r\n        var indexScene = SceneManager.scenes.findIndex(function (element) {\r\n            return JSON.stringify(element) == JSON.stringify(scene);\r\n        });\r\n        return indexScene;\r\n    };\r\n    SceneManager.scenes = [];\r\n    return SceneManager;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/abstracts/sceneManager.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstracts/canvas */ \"./src/abstracts/canvas.ts\");\n/* harmony import */ var _abstracts_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstracts/control */ \"./src/abstracts/control.ts\");\n/* harmony import */ var _objects_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/game */ \"./src/objects/game.ts\");\n/* harmony import */ var _scenes_mainMenuScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/mainMenuScene */ \"./src/scenes/mainMenuScene.ts\");\n/* harmony import */ var _scenes_playGameScene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/playGameScene */ \"./src/scenes/playGameScene.ts\");\n/* harmony import */ var _scenes_gameOverScene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/gameOverScene */ \"./src/scenes/gameOverScene.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n_abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.init(document.getElementById('game'));\r\nvar control = new _abstracts_control__WEBPACK_IMPORTED_MODULE_1__.Control();\r\ncontrol.handleInput();\r\nvar tRexGame = new _objects_game__WEBPACK_IMPORTED_MODULE_2__.Game();\r\nconsole.log(\"Start\");\r\ntRexGame.addScene(new _scenes_mainMenuScene__WEBPACK_IMPORTED_MODULE_3__.MainMenuScene);\r\ntRexGame.addScene(new _scenes_playGameScene__WEBPACK_IMPORTED_MODULE_4__.PlayGameScene);\r\ntRexGame.addScene(new _scenes_gameOverScene__WEBPACK_IMPORTED_MODULE_5__.GameOverScene);\r\ntRexGame.start();\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/objects/Text.ts":
/*!*****************************!*\
  !*** ./src/objects/Text.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Text\": () => (/* binding */ Text)\n/* harmony export */ });\n/* harmony import */ var _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/canvas */ \"./src/abstracts/canvas.ts\");\n\r\nvar Text = /** @class */ (function () {\r\n    function Text(text, x, y, a, c, s) {\r\n        this.t = text;\r\n        this.x = x;\r\n        this.y = y;\r\n        this.a = a;\r\n        this.c = c;\r\n        this.s = s;\r\n    }\r\n    Text.prototype.draw = function () {\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.ctx.beginPath();\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.ctx.fillStyle = this.c;\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.ctx.font = this.s + \"px sans-serif\";\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.ctx.textAlign = this.a;\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.ctx.fillText(this.t, this.x, this.y);\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.ctx.closePath();\r\n    };\r\n    return Text;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/objects/Text.ts?");

/***/ }),

/***/ "./src/objects/brid.ts":
/*!*****************************!*\
  !*** ./src/objects/brid.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Brid\": () => (/* binding */ Brid)\n/* harmony export */ });\n/* harmony import */ var _abstracts_gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/gameObject */ \"./src/abstracts/gameObject.ts\");\n/* harmony import */ var _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/canvas */ \"./src/abstracts/canvas.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar Brid = /** @class */ (function (_super) {\r\n    __extends(Brid, _super);\r\n    function Brid(x, y, w, h) {\r\n        var _this = _super.call(this, x, y, w, h) || this;\r\n        _this.image = new Image();\r\n        _this.urlImg = './img/brid.png';\r\n        _this.image.src = _this.urlImg;\r\n        _this.dx = -10;\r\n        return _this;\r\n    }\r\n    Brid.prototype.draw = function () {\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.beginPath();\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.closePath();\r\n    };\r\n    Brid.prototype.update = function () {\r\n        this.x += this.dx;\r\n        this.draw();\r\n        this.dx = -10;\r\n    };\r\n    return Brid;\r\n}(_abstracts_gameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject));\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/objects/brid.ts?");

/***/ }),

/***/ "./src/objects/button.ts":
/*!*******************************!*\
  !*** ./src/objects/button.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _abstracts_gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/gameObject */ \"./src/abstracts/gameObject.ts\");\n/* harmony import */ var _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/canvas */ \"./src/abstracts/canvas.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar Button = /** @class */ (function (_super) {\r\n    __extends(Button, _super);\r\n    function Button(x, y, w, h) {\r\n        var _this = _super.call(this, x, y, w, h) || this;\r\n        _this.image = new Image();\r\n        _this.urlImg = './img/gameOver.png';\r\n        _this.image.src = _this.urlImg;\r\n        _this.dx = -10;\r\n        return _this;\r\n    }\r\n    Button.prototype.draw = function () {\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.beginPath();\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.closePath();\r\n    };\r\n    Button.prototype.update = function () {\r\n        this.draw();\r\n    };\r\n    return Button;\r\n}(_abstracts_gameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject));\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/objects/button.ts?");

/***/ }),

/***/ "./src/objects/cactus.ts":
/*!*******************************!*\
  !*** ./src/objects/cactus.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cactus\": () => (/* binding */ Cactus)\n/* harmony export */ });\n/* harmony import */ var _abstracts_gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/gameObject */ \"./src/abstracts/gameObject.ts\");\n/* harmony import */ var _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/canvas */ \"./src/abstracts/canvas.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar Cactus = /** @class */ (function (_super) {\r\n    __extends(Cactus, _super);\r\n    function Cactus(x, y, w, h) {\r\n        var _this = _super.call(this, x, y, w, h) || this;\r\n        _this.image = new Image();\r\n        _this.urlImg = './img/cactus.png';\r\n        _this.image.src = _this.urlImg;\r\n        _this.dx = -10;\r\n        return _this;\r\n    }\r\n    Cactus.prototype.draw = function () {\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.beginPath();\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.closePath();\r\n    };\r\n    Cactus.prototype.update = function () {\r\n        this.x += this.dx;\r\n        this.draw();\r\n        this.dx = -10;\r\n    };\r\n    return Cactus;\r\n}(_abstracts_gameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject));\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/objects/cactus.ts?");

/***/ }),

/***/ "./src/objects/clouds.ts":
/*!*******************************!*\
  !*** ./src/objects/clouds.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cloud\": () => (/* binding */ Cloud)\n/* harmony export */ });\n/* harmony import */ var _abstracts_gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/gameObject */ \"./src/abstracts/gameObject.ts\");\n/* harmony import */ var _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/canvas */ \"./src/abstracts/canvas.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar Cloud = /** @class */ (function (_super) {\r\n    __extends(Cloud, _super);\r\n    function Cloud(x, y, w, h) {\r\n        var _this = _super.call(this, x, y, w, h) || this;\r\n        _this.image = new Image();\r\n        _this.urlImg = './img/cloud.png';\r\n        _this.image.src = _this.urlImg;\r\n        _this.dx = -20;\r\n        return _this;\r\n    }\r\n    Cloud.prototype.draw = function () {\r\n        //console.log(\"Cloud: draw\");\r\n        //console.log(this.x, this.y, this.w, this.h);\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.beginPath();\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.closePath();\r\n    };\r\n    Cloud.prototype.update = function () {\r\n        //console.log(\"Cloud: update\")\r\n        this.x += this.dx;\r\n        this.draw();\r\n    };\r\n    return Cloud;\r\n}(_abstracts_gameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject));\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/objects/clouds.ts?");

/***/ }),

/***/ "./src/objects/exports.ts":
/*!********************************!*\
  !*** ./src/objects/exports.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_0__.Player),\n/* harmony export */   \"Cactus\": () => (/* reexport safe */ _cactus__WEBPACK_IMPORTED_MODULE_1__.Cactus),\n/* harmony export */   \"Brid\": () => (/* reexport safe */ _brid__WEBPACK_IMPORTED_MODULE_2__.Brid),\n/* harmony export */   \"Cloud\": () => (/* reexport safe */ _clouds__WEBPACK_IMPORTED_MODULE_3__.Cloud),\n/* harmony export */   \"Text\": () => (/* reexport safe */ _Text__WEBPACK_IMPORTED_MODULE_4__.Text),\n/* harmony export */   \"Ground\": () => (/* reexport safe */ _ground__WEBPACK_IMPORTED_MODULE_5__.Ground),\n/* harmony export */   \"Button\": () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_6__.Button)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/objects/player.ts\");\n/* harmony import */ var _cactus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cactus */ \"./src/objects/cactus.ts\");\n/* harmony import */ var _brid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brid */ \"./src/objects/brid.ts\");\n/* harmony import */ var _clouds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clouds */ \"./src/objects/clouds.ts\");\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Text */ \"./src/objects/Text.ts\");\n/* harmony import */ var _ground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ground */ \"./src/objects/ground.ts\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button */ \"./src/objects/button.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/objects/exports.ts?");

/***/ }),

/***/ "./src/objects/game.ts":
/*!*****************************!*\
  !*** ./src/objects/game.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _abstracts_sceneManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/sceneManager */ \"./src/abstracts/sceneManager.ts\");\n\r\nvar Game = /** @class */ (function () {\r\n    function Game() {\r\n        this.sceneManager = new _abstracts_sceneManager__WEBPACK_IMPORTED_MODULE_0__.SceneManager;\r\n    }\r\n    Game.prototype.addScene = function (scene) {\r\n        console.log(\"Game: addScene\");\r\n        this.sceneManager.addScene(scene);\r\n    };\r\n    Game.prototype.start = function () {\r\n        var _this = this;\r\n        //console.log(\"Start\");\r\n        var time = window.performance.now();\r\n        var delta = window.performance.now() - this.lastTime;\r\n        this.lastTime = time;\r\n        var scene = _abstracts_sceneManager__WEBPACK_IMPORTED_MODULE_0__.SceneManager.currentScene;\r\n        scene.update(time, delta);\r\n        scene.draw();\r\n        requestAnimationFrame(function () {\r\n            _this.start();\r\n        });\r\n    };\r\n    return Game;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/objects/game.ts?");

/***/ }),

/***/ "./src/objects/ground.ts":
/*!*******************************!*\
  !*** ./src/objects/ground.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ground\": () => (/* binding */ Ground)\n/* harmony export */ });\n/* harmony import */ var _abstracts_gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/gameObject */ \"./src/abstracts/gameObject.ts\");\n/* harmony import */ var _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/canvas */ \"./src/abstracts/canvas.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar Ground = /** @class */ (function (_super) {\r\n    __extends(Ground, _super);\r\n    function Ground(x, y, w, h) {\r\n        var _this = _super.call(this, x, y, w, h) || this;\r\n        _this.image = new Image();\r\n        _this.urlImg = './img/ground.png';\r\n        _this.image.src = _this.urlImg;\r\n        _this.dx = -10;\r\n        return _this;\r\n    }\r\n    Ground.prototype.draw = function () {\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.beginPath();\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.closePath();\r\n    };\r\n    Ground.prototype.update = function () {\r\n        this.x += this.dx;\r\n        this.draw();\r\n        this.dx = -10;\r\n    };\r\n    return Ground;\r\n}(_abstracts_gameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject));\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/objects/ground.ts?");

/***/ }),

/***/ "./src/objects/player.ts":
/*!*******************************!*\
  !*** ./src/objects/player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _abstracts_gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/gameObject */ \"./src/abstracts/gameObject.ts\");\n/* harmony import */ var _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/canvas */ \"./src/abstracts/canvas.ts\");\n/* harmony import */ var _abstracts_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstracts/control */ \"./src/abstracts/control.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\nvar Player = /** @class */ (function (_super) {\r\n    __extends(Player, _super);\r\n    function Player(x, y, w, h) {\r\n        var _this = _super.call(this, x, y, w, h) || this;\r\n        _this.image = new Image();\r\n        _this.urlImg = './img/trex-1.png';\r\n        _this.image.src = _this.urlImg;\r\n        _this.originalHeight = _this.h;\r\n        _this.originalWeight = _this.w;\r\n        _this.grounded = false;\r\n        _this.ground = 54;\r\n        _this.jumpForce = 15;\r\n        _this.jumpTimer = 0;\r\n        _this.isBow = false;\r\n        _this.dy = 0;\r\n        _this.gravity = 1;\r\n        return _this;\r\n    }\r\n    Player.prototype.draw = function () {\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.beginPath();\r\n        if (this.isBow == false) {\r\n            this.urlImg = './img/trex-1.png';\r\n            this.image.src = this.urlImg;\r\n            _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);\r\n        }\r\n        else {\r\n            this.urlImg = './img/trex-2.png';\r\n            this.image.src = this.urlImg;\r\n            _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);\r\n        }\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.closePath();\r\n    };\r\n    Player.prototype.update = function () {\r\n        //console.log(\"Player : update\");\r\n        if (_abstracts_control__WEBPACK_IMPORTED_MODULE_2__.Control.keys.Space || _abstracts_control__WEBPACK_IMPORTED_MODULE_2__.Control.keys.KeyW || _abstracts_control__WEBPACK_IMPORTED_MODULE_2__.Control.keys.ArrowUp) {\r\n            this.jump();\r\n        }\r\n        else {\r\n            this.jumpTimer = 0;\r\n        }\r\n        if (_abstracts_control__WEBPACK_IMPORTED_MODULE_2__.Control.keys.ArrowDown || _abstracts_control__WEBPACK_IMPORTED_MODULE_2__.Control.keys.KeyS) {\r\n            this.isBow = true;\r\n            this.h = this.originalHeight * 3 / 4;\r\n        }\r\n        else {\r\n            this.isBow = false;\r\n            this.h = this.originalHeight;\r\n            this.w = this.originalWeight;\r\n        }\r\n        this.y += this.dy;\r\n        if (this.y + this.h < _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.height - this.ground) {\r\n            this.dy += this.gravity;\r\n            this.grounded = false;\r\n        }\r\n        else {\r\n            this.dy = 0;\r\n            this.grounded = true;\r\n            this.y = _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.height - this.h - this.ground;\r\n        }\r\n        this.draw();\r\n    };\r\n    Player.prototype.jump = function () {\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.ctx.clearRect(this.x, this.y, this.w, this.h);\r\n        if (this.grounded && this.jumpTimer == 0) {\r\n            this.jumpTimer = 1;\r\n            this.dy = -this.jumpForce;\r\n        }\r\n        else if (this.jumpTimer > 0 && this.jumpTimer < 15) {\r\n            this.jumpTimer++;\r\n            this.dy = -this.jumpForce - (this.jumpTimer / 50);\r\n        }\r\n    };\r\n    return Player;\r\n}(_abstracts_gameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject));\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/objects/player.ts?");

/***/ }),

/***/ "./src/objects/text.ts":
/*!*****************************!*\
  !*** ./src/objects/text.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Text\": () => (/* binding */ Text)\n/* harmony export */ });\n/* harmony import */ var _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/canvas */ \"./src/abstracts/canvas.ts\");\n\r\nvar Text = /** @class */ (function () {\r\n    function Text(text, x, y, a, c, s) {\r\n        this.t = text;\r\n        this.x = x;\r\n        this.y = y;\r\n        this.a = a;\r\n        this.c = c;\r\n        this.s = s;\r\n    }\r\n    Text.prototype.draw = function () {\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.ctx.beginPath();\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.ctx.fillStyle = this.c;\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.ctx.font = this.s + \"px sans-serif\";\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.ctx.textAlign = this.a;\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.ctx.fillText(this.t, this.x, this.y);\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.ctx.closePath();\r\n    };\r\n    return Text;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/objects/text.ts?");

/***/ }),

/***/ "./src/scenes/gameOverScene.ts":
/*!*************************************!*\
  !*** ./src/scenes/gameOverScene.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameOverScene\": () => (/* binding */ GameOverScene)\n/* harmony export */ });\n/* harmony import */ var _objects_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/text */ \"./src/objects/text.ts\");\n/* harmony import */ var _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/canvas */ \"./src/abstracts/canvas.ts\");\n/* harmony import */ var _abstracts_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstracts/control */ \"./src/abstracts/control.ts\");\n/* harmony import */ var _abstracts_sceneManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstracts/sceneManager */ \"./src/abstracts/sceneManager.ts\");\n/* harmony import */ var _playGameScene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playGameScene */ \"./src/scenes/playGameScene.ts\");\n/* harmony import */ var _objects_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../objects/button */ \"./src/objects/button.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar GameOverScene = /** @class */ (function (_super) {\r\n    __extends(GameOverScene, _super);\r\n    function GameOverScene() {\r\n        var _this = this;\r\n        //super();\r\n        _this.gameOverText = new _objects_text__WEBPACK_IMPORTED_MODULE_0__.Text(\"Game Over\", _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.width / 2 + 10, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.height / 2 - 70, 'center', 'black', '30');\r\n        _this.gameOverButton = new _objects_button__WEBPACK_IMPORTED_MODULE_5__.Button(_abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.width / 2 - 50, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas.height / 2 - 50, 100, 100);\r\n        return _this;\r\n    }\r\n    GameOverScene.prototype.draw = function () {\r\n        //console.log(\"Draw\");\r\n        this.gameOverButton.draw();\r\n        this.gameOverText.draw();\r\n    };\r\n    GameOverScene.prototype.update = function (time, delta) {\r\n        if (_abstracts_control__WEBPACK_IMPORTED_MODULE_2__.Control.keys.Space) {\r\n            console.log(\"Space\");\r\n            _abstracts_sceneManager__WEBPACK_IMPORTED_MODULE_3__.SceneManager.currentScene = (new _playGameScene__WEBPACK_IMPORTED_MODULE_4__.PlayGameScene());\r\n        }\r\n    };\r\n    return GameOverScene;\r\n}(Screen));\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scenes/gameOverScene.ts?");

/***/ }),

/***/ "./src/scenes/mainMenuScene.ts":
/*!*************************************!*\
  !*** ./src/scenes/mainMenuScene.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainMenuScene\": () => (/* binding */ MainMenuScene)\n/* harmony export */ });\n/* harmony import */ var _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/canvas */ \"./src/abstracts/canvas.ts\");\n/* harmony import */ var _objects_exports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/exports */ \"./src/objects/exports.ts\");\n/* harmony import */ var _abstracts_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstracts/control */ \"./src/abstracts/control.ts\");\n/* harmony import */ var _abstracts_sceneManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstracts/sceneManager */ \"./src/abstracts/sceneManager.ts\");\n/* harmony import */ var _playGameScene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playGameScene */ \"./src/scenes/playGameScene.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n\r\nvar MainMenuScene = /** @class */ (function (_super) {\r\n    __extends(MainMenuScene, _super);\r\n    function MainMenuScene() {\r\n        var _this = this;\r\n        //super();\r\n        _this.startText = new _objects_exports__WEBPACK_IMPORTED_MODULE_1__.Text(\"PRESS SPACE TO START GAME\", _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.width / 2 + 45, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.height / 2 - 20, 'center', 'black', '30');\r\n        _this.scoreText = new _objects_exports__WEBPACK_IMPORTED_MODULE_1__.Text(\"Score: 0\", 25, 25, \"left\", \"#212121\", \"20\");\r\n        _this.highscore = 0;\r\n        if (localStorage.getItem('highscore')) {\r\n            _this.highscore = Number(localStorage.getItem('highscore'));\r\n        }\r\n        _this.highscoreText = new _objects_exports__WEBPACK_IMPORTED_MODULE_1__.Text(\"Highscore: \" + _this.highscore, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.width - 25, 25, \"right\", \"#212121\", \"20\");\r\n        _this.player = new _objects_exports__WEBPACK_IMPORTED_MODULE_1__.Player(25, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.height - 150, 100, 100);\r\n        _this.ground = new _objects_exports__WEBPACK_IMPORTED_MODULE_1__.Ground(0, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.height - 54, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.width, 10);\r\n        return _this;\r\n    }\r\n    MainMenuScene.prototype.draw = function () {\r\n        //console.log(\"Draw\");\r\n        this.startText.draw();\r\n        this.scoreText.draw();\r\n        this.highscoreText.draw();\r\n        this.player.draw();\r\n        this.ground.draw();\r\n    };\r\n    MainMenuScene.prototype.update = function (time, delta) {\r\n        if (_abstracts_control__WEBPACK_IMPORTED_MODULE_2__.Control.keys.Space) {\r\n            console.log(\"Space\");\r\n            _abstracts_sceneManager__WEBPACK_IMPORTED_MODULE_3__.SceneManager.currentScene = (new _playGameScene__WEBPACK_IMPORTED_MODULE_4__.PlayGameScene());\r\n        }\r\n    };\r\n    return MainMenuScene;\r\n}(Screen));\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scenes/mainMenuScene.ts?");

/***/ }),

/***/ "./src/scenes/playGameScene.ts":
/*!*************************************!*\
  !*** ./src/scenes/playGameScene.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayGameScene\": () => (/* binding */ PlayGameScene)\n/* harmony export */ });\n/* harmony import */ var _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/canvas */ \"./src/abstracts/canvas.ts\");\n/* harmony import */ var _abstracts_sceneManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstracts/sceneManager */ \"./src/abstracts/sceneManager.ts\");\n/* harmony import */ var _objects_exports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/exports */ \"./src/objects/exports.ts\");\n/* harmony import */ var _gameOverScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameOverScene */ \"./src/scenes/gameOverScene.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\nvar PlayGameScene = /** @class */ (function (_super) {\r\n    __extends(PlayGameScene, _super);\r\n    function PlayGameScene() {\r\n        var _this = this;\r\n        _this.initialSpawnTimer = 200;\r\n        _this.spawnTimer = _this.initialSpawnTimer;\r\n        _this.isDead = false;\r\n        _this.clouds = [];\r\n        _this.obstacles = [];\r\n        // super();\r\n        _this.scoreText = new _objects_exports__WEBPACK_IMPORTED_MODULE_2__.Text(\"Score: 0\", 25, 25, \"left\", \"#212121\", \"20\");\r\n        _this.highscore = 0;\r\n        _this.score = 0;\r\n        if (localStorage.getItem('highscore')) {\r\n            _this.highscore = Number(localStorage.getItem('highscore'));\r\n        }\r\n        _this.highscoreText = new _objects_exports__WEBPACK_IMPORTED_MODULE_2__.Text(\"Highscore: \" + _this.highscore, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.width - 25, 25, \"right\", \"#212121\", \"20\");\r\n        _this.player = new _objects_exports__WEBPACK_IMPORTED_MODULE_2__.Player(25, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.height - 150, 100, 100);\r\n        _this.ground = new _objects_exports__WEBPACK_IMPORTED_MODULE_2__.Ground(0, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.height - 54, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.width, 10);\r\n        _this.cactus = new _objects_exports__WEBPACK_IMPORTED_MODULE_2__.Cactus(4000, 4000, 50, 120);\r\n        _this.brid = new _objects_exports__WEBPACK_IMPORTED_MODULE_2__.Brid(4000, 4000, 120, 70);\r\n        _this.cloud = new _objects_exports__WEBPACK_IMPORTED_MODULE_2__.Cloud(4000, 2000, 120, 70);\r\n        _this.gameSpeed = 10;\r\n        return _this;\r\n    }\r\n    PlayGameScene.prototype.draw = function () {\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.ctx.clearRect(0, 0, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.width, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.width);\r\n        this.scoreText.draw();\r\n        this.highscoreText.draw();\r\n        this.player.draw();\r\n        this.ground.draw();\r\n        this.cactus.draw();\r\n        this.brid.draw();\r\n        this.cloud.draw();\r\n    };\r\n    PlayGameScene.prototype.swapCloud = function () {\r\n        this.cloud = new _objects_exports__WEBPACK_IMPORTED_MODULE_2__.Cloud(_abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.width, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.height - 300, 120, 70);\r\n        this.clouds.push(this.cloud);\r\n    };\r\n    PlayGameScene.prototype.swapObstacle = function () {\r\n        var type = this.random(0, 2);\r\n        if (type == 0) {\r\n            this.brid = new _objects_exports__WEBPACK_IMPORTED_MODULE_2__.Brid(_abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.width + 50, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.height - 200, 120, 70);\r\n            this.obstacles.push(this.brid);\r\n        }\r\n        else {\r\n            this.cactus = new _objects_exports__WEBPACK_IMPORTED_MODULE_2__.Cactus(_abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.width + 50, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.height - 170, 50, 120);\r\n            this.obstacles.push(this.cactus);\r\n        }\r\n    };\r\n    PlayGameScene.prototype.random = function (min, max) {\r\n        return Math.round(Math.random() * (max - min) + min);\r\n    };\r\n    PlayGameScene.prototype.update = function (time, delta) {\r\n        _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.ctx.clearRect(0, 0, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.width, _abstracts_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas.height);\r\n        //score;\r\n        this.score++;\r\n        this.scoreText.t = \"Score: \" + this.score;\r\n        if (this.score > this.highscore) {\r\n            this.highscore = this.score;\r\n            this.highscoreText.t = \"Highscore: \" + this.highscore;\r\n        }\r\n        this.scoreText.draw();\r\n        this.highscoreText.draw();\r\n        // Spawn clouds and obstacles\r\n        this.spawnTimer--;\r\n        if (this.spawnTimer <= 0) {\r\n            this.swapCloud();\r\n            this.swapObstacle();\r\n            this.spawnTimer = this.initialSpawnTimer - 12;\r\n            if (this.spawnTimer < 60) {\r\n                this.spawnTimer = 60;\r\n            }\r\n        }\r\n        for (var i = 0; i < this.clouds.length; i++) {\r\n            //console.log(\"Swap Cloud\");\r\n            var o = this.clouds[i];\r\n            if (o.x + o.w < 0) {\r\n                this.clouds.slice(i, 1);\r\n            }\r\n            o.update();\r\n        }\r\n        for (var i = 0; i < this.obstacles.length; i++) {\r\n            console.log();\r\n            var o = this.obstacles[i];\r\n            if (o.x + o.w < 0) {\r\n                console.log(1);\r\n                this.obstacles.splice(i, 1);\r\n            }\r\n            console.log(\"---------------------\");\r\n            console.log(this.player.x);\r\n            console.log(this.player.w);\r\n            console.log(o.w);\r\n            console.log(this.player.x < o.x + o.w);\r\n            if (this.player.x < o.x + o.w\r\n                && this.player.x + this.player.w > o.x\r\n                && this.player.y < o.y + o.h\r\n                && this.player.y + this.player.h > o.y) {\r\n                this.obstacles = [];\r\n                this.score = 0;\r\n                this.spawnTimer = this.initialSpawnTimer;\r\n                this.gameSpeed = 10;\r\n                _abstracts_sceneManager__WEBPACK_IMPORTED_MODULE_1__.SceneManager.currentScene = new _gameOverScene__WEBPACK_IMPORTED_MODULE_3__.GameOverScene();\r\n            }\r\n            o.update();\r\n        }\r\n        this.player.update();\r\n    };\r\n    return PlayGameScene;\r\n}(Screen));\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scenes/playGameScene.ts?");

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