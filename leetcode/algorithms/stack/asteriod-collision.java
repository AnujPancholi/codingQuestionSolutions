/*
    leetcode
    category: "Algorithms"
    problem title: "Asteroid Collision"
*/

class Solution {
    
    private Integer getCollisionResult(int ast1,int ast2){
        Integer resultAst = null;
        int absDiff = Math.abs(ast1)-Math.abs(ast2);
        if(absDiff>0){
            resultAst = ast1;
        } else if(absDiff<0){
            resultAst = ast2;
        }
        return resultAst;
    }
    public int[] asteroidCollision(int[] asteroids) {
        Stack<Integer> asteroidStack = new Stack<Integer>();
        
        for(int ast : asteroids){
            Integer astToAdd = ast; 
            while(astToAdd!=null && !asteroidStack.empty() 
                  && (asteroidStack.peek()>0 && astToAdd<0)){
                astToAdd = getCollisionResult(asteroidStack.pop(),astToAdd);
            }
            if(astToAdd!=null){
                asteroidStack.push(astToAdd);
            }
        }
        
        int[] ansArr = new int[asteroidStack.size()];
        int i=ansArr.length-1;
        while(!asteroidStack.empty()){
            ansArr[i]=asteroidStack.pop();
            --i;
        }
        return ansArr;
        
    }
}