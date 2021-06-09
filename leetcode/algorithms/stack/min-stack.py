class MinStack(object):

    def __init__(self):
        """
        initialize your data structure here.
        """
        
        self.stack = [];
        self.min = None;
        

    def push(self, val):
        """
        :type val: int
        :rtype: None
        """
        if self.min==None:
            self.min = val
            
        if val<=self.min:
            self.stack.append(self.min);
            self.min=val;
        
        self.stack.append(val);
            
        

    def pop(self):
        """
        :rtype: None
        """
        
        poppedVal = self.stack.pop();
        if poppedVal==self.min:
            self.min = self.stack.pop();
            
        if len(self.stack)==0:
            self.min=None
        
    def top(self):
        """
        :rtype: int
        """
        return self.stack[len(self.stack)-1];
        

    def getMin(self):
        """
        :rtype: int
        """
        return self.min;
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()