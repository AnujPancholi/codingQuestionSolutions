/*
    leetcode
    category: "Algorithms"
    problem title: "Remove Outermost Parenthesis"
*/

/**
 * @param {string} S
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


var removeOuterParentheses = function(S) {
    const parenStack = new Stack();
    
    let str = "";
    for(let i=0;i<S.length;++i){
        if(parenStack.peek()===null){
            parenStack.push(S[i]);
        } else {
            if(S[i].charCodeAt(0)-parenStack.peek().charCodeAt(0)===1){
                parenStack.pop();
                if(parenStack.peek()){
                    str+=S[i];
                }
            } else if(parenStack.peek()!=null){
                str+=S[i];
                parenStack.push(S[i]);
            }
        }
    }
    
    return str;
    
};