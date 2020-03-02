/*
    leetcode
    category: "Algorithms"
    problem title: "Perfect Number"
*/
    // alt solution 

class Solution {
    public boolean checkPerfectNumber(int num) {
        if(num==1){
            return false;
        }
        int sum=1;
        HashSet<Integer> factorSet = new HashSet<Integer>();
        int i=2;
        int upperLimit = (int)(num/2);
        while(i<upperLimit){
            if(num%i==0){
                if(!factorSet.contains(i)){
                    factorSet.add(i);
                    sum+=i;
                    upperLimit = (int)(num/i);
                    sum+=upperLimit;
                }
            }
            ++i;
        }
        return sum==num;
        
    }
}