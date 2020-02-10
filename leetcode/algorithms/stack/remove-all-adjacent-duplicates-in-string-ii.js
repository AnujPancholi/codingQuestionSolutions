/*
    leetcode
    category: "Algorithms"
    problem title: "Remove All Adjacent Duplicates in String II"
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const Stack = function(){
    this.stackArr = [];
}

Stack.prototype.push = function(value){
    this.stackArr.push(value);
    return this.stackArr.length;
}

Stack.prototype.pop = function(){
    if(this.stackArr.length===0){
        return null;
    } else {
        return this.stackArr.splice(this.stackArr.length-1,1);
    }
}

Stack.prototype.peek = function(){
    return this.stackArr.length===0 ? null : this.stackArr[this.stackArr.length-1];
}

Stack.prototype.getSymbolsAsString = function(){
    return this.stackArr.map(obj => {
        let str="";
        for(let i=0;i<obj.count;i++)str+=obj.symbol;
        return str;
    }).join('');
}

var removeDuplicates = function(s, k) {
    const countStack = new Stack();
    for(let i=0;i<s.length;++i){
        let currentTopObj = countStack.peek();
        if(!currentTopObj || currentTopObj.symbol!=s[i]){
            countStack.push({
                symbol: s[i],
                count: 1
            })
        } else if(currentTopObj.symbol===s[i]){
            ++currentTopObj.count;
            if(currentTopObj.count===k){
                countStack.pop();
            }
        }   
    }
    return countStack.getSymbolsAsString();
};