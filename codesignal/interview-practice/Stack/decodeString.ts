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
  
  
  function decodeString(s: string): string {
      
      const stack = new Stack<string>();
      let i=0;
      while(i<s.length){
          if(s.charCodeAt(i)>=97 && s.charCodeAt(i)<=122){
              stack.push(s[i]);
              i++;
          } else if(s[i]!=="]") {
              let j = i+1,numStr = s[i];
              while(s[j]!=='['){
                  numStr+=s[j];
                  ++j
              }
              
              stack.push(numStr);
              stack.push('[')
              i=j+1;
          } else {
              const arr: string[] = [];
              
              while(stack.peek()!=="["){
                  arr.unshift(stack.pop());
              }
              stack.pop();
              const num = parseInt(stack.pop());
              // console.log(num)
              const str = arr.join('');
              let repeatedStr = str;
              for(let c=1;c<num;++c){
                  repeatedStr+=str;
              }
              stack.push(repeatedStr);
              ++i;
          }
          
      }
      
      const arr: string[] = [];
      while(!stack.isEmpty()){
          arr.unshift(stack.pop())
      }
      
      return arr.join('');
  }
  