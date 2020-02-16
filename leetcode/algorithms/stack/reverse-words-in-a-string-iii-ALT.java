/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Words in a String III"
*/

    // alternative, stack-based solution, different from solution of the same problem in the "string" directory

class Solution {   
    public String reverseWords(String s) {
        StringBuilder revSentenceBuilder = new StringBuilder("");
        Stack<Character> charsStack = new Stack<Character>();
        for(int i=0;i<=s.length();++i){
            if(i==s.length() || s.charAt(i)==' '){
                if(revSentenceBuilder.length()!=0){
                    revSentenceBuilder.append(" ");
                }
                while(!charsStack.empty()){
                    revSentenceBuilder.append(Character.toString(charsStack.pop()));
                }
            } else {
                charsStack.push(s.charAt(i));
            }
        }
        
        return revSentenceBuilder.toString();
        
    }
}