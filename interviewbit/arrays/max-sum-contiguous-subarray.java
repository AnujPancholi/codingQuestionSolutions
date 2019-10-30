/*
    interviewbit
    track: "programming",
    section: "Arrays",
    problem title: "Max Sum Contiguous Subarray"
*/


//basically just Kadane's algorithm
public class Solution {
    // DO NOT MODIFY THE LIST. IT IS READ ONLY
    public int maxSubArray(final List<Integer> A) {
        
        int max = Integer.MIN_VALUE,max_ending_here=0;
        for(int i=0;i<A.size();i++){
            max_ending_here+=A.get(i);
            if(max_ending_here>max){
                max=max_ending_here;
            }
            if(max_ending_here<0){
                max_ending_here=0;
            }
        }
        return max;
    }
}
