/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {
    
    private void bfsImpl(Node root) {
        
        if(root==null){
            return;
        }
        
        Queue<Pair<Node,Integer>> queue = new LinkedList<Pair<Node,Integer>>();
        List<Node> loList = new ArrayList<Node>();
        
        queue.add(new Pair<Node,Integer>(root,0));
        root.next = null;
        
        while(!queue.isEmpty()){
            Pair<Node,Integer> currPair = queue.poll();
            
            Node curr = currPair.getKey();
            Integer level = currPair.getValue();
            
            if(curr.left!=null)queue.add(new Pair<Node,Integer>(curr.left,level+1));
            if(curr.right!=null)queue.add(new Pair<Node,Integer>(curr.right,level+1));
            
            if(level==loList.size()){
                loList.add(curr);
                curr.next = null;
            } else {
                Node levelTail = loList.get(level);
                levelTail.next = curr;
                loList.set(level,curr);
                curr.next = null;
            }
        }
        
       
    }
    
    public Node connect(Node root) {
        
        bfsImpl(root);
        
        
        
        return root;
        
        
    }
}