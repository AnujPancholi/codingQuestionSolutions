class Solution:
    def reverseWords(self, s: str) -> str:
        wordList = s.strip().split();
        wordList.reverse();
        return ' '.join(filter(lambda x: len(x)>0,wordList));