var canReach = function(arr, start) {
  if(!arr.includes(0)) return false
  const explored = new Set()

  function traverse(i) {
    if(arr[i] === 0) return true
    if(i >= arr.length || i < 0) return false
    if(explored.has(i)) return false
    explored.add(i)
    const indexL = i - arr[i]
    const indexR = i + arr[i]
    const isZeroL = traverse(indexL)
    const isZeroR = traverse(indexR)
    return isZeroL || isZeroR
  }
  return traverse(start)
};