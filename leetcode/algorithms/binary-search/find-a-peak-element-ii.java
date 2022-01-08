class Solution {
    private void printCoords(int[] coords){
        System.out.println(Integer.toString(coords[0])+","+Integer.toString(coords[1]));
    }
    private void printMatrix(int[][] mat){
        for(int i=0;i<mat.length;i++){
            for(int j=0;j<mat[i].length;j++){
                System.out.print(Integer.toString(mat[i][j])+",");
            }
            System.out.print('\n');
        }
    }
    
    private int[] getGreaterAdjacentElementCoords(int[][] mat,int[] coords){
        int[][] candidateCoords = {
            {coords[0]-1,coords[1]},
            {coords[0]+1,coords[1]},
            {coords[0],coords[1]-1},
            {coords[0],coords[1]+1}
        };
        // System.out.println(mat[coords[0]][coords[1]]);
        int[] greaterElemCoords = {-1,-1};
        for(int[] currCandidateCoords : candidateCoords){
            // printCoords(currCandidateCoords);
            if(currCandidateCoords[0]!=-1 && currCandidateCoords[0]<mat.length && currCandidateCoords[1]!=-1 && currCandidateCoords[1]<mat[0].length &&
                mat[coords[0]][coords[1]]<mat[currCandidateCoords[0]][currCandidateCoords[1]]){
                greaterElemCoords = currCandidateCoords;
                break;
            }
        }
        
        return greaterElemCoords[0]==-1 && greaterElemCoords[1]==-1 ? coords : getGreaterAdjacentElementCoords(mat,greaterElemCoords);
    }
    public int[] findPeakGrid(int[][] mat) {
        int[] initCoords = {0,0};
        return getGreaterAdjacentElementCoords(mat,initCoords);
    }
}