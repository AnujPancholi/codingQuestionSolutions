/*
    leetcode
    category: "Algorithms"
    problem title: "Rotate Array"
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k%nums.length;
    if(k>0){
        let numsPrefix = nums.splice(nums.length - k,k);
        nums.unshift(...numsPrefix);
    }
    return;
    
};