function repeat(str, ignore) {
    // Convert the string to lowercase and split it into words
    let words = str.toLowerCase().split(" ");  

    // Filter out the ignored word
    words = words.filter(word => word !== ignore.toLowerCase());

  
    // Count occurrences of each word
    const wordCount = {};
words.map(word => {
  if (word && word !== ignore.toLowerCase()) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
});
  
    // Find and return words that appear more than once
    const repeatedWords = Object.keys(wordCount).filter(word => wordCount[word] > 1);
    return repeatedWords;
  }
  
  // Example usage:
  let str = "this is the test, this test is hard";
  let ignore = "this";
  
  console.log(repeat(str, ignore)); // Output: [ 'is', 'test' ]
  