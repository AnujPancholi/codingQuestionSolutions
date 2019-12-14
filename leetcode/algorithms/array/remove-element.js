/*
    leetcode
    category: "Algorithms"
    problem title: "Remove Elements"
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    nums.sort((a,b) => {
        if(a===val){
            return Number.MAX_SAFE_INTEGER;
        } else if(b===val){
            return Number.MIN_SAFE_INTEGER;
        } else return a-b;
    })
    let i=nums.length-1;
    if(nums[i]===val){
        while(i>=1){
            if(nums[i]!=nums[i-1]){
                break;
            }
            i--;
        }
        nums.splice(i,nums.length-i+1);
    }
    
    return nums.length;
    
};