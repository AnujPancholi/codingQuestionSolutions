/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Only Letters"
*/

class Solution {
    public String reverseOnlyLetters(String S) {
        ArrayList<Integer> letterIndices = new ArrayList<Integer>();
        StringBuilder reverseBuilder = new StringBuilder(S.length());
        for(int i=0;i<S.length();++i){
            if(Character.isLetter(S.charAt(i))){
                letterIndices.add(i);
            }
            reverseBuilder.append(S.charAt(i));
        }
        
        for(int i=0;i<Math.floor(letterIndices.size()/2);++i){
            int thisIndex = letterIndices.get(i).intValue();
            int swapIndex = letterIndices.get((letterIndices.size()-i)-1).intValue();
            char temp = reverseBuilder.charAt(thisIndex);
            reverseBuilder.setCharAt(thisIndex,reverseBuilder.charAt(swapIndex));
            reverseBuilder.setCharAt(swapIndex,temp);
        }
        return reverseBuilder.toString();
        
    }
}