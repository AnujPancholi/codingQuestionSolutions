/*
    leetcode
    category: "Algorithms"
    problem title: "Next Greater Element II"
*/

/**
 * @param {number[]} nums
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
	return stackData.stack.length>0 ? stackData.stack[stackData.stack.length-1] : null;
}

Stack.prototype.getSize = function(){
	let stackData = _private_stack_map.get(this);
	return stackData.stack.length;
}

module.exports = Stack;

var nextGreaterElements = function(nums) {
    const indexStack = new Stack();
    const indexToAnsMap = new Map();
    
    nums.forEach((num,index) => {
        indexToAnsMap.set(index,-1);
        while(indexStack.peek()!=null && nums[indexStack.peek()]<num){
            indexToAnsMap.set(indexStack.pop(),num);
        }
        indexStack.push(index);
    })
    
    nums.forEach((num,index) => {
        while(indexStack.peek()!=null && nums[indexStack.peek()]<num){
        indexToAnsMap.set(indexStack.pop(),num);
        }
    })
    
    const ansArr = [];
    for(let i=0;i<nums.length;++i){
        ansArr[i] = indexToAnsMap.get(i);
    }
    return ansArr;
    
};