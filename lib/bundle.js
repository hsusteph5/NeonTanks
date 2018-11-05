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

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./lib/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\nconst Target = __webpack_require__(/*! ./target */ \"./lib/target.js\");\n\n\nclass Bullet extends MovingObject {\n    constructor(options){\n        options.radius = Bullet.RADIUS;\n        super(options);\n        this.optionsVel = Object.freeze(this.vel.slice());\n        //saves the angle from the gun\n        this.angle = options.angle;\n        this.isWrappable = false;\n        //set the velocity with X and Y given the angle \n        this.vel = [Util.xVelocity(this.vel[0], this.angle), Util.yVelocity(this.vel[1], this.angle)]\n    }\n\n\n    // ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);\n    //want the position to start at the end of the gun \n    // then you want to the pos to change aka go up in an arc \n    draw(ctx) {\n        ctx.beginPath();\n        ctx.arc(this.pos[0],this.pos[1],5,0,2*Math.PI);\n        ctx.stroke();\n    }\n\n    move(timeDelta) {\n        //constant decreasing in velocity to account for gravity\n        this.vel[1] -= this.optionsVel[1] / 100;\n        //change in the time \n        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;\n\n        //position is the time * velocity \n        // console.log('velocityScale', velocityScale)\n        let offsetX = this.vel[0] * velocityScale\n        let offsetY = this.vel[1] * velocityScale \n    \n        //this DOES NOT WORK! the x-direction is NOT changing direction\n        //need to find the X-direction dependent on angle \n        if(this.angle > (Math.PI / 2) ){\n            offsetX = -offsetX; \n        } else if (this.angle === (Math.PI / 2)) {\n            offsetX = 0; \n        }\n\n        this.pos = [this.pos[0] + offsetX, this.pos[1] - offsetY ]\n\n\n        // check if the bullet is out of bounds, it will remove it (found in Moving Object)\n        if (this.game.isOutOfBounds(this.pos)) {\n            this.remove();\n        }\n    }\n\n}\n\nBullet.RADIUS = 2; \nBullet.SPEED = 1;\n\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\n\n\nmodule.exports = Bullet;\n\n\n//# sourceURL=webpack:///./lib/bullet.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Tank = __webpack_require__(/*! ./tank */ \"./lib/tank.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./lib/bullet.js\");\nconst Gun = __webpack_require__(/*! ./gun.js */ \"./lib/gun.js\");\nconst Target = __webpack_require__(/*! ./target.js */ \"./lib/target.js\");\n\nclass Game {\n    constructor() {\n        this.tanks = [];\n        this.bullets = [];\n        this.guns = [];\n        this.targets = [];\n        this.score = 0; \n        this.bulletsCount = 4;\n        this.ended = undefined;\n        this.win = undefined;\n    }\n\n    add(object){\n        if(object instanceof Tank){\n            this.tanks.push(object);\n        } else if (object instanceof Bullet && this.bulletsCount > 0){\n            this.bullets.push(object);\n            this.bulletsCount -= 1;\n        } else if (object instanceof Gun){\n            this.guns.push(object);\n        } else if (object instanceof Target) {\n            this.targets.push(object)\n        }\n    } \n\n    allObjects() {\n        return [].concat(this.tanks, this.guns, this.bullets, this.targets);\n    }\n\n    addTank() {\n        const randomPos = this.randomTankPosition();\n        const tank = new Tank({\n            pos: randomPos, \n            game: this\n        });\n        this.add(tank);\n\n        return tank;\n    }\n\n    addGun(randomPos) {\n        let tank = this.tanks[this.tanks.length - 1];\n        const gun = new Gun({\n            pos: randomPos, \n            // tank: tank,\n            color: \"white\",\n            game: this\n        })\n        this.add(gun);\n        return gun; \n    }\n\n    addTargets(){\n        let randomAmount = Math.round(4 * Math.random()) || 4;\n        let pos = [300, 300];\n        //when you want to have a matrix \n        for(let i = 0; i < 4; i++){\n            //alternate the rows \n            if (i % 2 == 0) {\n                pos = [300, pos[1] + 55]\n            } else {\n                pos = [320, pos[1] + 55];\n            }\n            for(let j = 0; j < 4; j++){\n                let target = new Target({\n                    pos: pos,\n                    color: \"white\"\n                })\n                this.add(target);\n                pos = [pos[0] + 55, pos[1]];\n            }\n        }\n        //for random positioned targets\n        // for(let i = 0; i < randomAmount; i++){\n        //     let target = new Target({\n        //         pos: this.randomTargetPosition(),\n        //         color: \"white\",\n        //         radius: 20,\n        //         game: this\n        //     })\n        //     this.add(target);\n        // }\n        return this.targets;\n    }   \n\n    //moves bullets and check collision\n    step(delta){\n        this.moveBullets(delta);\n        this.checkCollisions();\n        // console.log(this.ended);\n        this.isGameOver();\n        // console.log(this.score);\n    }\n\n    moveBullets(delta){\n        this.bullets.forEach((bullet) => {\n            bullet.move(delta);\n        })\n    }\n\n    //check collisions\n    checkCollisions() {\n        const bullets = [].concat(this.bullets);\n        const targets = [].concat(this.targets);\n\n        for (let i = 0; i < bullets.length; i++) {\n          for (let j = 0; j < targets.length; j++) {\n            const obj1 = bullets[i];\n            const obj2 = targets[j];\n            \n\n            //checking if the bullets collided against the object\n            if (obj1.isCollidedWith(obj2)) {\n              const collision = obj1.collideWith(obj2);\n              if (collision) return;\n            }\n          }\n        }\n      }\n\n    isOutOfBounds(pos) {\n        return (pos[0] < 0) || (pos[1] < 0) ||\n          (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);\n    }\n\n    remove(object) {\n        if (object instanceof Bullet) {\n          this.bullets.splice(this.bullets.indexOf(object), 1);\n        } else if (object instanceof Target) {\n          this.targets.splice(this.targets.indexOf(object), 1);\n        } else {\n          throw new Error(\"unknown type of object\");\n        }\n    }\n\n\n    //random positions\n    randomTankPosition() {\n        //won't randomly spawn off the screen\n        let randomX = Math.round(800 * Math.random());\n        while (Math.round(randomX) < 40 || Math.round(randomX) > 760){\n            randomX =  Math.round(800 * Math.random())\n        }\n        return [\n            randomX,\n            Game.DIM_Y,\n        ];\n    }\n\n    randomTargetPosition() {\n        //won't randomly spawn off the screen\n        let randomX = Math.round(800 * Math.random());\n        let randomY = Math.round(800 * Math.random());\n        while (Math.round(randomX) < 40 || Math.round(randomX) > 760){\n            randomX =  Math.round(800 * Math.random())\n        }\n        while (Math.round(randomY) < 20 || Math.round(randomY) > 650){\n            randomY =  Math.round(800 * Math.random())\n        }\n        return [\n            randomX,\n            randomY,\n        ];\n    }\n\n\n    isGameOver(){\n       //determining the if the game is over\n        if (this.bulletsCount === 0 && this.bullets.length == 0){\n            this.ended = true; \n        } else if(this.targets.length === 0){\n            this.win = true;\n        }\n    }\n\n\n    draw(ctx){\n        ctx.clearRect(0, 0, 800, 800)\n        \n        //background color\n        ctx.fillStyle = Game.BG_COLOR;\n        ctx.fillRect(0, 0, 800, 800);\n\n        //background ground!\n        ctx.beginPath();\n        ctx.moveTo(0,700);\n        ctx.lineTo(800,700);\n        ctx.shadowBlur = 10;\n        ctx.shadowColor = \"#ffffff\";\n        ctx.strokeStyle = \"#ffffff\";\n        ctx.lineWidth = 5;\n        ctx.stroke();\n\n\n        this.allObjects().forEach((object) => {\n            // console.log(object);\n            object.draw(ctx);\n        });\n\n        ctx.beginPath();\n        ctx.font = \"16px Arial\";\n        ctx.fillStyle = \"white\";\n        ctx.fillText(\"Score: \"+ this.score, 8, 20);\n        ctx.stroke();\n\n\n        ctx.beginPath();\n        ctx.font = \"16px Arial\";\n        ctx.fillText(\"Available Bullets: \"+ this.bulletsCount, 8, 40);\n        ctx.fillStyle = \"white\";\n        ctx.stroke();\n\n        //determining if the game is over\n        if(this.ended){\n            ctx.clearRect(0, 0, 800, 800);\n            ctx.font = \"30px Arial\";\n            ctx.fillStyle = \"white\";\n            ctx.fillText(\"Game Over\",10,50);\n            ctx.fillText(\"You scored: \" + this.score, 10, 100);\n        } else if (this.win){\n            ctx.clearRect(0, 0, 800, 800);\n            ctx.font = \"30px Arial\";\n            ctx.fillStyle = \"white\";\n            ctx.fillText(\"You won!\",10,50);\n            ctx.fillText(\"You scored: \" + this.score, 10, 100);\n        }\n    }\n\n}\n\nGame.BG_COLOR = \"#202020\";\n\n\n//default x and y for the tanks\nGame.DIM_X = 800;\nGame.DIM_Y = 690;\n\n\nmodule.exports = Game; \n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/game_view.js":
/*!**************************!*\
  !*** ./lib/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class GameView {\n    constructor(game, ctx){\n        this.ctx = ctx;\n        this.game = game;\n        //checks if the game is started\n        this.started = false; \n        //your tank that you control\n        this.tank = this.game.addTank();\n        this.gun = this.game.addGun(this.tank.pos);\n        this.targets = this.game.addTargets();\n\n        this.ended = false; \n    }\n\n    //handles the key binding to the movement \n    bindKeyHandlers() {\n        const tank = this.tank;\n\n        Object.keys(GameView.MOVES).forEach((k) => {\n            const moves = GameView.MOVES[k];\n\n            key(k, () => { \n                this.gun.pos = [tank.pos[0] + moves[0], tank.pos[1]];\n                tank.pos = [tank.pos[0] + moves[0], tank.pos[1]];\n            });\n        });\n\n        key(\"space\", () => { tank.fireBullets() });\n    }\n\n\n    //function that gets called when we amove the mouse \n    //change the instance variables \n    //sending the mousePos to the gunPos\n    changeGunPos(mousePos){\n        this.gun.changeGunPos(mousePos);\n    }\n\n    gameOver(){\n        //if no targets are left, the game is over\n        if(this.game.targets.length === 0){\n            // console.log(true);\n            this.ended = true;\n        }\n    }\n\n    start() {\n        //if this.started is false, return and not start \n        if (this.started) return;\n        this.started = true; \n        this.bindKeyHandlers();\n        this.lastTime = 0;\n        if(this.ended){\n            document.getElementById(\"game-over\").style.display = \"block\";\n        }\n        //wish to perform an animation from Canvas \n        requestAnimationFrame(this.animate.bind(this));\n    }\n    \n    //allows you draw the background and tanks\n    animate(time){\n        const timeDelta = time - this.lastTime;\n\n        //step is for constant moving obj (bullets)\n        this.game.step(timeDelta);\n\n        this.game.draw(this.ctx);\n        this.lastTime = time; \n\n        //check if the game is over!\n        this.gameOver();\n        requestAnimationFrame(this.animate.bind(this));\n    }\n\n}\n\nGameView.MOVES = {\n    a: [-3, 0],\n    d: [3, 0]\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./lib/game_view.js?");

/***/ }),

