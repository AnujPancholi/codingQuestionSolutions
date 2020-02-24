'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}


// <myCode>---------------------------------------------------
const MinHeap = function(){
    this._heap = [];
}

MinHeap.prototype.printState = function(){
    console.table(this._heap.map((value,index) => ({
        index: index,
        value: value
    })));
}

MinHeap.prototype.peek = function(){
    return this._heap.length>0 ? this._heap[0] : null;
}

MinHeap.prototype.getParentIndex = function(index){
    return parseInt((index-1)/2);
}

MinHeap.prototype.getLeftChildIndex = function(index){
    return parseInt((index*2)+1);
}

MinHeap.prototype.getRightChildIndex = function(index){
    return parseInt((index*2)+2);
}

MinHeap.prototype.swapValues = function(i1,i2){
    let temp = this._heap[i1];
    this._heap[i1] = this._heap[i2];
    this._heap[i2]=temp;
}

MinHeap.prototype.heapifyUp = function(){
    let currentIndex = this._heap.length-1;
    while(currentIndex>0){
        let parentIndex = this.getParentIndex(currentIndex);
        if(this._heap[parentIndex]>this._heap[currentIndex]){
            this.swapValues(currentIndex, parentIndex);
            currentIndex = parentIndex;
        } else {
            break;
        }
    }
}

MinHeap.prototype.heapifyDown = function(index=0){
    let currentIndex = index;
    while(true){
        let swappingIndex = null;
        let leftChildIndex = this.getLeftChildIndex(currentIndex);
        let leftChild = this._heap[leftChildIndex];
        if(leftChild){
            let rightChildIndex = this.getRightChildIndex(currentIndex);
            let rightChild = this._heap[rightChildIndex];
            if(rightChild){
                swappingIndex = leftChild<rightChild ? leftChildIndex : rightChildIndex;
            } else {
                swappingIndex = leftChildIndex;
            }
            if(this._heap[currentIndex]<this._heap[swappingIndex]){
                swappingIndex=null;
            }
        }
        if(swappingIndex===null){
            break;
        } else{
            this.swapValues(currentIndex,swappingIndex);
            currentIndex=swappingIndex;
        }
    }
}

MinHeap.prototype.add = function(value){
    this._heap.push(value);
    this.heapifyUp();
} 

MinHeap.prototype.extract = function(index=0){
    if(this._heap.length===0){
        return null;
    }
    const extractedValue = this._heap[index];
    if(index!=this._heap.length-1){
        this._heap[index] = this._heap.splice(this._heap.length-1,1)[0];
    } else {
        this._heap.splice(this._heap.length-1,1);
    }
    this.heapifyDown(index);
    return extractedValue;
}

MinHeap.prototype.removeValue = function(value){
    let index = this._heap.indexOf(value);
    if(index>-1){
        this.extract(index);
    }
}

MinHeap.prototype.getHeapArray = function(){
    return this._heap;
}

MinHeap.prototype.getSize = function(){
    return this._heap.length;
}

const getNewCookieSweetness = (s1,s2) => parseInt(Math.min(s1,s2) + (2*Math.max(s1,s2)));

/*
 * Complete the cookies function below.
 */
function cookies(k, A) {
    /*
     * Write your code here.
     */
    let stepCount = 0;
    const cookieHeap = new MinHeap();

    for(let i=0;i<A.length;++i){
        cookieHeap.add(A[i]);
    }

    while(cookieHeap.getSize()>=2 && cookieHeap.peek()<k){
        ++stepCount;
        let a = cookieHeap.extract();
        let b = cookieHeap.extract();
        cookieHeap.add(getNewCookieSweetness(a,b));
Home
Getting Started
Developer Guide
API Reference
About
￼ 

    }
    
    return cookieHeap.peek()>=k ? stepCount : -1;
}
// </myCode>------------------------------------------------------

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const A = readLine().split(' ').map(ATemp => parseInt(ATemp, 10));

    let result = cookies(k, A);

    ws.write(result + "\n");

    ws.end();
}
