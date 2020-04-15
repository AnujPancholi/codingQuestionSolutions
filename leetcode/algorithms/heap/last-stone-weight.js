/*
    leetcode
    category: "Algorithms"
    problem title: "Last Stone Weight"
*/

/**
 * @param {number[]} stones
 * @return {number}
 */


 //alternate, heap-based solution.

const MaxHeap = function(){
    this._heap=[];
}

//for debugging purposes
MaxHeap.prototype.printState = function(){
    console.table(this._heap.map((value,index) => ({
        index: index,
        value: value
    })));
}
//---

MaxHeap.prototype.getParentIndex = function(index){
    return parseInt((index-1)/2);
}

MaxHeap.prototype.getLeftChildIndex = function(index){
    return parseInt((index*2)+1);
}

MaxHeap.prototype.getRightChildIndex = function(index){
    return parseInt((index*2)+2);
}

MaxHeap.prototype.swapValues = function(x,y){
    let temp = this._heap[x];
    this._heap[x] = this._heap[y];
    this._heap[y] = temp;
}

MaxHeap.prototype.heapifyUp = function(){
    let currentIndex = this._heap.length-1;
    
    while(true){
        const parentIndex = this.getParentIndex(currentIndex);
        if(parentIndex<0){
            break;
        }
        if(this._heap[parentIndex]<this._heap[currentIndex]){
            this.swapValues(parentIndex,currentIndex);
            currentIndex = parentIndex;
        } else {
            break;
        }
    }
}

MaxHeap.prototype.heapifyDown = function(){
    let currentIndex = 0;
    while(currentIndex<this._heap.length){
        const leftChildIndex = this.getLeftChildIndex(currentIndex);
        const leftChild = this._heap[leftChildIndex];
        if(leftChild){
            const rightChildIndex = this.getRightChildIndex(currentIndex);
            const rightChild = this._heap[rightChildIndex];
            if(rightChild && rightChild>leftChild){
                if(rightChild>this._heap[currentIndex]){
                    this.swapValues(currentIndex,rightChildIndex);
                    currentIndex = rightChildIndex;
                } else {
                    break;
                }
            } else {
                if(leftChild>this._heap[currentIndex]){
                    this.swapValues(currentIndex,leftChildIndex);
                    currentIndex = leftChildIndex;
                } else {
                    break;
                }
            }   
        } else {
            break;
        }
    }
}

MaxHeap.prototype.peek = function(){
    return this._heap[0];
}

MaxHeap.prototype.getSize = function(){
    return this._heap.length;
}

MaxHeap.prototype.extract = function(){
    const extractedValue = this._heap[0];
    if(this._heap.length>1){
        this._heap[0] = this._heap.splice(this._heap.length-1,1)[0];
        this.heapifyDown();
    } else {
        this._heap.shift();
    }
    return extractedValue;
}

MaxHeap.prototype.add = function(value){
    this._heap.push(value);
    this.heapifyUp();
}

const getCollisionResult = (s1,s2) => {
    return Math.abs(s1-s2);
}

var lastStoneWeight = function(stones) {
    if(stones.length===1){
        return stones[0];
    }
    const stoneHeap = new MaxHeap();
    for(let i=0;i<stones.length;++i){
        stoneHeap.add(stones[i]);
    }
    
    while(stoneHeap.getSize()>1){
        const firstStone = stoneHeap.extract();
        const secondStone = stoneHeap.extract();
        const resultStone = getCollisionResult(firstStone,secondStone);
        if(resultStone!=0){
            stoneHeap.add(resultStone);
        }
        
    }
    return stoneHeap.getSize()===0 ? 0 : stoneHeap.peek();
    
    
};