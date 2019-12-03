/*
    leetcode
    category: "Algorithms"
    problem title: "Guess Number Higher or Lower"
*/

/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        if(guess(1)==0){
            return 1;
        }
        if(guess(n)==0){
            return n;
        }
        boolean isNumberFound = false;
        long low=1,high=n;
        long myGuess=-1;
        while(!isNumberFound){
            myGuess = (long)Math.floor((high+low)/2);
            switch(guess((int)myGuess)){
                case -1:
                    high=myGuess;
                    break;
                case 1:
                    low=myGuess;
                    break;
                case 0:
                    isNumberFound=true;
                    break;
            }
        }
        return (int)myGuess;
    }
}