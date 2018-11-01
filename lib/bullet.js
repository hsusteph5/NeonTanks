const MovingObject = require("./moving_object");
const Util = require("./utils.js");


class Bullet extends MovingObject {
    constructor(options){
        options.radius = Bullet.RADIUS;
        super(options);
        this.angle = options.angle;
        // console.log(this.angle);
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
        // let gun = this.game.gun
    
        // console.log(this.optionsVel);
        //constant decreasing in velocity to account for gravity
        // this.vel = [Util.xVelocity(this.vel[0], this.angle), Util.yVelocity(this.vel[1], this.angle)]
        this.vel[1] -= this.optionsVel[1] / 100
        console.log(this.vel);

        //change in the time 
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;

        //position is the time * velocity 
        // console.log('velocityScale', velocityScale)
        let offsetX = this.vel[0] * velocityScale
        let offsetY = this.vel[1] * velocityScale 


        //need to find the X-direction dependent on angle 
        if(this.angle > (Math.PI / 2) ){
            offsetX = -offsetX; 
        } else if (this.angle === (Math.PI / 2)) {
            offsetX = 0; 
        }

        this.pos = [this.pos[0] + offsetX, this.pos[1] - offsetY ]
        // console.log(this.vel[1]);
    }
}

Bullet.RADIUS = 2; 
Bullet.SPEED = 1;

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;


module.exports = Bullet;