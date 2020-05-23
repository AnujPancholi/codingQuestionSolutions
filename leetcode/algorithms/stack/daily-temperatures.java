/*
    leetcode
    category: "Algorithms"
    problem title: "Daily Temperatures"
*/

class Record {
    public int dayIndex;
    public int temperature;
    public Record(int _index,int _temp){
        dayIndex = _index;
        temperature = _temp;
    }
}


class Solution {
    public int[] dailyTemperatures(int[] T){
        int[] ansArr = new int[T.length];
        
        Stack<Record> tempStack = new Stack<Record>();
        
        for(int i=T.length-1;i>=0;--i){
            while(!tempStack.empty() && tempStack.peek().temperature<=T[i]){
                tempStack.pop();
            }
            if(!tempStack.empty()){
                ansArr[i] = tempStack.peek().dayIndex - i;
            } else {
                ansArr[i] = 0;
            }
            
            tempStack.push(new Record(i,T[i]));
        }
        return ansArr;
    }
}