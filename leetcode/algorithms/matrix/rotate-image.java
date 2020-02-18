/*
    leetcode
    category: "Algorithms"
    problem title: "Rotate Image"
*/


class Solution {
   	
   	//next two private methods are only for debugging purposes 
    private void printCoords(int[] coords){
        System.out.println("("+Integer.toString(coords[0])+","+Integer.toString(coords[1])+")");
    }
    private void printMatrix(int[][] mat){
        System.out.println("----------------------");
        for(int i=0;i<mat.length;++i){
            for(int j=0;j<mat.length;++j){
                System.out.print(Integer.toString(mat[i][j])+" ");
            }
            System.out.print("\n");
        }
        System.out.println("----------------------");
    }
    
    private void performRotation(int[][] mat,int[] ul,int[] ur,int[] ll,int[] lr){
        int temp1=mat[ul[0]][ul[1]],temp2=mat[ur[0]][ur[1]];
        mat[ur[0]][ur[1]]=temp1;
        temp1=mat[lr[0]][lr[1]];
        mat[lr[0]][lr[1]]=temp2;
        temp2=mat[ll[0]][ll[1]];
        mat[ll[0]][ll[1]]=temp1;
        mat[ul[0]][ul[1]]=temp2;
    }
    
    public void rotate(int[][] matrix) {
        int[] ul = new int[2];
        int[] ur = new int[2];
        int[] ll = new int[2];
        int[] lr = new int[2];
        
        
        int sideLen = matrix.length;
        
        for(int offset=0;offset<Math.floor(sideLen/2);++offset){
            
            for(int outerOffset=0;outerOffset<sideLen-1-(offset*2);++outerOffset){
                
            ul[0]=offset;
            ul[1]=offset+outerOffset;
            
            ur[0]=offset+outerOffset;
            ur[1]=sideLen-1-offset;
            
            ll[0]=sideLen-1-offset-outerOffset;
            ll[1]=offset;
            
            lr[0]=sideLen-1-offset;
            lr[1]=sideLen-1-offset-outerOffset;
            
            
            performRotation(matrix,ul,ur,ll,lr);
            
            }
            
            
            
        }
        
    }
}