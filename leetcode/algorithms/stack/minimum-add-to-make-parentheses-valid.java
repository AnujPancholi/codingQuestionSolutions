/*
    leetcode
    category: "Algorithms"
    problem title: "Minimum Add to Make Parentheses Valid"
*/


class Solution {
    public int minAddToMakeValid(String S) {
        Stack<Character> parenStack = new Stack<Character>();       
        for(int i=0;i<S.length();++i){
            Integer topCharValue = parenStack.empty() ? null : (int)parenStack.peek();
            if(topCharValue!=null && ((int)(S.charAt(i) - topCharValue)>=1)){
                parenStack.pop();
            } else {
                parenStack.push(S.charAt(i));
            }
        }
        return parenStack.size();
    }
}