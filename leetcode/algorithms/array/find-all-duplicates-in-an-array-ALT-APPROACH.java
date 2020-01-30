/*
    leetcode
    category: "Algorithms"
    problem title: "Find All Duplicates in an Array"
*/


//this is an alternative "math" approach, time O(n), space O(1)

class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        List<Integer> duplicatesList = new ArrayList<Integer>();
        for(int i=0;i<nums.length;++i){
            int currentVal = Math.abs(nums[i]);
            if(nums[currentVal-1]<0){
                duplicatesList.add(currentVal);
            } else {
                nums[currentVal-1]*=-1;
            }
        }
        return duplicatesList;
    }
}