/*
    leetcode
    category: "Algorithms"
    problem title: "Kth Smallest Element in a Sorted Matrix"
*/

class Solution {
    public int kthSmallest(int[][] matrix, int k) {
        
        PriorityQueue<Integer> maxHeap = new PriorityQueue<Integer>(new Comparator<Integer>(){
            public int compare(Integer i1, Integer i2){
                return i2-i1;
            }
        });
        for(int i=0;i<matrix.length;++i){
            for(int j=0;j<matrix[0].length;++j){
                maxHeap.add(matrix[i][j]);
                if(maxHeap.size()>k){
                    maxHeap.poll();
                }
            }
        }
        
        return maxHeap.peek();
    
    }
}