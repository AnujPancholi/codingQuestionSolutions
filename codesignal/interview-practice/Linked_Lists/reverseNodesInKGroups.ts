/*
    codesignal
    category: "interview-practice/Linked Lists"
    problem title: "reverseNodesInKGroups"
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



function reverseSection(h: ListNode<number> | null,k: number){
    let w: ListNode<number> | null = h,prev: ListNode<number> | null=null, leader: ListNode<number> | null = h;
    let i: number = 0;
    while(i<k && w!==null){
        leader = w.next;
        w.next = prev;
        prev = w;
        w=leader;
        ++i
    }
    
    return prev;
}


function reverseNodesInKGroups(l: ListNode<number>, k: number): ListNode<number> {
    
    if(k===1){
        return l;
    }
    
    let nextNode: ListNode<number> | null = l,w: ListNode<number> | null = l,prevNode: ListNode<number> | null = null;
    
    while(nextNode!==null){
        let i: number = 0;
        while(i<k && nextNode!==null){
            nextNode = nextNode.next;
            ++i;
        }
        if(!nextNode && i<k){
            break;
        }
        
        let reversedHead = reverseSection(w, k)
        
        if(prevNode){
            prevNode.next = reversedHead;
        } else {
            l = reversedHead;
        } 
        while(reversedHead.next!==null){
            reversedHead = reversedHead.next;
        }
        reversedHead.next = nextNode;
        prevNode=reversedHead
        w=nextNode;
    }
    
    return l;
    
}
