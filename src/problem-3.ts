const countWordOccurrences = (sentence: string, word: string): number => {
    const words = sentence.toLowerCase().split(' ');
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i] === word.toLowerCase()) {
        count++;
      }
    }
    return count;
  };
  
  console.log(countWordOccurrences("I love typescript", "typescript")); 
  