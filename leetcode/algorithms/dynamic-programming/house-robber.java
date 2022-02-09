class Solution {
    private int[] cloneIntArr(int[] arr){
        int[] clone = new int[arr.length];
        for(int i=0;i<arr.length;++i){
            clone[i] = arr[i];
        }
        
        return clone;
    }
    
    public int rob(int[] nums) {
        
        if(nums.length<=2){
            return Math.max(nums[0],nums.length==1 ? 0 : nums[1]);
        }
        int max = 0;
        int[] cumulativeNums = cloneIntArr(nums);
        
        for(int i=0;i<nums.length-2;++i){
            int intermediateMax = Math.max(cumulativeNums[i] + cumulativeNums[i+2],cumulativeNums[i+1]);
            int intermediateMax2 = Math.max(intermediateMax,cumulativeNums[i+1] - nums[i+1] + cumulativeNums[i+2]);
            
            max = Math.max(max,intermediateMax2);
            
            cumulativeNums[i+2] = intermediateMax2;
            
        }
        
        return max;
        
    }
}