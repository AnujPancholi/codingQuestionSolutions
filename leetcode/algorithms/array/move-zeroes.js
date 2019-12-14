/*
    leetcode
    category: "Algorithms"
    problem title: "Move Zeroes"
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=0;
    let zeroStringLength=0;
    while(i<nums.length){
        if(nums[i]===0){
            zeroStringLength++;
            i++;
        } else {
            if(zeroStringLength){
                nums.push(...nums.splice(i-zeroStringLength,zeroStringLength));
                i=i-zeroStringLength;
                zeroStringLength=0;
            } else {
                i++;
            }
        }
    }
};