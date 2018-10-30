const Tank = require("./tank");

class Game {
    constructor() {
        this.tanks = [];

        // this.addTank();
    }

    add(object){
        if(object instanceof Tank){
            this.tanks.push(object);
        }
    } 

    allObjects() {
        return [].concat(this.tanks)
    }

    addTank() {
        const tank = new Tank({
            pos: this.randomPosition(),
            game: this
        });

        this.add(tank);

        console.log(tank.pos)
        return tank;
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
            object.draw(ctx);
        });
    }

    moveObjects(delta){
        this.allObjects().forEach((object) => {
            object.move(delta);
        })
    }

    randomPosition() {
        return [
            Math.round(800 * Math.random()),
            Game.DIM_Y,
        ];
    }

    step(delta){
        this.moveObjects(delta);
    }

}


// ctx.fillRect(0, 0, 800, 800);
Game.BG_COLOR = "#202020";


//default x and y for the tanks
Game.DIM_X = 800;
Game.DIM_Y = 690;


module.exports = Game;