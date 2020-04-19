/*
    leetcode
    category: "Algorithms"
    problem title: "Merge K Sorted Lists"
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

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

Heap.prototype.poll = function(){
	const extractedValue = this._heap[0] || null;
	const lastValue = this._heap.pop();
	if(this._heap.length!=0){
		this._heap[0] = lastValue;
		this.heapifyDown();
	}
	return extractedValue;
}

var mergeKLists = function(lists) {
    const minHeap = new Heap((i,j) => (j-i));
    lists.forEach(list => {
        let listNode = list;
        while(listNode!=null){
            minHeap.add(listNode.val);
            listNode = listNode.next;
        }
    })
    let head = null,tail=null;
    while(minHeap.getSize()>0){
        let listNode = new ListNode(minHeap.poll());
        if(head===null){
            head = listNode;
            tail = listNode;
        } else {
            tail.next = listNode;
            tail = listNode;
        }
    }
    
    return head;
    
};