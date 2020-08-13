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
        
        ArrayList<Integer> vowelIndices = new ArrayList<Integer>();
        
        for(int i=0;i<s.length();++i){
            if(isVowel(s.charAt(i))){
                vowelIndices.add(i);
            }
        }
        
        // System.out.println(vowelIndices);
        
        int low=0,high=vowelIndices.size()-1;
        StringBuilder reverseVowelBuilder = new StringBuilder(s);
        while(high-low>0){
            int highIndex = vowelIndices.get(high);
            int lowIndex = vowelIndices.get(low);
            char tempChar = reverseVowelBuilder.charAt(lowIndex);
            reverseVowelBuilder.setCharAt(lowIndex,reverseVowelBuilder.charAt(highIndex));
            reverseVowelBuilder.setCharAt(highIndex,tempChar);
            ++low;
            --high;
        }
        
        return reverseVowelBuilder.toString();
        
    }
}