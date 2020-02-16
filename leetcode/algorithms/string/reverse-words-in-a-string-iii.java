/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Words in a String III"
*/

class Solution {
    
    private String getReverseString(String s){
        StringBuilder strBuilder = new StringBuilder("");
        for(int i=s.length()-1;i>=0;--i){
            strBuilder.append(Character.toString(s.charAt(i)));
        }
        return strBuilder.toString();
    }
    
    public String reverseWords(String s) {
        StringBuilder revSentenceBuilder = new StringBuilder("");
        int i=0,j=0;
        while(j<=s.length()){
            if(j==s.length() || (s.charAt(j)==' ')){
                revSentenceBuilder.append(getReverseString(s.substring(i,j)+" "));
                i=j+1;
            }
            ++j;
        }
        revSentenceBuilder.deleteCharAt(0);
        return revSentenceBuilder.toString();
        
    }
}