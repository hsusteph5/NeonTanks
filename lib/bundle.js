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

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Tank = __webpack_require__(/*! ./tank */ \"./lib/tank.js\");\n\nclass Game {\n    constructor() {\n        this.tanks = [];\n\n        // this.addTank();\n    }\n\n    add(object){\n        if(object instanceof Tank){\n            this.tanks.push(object);\n        }\n    } \n\n    allObjects() {\n        return [].concat(this.tanks)\n    }\n\n    addTank() {\n        const tank = new Tank({\n            pos: this.randomPosition(),\n            game: this\n        });\n\n        this.add(tank);\n\n        console.log(tank.pos)\n        return tank;\n    }\n\n    draw(ctx){\n        ctx.clearRect(0, 0, 800, 800)\n        \n        //background color\n        ctx.fillStyle = Game.BG_COLOR;\n        ctx.fillRect(0, 0, 800, 800);\n\n        //background ground!\n        ctx.beginPath();\n        ctx.moveTo(0,700);\n        ctx.lineTo(800,700);\n        ctx.shadowBlur = 10;\n        ctx.shadowColor = \"#ffffff\";\n        ctx.strokeStyle = \"#ffffff\";\n        ctx.lineWidth = 5;\n        ctx.stroke();\n\n\n        this.allObjects().forEach((object) => {\n            object.draw(ctx);\n        });\n    }\n\n    moveObjects(delta){\n        this.allObjects().forEach((object) => {\n            object.move(delta);\n        })\n    }\n\n    randomPosition() {\n        return [\n            Math.round(800 * Math.random()),\n            Game.DIM_Y,\n        ];\n    }\n\n    step(delta){\n        this.moveObjects(delta);\n    }\n\n}\n\n\n// ctx.fillRect(0, 0, 800, 800);\nGame.BG_COLOR = \"#202020\";\n\n\n//default x and y for the tanks\nGame.DIM_X = 800;\nGame.DIM_Y = 690;\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class GameView {\n    constructor(game, ctx){\n        this.ctx = ctx;\n        this.game = game;\n        this.tank = this.game.addTank();\n    }\n\n    //handles the key binding to the movement \n    bindKeyHandlers() {\n        const tank = this.tank;\n\n        Object.keys(GameView.MOVES).forEach((k) => {\n            const moves = GameView.MOVES[k];\n\n            //not using the move function??? \n            // key(k, () => { tank.move(moves)});\n            key(k, () => { \n                // console.log(tank.pos);\n                tank.pos = [tank.pos[0] + moves[0], tank.pos[1]]});\n        });\n\n        // key(\"space\", () => { tank.fireBullets(); });\n    }\n\n    start() {\n        this.bindKeyHandlers();\n        this.lastTime = 0;\n\n        \n        //wish to perform an animation from Canvas \n        requestAnimationFrame(this.animate.bind(this));\n    }\n    //allows you draw the background and tanks\n    // this.game.draw(this.ctx);\n\n    animate(time){\n        const timeDelta = time - this.lastTime;\n\n        //step is for constant moving obj\n        // this.game.step(timeDelta);\n\n        this.game.draw(this.ctx);\n        this.lastTime = time; \n        requestAnimationFrame(this.animate.bind(this));\n    }\n\n}\n\nGameView.MOVES = {\n    a: [-1, 0],\n    d: [1, 0]\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MovingObject {\n    constructor(options){\n        this.pos = options.pos;\n        this.vel = options.vel;\n        this.radius = options.radius;\n        this.color = options.color;\n        this.game = options.game;\n        this.isWrappable = true;\n        this.shadowColor = options.shadowColor;\n        this.ctx = options.ctx\n    }\n\n    move(timeDelta) {\n        // console.log('time delta: ', timeDelta)\n\n        //time Delta is not a change, it's an array \n        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;\n        // console.log('velocityScale', velocityScale)\n        let offsetX = this.vel[0] * velocityScale\n        this.pos = [this.pos[0] + offsetX, this.pos[1] ]\n        console.log(this.pos);\n    }\n}\n\n\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\n\n\n\nmodule.exports = MovingObject;\n\n\n// draw(ctx){\n//     //tanks\n//     ctx.beginPath();\n//     ctx.moveTo(this.pos[0], this.pos[1]);\n//     ctx.lineTo(this.pos[0] + 5, this.pos[1] - 10);\n//     ctx.lineTo(this.pos[0] + 25, this.pos[1] - 10);\n//     ctx.lineTo(this.pos[0] + 30, this.pos[1]);\n//     ctx.closePath();\n//     ctx.lineWidth = 10;\n//     ctx.shadowBlur = 10;\n//     ctx.shadowColor = this.shadowColor;\n//     // ctx.stroke();\n//     // ctx.fillStyle = \"#00FFFF\";\n//     ctx.fillStyle = this.color;\n//     ctx.fill();\n// }\n\n\n// const mo = new MovingObj( \n//     { pos: [30, 30, vel: [10,10], radius: 5, color: \"#00FF00\"]}\n// )\n\n//creating after glow in for my tanks: \n// https://stackoverflow.com/questions/5067368/html5-canvas-create-outer-glow-effect-of-shape\n\n//canvas drawing of the trapezoid\n// this.ctx.beginPath();\n// this.ctx.moveTo(0, 0);\n// this.ctx.lineTo(15, 25);\n// this.ctx.lineTo(35, 25);\n// this.ctx.lineTo(50, 0);\n// this.ctx.closePath();\n// this.ctx.strokeStyle = \"#97FFFF\";\n// this.ctx.lineWidth = 7;\n// this.ctx.stroke();\n// this.ctx.fillStyle = \"#00FFFF\";\n// this.ctx.fill();\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/neontanks.js":
/*!**************************!*\
  !*** ./lib/neontanks.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//entry file\n// const MovingObject = require(\"./moving_object.js\");\n// const Tank = require(\"./tank.js\");\n\nconst Game = __webpack_require__(/*! ./game */ \"./lib/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./lib/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"game-canvas\");\n    canvasEl.width = 800;\n    canvasEl.height = 800;\n\n    const ctx = canvasEl.getContext(\"2d\");\n\n    const game = new Game();\n    new GameView(game, ctx).start();\n    console.log('webpack is running!')\n})\n\n// ctx.arc(100, 100, 20, 0, 2*Math.PI, true);\n\n    // //background color\n    // ctx.fillStyle = \"#202020\";\n    // ctx.fillRect(0, 0, 800, 800);\n    \n\n    //background line\n    // ctx.beginPath();\n    // ctx.moveTo(0,700);\n    // ctx.lineTo(800,700);\n    // ctx.shadowBlur = 10;\n    // ctx.shadowColor = \"#ffffff\";\n    // ctx.strokeStyle = \"#ffffff\";\n    // ctx.lineWidth = 5;\n    // ctx.stroke();\n\n    //tank test\n    // let myTank = new Tank({pos: [0, 690], color: \"#00FFFF\", shadowColor: \"#97FFFF\"});\n    // myTank.draw(ctx);\n    // let enemyTank = new Tank({pos: [690, 690], color: \"#ff4c4c\", shadowColor: \"#ffb2b2\"});\n    // enemyTank.draw(ctx);\n\n//# sourceURL=webpack:///./lib/neontanks.js?");

