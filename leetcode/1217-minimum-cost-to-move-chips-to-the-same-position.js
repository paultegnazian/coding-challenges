/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let numEven = 0
    let numOdd = 0
    
    for (i = 0; i < position.length; i++) {
        if (position[i] % 2 === 1) {
            numOdd++
        } else {
            numEven++
        }
    }
    return Math.min(numOdd,numEven)
};