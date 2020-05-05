/*
    leetcode
    category: "Algorithms"
    problem title: "Backspace String Compare"
*/

/**
 * @param {string} S
 * @param {string} T
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
	return stackData.stack[stackData.stack.length-1] || null;
}

Stack.prototype.getSize = function(){
	let stackData = _private_stack_map.get(this);
	return stackData.stack.length;
}


var backspaceCompare = function(S, T) {
    const stack1 = new Stack();
    const stack2 = new Stack();
    
    for(let i=0;i<S.length;++i){
        if(S[i]==="#"){
            if(stack1.peek()){
                stack1.pop();
            }
        } else {
            stack1.push(S[i]);
        }
    }
    
    for(let i=0;i<T.length;++i){
        if(T[i]==="#"){
            if(stack2.peek()){
                stack2.pop();
            }
        } else {
            stack2.push(T[i]);
        }
    }
    
    while(stack1.peek()!=null && stack2.peek()!=null && stack1.peek()===stack2.peek()){
        stack1.pop();
        stack2.pop();
    }
    
    return !stack1.peek() && !stack2.peek();
};