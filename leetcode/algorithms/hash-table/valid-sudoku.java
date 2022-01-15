class Solution {
    public String getQuadrantStr(int r,int c,int quadSize){
        String rowString = Integer.toString(r/quadSize);
        String colString = Integer.toString(c/quadSize);
        return rowString+","+colString;
    }
    public boolean isValidSudoku(char[][] board) {
        HashMap<Integer,HashSet<Character>> rowSetMap = new HashMap<Integer,HashSet<Character>>();
        HashMap<Integer,HashSet<Character>> colSetMap = new HashMap<Integer,HashSet<Character>>();
        HashMap<String,HashSet<Character>> quadrantSetMap = new HashMap<String,HashSet<Character>>();
        
        int quadrantSize = 3;
        boolean isValid = true;
        for(int i=0;i<board.length;++i){
            for(int j=0;j<board[0].length;++j){
                if(board[i][j]=='.'){
                    continue;
                }
                HashSet<Character> rowSet = rowSetMap.getOrDefault(i,null);
                if(rowSet==null){
                    rowSet = new HashSet<Character>();
                }
                if(rowSet.contains(board[i][j])){
                    isValid = false;
                    break;
                }
                rowSet.add(board[i][j]);
                rowSetMap.put(i,rowSet);
                
                HashSet<Character> colSet = colSetMap.getOrDefault(j,null);
                if(colSet==null){
                    colSet = new HashSet<Character>();
                }
                if(colSet.contains(board[i][j])){
                    isValid = false;
                    break;
                }
                colSet.add(board[i][j]);
                colSetMap.put(j,colSet);
                
                String quadrantStr = getQuadrantStr(i,j,quadrantSize);
                HashSet<Character> quadrantSet = quadrantSetMap.getOrDefault(quadrantStr,null);
                if(quadrantSet==null){
                    quadrantSet = new HashSet<Character>();
                }
                if(quadrantSet.contains(board[i][j])){
                    isValid = false;
                    break;
                }
                quadrantSet.add(board[i][j]);
                quadrantSetMap.put(quadrantStr,quadrantSet);
            }
        }
        
        // System.out.println(quadrantSetMap);
        // System.out.println(rowSetMap);
        // System.out.println(colSetMap);

        return isValid;
    }
}