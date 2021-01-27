/*
    codesignal
    category: "interview-practice/Linked Lists"
    problem title: "isListPalindrome"
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

function findHalfStart<T>(h: ListNode<T> | null): ListNode<T> | null {
    if(h===null){
        return h;
    }
    let t: ListNode<T> = h, w: ListNode<T> = h;
    let i: number = 1;
    while(w.next!==null){
        w=w.next;
        if(i%2===0){
            t=t.next;
        }
        i++;
    }
    
    t=t.next;
       
    return t;
}

function reverse<T>(h: ListNode<T>): ListNode<T> | null {
    if(h===null || h.next===null){
        return h;
    }
    
    let prev: ListNode<T> | null = null, curr: ListNode<T> | null = h, leader: ListNode<T> | null = curr;
    
    while(leader!==null){
        leader = curr.next;
        curr.next = prev;
        prev = curr;
        curr = leader;
    }
    
    return prev;
}

function printList<T>(h: ListNode<T> | null): void{
    while(h!==null){
        console.log(`${h.value}->`);
        h=h.next;
    }
}


function isListPalindrome(l: ListNode<number>): boolean {
    
    if(l===null || l.next===null){
        return true;
    }
    
    let t: ListNode<number> | null = findHalfStart<number>(l);
    
    // printList<number>(t);
    
    let p: ListNode<number> | null = reverse<number>(t);
    
    // printList<number>(p);
    
    let w: ListNode<number> | null = l;
    let isPalindrome: boolean = true;
    while(p!==null){
        isPalindrome = w.value===p.value;
        if(!isPalindrome){
            break;
        }
        w=w.next;
        p=p.next;
    }
    
    return isPalindrome;
}
