/*
	leetcode
	category: "Algorithms"
	problem title: "Teemo Attacking"
*/


class Solution {
    public int findPoisonedDuration(int[] timeSeries, int duration) {
        int totalPoisonTime = 0;
        int low=0,high=0;
        boolean isOverlap=false;
        for(int i=0;i<timeSeries.length;++i){
            int t=timeSeries[i]-1;
            if(!isOverlap){
                low=t;    
            }
            high=t+duration;
            if(i!=timeSeries.length-1 && timeSeries[i+1]-1<high){
                isOverlap=true;
            } else {
                isOverlap=false;
            }
            if(!isOverlap){
                totalPoisonTime+=(high-low);
            }
        }
        return totalPoisonTime;
    }
}