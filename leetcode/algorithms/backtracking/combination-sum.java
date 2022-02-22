class Solution {
    
    private void addCombinations(int[] candidates,int target,int currIndex,List<Integer> currList, List<List<Integer>> combList){
        
        int sum = 0;
        
        for(int i = 0; i<currList.size();++i){
            sum+=currList.get(i);
        }
        
        if(sum>target){
            return;
        } else if(sum==target){
            combList.add(currList);
            return;
        }
        
        for(int i = currIndex;i<candidates.length;++i){
            List<Integer> nextList = new ArrayList<Integer>(currList);
            nextList.add(candidates[i]);
            addCombinations(candidates,target,i,nextList,combList);
        }
        
    }
    
    
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        
        List<List<Integer>> combList = new ArrayList<List<Integer>>();
        
        for(int i = 0;i<candidates.length;++i){
            
            addCombinations(candidates,target,i,new ArrayList<Integer>(Arrays.asList(candidates[i])),combList);
        }
        
        return combList;
        
    }
}