/*
    leetcode
    category: "Algorithms"
    problem title: "Keyboard Row"
*/

class Solution {
    private HashSet<Character> row2Set = new HashSet<Character>(Arrays.asList('a','s','d','f','g','h','j','k','l'));
    
    private HashSet<Character> row1Set = new HashSet<Character>(Arrays.asList('q','w','e','r','t','y','u','i','o','p'));
    
    private HashSet<Character> row3Set = new HashSet<Character>(Arrays.asList('z','x','c','v','b','n','m'));
    
    private boolean checkForOneRow(String word){
        char currentChar = Character.toLowerCase(word.charAt(0));
        boolean setFound = false;
        HashSet<Character> currentSet = null;
        if(this.row1Set.contains(currentChar)){
            currentSet = this.row1Set;
            setFound=true;
        }
        if(!setFound && this.row2Set.contains(currentChar)){
            currentSet = this.row2Set;
            setFound=true;
        }
        if(!setFound && this.row3Set.contains(currentChar)){
            currentSet = this.row3Set;
            setFound=true;
        }
        boolean result = true;
        for(int i=1;i<word.length();i++){
            if(!currentSet.contains(Character.toLowerCase(word.charAt(i)))){
                result=false;
                break;
            }
        }
        return result;
    }
    
    private String[] getStringArray(ArrayList<String> stringList){
        String[] strArr = new String[stringList.size()];
        for(int i=0;i<stringList.size();i++){
            strArr[i] = (String)stringList.get(i);
        }
        return strArr;
        
    }
    
    public String[] findWords(String[] words) {
        
        ArrayList<String> qualifiedStrings = new ArrayList<String>();
        for(int i=0;i<words.length;i++){
            if(checkForOneRow(words[i])){
                qualifiedStrings.add((String)words[i]);
            }
        }
        // return qualifiedStrings.toArray();
        return getStringArray(qualifiedStrings);
        
        // System.out.println(checkForOneRow("alask"));
        // return new String[]{"fin"};
    }
}