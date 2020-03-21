/*
    leetcode
    category: "Algorithms"
    problem title: "Sort Characters by Frequency"
*/

class Solution {
    public String frequencySort(String s) {
        HashMap<Character,Integer> charMap = new HashMap<Character,Integer>();
        for(int i=0;i<s.length();++i){
            char thisChar = s.charAt(i);
            Integer existingCount = charMap.get(thisChar);
            if(existingCount!=null){
                charMap.put(thisChar,existingCount.intValue()+1);
            } else {
                charMap.put(thisChar,1);
            }
        }
        StringBuilder sBuilder = new StringBuilder();
        List entryList = new LinkedList(charMap.entrySet());
        Collections.sort(entryList,new Comparator(){
            public int compare(Object o1, Object o2) {
            return ((Comparable) ((Map.Entry) (o2)).getValue())
                    .compareTo(((Map.Entry) (o1)).getValue());          
            }
        });
        Iterator it = entryList.iterator();
        while(it.hasNext()){
            Map.Entry entry = (Map.Entry) it.next();
            char thisChar = (char)entry.getKey();
            for(int i=0;i<(int)entry.getValue();++i){
                sBuilder.append(thisChar);
            }        
        }
        return sBuilder.toString();        
    }
}