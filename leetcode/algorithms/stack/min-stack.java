/*
    leetcode
    category: "Algorithms"
    problem title: "Min Stack"
*/

    //stack + variable approach

class MinStack {

    /** initialize your data structure here. */
    Stack<Integer> stack = null;
    Integer min = null;
    
    public MinStack() {
        stack = new Stack<Integer>();
        min = null;
        
    }
    
    public void push(int x) {
        if(min==null){
            min=x;
        } else if(min>=x){
            stack.push(min);
            min = x;
        }
        stack.push(x);
    }
    
    public void pop() {
        Integer poppedInt = stack.pop();
        if(poppedInt.intValue()==min.intValue()){
            if(stack.size()>0){
                min = stack.pop();
            } else {
                min=null;
            }
        }
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */