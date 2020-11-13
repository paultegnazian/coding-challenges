/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    let pairs = [[p1,p2], [p1,p3], [p1,p4], [p2,p3], [p2,p4], [p3,p4]]
    let x = 0
    let y = 1
    let lengths = new Set()
    let diffX, diffY, numSqrt
    
    for (i = 0; i < pairs.length; i++) {
        diffX = pairs[i][0][x] - pairs[i][1][x]
        diffY = pairs[i][0][y] - pairs[i][1][y]
        numSqrt = Math.sqrt(Math.pow(diffX,2)+Math.pow(diffY,2))
        if (numSqrt === 0) return false
        lengths.add(numSqrt)   
    }
    return lengths.size === 2
};