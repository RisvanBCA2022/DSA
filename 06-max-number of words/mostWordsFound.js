// const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
const sentences = ["please wait", "continue to fight", "continue to win"]
var mostWordsFound = function(sentences) {
    let maxnumber=0
    if(sentences.length==0){
        return ''
    }
    for(let i=0;i<sentences.length;i++){
        const wordarray=sentences[i].split(' ')
        console.log(wordarray);

        if(wordarray.length>maxnumber){
            maxnumber=wordarray.length
        }
    }
    return maxnumber

};

console.log(mostWordsFound(sentences))