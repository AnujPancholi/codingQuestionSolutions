/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Search"
*/

class RecentCounter {
    private LinkedList<Integer> pingsQueue;
    public RecentCounter() {
        pingsQueue = new LinkedList<Integer>();
        
    }
    
    public int ping(int t) {
        pingsQueue.addLast(t);
        while(pingsQueue.size()>0 && t-pingsQueue.get(0)>3000){
            pingsQueue.removeFirst();
        }
        
        return pingsQueue.size();
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter obj = new RecentCounter();
 * int param_1 = obj.ping(t);
 */