const MovingObject = require("./moving_object");
const Gun = require("./gun.js");
const Bullet = require("./bullet.js")
const Util = require('./utils.js');


//randomizing the X position is not working
class Tank extends MovingObject {
    constructor(options){
        options.vel = options.vel || [1, 10]
        super(options);
        this.mousePos;
        const tankGun = new Gun({
            pos: this.pos,
            color: "#00FFFF",
            // game: this.game
        });
        this.tankGun = tankGun;
    }

    fireBullets() {
        // const norm = Util.norm(this.vel);

        // //can't fire unless moving 
        // if(norm == 0) {
        //     return;
        // } 
        const relVel = Util.scale(
            Util.direction(this.vel),
            Bullet.SPEED 
        );


        // console.log(relVel);
        const bulletVel = [
            relVel[0] + this.vel[0], relVel[1] + this.vel[1]
        ];

        //updates the starting position of the bullet and stores 
        //it under updateGunPos
        //this.tankGun.updateGunPos
      
        const bullet = new Bullet({
            pos: this.tankGun.updateGunPos,
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
        this.tankGun.draw(ctx);
        ctx.closePath();
    }
}

const DEFAULTS = {
    COLOR: "#00FFFF",
    SPEED: 4
};

module.exports = Tank;