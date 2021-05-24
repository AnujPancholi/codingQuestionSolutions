# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def mergeTrees(self, root1, root2):
        """
        :type root1: TreeNode
        :type root2: TreeNode
        :rtype: TreeNode
        """
        
        sum = 0;
        isNullNode = True;
        leftNodes = [];
        rightNodes = [];
        if root1!=None:
            sum = sum + root1.val;
            isNullNode = False
            leftNodes.append(root1.left);
            rightNodes.append(root1.right);
        if root2!=None:
            sum = sum + root2.val;
            isNullNode = False
            leftNodes.append(root2.left);
            rightNodes.append(root2.right);
        if isNullNode:
            return None;
         
            
        freshNode = TreeNode(sum,self.mergeTrees(leftNodes[0],leftNodes[1]) if len(leftNodes)==2 else leftNodes[0],self.mergeTrees(rightNodes[0],rightNodes[1]) if len(rightNodes)==2 else rightNodes[0]);
        
        return freshNode;