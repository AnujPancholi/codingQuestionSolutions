/*
    leetcode
    category: "Algorithms"
    problem title: "Longest Palindrome"
*/

class Solution {
    public int longestPalindrome(String s) {
        HashMap<Character,Integer> charCounts = new HashMap<Character,Integer>();
        for(int i=0;i<s.length();++i){
            Integer mapCount = charCounts.get(s.charAt(i));
            charCounts.put(s.charAt(i),mapCount!=null ? mapCount.intValue()+1 : 1);
        }
        int longestPalinLength = 0;
        ArrayList<Character> keysToRemove = new ArrayList<Character>();
        for(Character key : charCounts.keySet()){
            Integer val = (Integer)charCounts.get((Character)key);
            switch(val.intValue()%2){
                case 0:
                    longestPalinLength+=val;
                    keysToRemove.add((Character)key);
                    break;
                case 1:
                    if(val>1){
                        longestPalinLength+=val-1;
                    }
                    break;
            }
            
        }
        
        for(Character key : keysToRemove){
            charCounts.remove(key);
        }
        
        if(!charCounts.isEmpty()){
            ++longestPalinLength;
        }
        
        return longestPalinLength;
        
    }
}