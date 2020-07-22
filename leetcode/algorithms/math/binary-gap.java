/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Gap"
*/

class Solution {
    public int binaryGap(int N) {
        
        int num = N, rem=0,dist=-1,maxDist=0;
        
        while(num>0){
            rem = num%2;
            if(rem==1){
                ++dist;
                if(dist>maxDist){
                    maxDist=dist;
                }
                dist=0;
            } else if(dist>-1){
                ++dist;
            }
            
            num=num/2;
        }
        return maxDist;
        
    }
}