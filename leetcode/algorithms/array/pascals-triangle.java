class Solution {
    public List<List<Integer>> generate(int numRows) {
        
        List<List<Integer>> pascalList = new ArrayList<List<Integer>>();
        
        for(int i = 0;i<numRows;++i){
            if(i==0){
                pascalList.add(new ArrayList<Integer>(Arrays.asList(1)));
                continue;
            }
            List<Integer> currList = new ArrayList<Integer>();
            List<Integer> prevList = pascalList.get(i-1);
            // System.out.println(prevList.size());
            for(int j=0;j<=i;++j){
                currList.add(j==0 ? prevList.get(j) : prevList.get(j-1)+(j<prevList.size() ? prevList.get(j) : 0));
            }
            pascalList.add(currList);
        }
        
        return pascalList;
        
        
    }
}