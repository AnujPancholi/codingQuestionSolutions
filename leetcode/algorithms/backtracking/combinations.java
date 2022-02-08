class Solution {
    
    private List<List<Integer>> combList;
    
    private void populateCombinationsImpl(int n,int k,int currNum,List<Integer> currCombo){
        if(currCombo.size()==k){
            combList.add(currCombo);
            return;
        }
        
        if(currNum==n){
            return;
        }
        
        for(int i = currNum+1;i<=n;i++){
            List<Integer> nextCombo = new ArrayList(currCombo);
            nextCombo.add(i);
            populateCombinationsImpl(n,k,i,nextCombo);
        }
        
    }
    
    public List<List<Integer>> combine(int n, int k) {
        combList = new ArrayList<List<Integer>>();
        
        for(int i=1;i<=n;++i){
            populateCombinationsImpl(n,k,i,new ArrayList(Arrays.asList(i)));
        }
        
        return this.combList;
        
    }
}