const Tank = require("./tank");
const Bullet = require("./bullet");
const Gun = require("./gun.js");
const Target = require("./target.js");

class Game {
    constructor() {
        this.tanks = [];
        this.bullets = [];
        this.guns = [];
        this.targets = [];
        this.score = 0; 
        this.bulletsCount = 4;
        this.ended = undefined;
        this.win = undefined;
    }

    add(object){
        if(object instanceof Tank){
            this.tanks.push(object);
        } else if (object instanceof Bullet && this.bulletsCount > 0){
            this.bullets.push(object);
            this.bulletsCount -= 1;
        } else if (object instanceof Gun){
            this.guns.push(object);
        } else if (object instanceof Target) {
            this.targets.push(object)
        }
    } 

    allObjects() {
        return [].concat(this.tanks, this.guns, this.bullets, this.targets);
    }

    addTank() {
        const randomPos = this.randomTankPosition();
        const tank = new Tank({
            pos: randomPos, 
            game: this
        });
        this.add(tank);

        return tank;
    }

    addGun(randomPos) {
        let tank = this.tanks[this.tanks.length - 1];
        const gun = new Gun({
            pos: randomPos, 
            // tank: tank,
            color: "white",
            game: this
        })
        this.add(gun);
        return gun; 
    }

    addTargets(){
        let randomAmount = Math.round(4 * Math.random()) || 4;
        let pos = [300, 300];
        //when you want to have a matrix 
        for(let i = 0; i < 4; i++){
            //alternate the rows 
            if (i % 2 == 0) {
                pos = [300, pos[1] + 55]
            } else {
                pos = [320, pos[1] + 55];
            }
            for(let j = 0; j < 4; j++){
                let target = new Target({
                    pos: pos,
                    color: "white"
                })
                this.add(target);
                pos = [pos[0] + 55, pos[1]];
            }
        }
        //for random positioned targets
        // for(let i = 0; i < randomAmount; i++){
        //     let target = new Target({
        //         pos: this.randomTargetPosition(),
        //         color: "white",
        //         radius: 20,
        //         game: this
        //     })
        //     this.add(target);
        // }
        return this.targets;
    }   

    //moves bullets and check collision
    step(delta){
        this.moveBullets(delta);
        this.checkCollisions();
        // console.log(this.ended);
        this.isGameOver();
        // console.log(this.score);
    }

    moveBullets(delta){
        this.bullets.forEach((bullet) => {
            bullet.move(delta);
        })
    }

    //check collisions
    checkCollisions() {
        const bullets = [].concat(this.bullets);
        const targets = [].concat(this.targets);
        // console.log(targets);
        for (let i = 0; i < bullets.length; i++) {
          for (let j = 0; j < targets.length; j++) {
            const obj1 = bullets[i];
            const obj2 = targets[j];
            

            //checking if the bullets collided against the object

            if (obj1.isCollidedWith(obj2)) {
              const collision = obj1.collideWith(obj2);
              if (collision) return;
            }
          }
        }
      }

    isOutOfBounds(pos) {
        return (pos[0] < 0) || (pos[1] < 0) ||
          (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
    }

    remove(object) {
        if (object instanceof Bullet) {
          this.bullets.splice(this.bullets.indexOf(object), 1);
        } else if (object instanceof Target) {
          this.targets.splice(this.targets.indexOf(object), 1);
        } else {
          throw new Error("unknown type of object");
        }
    }


    //random positions
    randomTankPosition() {
        //won't randomly spawn off the screen
        let randomX = Math.round(800 * Math.random());
        while (Math.round(randomX) < 40 || Math.round(randomX) > 760){
            randomX =  Math.round(800 * Math.random())
        }
        return [
            randomX,
            Game.DIM_Y,
        ];
    }

    randomTargetPosition() {
        //won't randomly spawn off the screen
        let randomX = Math.round(800 * Math.random());
        let randomY = Math.round(800 * Math.random());
        while (Math.round(randomX) < 40 || Math.round(randomX) > 760){
            randomX =  Math.round(800 * Math.random())
        }
        while (Math.round(randomY) < 20 || Math.round(randomY) > 650){
            randomY =  Math.round(800 * Math.random())
        }
        return [
            randomX,
            randomY,
        ];
    }


    isGameOver(){
       //determining the if the game is over
        if (this.bulletsCount === 0 && this.bullets.length == 0){
            this.ended = true; 
            // console.log(this.ended);
        } else if(this.targets.length === 0){
            this.win = true;
        }
    }


    draw(ctx){
        ctx.clearRect(0, 0, 800, 800)
        
        //background color
        ctx.fillStyle = Game.BG_COLOR;
        ctx.fillRect(0, 0, 800, 800);

        //background ground!
        ctx.beginPath();
        ctx.moveTo(0,700);
        ctx.lineTo(800,700);
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ffffff";
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 5;
        ctx.stroke();


        this.allObjects().forEach((object) => {
            // console.log(object);
            object.draw(ctx);
        });

        ctx.beginPath();
        ctx.font = "16px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Score: "+ this.score, 8, 20);
        ctx.stroke();


        ctx.beginPath();
        ctx.font = "16px Arial";
        ctx.fillText("Available Bullets: "+ this.bulletsCount, 8, 40);
        ctx.fillStyle = "white";
        ctx.stroke();

        //determining if the game is over
        if(this.ended){
            ctx.clearRect(0, 0, 800, 800);
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Game Over",10,50);
            ctx.fillText("You scored: " + this.score, 10, 100);
        } else if (this.win){
            ctx.clearRect(0, 0, 800, 800);
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("You won!",10,50);
            ctx.fillText("You scored: " + this.score, 10, 100);
        }
    }

}

Game.BG_COLOR = "#202020";


//default x and y for the tanks
Game.DIM_X = 800;
Game.DIM_Y = 690;


module.exports = Game; 
