/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/MovingObject.js":
/*!*****************************!*\
  !*** ./src/MovingObject.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovingObject; });\nclass MovingObject{\n    constructor(pos){\n        this.pos = pos;\n    }\n}\n\n//# sourceURL=webpack:///./src/MovingObject.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: IMAGES, KEY, MOVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMAGES\", function() { return IMAGES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEY\", function() { return KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOVES\", function() { return MOVES; });\nconst IMAGES = {\n    mario: {\n        up: [],\n        upright: [],\n        right: [],\n        downright: [],\n        down: [],\n        downleft: [],\n        left: [],\n        upleft: []\n    }\n}\n\nconst KEY = {\n    W: 87,\n    A: 65,\n    S: 83,\n    D: 68,\n}\n\nconst MOVES = {\n    UP: [0, -2],\n    LEFT: [-2, 0],\n    DOWN: [0, 2],\n    RIGHT: [2, 0],\n    ZERO: [0, 0]\n};\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _mario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mario */ \"./src/mario.js\");\n\n\nclass Game {\n    constructor(){\n        this.mario = new _mario__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n\n    draw(ctx){\n        ctx.clearRect(0, 0, 1200, 800);\n        ctx.fillStyle = \"#888888\";\n        ctx.fillRect(0, 0, 1200, 800)\n        ctx.drawImage(this.mario.image(), this.mario.pos[0], this.mario.pos[1])\n    }\n\n    moveObjects(){\n        this.mario.move();\n    }\n\n    allObejcts(){\n        return this.mario;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameview.js":
/*!*************************!*\
  !*** ./src/gameview.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameView; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\n\n\n\n\nclass GameView {\n    constructor(game, ctx) {\n        this.game = game;\n        this.ctx = ctx;\n        this.mario = this.game.mario;\n        this.keyDown = {}\n        this.handleKeydown = this.handleKeydown.bind(this);\n        // this.handleKeyup = this.handleKeyup.bind(this);\n        document.addEventListener(\"keydown\", this.handleKeydown);\n    }\n\n    start() {\n        \n        _util__WEBPACK_IMPORTED_MODULE_0__[\"loadImages\"](()=>{\n            setInterval(() => {\n                this.game.draw(this.ctx);\n                this.game.moveObjects();\n            }, 50)\n        });\n            \n    }\n\n    handleKeydown(e){\n        if (e.repeatd) return;\n        switch(e.keyCode){\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].S:\n                if(this.mario.direction != \"down\"){\n                    this.mario.switchDirection(\"down\")\n                }\n                this.mario.changeVelocity(_constants__WEBPACK_IMPORTED_MODULE_1__[\"MOVES\"].DOWN)\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].W:\n                if(this.mario.direction != \"up\"){\n                    this.mario.switchDirection(\"up\")\n                }\n                this.mario.changeVelocity(_constants__WEBPACK_IMPORTED_MODULE_1__[\"MOVES\"].UP)\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].A:\n                if (this.mario.direction != \"left\") {\n                    this.mario.switchDirection(\"left\")\n                }\n                this.mario.changeVelocity(_constants__WEBPACK_IMPORTED_MODULE_1__[\"MOVES\"].LEFT)\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].D:\n                if (this.mario.direction != \"right\") {\n                    this.mario.switchDirection(\"right\")\n                }\n                this.mario.changeVelocity(_constants__WEBPACK_IMPORTED_MODULE_1__[\"MOVES\"].RIGHT)\n                break;\n        }\n    }\n\n    // handleKeyup(e){\n    //     if (!e) return;\n    //     switch (e.keyCode) {\n    //         case KEY.S:\n    //             if (this.mario.direction != \"down\") {\n    //                 this.mario.switchDirection(\"down\")\n    //             }\n    //             this.mario.changeVelocity(MOVES.DOWN)\n    //             break;\n    //         case KEY.W:\n    //             if (this.mario.direction != \"up\") {\n    //                 this.mario.switchDirection(\"up\")\n    //             }\n    //             this.mario.changeVelocity(MOVES.UP)\n    //     }\n    // }\n}\n\n\n\n//# sourceURL=webpack:///./src/gameview.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameview */ \"./src/gameview.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{\n    let canvas = document.getElementById('game-canvas');\n    canvas.width = 1200;\n    canvas.height = 800;\n\n\n    const ctx = canvas.getContext(\"2d\");\n    const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    new _gameview__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, ctx).start();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mario.js":
/*!**********************!*\
  !*** ./src/mario.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ \"./src/MovingObject.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\nclass Mario extends _MovingObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor(pos = [600, 400], vel=[0, 0]){\n        super(pos);\n        this.imageCount = 0;    \n        this.direction = \"down\";\n        this.vel = vel; \n    }\n\n    image(){\n        let image = _constants__WEBPACK_IMPORTED_MODULE_1__[\"IMAGES\"].mario[this.direction][this.imageCount]\n        this.imageCount = (this.imageCount + 1) % 8\n        return image\n    }\n\n    switchDirection(direction){\n        this.direction = direction;\n        this.imageCount = 0;\n    }\n\n    move(){\n        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]\n    }\n\n    changeVelocity(vel){\n        this.vel = [this.vel[0] + vel[0], this.vel[1] + vel[1]];\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mario);\n\n//# sourceURL=webpack:///./src/mario.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: loadImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImages\", function() { return loadImages; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nconst loadImages= (callback) => \n{\n    let count = 0;\n\n    const directions = [\"up\", \"upright\", \"right\", \"downright\", \"down\", \"downleft\", \"left\", \"upleft\"];\n    const spriteCount = 8;\n    let total = 0;\n\n    directions.forEach(direction => {\n        for (let i = 1; i <= spriteCount; i++) {\n            total += 1\n\n            let img = new Image();\n            img.onload = loaded;\n            img.src = `../vendors/mario/mario_${direction}_${i}.png`\n            _constants__WEBPACK_IMPORTED_MODULE_0__[\"IMAGES\"].mario[direction].push(img)\n        }\n\n        function loaded() {\n            count++;\n            if (count >= total) {\n                callback();\n            }\n        }\n    })\n}\n\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });