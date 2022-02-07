public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int hweight = 0;
        for(int i=0;i<32;++i){
            hweight+=Math.abs(n%2);
            n = n>>1;
        }
        return hweight;
    }
}