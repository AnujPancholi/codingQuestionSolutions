class Solution {
    public int[] twoSum(int[] nums, int target) {
        
        HashMap<Integer,Integer> compMap = new HashMap<Integer,Integer>();
        int[] solArr = {-1,-1}; 
        
        for(int i=0;i<nums.length;++i){
            Integer compResult = compMap.getOrDefault(target - nums[i],null);
            if(compResult!=null){
                solArr = new int[]{i,compResult};
                return solArr;
            }
            compMap.put(nums[i],i);
        }
        
        return solArr;
        
    }
}