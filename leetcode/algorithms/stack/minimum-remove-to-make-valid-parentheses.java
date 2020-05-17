/*
    leetcode
    category: "Algorithms"
    problem title: "Minimum Remove to Make Parentheses Valid"
*/


class Solution {
    public String minRemoveToMakeValid(String s) {
        
        Stack<Integer> parenStack = new Stack<Integer>();
        StringBuilder ansBuilder = new StringBuilder(s);
        
        for(int i=0;i<s.length();++i){
            Character topChar = null, currentChar = (s.charAt(i));
            if(!parenStack.empty()){
                topChar = s.charAt(parenStack.peek());
            }
            if(topChar!=null && !Character.isLetter(currentChar) && (int)(currentChar)-(int)(topChar)==1){
                parenStack.pop();
            } else if(!Character.isLetter(currentChar)){
                parenStack.push(i);
            }
        }
        
        
        while(!parenStack.isEmpty()){
            ansBuilder.deleteCharAt(parenStack.pop());
        }
        
        return ansBuilder.toString();
        
    }
}