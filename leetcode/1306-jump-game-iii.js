/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  if(!arr.includes(0)) return false
  const explored = new Set()

  function dfs(i) {
    if(arr[i] === 0) return true
    if(i >= arr.length || i < 0) return false
    if(explored.has(i)) return false
    explored.add(i)
    const indexL = i - arr[i]
    const indexR = i + arr[i]
    const isZeroL = dfs(indexL)
    const isZeroR = dfs(indexR)
    return isZeroL || isZeroR
  }
  return dfs(start)
};

// can simplify: return dfs(i-arr[i]) || dfs(i+arr[i])