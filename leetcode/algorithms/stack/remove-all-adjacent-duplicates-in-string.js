/*
    leetcode
    category: "Algorithms"
    problem title: "Remove All Adjacent Duplicates in String"
*/

/**
 * @param {string} S
 * @return {string}
 */

function Stack(){
    this.stackArr = [];
}

Stack.prototype.push = function(val){
    this.stackArr.push(val);
}

Stack.prototype.pop = function(){
    if(this.stackArr.length===0){
        return null;
    }
    let value = this.stackArr.splice(this.stackArr.length-1,1);
    return value;
}

Stack.prototype.isEmpty = function(){
    return this.stackArr.length===0;
}

Stack.prototype.peek = function(){
    return this.stackArr.length===0 ? null : this.stackArr[this.stackArr.length-1];
}

var removeDuplicates = function(S) {
    
    const dupStack = new Stack();
    
    for(let i=0;i<S.length;++i){
        if(dupStack.isEmpty() || dupStack.peek()!=S[i]){
            dupStack.push(S[i]);
        } else {
            dupStack.pop();
        }
    }
    
    return dupStack.stackArr.join("");
    
};