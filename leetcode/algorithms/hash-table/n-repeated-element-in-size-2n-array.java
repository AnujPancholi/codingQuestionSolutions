/*
    leetcode
    category: "Algorithms"
    problem title: "N-repeated Element in Size 2N Array"
*/

class Solution {
    public int repeatedNTimes(int[] A) {
        int n=A.length;
        int requiredNumber = 0;
        HashMap<Integer,Integer> countMap = new HashMap<Integer,Integer>();
        for(int a : A){
            Integer existingCount = countMap.get(a);
            int countForNumber = existingCount==null ? 1 : (existingCount.intValue()+1);
            if(countForNumber==(n/2)){
                requiredNumber = a;
                break;
            }
            countMap.put(a,countForNumber);
        }
        return requiredNumber;
    }
}