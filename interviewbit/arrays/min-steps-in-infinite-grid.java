/*
    interviewbit
    track: "programming"
    section: "arrays"
    problem title: "Min Steps in Infinite Grid"
*/

public class Solution {
    
    private int calculateSteps(int[] start, int[] end){
        int numSteps = 0, xDir=1,yDir=1;
        
        numSteps = Math.max(Math.abs(end[0]-start[0]),Math.abs(end[1]-start[1]));
        
        /*
            @dded later: the following mess is because I came up with an O(n) solution
            to find the min number of steps to get from one point to the other
            BEFORE I figured out that there was an O(1) way to do it
            This also explains the xDir and yDir variables declared above, which were never used.
        */ 
        /*if(start[0]>end[0]){
            xDir=-1;
        }
        if(start[1]>end[1]){
            yDir=-1;
        }*/
        /*while(start[0]!=end[0] && start[1]!=end[1]){
            if(start[0]!=end[0]){
                start[0]+=xDir;
            }
            if(start[1]!=end[1]){
                start[1]+=yDir;
            }
            numSteps++;
        }*/
        
        return numSteps;
    }
    public int coverPoints(ArrayList<Integer> A, ArrayList<Integer> B) {
        int[] currentPoint = new int[2];
        int[] nextPoint = new int[2];
        int numSteps = 0;
        
        for(int i=0;i<A.size()-1;i++){
            currentPoint[0]=A.get(i);
            currentPoint[1]=B.get(i);
            nextPoint[0]=A.get(i+1);
            nextPoint[1]=B.get(i+1);
            numSteps+=calculateSteps(currentPoint,nextPoint);    
        }
        
        return numSteps;
    }
}
