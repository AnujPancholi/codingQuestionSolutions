public class Solution {
    // you need treat n as an unsigned value
    
    private int getNextBit(int n){
        return (n & 1);
    }
    
    public int reverseBits(int n) {
        
        Stack<Integer> bitStack = new Stack<Integer>();
        
        int i=0;
        while(i<32){
            bitStack.push(getNextBit(n));
            n = n>>1;
            ++i;
        }
        
        i=0;
        long reversedInt = 0;
        while(!bitStack.isEmpty()){
            reversedInt+=(long)(bitStack.pop()*Math.pow(2,i));
            ++i;
        }
        
        return (int)reversedInt;
        
    }
}