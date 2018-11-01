const Util = require('./utils.js');

//want the gun to inherit from Tank 
class Gun {
    constructor(options){
        this.pos = options.pos; 
        this.color = options.color;
        this.mousePos = {};
        //want to save the end gun position so the bullet knows where to start
        this.updateGunPos = "";
        //save the angle so that the bullet will follow a certain velocity 
        this.updateAngle = "";
    }

    //grabbing the mouse Pos from the event listener on the entry
    changeGunPos(mousePos){
        this.mousePos = mousePos;
    }

    draw(ctx){
    //     console.log(ctx);
        ctx.beginPath();
        const offsetPos = [this.pos[0] + 15, this.pos[1] - 5]

        ctx.moveTo(offsetPos[0], offsetPos[1]);
        let resultPos = Util.gunEndPos(offsetPos, [this.mousePos.x, this.mousePos.y]);
        ctx.lineTo(resultPos[0], resultPos[1]);

        //update the end gun position 
        this.updateGunPos = resultPos; 

       //update the angle so other objects can have access to them 
        this.updateAngle = Util.angle(offsetPos, [this.mousePos.x, this.mousePos.y]);
        // console.log(this.updateAngle);


        ctx.strokeStyle = "white";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

}

module.exports = Gun;