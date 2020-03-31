/*
    leetcode
    category: "Algorithms"
    problem title: "Toeplitz Matrix"
*/

class Solution {
    public boolean isToeplitzMatrix(int[][] matrix) {
        boolean isToeplitz = true;
        for(int i=0;i<matrix[0].length && isToeplitz;++i){
            int thisDiag = matrix[0][i];
            for(int d=1;d<matrix.length && (i+d)<matrix[0].length;++d){
                if(matrix[d][i+d]!=thisDiag){
                    isToeplitz=false;
                    break;
                }
            }
        }
        for(int i=1;i<matrix.length && isToeplitz;++i){
            int thisDiag = matrix[i][0];
            for(int d=1;d<matrix[0].length && (i+d)<matrix.length;++d){
                if(matrix[i+d][d]!=thisDiag){
                    isToeplitz=false;
                    break;
                }
            }
        }
        return isToeplitz;
    }
}