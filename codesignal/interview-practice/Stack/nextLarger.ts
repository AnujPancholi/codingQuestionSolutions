class ListNode<T> {
    value: T;
    next: ListNode<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack<T> {
    private _size: number;
    private _head: ListNode<T> | null;
  
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
      const freshNode = new ListNode<T>(value);
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
  
  function nextLarger(a: number[]): number[] {
      interface ValueIndexPair{
          value: number;
          index: number;
      }
      const stack: Stack<ValueIndexPair> = new Stack<ValueIndexPair>();
      const solutionArr: number[] = Array.from({
          length: a.length
      },() => -1);
          
      for(let i=0;i<a.length;++i){
              while(!stack.isEmpty() && stack.peek().value<a[i]){
                  const poppedObj = stack.pop();
                  solutionArr[poppedObj.index] = a[i];
              }
              
              stack.push({
                  value: a[i],
                  index: i
              })
      }
      
      return solutionArr;
      
  
  }
  