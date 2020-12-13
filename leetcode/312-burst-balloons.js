/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(givenNums) {
  const nums = Array(givenNums.length + 2)
  let n = 1
  for (let x of givenNums) if(x > 0) nums[n++] = x
  nums[0] = nums[n++] = 1

  const memo = Array(n)
  for(let i = 0; i < nums.length; i++) {
    memo[i] = [n]
  }
  return burst(memo, nums, 0, n - 1)
};

const burst = (memo, nums, left, right) => {
  if (left + 1 == right) return 0;
  if (memo[left][right] > 0) return memo[left][right];
  let ans = 0;
  for (let i = left + 1; i < right; ++i) {
    ans = Math.max(
      ans,
      nums[left] * nums[i] * nums[right] + 
        burst(memo, nums, left, i) +
        burst(memo, nums, i, right)
    )
  }
  memo[left][right] = ans
  return ans
}