/***/ }),

/***/ "./lib/tank.js":
/*!*********************!*\
  !*** ./lib/tank.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./lib/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\n\n\n//randomizing the X position is not working\nclass Tank extends MovingObject {\n    constructor(options){\n        // options.color = DEFAULTS.COLOR;\n        // options.pos = Util.randomXPos(options.pos[0], options.pos[1]);\n        options.vel = options.vel || [1, 1]\n        super(options);\n    }\n\n    draw(ctx){\n        //tanks\n        ctx.beginPath();\n        ctx.moveTo(this.pos[0], this.pos[1]);\n        ctx.lineTo(this.pos[0] + 5, this.pos[1] - 10);\n        ctx.lineTo(this.pos[0] + 25, this.pos[1] - 10);\n        ctx.lineTo(this.pos[0] + 30, this.pos[1]);\n        ctx.closePath();\n        ctx.lineWidth = 10;\n        ctx.shadowBlur = 10;\n        ctx.shadowColor = this.shadowColor;\n        // ctx.stroke();\n        // ctx.fillStyle = \"#00FFFF\";\n        ctx.fillStyle = DEFAULTS.COLOR;\n        ctx.fill();\n    }\n}\n\nconst DEFAULTS = {\n    COLOR: \"#00FFFF\",\n    SPEED: 4\n};\n\nmodule.exports = Tank;\n\n//# sourceURL=webpack:///./lib/tank.js?");

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