/***/ "./lib/gun.js":
/*!********************!*\
  !*** ./lib/gun.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\n\nclass Gun {\n    constructor(options){\n        this.pos = options.pos; \n        this.color = options.color;\n        this.mousePos = {};\n        //want to save the end gun position so the bullet knows where to start\n        this.updateGunPos = \"\";\n        //save the angle so that the bullet will follow a certain velocity \n        this.updateAngle = \"\";\n    }\n\n    //grabbing the mouse Pos from the event listener on the entry\n    changeGunPos(mousePos){\n        this.mousePos = mousePos;\n    }\n\n    draw(ctx){\n        ctx.beginPath();\n        const offsetPos = [this.pos[0] + 15, this.pos[1] - 5]\n\n        ctx.moveTo(offsetPos[0], offsetPos[1]);\n        let resultPos = Util.gunEndPos(offsetPos, [this.mousePos.x, this.mousePos.y]);\n        ctx.lineTo(resultPos[0], resultPos[1]);\n\n        //update the end gun position \n        this.updateGunPos = resultPos; \n\n       //update the angle so other objects can have access to them \n        this.updateAngle = Util.angle(offsetPos, [this.mousePos.x, this.mousePos.y]);\n\n        ctx.strokeStyle = \"white\";\n        ctx.lineWidth = 5;\n        ctx.stroke();\n        ctx.fill();\n        ctx.closePath();\n    }\n\n}\n\nmodule.exports = Gun;\n\n//# sourceURL=webpack:///./lib/gun.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\nconst Target = __webpack_require__(/*! ./target.js */ \"./lib/target.js\");\n\nclass MovingObject {\n    constructor(options){\n        this.pos = options.pos;\n        this.vel = options.vel;\n        this.color = options.color;\n        this.game = options.game;\n        this.shadowColor = options.shadowColor;\n        this.ctx = options.ctx;\n        this.radius = options.radius \n    }\n\n    //checking if the obj1 (bullet) collided with target \n    //takes the distance \n    isCollidedWith(otherObject) {\n        const centerDist = Util.distance(this.pos, otherObject.pos);\n        return centerDist < (this.radius + otherObject.radius);\n    }\n\n    //when they are confirm collided, it will delete the target \n    collideWith(otherObject) {\n        //remove Bullet and otherObject\n        //if you hit the target, you get 100 score \n        if (otherObject instanceof Target) {\n            this.game.remove(otherObject);\n            this.game.score += 100; \n            return true;\n        }\n        return false;\n    }\n\n    remove() {\n        this.game.remove(this);\n    }\n    \n}\n\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\n\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/neontanks.js":
