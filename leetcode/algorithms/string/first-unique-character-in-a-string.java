class Solution {
    public int firstUniqChar(String s) {
        HashMap<Character,Integer> uniqueCharMap = new HashMap<Character,Integer>();
        HashSet<Character> repeatingCharSet = new HashSet<Character>();
        
        for(int i=0;i<s.length();++i){
            char c = s.charAt(i);
            if(repeatingCharSet.contains(c)){
                continue;
            }
            Integer charIndex = uniqueCharMap.getOrDefault(c,null);
            if(charIndex!=null){
                uniqueCharMap.remove(c);
                repeatingCharSet.add(c);
            } else {
                uniqueCharMap.put(c,i);
            }
        }
        
        
        Iterator<Map.Entry<Character,Integer>> itr = uniqueCharMap.entrySet().iterator();
        
        if(!itr.hasNext()){
            return -1;
        }
        
        int minValue = Integer.MAX_VALUE;
        
        while(itr.hasNext()){
            Map.Entry<Character,Integer> entry = itr.next();    
            minValue = Math.min(minValue,entry.getValue()); 
        }
        return minValue;
        
        
    }
}