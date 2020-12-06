/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
  let s = []
  for (let i = 1; i <= n; i++) {
    if(n % i === 0) {
      s.push(i)
      if (s.length >= k) return s[k-1]
    }
  }
  return -1
};

/** Without storing results
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
  let counter = 0
  for (let i = 1; i <= n; i++) {
    if(n % i === 0) {
      counter += 1
      if (counter === k) return i
    }
  }
  return -1
};

