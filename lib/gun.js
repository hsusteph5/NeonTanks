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
        let resultPos = Util.gunEndPos(offsetPos, [this.mousePos.x, this.mousePos.y]);
        ctx.lineTo(resultPos[0], resultPos[1]);

        ctx.strokeStyle = "pink";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fill();
        ctx.closePath();



    }

}

module.exports = Gun;


// ctx.beginPath();
// ctx.moveTo(offsetPos[0], offsetPos[1]);
// ctx.arc(offsetPos[0], offsetPos[1], 20, 3.14 + 0.54, 3.14 + 2.6);
// ctx.lineTo(offsetPos[0], offsetPos[1]);
// ctx.fillStyle = "#ff6666";
// ctx.fill();
// ctx.closePath();

//drawing arc slices: 
// https://stackoverflow.com/questions/6230363/how-to-draw-a-circle-sector-on-an-html5-canvas