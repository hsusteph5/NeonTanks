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

/***/ "./lib/bullet.js":
/*!***********************!*\
  !*** ./lib/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./lib/moving_object.js\");\n\nclass Bullet extends MovingObject {\n    constructor(options){\n        options.radius = Bullet.RADIUS;\n        super(options);\n        // this.pos = 800;\n    }\n\n\n    // ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);\n    //want the position to start at the end of the gun \n    // then you want to the pos to change aka go up in an arc \n    draw(ctx) {\n        ctx.beginPath();\n        ctx.arc(this.pos[0],this.pos[1],5,0,2*Math.PI);\n        ctx.stroke();\n    }\n}\n\nBullet.RADIUS = 2; \nBullet.SPEED = 1;\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./lib/bullet.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Tank = __webpack_require__(/*! ./tank */ \"./lib/tank.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./lib/bullet.js\");\n\nclass Game {\n    constructor() {\n        this.tanks = [];\n        this.bullets = [];\n    }\n\n    add(object){\n        if(object instanceof Tank){\n            this.tanks.push(object);\n        } else if (object instanceof Bullet){\n            this.bullets.push(object);\n        }\n    } \n\n    allObjects() {\n        return [].concat(this.tanks, this.bullets);\n    }\n\n    addTank() {\n        const tank = new Tank({\n            pos: this.randomPosition(),\n            game: this\n        });\n\n        this.add(tank);\n\n        return tank;\n    }\n\n    draw(ctx){\n        ctx.clearRect(0, 0, 800, 800)\n        \n        //background color\n        ctx.fillStyle = Game.BG_COLOR;\n        ctx.fillRect(0, 0, 800, 800);\n\n        //background ground!\n        ctx.beginPath();\n        ctx.moveTo(0,700);\n        ctx.lineTo(800,700);\n        ctx.shadowBlur = 10;\n        ctx.shadowColor = \"#ffffff\";\n        ctx.strokeStyle = \"#ffffff\";\n        ctx.lineWidth = 5;\n        ctx.stroke();\n\n\n        this.allObjects().forEach((object) => {\n            // console.log(object);\n            object.draw(ctx);\n        });\n    }\n\n    // moveObjects(delta){\n    //     this.allObjects().forEach((object) => {\n    //         object.move(delta);\n    //     })\n    // }\n\n    moveBullets(delta){\n        this.bullets.forEach((bullet) => {\n            bullet.move(delta);\n        })\n    }\n\n    randomPosition() {\n        return [\n            Math.round(800 * Math.random()),\n            Game.DIM_Y,\n        ];\n    }\n\n    step(delta){\n        this.moveBullets(delta);\n    }\n\n}\n\n\n// ctx.fillRect(0, 0, 800, 800);\nGame.BG_COLOR = \"#202020\";\n\n\n//default x and y for the tanks\nGame.DIM_X = 800;\nGame.DIM_Y = 690;\n\n\nmodule.exports = Game; \n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class GameView {\n    constructor(game, ctx){\n        this.ctx = ctx;\n        this.game = game;\n\n        //enemy tank\n        this.game.addTank();\n        //enemy tank is lacking a gun and cannot move\n        //your tank that you control\n        this.tank = this.game.addTank();\n    }\n\n    //handles the key binding to the movement \n    bindKeyHandlers() {\n        const tank = this.tank;\n        // console.log(this.mousePos);\n        Object.keys(GameView.MOVES).forEach((k) => {\n            const moves = GameView.MOVES[k];\n\n            key(k, () => { \n                // console.log(tank.pos);\n                tank.tankGun.pos = [tank.pos[0] + moves[0], tank.pos[1]];\n                tank.pos = [tank.pos[0] + moves[0], tank.pos[1]];\n                // gun.pos = [gun.pos[0] + moves[0], gun.pos[1]]});\n            });\n        });\n\n        key(\"space\", () => { tank.fireBullets() });\n    }\n\n\n    //function that gets called when we amove the mouse \n    //change the instance variables \n    //sending the mousePos to the gunPos\n    changeGunPos(mousePos){\n        this.tank.tankGun.changeGunPos(mousePos);\n    }\n\n    start() {\n        this.bindKeyHandlers();\n        this.lastTime = 0;\n\n        \n        //wish to perform an animation from Canvas \n        requestAnimationFrame(this.animate.bind(this));\n    }\n    //allows you draw the background and tanks\n    // this.game.draw(this.ctx);\n\n    animate(time){\n        const timeDelta = time - this.lastTime;\n\n        //step is for constant moving obj\n        this.game.step(timeDelta);\n\n        this.game.draw(this.ctx);\n        this.lastTime = time; \n        requestAnimationFrame(this.animate.bind(this));\n    }\n\n}\n\nGameView.MOVES = {\n    a: [-1, 0],\n    d: [1, 0]\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/gun.js":
