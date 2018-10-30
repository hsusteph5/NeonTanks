//entry file
// const MovingObject = require("./moving_object.js");
// const Tank = require("./tank.js");

const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 800;
    canvasEl.height = 800;

    const ctx = canvasEl.getContext("2d");

    const game = new Game();
    new GameView(game, ctx).start();
    console.log('webpack is running!')
})

// ctx.arc(100, 100, 20, 0, 2*Math.PI, true);

    // //background color
    // ctx.fillStyle = "#202020";
    // ctx.fillRect(0, 0, 800, 800);
    

    //background line
    // ctx.beginPath();
    // ctx.moveTo(0,700);
    // ctx.lineTo(800,700);
    // ctx.shadowBlur = 10;
    // ctx.shadowColor = "#ffffff";
    // ctx.strokeStyle = "#ffffff";
    // ctx.lineWidth = 5;
    // ctx.stroke();

    //tank test
    // let myTank = new Tank({pos: [0, 690], color: "#00FFFF", shadowColor: "#97FFFF"});
    // myTank.draw(ctx);
    // let enemyTank = new Tank({pos: [690, 690], color: "#ff4c4c", shadowColor: "#ffb2b2"});
    // enemyTank.draw(ctx);