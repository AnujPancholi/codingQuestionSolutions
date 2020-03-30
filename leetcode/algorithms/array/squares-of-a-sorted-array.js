/*
    leetcode
    category: "Algorithms"
    problem title: "Squares of a Sorted Array"
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    return A.map(i => i*i).sort((a,b) => a-b);
};