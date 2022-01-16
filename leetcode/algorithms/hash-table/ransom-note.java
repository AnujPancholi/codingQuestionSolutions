/*
    leetcode
    category: "Algorithms"
    problem title: "Ransom Note"
*/

class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        HashMap<Character,Integer> magMap = new HashMap<Character,Integer>();
        
        for(int i = 0;i<magazine.length();++i){
            char c = magazine.charAt(i);
            magMap.put(c,magMap.getOrDefault(c,0)+1);
        }
        
        boolean isValidConstruction = true;
        for(int i = 0;i<ransomNote.length();++i){
            char c = ransomNote.charAt(i);
            int existingCount = magMap.getOrDefault(c,0);
            if(existingCount==0){
                isValidConstruction = false;
                break;
            }
            magMap.put(c,existingCount-1);
        }
        
        return isValidConstruction;
        
    }
}