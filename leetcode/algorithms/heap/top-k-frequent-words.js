/*
    leetcode
    category: "Algorithms"
    problem title: "Top K Frequent Words"
*/


/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

const MaxHeap = function(){
    this._heap = [];
}

MaxHeap.prototype.printState = function(){
    console.table(this._heap.map((elem,index) => ({
        index: index,
        key: elem
    })));
}

MaxHeap.prototype.getParentIndex = function(index){
    return parseInt((index-1)/2);
}

MaxHeap.prototype.getLeftChildIndex = function(index){
    return parseInt((2*index)+1);
}

MaxHeap.prototype.getRightChildIndex = function(index){
    return parseInt((2*index)+2);
}

MaxHeap.prototype.swapValues = function(i,j){
    let temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j]=temp;
}

MaxHeap.prototype.peek = function(){
    return this._heap[0] || null;
}



MaxHeap.prototype.heapifyUp = function(_params = {}){
    let currentIndex = this._heap.length-1;
    while(true){
        let parentIndex = this.getParentIndex(currentIndex);
        if(currentIndex>0 && this._heap[parentIndex].freq<this._heap[currentIndex].freq || (this._heap[parentIndex].freq===this._heap[currentIndex].freq && this._heap[parentIndex].word>this._heap[currentIndex].word)){
            this.swapValues(parentIndex, currentIndex);
            currentIndex=parentIndex;
        } else {
            break;
        }
    }
}

MaxHeap.prototype.heapifyDown = function(){
    let currentIndex = 0;
    while(currentIndex<this._heap.length){
        let leftChildIndex = this.getLeftChildIndex(currentIndex);
        let rightChildIndex = this.getRightChildIndex(currentIndex);
        
        let leftChildKey = this._heap[leftChildIndex] ? this._heap[leftChildIndex].freq : null;
        let rightChildKey = this._heap[rightChildIndex] ? this._heap[rightChildIndex].freq : null;
        
        if(!leftChildKey && !rightChildKey){
            break;
        } else if(leftChildKey && (!rightChildKey || (rightChildKey<leftChildKey || (rightChildKey===leftChildKey && this._heap[rightChildIndex].word>this._heap[leftChildIndex].word)))){
            if(leftChildKey>this._heap[currentIndex].freq || (leftChildKey===this._heap[currentIndex].freq && this._heap[leftChildIndex].word<this._heap[currentIndex].word)){
                this.swapValues(leftChildIndex,currentIndex);
                currentIndex=leftChildIndex;
                continue;
            } else {
                break;
            }
        } else if(leftChildKey<rightChildKey || (leftChildKey===rightChildKey && this._heap[rightChildIndex].word<this._heap[leftChildIndex].word)){
            if(rightChildKey>this._heap[currentIndex].freq || (rightChildKey===this._heap[currentIndex].freq && this._heap[rightChildIndex].word<this._heap[currentIndex].word)){
                this.swapValues(rightChildIndex,currentIndex);
                currentIndex=rightChildIndex;
                continue;
            } else {
                break;
            }
        } else {
            console.log("oops");
            break;
        }
    }
}


MaxHeap.prototype.add = function(obj){
    this._heap.push(obj);
    this.heapifyUp();
}

MaxHeap.prototype.extract = function(){
    
    if(this._heap.length===0){
        return null;
    }
    let extractedValue = this._heap[0];
    this._heap[0] = this._heap.splice(this._heap.length-1,1)[0];
    
    this.heapifyDown();
    return extractedValue;
    
}

var topKFrequent = function(words, k) {
    
    const wordsMap = words.reduce((wMap,word) => {
        if(!wMap[word]){
            wMap[word]={
                word: word,
                freq: 0
            };
        }
        ++wMap[word].freq;
        return wMap;
    },{});
    
    const wordsFrequencyArr = Object.keys(wordsMap).reduce((fArr,word) => {
        fArr.push({
            word: word,
            freq: wordsMap[word].freq
        })
        return fArr;
    },[]);
    
    const wordsHeap = new MaxHeap();
    
    for(let i=0;i<wordsFrequencyArr.length;++i){
        wordsHeap.add(wordsFrequencyArr[i]);
    }
    
    const answerArr = [];
    while(k>0){
        let wordToPush = wordsHeap.extract().word;
        answerArr.push(wordToPush);
        
        --k;
    }
    return answerArr;
};