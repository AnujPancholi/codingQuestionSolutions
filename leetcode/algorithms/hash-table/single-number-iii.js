/*
    leetcode
    category: "Algorithms"
    problem title: "Single Number III"
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    
    return [...nums.reduce((numSet,num) => {
        if(numSet.has(num)){
            numSet.delete(num);
        } else {
            numSet.add(num);
        }
        return numSet;
    },new Set())]
    
};