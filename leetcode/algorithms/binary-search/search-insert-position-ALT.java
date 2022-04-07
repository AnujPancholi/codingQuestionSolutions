class Solution {
    public int searchInsert(int[] nums, int target) {
        int l = 0,h = nums.length - 1, index = -1;
        
        while(h>=l){
            int mid = l + ((h - l)/2);
            if(nums[mid]>=target){
                if(mid==0 || nums[mid - 1]<target){
                    index = mid;
                    break;
                } else {
                    h = mid - 1;
                }
                
            } else {
                l = mid + 1;
            }
        }
        
        return index==-1 ? nums.length : index;
    }
}