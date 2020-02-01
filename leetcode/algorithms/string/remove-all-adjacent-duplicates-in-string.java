/*
    leetcode
    category: "Algorithms"
    problem title: "Remove all Adjacent Duplicates in String"
*/

class Solution {
    private String removeAdjacentDuplicates(String S){
        StringBuilder result = new StringBuilder("");
        for(int i=0;i<S.length();){
            int j=i+1;
            if(j<S.length() && S.charAt(i)==S.charAt(j)){
                i+=2;
            } else {
                result.append(Character.toString(S.charAt(i)));
                ++i;
            }
        }
        return result.toString();
    }
    public String removeDuplicates(String S) {
        String lastString = S;
        while(true){
            String nextString = removeAdjacentDuplicates(lastString);
            if(nextString.equals(lastString)){
                break;
            }
            lastString=nextString;
        }
        return lastString;
        
    }
}