/*
    leetcode
    category: "Algorithms"
    problem title: "Kth Largest Element in a Stream
*/

class MinHeapIntegerComparator implements Comparator<Integer> {
    public int compare(Integer i1, Integer i2){
        return i1 - i2;
    }
}

class KthLargest {
    
    PriorityQueue<Integer> minHeap = null;
    Integer cap = null;
    public KthLargest(int k, int[] nums) {
        cap = k;
        minHeap = new PriorityQueue<Integer>(new MinHeapIntegerComparator());
        for(int num : nums){
            minHeap.add(num);
            if(minHeap.size()>cap){
                minHeap.poll();
            }
        }
    }
    
    public int add(int val) {
        minHeap.add(val);
        if(minHeap.size()>cap){
            minHeap.poll();
        }
        return minHeap.peek();
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */