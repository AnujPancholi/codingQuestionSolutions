// <myCode>--------------------------------
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



function processData(input) {
    //Enter your code here
    let [n,...queries] = input.split('\n');
    queries = queries.map(queryStr => queryStr.split(' ').map(i => parseInt(i)));
    const minHeap = new MinHeap();
    for(let i=0;i<queries.length;++i){
        switch(queries[i][0]){
            case 3:
            console.log(minHeap.peek());
            break;
            case 2:
            minHeap.removeValue(queries[i][1]);
            break;
            case 1:
            minHeap.add(queries[i][1]);
            break;
        }
    }
} 

// </myCode>---------------------------------------------------

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
