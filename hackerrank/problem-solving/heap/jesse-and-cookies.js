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

//<myCode>------------------------------------------------

const Heap = function(compare){
    this._heap = [];
    this._compare = compare;
}

Heap.prototype.swapValues = function(i1,i2){
    const temp = this._heap[i1];
    this._heap[i1] = this._heap[i2];
    this._heap[i2] = temp;
}

Heap.prototype.printHeapArray = function(){
    console.log(this._heap);
}

Heap.prototype.getParentIndex = function(index){
    return parseInt((index-1)/2);
}

Heap.prototype.getRightChildIndex = function(index){
    const rightChildIndex = parseInt((index*2)+2);
    return rightChildIndex<this._heap.length ? rightChildIndex : null;
}

Heap.prototype.getLeftChildIndex = function(index){
    const leftChildIndex = parseInt((index*2)+1);
    return leftChildIndex<this._heap.length ? leftChildIndex : null;
}


Heap.prototype.heapifyUp = function(){
    let currentIndex = this._heap.length - 1;
    while(currentIndex>0){
        const parentIndex = this.getParentIndex(currentIndex);
        if(this._compare(this._heap[currentIndex],this._heap[parentIndex])>0){
            this.swapValues(parentIndex,currentIndex);
            currentIndex = parentIndex;
        } else {
            break;
        }
    }
}

Heap.prototype.heapifyDown = function(){
    let currentIndex = 0;
    while(currentIndex<this._heap.length){
        const leftChildIndex = this.getLeftChildIndex(currentIndex);
        if(leftChildIndex){
            const rightChildIndex = this.getRightChildIndex(currentIndex);
            let candidateIndex = rightChildIndex && this._compare(this._heap[rightChildIndex],this._heap[leftChildIndex])>0 ? rightChildIndex : leftChildIndex;
            if(this._compare(this._heap[candidateIndex],this._heap[currentIndex])>0){
                this.swapValues(candidateIndex,currentIndex);
                currentIndex = candidateIndex;
            } else {
                break;
            }
        } else {
            break;
        }
    }
}

Heap.prototype.getSize = function(){
    return this._heap.length;
}

Heap.prototype.peek = function(){
    return this._heap[0];
}

Heap.prototype.add = function(value){
    this._heap.push(value);
    this.heapifyUp();
}

Heap.prototype.extract = function(){
    const extractedValue = this._heap[0] || null;
    const lastValue = this._heap.pop();
    if(this._heap.length!=0){
        this._heap[0] = lastValue;
        this.heapifyDown();
    }
    return extractedValue;
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
    const cookieHeap = new Heap((i,j) => (j-i));

    for(let i=0;i<A.length;++i){
        cookieHeap.add(A[i]);
    }

    while(cookieHeap.getSize()>=2 && cookieHeap.peek()<k){
        ++stepCount;
        let a = cookieHeap.extract();
        let b = cookieHeap.extract();
        cookieHeap.add(getNewCookieSweetness(a,b));
    }
    console.log(`${stepCount} ${cookieHeap.peek()}`);
    return cookieHeap.peek()>=k ? stepCount : -1;
}

//</myCode>------------------------------------------


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
