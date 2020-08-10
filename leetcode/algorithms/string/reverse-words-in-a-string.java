/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Words in a String"
*/

class Solution {
    public String reverseWords(String s) {
        Stack<String> stringStack = new Stack<String>();
        
        StringBuilder wordBuilder = new StringBuilder("");
        for(int i=0;i<s.length();++i){
            if(s.charAt(i)!=' '){
                wordBuilder.append(s.charAt(i));
            } else if(wordBuilder.length()>0){
                stringStack.push(wordBuilder.toString());
                wordBuilder.setLength(0);
            }
        }
        // System.out.println(stringStack.size());
        if(wordBuilder.length()>0 && wordBuilder.charAt(0)!=' ')stringStack.push(wordBuilder.toString());
        wordBuilder.setLength(0);
        while(!stringStack.empty()){
            wordBuilder.append(stringStack.pop()+" ");
        }
        if(wordBuilder.length()>0){
            wordBuilder.deleteCharAt(wordBuilder.length()-1);
        }
        return wordBuilder.toString();
        
    }
}