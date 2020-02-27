/*
    leetcode
    category: "Algorithms"
    problem title: "Perfect Number"
*/

/**
 * @param {number} num
 * @return {boolean}
 */

const getFactors = (num) => {
    let i=2;
    const factorSet = new Set();
    while(i<Math.floor(num/2)){
        if(num%i===0){
            factorSet.add(i);
            factorSet.add(num/i);
        }
        ++i;
    }
    return Array.from(factorSet);
    
}
var checkPerfectNumber = function(num) {
    return getFactors(num).concat(1).filter(n => n!=num).reduce((sum,n) => sum+n,0)===num;   
};