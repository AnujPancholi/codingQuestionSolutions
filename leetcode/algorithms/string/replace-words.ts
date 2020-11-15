/*
    leetcode
    category: "Algorithms"
    problem title: "Replace Words"
*/

function replaceWords(dictionary: string[], sentence: string): string {
    
    const sentenceBuilder = sentence.split(' ');
    
    for(let i=0;i<sentenceBuilder.length;++i){
        dictionary.forEach(root => {
            if(sentenceBuilder[i].indexOf(root)===0){
                sentenceBuilder[i] = root;
            }
        })
    }
    
    return sentenceBuilder.join(' ')
};