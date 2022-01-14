class Solution {
    
    private int[] getNextCoords(int[][]mat,int[] coords){
        if(coords[1]==mat[0].length-1){
            return new int[]{coords[0]+1,0};
        } else return new int[]{coords[0],coords[1]+1};
    }
    
    public int[][] matrixReshape(int[][] mat, int r, int c) {
        int rowCount = mat.length;
        int colCount = mat[0].length;
        
        if(rowCount*colCount!=r*c){
            return mat;
        }
        
        int[][] fMat = new int[r][c];
        
        int[] coords = new int[]{0,0};
        for(int i=0;i<mat.length;++i){
            for(int j=0;j<mat[0].length;++j){
                // System.out.println(mat[i][j]);
                fMat[coords[0]][coords[1]] = mat[i][j];
                coords = getNextCoords(fMat,coords);
                // System.out.println(Integer.toString(coords[0]) + Integer.toString(coords[1]));
            }
        }
        
        return fMat;
        
    }
}