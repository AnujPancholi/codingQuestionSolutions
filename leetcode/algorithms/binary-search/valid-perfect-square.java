/*
    leetcode
    category: "Algorithms"
    problem title: "Valid Perfect Square"
*/

class Solution {
    public boolean isPerfectSquare(int num) {
        
        if(num==0 || num==1){
            return true;
        }
        long low=0,high=(long)num;
        boolean isSquareRootFound=false;
        while(high-low>1){
            long mid = (high+low)/2;
            if(mid*mid==num){
                isSquareRootFound=true;
                break;
            } else if(mid*mid>num){
                high=mid;
            } else {
                low=mid;
            }
            // System.out.println(Long.toString(low)+":"+Long.toString(high));
        }
        
        return isSquareRootFound;
        
    }
}