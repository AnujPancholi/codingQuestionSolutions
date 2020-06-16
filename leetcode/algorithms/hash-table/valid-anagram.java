/*
    leetcode
    category: "Algorithms"
    problem title: "Valid Anagram"
*/

class Solution {
    private HashMap<Character,Integer> getCharCounts(String str){
        HashMap<Character,Integer> charCounts = new HashMap<Character,Integer>();
        for(int i=0;i<str.length();++i){
            charCounts.put(str.charAt(i),charCounts.getOrDefault(str.charAt(i),0)+1);
        }
        return charCounts;
    }
    public boolean isAnagram(String s, String t) {
        HashMap<Character,Integer> tChars = getCharCounts(t);
        HashMap<Character,Integer> sChars = getCharCounts(s);
        
        boolean isAnagram=true;
        if(tChars.size()==sChars.size()){
            for(Map.Entry<Character,Integer> entry : tChars.entrySet()){
                Integer sCount = sChars.getOrDefault(entry.getKey(),null);
                if(sCount==null || sCount.intValue()!=entry.getValue()){
                    isAnagram=false;
                    break;
                }
            }
        } else {
            isAnagram = false;
        }
        
        return isAnagram;
        
    }
}