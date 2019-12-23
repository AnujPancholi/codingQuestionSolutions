/*
    leetcode
    category: "Algorithms"
    problem title: "Fibonacci Number"
*/


class Solution {
    public int fib(int N) {
        if(N==0){
            return 0;
        }
        if(N<=2){
            return 1;
        }
        
        int[] fibArr = new int[N+1];
        fibArr[1]=1;
        fibArr[2]=1;
        
        for(int i=3;i<N+1;i++){
            fibArr[i]=fibArr[i-1]+fibArr[i-2];
        }
        return fibArr[N];
    }
}