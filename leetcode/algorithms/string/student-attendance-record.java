/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse String II"
*/


class Solution {
    public boolean checkRecord(String s) {
        int lateLength = 0;
        int absentCount=0;
        boolean isEligible = true,isLastLate=false;
        for(int i=0;i<s.length() && isEligible;++i){
            switch(s.charAt(i)){
                case 'A':
                    isLastLate=false;
                    lateLength=0;
                    ++absentCount;
                    if(absentCount>1){
                        isEligible=false;
                    }
                    break;
                case 'L':
                    ++lateLength;
                    if(lateLength>2){
                        isEligible=false;
                    }
                    isLastLate=true;
                    break;
                default:
                    isLastLate=false;
                    lateLength=0;
                break;
            }
            
        }
        return isEligible;
    }
}