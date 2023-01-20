function sentenceSplitter(sentence: string): Array {
    return sentence.replace(/([ .,;]+)/g,'$1§sep§').split('§sep§');
}

console.log('this is a test sentence');