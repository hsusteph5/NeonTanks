class Target {
    constructor(options){
        this.pos = options.pos;
    }

    isCollidedWith(otherObject) {
        console.log('collided With');
        const centerDist = Util.dist(this.pos, otherObject.pos);
        return centerDist < (this.radius + otherObject.radius);
    }

    collideWith(otherObject) {
        console.log('collision!');
        //remove Bullet and otherObject
        if (otherObject instanceof Bullet) {
            this.remove();
            otherObject.remove();
            return true;
        }
        return false;
    }

    draw(ctx){
        // console.log('target is being rendered');
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], 20, 0, 2 * Math.PI);
        ctx.strokeStyle = '#FF69B4';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], 15, 0, 2 * Math.PI);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], 10, 0, 2 * Math.PI);
        ctx.strokeStyle = '#FF69B4';
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], 5, 0, 2 * Math.PI);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.closePath();
    }
}

module.exports = Target;