/** high-memory usage, likely due to new array length = word.length & looping
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (word.length === 1) {
    return true
  }

  let charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let isUpper = []
  for (let i = 0; i < word.length; i++) {
    isUpper[i] = (charsUpper.includes(word[i]))
    if (i === 1) {
      if (isUpper[0] === false && isUpper [1] === true) {
        return false
      }
    }
    if (i >= 2) {
      if (isUpper[i] != isUpper[i-1]) return false
    }
  }
  return true
};

/* Xiaoyun's elegant code */
var detectCapitalUse = function(word) {
  const capLetters = word.split("").filter(c => 
    c >= "A" && c <= "Z"
  )
  const isAllCaps = capLetters.length === word.length
  const isOnlyFirstCap = capLetters.length === 1 && capLetters[0]=== word[0]
  const isAllLowercase = capLetters.length === 0
  return isAllCaps || isOnlyFirstCap || isAllLowercase
};