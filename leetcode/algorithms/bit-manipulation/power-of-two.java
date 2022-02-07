class Solution {
    public boolean isPowerOfTwo(int n) {
        while(n>1 && n%2==0){
            n = n >> 1;
        }
        return (n==1);
    }
}