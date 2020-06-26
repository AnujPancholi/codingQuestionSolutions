/*
    leetcode
    category: "Algorithms"
    problem title: "Find Winner on a Tic-Tac-Toe Game"
*/

class Solution {
    private char[] PLAYERS = new char[]{'A','B'};
    
    private int BOARD_SIZE=3;
    
    private HashMap<Character,Integer>[] getInitPlayerCounter(){
        return new HashMap[]{
            new HashMap<Character,Integer>(){{put('A',0);put('B',0);}},
            new HashMap<Character,Integer>(){{put('A',0);put('B',0);}},
            new HashMap<Character,Integer>(){{put('A',0);put('B',0);}}
        };
    }
    
    private HashMap<Character,Integer>[] getInitDiagonalCounter(){
        return new HashMap[]{
            new HashMap<Character,Integer>(){{put('A',0);put('B',0);}},
            new HashMap<Character,Integer>(){{put('A',0);put('B',0);}}
            
        };
    }
    
    private void printArr(HashMap<Character,Integer>[] arr){
        for(HashMap<Character,Integer> currMap : arr){
            System.out.println(currMap);
        }
    }
    
    public String tictactoe(int[][] moves) {
        
        HashMap<Character,Integer>[] rowCounts = getInitPlayerCounter();
        HashMap<Character,Integer>[] colCounts = getInitPlayerCounter();
        
        HashMap<Character,Integer>[] diagonalCounts = getInitDiagonalCounter();
        
        for(int i=0;i<moves.length;++i){
            char currentPlayer = PLAYERS[i%2];
            
            rowCounts[moves[i][0]].put(currentPlayer,rowCounts[moves[i][0]].getOrDefault(currentPlayer,0)+1);
            
            colCounts[moves[i][1]].put(currentPlayer,colCounts[moves[i][1]].getOrDefault(currentPlayer,0)+1);
            
            if(moves[i][0]==moves[i][1]){
                diagonalCounts[0].put(currentPlayer,diagonalCounts[0].getOrDefault(currentPlayer,0)+1);
            }
            
            if(moves[i][0]+moves[i][1]==(BOARD_SIZE-1)){
                diagonalCounts[1].put(currentPlayer,diagonalCounts[1].getOrDefault(currentPlayer,0)+1);
            }
            
        }
        
        StringBuilder ansBuilder = new StringBuilder("Pending");
        
        for(HashMap<Character,Integer> currMap : rowCounts){
            for(Map.Entry<Character,Integer> entry : currMap.entrySet()){
                if(entry.getValue()==(BOARD_SIZE)){
                    ansBuilder.replace(0,ansBuilder.length(),Character.toString(entry.getKey()));
                }
            }
            if(ansBuilder.length()==1){
                break;
            }
        }
        
        
        for(HashMap<Character,Integer> currMap : colCounts){
            for(Map.Entry<Character,Integer> entry : currMap.entrySet()){
                if(entry.getValue()==(BOARD_SIZE)){
                    ansBuilder.replace(0,ansBuilder.length(),Character.toString(entry.getKey()));
                }
            }
            if(ansBuilder.length()==1){
                break;
            }
        }
        
        
        
        for(HashMap<Character,Integer> currMap : diagonalCounts){
            for(Map.Entry<Character,Integer> entry : currMap.entrySet()){
                if(entry.getValue()==(BOARD_SIZE)){
                    ansBuilder.replace(0,ansBuilder.length(),Character.toString(entry.getKey()));
                }
            }
            if(ansBuilder.length()==1){
                break;
            }
        }
        
        
        
        String ansString = ansBuilder.toString();
        
        
        
        return ansString.length()>1 && moves.length==9 ? "Draw" : ansString;
        
        
        
    }
}