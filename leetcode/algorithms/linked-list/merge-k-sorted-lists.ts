/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getMinNode(lists: Array<ListNode | null>): number {
    let minNode: ListNode | null = null;
    for(const node of lists){
        if(!minNode || (node!==null && node.val<minNode.val)){
            minNode = node;
        }
    }
    
    return lists.indexOf(minNode);
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let headNode: ListNode | null = null, tailNode: ListNode | null = null;
    while(lists.find(n => n!==null)){
        const minNodeIndex = getMinNode(lists);
        const freshNode = lists[minNodeIndex]===null ? null : new ListNode(lists[minNodeIndex].val);
        if(freshNode===null){
            break;
        }
        if(!headNode){
            headNode=freshNode;
            tailNode = freshNode;
        } else {
            tailNode.next = freshNode;
            tailNode = freshNode;
        }
        lists[minNodeIndex] = lists[minNodeIndex].next;
    }
    
    return headNode;

};