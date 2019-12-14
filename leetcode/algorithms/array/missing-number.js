/*
    leetcode
    category: "Algorithms"
    problem title: "Missing Number"
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let estimatedMaxNumber = nums.length;
    const estimatedSum = (estimatedMaxNumber * (estimatedMaxNumber+1))/2;
    const actualSum = nums.reduce((curr,acc) => curr+acc,0);
    return estimatedSum-actualSum;  
};