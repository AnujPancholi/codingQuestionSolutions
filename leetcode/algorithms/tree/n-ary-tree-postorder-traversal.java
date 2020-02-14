/*
/*
    leetcode
    category: "Algorithms"
    problem title: "N-ary Tree Postorder Traversal"
*/


/* Definition for a Node.
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
    
    private void populateListPostOrder(Node node, List<Integer> postOrdList){
        if(node==null){
            return;
        }
        for(int i=0;i<node.children.size();++i){
            populateListPostOrder(node.children.get(i),postOrdList);
        }
        postOrdList.add(node.val);
    }
    
    public List<Integer> postorder(Node root) {
        List<Integer> postOrdList = new ArrayList<Integer>();
        
        populateListPostOrder(root,postOrdList);
        
        return postOrdList;
        
        
    }
}