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

function getArrFromList<T>(h: ListNode<T>): T[]{
    const arr: T[] = [];
    while(h!==null){
        arr.push(h.value);
        h = h.next;
    }
    
    return arr;
}

function addTwoHugeNumbers(a: ListNode<number>, b: ListNode<number>): ListNode<number> {
    const sectionSize: number = 4;
    
    let remainder: number = 0,i: number = 0;
    let solutionListHead: ListNode<number> = new ListNode(-1);
    
    const arr = getArrFromList<number>(a);
    const brr = getArrFromList<number>(b);
    
    while(remainder!==0 || arr.length-1-i>=0 || brr.length-1-i>=0){
        const a_index: number = arr.length-1-i;
        const b_index: number = brr.length-1-i;
        
        const a_val: number = a_index>=0 ? arr[a_index] : 0;
        const b_val: number = b_index>=0 ? brr[b_index] : 0;
        
        const currSectionSum: number = a_val+b_val+remainder;
        
        solutionListHead.value = currSectionSum%Math.pow(10,sectionSize);
        let additionalHead: ListNode<number> = new ListNode<number>(-1);
        additionalHead.next = solutionListHead;
        solutionListHead = additionalHead;
        
        remainder = Math.floor(currSectionSum/Math.pow(10,sectionSize));
        
        ++i;
    }
        
    return solutionListHead.next;
}
