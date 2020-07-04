/*
    leetcode
    category: "Algorithms"
    problem title: "Next Greater Element I"
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
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

var nextGreaterElement = function(nums1, nums2) {
    const greaterStack = new Stack();
    const numToNextGreaterMap = new Map();
    
    nums2.forEach((num,index) => {
        while(greaterStack.peek()!=null && greaterStack.peek()<num){
            numToNextGreaterMap.set(greaterStack.pop(),num);
        }
        greaterStack.push(num);
    })
    
    return nums1.reduce((arr,num) => {
        arr.push(numToNextGreaterMap.has(num) ? numToNextGreaterMap.get(num) : -1);
        return arr;
    },[])
    
    
};