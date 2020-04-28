/*
    leetcode
    category: "Algorithms"
    problem title: "Remove Outermost Parenthesis"
*/

class Solution {
    public String removeOuterParentheses(String S) {
        StringBuilder outerParensRemovedBuilder = new StringBuilder("");
        
        Stack<Character> parenStack = new Stack<Character>();
        
        for(int i=0;i<S.length();++i){
            if(parenStack.empty()){
                parenStack.push(S.charAt(i));
            } else {
                int topCharVal = (int)parenStack.peek();
                int currCharVal = (int)S.charAt(i);
                if(currCharVal-topCharVal==1){
                    char topChar = parenStack.pop();  
                } else {
                    parenStack.push(S.charAt(i));
                }
                if(parenStack.size()>0){
                    outerParensRemovedBuilder.append(S.charAt(i));
                }
            }
        }
        return outerParensRemovedBuilder.toString();
    }
}