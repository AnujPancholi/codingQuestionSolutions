/*
    leetcode
    category: "Algorithms"
    problem title: "Max Consecutive Ones"
*/

class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int maxCount = 0,count=0;
        for(int i=0;i<nums.length;i++){
            if(nums[i]==0){
                count=0;
            } else {
                ++count;
                if(count>maxCount){
                    maxCount=count;
                }
            }
        }
        return maxCount;
    }
}