/*
    leetcode
    category: "Algorithms"
    problem title: "Next Greater Element II"
*/

class Solution {
    public int[] nextGreaterElements(int[] nums) {
        Stack<Integer> indexStack = new Stack<Integer>();
        HashMap<Integer,Integer> indexToAnsMap = new HashMap<Integer,Integer>();
        
        for(int i=0;i<nums.length;++i){
            indexToAnsMap.put(i,-1);
            while(!indexStack.empty() && nums[indexStack.peek()]<nums[i]){
                indexToAnsMap.put(indexStack.pop(),nums[i]);
            }
            indexStack.push(i);
        }
        
        for(int i=0;i<nums.length;++i){
            while(!indexStack.empty() && nums[indexStack.peek()]<nums[i]){
                indexToAnsMap.put(indexStack.pop(),nums[i]);
            }
            
        }
        
        int[] ansArr = new int[nums.length];
        for(int i=0;i<ansArr.length;++i){
            ansArr[i] = indexToAnsMap.get(i);
        }
        return ansArr;
    }
}