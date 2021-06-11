# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    
    def invert(self,root):
        if root==None:
            return None;
        
        temp = self.invert(root.right);
        root.right = self.invert(root.left);
        root.left=temp;
        return root;
    
    def compare(self,n1,n2):
        if n1==None and n2==None:
            return True
        if n1==None or n2==None:
            return False
        return n1.val==n2.val and self.compare(n1.right,n2.right) and self.compare(n1.left,n2.left) 
    
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        
        if root==None:
            return True
        
        self.invert(root.right);
        
        return self.compare(root.left,root.right)
        