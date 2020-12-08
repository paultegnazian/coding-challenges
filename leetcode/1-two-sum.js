const { match } = require("ramda");

// Brute Force Approach:
var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = nums.length-1;j>i; j--) {
      let sum = nums[i] + nums[j]
      const isSumEqualTarget = sum === target
      if(isSumEqualTarget) return [i, j]
    }
  }
};
// Can do Hash Table because there is only 1 solution;
// unique key & value
// One Pass Hash Table
var twoSum = function(nums, target) {
  const values = new Map()

  for(let i=0;i<nums.length;i++) {
    const targetSubtract = target - nums[i]
    const matchingValue = values.get(targetSubtract) 
    if (matchingValue !== undefined) {
      return [matchingValue, i]
    }
    values.set(nums[i],i)
  }
};
