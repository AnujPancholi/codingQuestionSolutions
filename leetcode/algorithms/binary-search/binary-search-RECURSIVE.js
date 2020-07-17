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

const binSearch = (nums,target,low,high) => {
    if(high-low<=1){
        if(nums[high]===target){
            return high;
        } else if(nums[low]===target){
            return low;
        } else {
            return -1;
        }
    }
    
    const mid = Math.floor((high+low)/2);
    
    if(nums[mid]===target){
        return mid;
    }
    
    return nums[mid]<target ? binSearch(nums,target,mid,high) : binSearch(nums,target,low,mid);
}

var search = function(nums, target) {
    
    return binSearch(nums,target,0,nums.length-1);
        
        
    
};