/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func middleNode(head *ListNode) *ListNode {
    
    var fasterWalkerNode *ListNode = head;
    var slowerWalkerNode *ListNode = head;
    
    var i int = 1;
    
    for(fasterWalkerNode!=nil){
        fasterWalkerNode = fasterWalkerNode.Next
        if(i%2==0){
            slowerWalkerNode = slowerWalkerNode.Next
        }
        i++
    }
    
    return slowerWalkerNode;
    
}