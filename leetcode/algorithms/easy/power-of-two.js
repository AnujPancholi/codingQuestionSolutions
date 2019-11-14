/*
    leetcode
    category: "Algorithms"
    problem title: "Power of Two"
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n===1 ? true : (n!=0 && n%2===0 ? isPowerOfTwo(n>>1) : false);   
};