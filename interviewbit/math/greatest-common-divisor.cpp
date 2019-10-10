/*
    interviewbit
    track: "programming"
    section: "math",
    problem title: "Greatest Common Divisor"
*/

/**
 * @input A : Integer
 * @input B : Integer
 * 
 * @Output Integer
 */
int gcd(int A, int B) {
    if(A==B)return A;
    if(B>A){
        int temp = A;
        A = B;
        B = temp;
    }
    if(B==0)return A;
    int rem=A%B;
    if(rem==0){
        return B;
    } else {
        return gcd(B,rem);
    }
    
}