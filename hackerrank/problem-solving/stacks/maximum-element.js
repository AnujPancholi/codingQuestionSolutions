
//<myCode>---------------------------------

const MaxStack = function(){
    this._stack=[];
    this._maxStack = [];
}

MaxStack.prototype.push = function(elem){
    this._stack.push(elem);
    const maxStackSize = this._maxStack.length;
    if(maxStackSize===0 || this._maxStack[maxStackSize-1]<=elem){
        this._maxStack.push(elem);
    }
}

MaxStack.prototype.pop = function(){
    if(this._stack.length===0){
        return null;
    }
    const poppedValue = this._stack.pop();
    if(poppedValue===this._maxStack[this._maxStack.length-1]){
        this._maxStack.pop();
    }
    return poppedValue;
}

MaxStack.prototype.getMax = function(){
    const maxStackSize = this._maxStack.length;
    if(maxStackSize===0){
        return null;
    }
    return this._maxStack[maxStackSize-1];
}


function processData(input) {
    //Enter your code here
    let str = "";
    let inputSize = 0,inp1=0,inp2=0;
    let i=0;
    while(input[i]!='\n'){
        str+=input[i];
        ++i;
    }
    inputSize = parseInt(str);
    str="";
    ++i;

    const mStack = new MaxStack();

    for(;i<=input.length;++i){
        if(input[i]==='\n' || !input[i]){
          inp2=parseInt(str);
          str="";
          
          const queryType = inp1===0 ? inp2 : inp1;
          switch(queryType){
              case 1:
                mStack.push(inp2);
              break;
              case 2:
               mStack.pop();
              break;
                case 3:
                console.log(mStack.getMax());
                break;
          }
          inp1=0;
        } else if(input[i]===' '){
            inp1 = parseInt(str);
            str="";
        } else {
            str+=input[i];
        }
    }
    
} 

//</myCode>-----------------------------------------

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
