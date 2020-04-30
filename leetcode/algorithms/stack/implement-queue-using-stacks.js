/*
    leetcode
    category: "Algorithms"
    problem title: "Implement Queue Using Stacks"
*/

/**
 * Initialize your data structure here.
 */
const _private_stack_map = new WeakMap();

const Stack = function(){
	const _stackData = {
		stack: []
	}
	_private_stack_map.set(this,_stackData);
	
}


Stack.prototype.push = function(val){
	let stackData = _private_stack_map.get(this);
	stackData.stack.push(val);
}

Stack.prototype.pop = function(){
	let stackData = _private_stack_map.get(this);
	return stackData.stack.pop();
}

Stack.prototype.peek = function(){
	let stackData = _private_stack_map.get(this);
	return stackData.stack.length>0 ? stackData.stack[stackData.stack.length-1] : null;
}


var MyQueue = function() {
    this.mainStack = new Stack();
    this.auxiliaryStack = new Stack();
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while(this.mainStack.peek()){
        this.auxiliaryStack.push(this.mainStack.pop());
    }
    this.mainStack.push(x);
    while(this.auxiliaryStack.peek()){
        this.mainStack.push(this.auxiliaryStack.pop());
    }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.mainStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.mainStack.peek();
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.mainStack.peek();
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */