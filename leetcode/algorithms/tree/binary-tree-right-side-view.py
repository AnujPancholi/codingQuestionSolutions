# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def rightSideView(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        
        if(root==None):
            return [];
        
        qu = [];
        
        qu.append({
            "node": root,
            "level": 0
        })
        
        rv = [];
        
        while(len(qu)>0):
            curr = qu.pop(0)
            
            if(curr["node"].right!=None):
                qu.append({
                    "node": curr["node"].right,
                    "level": curr["level"]+1
                })
            if(curr["node"].left!=None):
                qu.append({
                    "node": curr["node"].left,
                    "level": curr["level"]+1
                })
            
            if(len(rv)==curr["level"]):
                rv.append(curr["node"].val);
            # else:
            #     rv[curr["level"]] = curr["node"].val;
            
        return rv;