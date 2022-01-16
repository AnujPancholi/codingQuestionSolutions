import java.util.Arrays;

class Solution {
    public String getAnagramSig(String s){
        char[] letters = s.toCharArray();
        Arrays.sort(letters);
        return new String(letters);
    }
    public boolean isAnagram(String s, String t) {
        return getAnagramSig(s).equals(getAnagramSig(t));
    }
}