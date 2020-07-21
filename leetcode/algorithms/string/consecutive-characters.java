/*
    leetcode
    category: "Algorithms"
    problem title: "Consecutive Characters"
*/

class Solution {
    public int maxPower(String s) {
        int powerCandidate = 1,power=1;
        Character powerChar = s.charAt(0);
        for(int i=1;i<s.length();i++){
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