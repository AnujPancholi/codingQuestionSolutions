/*
    interviewbit
    track: "programming",
    section: "math",
    problem title: "Excel Column Title"
*/

public class Solution {
    public String convertToTitle(int A) {
        int maxPow = 0;
        int baseNum = 64;
        // while((int)(A/Math.pow(26,maxPow))>0)maxPow++;
        // System.out.println(maxPow);
        StringBuilder colString = new StringBuilder();
        int div = A;
        while(div>0){
            int rem = div%26;
            if(rem==0){
                colString.append('Z');
                div = (int)(div/26) - 1;
            } else {
                colString.append((char)(baseNum+rem));
                div = (int)(div/26);
            }
        }
            
        return colString.reverse().toString();
        
        
        // return "0";
    }
}