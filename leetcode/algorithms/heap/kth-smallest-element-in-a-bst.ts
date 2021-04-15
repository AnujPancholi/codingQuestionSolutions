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
    ) {
      this._array = [];
      this._comparatorFunction = comparatorFunction;
    }
  
    insert(value: T): Heap<T> {
      this._array.push(value);
      this._heapifyUp();
      return this;
    }
  
    pop(): T | null {
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
  
  
  
  /**
   * Definition for a binary tree node.
   * class TreeNode {
   *     val: number
   *     left: TreeNode | null
   *     right: TreeNode | null
   *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
   *         this.val = (val===undefined ? 0 : val)
   *         this.left = (left===undefined ? null : left)
   *         this.right = (right===undefined ? null : right)
   *     }
   * }
   */
  
  function traverse(root: TreeNode,k: number,maxHeap: Heap<number>): void {
      if(root===null){
          return;
      }
      
      maxHeap.insert(root.val);
      if(maxHeap.size()>k){
          maxHeap.pop();
      }
      
      traverse(root.left,k,maxHeap);
      traverse(root.right,k,maxHeap);
  }
  
  function kthSmallest(root: TreeNode | null, k: number): number {
      const maxHeap = new Heap<number>((a,b) => b-a);
      
      traverse(root,k,maxHeap);
      
      return maxHeap.peek();
      
  };