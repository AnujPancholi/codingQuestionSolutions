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
function rearrangeLastN(l: ListNode<number>, n: number): ListNode<number> {
    if(n===0){
        return l;
    }
    
    let w: ListNode<number> | null = l,i: number = 0;
    while(w.next!==null){
        w=w.next;
        ++i;
    }
    let t: ListNode<number> = w;
     
    
    let startIndex: number = i-n;
    if(startIndex===-1){
        return l;
    }
    w=l;
    i=0;
    while(i<startIndex){
        w=w.next;
        ++i;
    }
    t.next=l;
    l=w.next;
    w.next=null;
    
    return l;
}
