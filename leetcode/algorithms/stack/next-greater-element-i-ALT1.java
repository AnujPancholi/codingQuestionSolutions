/*
    leetcode
    category: "Algorithms"
    problem title: "Next Greater Element I"
*/

    //alt stack based solution

class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        HashMap<Integer, Integer> nextGreatestMap = new HashMap<Integer,Integer>();
        Stack<Integer> greaterStack = new Stack<Integer>();
        
        for(int num : nums2){
            while(!greaterStack.empty() && greaterStack.peek()<num){
                nextGreatestMap.put(greaterStack.pop(),num);
            }
            
            greaterStack.push(num);
        }
        
        int[] ansArr = new int[nums1.length];
        int i = 0;
        for(int num : nums1){
            Integer nextGreaterResult = nextGreatestMap.get(num);
            ansArr[i] = nextGreaterResult==null ? -1 : nextGreaterResult;
            ++i;
        }
        return ansArr;
    }
}