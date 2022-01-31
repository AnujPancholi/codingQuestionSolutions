class Solution {
    private void floodFillImpl(int[][] image,int sr,int sc,int newColor,int oldColor){
        if((sr<0 || sr>image.length-1) || (sc<0 || sc>image[0].length-1) || image[sr][sc]!=oldColor){
            return;
        }
        
        image[sr][sc] = newColor;
        
        floodFillImpl(image,sr+1,sc,newColor,oldColor);
        floodFillImpl(image,sr,sc+1,newColor,oldColor);
        floodFillImpl(image,sr-1,sc,newColor,oldColor);
        floodFillImpl(image,sr,sc-1,newColor,oldColor);
        
    }
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        if(newColor!=image[sr][sc]){
            floodFillImpl(image,sr,sc,newColor,image[sr][sc]);
        }
        return image;
    }
}