/*
	leetcode
	category: "Algorithms"
	problem title: "Array Partition I"
*/

function arrayPairSum(nums: number[]): number {
    nums.sort((a,b) => a-b);
    let sum: number = 0;
    for(let i=0;i<nums.length;i+=2){
        sum+=nums[i];
    }
    return sum;
};