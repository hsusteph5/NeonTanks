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
    }

    fireBullets() { 
        const relVel = Util.scale(
            Util.direction(this.vel),
            Bullet.SPEED 
        );

        const bulletVel = [
            relVel[0] + this.vel[0], relVel[1] + this.vel[1]
        ];

        //updates the starting position of the bullet and stores 

        //finds the first gun in the array
        //angle is the gun angle 
        const bullet = new Bullet({
            pos: this.game.guns[0].updateGunPos,
            angle: this.game.guns[0].updateAngle,
            vel: bulletVel,
            color: 'white',
            game: this.game
        });

        this.game.score -= 50; 
      
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
    }
}

const DEFAULTS = {
    COLOR: "#00FFFF",
    SPEED: 3
};

module.exports = Tank;