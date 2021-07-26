import Syllable from '../src/js/syllable';

describe('Syllable Count', () => {

    let testWord;

    beforeEach(() => {
        testWord = new Syllable("ear",2);
    })
  test('A. Should correctly create a Syllable object', () => {
    expect(testWord.word).toEqual("ear");
    expect(testWord.syllables).toEqual(2);
  });
});