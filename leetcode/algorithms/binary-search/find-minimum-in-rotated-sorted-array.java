class Solution {
    public int findMin(int[] nums) {
        int h = nums.length - 1, l = 0;
        
        int targetIndex = -1;
        
        while(h>=l){
            int mid = l + ((h-l)/2);
            // System.out.println(Integer.toString(l)+" "+Integer.toString(h)+" "+Integer.toString(mid));
            if((mid==0 || nums[mid-1]>nums[mid]) && (mid==nums.length-1 || nums[mid+1]>nums[mid])){
                targetIndex = mid;
                break;
            } else if(nums[l]>nums[h] && nums[mid]>=nums[l]){
                l = mid + 1;
            } else {
                h = mid - 1;
            }
        }
        
        
        return nums[targetIndex];
    }
}