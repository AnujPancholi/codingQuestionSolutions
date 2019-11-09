/*
    leetcode
    category: "Algorithms"
    problem title: "Two Sum"
*/

/**
 * @param {number} n
 * @return {boolean}
 */
const squareNum = (num) => num*num;
var isHappy = function(n) {
    const numResultSet = new Set();
    
    while(true){
        let nextResult = 0;
        while(n>0){
            nextResult+=squareNum(n%10);
            n=Math.floor(n/10);
        }
        if(nextResult===1){
            return true;
        } else if(numResultSet.has(nextResult)){
            return false
        }
        n=nextResult;
        numResultSet.add(nextResult);
    }
    
};