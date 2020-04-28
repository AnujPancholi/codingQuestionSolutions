/*
    leetcode
    category: "Algorithms"
    problem title: "Implement Queue Using Stacks"
*/

class MyQueue {
    
    Stack<Integer> mainStack = null;
    Stack<Integer> auxiliaryStack = null;
    
    /** Initialize your data structure here. */
    public MyQueue() {
        mainStack = new Stack<Integer>();
        auxiliaryStack = new Stack<Integer>();
    }
    
    /** Push element x to the back of queue. */
    public void push(int x) {
        if(mainStack.empty()){
            mainStack.push(x);
        } else {
            while(!mainStack.empty()){
                auxiliaryStack.push(mainStack.pop());
            }
            mainStack.push(x);
            while(!auxiliaryStack.empty()){
                mainStack.push(auxiliaryStack.pop());
            }
        }
    }
    
    /** Removes the element from in front of queue and returns that element. */
    public int pop() {
        return mainStack.pop();
    }
    
    /** Get the front element. */
    public int peek() {
        return mainStack.peek();
    }
    
    /** Returns whether the queue is empty. */
    public boolean empty() {
        return mainStack.empty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */