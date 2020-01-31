/*
    leetcode
    category: "Algorithms"
    problem title: "Last Stone Weight"
*/

class Solution {
    private void printArr(int[] arr){
        for(int a : arr){
            System.out.print(Integer.toString(a)+" ");
        }
    }
    private int combineValues(int a,int b){
        return a==b ? 0 : Math.abs(a-b);
    }
    public int lastStoneWeight(int[] stones) {
        
        for(int i=stones.length-1;i>=1;){
            Arrays.sort(stones);
            int combinationResult = combineValues(stones[i],stones[i-1]);
            if(combinationResult==0){
                stones[i]=Integer.MAX_VALUE;
                stones[i-1]=Integer.MAX_VALUE;
                i-=2;
            } else {
                stones[i]=Integer.MAX_VALUE;
                --i;
                stones[i]=combinationResult;
            }
        }
        
        return stones[0]==Integer.MAX_VALUE ? 0 : stones[0];
        
        
    }
}