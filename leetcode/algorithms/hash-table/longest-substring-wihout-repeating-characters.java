class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashMap<Character,Integer> charMap = new HashMap<Character,Integer>();
        
        int i = 0, len = 0,maxLen = 0;
        while(i<s.length()){
            char currChar = s.charAt(i);
            Integer index = charMap.getOrDefault(currChar,null);
            
            if(index!=null){
                i = index+1;
                charMap.clear();
                maxLen = Math.max(maxLen,len);
                len = 0;
            } else {
                charMap.put(currChar,i);
                ++i;
                ++len;
                maxLen = Math.max(maxLen,len);
            }
        }
        return maxLen;
    }
}