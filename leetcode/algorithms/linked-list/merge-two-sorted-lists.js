/*
    leetcode
    category: "Algorithms"
    problem title: "Merge Two Sorted Lists"
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let listHead = null,tail=null;
    while(l1!=null || l2!=null){
        let node = new ListNode(null);
        if(l1 && (!l2 || (l1.val<=l2.val))){
            node.val = l1.val;
            l1 = l1.next;
        } else {
            node.val = l2.val;
            l2 = l2.next;
        }
        
        if(!listHead){
            listHead=node;
            tail=node;
        } else {
            tail.next=node;
            tail=node;
        }
        
    }
    
    return listHead;
};