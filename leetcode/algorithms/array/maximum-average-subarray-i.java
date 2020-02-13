/*
    leetcode
    category: "Algorithms"
    problem title: "Max Average Subarray - I"
*/

class Solution {
    public double findMaxAverage(int[] nums, int k) {
        int low=0,high=k>nums.length ? nums.length-1 : k-1;
        double maxavg = 0.00d;
        for(int i=low;i<=high;++i){
            maxavg+=nums[i];
        }
        maxavg/=high+1;
        double rollingAvg=maxavg;
        ++low;
        ++high;
        
        while(high<nums.length){
            rollingAvg = (rollingAvg*k)-nums[low-1];
            rollingAvg = rollingAvg+=nums[high];
            rollingAvg/=k;
            maxavg = Math.max(rollingAvg,maxavg);
            ++low;
            ++high;
        }
        return maxavg;
    }
}