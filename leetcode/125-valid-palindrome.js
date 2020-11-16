/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let i = 0
  let j = s.length - 1
  let str = s.toLowerCase() //ignore cases
  let charAccept = "abcdefghijklmnopqrstuvwxyz0987654321"

  while (i < j) {
    if (charAccept.indexOf(str[i]) !== -1 && charAccept.indexOf(str[j]) !== -1) {
      if (str[i] != str[j]) {
      return false
      } else {
        i++
        j--
      }
    } else if (charAccept.indexOf(str[i]) === -1 && charAccept.indexOf(str[j]) === -1) {
      i++
      j--
    } else if (charAccept.indexOf(str[i]) === -1 && charAccept.indexOf(str[j]) !== -1) {
      i++
    } else if (charAccept.indexOf(str[i]) !== -1 && charAccept.indexOf(str[j]) === -1) {
      j--
    }
  }
  return true
};

// improve with charCodeAt(0)
// see Xiaoyun's solution for a solution with improved run speed and memory
// const isAlphanumeric = (c) => (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9")