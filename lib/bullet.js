const MovingObject = require("./moving_object");
const Util = require("./utils.js");


class Bullet extends MovingObject {
    constructor(options){
        options.radius = Bullet.RADIUS;
        super(options);
        //saves the angle from the gun
        this.angle = options.angle;
        this.isWrappable = false;
        //set the velocity with X and Y given the angle 
        this.vel = [Util.xVelocity(this.vel[0], this.angle), Util.yVelocity(this.vel[1], this.angle)]
    }


    // ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
    //want the position to start at the end of the gun 
    // then you want to the pos to change aka go up in an arc 
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0],this.pos[1],5,0,2*Math.PI);
        ctx.stroke();
    }

    move(timeDelta) {
        //constant decreasing in velocity to account for gravity
        this.vel[1] -= this.optionsVel[1] / 100;
        //change in the time 
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;

        //position is the time * velocity 
        // console.log('velocityScale', velocityScale)
        let offsetX = this.vel[0] * velocityScale
        let offsetY = this.vel[1] * velocityScale 
    
        //this DOES NOT WORK! the x-direction is NOT changing direction
        //need to find the X-direction dependent on angle 
        if(this.angle > (Math.PI / 2) ){
            offsetX = -offsetX; 
        } else if (this.angle === (Math.PI / 2)) {
            offsetX = 0; 
        }

        this.pos = [this.pos[0] + offsetX, this.pos[1] - offsetY ]


        // check if the bullet is out of bounds, it will remove it 
        if (this.game.isOutOfBounds(this.pos)) {
            this.remove();
        }
    }

    //remove the bullet from the game once it's out bound 
    remove() {
        this.game.remove(this);
    }

    

    isCollidedWith(otherObject) {
        console.log('collided With');
        const centerDist = Util.dist(this.pos, otherObject.pos);
        return centerDist < (this.radius + otherObject.radius);
    }
}

Bullet.RADIUS = 2; 
Bullet.SPEED = 1;

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;


module.exports = Bullet;