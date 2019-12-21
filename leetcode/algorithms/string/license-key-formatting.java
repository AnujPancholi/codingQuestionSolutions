/*
    leetcode
    category: "Algorithms"
    problem title: "License Key Formatting"
*/


class Solution {
    public String licenseKeyFormatting(String S, int K) {
        StringBuilder lisenceCharsBuilder = new StringBuilder();
        for(int i=0;i<S.length();i++){
            if(S.charAt(i)!='-'){
                lisenceCharsBuilder.append(Character.toString(Character.toUpperCase(S.charAt(i))));
            }
        }
        String Scpy = lisenceCharsBuilder.toString();
        StringBuilder newLisenceBuilder = new StringBuilder();
        int headLength = Scpy.length()%K;
        int sectionCounter = 0;
        for(int i=0;i<Scpy.length();i++){
            char currentChar = Scpy.charAt(i);
            if(currentChar=='-'){
                continue;
            }
            if(i<headLength){
                newLisenceBuilder.append(Character.toString(currentChar));
                if(i==headLength-1 && i<Scpy.length()-1){
                    newLisenceBuilder.append("-");
                }
                continue;
            }
            if(sectionCounter==K){
                newLisenceBuilder.append("-");
                sectionCounter=0;
            }
            newLisenceBuilder.append(Character.toString(currentChar));
            ++sectionCounter;
        }
        
        return newLisenceBuilder.toString();
        
    }
}