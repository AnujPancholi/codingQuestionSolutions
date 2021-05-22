# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def rangeSumBST(self, root, low, high):
        """
        :type root: TreeNode
        :type low: int
        :type high: int
        :rtype: int
        """
        if root==None:
            return 0;
        sum = 0;
        if(root.val<high):
            sum=sum+self.rangeSumBST(root.right,max(low,root.val),high);
        
        if root.val>low:
            sum=sum+self.rangeSumBST(root.left,low,min(high,root.val));
        
        if(root.val<=high and root.val>=low):
            sum=sum+root.val
        
        return sum;