// import java.util.*;
class Solution {
    private int getPosIndex(int[] nums){
        int l = 0, h = nums.length -1,index = -1;
        while(h>=l){
            int m = l + ((h - l)/2);
            if(nums[m]>=0){
                if(m==0 || nums[m-1]<0){
                    return m;
                } else {
                    h = m -1;
                }
            } else {
                l = m + 1;
            }
        }
        
        return l<=0 ? 0 : nums.length;
    }
     
    
    public int[] sortedSquares(int[] nums) {
        
        int p = getPosIndex(nums);
        int n = p-1;
        
        int[] rArr = new int[nums.length];
        int i = 0;
        while(i<rArr.length){
            if(n==-1){
                while(p<nums.length){
                    rArr[i] = (int)Math.pow(nums[p],2);
                    ++p;
                    ++i;
                }
            } else if(p==nums.length){
                while(n>=0){
                    rArr[i] = (int)Math.pow(nums[n],2);
                    --n;
                    ++i;
                }
            } else {
                int psq = (int)Math.pow(nums[p],2),nsq = (int)Math.pow(nums[n],2);
                if(psq<nsq){
                    rArr[i] = psq;
                    ++p;
                } else {
                    rArr[i] = nsq;
                    --n;
                }
                ++i;
            }
        }
        
        return rArr;
    }
}