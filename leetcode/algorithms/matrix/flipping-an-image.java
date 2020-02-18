/*
    leetcode
    category: "Algorithms"
    problem title: "Flipping an Image"
*/

class Solution {
    private void rotateRow(int[] row){
        for(int i=0;i<Math.floor(row.length/2);++i){
            int temp = row[i];
            row[i] = row[row.length-(i+1)];
            row[row.length-(i+1)]=temp;
        }
    }
    private void flipRow(int[] row){
        for(int i=0;i<row.length;++i){
            row[i] = Math.abs(row[i]-1);
        }
    }
    
    public int[][] flipAndInvertImage(int[][] A) {
        for(int row=0;row<A.length;++row){
            rotateRow(A[row]);
            flipRow(A[row]);
        }
        return A;
    }
}