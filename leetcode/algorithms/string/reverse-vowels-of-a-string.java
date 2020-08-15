/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Vowels of a String"
*/

class Solution {
    
    private HashSet<Character> VOWELS = new HashSet<Character>(){{
        add('a');
        add('A');
        add('e');
        add('E');
        add('i');
        add('I');
        add('o');
        add('O');
        add('u');
        add('U');
    }};
    
    private boolean isVowel(char c){
        return VOWELS.contains(c);
    }
    
    
    
    public String reverseVowels(String s) {
        
        int low=0,high=s.length()-1;
        
        StringBuilder revBuilder = new StringBuilder(s);
        
        while(high>low){
            boolean isLowVowel = isVowel(s.charAt(low)), isHighVowel = isVowel(s.charAt(high)); 
            if(!isLowVowel){
                ++low;
            }
            if(!isHighVowel){
                --high;
            }
            
            if(isLowVowel && isHighVowel){
                char temp = s.charAt(low);
                revBuilder.setCharAt(low,s.charAt(high));
                revBuilder.setCharAt(high,temp);
                ++low;
                --high;
            }
        }
        
        return revBuilder.toString();
        
        
    }
}