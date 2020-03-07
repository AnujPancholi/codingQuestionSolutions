/*
    leetcode
    category: "Algorithms"
    problem title: "Monotonic Array"
*/

class Solution {
    public boolean isMonotonic(int[] A) {
        int state = 0;
        boolean isMon = true;
        for(int i=0;i<A.length-1 && isMon;++i){
            switch(state){
                case 0:
                    if(A[i]<A[i+1]){
                        state=1;
                    } else if(A[i]>A[i+1]){
                        state=-1;
                    }
                break;
                case 1:
                    if(A[i]>A[i+1]){
                        isMon=false;
                    }
                break;
                case -1:
                    if(A[i]<A[i+1]){
                        isMon=false;
                    }
                break;
                    
            }
        }
        
        return isMon;
        
    }
}