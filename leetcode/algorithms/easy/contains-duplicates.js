/*
    leetcode
    category: "Algorithms"
    problem title: "Add Binary"
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const elemSet = new Set();
    for(let i=0;i<nums.length;i++){
        if(elemSet.has(nums[i])){
            return true;
        }
        elemSet.add(nums[i]);
    }
    return false;
};