/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Search"
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let low=0,high=nums.length-1,targetIndex=-1;
    
    while(high-low>1){
        const mid = Math.floor((high+low)/2);
        
        if(nums[mid]===target){
            targetIndex=mid;
            break;
        } else if(nums[mid]>target){
            high=mid;
        } else {
            low=mid;
        }
    }
        
    if(targetIndex===-1){
        if(nums[low]===target){
            targetIndex=low;
        } else if(nums[high]===target){
                targetIndex=high;
        }
    }
        
    return targetIndex;
        
        
    
};