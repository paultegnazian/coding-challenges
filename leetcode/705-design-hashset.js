/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.set = []; //declare object
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function(key) {
  if (this.contains(key) === false) {
    this.set.push(key)
  }
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function(key) {
  if (this.contains(key) === false) return
  for (let i = 0; i < this.set.length; i++) {
      if (this.set[i] === key) {
          this.set.splice(i, 1)
          return
      }
  }
};

/**
* Returns true if this set contains the specified element 
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function(key) {
  for (let i = 0; i < this.set.length; i++) {
      if (this.set[i] === key) return true
  }
  return false
};

/** 
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/

/** Code by Xiaoyun Yang
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.h = {}
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function(key) {
this.h[key] = true  
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function(key) {
  this.h[key] = false
};

/**
* Returns true if this set contains the specified element 
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function(key) {
  return this.h[key] ? true : false
};
