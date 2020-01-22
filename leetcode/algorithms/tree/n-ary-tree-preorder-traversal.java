/*
    leetcode
    category: "Algorithms"
    problem title: "N-ary Tree Preorder Traversal"
*/


/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
    
    private void addToList(Node node,List<Integer> preOrderList){
        if(node==null){
            return;
        }
        preOrderList.add(node.val);
        for(Node child : node.children){
            addToList(child,preOrderList);
        }
    }
    
    public List<Integer> preorder(Node root) {
        List<Integer> preOrderList = new ArrayList<Integer>();
        
        addToList(root,preOrderList);
        
        return preOrderList;
        
    }
}