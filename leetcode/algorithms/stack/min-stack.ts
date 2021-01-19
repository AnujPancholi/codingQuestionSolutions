/*
    leetcode
    category: "Algorithms"
    problem title: "Min Stack"
*/


class MinStack {
    _stack: number[];
    min: number | null;
    constructor() {
        
        this._stack = [];
        this.min = null;

    }

    push(x: number): void {
        
        if(this.min===null){
            this.min = x;
        } else if (x<=this.min){
            this._stack.push(this.min);
            this.min = x;
        }
        this._stack.push(x);

    }

    pop(): void {
        const poppedVal: number | null = this._stack.pop();

        if(poppedVal===this.min){
            this.min = this._stack.length===0 ? null : this._stack.pop();
        }
        

    }

    top(): number {
        
        return this._stack[this._stack.length-1];

    }

    getMin(): number {
        
        return this.min;

    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */