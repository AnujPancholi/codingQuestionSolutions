/*
    leetcode
    category: "Algorithms"
    problem title: "Maximum Product of Two Elements in an Array"
*/

class Solution {
    public int maxProduct(int[] nums) {
        int[] numsCopy = new int[nums.length];
        
        System.arraycopy(nums,0,numsCopy,0,nums.length);
        
        Arrays.sort(numsCopy);
        
        return Math.max((numsCopy[0]-1)*(numsCopy[1]-1),(numsCopy[numsCopy.length-2]-1)*(numsCopy[numsCopy.length-1]-1));
        
    }
}