/*!********************!*\
  !*** ./lib/gun.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\n\nclass Gun {\n    constructor(options){\n        this.pos = options.pos; \n        this.color = options.color;\n        // this.game = this.game;\n        this.mousePos = {};\n        this.updateGunPos = \"\";\n    }\n\n    //grabbing the mouse Pos from the event listener \n    changeGunPos(mousePos){\n        this.mousePos = mousePos;\n    }\n\n    //get the resultant position of the gun and pass it to the tank\n    // updateGunPos() {\n    //     return this.updateGunPos;\n    // }\n\n    draw(ctx){\n        ctx.beginPath();\n        const offsetPos = [this.pos[0] + 15, this.pos[1] - 5]\n\n        ctx.moveTo(offsetPos[0], offsetPos[1]);\n        let resultPos = Util.gunEndPos(offsetPos, [this.mousePos.x, this.mousePos.y]);\n        ctx.lineTo(resultPos[0], resultPos[1]);\n\n        //update the end gun position \n        this.updateGunPos = resultPos; \n\n        ctx.strokeStyle = \"white\";\n        ctx.lineWidth = 5;\n        ctx.stroke();\n        ctx.fill();\n        ctx.closePath();\n    }\n\n}\n\nmodule.exports = Gun;\n\n\n// ctx.beginPath();\n// ctx.moveTo(offsetPos[0], offsetPos[1]);\n// ctx.arc(offsetPos[0], offsetPos[1], 20, 3.14 + 0.54, 3.14 + 2.6);\n// ctx.lineTo(offsetPos[0], offsetPos[1]);\n// ctx.fillStyle = \"#ff6666\";\n// ctx.fill();\n// ctx.closePath();\n\n//drawing arc slices: \n// https://stackoverflow.com/questions/6230363/how-to-draw-a-circle-sector-on-an-html5-canvas\n\n//# sourceURL=webpack:///./lib/gun.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MovingObject {\n    constructor(options){\n        this.pos = options.pos;\n        this.vel = options.vel;\n        this.radius = options.radius;\n        this.color = options.color;\n        this.game = options.game;\n        this.isWrappable = true;\n        this.shadowColor = options.shadowColor;\n        this.ctx = options.ctx\n    }\n\n    move(timeDelta) {\n        // console.log('time delta: ', timeDelta)\n\n        //time Delta is not a change, it's an array \n        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;\n        // console.log('velocityScale', velocityScale)\n        let offsetX = this.vel[0] * velocityScale\n        let offsetY = this.vel[1] * velocityScale \n        this.pos = [this.pos[0] + offsetX, this.pos[1] - offsetY ]\n        // console.log(this.pos);\n    }\n}\n\n\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\n\n\n\nmodule.exports = MovingObject;\n\n\n// draw(ctx){\n//     //tanks\n//     ctx.beginPath();\n//     ctx.moveTo(this.pos[0], this.pos[1]);\n//     ctx.lineTo(this.pos[0] + 5, this.pos[1] - 10);\n//     ctx.lineTo(this.pos[0] + 25, this.pos[1] - 10);\n//     ctx.lineTo(this.pos[0] + 30, this.pos[1]);\n//     ctx.closePath();\n//     ctx.lineWidth = 10;\n//     ctx.shadowBlur = 10;\n//     ctx.shadowColor = this.shadowColor;\n//     // ctx.stroke();\n//     // ctx.fillStyle = \"#00FFFF\";\n//     ctx.fillStyle = this.color;\n//     ctx.fill();\n// }\n\n\n// const mo = new MovingObj( \n//     { pos: [30, 30, vel: [10,10], radius: 5, color: \"#00FF00\"]}\n// )\n\n//creating after glow in for my tanks: \n// https://stackoverflow.com/questions/5067368/html5-canvas-create-outer-glow-effect-of-shape\n\n//canvas drawing of the trapezoid\n// this.ctx.beginPath();\n// this.ctx.moveTo(0, 0);\n// this.ctx.lineTo(15, 25);\n// this.ctx.lineTo(35, 25);\n// this.ctx.lineTo(50, 0);\n// this.ctx.closePath();\n// this.ctx.strokeStyle = \"#97FFFF\";\n// this.ctx.lineWidth = 7;\n// this.ctx.stroke();\n// this.ctx.fillStyle = \"#00FFFF\";\n// this.ctx.fill();\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/neontanks.js":
/*!**************************!*\
  !*** ./lib/neontanks.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//entry file\n// const MovingObject = require(\"./moving_object.js\");\n// const Tank = require(\"./tank.js\");\n\nconst Game = __webpack_require__(/*! ./game */ \"./lib/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./lib/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"game-canvas\");\n    canvasEl.width = 800;\n    canvasEl.height = 800;\n\n    const ctx = canvasEl.getContext(\"2d\");\n\n \n    //mouse position is in a hash \n    const game = new Game();\n    let gameView = new GameView(game, ctx)\n    gameView.start();\n    //getting the mouse position based on the canvasEl \n    let mousePos; \n\n\n    function getMousePos(canvasEl, evt) {\n        let rect = canvasEl.getBoundingClientRect();\n        return {\n            x: evt.clientX - rect.left,\n            y: evt.clientY - rect.top\n        };\n    }\n    canvasEl.addEventListener('mousemove', function(evt) {\n        mousePos = getMousePos(canvasEl, evt);\n        gameView.changeGunPos(mousePos);\n        // console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);\n    }, false);\n\n    console.log('webpack is running!');\n   \n})\n\n//getting the position for the mouse position \n// https://stackoverflow.com/questions/1114465/getting-mouse-location-in-canvas\n\n// ctx.arc(100, 100, 20, 0, 2*Math.PI, true);\n\n    // //background color\n    // ctx.fillStyle = \"#202020\";\n    // ctx.fillRect(0, 0, 800, 800);\n    \n\n    //background line\n    // ctx.beginPath();\n    // ctx.moveTo(0,700);\n    // ctx.lineTo(800,700);\n    // ctx.shadowBlur = 10;\n    // ctx.shadowColor = \"#ffffff\";\n    // ctx.strokeStyle = \"#ffffff\";\n    // ctx.lineWidth = 5;\n    // ctx.stroke();\n\n    //tank test\n    // let myTank = new Tank({pos: [0, 690], color: \"#00FFFF\", shadowColor: \"#97FFFF\"});\n    // myTank.draw(ctx);\n    // let enemyTank = new Tank({pos: [690, 690], color: \"#ff4c4c\", shadowColor: \"#ffb2b2\"});\n    // enemyTank.draw(ctx);\n\n//# sourceURL=webpack:///./lib/neontanks.js?");

