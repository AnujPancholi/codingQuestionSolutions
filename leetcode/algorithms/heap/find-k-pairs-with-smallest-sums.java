/*
    leetcode
    category: "Algorithms"
    problem title: "Find K Pairs With Smallest Sums"
*/

class Solution {
    public List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {
        PriorityQueue<ArrayList<Integer>> pairsMaxHeap = new PriorityQueue<ArrayList<Integer>>(new Comparator(){
            public int compare(Object p1,Object p2){
                ArrayList<Integer> pair1 = (ArrayList<Integer>)p1;
                ArrayList<Integer> pair2 = (ArrayList<Integer>)p2;
                
                return (pair2.get(0)+pair2.get(1)) - (pair1.get(0) + pair1.get(1));
            }
        });
        
        
        List<List<Integer>> sums = new ArrayList<List<Integer>>();
        
        for(int i=0;i<nums1.length;++i){
            for(int j=0;j<nums2.length;++j){
                ArrayList<Integer> currentPair = new ArrayList<Integer>();
                currentPair.add(nums1[i]);
                currentPair.add(nums2[j]);
                pairsMaxHeap.add(currentPair);
                if(pairsMaxHeap.size()>k){
                    pairsMaxHeap.poll();
                }
            }
        }
        
        while(pairsMaxHeap.size()>0){
            sums.add(pairsMaxHeap.poll());
        }
        return sums;
        
    }
}