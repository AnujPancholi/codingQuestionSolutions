/*
    interviewbit
    track: "programming"
    section: "math",
    problem title: "Greatest Common Divisor"
*/

const exportObj = { 
 //param A : integer
 //param B : integer
 //return an integer
    gcd : function(A, B){
        if(A===B){
            return A;
        }
        if(B>A){
            var temp = A;
            A=B;
            B=temp;
        }
        if(B===0)return A;
        var rem = A%B;
        if(rem===0){
            return B;
        } else {
            return exportObj.gcd(B,rem);
        }
        
    }
};

module.exports = exportObj