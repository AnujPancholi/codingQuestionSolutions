/*
    leetcode
    category: "Algorithms"
    problem title: "Letter Case Permutation"
*/


class Solution {
    private boolean isChar(char c){
        int A=65;
        if((((int)c)>=A && ((int)c)<(A+26))
              || ((int)c)>=(A+32) && ((int)c)<=(A+32+26)){
                return true;
            }
            return false;
    }
    
    private char flipCase(char c){
        char newC = 'c';
        if(Character.isUpperCase(c)){
            newC = Character.toLowerCase(c);
        } else {
            newC = Character.toUpperCase(c);
        }
        return newC;
    }
    
    private void addPerms(int startIndex,String S,List<String> wordList){
        if(startIndex>(S.length()-1)){
            return;
        }
        char c = S.charAt(startIndex);
        if(isChar(c)){
            addPerms(startIndex+1,S,wordList);
            char flippedC = flipCase(c);
            String prefixS = S.substring(0,startIndex);
            String remS = S.substring(startIndex+1);
            String newS = prefixS.concat((new String(Character.toString(flippedC)))).concat(remS);
            wordList.add(newS);
            addPerms(startIndex+1,newS,wordList);
        } else {
            addPerms(startIndex+1,S,wordList);
        }
        
    }
    
    public List<String> letterCasePermutation(String S) {
        int A=65;
        List<String> wordList = new ArrayList<String>();
        wordList.add(S);
        addPerms(0,S,wordList);
        
        return wordList;
        
        
        
        
    }
}