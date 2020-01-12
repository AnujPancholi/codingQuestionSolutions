/*
    leetcode
    category: "Algorithms"
    problem title: "Long Pressed Name"
*/

class Solution {
    public boolean isLongPressedName(String name, String typed) {
        int namePtr=0,typedPtr=0;
        boolean isLongPressedName=true;
        char lastChar=name.charAt(namePtr);
        for(;typedPtr<typed.length();++typedPtr){
            if(namePtr<(name.length()) && name.charAt(namePtr)==typed.charAt(typedPtr)){
                lastChar=name.charAt(namePtr);
                ++namePtr;
            }
            if(typed.charAt(typedPtr)!=lastChar){
                isLongPressedName=false;
                break;
            }
        }
        return namePtr<(name.length()) ? false : isLongPressedName;
        
    }
}