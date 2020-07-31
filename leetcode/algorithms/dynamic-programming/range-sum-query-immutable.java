/*
    leetcode
    category: "Algorithms"
    problem title: "Range Sum Query Immutable"
*/


class NumArray {

    private int[] cumulativeSums;
    
    public NumArray(int[] nums) {
        cumulativeSums = new int[nums.length+1];
        cumulativeSums[0]=0;
        
        for(int i=0;i<nums.length;++i){
            cumulativeSums[i+1]=cumulativeSums[i]+nums[i];
        }
    }
    
    public int sumRange(int i, int j) {
        return cumulativeSums[j+1]-cumulativeSums[i];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(i,j);
 */