const Tank = require("./tank");

class Game {
    constructor() {
        this.tanks = [];
    }

    add(object){
        if(object instanceof Tank){
            this.tanks.push(object);
        }
    } 

    addTank() {
        const tank = new Tank({
            pos: this.randomPosition(),
            game: this
        });
        
        this.add(tank);

        return tank;
    }

    randomPosition() {
        return [
            Game.DIM_X * Math.random(),
            Game.DIM_Y * Math.random(),
        ];
    }
}

module.exports = Game;