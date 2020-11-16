/** complete novice does this
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  if (n <= 0) return false
  if (n === 1) return true
  if (n % 2 === 1) return false
  let x = 1
  let power4 = Math.pow(4,x)
  while (power4 <= n) {
      power4 = Math.pow(4,x)
      console.log(power4)
      if (power4 === n) return true
      if (power4 < n) {
        x++
      }
  }
  return false
};
// knowledgable programmers do this
var isPowerOfFour = function(num) {
  if(num === 0 )return false
  while(num % 4 === 0){
      num /= 4
  }
  return num === 1
};
