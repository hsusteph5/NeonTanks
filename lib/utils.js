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
    // norm(vec) {
    //     return Util.distance([0,0], vec);
    // },
    norm(initialPos, vec) {
        return Util.distance([initialPos[0], initialPos[1]], vec);
    },
    
    //scale the length of vector by a given amount 
    scale(vec, m){
        return [vec[0] * m, vec[1] * m];
    },
    //normalize the length of the vector to 1, maintaining the direction 
    direction(initialPos, vec) {
        const norm = Util.norm(initialPos, vec)
        return Util.scale(vec, 1 / norm);
    },
    //finding angle from initial Pos and result Pos 
    angle(initialPos, mousePos){
        const hypotenuse = Util.distance(initialPos, mousePos);
        const xDist = (mousePos[0] - initialPos[0]); 
        return Math.acos(xDist / hypotenuse);
    }, 
    //want to return a pos from distance to be a set value like 20px
    resultantPos(initialPos, mousePos){
        let angle = Util.angle(initialPos, mousePos);

        // console.log('angle: ', angle);
        let arr = [];
        //20 will the length of the gun
        //hypotenuse * Math.cos(angle) 
        arr.push(20 * Math.cos(angle));
        arr.push(20 * Math.sin(angle));
        // console.log(arr);
        // console.log([arr[0] + initialPos[0],  initialPos[1] - arr[1]]); 
        return [arr[0] + initialPos[0],  initialPos[1] - arr[1]]; 
    }
}

module.exports = Util;