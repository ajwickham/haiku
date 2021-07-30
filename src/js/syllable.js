export default class Syllable {
    constructor(word, syllables) {
      this.word = word;
      this.syllables = syllables;
    }
    
  findNextVowel(){
    let count =0;
    let splitWord = (this.word).split("");
    for(let i = 0; i<splitWord.length; i++) {
      if(/[aeiouy]/.test(splitWord[i])) {
        count = count + 1;
        this.syllables = count;
        i = this.findNextConsonant(i);
      };
    };    
  } 
  findNextConsonant(i) {
    let splitWord = (this.word).split("");
    let j;
    if(i<(splitWord.length)) {   //checks if at the end of the word
      for(j = i+1; j<(splitWord.length); j++) {  //finds next consonant
        if(/[aeiouy]/.test(splitWord[j])===false) {
          if(/e/.test(splitWord[j+1])&&(j+1 === (splitWord.length-1))){ 
            j = splitWord.length;
            i = j;
          }
          if(/s/.test(splitWord[j])&&((/m/.test(splitWord[j+1]))&&(j+1 === (splitWord.length-1)))) {
            this.syllables = this.syllables + 1;
            i=j;
            return i   
          }
          else {
            i=j;
            return i
          }  
        } 
      }
      this.syllables = this.syllables + 1   
    }  
    i = j
    return i //if it finds a consonant it returns to find next vowel  
      //count = count + 1 // if no consonants add 1 to syllable count (employee)    
  } 
}