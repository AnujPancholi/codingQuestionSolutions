/*
    leetcode
    category: "Algorithms"
    problem title: "Single Number III"
*/

class Solution {
    public int[] singleNumber(int[] nums) {
        HashSet<Integer> numbersSet = new HashSet<Integer>();
        int[] answer = new int[2];
        for(int num:nums){
            if(numbersSet.contains(num)){
                numbersSet.remove(num);
            } else {
                numbersSet.add(num);
            }
        }
        int i=0;
        for(Integer ans : numbersSet){
            answer[i]=ans.intValue();
            i++;
        }
        return answer;
    }
}