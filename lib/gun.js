const Util = require('./utils.js');

class Gun {
    constructor(options){
        this.pos = options.pos; 
        this.color = options.color;
        this.mousePos = {};
        this.updateGunPos = "";
    }

    //grabbing the mouse Pos from the event listener on the entry
    changeGunPos(mousePos){
        this.mousePos = mousePos;
    }

    //get the resultant position of the gun and pass it to the tank
    // updateGunPos() {
    //     return this.updateGunPos;
    // }

    draw(ctx){
        ctx.beginPath();
        const offsetPos = [this.pos[0] + 15, this.pos[1] - 5]

        ctx.moveTo(offsetPos[0], offsetPos[1]);
        let resultPos = Util.gunEndPos(offsetPos, [this.mousePos.x, this.mousePos.y]);
        ctx.lineTo(resultPos[0], resultPos[1]);

        //update the end gun position 
        this.updateGunPos = resultPos; 

        ctx.strokeStyle = "white";
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