class GameView {
    constructor(game, ctx){
        this.ctx = ctx;
        this.game = game;
        this.tank = this.game.addTank();
    }

    //handles the key binding to the movement 
    bindKeyHandlers() {
        const tank = this.tank;

        Object.keys(GameView.MOVES).forEach((k) => {
            const moves = GameView.MOVES[k];

            //not using the move function??? 
            // key(k, () => { tank.move(moves)});
            key(k, () => { 
                // console.log(tank.pos);
                tank.pos = [tank.pos[0] + moves[0], tank.pos[1]]});
        });

        // key("space", () => { tank.fireBullets(); });
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
        // this.game.step(timeDelta);

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