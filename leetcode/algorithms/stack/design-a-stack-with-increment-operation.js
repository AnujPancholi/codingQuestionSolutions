/*
    leetcode
    category: "Algorithms"
    problem title: "Design a Stack With Increment Operation"
*/

/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this._stack = [];
    this._maxSize = maxSize;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this._stack.length<this._maxSize){
        this._stack.push(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    return this._stack.length===0 ? -1 : this._stack.pop();
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    for(let i=0;i<k && i<this._stack.length;++i){
        this._stack[i]+=val;
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */