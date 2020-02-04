/*
    leetcode
    category: "Algorithms"
    problem title: "Palindromic Subtring"
*/

class Solution {
    
    private boolean isPalindromic(String s){
        if(s.length()==1){
            return true;
        }
        boolean isPalin = true;
        for(int i=0;i<(int)(s.length()/2);++i){
            if(s.charAt(i)!=s.charAt(s.length()-i-1)){
                isPalin=false;
                break;
            }
        }
        return isPalin;
    }
    
    public int countSubstrings(String s) {
        int substringCount = 0;
        for(int i=0;i<s.length();++i){
            for(int j=i+1;j<s.length()+1;++j){
                if(isPalindromic(s.substring(i,j))){
                    ++substringCount;
                }
            }
        }
        
        return substringCount;
        
    }
}