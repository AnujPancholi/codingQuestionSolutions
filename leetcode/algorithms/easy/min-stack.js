/*
    leetcode
    category: "Algorithms"
    problem title: "Min Stack"
*/


/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = null;
    this.stack = [];
    // this.topOfStack=-1;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    // this.topOfStack++;
    if(this.min===null){
        this.min=x;
    } else {
        this.min = Math.min(this.min,x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length===0){
        return;
    }
    this.stack.pop();
    // this.topOfStack--;
    if(this.stack.length===0){
        this.min=null;
    } else {
        this.min = Math.min(...this.stack);
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length===0){
        return null;
    } else {
        return this.stack[this.stack.length-1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */