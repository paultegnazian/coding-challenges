/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  let bracketMap = new Map()
  bracketMap.set(")","(")
  bracketMap.set("]","[")
  bracketMap.set("}","{")
  const isbracketOpen = (x) => (x === "(") || (x === "[") || (x === "{")

  let lastBracket
  for(let i=0; i<s.length; i++) {
    if(isbracketOpen(s[i])) stack.push(s[i])
    else {
      lastBracket = stack.pop()
      if(bracketMap.get(s[i]) !== lastBracket) return false
    }
  }
  return stack.length === 0
}

// Object mapping structure:
// const bracketMap = {
//   ")": "(",
//   "]": "[",
//   "}": "}"
// }
// const opens = new Set(Object.values(bracketMap))