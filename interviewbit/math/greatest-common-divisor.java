/*
    interviewbit
    track: "programming",
    section: "math",
    problem title: "Greatest Common Divisor"
*/

public class Solution {
    public int gcd(int A, int B) {
        if(A==B){
            return A;
        }
        int temp;
        if(B>A){
            temp=B;
            B=A;
            A=temp;
        }
        if(B==0){
            return A;
        }
        
        int rem = A%B;
        if(rem==0){
            return B;
        } else {
            return gcd(B,rem);
        }
    }
}