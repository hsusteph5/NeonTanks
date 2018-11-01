// const MovingObject = require("./moving_object");
// const Gun = require("./gun.js");
const Bullet = require("./bullet.js")
const Util = require('./utils.js');

class Tank {
    constructor(options){
        this.pos = options.pos;
        this.vel = options.vel || [1, 10]
        this.color = options.color;
        this.game = options.game;
        this.shadowColor = options.shadowColor;
        this.ctx = options.ctx;
        // this.mousePos;
        // this.tankGun = this.addTankGun();
    }

    // addTankGun() {
    //     const tankGun = new Gun({
    //         pos: this.pos,
    //         color: "#00FFFF",
    //     });
    //     return tankGun;
    // }

    fireBullets() { 
        const relVel = Util.scale(
            Util.direction(this.vel),
            Bullet.SPEED 
        );

        const bulletVel = [
            relVel[0] + this.vel[0], relVel[1] + this.vel[1]
        ];

        //updates the starting position of the bullet and stores 
        //it under updateGunPos
        //this.tankGun.updateGunPos
        // console.log(this.game.guns[0])

        //finds the first gun in the array
        //angle is the gun angle 
        const bullet = new Bullet({
            pos: this.game.guns[0].updateGunPos,
            angle: this.game.guns[0].updateAngle,
            vel: bulletVel,
            color: 'white',
            game: this.game
        });
      
        this.game.add(bullet);
    }

    draw(ctx){
        //tanks
        ctx.beginPath();
        ctx.moveTo(this.pos[0], this.pos[1]);
        ctx.lineTo(this.pos[0] + 5, this.pos[1] - 10);
        ctx.lineTo(this.pos[0] + 25, this.pos[1] - 10);
        ctx.lineTo(this.pos[0] + 30, this.pos[1]);
        ctx.closePath();
        ctx.lineWidth = 10;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.shadowColor;
        ctx.fillStyle = DEFAULTS.COLOR;
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        // this.tankGun.draw(ctx);
        ctx.closePath();
    }
}

const DEFAULTS = {
    COLOR: "#00FFFF",
    SPEED: 4
};

module.exports = Tank;