/***/ }),

/***/ "./lib/tank.js":
/*!*********************!*\
  !*** ./lib/tank.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./lib/moving_object.js\");\nconst Gun = __webpack_require__(/*! ./gun.js */ \"./lib/gun.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./lib/bullet.js\")\nconst Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\n\n\n//randomizing the X position is not working\nclass Tank extends MovingObject {\n    constructor(options){\n        options.vel = options.vel || [1, 1]\n        super(options);\n        this.mousePos;\n        const tankGun = new Gun({\n            pos: this.pos,\n            color: \"#00FFFF\",\n            // game: this.game\n        });\n        this.tankGun = tankGun;\n\n        //gunPos you update the gun position \n        // this.gunPos = this.tankGun.updateGunPos; \n    }\n\n    //need to change the starting position of the bullet to be\n    //the end of position of the gun \n    fireBullets() {\n        this.tankGun.updateGunPos;\n        console.log('gunpos', this.tankGun.updateGunPos);\n        const norm = Util.norm(this.vel);\n\n        //can't fire unless moving \n        if(norm == 0) {\n            return;\n        } \n        const relVel = Util.scale(\n            Util.direction(this.vel),\n            Bullet.SPEED \n        );\n\n\n        // console.log(relVel);\n        const bulletVel = [\n            relVel[0] + this.vel[0], relVel[1] + this.vel[1]\n        ];\n      \n        const bullet = new Bullet({\n            // pos: this.pos,\n            pos: this.tankGun.updateGunPos,\n            vel: bulletVel,\n            color: 'white',\n            game: this.game\n        });\n      \n        this.game.add(bullet);\n    }\n\n    draw(ctx){\n        //tanks\n        ctx.beginPath();\n        ctx.moveTo(this.pos[0], this.pos[1]);\n        ctx.lineTo(this.pos[0] + 5, this.pos[1] - 10);\n        ctx.lineTo(this.pos[0] + 25, this.pos[1] - 10);\n        ctx.lineTo(this.pos[0] + 30, this.pos[1]);\n        ctx.closePath();\n        ctx.lineWidth = 10;\n        ctx.shadowBlur = 10;\n        ctx.shadowColor = this.shadowColor;\n        // ctx.stroke();\n        // ctx.fillStyle = \"#00FFFF\";\n        ctx.fillStyle = DEFAULTS.COLOR;\n        ctx.fill();\n        ctx.closePath();\n\n        ctx.beginPath();\n        this.tankGun.draw(ctx);\n        ctx.closePath();\n    }\n}\n\nconst DEFAULTS = {\n    COLOR: \"#00FFFF\",\n    SPEED: 4\n};\n\nmodule.exports = Tank;\n\n//# sourceURL=webpack:///./lib/tank.js?");

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//random position of the future enemy \nconst Util = {\n    //random X Pos \n    randomXPos(posX) {\n        newXPos = posX * Math.random();\n            while (newXPos >= 750 || newXPos < 0) {\n                newXPos *= Math.random();\n            }\n        return newXPos;\n    },\n\n\n    //finding the distance between 2 positions \n    //square root (x1 - x2) ^ 2 + (y1 - y2) ^ 2 \n    distance(pos1, pos2){\n        return Math.sqrt(\n            Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n        );\n    },\n    //find the length of the vector \n    // norm(vec) {\n    //     return Util.distance([0,0], vec);\n    // },\n    norm(vec) {\n        return Util.distance([0, 0], vec);\n    },\n    \n    //scale the length of vector by a given amount \n    scale(vec, m){\n        return [vec[0] * m, vec[1] * m];\n    },\n    //normalize the length of the vector to 1, maintaining the direction \n    direction(vec) {\n        // console.log(vec);\n        const norm = Util.norm(vec)\n        return Util.scale(vec, 1 / norm);\n    },\n    //finding angle from initial Pos and result Pos \n    angle(initialPos, mousePos){\n        const hypotenuse = Util.distance(initialPos, mousePos);\n        const xDist = (mousePos[0] - initialPos[0]); \n        return Math.acos(xDist / hypotenuse);\n    }, \n    //want to return a pos from distance to be a set value like 20px\n    gunEndPos(initialPos, mousePos){\n        //the default angle when there's no mousePos\n        let angle = 1.57; \n        //if mouse Pos does not exist, angle is 0\n\n        //if mouse Pos[0] exists, then you are taking the new angle\n        if (mousePos[0] != undefined) {\n            angle = Util.angle(initialPos, mousePos);\n        }\n\n        //rendering the new pos of the endpoint of the gun based on the angles\n        let pos = [];\n        //don't want people to shoot from the direct right or direct left \n        //limiters on the angle dependent on the mouse \n        if (angle < 0.54) {\n            angle = 0.54\n        }\n        if (angle > 2.6 ) {\n            angle = 2.6\n        }\n\n  \n\n        //20 will the length of the gun\n        //hypotenuse * Math.cos(angle) \n        pos.push(20 * Math.cos(angle));\n        pos.push(20 * Math.sin(angle));\n\n        return [pos[0] + initialPos[0],  initialPos[1] - pos[1]]; \n    }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./lib/utils.js?");

/***/ })

/******/ });