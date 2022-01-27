class Solution {
    public void moveZeroes(int[] nums) {
        int zi = 0,ni = 0;
        while(zi<nums.length){
           if(nums[zi]==0){
               ni = zi;
               while(ni<nums.length && nums[ni]==0){
                   ++ni;
               }
                if(ni==nums.length){
                    break;
                }
                   
                int temp = nums[zi];
                nums[zi] = nums[ni];
                nums[ni] = temp;
           }
            zi++;
        }
    }
}