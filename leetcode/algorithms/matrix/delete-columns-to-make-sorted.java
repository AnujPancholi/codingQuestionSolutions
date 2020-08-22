/*
    leetcode
    category: "Algorithms"
    problem title: "Delete Columns to Make Soted"
*/

class Solution {
    public int minDeletionSize(String[] A) {
        
        int strLen = A[0].length(),count=0;
        
        for(int i=0;i<strLen;++i){
            boolean isInOrder = true;
            for(int j=1;j<A.length;++j){
                if((int)A[j].charAt(i)<(int)A[j-1].charAt(i)){
                    isInOrder = false;
                    break;
                }
            }
            if(!isInOrder){
                ++count;
            }
        }
        
        return count;
        
    }
}