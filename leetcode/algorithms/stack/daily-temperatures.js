/*
    leetcode
    category: "Algorithms"
    problem title: "Daily Temperatures"
*/

/**
 * @param {number[]} T
 * @return {number[]}
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


var dailyTemperatures = function(T) {
    
    const ansArr = Array.from({length: T.length},(e,i) => 0);
    const tempStack = new Stack();
    
    for(let i=T.length-1;i>=0;--i){
        
        while(tempStack.peek()!=null && tempStack.peek().temperature<=T[i]){
            tempStack.pop();
        }
        ansArr[i] = tempStack.peek()!=null ? tempStack.peek().index-i : 0;
        tempStack.push({
            temperature: T[i],
            index: i
        })
    }
    
    
    return ansArr;
    
};