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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovingObject; });\nclass MovingObject{\n    constructor(pos, vel, direction, imageCount){\n        this.pos = pos;\n        this.vel = vel;\n        this.direction = direction;\n        this.imageCount = imageCount\n    }\n}\n\n//# sourceURL=webpack:///./src/MovingObject.js?");

/***/ }),

/***/ "./src/boo.js":
/*!********************!*\
  !*** ./src/boo.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ \"./src/MovingObject.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\nWindow.image = _constants__WEBPACK_IMPORTED_MODULE_1__[\"IMAGES\"]\n\nclass Boo extends _MovingObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(pos, vel = [0, 0], direction = \"left\", imageCount = 0, state=\"attacking\") {\n        super(pos, vel, direction, imageCount);\n        this.state = state;\n        this.counter = 0;\n        this.hitbox = {x: 15, y: 11, radius: 8}\n    }\n\n    image() {\n        let image = _constants__WEBPACK_IMPORTED_MODULE_1__[\"IMAGES\"].boo[this.direction][this.state][this.imageCount]\n        return image\n    }\n\n    nextMove(mario, gameContinue) {\n        if (gameContinue){\n            let dx = mario.pos[0] - this.pos[0];\n            let dy = mario.pos[1] - this.pos[1];\n            let distance = Math.sqrt(dx*dx+dy*dy)\n            this.vel = [_constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"]*dx/distance/2, _constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"]*dy/distance/2]\n            if (dx > 0) {\n                this.direction = \"right\";\n            } else{\n                this.direction = \"left\";\n            }\n        } else{\n            this.vel = [0,0]\n        }\n    }\n\n    move() {\n        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]\n        this.counter++\n        if (this.counter > 4){\n            this.counter = 0;\n            this.imageCount = (this.imageCount + 1) % _constants__WEBPACK_IMPORTED_MODULE_1__[\"IMAGES\"].boo[this.direction][this.state].length;\n        }\n    }\n\n    addVelocity(vel) {\n        vel = [vel[0] * _constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"], vel[1] * _constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"]];\n        this.vel = [this.vel[0] + vel[0], this.vel[1] + vel[1]];\n        this.changeDirection();\n    }\n\n    removeVelocity(vel) {\n        vel = [vel[0] * _constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"], vel[1] * _constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"]];\n        this.vel = [this.vel[0] - vel[0], this.vel[1] - vel[1]];\n        this.changeDirection();\n    }\n\n    checkCollision(mario){\n        let marioRange = {\n            lowX: mario.pos[0]+mario.hitbox.x,\n            highX: mario.pos[0] + mario.hitbox.x + mario.hitbox.width,\n            lowY: mario.pos[1] + mario.hitbox.y,\n            highY: mario.pos[1] + mario.hitbox.y + mario.hitbox.height,\n        }\n\n        let booRange = {\n            lowX: this.pos[0] + this.hitbox.x,\n            highX: this.pos[0] + this.hitbox.x + this.hitbox.width,\n            lowY: this.pos[1] + this.hitbox.y,\n            highY: this.pos[1] + this.hitbox.y + this.hitbox.height\n        }\n\n        let distX = Math.abs(booRange.lowX - marioRange.lowX - mario.hitbox.width/2);\n        let distY = Math.abs(booRange.lowY - marioRange.lowY - mario.hitbox.height/2);\n\n        if (distX < (mario.hitbox.width / 2 + this.hitbox.radius) && distY < (mario.hitbox.height / 2 + this.hitbox.radius)){\n            return true\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Boo);\n\n//# sourceURL=webpack:///./src/boo.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: GAME_WIDTH, GAME_HEIGHT, SPEED, DIAG_SPEED, SPAWN_RANGE, IMAGES, KEY, MOVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_WIDTH\", function() { return GAME_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_HEIGHT\", function() { return GAME_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SPEED\", function() { return SPEED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIAG_SPEED\", function() { return DIAG_SPEED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SPAWN_RANGE\", function() { return SPAWN_RANGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMAGES\", function() { return IMAGES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEY\", function() { return KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOVES\", function() { return MOVES; });\nconst GAME_WIDTH = 1280;\nconst GAME_HEIGHT = 720; \nconst SPEED = 2;\nconst DIAG_SPEED = Math.sqrt(2);\nconst SPAWN_RANGE = 50;\n\nconst IMAGES = {\n    mario: {\n        up: [],\n        upright: [],\n        right: [],\n        downright: [],\n        down: [],\n        downleft: [],\n        left: [],\n        upleft: []\n    },\n    boo: {\n        left:{\n            attacking: [],\n            hiding: []\n        },\n        right: {\n            attacking: [],\n            hiding: []\n        }\n    }\n}\n\nconst KEY = {\n    W: 87,\n    A: 65,\n    S: 83,\n    D: 68,\n    W: 87,\n    UP: 38,\n    LEFT: 37,\n    DOWN: 40,\n    RIGHT: 39,\n};\n\nconst MOVES = {\n    UP: [0, -1],\n    LEFT: [-1, 0],\n    DOWN: [0, 1],\n    RIGHT: [1, 0],\n    ZERO: [0, 0]\n};\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _mario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mario */ \"./src/mario.js\");\n/* harmony import */ var _boo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boo */ \"./src/boo.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\n\nclass Game {\n    constructor() {\n        this.mario = new _mario__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.boos = [];\n        this.maxGhosts = 20;\n        this.addBoo();\n        this.booRandomPosition = this.booRandomPosition.bind(this)\n        this.dead = false;\n        this.checkCollisions = this.checkCollisions.bind(this)\n    }\n\n    addBoo(){\n        if (!this.dead){\n            if (this.boos.length > this.maxGhosts){\n                this.boos.shift();\n            }\n\n            this.boos.push(new _boo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.booRandomPosition()));\n        }\n    }\n\n    booRandomPosition(){\n        let booX = Math.floor(Math.random()*_constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_WIDTH\"]);\n        let booY = Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_HEIGHT\"]);\n        let booPos = [booX, booY]\n        if ((this.mario.pos[0] >= (booX - _constants__WEBPACK_IMPORTED_MODULE_2__[\"SPAWN_RANGE\"]) && this.mario.pos[0] <= (booX + _constants__WEBPACK_IMPORTED_MODULE_2__[\"SPAWN_RANGE\"])) ||\n            (this.mario.pos[1] >= (booY - _constants__WEBPACK_IMPORTED_MODULE_2__[\"SPAWN_RANGE\"]) && this.mario.pos[1] <= (booY + _constants__WEBPACK_IMPORTED_MODULE_2__[\"SPAWN_RANGE\"]))){\n            booPos = this.booRandomPosition();\n        }\n        return booPos;\n    }\n\n    draw(ctx){\n        ctx.clearRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_WIDTH\"], _constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_HEIGHT\"]);\n        ctx.fillStyle = \"#888888\";\n        ctx.fillRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_WIDTH\"], _constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_HEIGHT\"])\n        ctx.drawImage(this.mario.image(), this.mario.pos[0], this.mario.pos[1])\n        for (let i = 0; i < this.boos.length; i++) {\n            let boo = this.boos[i];\n            boo.nextMove(this.mario, !this.dead);\n            ctx.drawImage(boo.image(), boo.pos[0], boo.pos[1]);\n        } \n        this.drawDarkness(ctx)\n    }\n\n    drawDarkness(ctx){\n        ctx.beginPath();\n        ctx.fillStyle = \"black\";\n        ctx.arc(this.mario.pos[0] + 15, this.mario.pos[1] + 20, 100, 0, 2 * Math.PI);\n        ctx.rect(_constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_WIDTH\"], 0, -_constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_WIDTH\"], _constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_HEIGHT\"]);\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    moveObjects(){\n        for (let i = 0; i < this.allObjects().length; i++){\n            this.allObjects()[i].move()\n        }\n    }\n\n    checkCollisions(){\n        for(let i = 0; i<this.boos.length; i++){\n            if(this.boos[i].checkCollision(this.mario)){\n                this.gameOver()\n            }\n        }\n    }\n\n    step(){\n        this.moveObjects();\n        this.checkCollisions();\n    }\n\n    allObjects(){\n        let arr = Object.assign([], this.boos)\n        arr.push(this.mario);\n        return arr\n    }\n\n    gameOver(){\n        this.dead = true;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameview.js":
/*!*************************!*\
  !*** ./src/gameview.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameView; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\nclass GameView {\n    constructor(game, ctx) {\n        this.game = game;\n        this.ctx = ctx;\n        this.mario = this.game.mario;\n        this.gameOver = this.game.dead;\n        this.keyDown = {}\n        this.handleKeydown = this.handleKeydown.bind(this);\n        this.handleKeyup = this.handleKeyup.bind(this);\n        this.ghostCounter = 0;\n        this.step = this.step.bind(this)\n        document.addEventListener(\"keydown\", this.handleKeydown);\n        document.addEventListener(\"keyup\", this.handleKeyup);\n    }\n\n    start() {\n        _util__WEBPACK_IMPORTED_MODULE_0__[\"loadImages\"](()=>{\n            requestAnimationFrame(this.step)\n        });       \n    }\n\n    step(timestamp){\n        this.ghostCounter++;\n        if(this.ghostCounter > 20){\n            this.ghostCounter = 0;\n            this.game.addBoo();\n        }\n        this.game.draw(this.ctx);\n        this.game.step();\n        requestAnimationFrame(this.step)\n    }\n\n    handleKeydown(e){\n        if (e.repeat || this.keyDown[e.keyCode]) return;\n        debugger\n        if (!this.gameOver){\n            switch(e.keyCode){           \n                case _constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].W:\n                    this.mario.addVelocity(_constants__WEBPACK_IMPORTED_MODULE_1__[\"MOVES\"].UP)\n                    this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].W] = true;\n                    break;\n                case _constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].A:\n                    this.mario.addVelocity(_constants__WEBPACK_IMPORTED_MODULE_1__[\"MOVES\"].LEFT)\n                    this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].A] = true;\n                    break;\n                case _constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].S:\n                    this.mario.addVelocity(_constants__WEBPACK_IMPORTED_MODULE_1__[\"MOVES\"].DOWN)\n                    this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].S] = true;\n                    break;\n                case _constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].D:\n                    this.mario.addVelocity(_constants__WEBPACK_IMPORTED_MODULE_1__[\"MOVES\"].RIGHT)\n                    this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].D] = true;\n                    break;\n            }\n        }\n    }\n\n    handleKeyup(e){\n        switch (e.keyCode) {\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].W:\n                this.mario.removeVelocity(_constants__WEBPACK_IMPORTED_MODULE_1__[\"MOVES\"].UP);\n                this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].W] = false;\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].A:\n                this.mario.removeVelocity(_constants__WEBPACK_IMPORTED_MODULE_1__[\"MOVES\"].LEFT);\n                this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].A] = false;\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].S:\n                this.mario.removeVelocity(_constants__WEBPACK_IMPORTED_MODULE_1__[\"MOVES\"].DOWN);\n                this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].S] = false;\n                break;\n            case _constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].D:\n                this.mario.removeVelocity(_constants__WEBPACK_IMPORTED_MODULE_1__[\"MOVES\"].RIGHT);\n                this.keyDown[_constants__WEBPACK_IMPORTED_MODULE_1__[\"KEY\"].D] = false;\n                break;\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/gameview.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameview */ \"./src/gameview.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{\n    let canvas = document.getElementById('game-canvas');\n    canvas.width = _constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_WIDTH\"];\n    canvas.height = _constants__WEBPACK_IMPORTED_MODULE_2__[\"GAME_HEIGHT\"];\n\n\n    const ctx = canvas.getContext(\"2d\");\n    const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    new _gameview__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game, ctx).start();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mario.js":
