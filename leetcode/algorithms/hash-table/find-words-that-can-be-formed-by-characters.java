/*
    leetcode
    category: "Algorithms"
    problem title: "Find Words that can be Formed by Characters"
*/

    class ExtendedString {

        private HashMap<Character,Integer> charsMap = new HashMap<Character,Integer>();

        public String value;
        ExtendedString(String s){
            this.value = s;
            for(int i=0;i<s.length();++i){
                Character currentChar = s.charAt(i);
                if(this.charsMap.containsKey(currentChar)){
                    int count = this.charsMap.get(currentChar);
                    this.charsMap.put(currentChar,count+1);
                } else {
                    this.charsMap.put(currentChar,1);
                }
            }

        }

        public HashMap<Character,Integer> getCharsMap(){
            return this.charsMap;
        }

    }

class Solution {
    public int countCharacters(String[] words, String chars) {
        ExtendedString[] extStrings = new ExtendedString[words.length];
        
        HashMap<Character,Integer> givenCharsMap = new HashMap<Character,Integer>();
        
        for(int i=0;i<chars.length();++i){
            Character currentChar = chars.charAt(i);
            if(givenCharsMap.containsKey(currentChar)){
                int count = givenCharsMap.get(currentChar);
                givenCharsMap.put(currentChar,count+1);
            } else {
                givenCharsMap.put(currentChar,1);
            }
        }
        
        int finalCount=0;
        
        for(int i=0;i<words.length;++i){
            extStrings[i] = new ExtendedString(words[i]);
            HashMap<Character,Integer> cMap = extStrings[i].getCharsMap();
            boolean isStringMade = true;
            for(Map.Entry<Character,Integer> cEntry : cMap.entrySet()){
                if(!givenCharsMap.containsKey(cEntry.getKey()) || givenCharsMap.get(cEntry.getKey())<cEntry.getValue()){
                    isStringMade=false;
                    break;
                }
            }
            if(isStringMade){
                finalCount+=extStrings[i].value.length();
            }
        }
        
        return finalCount;    
        
    }
}