/*
	leetcode
	category: "Algorithms"
	problem title: "Array Partition I"
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => a-b);
    return nums.reduce((sum,num,index) => {
        if(index%2===0){
            sum+=Math.min(nums[index],nums[index+1]);
        }
        return sum;
    },0);
};