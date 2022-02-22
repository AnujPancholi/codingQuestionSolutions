class Solution {
    
    private HashSet<String> sigSet;
    
    private void addCombinations(int[] candidates,int target,int currIndex,List<Integer> currList, List<List<Integer>> combList){
        
        int sum = 0;
        StringBuilder sigBuilder = new StringBuilder();
        for(int i = 0; i<currList.size();++i){
            sum+=currList.get(i);
            sigBuilder.append(currList.get(i).toString());
        }
        String sig = sigBuilder.toString();
        if(sum>target){
            return;
        } else if(sum==target && !sigSet.contains(sig)){
            combList.add(currList);
            sigSet.add(sig);
            return;
        }
        
        for(int i = currIndex;i<candidates.length;++i){
            List<Integer> nextList = new ArrayList<Integer>(currList);
            nextList.add(candidates[i]);
            addCombinations(candidates,target,i,nextList,combList);
        }
        
    }
    
    
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        this.sigSet = new HashSet<String>();
        
        List<List<Integer>> combList = new ArrayList<List<Integer>>();
        
        for(int i = 0;i<candidates.length;++i){
            addCombinations(candidates,target,i,new ArrayList<Integer>(),combList);
        }
        
        return combList;
        
    }
}