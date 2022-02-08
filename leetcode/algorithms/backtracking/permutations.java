class Solution {
    
    private boolean[] cloneBooleanArray(boolean[] arr){
        boolean[] newArr = new boolean[arr.length];
        for(int i=0;i<arr.length;++i){
            newArr[i] = arr[i];
        }
        return newArr;
    }
    
    private void permutationImpl(int[] nums,boolean[] seen,int currIndex,List<Integer> currPerm,List<List<Integer>> perms){
        
        if(currPerm.size()==nums.length){
            perms.add(currPerm);
            return;
        }
        
        for(int i = 0;i<nums.length;++i){
            if(i==currIndex || seen[i]){
                continue;
            }
            
            List<Integer> nextPerm = new ArrayList<Integer>(currPerm);
            nextPerm.add(nums[i]);
            
            boolean[] nextSeen = cloneBooleanArray(seen);
            nextSeen[i] = true;
            
            permutationImpl(nums,nextSeen,i,nextPerm,perms);
        }
    } 
    
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> perms = new ArrayList<List<Integer>>();
        
        for(int i=0;i<nums.length;++i){
            boolean[] seen = new boolean[nums.length];
            seen[i] = true;
            permutationImpl(nums,seen,i,new ArrayList<Integer>(Arrays.asList(nums[i])),perms);
        }
        
        return perms;
    }
}