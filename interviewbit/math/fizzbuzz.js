/*
    interviewbit
    track: "programming",
    section: "math",
    problem title: "FizzBuzz"
*/

module.exports = { 
 //param A : integer
 //return a array of strings
	fizzBuzz : function(A){
        var fbArr = [];
        for(var i=1;i<=A;i++){
            var str = "";
            if(i%3===0){
                str+="Fizz";
            }
            if(i%5===0){
                str+="Buzz";
            }
            if(str===""){
                str = i.toString();
            }
            // console.log(str);
            fbArr.push(str);
        }
        return fbArr;
	}
};