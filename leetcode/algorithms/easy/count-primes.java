/*
    leetcode
    category: "Algorithms"
    problem title: "Count Primes"
*/

class Solution {
    public int countPrimes(int n) {
        if(n<=2){
            return 0;
        }
        int limit = (int)Math.sqrt(n);
        int[] arr = new int[n];
        for(int i=0;i<n;i++){
            if(i==0 || i==1){
                arr[i]=0;
            } else {
                arr[i]=1;
            }
        }
        for(int i=2;i<=limit;i++){
            for(int j=i*2;j<n;j+=i){
                arr[j]=0;
            }
        }
        int count=0;
        for(int i=2;i<n;i++){
            if(arr[i]>0){
                ++count;
            }
        }
        return count;
    }
}