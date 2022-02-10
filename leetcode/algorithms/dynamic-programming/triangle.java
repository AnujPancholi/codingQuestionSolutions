class Solution {
    public int minimumTotal(List<List<Integer>> triangle) {
        
        Queue<int[]> q = new LinkedList<int[]>();
        
        for(int l = triangle.size()-1;l>0;--l){
            
            
            List<Integer> currLevel = triangle.get(l);
            List<Integer> upperLevel = triangle.get(l-1);
            
            for(int i = 0;i<currLevel.size()-1;++i){
                
                upperLevel.set(i,upperLevel.get(i)+(int)Math.min(currLevel.get(i),currLevel.get(i+1)));
                
                
            }
        }
        
        return triangle.get(0).get(0);
        
    }
}