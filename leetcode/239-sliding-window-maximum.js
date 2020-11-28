/** "deque" -> pronounced: deck
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let q = [] //queue
  let res = [] //result
  for(let i=0; i<nums.length; i++){
    while(q.length && q[q.length-1] < nums[i]) {
      q.pop()
    }
    q.push(nums[i])
    if(i >= k-1){
      res.push(q[0])
      if(q[0] === nums[i-k+1]) q.shift()
    }
  }
  return res
};

// Only works for small nums.length && small k
var maxSlidingWindow = function(nums, k) {
  let numsMax = []
for (let i = 0; i <= nums.length - k; i++) {
  let slidingWindow = nums.slice(i,i+k)
  console.log("window ", slidingWindow)
  numsMax[i] = Math.max(...slidingWindow)
  console.log(numsMax)
}
return numsMax
};