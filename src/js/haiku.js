import Syllable from './syllable';

export default class Haiku {
    constructor(firstLine, secondLine, thirdLine) {
      this.firstLine = firstLine;
      this.secondLine = secondLine;
      this.thirdLine = thirdLine;
    };

   
  getWords(){  //returns an array of arrays of words with syllable countst from a line
    let x = [[],[],[]];
    for(let i = 0; i<this.firstLine.split(" ").length; i++) {
      let y = new Syllable(this.firstLine.split(" ")[i],0);
      y.findNextVowel();
      x[0].push([y.word,y.syllables]);
    };  
    for(let i = 0; i<this.secondLine.split(" ").length; i++) {
      let y = new Syllable(this.secondLine.split(" ")[i],0);
      y.findNextVowel();
      x[1].push([y.word,y.syllables]);
    };  
    for(let i = 0; i<this.thirdLine.split(" ").length; i++) {
      let y = new Syllable(this.thirdLine.split(" ")[i],0);
      y.findNextVowel();
      x[2].push([y.word,y.syllables]);
    };  
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