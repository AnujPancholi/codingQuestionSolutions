/*
    leetcode
    category: "Algorithms"
    problem title: "Minimum Add to Make Parentheses Valid"
*/


/**
 * @param {string} S
 * @return {number}
 */

const _PRIVATE_STACK_MAP = new WeakMap();

const Stack = function(){
    const data = {
        stack: []
    }
    _PRIVATE_STACK_MAP.set(this,data);
}

Stack.prototype.push = function(val){
    const data = _PRIVATE_STACK_MAP.get(this);
    data.stack.push(val);
}

Stack.prototype.pop = function(){
    const data = _PRIVATE_STACK_MAP.get(this);
    return data.stack.length>0 ? data.stack.pop() : null;
}

Stack.prototype.peek = function(){
    const data = _PRIVATE_STACK_MAP.get(this);
    return data.stack.length>0 ? data.stack[data.stack.length-1] : null;
}

Stack.prototype.getSize = function(){
    const data = _PRIVATE_STACK_MAP.get(this);
    return data.stack.length;
}

var minAddToMakeValid = function(S) {
    const parenStack = new Stack();
    for(let i=0;i<S.length;++i){
        if(parenStack.peek()!=null && S[i].charCodeAt(0)-parenStack.peek().charCodeAt(0)>=1){
            parenStack.pop();
        } else {
            parenStack.push(S[i]);
        }
    }
    return parenStack.getSize();
};