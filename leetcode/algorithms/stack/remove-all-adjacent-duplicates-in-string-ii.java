/*
    leetcode
    category: "Algorithms"
    problem title: "Remove All Adjacent Duplicates in String II"
*/
    
class charIntPair {
    public char c;
    public int i;
    public charIntPair(char input_c, int input_i){
        c = input_c;
        i = input_i;
    }
}
class Solution {
    public String removeDuplicates(String s, int k) {
        Stack<charIntPair> charCountStack = new Stack<charIntPair>();
        
        for(int i=0;i<s.length();++i){
            if(!charCountStack.empty()){
                charIntPair topChar = charCountStack.peek();
                if(topChar.c==s.charAt(i)){
                    ++topChar.i;
                    if(topChar.i==k){
                        charCountStack.pop();
                    }
                } else {
                    charCountStack.push(new charIntPair(s.charAt(i),1));
                }
            } else {
                charCountStack.push(new charIntPair(s.charAt(i),1));
            }
        }
        
        StringBuilder resultBuilder = new StringBuilder("");
        
        while(!charCountStack.empty()){
            charIntPair topChar = charCountStack.pop();
            for(int i=0;i<topChar.i;++i){
                resultBuilder.append(topChar.c);
            }
        }
        
        return resultBuilder.reverse().toString();
        
    }
}