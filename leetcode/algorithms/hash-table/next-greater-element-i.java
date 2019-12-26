/*
    leetcode
    category: "Algorithms"
    problem title: "Next Greater Element I"
*/

class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        HashMap<Integer,Integer> indexMap = new HashMap<Integer,Integer>();
        
        for(int i=0;i<nums2.length;++i){
            indexMap.put(nums2[i],i);
        }
        
        int[] ans = new int[nums1.length];
        int ansIndex=0;
        for(int qNum : nums1){
            int currentAns=-1;
            for(int i=indexMap.get(qNum)+1;i<nums2.length;++i){
                if(nums2[i]>qNum){
                   currentAns=nums2[i]; 
                    break;
                }
            }
            ans[ansIndex]=currentAns;
            ++ansIndex;
        }
        return ans;
        
    }
}