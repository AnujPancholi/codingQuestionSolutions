/*
    leetcode
    category: "Algorithms"
    problem title: "Majority Elements"
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    const elementsMap = {},halfLength = Math.floor(nums.length/2);
    for(let i=0;i<nums.length;i++){
        if(!elementsMap[nums[i]]){
            elementsMap[nums[i]] = 1;
        } else {
            ++elementsMap[nums[i]];
        }
        if(elementsMap[nums[i]]>halfLength){
            return nums[i];
        }
    }
    
};