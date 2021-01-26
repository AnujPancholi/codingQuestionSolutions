/*
    codesignal
    category: "interview-practice/Linked Lists"
    problem title: "removeKFromList"
*/

// Singly-linked lists are already defined with this interface:
// class ListNode<T> {
//   value: T;
//   next: ListNode<T>;
//
//   constructor(value: T) {
//     this.value = value;
//     this.next = null;
//   }
// }
//
function removeKFromList(l: ListNode<number>, k: number): ListNode<number> {
    
    let currNode: ListNode<number> | null = null, nextNode: ListNode<number> | null = l, head: ListNode<number> | null = null;
    
    while(nextNode!==null){
        if(nextNode.value===k){
            if(currNode){
                currNode.next = nextNode.next;
                nextNode = currNode.next;
            } else {
                nextNode = nextNode.next;
            }
        } else {
            if(currNode===null){
                head=nextNode;
            }
            currNode = nextNode;
            nextNode = nextNode.next;
        }
    }
    
    return head;

}
