/*
    leetcode
    category: "Algorithms"
    problem title: "Find All Numbers Disappeared in an Array"
*/

class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        ArrayList<Integer> numList = new ArrayList<Integer>();
        for(int i=1;i<=nums.length;i++){
            numList.add(i);
        }
        for(int i=0;i<nums.length;i++){
            numList.set(nums[i]-1,0);
        }
        int i=0;
        while(i<numList.size()){
            if(numList.get(i)==0){
                numList.remove(i);
            } else {
                ++i;
            }
        }
        return numList;
    }
}