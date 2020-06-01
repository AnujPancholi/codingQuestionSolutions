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
    return S.split("").reduce((outputStr,s) => {
        if(parenStack.peek()===null){
            parenStack.push(s);
        } else {
            if(s.charCodeAt(0)-parenStack.peek().charCodeAt(0)===1){
                parenStack.pop();
                
            } else {
                
                parenStack.push(s);
            }
            
            if(parenStack.peek()){
                outputStr+=s;
            }
        }
        return outputStr;
    },"");
    
};