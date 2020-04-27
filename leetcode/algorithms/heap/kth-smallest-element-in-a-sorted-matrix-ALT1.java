/*
    leetcode
    category: "Algorithms"
    problem title: "Kth Smallest Element in a Sorted Matrix"
*/

    //faster, alternative solution

class Solution {
    public int kthSmallest(int[][] matrix, int k) {
        
        PriorityQueue<Integer> maxHeap = new PriorityQueue<Integer>(new Comparator<Integer>(){
            public int compare(Integer i1, Integer i2){
                return i2-i1;
            }
        });
        for(int i=0;i<matrix.length;++i){
            if(maxHeap.size()==k && maxHeap.peek()<matrix[i][0]){
                break;
            }
            for(int j=0;j<matrix[0].length;++j){
                if(maxHeap.size()<k || maxHeap.peek()>=matrix[i][j]){
                    maxHeap.add(matrix[i][j]);
                    if(maxHeap.size()>k){
                        maxHeap.poll();
                    }
                } else {
                    break;
                }
            }
        }
        
        return maxHeap.peek();
    
    }
}