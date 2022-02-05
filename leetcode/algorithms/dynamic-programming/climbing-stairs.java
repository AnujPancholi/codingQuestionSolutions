class Solution {
    
    public int climbStairs(int n) {
        if(n<2){
            return n;
        }
        
        int[] waysArr = new int[n+1];
        
        waysArr[0] = 1;
        waysArr[1] = 1;
        
        for(int i = 2;i<n+1;++i){
            waysArr[i] = waysArr[i-1] + waysArr[i-2];
        }
        
        return waysArr[n];
        
    }
}