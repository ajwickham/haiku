import Syllable from '../src/js/syllable.js';
import Haiku from '../src/js/haiku.js';

describe('Syllable Count', () => {

    let testWord;

    beforeEach(() => {
        testWord = new Syllable("street",1);
    })
  test('A. Should correctly create a Syllable object', () => {
    expect(testWord.word).toEqual("street");
    expect(testWord.syllables).toEqual(1);
  });
  test('B.  Should correctly split syllable object into letter array', () => {
    expect((testWord.word).split("")).toEqual(["s","t","r","e","e","t"]);  
  });
  test('C.  Should correctly find the next consonant', () => {
    expect(testWord.syllables).toEqual(1);  
  });
  test('D.  Should correctly count syllables by counting first vowel then vowels after consonants that are not a final e', () => {
    testWord = new Syllable("beater",0);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(2);  
  });
  test('E.  Should correctly count syllables by counting first vowel then vowels after consonants that are not a final e', () => {
    testWord = new Syllable("Africa",0);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(3);  
  });
  test('F.  Should correctly manage employee', () => {
    testWord = new Syllable("employee",0);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(3);  
  });
  test('G.  Should correctly manage same', () => {
    testWord = new Syllable("same",0);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(1);  
  });
  test('H.  Should correctly manage adventure', () => {
    testWord = new Syllable("adventure",0);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(3);  
  });
  test('HA.  Should correctly manage silence', () => {
    testWord = new Syllable("silence",0);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(2);  //look at handle exceptions, e is last letter
  });
  test('I.  Should correctly manage fire', () => {
    testWord = new Syllable("fire",0);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(2);  
  });
  test('J.  Should correctly manage prism', () => {
    testWord = new Syllable("prism",0);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(2);  
  });
  test('K.  Should correctly manage a list of exception words', () => {
    testWord = new Syllable("hmm",0);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(1);
  });
  test('Tester1.  Should correctly manage a list of exception words', () => {
    testWord = new Syllable("An",0);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(1);
  });
  test('Tester2.  Should correctly manage a list of exception words', () => {
    testWord = new Syllable("The",0);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(1);
  });
  let haiku;

  

test('L. should correctly return the first word of the first line and count the syllables ', () => {
  haiku = new Haiku("An old","","");
  expect(haiku.getWords()).toEqual([[["An",1],["old",1]],[['',0]],[['',0]]]);
}); 

test('M. should correctly split first line into words and calculate the number of syllables', () => {
  haiku = new Haiku("An old silent pond","","")
  expect(haiku.getWords()).toEqual([[["An",1],["old",1],["silent",2],["pond",1]],[['',0]],[['',0]]]);
});

test('N. should correctly split the haiku into words and calculate the number of syllables', () => {
  haiku = new Haiku("An old silent pond","A frog jumps into the pond-","Splash! Silence again");
  expect(haiku.getWords()).toEqual([[["An",1],["old",1],["silent",2],["pond",1]],[["A",1],["frog",1],["jumps",1],["into",2],["the",1],["pond-",1]],[["Splash!",1],["Silence",2],["again",2]]]);
});
test('O. Should correct return total number of syllables', () => {
  haiku = new Haiku("An old silent pond","A frog jumps into the pond-","Splash! Silence again");
  expect(haiku.isItAHaiku()).toEqual(17);
});
test('P. Should place the number of syllables in first line', () => {
  haiku = new Haiku("An old silent pond","A frog jumps into the pond-","Splash! Silence again");
  haiku.isItAHaiku();
  expect(haiku.firstLineSyllables).toEqual(5);
});
test('Q. Should place the number of syllables in all lines', () => {
  haiku = new Haiku("An old silent pond","A frog jumps into the pond-","Splash! Silence again");
  haiku.isItAHaiku();
  expect(haiku.firstLineSyllables).toEqual(5);
  expect(haiku.secondLineSyllables).toEqual(7);
  expect(haiku.thirdLineSyllables).toEqual(5);
});




});
