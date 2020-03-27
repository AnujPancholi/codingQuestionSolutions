/*
    leetcode
    category: "Algorithms"
    problem title: "Shortest Distance to a Character"
*/

class Solution {
    public int[] shortestToChar(String S, char C) {
        ArrayList<Integer> tIndices = new ArrayList<Integer>();
        for(int i=0;i<S.length();++i){
            if(C==S.charAt(i)){
                tIndices.add(i);
            }
        }
        
        int[] ansArr = new int[S.length()];
        for(int i=0;i<S.length();++i){
            int minMoves = -1,j=0;
            while(j<tIndices.size()-1 && tIndices.get(j).intValue()<i){
                ++j;
            }
            if(j==0 || j==S.length()-1){
                minMoves=Math.abs(tIndices.get(j).intValue()-i);
            } else {
                minMoves = Math.min(Math.abs(tIndices.get(j).intValue()-i),Math.abs(tIndices.get(j-1).intValue()-i));
            }
            ansArr[i]=minMoves;
        }
        
        return ansArr;
    }
}