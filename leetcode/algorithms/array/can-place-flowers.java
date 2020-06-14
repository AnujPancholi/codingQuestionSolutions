/*
    leetcode
    category: "Algorithms"
    problem title: "Can Place Flowers"
*/


class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        int plantableCount=0;
        HashSet<Integer> plantedSet = new HashSet<Integer>();
        
        for(int i=0;i<flowerbed.length;++i){
            if(flowerbed[i]==0){
                if((i==0 || (flowerbed[i-1]!=1) && !plantedSet.contains(i-1)) && (i==flowerbed.length-1 || (flowerbed[i+1]!=1 && !plantedSet.contains(i+1)))){
                    plantableCount++;
                    plantedSet.add(i);
                }
            }
        }
        
        
        
        return n<=plantableCount;
        
    }
}