class Solution {
    
    private String getSortedString(String str){
        char[] chars = str.toCharArray();
        Arrays.sort(chars);
        return String.valueOf(chars);
    }
    
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> anagramMap = new HashMap<String,List<String>>();
        
        for(String str : strs){
            String anaSig = getSortedString(str);
            List<String> existingList = anagramMap.getOrDefault(anaSig,null);
            if(existingList==null){
                anagramMap.put(anaSig,new ArrayList<String>(Arrays.asList(str)));
            } else {
                existingList.add(str);
            }
        }
        
        List<List<String>> groupedAnagramList = new ArrayList<List<String>>();
        
        for(Map.Entry<String,List<String>> entry : anagramMap.entrySet()){
            groupedAnagramList.add(entry.getValue());
        }
        
        return groupedAnagramList;
    }
}