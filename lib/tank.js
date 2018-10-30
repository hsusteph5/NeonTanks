const MovingObject = require("./moving_object");
const Util = require('./utils.js');
const DEFAULTS = {
    COLOR: "#00FFFF",
    SPEED: 4
};

//randomizing the X position is not working
class Tank extends MovingObject {
    constructor(options){
        // options.color = DEFAULTS.COLOR;
        // options.pos = Util.randomXPos(options.pos[0], options.pos[1]);

        super(options);
    }
}

module.exports = Tank;