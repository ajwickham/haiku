import Syllable from './syllable';

export default class Haiku {
    constructor(firstLine, secondLine, thirdLine,firstLineSyllables,secondLineSyllables,thirdLineSyllables) {
      this.firstLine = firstLine;
      this.secondLine = secondLine;
      this.thirdLine = thirdLine;
      this.firstLineSyllables = firstLineSyllables;
      this.secondLineSyllables = secondLineSyllables;
      this.thirdLineSyllables = thirdLineSyllables
    };

    isItAHaiku() {
      let y = 0;
      let z = 0;
      let x = this.getWords();
      for(let i = 0; i<3; i++) {
        for(let j=0; j<x[i].length; j++) {
          
          y=y+(x[i][j][1])
        };
      };
    return y;  
    }   
   
  getWords(){  //returns an array of arrays of words with syllable countst from a line
    let x = [[],[],[]];
    let z = 0;
    for(let i = 0; i<this.firstLine.split(" ").length; i++) {
      let y = new Syllable(this.firstLine.split(" ")[i],0);
      y.findNextVowel();
      z = z + y.syllables;
      x[0].push([y.word,y.syllables]);
    };  
    this.firstLineSyllables = z;
    z=0
    for(let i = 0; i<this.secondLine.split(" ").length; i++) {
      let y = new Syllable(this.secondLine.split(" ")[i],0);
      y.findNextVowel();
      z = z + y.syllables;
      x[1].push([y.word,y.syllables]);
    };  
    this.secondLineSyllables = z;
    z=0
    for(let i = 0; i<this.thirdLine.split(" ").length; i++) {
      let y = new Syllable(this.thirdLine.split(" ")[i],0);
      y.findNextVowel();
      z = z + y.syllables;
      x[2].push([y.word,y.syllables]);
    };  
    this.thirdLineSyllables = z;
    z=0
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