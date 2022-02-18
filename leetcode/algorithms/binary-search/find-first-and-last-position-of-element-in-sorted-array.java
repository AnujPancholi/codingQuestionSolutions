class Solution {
    
    private int findFirstIndex(int[] nums, int l, int h, int target){
        
        while(l<=h){
            int m = l + ((h-l)/2);
            if(nums[m]==target && (m==0 || nums[m-1]!=target)){
                return m;
            } else if(nums[m]==target && nums[m-1]==target){
                h = m-1;
            } else {
                l = m+1;
            }
        }
        
        return 0;
    }
    
    private int findLastIndex(int[] nums,int l,int h,int target){
        
        while(l<=h){
            int m = l + ((h - l)/2);
            if(nums[m]==target && (m==nums.length-1 || nums[m+1]!=target)){
                return m;
            } else if(nums[m]==target && nums[m+1]==target){
                l = m+1;
            } else {
                h = m-1;
            }
        }
        return nums.length-1;
    }
    
    public int[] searchRange(int[] nums, int target) {
        
        int l = 0,h = nums.length-1;
        
        int firstIndex = -1;
        
        while(l<=h){
            int m = l + ((h-l)/2);
            if(nums[m]==target){
                firstIndex = m;
                break;
            } else if(nums[m]>target){
                h = m-1;
            } else {
                l = m+1;
            }
        }
        
        if(firstIndex==-1){
            return new int[]{-1,-1};
        }
        
        return new int[]{findFirstIndex(nums,0,firstIndex,target),findLastIndex(nums,firstIndex,nums.length-1,target)};
        
    }
}