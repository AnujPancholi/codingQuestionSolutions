/*
    leetcode
    category: "Algorithms"
    problem title: "Binary Number with Alternating bits"
*/

class Solution {
    public boolean hasAlternatingBits(int n) {
        int lastBit = -1;
        boolean isAlternating = true;
        while(n>0){
            int thisBit = n%2;
            if(lastBit!=-1) {
                if(lastBit==thisBit){
                    isAlternating=false;
                    break;
                }
            } 
            lastBit=thisBit;
            n=(int)Math.floor(n/2);
        }
        return isAlternating;
        
    }
}