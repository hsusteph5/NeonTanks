const MovingObject = require("./moving_object");
const Util = require('./utils.js');


//randomizing the X position is not working
class Tank extends MovingObject {
    constructor(options){
        // options.color = DEFAULTS.COLOR;
        // options.pos = Util.randomXPos(options.pos[0], options.pos[1]);
        options.vel = options.vel || [1, 1]
        super(options);
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
        // ctx.stroke();
        // ctx.fillStyle = "#00FFFF";
        ctx.fillStyle = DEFAULTS.COLOR;
        ctx.fill();
    }
}

const DEFAULTS = {
    COLOR: "#00FFFF",
    SPEED: 4
};

module.exports = Tank;