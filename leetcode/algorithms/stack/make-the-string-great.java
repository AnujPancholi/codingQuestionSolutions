/*
    leetcode
    category: "Algorithms"
    problem title: "Make The String Great"
*/


class Solution {
    public String makeGood(String s) {
        Stack<Character> charStack = new Stack<Character>();
        charStack.push(s.charAt(0));
        
        int i=1;
        while(i<s.length()){
            Integer currAsciiVal = (int)s.charAt(i);
            Integer stackTopAsciiVal = charStack.empty() ? null : (int)charStack.peek();
            
            if(stackTopAsciiVal!=null
               && Math.abs(currAsciiVal-stackTopAsciiVal)==32
              ){
                charStack.pop();
            } else {
                charStack.push(s.charAt(i));
            }
            
            ++i;
        }
        
        
        i=charStack.size()-1;
        StringBuilder ansBuilder = new StringBuilder("");
        
        
        
        while(!charStack.empty()){
            ansBuilder.insert(0,charStack.pop());
        }
        
        return ansBuilder.toString();
        
        
        
    }
}