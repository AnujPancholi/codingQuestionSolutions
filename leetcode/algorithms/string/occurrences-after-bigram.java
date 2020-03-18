/*
    leetcode
    category: "Algorithms"
    problem title: "Occurrences After Bigram"
*/

class Solution {
    public String[] findOcurrences(String text, String first, String second) {
        String[] words = text.split(" ");
        
        int wordPtr=0,extPtr=0;
        ArrayList<String> ansList = new ArrayList<String>();
        while(wordPtr<words.length-2){
            if(words[wordPtr].equals(first) && words[wordPtr+1].equals(second)){
                ansList.add(words[wordPtr+2]);
            }
            ++wordPtr;
        }
        
        String[] ans = new String[ansList.size()];
        int i=0;
        for(String str : ansList){
            ans[i] = str;
            ++i;
        }
        return ans;
        
    }
}