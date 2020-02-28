/*
    leetcode
    category: "Algorithms"
    problem title: "Perfect Number"
*/

class Solution {
    private ArrayList<Integer> getFactors(int num){
        ArrayList<Integer> factorsList = new ArrayList<Integer>(){
            {
                add(1);
            }
        };
        int i=2;
        while(i<(int)(num/2)){
            if(num%i==0){
                if(!factorsList.contains(i)){
                    factorsList.add(i);
                }
                if(!factorsList.contains((int)(num/i))){
                    factorsList.add((int)(num/i));
                }
            }
            ++i;
        }
        return factorsList;
    }
    public boolean checkPerfectNumber(int num) {
        int sum=0;
        for(Integer n : getFactors(num)){
            if(n.intValue()!=num){
                sum+=n.intValue();
            }
        }
        return sum==num;
        
    }
}