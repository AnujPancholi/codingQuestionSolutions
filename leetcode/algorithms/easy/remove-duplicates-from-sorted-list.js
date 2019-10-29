/*
    leetcode
    category: "Algorithms"
    problem title: "Remove Duplicates From Sorted List"
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head){
        return head;
    }
    let trav = head;
    while(trav.next!=null){
        if(trav.next.val===trav.val){
            trav.next = trav.next.next;
        } else {
            trav = trav.next;
        }
    }
    return head;
    
};