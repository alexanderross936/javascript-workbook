'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  var popstore = stacks[startStack].pop();
  stacks[endStack].push(popstore);

}

function isLegal(startStack, endStack) {
  var startStackLength = stacks[startStack].length;
  var endStackLength = stacks[endStack].length;
  if (
    startStackLength === 0 || 
    startStack == endStack ||
    stacks[startStack][startStackLength - 1] > stacks[endStack][endStackLength - 1]){
    return false;
  }
  return true;
}

function checkForWin() {
  if (stacks.b.length === 4 || stacks.c.length === 4){
    return true;
  }
return false;
}

// function towersOfHanoi(startStack, endStack) {
//   //var pusher = startStack.slice(-1);
//   //var pusher2 = pusher[0];
//   var popstore = startStack.pop();
//   endStack.push(popstore);
//   return stacks;
// }

function towersOfHanoi (startStack, endStack) {
  if (isLegal(startStack, endStack)){
    movePiece(startStack, endStack);
  } else {
    return "Invalid Move.";
  }
  if (checkForWin()){
    return "You won!";
  }
}

// function towersOfHanoi(startStack, endStack) {
//   var pusher = startStack.slice(0);
//   var pusher2 = pusher[0];
//   var popstore = startStack.pop();
//   // console.log(popstore);
//   endStack.push(popstore);
//   return stacks;

// }

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });

      towersOfHanoi('a', 'c');
      assert.deepEqual(stacks, { a: [4, 3], b: [1], c: [2] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);   
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
      stacks = { a: [1], b: [4, 3], c: [2] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
