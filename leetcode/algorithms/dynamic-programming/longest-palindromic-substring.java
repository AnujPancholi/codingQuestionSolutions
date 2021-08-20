class Solution {
    
    private int expandPalinFromMiddle(String s,int leftIndex,int rightIndex) {
        while(leftIndex>=0 && rightIndex<s.length() && s.charAt(leftIndex)==s.charAt(rightIndex)){
            leftIndex--;
            rightIndex++;
        }
        
        return rightIndex - leftIndex - 1;
    }
    
    public String longestPalindrome(String s) {
        
        int fIndex = 0,lIndex = 0;
        for(int i = 0;i < s.length(); ++i){
            int maxPalinLength = Math.max(
                expandPalinFromMiddle(s,i,i),
                expandPalinFromMiddle(s,i,i+1)
            );
            if(maxPalinLength>(lIndex - fIndex + 1)){
                fIndex = i - ((maxPalinLength - 1)/2);
                lIndex = i + (maxPalinLength/2);
            }
        }
        
        return s.substring(fIndex,lIndex+1);
        
        
        
    }
    
    
}