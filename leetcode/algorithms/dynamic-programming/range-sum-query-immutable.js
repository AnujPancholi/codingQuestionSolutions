/*
    leetcode
    category: "Algorithms"
    problem title: "Range Sum Query Immutable"
*/


/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    
    this.cumulativeSums = nums.reduce((arr,num,index) => arr.concat(num+arr[index]),[0]);
    
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.cumulativeSums[j+1]-this.cumulativeSums[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */