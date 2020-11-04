/** Comparing letter and building string; memory intensive
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let globalMax = ""
    let localMax = ""
    
    for (let i = 0; i < s.length; i++) {
        currLetter = s[i]
        if (localMax.length === 0) {
            localMax = currLetter
        }
        else if (localMax[0] === currLetter) {
            localMax += currLetter
        } else {
            if (localMax.length >= globalMax.length) {
                globalMax = localMax
                localMax = currLetter
            } else {
                localMax = currLetter
            }
        }
    }
    if (localMax.length >= globalMax.length) {
        globalMax = localMax
    }
    return globalMax.length
};
/** Using numbers for globalMax; memory intensive
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let globalMax = 1
    let localMax = s[0]
    
    for (let i = 1; i < s.length; i++) {
        currLetter = s[i]
        if (localMax[0] === currLetter) {
            localMax += currLetter
        } else {
            localMax = currLetter
        }
        globalMax = Math.max(globalMax,localMax.length)
    }
    return globalMax
};
/** Using numbers for global and local; least memory intensive
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let globalMax = 1
    let localMax = 1
    let localLetter = s[0]
    
    for (let i = 1; i < s.length; i++) {
        currLetter = s[i]
        if (localLetter === currLetter) {
            localMax++
        } else {
            localMax = 1
            localLetter = currLetter
        }
        globalMax = Math.max(globalMax,localMax)
    }
    return globalMax
};

