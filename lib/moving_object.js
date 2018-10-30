class MovingObject {
    constructor(options){
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
        this.game = options.game;
        this.isWrappable = true;
        this.shadowColor = options.shadowColor;
        this.ctx = options.ctx
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
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    move(timeDelta) {
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA, 
            offsetX = this.vel[0] * velocityScale
        this.pos = [this.pos[0] * offsetX, this.pos[1] ]
    }
}


const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
// const mo = new MovingObj( 
//     { pos: [30, 30, vel: [10,10], radius: 5, color: "#00FF00"]}
// )

module.exports = MovingObject;

//creating after glow in for my tanks: 
// https://stackoverflow.com/questions/5067368/html5-canvas-create-outer-glow-effect-of-shape

//canvas drawing of the trapezoid
// this.ctx.beginPath();
// this.ctx.moveTo(0, 0);
// this.ctx.lineTo(15, 25);
// this.ctx.lineTo(35, 25);
// this.ctx.lineTo(50, 0);
// this.ctx.closePath();
// this.ctx.strokeStyle = "#97FFFF";
// this.ctx.lineWidth = 7;
// this.ctx.stroke();
// this.ctx.fillStyle = "#00FFFF";
// this.ctx.fill();