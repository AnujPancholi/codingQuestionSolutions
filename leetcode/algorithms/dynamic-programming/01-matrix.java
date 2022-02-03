class Solution {
    boolean[][] visitMatrix;
    
    public int[][] updateMatrix(int[][] mat) {
        this.visitMatrix = new boolean[mat.length][mat[0].length];
        for(int i=0;i<mat.length;++i){
            for(int j=0;j<mat[0].length;++j){
                this.visitMatrix[i][j] = false;
            }
        }
        
        Queue<int[]> q = new LinkedList<int[]>();
        
        for(int i=0;i<mat.length;++i){
            for(int j=0;j<mat[0].length;++j){
                if(mat[i][j]==0){
                    q.add(new int[]{i,j,0});
                }
            }
        }
        
        while(!q.isEmpty()){
            int[] curr = q.poll();
            
            if(visitMatrix[curr[0]][curr[1]]){
                continue;
            }
            
            mat[curr[0]][curr[1]]+=curr[2];
            
            visitMatrix[curr[0]][curr[1]] = true;
            
            if(curr[0]>0)q.add(new int[]{curr[0]-1,curr[1],mat[curr[0]][curr[1]]});
            if(curr[1]>0)q.add(new int[]{curr[0],curr[1]-1,mat[curr[0]][curr[1]]});
            if(curr[0]<mat.length-1)q.add(new int[]{curr[0]+1,curr[1],mat[curr[0]][curr[1]]});
            if(curr[1]<mat[0].length-1)q.add(new int[]{curr[0],curr[1]+1,mat[curr[0]][curr[1]]});
        }
        
        return mat;
        
    }
}