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
        while(i<(int)(num/2)){
            if(num%i==0){
                if(!factorSet.contains(i)){
                    factorSet.add(i);
                    sum+=i;
                }
                if(!factorSet.contains((int)(num/i))){
                    factorSet.add((int)(num/i));
                    sum+=(int)(num/i);
                }
            }
            ++i;
        }
        return sum==num;
        
    }
}