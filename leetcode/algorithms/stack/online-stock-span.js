/*
    leetcode
    category: "Algorithms"
    problem title: "Online Stock Span"
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
	return stackData.stack.length===0 ? null : stackData.stack[stackData.stack.length-1];
}

Stack.prototype.getSize = function(){
	let stackData = _private_stack_map.get(this);
	return stackData.stack.length;
}



var StockSpanner = function() {
    this._stack = new Stack();
    this._dayCount = -1;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    ++this._dayCount;
    
    while(this._stack.peek()!=null && this._stack.peek().price<=price){
        this._stack.pop();
    }
    const span = this._dayCount - (this._stack.peek()===null ? -1 : this._stack.peek().day);
    this._stack.push({
        day: this._dayCount,
        price: price
    })
    
    return span;
    
    
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */