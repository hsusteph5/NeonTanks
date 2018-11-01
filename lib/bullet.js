class Bullet extends MovingObject {
    constructor(options){
        options.radius = Bullet.RADIUS;
        super(options);
    }
}

Bullet.RADIUS = 2; 
Bullet.SPEED = 15;

module.exports = Bullet;