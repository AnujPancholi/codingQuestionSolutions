/*
    leetcode
    category: "Algorithms"
    problem title: "Kth Largest Element in an Array
*/

class MaxHeapIntegerComparator implements Comparator<Integer> {
    public int compare(Integer i1,Integer i2){
        return i2-i1;
    }
}

class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> numHeap = new PriorityQueue<Integer>(new MaxHeapIntegerComparator());
        for(int num : nums){
                numHeap.add(num);
        }
        Integer targetElement=null;
        for(int i=0;i<k;++i){
            targetElement = numHeap.poll();
        }
        return targetElement.intValue();
    }
}