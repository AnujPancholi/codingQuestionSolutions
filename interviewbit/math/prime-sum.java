/*
    interviewbit
    track: "programming"
    section: "math"
    problem title: "Prime Sum"
*/
public class Solution {
    public ArrayList<Integer> primesum(int A) {
        int[] primes = new int[A+1];
        ArrayList<Integer> primesList = new ArrayList<Integer>();
        for(int i=0;i<A+1;i++){
            if(i>=2){
                primes[i]=1;    
            } else {
                primes[i]=0;
            }
        }
        int c=2;
        for(c=2;c<=Math.floor(Math.sqrt(A));c++){
            if(primes[c]==0){
                continue;
            }
            primes[c]*=c;
            primesList.add(primes[c]);
            for(int j=c*2;j<A+1;j+=c){
                primes[j]=0;
            }
        }
        // c--;
        for(;c<A+1;c++){
            if(primes[c]!=0){
                primesList.add(c);
            }
        }
        
        // return primesList;
        ArrayList<Integer> answerPair = new ArrayList<Integer>();
        for(int i=0;i<primesList.size();i++){
            if(primesList.get(i)*2==A){
                answerPair.add(primesList.get(i));
                answerPair.add(primesList.get(i));
                // return answerPair;
                break;
            }
            int complement = A-primesList.get(i);
            if(primesList.contains(complement)){
                answerPair.add(primesList.get(i));
                answerPair.add(complement);
                // return answerPair;
                break;
            }
        }
        return answerPair;
        
    }
}