/*
    leetcode
    category: "Algorithms"
    problem title: "Max Average Subarray - I"
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    let sum=nums.slice(0,k).reduce((sum,num) => sum+num,0);
    
    let maxSum=sum;
    
    for(let i=k;i<nums.length;++i){
        sum=sum-nums[i-k]+nums[i];
        if(sum>maxSum){
            maxSum=sum;
        }
    }
    
    return maxSum/k;
    
};