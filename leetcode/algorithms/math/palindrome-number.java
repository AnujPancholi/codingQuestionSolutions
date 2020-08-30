/*
    leetcode
    category: "Algorithms"
    problem title: "Palindrome Number"
*/

class Solution {
    public boolean isPalindrome(int x) {
        if(x<0){
            return false;
        }
        boolean isPalindrome = true;
        int y=x,length=0;
        while(y>0){
            y/=10;
            ++length;
        }
        for(int i=0;i<(length/2);++i){
            int front=(x/((int)Math.pow(10,length-1-i)))-((x/(int)Math.pow(10,length-i))*10);
            int back = (x%(int)Math.pow(10,i+1))/((int)Math.pow(10,i));
            // System.out.println(Integer.toString(front)+" "+Integer.toString(back));
            if(front!=back){
                isPalindrome=false;
                break;
            }
        }
        
        return isPalindrome;
    }
}