/*
    leetcode
    category: "Algorithms"
    problem title: "Minimum Moves to Equal Array Elements"
*/

class Solution {
    
    public int minMoves(int[] nums) {
        int steps = 0,min=nums[0],minIndex=0;
        for(int i=1;i<nums.length;i++){
            if(nums[i]<min){
                min=nums[i];
                minIndex = i;
            }
        }
        for(int num : nums){
            steps+=(num-min);
        }
        return steps;
       
    }
}