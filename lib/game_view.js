class GameView {
    constructor(game, ctx){
        this.ctx = ctx;
        this.game = game;
        //checks if the game is started
        this.started = false; 
        //your tank that you control
        this.tank = this.game.addTank();
        this.gun = this.game.addGun(this.tank.pos);
        this.targets = this.game.addTargets();

        this.ended = false; 
    }

    //handles the key binding to the movement 
    bindKeyHandlers() {
        const tank = this.tank;

        Object.keys(GameView.MOVES).forEach((k) => {
            const moves = GameView.MOVES[k];

            key(k, () => { 
                this.gun.pos = [tank.pos[0] + moves[0], tank.pos[1]];
                tank.pos = [tank.pos[0] + moves[0], tank.pos[1]];
            });
        });

        key("space", () => { tank.fireBullets() });
    }


    //function that gets called when we amove the mouse 
    //change the instance variables 
    //sending the mousePos to the gunPos
    changeGunPos(mousePos){
        this.gun.changeGunPos(mousePos);
    }

    gameOver(){
        //if no targets are left, the game is over
        if(this.game.targets.length === 0){
            // console.log(true);
            this.ended = true;
        }
    }

    start() {
        //if this.started is false, return and not start 
        if (this.started) return;
        this.started = true; 
        this.bindKeyHandlers();
        this.lastTime = 0;
        if(this.ended){
            document.getElementById("game-over").style.display = "block";
        }
        //wish to perform an animation from Canvas 
        requestAnimationFrame(this.animate.bind(this));
    }
    
    //allows you draw the background and tanks
    animate(time){
        const timeDelta = time - this.lastTime;

        //step is for constant moving obj (bullets)
        this.game.step(timeDelta);

        this.game.draw(this.ctx);
        this.lastTime = time; 

        //check if the game is over!
        this.gameOver();
        requestAnimationFrame(this.animate.bind(this));
    }

}

GameView.MOVES = {
    a: [-3, 0],
    d: [3, 0]
}

module.exports = GameView;