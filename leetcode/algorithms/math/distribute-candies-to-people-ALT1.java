/*
    leetcode
    category: "Algorithms"
    problem title: "Distribute Candies to People"
*/

//faster, efficient O(n) solution


class Solution {
    private int sumN(int n){
        return (n*(n+1))/2;
    }
    public int[] distributeCandies(int candies, int num_people) {
        
        int[] cArr = new int[num_people];
    
        
        int completeCycles = 0;
        while(sumN(completeCycles*num_people)<=candies){
            ++completeCycles;
        }
        --completeCycles;
        
        int leftover = candies-sumN(completeCycles*num_people);
        
        for(int i=0;i<num_people;++i){
            cArr[i]=(int)((float)completeCycles*((float)i+1.0f+((float)((completeCycles-1)*num_people)/2)));
            int leftoverAmountForIndex = Math.min(num_people*(completeCycles)+i+1,leftover);
            leftover-=leftoverAmountForIndex;
            cArr[i]+=leftoverAmountForIndex;
        }
        return cArr;
    }
}