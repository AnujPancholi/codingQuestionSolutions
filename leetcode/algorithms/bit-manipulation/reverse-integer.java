class Solution {
    public int reverse(int x) {
        
        Stack<Integer> iStk = new Stack<Integer>();
        int multiplier = x<0 ? -1 : 1;
        x = Math.abs(x);
        while(x>0){
            iStk.push(x%10);
            x = x/10;
        }
        
        int i=0;
        int reversedSum = 0;
        while(!iStk.isEmpty()){
            reversedSum+=(iStk.pop()*Math.pow(10,i));
            ++i;
        }
        
        return (reversedSum==Integer.MAX_VALUE ? 0 : multiplier*(reversedSum));
        
    }
}