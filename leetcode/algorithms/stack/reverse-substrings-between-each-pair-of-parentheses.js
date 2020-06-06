/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Substrings Between Each Pair of Parentheses"
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

var reverseParentheses = function(s) {
    const charStack = new Stack();
    const charBuff = [];
    
    for(let i=0;i<s.length;++i){
        if(s.charAt(i)===')'){
            while(charStack.peek()!='('){
                charBuff.push(charStack.pop());
            }
            charStack.pop();
            while(charBuff.length>0){
                charStack.push(charBuff.shift());
            }
        } else {
            charStack.push(s.charAt(i));
        }
    }
    
    const strArr = Array.from({length: charStack.getSize()});
    let i=charStack.getSize();
    while(charStack.peek()){
        strArr[i] = charStack.pop();
        --i;
    }
    
    return strArr.join('');
    
    
};