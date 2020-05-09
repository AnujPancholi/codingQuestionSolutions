/*
    leetcode
    category: "Algorithms"
    problem title: "Next Greater Element II"
*/

    //faster alternate solution

class Solution {
    public int[] nextGreaterElements(int[] nums) {
        Stack<Integer> indexStack = new Stack<Integer>();
        
        int[] ansArr = new int[nums.length];
        for(int i=0;i<nums.length;++i){
            ansArr[i] = -1;
            while(!indexStack.empty() && nums[indexStack.peek()]<nums[i]){
                ansArr[indexStack.pop()] = nums[i];
            }
            indexStack.push(i);
        }
        
        for(int i=0;i<nums.length;++i){
            while(!indexStack.empty() && nums[indexStack.peek()]<nums[i]){
                ansArr[indexStack.pop()] = nums[i];
            }
            
        }
        return ansArr;
    }
}