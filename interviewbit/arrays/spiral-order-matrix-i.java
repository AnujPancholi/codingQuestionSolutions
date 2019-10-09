/*
    interviewbit
    track: "programming",
    section: "Arrays",
    problem title: "Spiral Order Matrix I"
*/

public class Solution {
    // DO NOT MODIFY THE LIST. IT IS READ ONLY
    public ArrayList<Integer> spiralOrder(final List<ArrayList<Integer>> A) {
        ArrayList<Integer> sOrdList = new ArrayList<Integer>();
        int h = A.get(0).size();
        int v =A.size();
        
        int hTrav = h, vTrav = v-1;
        // System.out.println(String.valueOf(h) +" "+ String.valueOf(v));
        int dir = 1,currH=0,currV=0;
        while(hTrav>0 || vTrav>0){
            if(hTrav==0){
                break;
            }
            for(int i=0;i<hTrav;i++){
                sOrdList.add(A.get(currV).get(currH));
                currH+=dir;
            }
            currH-=dir;
            hTrav--;
            currV+=dir;
            
            if(vTrav==0){
                break;
            }
            for(int i=0;i<vTrav;i++){
                sOrdList.add(A.get(currV).get(currH));
                currV+=dir;
            }
            currV-=dir;
            dir*=-1;
            currH+=dir;
            vTrav--;
        }
        
        return sOrdList;
        
    }
}