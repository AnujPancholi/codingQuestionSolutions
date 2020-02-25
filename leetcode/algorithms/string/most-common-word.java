/*
    leetcode
    category: "Algorithms"
    problem title: "Most Common Word"
*/

class Solution {
    public String mostCommonWord(String paragraph, String[] banned) {
        
        HashSet<String> bannedSet = new HashSet<String>();
        for(String bannedWord : banned){
            bannedSet.add(bannedWord);
        }
        
        HashMap<String,Integer> wordsMap = new HashMap<String,Integer>();
        String[] paraWords = paragraph.replaceAll("[\\.\\,\\'\\\"\\!\\?\\;]"," ").replaceAll("\\s+"," ").split(" ");
        
        int highestCount = 0;
        String mostPopularWord = new String();
        for(String word : paraWords){
            String w = word.toLowerCase();
            if(!bannedSet.contains(w)){
                Integer count = wordsMap.get(w);
                int newCount = count==null ? 1 : count.intValue()+1;
                if(newCount>highestCount){
                    highestCount=newCount;
                    mostPopularWord = w;
                }
                wordsMap.put(w,newCount);    
            }
            
        }
        
        return mostPopularWord;   
    }
}