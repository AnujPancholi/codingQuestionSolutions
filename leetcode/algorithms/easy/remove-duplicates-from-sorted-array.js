/*
	leetcode
	category: "Algorithms"
	problem title: "Remove Duplicates From Sorted Array"
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length===1){
        return 1;
    }
    let i=0;
    while(i<nums.length-1){
     if(nums[i]===nums[i+1]){
         nums.splice(i+1,1);
     } else {
         i++;
     }   
    }
    return nums.length;
};