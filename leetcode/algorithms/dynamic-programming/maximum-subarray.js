/*
	leetcode
	category: "Algorithms"
	problem title: "Maximum Subarray"
*/



/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max=0,maxEndingAtI = 0;
    nums.forEach((num,index) => {
        if(index===0){
            maxEndingAtI = num;
            max=num;
            return;
        }
        maxEndingAtI+=num;
        maxEndingAtI = Math.max(maxEndingAtI,num);
        max = Math.max(maxEndingAtI,max);
    })
    return max;
    
};