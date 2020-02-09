/*
    leetcode
    category: "Algorithms"
    problem title: "Distance Between Bus Stops"
*/

class Solution {
    public int distanceBetweenBusStops(int[] distance, int start, int destination) {
        
        int cDist=0, acDist=0, cDest=start, acDest=start;
        
        while(cDest!=destination || acDest!=destination){
            if(cDest!=destination){
                cDist+=distance[cDest];
                cDest=(cDest+1)%distance.length;
            }
            if(acDest!=destination){
                --acDest;
                if(acDest<0){
                    acDest+=distance.length;
                }
                acDist+=distance[acDest];
            }
        }
        
        return Math.min(cDist,acDist);
        
    }
}