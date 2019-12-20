/*
	leetcode
	category: "Algorithms"
	problem title: "Construct the Rectangle"
*/

class Solution {
    public int[] constructRectangle(int area) {
        int candidateWidth = (int)Math.sqrt(area);
        int candidateHeight = candidateWidth;
        do{
            candidateHeight = (int)(area/candidateWidth);
            --candidateWidth;
        }while(area%candidateHeight!=0 && candidateWidth!=0);
        ++candidateWidth;
        
        int[] resultArr = new int[]{candidateHeight,candidateWidth};
        return resultArr;
    }
}