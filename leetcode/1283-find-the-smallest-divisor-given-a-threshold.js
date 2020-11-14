/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    L = 1
    R = Math.max(...nums)

    while (L < R) {
        numSum = 0 // reset sum
        currDivisor = Math.floor((L + R)/2)
        for (let num of nums) {
            numSum += Math.ceil(num / currDivisor)
        }
        if (numSum <= threshold) {
            R = currDivisor
        } else {
            L = currDivisor + 1
        }
    }
    return R
};