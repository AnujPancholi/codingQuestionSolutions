/*
	leetcode
	category: "Algorithms"
	problem title: "Valid Parentheses"
*/

// alternate solution with a stack data structure

/**
 * @param {string} s
 * @return {boolean}
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

var isValid = function(s) {
    const parenStack = new Stack();
    for(let i=0;i<s.length;++i){
        let topChar = parenStack.peek();
        let charDiff = topChar ? s.charCodeAt(i)-topChar.charCodeAt(0) : null;
        if(charDiff && charDiff<=2 && charDiff>0){
            parenStack.pop();
        } else {
            parenStack.push(s[i]);
        }
    }
    return parenStack.peek()===null;
    
};