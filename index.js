"use strict";
function sentenceSplitter(sentence) {
    let words = sentence.split(' ');
    return words;
}
function combineToSetnence(...words) {
    let wordsMerge = words.join();
    return wordsMerge;
}
let sentence = 'This is a test sentence';
console.log(sentenceSplitter(sentence));
console.log(combineToSetnence(sentence));
