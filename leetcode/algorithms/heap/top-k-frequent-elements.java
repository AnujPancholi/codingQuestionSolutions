/*
    leetcode
    category: "Algorithms"
    problem title: "Top K Frequent Elements"
*/

class MinHeapIntegerEntrysetComparator implements Comparator<Map.Entry<Integer,Integer>>{
    public int compare(Map.Entry<Integer,Integer> e1,Map.Entry<Integer,Integer> e2){
        return e1.getValue()-e2.getValue();
    }
}

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        
        PriorityQueue<Map.Entry<Integer,Integer>> minHeap = new PriorityQueue<Map.Entry<Integer,Integer>>(new MinHeapIntegerEntrysetComparator()); 
        
        HashMap<Integer,Integer> freqMap = new HashMap<Integer,Integer>();
        for(int num : nums){
            Integer existingCount = freqMap.get(num);
            freqMap.put(num,(existingCount==null ? 0 : existingCount)+1);
        }
        
        for(Map.Entry<Integer,Integer> freqEntry : freqMap.entrySet()){
            minHeap.add(freqEntry);
            if(minHeap.size()>k){
                minHeap.poll();
            }
        }
        
        int[] ansArr = new int[minHeap.size()];
        int i=0;
        while(minHeap.size()>0){
            ansArr[i] = minHeap.poll().getKey();
            ++i;
        }
        return ansArr;
    }
}