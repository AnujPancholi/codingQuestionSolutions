/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Search"
*/

class Solution {
    public int search(int[] nums, int target) {
        
        int low=0,high=nums.length-1,targetIndex=-1;
        while(high-low>1){
            int mid = (high+low)/2;
            if(nums[mid]==target){
                targetIndex=mid;
                break;
            } else if(nums[mid]<target){
                low=mid;
            } else {
                high=mid;
            }
        }
        if(nums[low]==target){
            targetIndex=low;
        } else if(nums[high]==target){
            targetIndex=high;
        }
        
        return targetIndex;
        
    }
}