/*!**************************!*\
  !*** ./lib/neontanks.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//entry file\nconst Game = __webpack_require__(/*! ./game */ \"./lib/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./lib/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    //start rending on the canvas \n    const canvasEl = document.getElementById(\"game-canvas\");\n    canvasEl.width = 800;\n    canvasEl.height = 800;\n\n    const ctx = canvasEl.getContext(\"2d\");\n\n \n    //mouse position is in a hash \n    const game = new Game();\n    let gameView = new GameView(game, ctx)\n\n\n    //start the game upon clicking the button \n    document.getElementById(\"start-button\").addEventListener(\"click\", () => {\n        gameView.start();\n\n        //makes the button disappear when you start the game \n        document.getElementById(\"start-button\").style.display = \"none\";\n        document.getElementById(\"instructions\").style.display = \"none\";\n    \n        let mousePos; \n\n        function getMousePos(canvasEl, evt) {\n            let rect = canvasEl.getBoundingClientRect();\n            return {\n                x: evt.clientX - rect.left,\n                y: evt.clientY - rect.top\n            };\n        }\n        canvasEl.addEventListener('mousemove', function(evt) {\n            mousePos = getMousePos(canvasEl, evt);\n            gameView.changeGunPos(mousePos);\n        }, false);\n    });\n    // console.log('webpack is running!');\n   \n})\n\n//getting the position for the mouse position \n// https://stackoverflow.com/questions/1114465/getting-mouse-location-in-canvas\n\n\n//# sourceURL=webpack:///./lib/neontanks.js?");

