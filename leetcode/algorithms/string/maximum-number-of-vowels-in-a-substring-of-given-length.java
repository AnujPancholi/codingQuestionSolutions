/*
    leetcode
    category: "Algorithms"
    problem title: "Maximum Number of Vowels in a Substring of Given Length"
*/

class Solution {
    private HashSet<Character> vowelSet = new HashSet<Character>(){{
        add('a');add('e');add('i');add('o');add('u');
    }};
    public int maxVowels(String s, int k) {
        
        
        int i=0,j=k-1,maxVowelCount=0,currVowelCount=0;
        
        for(int c=0;c<=j;++c){
            if(vowelSet.contains(s.charAt(c))){
                ++currVowelCount;
                ++maxVowelCount;
            }
        }
        
        while(j<s.length()-1){
            if(vowelSet.contains(s.charAt(i))){
                --currVowelCount;
            }
            ++i;
            ++j;
            if(vowelSet.contains(s.charAt(j))){
                ++currVowelCount;
            }
            
            if(currVowelCount>maxVowelCount){
                maxVowelCount=currVowelCount;
            }
        }
        
        return maxVowelCount;
        
    }
}