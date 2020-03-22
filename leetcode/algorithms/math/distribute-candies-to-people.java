/*
    leetcode
    category: "Algorithms"
    problem title: "Distribute Candies to People"
*/

class Solution {
    public int[] distributeCandies(int candies, int num_people) {
        
        int[] cArr = new int[num_people];
        
        int dispenseCount = 0;
        int i=0;
        while(candies>0){
            dispenseCount=Math.min(((i%num_people)+1)+((int)(i/num_people))*num_people,candies);
            cArr[((i%num_people))]+=dispenseCount;
            ++i;
            candies-=dispenseCount;
        }
        
        return cArr;
        
    }
}