/*
    leetcode
    category: "Algorithms"
    problem title: "Minimum Absolute Difference"
*/

class Solution {
    
    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        int minAbsDiff=Integer.MAX_VALUE;
        List<List<Integer>> pairsList = new ArrayList<List<Integer>>();
        Arrays.sort(arr);
        
        for(int i=0;i<arr.length-1;++i){
            int thisDifference = arr[i+1]-arr[i];
            if(thisDifference<minAbsDiff){
                minAbsDiff=thisDifference;
                pairsList.clear();
            }
            if(thisDifference==minAbsDiff){
                List<Integer> newPair = new ArrayList<Integer>();
                newPair.add(arr[i]);
                newPair.add(arr[i+1]);
                pairsList.add(newPair);
            }
        }
        
        
        return pairsList;
    }
}