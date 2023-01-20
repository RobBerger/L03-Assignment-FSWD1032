"use strict";
function sentenceSplitter(sentence) {
    return str.replace(/([ .,;]+)/g, '$1§sep§').split('§sep§');
}
console.log('this is a test sentence');
