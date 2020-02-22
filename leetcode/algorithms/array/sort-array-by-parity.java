/*
	leetcode
	category: "Algorithms"
	problem title: "Sort Array by Parity"
*/


class Solution {
    public int[] sortArrayByParity(int[] A) {
        int[] sortedA = new int[A.length];
        ArrayList<Integer> evenList = new ArrayList<Integer>();
        ArrayList<Integer> oddList = new ArrayList<Integer>();
        for(int i=0;i<A.length;++i){
            int a = A[i];
            if(a%2==0){
                // ++evenPointer;
                // sortedA[evenPointer]=a;
                evenList.add(a);
            } else {
                // ++oddPointer;
                // sortedA[oddPointer]=a;
                oddList.add(a);
            }
        }
        int c=0;
        for(Integer n : evenList){
            sortedA[c]=n.intValue();
            ++c;
        }
        for(Integer n : oddList){
            sortedA[c]=n.intValue();
            ++c;
        }
        
        return sortedA;
        
    }
}