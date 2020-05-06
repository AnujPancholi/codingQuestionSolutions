/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Substrings Between Each Pair of Parentheses"
*/

class Solution {
    public String reverseParentheses(String s) {
        StringBuilder resultBuilder = new StringBuilder("");
        Stack<Character> charStack = new Stack<Character>();
        
        LinkedList<Character> charQueue = new LinkedList<Character>();
        
        for(int i=0;i<s.length();++i){
            if(s.charAt(i)==')'){
                while(charStack.peek()!='('){
                    charQueue.add(charStack.pop());
                }
                charStack.pop();
                while(charQueue.size()>0){
                    charStack.push(charQueue.poll());
                }
            } else {
                charStack.push(s.charAt(i));
            }
        }
        
        while(!charStack.empty()){
            resultBuilder.append(charStack.pop());
        }
        
        return resultBuilder.reverse().toString();
         
        
    }
}