/***/ }),

/***/ "./lib/tank.js":
/*!*********************!*\
  !*** ./lib/tank.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Bullet = __webpack_require__(/*! ./bullet.js */ \"./lib/bullet.js\")\nconst Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\n\nclass Tank {\n    constructor(options){\n        this.pos = options.pos;\n        this.vel = options.vel || [1, 10]\n        this.color = options.color;\n        this.game = options.game;\n        this.shadowColor = options.shadowColor;\n        this.ctx = options.ctx;\n    }\n\n    fireBullets() { \n        const relVel = Util.scale(\n            Util.direction(this.vel),\n            Bullet.SPEED \n        );\n\n        const bulletVel = [\n            relVel[0] + this.vel[0], relVel[1] + this.vel[1]\n        ];\n\n        //updates the starting position of the bullet and stores \n\n        //finds the first gun in the array\n        //angle is the gun angle \n        const bullet = new Bullet({\n            pos: this.game.guns[0].updateGunPos,\n            angle: this.game.guns[0].updateAngle,\n            vel: bulletVel,\n            color: 'white',\n            game: this.game\n        });\n\n        this.game.score -= 50; \n      \n        this.game.add(bullet);\n    }\n\n    draw(ctx){\n        //tanks\n        ctx.beginPath();\n        ctx.moveTo(this.pos[0], this.pos[1]);\n        ctx.lineTo(this.pos[0] + 5, this.pos[1] - 10);\n        ctx.lineTo(this.pos[0] + 25, this.pos[1] - 10);\n        ctx.lineTo(this.pos[0] + 30, this.pos[1]);\n        ctx.closePath();\n        ctx.lineWidth = 10;\n        ctx.shadowBlur = 10;\n        ctx.shadowColor = this.shadowColor;\n        ctx.fillStyle = DEFAULTS.COLOR;\n        ctx.fill();\n        ctx.closePath();\n    }\n}\n\nconst DEFAULTS = {\n    COLOR: \"#00FFFF\",\n    SPEED: 3\n};\n\nmodule.exports = Tank;\n\n//# sourceURL=webpack:///./lib/tank.js?");

