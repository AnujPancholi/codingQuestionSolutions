/*
    leetcode
    category: "Algorithms"
    problem title: "Fair Candy Swap"
*/

class Solution {
    
    private int getSum(int[] arr){
        int sum = 0;
        for(int i=0;i<arr.length;++i){
            sum+=arr[i];
        }
        return sum;
    }
    
    public int[] fairCandySwap(int[] A, int[] B) {
        int[] exchangeArr = new int[2];
        
        HashSet<Integer> bSet = new HashSet<Integer>();
        
        int sumA = getSum(A);
        int sumB = getSum(B);
        int eqSize = (sumA+sumB)/2;
        
        for(int b : B){
            bSet.add(b);
        }
        
        for(int a : A){
            int reducedSum = sumA-a;
            if(reducedSum>=eqSize){
                continue;
            }
            if(bSet.contains(eqSize-reducedSum)){
                exchangeArr[0] = a;
                exchangeArr[1] = eqSize-reducedSum;
                break;
            }
        }
        
        return exchangeArr;
            
    }
}