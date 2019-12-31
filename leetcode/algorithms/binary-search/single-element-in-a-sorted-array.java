/*
    leetcode
    category: "Algorithms"
    problem title: "Single Element in a Sorted Array"
*/


class Solution {
    public int singleNonDuplicate(int[] nums) {
        int low = 0, high = nums.length-1,targetIndex=0;
        boolean numFound=false;
        while(high-low>1){
            int mid = (int)((high+low)/2);
            if((mid==nums.length-1 || nums[mid]!=nums[mid+1]) && (mid==0 || nums[mid]!=nums[mid-1])){
                
                targetIndex=mid;
                numFound=true;
                break;
            }
            if(mid%2==0){
                if(nums[mid+1]==nums[mid]){
                    low=mid;
                } else {
                    high=mid;
                }
            } else {
                if(nums[mid-1]==nums[mid]){
                    low=mid;
                } else {
                    high=mid;
                }
            }
        }
        
        if(!numFound){
        if((low==nums.length-1 || nums[low]!=nums[low+1]) && (low==0 || nums[low]!=nums[low-1])){
            targetIndex=low;
        } else if((high==nums.length-1 || nums[high]!=nums[high+1]) && (high==0 || nums[high]!=nums[high-1])){
            targetIndex=high;
            }
        }
        
        return nums[targetIndex];
        
    }
}