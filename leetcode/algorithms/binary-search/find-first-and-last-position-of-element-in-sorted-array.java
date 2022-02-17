class Solution {
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
        
        l = firstIndex;
        h = firstIndex;
        
        while(h<nums.length && nums[h]==target){
            ++h;
        }
        
        while(l>=0 && nums[l]==target){
            --l;
        }
        
        return new int[]{l+1,h-1};
        
    }
}