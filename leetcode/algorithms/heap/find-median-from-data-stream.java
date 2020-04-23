/*
    leetcode
    category: "Algorithms"
    problem title: "Top K Frequent Elements"
*/

class MedianFinder {
    
    ArrayList<Integer> list = null;
    PriorityQueue<Integer> lowerHeap = null;
    PriorityQueue<Integer> upperHeap = null;
    
    
    private void rebalance(){
        if(upperHeap.size()>lowerHeap.size()){
            lowerHeap.add(upperHeap.poll());            
        } else if(lowerHeap.size()>(upperHeap.size()+1)){
            upperHeap.add(lowerHeap.poll());
        }
    }
    
    /** initialize your data structure here. */
    public MedianFinder() {
        list = new ArrayList<Integer>();
        lowerHeap = new PriorityQueue<Integer>(new Comparator<Integer>(){
            public int compare(Integer i1, Integer i2){
                return i2-i1;
            }
        });
        upperHeap = new PriorityQueue<Integer>(new Comparator<Integer>(){
            public int compare(Integer i1, Integer i2){
                return i1-i2;
            }
        });
    }
    
    public void addNum(int num) {
        Integer middleValue = lowerHeap.size()>0 ? lowerHeap.peek() : null;
        if(middleValue==null || num<middleValue){
            lowerHeap.add(num);
        } else {
            upperHeap.add(num);
        }
        rebalance();
    }
    
    public double findMedian() {
        double median = 0.0d;
        if(lowerHeap.size()>upperHeap.size()){
            median = (double)(lowerHeap.peek());
        } else {
            median = (((double)lowerHeap.peek()) + ((double)upperHeap.peek()))/2;
        }
        return median;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */