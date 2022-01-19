import java.util.*;
class Solution {
    private HashMap<Character,Character> parenMap;
    
    private HashMap<Character,Character> initParenMap() {
        parenMap = new HashMap<Character,Character>(3,0.5f);
        parenMap.put('{','}');
        parenMap.put('[',']');
        parenMap.put('(',')');
        return parenMap;
    }
    
    public boolean isValid(String s) {
        
        Stack<Character> charStack = new Stack<Character>();
        initParenMap();
        
        for(int i=0;i<s.length();++i){
            if(!charStack.isEmpty()){
                Character tosChar = charStack.peek();
                if(s.charAt(i)==parenMap.getOrDefault(tosChar,'#')){
                    charStack.pop();
                } else {
                    charStack.push(s.charAt(i));
                }
            } else {
                charStack.push(s.charAt(i));
            }
        }
        
        
        return charStack.isEmpty();
        
        
    }
}