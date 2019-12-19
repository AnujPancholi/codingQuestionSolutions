/*
    leetcode
    category: "Algorithms"
    problem title: "Number Complement"
*/


class Solution {
    public int findComplement(int num) {
        int nBits = 0,numCopy = num;
        
        while(numCopy>0){
            ++nBits;
            numCopy = (int)numCopy/2;
        }
       
        
        int complementorNum = 0;
        for(int i=0;i<nBits;i++){
            complementorNum+=Math.pow(2,i);
        }
        
        return num^complementorNum;
        
    }
}