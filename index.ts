function sentenceSplitter(sentence: string) {
    var words = str.replace(/([ .,;]+)/g,'$1§sep§').split('§sep§');
}