class CustomListNode<T> {
    value: T;
    next: CustomListNode<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack<T> {
    private _size: number;
    private _head: CustomListNode<T> | null;
  
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
  
    push(value: T): Stack<T> {
      const freshNode = new CustomListNode<T>(value);
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
  
  
  
  class MyQueue {
      _stack: Stack<number>;
      _otherStack: Stack<number>;
      constructor() {
          this._stack = new Stack<number>();
          this._otherStack = new Stack<number>();
      }
  
      push(x: number): void {
          while(!this._stack.isEmpty()){
              this._otherStack.push(this._stack.pop());
          }
          this._stack.push(x);
          while(!this._otherStack.isEmpty()){
              this._stack.push(this._otherStack.pop());
          }
      }
  
      pop(): number {
          return this._stack.pop();
      }
  
      peek(): number {
          return this._stack.peek();
      }
  
      empty(): boolean {
          return this._stack.isEmpty();
      }
  }
  
  /**
   * Your MyQueue object will be instantiated and called as such:
   * var obj = new MyQueue()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.peek()
   * var param_4 = obj.empty()
   */