/*
    leetcode
    category: "Algorithms"
    problem title: "Group Anagrams"
*/

class Solution {
    private String getSortedString(String str){
        char[] strCharArr = str.toCharArray();
        Arrays.sort(strCharArr);
        return new String(strCharArr);
    }
    
    public List<List<String>> groupAnagrams(String[] strs) {
        
        ArrayList<List<String>> ansList = new ArrayList<List<String>>();
        HashMap<String,ArrayList<String>> stringMap = new HashMap<String,ArrayList<String>>();
        
        for(String str : strs){
            String sortedStr = getSortedString(str);
            ArrayList<String> existingList = stringMap.getOrDefault(sortedStr,null);
            if(existingList!=null){
                existingList.add(str);
            } else {
                stringMap.put(sortedStr,new ArrayList<String>(Arrays.asList(str)));
            }
        }
        
        for(Map.Entry<String,ArrayList<String>> entry : stringMap.entrySet()){
            ansList.add(entry.getValue());
        }
        
        
        return ansList;
        
        
    }
}
