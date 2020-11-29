/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let coins = n
  let sumStairFull = 0
  let stair = 1
  while(coins > 0) {
    coins -= stair
    if(coins >= 0) sumStairFull += 1
    stair++
  }
  return sumStairFull
};