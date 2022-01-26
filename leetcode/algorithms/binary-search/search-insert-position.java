class Solution {
    public int searchInsert(int[] nums, int target) {
         int l = 0,h = nums.length - 1,tindex = -1;
        
        while(h-l>1){
            int m = l + ((h-l)/2);
            
            if(nums[m]==target){
                tindex = m;
                break;
            } else if(nums[m]<target){
                l = m;
            } else {
                h = m;
            }
        }
        
        if(tindex==-1){
            if(nums[l]>=target){
                tindex = l;
            } else if(nums[h]<target){
                tindex = h+1;
            } else {
                tindex = h;
            }
        }
        
        return tindex;
    }
} 