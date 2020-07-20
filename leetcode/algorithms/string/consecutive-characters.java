/*
    leetcode
    category: "Algorithms"
    problem title: "Consecutive Characters"
*/

class Solution {
    public int maxPower(String s) {
        int powerCandidate = 0,power=0;
        Character powerChar = null;
        for(int i=0;i<s.length();i++){
            if(powerChar==null || s.charAt(i)!=powerChar){
                powerChar = s.charAt(i);
                powerCandidate=1;
            } else {
                powerCandidate++;
            }
            
            if(powerCandidate>power){
                power = powerCandidate;
            }
        }
        
        return power;
        
    }
}