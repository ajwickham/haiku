export default class Syllable {
    constructor(word, syllables) {
      this.word = word;
      this.syllables = syllables;
    }
    
  findNextVowel(){  //if it finds a vowel it adds 1 syllable
    let count =0;
    let splitWord = (this.word).split("");
    for(let i = 0; i<splitWord.length; i++) {
      if(/[aeiouy]/.test(splitWord[i])) {
        count = count + 1;
        this.syllables = count;
        i = this.findNextConsonant(i);
      };
    };
    if(count===0) {   //if the word has no vowels        
      this.handleExceptions(splitWord,splitWord.length);
    }    
  } 
  findNextConsonant(i) {
    let splitWord = (this.word).split("");
    let j;
    if(i<(splitWord.length)) {   //checks if at the end of the word
      for(j = i+1; j<(splitWord.length); j++) {  
        if(/[aeiouy]/.test(splitWord[j])===false) {  //finds next consonant   
          j = this.handleExceptions(splitWord,j);
          i=j;
          return i;
        }
        //return i; //goes back to find next vowel
        /*else {
          if (j===(splitWord.length-1)) {
            this.syllables = this.syllables + 1  // if no consonants add 1 to syllable count (employee) 
          }  
        }*/
      }
      this.syllables = this.syllables + 1   
    }  
    i = j
    return i //if it finds a consonant it returns to find next vowel  
      //count = count + 1    
  }
  handleExceptions(splitWord,j) {
    if(/e/.test(splitWord[j+1])&&
      (j+1 === (splitWord.length-1))) { // if e is last letter and we are at penultimate letter stop counting
      j = splitWord.length
      if(/i/.test(splitWord[j-3])&&(/r/.test(splitWord[j-2]))) {
        this.syllables = this.syllables + 1;   
      }
    }
    if((j>splitWord.length-3)&&(/s/.test(splitWord[splitWord.length-2]))&&(/m/.test(splitWord[splitWord.length-1]))) {
      this.syllables = this.syllables + 1; 
    } 
    for(let k = 0; k<exceptionWords.length; k=k+1) {
      if(exceptionWords[k][0]===this.word) {
        this.syllables = exceptionWords[k][1];
        j = splitWord.length;
        return j;
      }
    } 
  return j
  } 
}
const exceptionWords = [["ear",2],["eel",2],["hmm",1],["tiara",3]]