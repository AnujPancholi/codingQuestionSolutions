/*
    interviewbit
    track: "programming",
    section: "math",
    problem title: "Reverse Integer"
*/

function get32BitInteger(){
    var value = 0;
    //counting only 31 bits because it's a signed int
    for(var i=0;i<31;i++){
        value+=Math.pow(2,i);
    }
    return value;
}

module.exports = { 
 //param A : integer
 //return an integer
	reverse : function(A){
        var MAX_VAL = get32BitInteger();
        var sign = A<0 ? -1 : 1;
        var reverse_value = parseInt(A.toString().split('').reverse().join(''))
        if((reverse_value)>MAX_VAL){
            return 0;
        }
        return sign*reverse_value;
	}
};
