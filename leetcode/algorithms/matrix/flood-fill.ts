/*
    leetcode
    category: "Algorithms"
    problem title: "Flood Fill"
*/

function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    
    const currentColor: number = image[sr][sc];
    
    if(currentColor!==newColor){
        floodFillColor(image,sr,sc,newColor,currentColor);
    }
    
    return image;
    

};

function floodFillColor(image: number[][], r: number, c: number, newColor: number, currColor: number): void {
    if(r<0 || c<0 || r>=image.length || c>=image[0].length || image[r][c]!==currColor){
        return;
    }

    image[r][c]=newColor;

    if(r<image.length)floodFillColor(image,r+1,c,newColor,currColor);
    if(r>0)floodFillColor(image,r-1,c,newColor,currColor);
    if(c<image[0].length)floodFillColor(image,r,c+1,newColor,currColor);
    if(c>0)floodFillColor(image,r,c-1,newColor,currColor);

}