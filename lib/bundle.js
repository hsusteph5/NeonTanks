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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/neontanks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MovingObject {\n    constructor(options){\n        this.pos = options.pos;\n        this.vel = options.vel;\n        this.radius = options.radius;\n        this.color = options.color;\n        this.game = options.game;\n        this.isWrappable = true;\n        this.shadowColor = options.shadowColor;\n        this.ctx = options.ctx\n    }\n\n    draw(ctx){\n        //tanks\n        ctx.beginPath();\n        ctx.moveTo(this.pos[0], this.pos[1]);\n        ctx.lineTo(this.pos[0] + 5, this.pos[1] - 10);\n        ctx.lineTo(this.pos[0] + 25, this.pos[1] - 10);\n        ctx.lineTo(this.pos[0] + 30, this.pos[1]);\n        ctx.closePath();\n        ctx.lineWidth = 10;\n        ctx.shadowBlur = 10;\n        ctx.shadowColor = this.shadowColor;\n        // ctx.stroke();\n        // ctx.fillStyle = \"#00FFFF\";\n        ctx.fillStyle = this.color;\n        ctx.fill();\n    }\n\n    move(timeDelta) {\n        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA, \n            offsetX = this.vel[0] * velocityScale\n        this.pos = [this.pos[0] * offsetX, this.pos[1] ]\n        // if (this.game.isOutOfBounds(this.pos)) {\n        //     if (this.isWrappable){\n        //         this.pos = this.game.wrap(this.pos);\n        //     } else {\n        //         this.remove();\n        //     }\n        // }\n    }\n}\n\n\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\n// const mo = new MovingObj( \n//     { pos: [30, 30, vel: [10,10], radius: 5, color: \"#00FF00\"]}\n// )\n\nmodule.exports = MovingObject;\n\n//creating after glow in for my tanks: \n// https://stackoverflow.com/questions/5067368/html5-canvas-create-outer-glow-effect-of-shape\n\n//canvas drawing of the trapezoid\n// this.ctx.beginPath();\n// this.ctx.moveTo(0, 0);\n// this.ctx.lineTo(15, 25);\n// this.ctx.lineTo(35, 25);\n// this.ctx.lineTo(50, 0);\n// this.ctx.closePath();\n// this.ctx.strokeStyle = \"#97FFFF\";\n// this.ctx.lineWidth = 7;\n// this.ctx.stroke();\n// this.ctx.fillStyle = \"#00FFFF\";\n// this.ctx.fill();\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/neontanks.js":
/*!**************************!*\
  !*** ./lib/neontanks.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//entry file\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Tank = __webpack_require__(/*! ./tank.js */ \"./lib/tank.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"game-canvas\");\n    canvasEl.width = 800;\n    canvasEl.height = 800;\n\n    const ctx = canvasEl.getContext(\"2d\");\n\n\n    //background color\n    ctx.fillStyle = \"#202020\";\n    ctx.fillRect(0, 0, 800, 800);\n    \n\n    //background line\n    ctx.beginPath();\n    ctx.moveTo(0,700);\n    ctx.lineTo(800,700);\n    ctx.shadowBlur = 10;\n    ctx.shadowColor = \"#ffffff\";\n    ctx.strokeStyle = \"#ffffff\";\n    ctx.lineWidth = 5;\n    ctx.stroke();\n\n    // movingObj = new MovingObject({ pos: [0, 750], vel: [10, 10], radius: 5, color: \"#00FF00\", ctx});\n    // movingObj.draw(ctx);\n    // movingObj.move();\n    let myTank = new Tank({pos: [0, 690], color: \"#00FFFF\", shadowColor: \"#97FFFF\"});\n    myTank.draw(ctx);\n    let enemyTank = new Tank({pos: [690, 690], color: \"#ff4c4c\", shadowColor: \"#ffb2b2\"});\n    enemyTank.draw(ctx);\n    console.log('webpack is running!')\n})\n\n// ctx.arc(100, 100, 20, 0, 2*Math.PI, true);\n\n//# sourceURL=webpack:///./lib/neontanks.js?");

/***/ }),

/***/ "./lib/tank.js":
/*!*********************!*\
  !*** ./lib/tank.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./lib/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\nconst DEFAULTS = {\n    COLOR: \"#00FFFF\",\n    SPEED: 4\n};\n\n//randomizing the X position is not working\nclass Tank extends MovingObject {\n    constructor(options){\n        // options.color = DEFAULTS.COLOR;\n        // options.pos = Util.randomXPos(options.pos[0], options.pos[1]);\n\n        super(options);\n    }\n}\n\nmodule.exports = Tank;\n\n//# sourceURL=webpack:///./lib/tank.js?");

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//random position of the future enemy \nconst Util = {\n    // inherits(childClass, parentClass){\n\n    // }\n    randomXPos(posX) {\n        newXPos = posX * Math.random();\n            while (newXPos >= 750 || newXPos < 0) {\n                newXPos *= Math.random();\n            }\n        return newXPos;\n    },\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./lib/utils.js?");

/***/ })

/******/ });