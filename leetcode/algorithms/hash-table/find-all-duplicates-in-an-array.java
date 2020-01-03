/*
    leetcode
    category: "Algorithms"
    problem title: "Find All Duplicates in an Array"
*/

class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        HashSet<Integer> appearOnceSet = new HashSet();
        List<Integer> appearTwiceList = new ArrayList<Integer>();
        for(int num:nums){
            if(appearOnceSet.contains(num)){
                appearOnceSet.remove(num);
                appearTwiceList.add(num);
            } else {
                appearOnceSet.add(num);
            }
        }
        return appearTwiceList;
    }
}