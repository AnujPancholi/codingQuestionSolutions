/*
    leetcode
    category: "Algorithms"
    problem title: "Find the Duplicate Number"
*/

class Solution {
    public int findDuplicate(int[] nums) {
        HashSet<Integer> numSet = new HashSet<Integer>();
        int duplicateNumber=-1;
        for(int num : nums){
            if(numSet.contains(num)){
                duplicateNumber = num;
                break;
            }
            numSet.add(num);
        }
        return duplicateNumber;
    }
}