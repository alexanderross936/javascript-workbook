'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
  var lower = word.trim().toLowerCase();
  var split = lower.split("");
  if (split[0] === 'a' || split[0] === 'e' || split[0]=== 'i' || split[0] === 'o' || split[0] === 'u'
  || split[0] === 'A' || split[0] === 'E' || split[0]==='I' || split[0] ==='O' || split[0] === 'U') {
  split.push('yay')
  var str = split.join("")
  return str     
  } else if (split[0] !== 'a'||'e'||'i'||'o'||'u' ){
    var i;
    const ar = [];
    var dog = [];
    for (i = 0; i < word.length; i++){
      ar.push(split[0]);
      split.shift();
      if (split[i] === 'a' ||split[i] === 'e' || split[i] === 'i' || split[i] === 'o' || split[i] === 'u'){
        break;}
      // } else {
      //   continue;
      }
    
 // split.push(dog);
  split.push(ar.join(""));
  split.push('ay');
  var str = split.join("");
  return str;
}}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
