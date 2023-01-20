function sentenceSplitter(sentence: string): string[] {
    let words: string[] = sentence.split(' ');
    return words;
}
function combineToSetnence(...words: string[]) : string {
    let wordsMerge = words.join();
    return wordsMerge;
}

let sentence = 'This is a test sentence';

console.log(sentenceSplitter(sentence));

console.log(combineToSetnence(sentence));