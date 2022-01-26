// import java.util.*;
class Solution {
    public int[] sortedSquares(int[] nums) {
        PriorityQueue<Integer> sortedQ = new PriorityQueue<Integer>(nums.length);
        
        for(int num : nums){
            sortedQ.add((int)Math.pow(num,2));
        }
        
        int[] sortedSqArr = new int[nums.length];
        for(int i=0;i<sortedSqArr.length;++i){
            sortedSqArr[i] = sortedQ.poll();
        }
        
        return sortedSqArr;
    }
}