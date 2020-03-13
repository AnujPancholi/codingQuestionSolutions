/*
    leetcode
    category: "Algorithms"
    problem title: "Print Words Vertically"
*/

class Solution {
    public List<String> printVertically(String s) {
        List<StringBuilder> vertList = new ArrayList<StringBuilder>();
        
        int longestWordLength = 0,wordLength=0;
        List<Integer> wordStartIndices = new ArrayList<Integer>();
        wordStartIndices.add(0);
        for(int i=0;i<=s.length();++i){
            if(i!=s.length() && s.charAt(i)!=' '){
                ++wordLength;
            } else {
                if(wordLength>longestWordLength){
                    longestWordLength=wordLength;
                }
                if(i!=s.length()){
                    wordStartIndices.add(i+1);
                }
                wordLength=0;
            }
        }
        
        int vertListIndex=0;
        while(vertListIndex<longestWordLength){
            vertList.add(new StringBuilder(""));
            for(int i=0;i<wordStartIndices.size();++i){
                int index = wordStartIndices.get(i);
                
                if(index<s.length() && s.charAt(index)!=' '){
                    vertList.get(vertListIndex).append(s.charAt(index));
                    wordStartIndices.set(i,index+1);
                } else {
                    vertList.get(vertListIndex).append(' ');
                }
            }
            ++vertListIndex;
        }
        
        List<String> ansList = new ArrayList<String>();
        
        for(StringBuilder sb : vertList){
            int tIndex = sb.length()-1;
            while(sb.charAt(tIndex)==' '){
                sb.deleteCharAt(tIndex);
                tIndex--;
            }
            ansList.add(sb.toString());
        }
        return ansList;
    }
}