/*!**********************!*\
  !*** ./src/mario.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MovingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovingObject */ \"./src/MovingObject.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\nclass Mario extends _MovingObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor(pos = [_constants__WEBPACK_IMPORTED_MODULE_1__[\"GAME_WIDTH\"] / 2, _constants__WEBPACK_IMPORTED_MODULE_1__[\"GAME_HEIGHT\"] / 2 - 20], vel = [0, 0], direction = \"down\", imageCount = 3){\n        super(pos, vel, direction, imageCount);\n        this.counter = 0;\n        this.hitbox = {x: 12, y: 9, width: 7, height: 19}\n    }\n\n    image(){\n        let image = _constants__WEBPACK_IMPORTED_MODULE_1__[\"IMAGES\"].mario[this.direction][this.imageCount]\n        return image\n    }\n\n    changeDirection(){\n        if(this.vel[0] === 0 && this.vel[1] === -_constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"]){\n            this.direction = \"up\";\n        } \n        else if (this.vel[0] === 0 && this.vel[1] === _constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"]){\n            this.direction = \"down\"\n        }\n        else if (this.vel[0] === _constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"] && this.vel[1] === 0) {\n            this.direction = \"right\"\n        }\n        else if (this.vel[0] === -_constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"] && this.vel[1] === 0) {\n            this.direction = \"left\"\n        }\n        else if (this.vel[0] === _constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"] && this.vel[1] === _constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"]) {\n            this.direction = \"downright\"\n        }\n        else if (this.vel[0] === -_constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"] && this.vel[1] === _constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"]) {\n            this.direction = \"downleft\"\n        }\n        else if (this.vel[0] === _constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"] && this.vel[1] === -_constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"]) {\n            this.direction = \"upright\"\n        }\n        else if (this.vel[0] === -_constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"] && this.vel[1] === -_constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"]) {\n            this.direction = \"upleft\"\n        }\n        this.imageCount = 3;\n    }\n\n    move(){\n        if (Math.abs(this.vel[0]) === Math.abs(this.vel[1])){\n            this.pos = [this.pos[0] + this.vel[0] / _constants__WEBPACK_IMPORTED_MODULE_1__[\"DIAG_SPEED\"], this.pos[1] + this.vel[1] / _constants__WEBPACK_IMPORTED_MODULE_1__[\"DIAG_SPEED\"]]\n        } else {\n            this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]\n        }\n        this.counter++\n        if (this.counter > 4) {\n            this.counter = 0\n            if (this.vel[0] != 0 || this.vel[1] != 0){\n                this.imageCount = (this.imageCount + 1) % 8\n            }   \n        }     \n    }\n\n    addVelocity(vel){\n        vel = [vel[0] * _constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"], vel[1] * _constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"]];\n        this.vel = [this.vel[0] + vel[0], this.vel[1] + vel[1]];\n        this.changeDirection();\n    }\n\n    removeVelocity(vel){\n        vel = [vel[0] * _constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"], vel[1] * _constants__WEBPACK_IMPORTED_MODULE_1__[\"SPEED\"]];\n        this.vel = [this.vel[0] - vel[0], this.vel[1] - vel[1]];\n        this.changeDirection();\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mario);\n\n//# sourceURL=webpack:///./src/mario.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: loadImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImages\", function() { return loadImages; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\nconst loadImages= (callback) => \n{\n    let count = 0;\n\n    const directions = [\"up\", \"upright\", \"right\", \"downright\", \"down\", \"downleft\", \"left\", \"upleft\"];\n    const spriteCount = 8;\n    let total = 0;\n\n    directions.forEach(direction => {\n        for (let i = 1; i <= spriteCount; i++) {\n            total += 1\n\n            let img = new Image();\n            img.onload = loaded;\n            img.src = `../vendors/mario/mario_${direction}_${i}.png`\n            _constants__WEBPACK_IMPORTED_MODULE_0__[\"IMAGES\"].mario[direction].push(img)\n        }\n    })\n\n    for (let i = 1; i <= 7; i++) {\n        total += 1;\n        let img = new Image();\n        img.onload = loaded;\n        img.src = `../vendors/boo/boo_left_hiding_${i}.png`\n        _constants__WEBPACK_IMPORTED_MODULE_0__[\"IMAGES\"].boo.left.hiding.push(img)\n    }\n\n    for (let i = 1; i <= 7; i++) {\n        total += 1;\n        let img = new Image();\n        img.onload = loaded;\n        img.src = `../vendors/boo/boo_right_hiding_${i}.png`\n        _constants__WEBPACK_IMPORTED_MODULE_0__[\"IMAGES\"].boo.right.hiding.push(img)\n    }\n\n    for (let i = 1; i <= 5; i++) {\n        total += 1;\n        let img = new Image();\n        img.onload = loaded;\n        img.src = `../vendors/boo/boo_left_attacking_${i}.png`\n        _constants__WEBPACK_IMPORTED_MODULE_0__[\"IMAGES\"].boo.left.attacking.push(img)\n    }\n\n    for (let i = 1; i <= 5; i++) {\n        total += 1;\n        let img = new Image();\n        img.onload = loaded;\n        img.src = `../vendors/boo/boo_right_attacking_${i}.png`\n        _constants__WEBPACK_IMPORTED_MODULE_0__[\"IMAGES\"].boo.right.attacking.push(img)\n    }\n\n    function loaded() {\n        count++;\n        if (count >= total) {\n            callback();\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });