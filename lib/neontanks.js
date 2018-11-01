//entry file
const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 800;
    canvasEl.height = 800;

    const ctx = canvasEl.getContext("2d");

 
    //mouse position is in a hash 
    const game = new Game();
    let gameView = new GameView(game, ctx)
    gameView.start();
    //getting the mouse position based on the canvasEl 
    let mousePos; 


    function getMousePos(canvasEl, evt) {
        let rect = canvasEl.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    canvasEl.addEventListener('mousemove', function(evt) {
        mousePos = getMousePos(canvasEl, evt);
        gameView.changeGunPos(mousePos);
        // console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
    }, false);

    console.log('webpack is running!');
   
})

//getting the position for the mouse position 
// https://stackoverflow.com/questions/1114465/getting-mouse-location-in-canvas
