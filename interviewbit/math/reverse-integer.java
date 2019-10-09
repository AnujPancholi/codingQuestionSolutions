/*
    interviewbit
    track: "programming",
    section: "math",
    problem title: "Reverse Integer"
*/

import java.lang.Math;
public class Solution {
    public int reverse(int A) {
        if(A<9 && A>-9){
            return A;
        }
        boolean negFlag = A<0;
        if(negFlag){
            A = -1*A;
        }
        int digitLength = 1;
        while(Math.floor((A/Math.pow(10,digitLength)))!=0)digitLength++;
        // System.out.println(digitLength);
        
        long result = 0;
        for(int i=digitLength-1,j=0;i>=0;i--,j++){
            int currentDigit = ((int)(A/Math.pow(10,i)))%10;
            result+=(long)(currentDigit*Math.pow(10,j));
            if(result>Integer.MAX_VALUE){
                return 0;
            }
        }
        if(negFlag)result = -1*result;
        return (int)result;
        
        
    }
}