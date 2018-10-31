const Util = require('./utils.js');

class Gun {
    constructor(options){
        this.pos = options.pos; 
        this.color = options.color;
        this.game = this.game;
        this.mousePos = {};
    }

    changeGunPos(mousePos){
        this.mousePos = mousePos;
        // console.log('mouse Pos', this.mousePos)
    }


    draw(ctx){
        ctx.beginPath();
        const offsetPos = [this.pos[0] + 15, this.pos[1] - 5]
        
        ctx.moveTo(offsetPos[0], offsetPos[1]);
        let resultPos = Util.resultantPos(offsetPos, [this.mousePos.x, this.mousePos.y]);
        ctx.lineTo(resultPos[0], resultPos[1]);

        ctx.strokeStyle = "#pink";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fill();
    }

}

module.exports = Gun;