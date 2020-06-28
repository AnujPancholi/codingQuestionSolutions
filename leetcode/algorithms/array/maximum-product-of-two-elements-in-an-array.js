/*
    leetcode
    category: "Algorithms"
    problem title: "Maximum Product of Two Elements in an Array"
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    const numsCopy = [...nums].sort((a,b) => a-b);
    
    return Math.max(numsCopy.slice(0,1).reduce((prod,num) => prod*(num-1),1),numsCopy.slice(numsCopy.length-2,numsCopy.length).reduce((prod,num) => prod*(num-1),1));
    
};