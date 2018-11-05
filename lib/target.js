const Util = require("./utils.js");

class Target {
    constructor(options){
        // super(options);
        this.pos = options.pos;
        this.radius = 25; 
    }

    draw(ctx){
        // console.log('target is being rendered');
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], 20, 0, 2 * Math.PI);
        ctx.strokeStyle = '#FF69B4';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], 15, 0, 2 * Math.PI);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], 10, 0, 2 * Math.PI);
        ctx.strokeStyle = '#FF69B4';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], 5, 0, 2 * Math.PI);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.closePath();
    }
}

module.exports = Target;