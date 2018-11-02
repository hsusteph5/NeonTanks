//random position of the future enemy 
const Util = {
    //random X Pos 
    randomXPos(posX) {
        newXPos = posX * Math.random();
            while (newXPos >= 750 || newXPos < 0) {
                newXPos *= Math.random();
            }
        return newXPos;
    },


    //finding the distance between 2 positions 
    //square root (x1 - x2) ^ 2 + (y1 - y2) ^ 2 
    distance(pos1, pos2){
        return Math.sqrt(
            Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
        );
    },
    //find the length of the vector 
    norm(vec) {
        return Util.distance([0, 0], vec);
    },
    
    //scale the length of vector by a given amount 
    scale(vec, m){
        return [vec[0] * m, vec[1] * m];
    },
    //normalize the length of the vector to 1, maintaining the direction 
    direction(vec) {
        const norm = Util.norm(vec)
        return Util.scale(vec, 1 / norm);
    },
    //finding angle from initial Pos and result Pos 
    angle(initialPos, mousePos){
        const hypotenuse = Util.distance(initialPos, mousePos);
        const xDist = (mousePos[0] - initialPos[0]); 
        const resultAngle = Math.acos(xDist / hypotenuse) || 1.57;
        return resultAngle;
    }, 
    //want to return a pos from distance to be a set value like 20px
    gunEndPos(initialPos, mousePos){
        //gets the angle from the initalPos and the mousePos
        angle = Util.angle(initialPos, mousePos);


        //rendering the new pos of the endpoint of the gun based on the angles
        let pos = [];
        //don't want people to shoot from the direct right or direct left 
        //limiters on the angle dependent on the mouse 
        if (angle < 0.54) {
            angle = 0.54
        }
        if (angle > 2.6 ) {
            angle = 2.6
        }

        //20 will the length of the gun
        //hypotenuse * Math.cos(angle) 
        pos.push(20 * Math.cos(angle));
        pos.push(20 * Math.sin(angle));

        return [pos[0] + initialPos[0],  initialPos[1] - pos[1]]; 
    },
    xVelocity(velX, angle){
        if (angle > Math.PI / 2){
            return -Math.cos(angle) * 10;
        }
        return Math.cos(angle) * 10; 
    }, 
    yVelocity(velY, angle){
        return Math.sin(angle) * 12;
    }
}

module.exports = Util;