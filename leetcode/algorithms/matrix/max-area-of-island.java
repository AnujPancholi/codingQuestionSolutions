class Solution {
    boolean[][] seen;
    
    int[][] grid;
    
    int LAND_NUM = 1;
    
    private int areaImpl(int r,int c){
        if((r<0 || r>=this.grid.length) || (c<0 || c>=this.grid[0].length) || this.seen[r][c]){
            return 0;
        }
        
        this.seen[r][c] = true;
        
        if(this.grid[r][c]!=LAND_NUM){
            return 0;
        }
        
        return 1 + areaImpl(r,c+1) + areaImpl(r+1,c) + areaImpl(r-1,c) + areaImpl(r,c-1);
    }
    public int maxAreaOfIsland(int[][] grid) {
        this.grid = grid;
        this.seen = new boolean[this.grid.length][this.grid[0].length];
        
        int maxArea = 0;
        
        for(int r = 0;r<this.grid.length;++r){
            for(int c = 0;c<this.grid[0].length;++c){
                if(!this.seen[r][c] && this.grid[r][c]==LAND_NUM){
                    maxArea = Math.max(maxArea,areaImpl(r,c));
                }
            }
        }
        
        return maxArea;
        
    }
}