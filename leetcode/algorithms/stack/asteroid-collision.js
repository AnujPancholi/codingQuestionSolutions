/*
    leetcode
    category: "Algorithms"
    problem title: "Asteroid Collision"
*/


/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

const _private_stack_map = new WeakMap();

const Stack = function(){
    const _stackData = {
        stack: []
    }
    _private_stack_map.set(this,_stackData);
    
}


Stack.prototype.push = function(val){
    let stackData = _private_stack_map.get(this);
    stackData.stack.push(val);
}

Stack.prototype.pop = function(){
    let stackData = _private_stack_map.get(this);
    return stackData.stack.pop();
}

Stack.prototype.peek = function(){
    let stackData = _private_stack_map.get(this);
    return stackData.stack.length===0 ? null : stackData.stack[stackData.stack.length-1];
}

Stack.prototype.getSize = function(){
    let stackData = _private_stack_map.get(this);
    return stackData.stack.length;
}


const isCollisionImminent = (n1,n2) => {
    return n2!=null && n1>0 && n2<0;
}

const getCollisionResult = (n1,n2) => {
    let collisionResult = 0;
        if(Math.abs(n1)>Math.abs(n2)){
            collisionResult=n1;
        } else if(Math.abs(n1)<Math.abs(n2)) {
            collisionResult=n2;            
        }
    return collisionResult;
}

var asteroidCollision = function(asteroids) {
    
    const astStack = new Stack();
        
    for(let i=0;i<asteroids.length;i++){
        let resultToPush = asteroids[i];
        while(astStack.peek()!=null && isCollisionImminent(astStack.peek(),resultToPush)){
            const collisionResult = getCollisionResult(astStack.pop(),resultToPush);
            resultToPush = collisionResult!=0 ? collisionResult : null;
        }
        if(resultToPush!=null){
            astStack.push(resultToPush);
        }
    }
    
    const arr = Array.from({length: astStack.getSize()});
    let i=arr.length-1;
    while(astStack.peek()){
        arr[i] = astStack.pop();
        --i;
    }
    
    return arr;
    
};