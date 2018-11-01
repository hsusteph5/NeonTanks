const MovingObject = require("./moving_object");

class Bullet extends MovingObject {
    constructor(options){
        options.radius = Bullet.RADIUS;
        super(options);
        // this.pos = 800;
    }


    // ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
    //want the position to start at the end of the gun 
    // then you want to the pos to change aka go up in an arc 
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0],this.pos[1],5,0,2*Math.PI);
        ctx.stroke();
    }
}

Bullet.RADIUS = 2; 
Bullet.SPEED = 1;

module.exports = Bullet;