/** Map solution
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  let res = 0
  const remainderCounts = new Map()

  for(let duration of time) {
    let mod = duration % 60
    let modPair = (60 - mod) % 60
    if(remainderCounts.has(modPair)){
      res += remainderCounts.get(modPair)
    }
    if(mod60.has(mod)){
      remainderCounts.set(mod,remainderCounts.get(mod)+1)
    } else {
      remainderCounts.set(mod, 1)
    }
  }
  return count
};

/** Object solution - result is index position, val is count
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  let res = 0
  const appearDic = Array(60).fill(0)

  for(let duration of time) {
    const mod = duration % 60
    const modPair = (60 - mod) % 60
    res += appearDic[modPair]
    appearDic[mod] += 1
  }
  return res
};



