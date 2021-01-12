class Listnode<T>{
    val: T;
    next: ListNode | null;
   
   constructor(data: T){
       this.val = data;
       this.next = null;
   }
}

class MyLinkedList {
    head: Listnode<number> | null;
    size: number;
   constructor() {
       this.head = null;
       this.size = 0;
   }

   get(index: number): number {
       if(index<0 || index>=this.size){
           return -1;
       }
       
       let w: Listnode<number> | null = this.head, i: number = 0;
       while(i<index){
           w=w.next;
           ++i;
       }
       
       return w.val;
       
   }

   addAtHead(val: number): void {
       
       let w: Listnode<number> | null = this.head;
       this.head = new Listnode(val);
       this.head.next = w;
       ++this.size;
       

   }

   addAtTail(val: number): void {
       let w: Listnode<number> | null = this.head;
       while(w!=null && w.next!=null){
           w=w.next;
       }
       if(w===null){
           this.head = new Listnode<number>(val)
       } else {
           w.next = new Listnode<number>(val);
       }
       ++this.size;
   }

   addAtIndex(index: number, val: number): void {
       if(index<0 || index>this.size){
           return;
       } else if(index===0){
           return this.addAtHead(val);
       } else if(index===this.size){
           return this.addAtTail(val);
       }
       let w: Listnode<number> | null = this.head, i: number = 0;
       while(i<index-1){
           w=w.next;
           ++i;
       }
   
       const node = new Listnode<number>(val);
       
       node.next = w.next;
       w.next = node;
       this.size++;

   }

   deleteAtIndex(index: number): void {
       if(index<this.size && this.size>=0){
           if(index===0){
               this.head=this.head.next;
           } else {
               let w: Listnode<number> | null = this.head;
               let i: number = 0;
               while(i<index-1){
                   w=w.next;
                   ++i
               }
               w.next = w.next.next;
           }
           this.size--;
       }
   }
}

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/