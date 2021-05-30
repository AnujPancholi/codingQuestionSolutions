class ListNode1<T> {
    value: T;
    next: ListNode1<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack1<T> {
    private _size: number;
    private _head: ListNode1<T> | null;
  
    constructor();
    constructor(initArray: T[]);
    constructor(initArray?: T[]) {
      this._size = 0;
      this._head = null;
  
      if (initArray) {
        for (let i = initArray.length - 1; i >= 0; --i) {
          this.push(initArray[i]);
        }
      }
    }
  
    size(): number {
      return this._size;
    }
  
    peek(): T | null {
      return this._head !== null ? this._head.value : null;
    }
  
    isEmpty(): boolean {
      return this._size === 0;
    }
  
    push(value: T): Stack1<T> {
      const freshNode = new ListNode1<T>(value);
      freshNode.next = this._head;
      this._head = freshNode;
      ++this._size;
      return this;
    }
  
    pop(): T | null {
      let poppedValue: T | null = null;
      if (this._head !== null) {
        const poppedNode = this._head;
        this._head = this._head.next;
        poppedNode.next = null;
        poppedValue = poppedNode.value;
        --this._size;
      }
  
      return poppedValue;
    }
  }
  
  class Queue1<T> {
    private _length: number;
    private _head: ListNode1<T> | null;
    private _tail: ListNode1<T> | null;
  
    constructor();
    constructor(initArray: T[]);
    constructor(initArray?: T[]) {
      this._head = null;
      this._tail = null;
      this._length = 0;
  
      if (initArray) {
        for (const value of initArray) {
          this.enqueue(value);
        }
      }
    }
  
    enqueue(value: T): Queue1<T> {
      const freshNode = new ListNode1<T>(value);
      if (this._tail === null) {
        this._head = freshNode;
        this._tail = freshNode;
      } else {
        this._tail.next = freshNode;
        this._tail = freshNode;
      }
      ++this._length;
      return this;
    }
  
    dequeue(): T | null {
      let dequeuedVal: T | null = null;
  
      if (this._head) {
        const dequeueNode = this._head;
        this._head = this._head.next;
        if (this._head === null) {
          this._tail = null;
        }
        dequeuedVal = dequeueNode.value;
        dequeueNode.next = null;
        --this._length;
      }
  
      return dequeuedVal;
    }
  
    getFront(): T | null {
      return this._head !== null ? this._head.value : null;
    }
  
    isEmpty(): boolean {
      return this._length === 0;
    }
  
    length(): number {
      return this._length;
    }
  }
  
  
  
  function countStudents(students: number[], sandwiches: number[]): number {
      const studentQueue: Queue1<number> = new Queue1<number>(students);
      const sandwichStack: Stack1<number> = new Stack1<number>(sandwiches)
      
      
      let i: number = 0;
      while(!sandwichStack.isEmpty() && i<=studentQueue.length()){
          if(studentQueue.getFront()===sandwichStack.peek()){
              studentQueue.dequeue();
              sandwichStack.pop();
              i=1;
              continue;
          }
          
          studentQueue.enqueue(studentQueue.dequeue());
          ++i;
      }
      
      return studentQueue.length();
  
  };