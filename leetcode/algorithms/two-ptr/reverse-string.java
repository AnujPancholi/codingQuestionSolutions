class Solution {
    public void reverseString(char[] s) {
        int i = 0,len = s.length - 1;
        int mid = s.length/2;
        while(i<mid){
            char temp = s[i];
            s[i] = s[len - i];
            s[len - i] = temp;
            ++i;
        }
    }
}