/*
    interviewbit
    track: "programming",
    section: "math",
    problem title: "Palindrome Integer"
*/

import java.lang.Math;

public class Solution {
    public int isPalindrome(int A) {
        if(A>=0 && A<10){
            return 1;
        }
        if(A<0)return 0;
        int length = 0,cpA=A;
        for(;cpA>0;length++){
            cpA/=10;
        }
        // System.out.println(length);
        // int result = 1;
        for(int i=1;i<=length/2;i++){
            // System.out.println(String.valueOf(Math.floor(A/Math.pow(10,length-i)))+String.valueOf(Math.pow(10,i-1))+String.valueOf(2%1));
         if(Math.floor((A%Math.pow(10,i))/(Math.pow(10,i-1)))!=Math.floor(A/(Math.pow(10,length-i)))%10){
             return 0;
         }   
        }
        return 1;
    }
}