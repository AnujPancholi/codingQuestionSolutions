/*
    leetcode
    category: "Algorithms"
    problem title: "Design Linked List"
*/

class MyLinkedList {
    _arr: number[];
    constructor() {
        this._arr = [];
    }

    get(index: number): number {
        if(index<0 || index>=this._arr.length){
            return -1;
        }
        return this._arr[index];
    }

    addAtHead(val: number): void {
        this._arr.unshift(val);
    }

    addAtTail(val: number): void {
        this._arr.push(val);
    }

    addAtIndex(index: number, val: number): void {
        if(index<0 || index>this._arr.length){
            return;
        }
        this._arr.splice(index,0,val);
    }

    deleteAtIndex(index: number): void {
        if(index<0 || index>=this._arr.length){
            return;
        }
        this._arr.splice(index,1);
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */