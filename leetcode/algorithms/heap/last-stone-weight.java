/*
    leetcode
    category: "Algorithms"
    problem title: "Last Stone Weight"
*/

class MaxHeapIntegerComparator implements Comparator<Integer>{
    public int compare(Integer i1, Integer i2){
        return i2.intValue() - i1.intValue();
    }
}
class Solution {
    
    private int getCombinedStoneWeight(int w1,int w2){
        return Math.abs((w1-w2));
    }
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> stoneHeap = new PriorityQueue<Integer>(new MaxHeapIntegerComparator());
        for(int stone : stones){
            stoneHeap.add(stone);
        }
        
        while(stoneHeap.size()>1){
            Integer stone1 = stoneHeap.poll();
            Integer stone2 = stoneHeap.poll();
            int combinationStoneWeight = getCombinedStoneWeight(stone1.intValue(),stone2.intValue());
            stoneHeap.add(combinationStoneWeight);
        }
        
        return stoneHeap.peek().intValue();
        
    }
}