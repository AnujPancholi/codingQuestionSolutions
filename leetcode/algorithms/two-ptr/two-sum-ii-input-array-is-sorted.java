class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int l = 0,h = numbers.length-1;
        
        int[] sol = new int[]{-1,-1};
        
        while(l<h){
            int currSum = numbers[l] + numbers[h];
            if(currSum==target){
                sol[0] = l+1;
                sol[1] = h+1;
                break;
            } else if(currSum<target){
                ++l;
            } else {
                --h;
            }
        }
        
        return sol;
    }
}