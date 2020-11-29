/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 0
  let ind = digits.length-1
  let sumDigit = (digits[ind]+1)
  digits[ind] = (sumDigit) % 10
  carry = Math.floor(sumDigit/10)
  if(ind === 0 && carry > 0) digits.unshift(carry)
  
  if (carry > 0) {
    for(ind=ind-1; ind>=0; ind--) {
      sumDigit = (digits[ind]+carry)
      digits[ind] = sumDigit % 10
      carry = Math.floor(sumDigit/10)
      if(ind === 0 && carry > 0) digits.unshift(carry)
    }
  }
  return digits
};
