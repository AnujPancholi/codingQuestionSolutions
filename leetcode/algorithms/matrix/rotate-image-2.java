class Solution {
    
    private void transposeSquare(int[][] matrix){
        int diagIndex = 0;
        while(diagIndex<matrix.length){
            for(int offsetIndex = diagIndex+1;offsetIndex<matrix.length;++offsetIndex){
                int temp = matrix[diagIndex][offsetIndex];
                matrix[diagIndex][offsetIndex] = matrix[offsetIndex][diagIndex];
                matrix[offsetIndex][diagIndex] = temp;
            }
            ++diagIndex;
        }
    }
    
    private void rotateHorizontal(int[][] matrix) {
        for(int i=0;i<matrix.length;++i){
            for(int h=0;h<matrix.length/2;++h){
                int temp = matrix[i][h];
                matrix[i][h] = matrix[i][matrix.length-1-h];
                matrix[i][matrix.length-1-h] = temp;
            }
        }
    }
    
    public void rotate(int[][] matrix) {
        transposeSquare(matrix);
        rotateHorizontal(matrix);
    }
}