/*
    leetcode
    category: "Algorithms"
    problem title: "Implement Stack Using Queues"
*/


class MyStack {

    Queue<Integer> mainQueue = null;
    Queue<Integer> auxiliaryQueue = null;
    /** Initialize your data structure here. */
    public MyStack() {
        mainQueue = new LinkedList<Integer>();
        auxiliaryQueue = new LinkedList<Integer>();
    }
    
    /** Push element x onto stack. */
    public void push(int x) {
        if(mainQueue.size()==0){
            mainQueue.add(x);
        } else {
            while(mainQueue.size()>0){
                auxiliaryQueue.add(mainQueue.poll());
            }
            mainQueue.add(x);
            while(auxiliaryQueue.size()>0){
                mainQueue.add(auxiliaryQueue.poll());
            }
        }
    }
    
    /** Removes the element on top of the stack and returns that element. */
    public int pop() {
        return mainQueue.poll();
    }
    
    /** Get the top element. */
    public int top() {
        return mainQueue.peek();
    }
    
    /** Returns whether the stack is empty. */
    public boolean empty() {
        return mainQueue.size()==0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */