const Tank = require("./tank");
const Bullet = require("./bullet");
const Gun = require("./gun.js");

class Game {
    constructor() {
        this.tanks = [];
        this.bullets = [];
        this.guns = [];
    }

    add(object){
        if(object instanceof Tank){
            this.tanks.push(object);
        } else if (object instanceof Bullet){
            this.bullets.push(object);
        } else if (object instanceof Gun){
            this.guns.push(object);
        }
    } 

    allObjects() {
        return [].concat(this.tanks, this.guns, this.bullets);
    }

    addTank() {
        const randomPos = this.randomPosition();
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

    randomPosition() {
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

    step(delta){
        this.moveBullets(delta);
    }

}

Game.BG_COLOR = "#202020";


//default x and y for the tanks
Game.DIM_X = 800;
Game.DIM_Y = 690;


module.exports = Game; 


    // moveObjects(delta){
    //     this.allObjects().forEach((object) => {
    //         object.move(delta);
    //     })
    // }