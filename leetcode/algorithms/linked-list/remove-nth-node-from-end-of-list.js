/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    if(head===null){
        return null;
    }
    
    let i = 0, l = head, f = head;
    
    while(i<=n && l!==null){
        l = l.next;
        ++i;
    }
    
    if(i===n){
        head = head.next;
    } else {
        while(l!==null){
            l = l.next;
            f = f.next;
        }
        // console.log(f.val)
        f.next = f.next.next;    
    }
    
    return head;
    
    
    
    
    
    
}