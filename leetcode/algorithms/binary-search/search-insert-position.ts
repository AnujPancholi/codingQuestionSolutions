/*
    leetcode
    category: "Algorithms"
    problem title: "Search Insert Position"
*/

function searchInsert(nums: number[], target: number): number {
    let high: number = nums.length-1;
    let low: number = 0;
    let index: number = -1
    while(high-low>1){
        let mid: number = Math.floor((high+low)/2);
        
        if(nums[mid]===target){
            index = mid;
            break;
        } else if(nums[mid]>target){
            high = mid;
        } else {
            low = mid;
        }
    }
    
    if(index===-1){
        if(nums[low]>=target){
            index=Math.max(0,low-1);
        } else if(nums[high]<target){
            index = high+1;
        } else {
            index = high;
        }
    }
    return index;
};