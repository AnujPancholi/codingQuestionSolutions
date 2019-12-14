/*
    leetcode
    category: "Algorithms"
    problem title: "Power of Three"
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return n===1 ? true : (n!=0 && n%3===0 ? isPowerOfThree(n/3) : false);    
};
