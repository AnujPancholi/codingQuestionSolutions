/*
    leetcode
    category: "Algorithms"
    problem title: "Valid Mountain Array"
*/

class Solution {
    public boolean validMountainArray(int[] A) {
        if(A.length<3){
            return false;
        }
        boolean peakFound = false,isValidMountain=true;
        
        for(int i=1;i<A.length-1 && isValidMountain;++i){
            if(peakFound){
                    if(A[i+1]>=A[i]){
                        isValidMountain=false;
                    }
            } else {
                    if(A[i-1]>=A[i]){
                        isValidMountain=false;
                    } else if(A[i+1]<A[i]){
                        peakFound=true;
                    }
            }   
        }
        return isValidMountain && peakFound;
    }
}