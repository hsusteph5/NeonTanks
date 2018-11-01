class GameView {
    constructor(game, ctx){
        this.ctx = ctx;
        this.game = game;

        //enemy tank
        this.game.addTank();
        //enemy tank is lacking a gun and cannot move
        //your tank that you control
        this.tank = this.game.addTank();
    }

    //handles the key binding to the movement 
    bindKeyHandlers() {
        const tank = this.tank;
        // console.log(this.mousePos);
        Object.keys(GameView.MOVES).forEach((k) => {
            const moves = GameView.MOVES[k];

            key(k, () => { 
                // console.log(tank.pos);
                tank.tankGun.pos = [tank.pos[0] + moves[0], tank.pos[1]];
                tank.pos = [tank.pos[0] + moves[0], tank.pos[1]];
                // gun.pos = [gun.pos[0] + moves[0], gun.pos[1]]});
            });
        });

        key("space", () => { tank.fireBullets() });
    }


    //function that gets called when we amove the mouse 
    //change the instance variables 
    //sending the mousePos to the gunPos
    changeGunPos(mousePos){
        this.tank.tankGun.changeGunPos(mousePos);
    }

    start() {
        this.bindKeyHandlers();
        this.lastTime = 0;

        
        //wish to perform an animation from Canvas 
        requestAnimationFrame(this.animate.bind(this));
    }
    //allows you draw the background and tanks
    // this.game.draw(this.ctx);

    animate(time){
        const timeDelta = time - this.lastTime;

        //step is for constant moving obj
        this.game.step(timeDelta);

        this.game.draw(this.ctx);
        this.lastTime = time; 
        requestAnimationFrame(this.animate.bind(this));
    }

}

GameView.MOVES = {
    a: [-1, 0],
    d: [1, 0]
}

module.exports = GameView;