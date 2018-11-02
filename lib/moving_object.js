const Util = require("./utils.js");
const Target = require("./target.js");

class MovingObject {
    constructor(options){
        this.pos = options.pos;
        this.vel = options.vel;
        this.color = options.color;
        this.game = options.game;
        this.shadowColor = options.shadowColor;
        this.ctx = options.ctx;
        this.radius = options.radius 
    }

    //checking if the obj1 (bullet) collided with target 
    //takes the distance 
    isCollidedWith(otherObject) {
        const centerDist = Util.distance(this.pos, otherObject.pos);
        return centerDist < (this.radius + otherObject.radius);
    }

    //when they are confirm collided, it will delete the target 
    collideWith(otherObject) {
        //remove Bullet and otherObject
        //if you hit the target, you get 100 score 
        if (otherObject instanceof Target) {
            this.game.remove(otherObject);
            this.game.score += 100; 
            return true;
        }
        return false;
    }

    remove() {
        this.game.remove(this);
    }
    
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;



module.exports = MovingObject;