/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Words in a String III"
*/

    //another alternative stack-based solution to problem solved earlier, faster than first stack-based solution

class Solution {   
    public String reverseWords(String s) {
        StringBuilder revSentenceBuilder = new StringBuilder("");
        Stack<String> revWordStack = new Stack<String>();
        StringBuilder revWordBuilder = new StringBuilder("");
        for(int i=s.length()-1;i>=-1;--i){
            if(i==-1 || s.charAt(i)==' '){
                revWordStack.push(revWordBuilder.toString());
                revWordBuilder.setLength(0);
            } else {
                revWordBuilder.append(s.charAt(i));
            }
        }
        while(!revWordStack.empty()){
            revSentenceBuilder.append(revWordStack.pop()+" ");
        }
        revSentenceBuilder.deleteCharAt(revSentenceBuilder.length()-1);
        return revSentenceBuilder.toString();
    }
}