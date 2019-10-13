
    # interviewbit
    # track: "programming",
    # section: "math",
    # problem title: "fizzBuzz"    

class Solution:
    # @param A : integer
    # @return a list of strings
    def fizzBuzz(self, A):
        answerList = [];
        for i in range(1,A+1):
            string = "";
            if(i%3==0):
                string+="Fizz";
            if(i%5==0):
                string+="Buzz";
            if(len(string)==0):
                string+=str(i);
            answerList.append(string);
        return answerList;