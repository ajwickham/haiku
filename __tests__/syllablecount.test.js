import Syllable from '../src/js/syllable';

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
    testWord = new Syllable("beater",1);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(2);  
  });
  test('E.  Should correctly count syllables by counting first vowel then vowels after consonants that are not a final e', () => {
    testWord = new Syllable("Africa",1);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(3);  
  });
  test('F.  Should correctly manage employee', () => {
    testWord = new Syllable("employee",0);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(3);  
  });
  test('G.  Should correctly manage same', () => {
    testWord = new Syllable("same",1);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(1);  
  });
  test('H.  Should correctly manage adventure', () => {
    testWord = new Syllable("adventure",1);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(3);  
  });
  test('I.  Should correctly manage fire', () => {
    testWord = new Syllable("fire",0);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(2);  
  });
  test('J.  Should correctly manage prism', () => {
    testWord = new Syllable("prism",1);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(2);  
  });
  test('K.  Should correctly manage a list of exception words', () => {
    testWord = new Syllable("hmm",0);
    testWord.findNextVowel();
    expect(testWord.syllables).toEqual(1);
  });
});