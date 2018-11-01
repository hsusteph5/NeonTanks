class MovingObject {
    constructor(options){
        this.pos = options.pos;
        this.vel = options.vel;
        // this.radius = options.radius;
        this.color = options.color;
        this.game = options.game;
        // this.isWrappable = true;
        this.shadowColor = options.shadowColor;
        this.ctx = options.ctx
    }

    move(timeDelta) {
        //constant decreasing in velocity to account for gravity
        this.vel[1] -= 1.7 / 10

        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA;
        // console.log('velocityScale', velocityScale)
        let offsetX = this.vel[0] * velocityScale
        let offsetY = this.vel[1] * velocityScale 
        this.pos = [this.pos[0] + offsetX, this.pos[1] - offsetY ]


        console.log(this.vel[1]);
    }
}


const NORMAL_FRAME_TIME_DELTA = 1000 / 60;



module.exports = MovingObject;