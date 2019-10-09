/*
    interviewbit
    track: "programming",
    section: "math",
    problem title: "Trailing Zeroes in Factorial"
*/

import java.lang.Math;
public class Solution {
    public int trailingZeroes(int A) {
        int maxPowFive = ((int)(Math.log(A)/Math.log(5)));
        int extraFives = 0;
        for(int i=2;i<=maxPowFive;i++){
            extraFives+=(A/Math.pow(5,i));
        }
        int fives = (int)(A/5);
        return fives+extraFives;
    }
}