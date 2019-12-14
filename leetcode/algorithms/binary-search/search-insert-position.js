/*
    leetcode
    category: "Algorithms"
    problem title: "Search Insert Position"
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l=0;m=Math.floor(nums.length/2);h=nums.length-1;
    while(h-l>1){
        m=Math.floor((h+l)/2);
        if(nums[m]===target){
            return m;
        }
        if(target<nums[m]){
            h=m;
        } else {
            l=m;
        }
    }
    if(nums[l]>=target){
        return l
    } else if(nums[h]<target){
        return h+1;
    } else return h;
    
};