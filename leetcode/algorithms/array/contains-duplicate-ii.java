/*
    leetcode
    category: "Algorithms"
    problem title: "Contains Duplicate II"
*/

class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        if(nums.length<=1){
            return false;
        }
        HashSet<Integer> windowSet = new HashSet<Integer>();
        int i,j;
        i=0;
        j=(k+1)>nums.length ? nums.length-1 : k;
        boolean isDuplicateWithinRange = false;
        while(j<nums.length){
            if(i==0 && windowSet.size()==0){
                for(int s=i;s<=j;++s){
                    windowSet.add(nums[s]);
                }
                if(j==nums.length-1){
                    if(windowSet.size()<nums.length){
                        isDuplicateWithinRange=true;
                    }
                    break;
                }
            } else {
                windowSet.remove(nums[i-1]);
                windowSet.add(nums[j]);
            }
            if(windowSet.size()<(k+1)){
                isDuplicateWithinRange = true;
                break;
            }
            ++i;
            ++j;
        }
        return isDuplicateWithinRange;
    }
}