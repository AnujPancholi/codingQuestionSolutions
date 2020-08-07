/*
    leetcode
    category: "Algorithms"
    problem title: "Ransom Note"
*/

class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        
        HashMap<Character,Integer> magMap = new HashMap<Character,Integer>();
        
        for(int i=0;i<magazine.length();++i){
            magMap.put(magazine.charAt(i),magMap.getOrDefault(magazine.charAt(i),0)+1);
        }
        
        // System.out.println(magMap);
        
        boolean canConstNote=true;
        for(int i=0;i<ransomNote.length();++i){
            int existingCount = magMap.getOrDefault(ransomNote.charAt(i),0);
            
            if(existingCount==0){
                canConstNote=false;
                break;
            }
            
            magMap.put(ransomNote.charAt(i),existingCount-1);
        }
        
        return canConstNote;
        
    }
}