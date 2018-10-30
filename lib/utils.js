//random position of the future enemy 
const Util = {
    // inherits(childClass, parentClass){

    // }
    randomXPos(posX) {
        newXPos = posX * Math.random();
            while (newXPos >= 750 || newXPos < 0) {
                newXPos *= Math.random();
            }
        return newXPos;
    },
}

module.exports = Util;