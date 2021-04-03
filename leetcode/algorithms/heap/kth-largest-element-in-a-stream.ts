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
  
  
  class KthLargest {
      minHeap: Heap<number>;
      k: number
      constructor(k: number, nums: number[]) {
          this.k = k;
          this.minHeap = new Heap<number>((a,b) => a-b);
          
          for(const num of nums){
              this.minHeap.insert(num);
              if(this.minHeap.size()>k){
                  this.minHeap.pop();
              }
          }
  
      }
  
      add(val: number): number {
          this.minHeap.insert(val);
          if(this.minHeap.size()>this.k){
              this.minHeap.pop();
          }
          
          return this.minHeap.peek();
          
      }
  }
  
  /**
   * Your KthLargest object will be instantiated and called as such:
   * var obj = new KthLargest(k, nums)
   * var param_1 = obj.add(val)
   */