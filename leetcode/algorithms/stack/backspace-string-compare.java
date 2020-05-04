/*
    leetcode
    category: "Algorithms"
    problem title: "Backspace String Compare"
*/

class Solution {
    public boolean backspaceCompare(String S, String T) {
        Stack<Character> S_stack = new Stack<Character>();
        Stack<Character> T_stack = new Stack<Character>();
        
        for(int i=0;i<S.length();++i){
            if(S.charAt(i)=='#'){
                if(!S_stack.empty()){
                 S_stack.pop();   
                }
            } else {
                S_stack.push(S.charAt(i));
            }
        }
        for(int i=0;i<T.length();++i){
            if(T.charAt(i)=='#'){
                if(!T_stack.empty()){
                    T_stack.pop();    
                }
                
            } else {
                T_stack.push(T.charAt(i));
            }
        }
        
        while(!T_stack.empty() && !S_stack.empty() && T_stack.peek()==S_stack.peek()){
            T_stack.pop();
            S_stack.pop();
        }
        return T_stack.empty() && S_stack.empty(); 
        
        
    }
}