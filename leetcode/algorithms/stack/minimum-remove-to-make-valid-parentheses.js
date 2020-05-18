/*
    leetcode
    category: "Algorithms"
    problem title: "Minimum Remove to Make Parentheses Valid"
*/

/**
 * @param {string} s
 * @return {string}
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

module.exports = Stack;


var minRemoveToMakeValid = function(s) {
    const strArr = [];
    const parenStack = new Stack();
    
    for(let i=0;i<s.length;++i){
        strArr.push(s[i]);
        const topCharIndex = parenStack.peek();
        if(!s[i].match(/\w/)){
            if(topCharIndex!=null && s[i].charCodeAt(0)-s[topCharIndex].charCodeAt(0)==1){
                parenStack.pop();
            } else {
                parenStack.push(i);
            }
        }
    }
    
    while(parenStack.peek()!=null){
        strArr[parenStack.pop()] = "";
    }
    return strArr.join("");
    
    
};