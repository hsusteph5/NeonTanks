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
    }

    add(object){
        if(object instanceof Tank){
            this.tanks.push(object);
        } else if (object instanceof Bullet){
            this.bullets.push(object);
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
        for(let i = 0; i < randomAmount; i++){
            let target = new Target({
                pos: this.randomTargetPosition(),
                color: "white"
            })
            this.add(target);
        }
        return this.targets;
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
    }

    moveBullets(delta){
        this.bullets.forEach((bullet) => {
            bullet.move(delta);
        })
    }

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


    step(delta){
        this.moveBullets(delta);
    }

}

Game.BG_COLOR = "#202020";


//default x and y for the tanks
Game.DIM_X = 800;
Game.DIM_Y = 690;


module.exports = Game; 
