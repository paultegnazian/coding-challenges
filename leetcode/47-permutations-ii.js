/** nPr
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let results = []
  
    function permute(arr, memo) {
      let cur
  
      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur));
        }
        permute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
      }
      return results;
    }
    const permuteNums = permute(nums, [])
    let set = new Set()
    for (i = 0; i < permuteNums.length; i++) {
      set.add(JSON.stringify(permuteNums[i]))
    }
    let permuteUniqueNums = Array.from(set)
    for (i = 0; i < permuteUniqueNums.length; i++) {
      permuteUniqueNums[i] = JSON.parse(permuteUniqueNums[i])
    }
    return permuteUniqueNums
  };