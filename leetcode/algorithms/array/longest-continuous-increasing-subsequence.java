/*
    leetcode
    category: "Algorithms"
    problem title: "Longest Continuous Increasing Subsequence"
*/


class Solution {
    public int findLengthOfLCIS(int[] nums) {
        
        if(nums.length<2){
            return nums.length;
        }
        
        int maxLen=0,candidateMax=0;
        
        for(int i=1;i<nums.length;++i){
            ++candidateMax;
           if(nums[i-1]>=nums[i]){
               if(candidateMax>maxLen){
                   maxLen=candidateMax;
               }
               candidateMax=0;
           }
        }
        
        if(candidateMax++>0 && candidateMax>maxLen){
            maxLen=candidateMax;
        }
        return maxLen;
        
    }
}