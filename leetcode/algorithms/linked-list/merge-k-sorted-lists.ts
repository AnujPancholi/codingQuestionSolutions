/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class Heap<T> {
    private _array: T[];
    private _comparatorFunction: (firstElement: T, secondElement: T) => number;
  
    private _getLeftChildIndex(parentIndex: number): number {
      return 2 * parentIndex + 1;
    }
  
    private _getRightChildIndex(parentIndex: number): number {
      return 2 * parentIndex + 2;
    }
  
    private _getParentIndex(childIndex: number): number {
      return Math.floor((childIndex - 1) / 2);
    }
  
    private _heapifyUp(): void {
      let currIndex = this._array.length - 1;
  
      while (
        currIndex > 0 &&
        this._comparatorFunction(
          this._array[this._getParentIndex(currIndex)],
          this._array[currIndex]
        ) > 0
      ) {
        const temp = this._array[this._getParentIndex(currIndex)];
        this._array[this._getParentIndex(currIndex)] = this._array[currIndex];
        this._array[currIndex] = temp;
        currIndex = this._getParentIndex(currIndex);
      }
    }
  
    private _heapifyDown(): void {
      let currIndex = 0;
  
      while (this._getLeftChildIndex(currIndex) < this._array.length) {
        const leftChildIndex = this._getLeftChildIndex(currIndex);
        const rightChildIndex = this._getRightChildIndex(currIndex);
        const candidateIndex =
          rightChildIndex < this._array.length &&
          this._comparatorFunction(
            this._array[leftChildIndex],
            this._array[rightChildIndex]
          ) > 0
            ? rightChildIndex
            : leftChildIndex;
        if (
          this._comparatorFunction(
            this._array[currIndex],
            this._array[candidateIndex]
          ) > 0
        ) {
          const temp = this._array[candidateIndex];
          this._array[candidateIndex] = this._array[currIndex];
          this._array[currIndex] = temp;
          currIndex = candidateIndex;
        } else {
          break;
        }
      }
    }
  
    constructor(
      comparatorFunction: (firstElement: T, secondElement: T) => number
    );
    constructor(
      comparatorFunction: (firstElement: T, secondElement: T) => number,
      initArray: Array<T>
    );
    constructor(
      comparatorFunction: (firstElement: T, secondElement: T) => number,
      initArray?: Array<T>
    ) {
      this._array = [];
      this._comparatorFunction = comparatorFunction;
  
      if (initArray) {
        for (const elem of initArray) {
          this.insert(elem);
        }
      }
    }
  
    insert(value: T): Heap<T> {
      this._array.push(value);
      this._heapifyUp();
      return this;
    }
  
    extract(): T | null {
      const poppedValue = this._array[0];
      const tailValue = this._array.pop();
      if (tailValue === undefined) {
        return null;
      } else {
        if (this._array.length > 0) this._array[0] = tailValue;
        this._heapifyDown();
      }
      return poppedValue;
    }
  
    peek(): T | null {
      return this._array.length > 0 ? this._array[0] : null;
    }
  
    size(): number {
      return this._array.length;
    }
  }
  
  
  function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
      const numHeap: Heap<number> = new Heap<number>((a,b) => a-b);
      for(let listNode of lists){
          while(listNode!==null){
              numHeap.insert(listNode.val);
              listNode = listNode.next;
          }
          
      }
      let headNode: ListNode | null = null, tailNode: ListNode | null = null;
      
      while(numHeap.size()>0){
          const freshNode: ListNode = new ListNode(numHeap.extract());
          if(!headNode){
              headNode = freshNode;
              tailNode = freshNode;
          } else {
              tailNode.next = freshNode;
              tailNode = freshNode;
          }
          
      }
      return headNode;
  
  };