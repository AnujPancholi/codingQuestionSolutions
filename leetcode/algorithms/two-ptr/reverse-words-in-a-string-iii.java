class Solution {
    private void reverseWord(char[] S, int startIndex,int endIndex){
        int midIndex = startIndex + ((endIndex - startIndex)/2);
        while(startIndex<=midIndex){
            char temp = S[startIndex];
            S[startIndex] = S[endIndex];
            S[endIndex] = temp;
            ++startIndex;
            --endIndex;
        }
    }
    public String reverseWords(String s) {
        
        char[] S = s.toCharArray();
        
        int t = 0,l = 0;
        
        while(t<S.length){
            if(l==S.length || S[l]==' '){
                 reverseWord(S,t,l-1);
                t = l+1;
                l = l+1;
            } else {
                ++l;
            }
        }
        return new String(S);
    }
}