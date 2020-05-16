/*
    leetcode
    category: "Algorithms"
    problem title: "Minimum Remove to Make Parentheses Valid"
*/


class Solution {
    public String minRemoveToMakeValid(String s) {
        
        Stack<Integer> parenStack = new Stack<Integer>();
        
        for(int i=0;i<s.length();++i){
            Integer topCharVal = null;
            if(!parenStack.empty()){
                topCharVal = (int)(s.charAt(parenStack.peek()));
            }
            if(topCharVal!=null && topCharVal==40 && (int)(s.charAt(i))-topCharVal==1){
                parenStack.pop();
            } else if(((int)(s.charAt(i)))==40 || ((int)(s.charAt(i))==41)){
                parenStack.push(i);
            }
        }
        
        HashSet<Integer> removeSet = new HashSet<Integer>();
        
        while(!parenStack.isEmpty()){
            removeSet.add(parenStack.pop());
        }
        
        StringBuilder ansBuilder = new StringBuilder("");
        
        for(int i=0;i<s.length();++i){
            if(!removeSet.contains(i))ansBuilder.append(s.charAt(i));
        }
        
        return ansBuilder.toString();
        
    }
}