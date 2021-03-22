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
//
// Binary trees are already defined with this interface:
// class Tree<T> {
//   value: T;
//   left: Tree<T>;
//   right: Tree<T>;
//
//   constructor(value: T) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

function traverseNums<T>(t: Tree<T>,numHeap: Heap<T>): void {
    if(t===null){
        return;
    }
    numHeap.insert(t.value);
    traverseNums(t.left, numHeap);
    traverseNums(t.right, numHeap);
}

function kthSmallestInBST(t: Tree<number>, k: number): number {
    
    const numHeap = new Heap<number>((a,b) => a-b);
    
    traverseNums<number>(t, numHeap);
    let num: number;
    for(let i = 0;i<k;++i){
        num = numHeap.pop();
    }
    
    return num;

}  