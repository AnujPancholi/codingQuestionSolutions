/*
    leetcode
    category: "Algorithms"
    problem title: "Island Perimeter"
*/


class Solution {
   
    public int islandPerimeter(int[][] grid) {
        int thisPerimeter=0;
        for(int i=0;i<grid.length;++i){
            for(int j=0;j<grid[0].length;++j){
                if(grid[i][j]==1){
                    if(i==0){
                        ++thisPerimeter;
                    } else if(grid[i-1][j]==0){
                        ++thisPerimeter;
                    }
                    
                    if(i==grid.length-1){
                        ++thisPerimeter;
                    } else if(grid[i+1][j]==0){
                        ++thisPerimeter;
                    }
                    
                    if(j==0){
                        ++thisPerimeter;
                    } else if(grid[i][j-1]==0){
                        ++thisPerimeter;
                    }
                    
                    if(j==grid[i].length-1){
                        ++thisPerimeter;
                    } else if(grid[i][j+1]==0){
                        ++thisPerimeter;
                    }
                }   
            }
        }
        return thisPerimeter;
    }
}