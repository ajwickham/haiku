export default class Syllable {
    constructor(word, syllables) {
      this.word = word;
      this.syllables = syllables;
    }
    
  findNextVowel(){
    let count =0;
    let x;
    for(let i = 0; i<((this.word).split("")).length; i++) {
        x= ((this.word).split(""))[i]
        if(/[aeiouy]/.test(x)) {
          count = count + 1;
          this.syllables = count;
          
          if(i<((this.word).split("")).length) {   //checks if at the end of the word
            for(let j = i+1; j<(((this.word).split("")).length);j++) {
                if(/[aeiouy]/.test(((this.word).split(""))[j]))
                return "yippee" 
            }  
            /*
            if(/e/.test(((this.word).split(""))[i+1])) { //ignores next letter if it is e
                  i=i+1;
              }
              
              if()*/
          }
      };
    };    
  }  
}