// put peice on board.
// Get it to swich players.

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Check rows of board for match.
  if (board[0][0] === playerTurn 
    && board[0][1] === playerTurn 
    && board[0][2] === playerTurn)
    {
      return true;
  } else if(board[1][0] === playerTurn 
    && board[1][1] === playerTurn 
    && board[1][2] === playerTurn) {
      return true;
  } else if(board[2][0] === playerTurn 
    && board[2][1] === playerTurn 
    && board[2][2] === playerTurn) {
      return true;
  } else {
    return false;
  }
}

function verticalWin() {
  // Your code here
  //Check columns of board for match
  if (board[0][0] === playerTurn 
    && board[1][0] === playerTurn 
    && board[2][0] === playerTurn)
    {
      return true;
  } else if(board[0][1] === playerTurn 
    && board[1][1] === playerTurn 
    && board[2][1] === playerTurn) {
      return true;
  } else if(board[0][2] === playerTurn 
    && board[1][2] === playerTurn 
    && board[2][2] === playerTurn) {
      return true;
  } else {
    return false;
  }
}

function diagonalWin() {
  // Your code here
  if (board[0][0] === playerTurn 
    && board[1][1] === playerTurn 
    && board[2][2] === playerTurn)
    {
      return true;
  } else if(board[0][2] === playerTurn 
    && board[1][1] === playerTurn 
    && board[2][0] === playerTurn) {
      return true;
  } else {
    return false;
  }
}

function checkForWin() {
  // Your code here
  // Check for horizontal, vertical, diagonal wins
  // return true if any condition is true.
  if (horizontalWin() === true || verticalWin() === true || diagonalWin() === true){
    return true;
  } else {
    return false
  }
}

function ticTacToe(row, column) {
  // Your code here
  // manipulate board array
  // manipulate player turn variable
  let selectedRow = board[row];
  selectedRow[column] = playerTurn;
  if (playerTurn === 'X'){
    playerTurn = 'O';
  } else if (playerTurn === 'O'){
    playerTurn = 'X';
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
