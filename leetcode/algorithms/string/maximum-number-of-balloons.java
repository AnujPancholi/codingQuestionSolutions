/*
    leetcode
    category: "Algorithms"
    problem title: "Maximum Number of Balloons"
*/

class Solution {
    
    private HashMap<Character,Integer> targetWordMap = new HashMap<Character,Integer>(){{
            put('b',1);
            put('a',1);
            put('l',2);
            put('o',2);
            put('n',1);
        }};
    public int maxNumberOfBalloons(String text) {
        HashMap<Character,Integer> textMap = new HashMap<Character,Integer>();
        
        for(int i=0;i<text.length();++i){
            char currChar = text.charAt(i);
            Integer currVal = textMap.get(currChar);
            if(currVal==null){
                textMap.put(currChar,1);
            } else {
                textMap.put(currChar,currVal+1);
            }
        }
        int minSupportedCount = 0;
        for(Map.Entry<Character,Integer> entry : targetWordMap.entrySet()){
            char currChar = entry.getKey();
            Integer currCharCount = textMap.get(currChar);
            if(currCharCount==null){
                minSupportedCount=0;
                break;
            }
            int currSupportedValue = (int)(currCharCount/entry.getValue());
            if(minSupportedCount==0 || currSupportedValue<minSupportedCount){
                minSupportedCount=currSupportedValue;
            }
        }
        
        return minSupportedCount;
        
        
    }
}