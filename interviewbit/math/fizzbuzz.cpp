/*
	interviewbit
	track: "programming"
	section: "math"
	problem title: "FizzBuzz"
*/
#include<sstream>
#include<string>

string fizzBuzzOutput(int &num){
    ostringstream strOutput;
    if(num%3==0){
        strOutput<<"Fizz";
    }
    if(num%5==0){
        strOutput<<"Buzz";
    }
    if(num%3!=0 && num%5!=0){
        strOutput<<num;
    }
    return strOutput.str();
}

vector<string> Solution::fizzBuzz(int A) {
    vector<string> outputVector;
    for(int i=1;i<=A;i++){
        outputVector.push_back(fizzBuzzOutput(i));
    }
    return outputVector;
}
