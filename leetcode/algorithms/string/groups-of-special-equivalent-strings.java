/*
    leetcode
    category: "Algorithms"
    problem title: "Groups of Special Equivalent Strings"
*/

class Solution {
    private String getKey(String s){
        StringBuilder[] keyBuilders = new StringBuilder[]{ new StringBuilder(""), new StringBuilder("")};
        // StringBuilder evenBuilder = new StringBuilder("");
        // StringBuilder oddBuilder = new StringBuilder("");
        
        for(int i=0;i<s.length();++i){
            keyBuilders[i%2].append(s.charAt(i));
        }
        
        char[] arr1 = new char[keyBuilders[0].length()];
        char[] arr2 = new char[keyBuilders[1].length()];
        keyBuilders[0].getChars(0,keyBuilders[0].length(),arr1,0);
        keyBuilders[1].getChars(0,keyBuilders[1].length(),arr2,0);
        
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        
        char[] keyArr = new char[arr1.length+arr2.length];
        int i=0;
        for(char c : arr1){
            keyArr[i]=c;
            ++i;
        }
        for(char c : arr2){
            keyArr[i]=c;
            ++i;
        }
        
        return new String(keyArr);
        
        // return keyBuilders[0].toString();
        
    }
    
    public int numSpecialEquivGroups(String[] A) {
        
        HashSet<String> keySet = new HashSet<String>();
        
        for(String s : A){
            
            keySet.add(getKey(s));
        }
        
        return keySet.size();
        
        
    }
}