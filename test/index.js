const assert = require('chai').assert;
import ConvertionOfWord from '../lib/components/ConvertionOfWord';

describe('Our Test Bundle', function() {
  it('should work', function() {
    assert(true);
  });

  context('ScoreWord', function() {
    it('should have an input field', function() {
      assert(true);
    });

    it('should be a function', function() {
      let score = new ConvertionOfWord();
      assert.isFunction(score.scoreWord);
    });

    it('should return the total score of the word', function() {
      let score = new ConvertionOfWord();
      let word = score.scoreWord('pancakes');
      assert.equal(word, 16);
    });

    it('should return 8 for the word "hello"', function() {
      let score = new ConvertionOfWord();
      let word = score.scoreWord('hello');
      assert.equal(word, 8);
    });

    it('should return 0 if an empty string', function() {
      let score = new ConvertionOfWord();
      let word = score.scoreWord('');
      assert.equal(word, 0);
    });

    it('should strip any whitespaces before or after the word', function() {
      let score = new ConvertionOfWord();
      let word = score.scoreWord('   he l lo ');
      assert.equal(word, 8);
    });

    it('should take an optional second argument for the word multiplier', function() {
      let score = new ConvertionOfWord();
      let word = score.scoreWord('hello', 100);
      assert.equal(word, 800);
    });

  });
});
