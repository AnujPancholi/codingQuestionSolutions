/*
    leetcode
    category: "Algorithms"
    problem title: "Reverse Only Letters"
*/

    //Alternative solution. Slightly faster, more elegant

class Solution {
    public String reverseOnlyLetters(String S) {
        
        StringBuilder revBuilder = new StringBuilder(S);
        
        int i=0,j=S.length()-1;
        while(true){
            while(i<S.length() && !Character.isLetter(revBuilder.charAt(i)))i++;
            while(j>-1 && !Character.isLetter(revBuilder.charAt(j)))j--;
            if(j-i<=0){
                break;
            }
            char temp = revBuilder.charAt(i);
            revBuilder.setCharAt(i,revBuilder.charAt(j));
            revBuilder.setCharAt(j,temp);
            ++i;
            --j;
        }
        
        return revBuilder.toString();
    }
}