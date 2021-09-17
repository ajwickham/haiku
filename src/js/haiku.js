import Syllable from './syllable';

export default class Haiku {
    constructor(firstLine, secondLine, thirdLine) {
      this.firstLine = firstLine;
      this.secondLine = secondLine;
      this.thirdLine = thirdLine;
    };

   
  getWords(){  //returns an array of arrays of words with syllable countst from a line
    let x = [this.firstLine.split(" ")[0]];
      //for(let i = 0; i<x.length; i++) {
    let y = new Syllable('An',0);
    y.findNextVowel();
    x.push(y.syllables);
    return x
  }
  countSyllables(){
    let x = this.getWords()
    for(let i = 0; i<x.length; i++) {
      x[i].push("5") 
    };
    return x
  }
}