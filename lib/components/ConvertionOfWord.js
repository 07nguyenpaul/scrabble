class ConvertionOfWord {
  constructor() {
    this.letters = {
      A: 1, B: 3, C: 3, D: 2,
      E: 1, F: 4, G: 2, H: 4,
      I: 1, J: 8, K: 5, L: 1,
      M: 3, N: 1, O: 1, P: 3,
      Q: 10, R: 1, S: 1, T: 1,
      U: 1, V: 4, W: 4, X: 8,
      Y: 4, Z: 10
    };
  }

  scoreWord(word, multiplier = 1) {
    let filteredWord =  word.trim().toUpperCase().split('');
    let temporaryArray = [];

    for(var i = 0; i < filteredWord.length; i++) {
      if(this.letters[filteredWord[i]]) {
        temporaryArray.push(this.letters[filteredWord[i]]);
      }
    }
    if(!filteredWord.length) {
      return 0;
    }
    return (temporaryArray.reduce((a, b) => {return a + b;}) * multiplier);
  }
}
export default ConvertionOfWord;
