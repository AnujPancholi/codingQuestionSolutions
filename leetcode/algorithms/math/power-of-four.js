/*
    leetcode
    category: "Algorithms"
    problem title: "Power of Four"
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    return num===1 ? true : (num===0 || num%4!=0 ? false : isPowerOfFour(num>>2));
};