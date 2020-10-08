/*
	leetcode
	category: "Algorithms"
	problem title: "Maximum Subarray"
*/

function maxSubArray(nums: number[]): number {
    
    let maxSum: number = nums[0],
        maxSumEndingAtIndex: number = nums[0],
        maxSumEndingAtPrevIndex: number = nums[0];
    
    nums.forEach((num,index) => {
        if(index===0){
            return;
        }
        maxSumEndingAtIndex = Math.max(maxSumEndingAtPrevIndex+num,num);
        maxSum = Math.max(maxSumEndingAtIndex,maxSum);
        maxSumEndingAtPrevIndex = maxSumEndingAtIndex;
    })
    
    return maxSum;

};