/*
    leetcode
    category: "Algorithms"
    problem title: "Peak Index in a Mountain Array"
*/

class Solution {
    public int peakIndexInMountainArray(int[] A) {
        int mIndex=-1,mValue=-1;
        for(int i=0;i<A.length;++i){
            if(A[i]>mValue){
                mValue=A[i];
                mIndex=i;
            }
        }
        return mIndex;
    }
}