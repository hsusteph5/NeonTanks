//entry file
const MovingObject = require("./moving_object.js");
const Tank = require("./tank.js");

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 800;
    canvasEl.height = 800;

    const ctx = canvasEl.getContext("2d");


    //background color
    ctx.fillStyle = "#202020";
    ctx.fillRect(0, 0, 800, 800);
    

    //background line
    ctx.beginPath();
    ctx.moveTo(0,700);
    ctx.lineTo(800,700);
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#ffffff";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 5;
    ctx.stroke();

    // movingObj = new MovingObject({ pos: [0, 750], vel: [10, 10], radius: 5, color: "#00FF00", ctx});
    // movingObj.draw(ctx);
    // movingObj.move();
    let myTank = new Tank({pos: [0, 690], color: "#00FFFF", shadowColor: "#97FFFF"});
    myTank.draw(ctx);
    let enemyTank = new Tank({pos: [690, 690], color: "#ff4c4c", shadowColor: "#ffb2b2"});
    enemyTank.draw(ctx);
    console.log('webpack is running!')
})

// ctx.arc(100, 100, 20, 0, 2*Math.PI, true);