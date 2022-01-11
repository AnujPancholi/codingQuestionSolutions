class Solution {
    public boolean binsearch(int[] nums, int target,int low,int high) {
        
        if(nums==null || nums.length==0){
            return false;
        }
        int targetIndex = -1;
        while(high>=low){
            int mid = low + ((high-low)/2);
            if(nums[mid]==target){
                targetIndex = mid;
                break;
            } else if (nums[mid]==nums[low] && nums[mid]==nums[high]){
                return binsearch(nums,target,low,mid-1) || binsearch(nums,target,mid+1,high);
            }
            if(nums[mid]>=nums[low]){
                if(target>nums[mid] || target<nums[low]){
                    low = mid + 1;
                } else {
                    high = mid -1;
                }
            } else {
                if(target<nums[mid] || target>nums[high]){
                    high = mid -1;
                } else {
                    low = mid +1;
                }
            }
        }
        
        return targetIndex!=-1;
        
    }
   
    public boolean search(int[] nums, int target) {
        
        return binsearch(nums,target,0,nums.length-1);
        
    }
}