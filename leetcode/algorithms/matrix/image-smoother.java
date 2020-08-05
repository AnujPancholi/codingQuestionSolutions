/*
    leetcode
    category: "Algorithms"
    problem title: "Image Smoother"
*/

class Solution {
    
    private int getAverageGrayScale(int[][] M,int i,int j){
        int sum=0,count=0;
        
        for(int y=i-1;y<=i+1;++y){
            for(int x=j-1;x<=j+1;++x){
                if(x>-1 && x<M[0].length && y>-1 && y<M.length){
                    ++count;
                    sum+=M[y][x];
                }
            }
        }
        
        // System.out.println(Integer.toString(i)+":"+Integer.toString(j)+":"+Integer.toString(sum)+":"+Integer.toString(count));
        
        return (sum)/(count);
        
    }
    public int[][] imageSmoother(int[][] M) {
        
        int[][] smoothedM = new int[M.length][M[0].length];
        
        for(int i=0;i<M.length;++i){
            for(int j=0;j<M[0].length;++j){
                smoothedM[i][j] = getAverageGrayScale(M,i,j);
            }
        }
        
        return smoothedM;
        
    }
}