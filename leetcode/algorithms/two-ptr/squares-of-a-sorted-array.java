// import java.util.*;
class Solution {
    
     
    
    public int[] sortedSquares(int[] nums) {
        
        int p = 0;
        while(p<nums.length && nums[p]<0){
            ++p;
        }
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