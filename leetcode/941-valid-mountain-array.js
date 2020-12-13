/**
 * @param {number[]} A
 * @return {number}
 */
var validMountainArray = function(A) {
  if (A.length < 3) return false
  let localMax = 0
  let globalMax = 0
  
  let i = 0
  while(i < A.length) {
    // walk up (+slope)
    let startUp = i
    while((i+1 < A.length) && (A[i] < A[i+1])) i++

    if (i === startUp) {
      i++
      continue
    }
    // walk down (-slope)
    let startDown = i
    while((i+1 < A.length) && (A[i] > A[i+1])) i++

    if(i===startDown) {
      i++
      continue
    }
    localMax = i-startUp+1
    globalMax = Math.max(globalMax, localMax)
  }
  return globalMax === A.length
};