class Solution {
    
    boolean[][] visitedMat;
    int mins;
    
    int ROTTEN = 2;
    int FRESH = 1;
    int EMPTY = 0;
    
    public int orangesRotting(int[][] grid) {
        
        visitedMat = new boolean[grid.length][grid[0].length];
        mins = -1;
        
        int freshCount = 0,rottenCount = 0;
        
        Queue<int[]> q = new LinkedList<int[]>();
        
        for(int i=0;i<grid.length;++i){
            for(int j=0;j<grid[0].length;++j){
                if(grid[i][j]==ROTTEN){
                    q.add(new int[]{i,j,mins,ROTTEN});
                    ++rottenCount;
                } else if(grid[i][j]==FRESH){
                    ++freshCount;
                }
            }
        }
        
        while(!q.isEmpty()){
            int[] curr = q.poll();
            
            if(visitedMat[curr[0]][curr[1]]){
                continue;
            }
            
            visitedMat[curr[0]][curr[1]] = true;
            
            if(grid[curr[0]][curr[1]]==EMPTY){
                continue;
            }
            
            if(grid[curr[0]][curr[1]]==FRESH && curr[3]==ROTTEN){
                grid[curr[0]][curr[1]] = ROTTEN;
                --freshCount;
                ++rottenCount;
            }
            
            mins = Math.max(mins,curr[2]+1);
            
            if(grid[curr[0]][curr[1]]==ROTTEN){
                if(curr[0]>0)q.add(new int[]{curr[0]-1,curr[1],curr[2]+1,ROTTEN});
                if(curr[1]>0)q.add(new int[]{curr[0],curr[1]-1,curr[2]+1,ROTTEN});
                if(curr[0]<grid.length-1)q.add(new int[]{curr[0]+1,curr[1],curr[2]+1,ROTTEN});
                if(curr[1]<grid[0].length-1)q.add(new int[]{curr[0],curr[1]+1,curr[2]+1,ROTTEN});
            }
            
            
        }
        
        return freshCount==0 ? (rottenCount==0 ? 0 : mins) : -1;
        
    }
}