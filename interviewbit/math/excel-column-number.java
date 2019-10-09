/*
    interviewbit
    track: "programming",
    section: "math",
    problem title: "Excel Column Number"
*/
public class Solution {
    public int titleToNumber(String A) {
        int baseCharValue = 64;
        int colNo = 0;
        for(int i=A.length()-1,j=1;i>=0;i--,j++){
            // colNo+=(((int)A.charAt(i))-64) + (i*26);
            if(j-1==0){
                colNo+= (((int)A.charAt(i))-64);
            } else{
                colNo+= (((int)A.charAt(i))-64)*Math.pow(26,(j-1));
            }
            // colNo+=(((int)A.charAt(i))-64)+((j-1)*26);
        }
        return colNo;
    }
}
