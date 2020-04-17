/*
    leetcode
    category: "Algorithms"
    problem title: "Kth Largest Element in an Array
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const MaxHeap = function(){
	this._heap = [];
}

MaxHeap.prototype.swapValues = function(i1,i2){
	const temp = this._heap[i1];
	this._heap[i1] = this._heap[i2];
	this._heap[i2] = temp;
}

MaxHeap.prototype.printHeapArray = function(){
	console.log(this._heap);
}

MaxHeap.prototype.getParentIndex = function(index){
	return parseInt((index-1)/2);
}

MaxHeap.prototype.getRightChildIndex = function(index){
	const rightChildIndex = parseInt((index*2)+2);
	return rightChildIndex<this._heap.length ? rightChildIndex : null;
}

MaxHeap.prototype.getLeftChildIndex = function(index){
	const leftChildIndex = parseInt((index*2)+1);
	return leftChildIndex<this._heap.length ? leftChildIndex : null;
}


MaxHeap.prototype.heapifyUp = function(){
	let currentIndex = this._heap.length - 1;
	while(currentIndex>0){
		const parentIndex = this.getParentIndex(currentIndex);
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
		if(leftChildIndex){
			const rightChildIndex = this.getRightChildIndex(currentIndex);
			let candidateIndex = rightChildIndex && this._heap[rightChildIndex]>this._heap[leftChildIndex] ? rightChildIndex : leftChildIndex;
			if(this._heap[candidateIndex]>this._heap[currentIndex]){
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

MaxHeap.prototype.getSize = function(){
	return this._heap.length;
}

MaxHeap.prototype.add = function(value){
	this._heap.push(value);
	this.heapifyUp();
}

MaxHeap.prototype.poll = function(){
	const extractedValue = this._heap[0];
	const lastValue = this._heap.pop();
	if(this._heap.length>0){
		this._heap[0] = lastValue;
		this.heapifyDown();
	}
	return extractedValue;
}


var findKthLargest = function(nums, k) {
    const numHeap = new MaxHeap();
    nums.forEach(num => {
        numHeap.add(num);
    })
    let targetNum = null;
    for(let i=0;i<k;++i){
        targetNum = numHeap.poll();
    }
    return targetNum;
};