/***/ }),

/***/ "./lib/target.js":
/*!***********************!*\
  !*** ./lib/target.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./lib/utils.js\");\n\nclass Target {\n    constructor(options){\n        // super(options);\n        this.pos = options.pos;\n        this.radius = 25; \n    }\n\n    draw(ctx){\n        // console.log('target is being rendered');\n        ctx.beginPath();\n        ctx.arc(this.pos[0], this.pos[1], 20, 0, 2 * Math.PI);\n        ctx.strokeStyle = '#FF69B4';\n        ctx.stroke();\n        ctx.closePath();\n\n        ctx.beginPath();\n        ctx.arc(this.pos[0], this.pos[1], 15, 0, 2 * Math.PI);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n        ctx.closePath();\n\n        ctx.beginPath();\n        ctx.arc(this.pos[0], this.pos[1], 10, 0, 2 * Math.PI);\n        ctx.strokeStyle = '#FF69B4';\n        ctx.stroke();\n        ctx.closePath();\n\n        ctx.beginPath();\n        ctx.arc(this.pos[0], this.pos[1], 5, 0, 2 * Math.PI);\n        ctx.strokeStyle = 'white';\n        ctx.stroke();\n        ctx.closePath();\n    }\n}\n\nmodule.exports = Target;\n\n//# sourceURL=webpack:///./lib/target.js?");

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//random position of the future enemy \nconst Util = {\n    //random X Pos \n    randomXPos(posX) {\n        newXPos = posX * Math.random();\n            while (newXPos >= 750 || newXPos < 0) {\n                newXPos *= Math.random();\n            }\n        return newXPos;\n    },\n\n\n    //finding the distance between 2 positions \n    //square root (x1 - x2) ^ 2 + (y1 - y2) ^ 2 \n    distance(pos1, pos2){\n        return Math.sqrt(\n            Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n        );\n    },\n    //find the length of the vector \n    norm(vec) {\n        return Util.distance([0, 0], vec);\n    },\n    \n    //scale the length of vector by a given amount \n    scale(vec, m){\n        return [vec[0] * m, vec[1] * m];\n    },\n    //normalize the length of the vector to 1, maintaining the direction \n    direction(vec) {\n        const norm = Util.norm(vec)\n        return Util.scale(vec, 1 / norm);\n    },\n    //finding angle from initial Pos and result Pos \n    angle(initialPos, mousePos){\n        const hypotenuse = Util.distance(initialPos, mousePos);\n        const xDist = (mousePos[0] - initialPos[0]); \n        const resultAngle = Math.acos(xDist / hypotenuse) || 1.57;\n        return resultAngle;\n    }, \n    //want to return a pos from distance to be a set value like 20px\n    gunEndPos(initialPos, mousePos){\n        //gets the angle from the initalPos and the mousePos\n        angle = Util.angle(initialPos, mousePos);\n\n\n        //rendering the new pos of the endpoint of the gun based on the angles\n        let pos = [];\n        //don't want people to shoot from the direct right or direct left \n        //limiters on the angle dependent on the mouse \n        if (angle < 0.54) {\n            angle = 0.54\n        }\n        if (angle > 2.6 ) {\n            angle = 2.6\n        }\n\n        //20 will the length of the gun\n        //hypotenuse * Math.cos(angle) \n        pos.push(20 * Math.cos(angle));\n        pos.push(20 * Math.sin(angle));\n\n        return [pos[0] + initialPos[0],  initialPos[1] - pos[1]]; \n    },\n    xVelocity(velX, angle){\n        if (angle > Math.PI / 2){\n            return -Math.cos(angle) * 10;\n        }\n        return Math.cos(angle) * 10; \n    }, \n    yVelocity(velY, angle){\n        return Math.sin(angle) * 12;\n    }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./lib/utils.js?");

/***/ })

/******/ });