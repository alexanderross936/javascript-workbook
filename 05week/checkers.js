'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Just like Tic Tac Toe.
function switchPlayer(){
  if(playerTurn === blackChecker){
    playerTurn = whiteChecker;
  } else {
    playerTurn = blackChecker;
  }
}

// Create Checker class and board symbols.
class Checker {
  constructor (color){
    if(color === 'white'){
      this.symbol = 'W';
      this.color = color;
    } else {
      this.symbol = 'B';
      this.color = color;
    }
  }
}

// Create a white and black checker class.
const whiteChecker = new Checker('white');
const blackChecker = new Checker('black');
let playerTurn = blackChecker;

// In checkers, the move has to be diagonal. Which means for the black checker, the move must be -1 column and +/- 1 row.
// The opposite is true for the white checker.
const diagonalMove = (startX, startY, endX, endY, startSpace, toSpace) => {
  if(playerTurn === blackChecker){
    if((endX - startX === -1) && (endY - startY === 1 || endY - startY === -1)){
      return true;
    }
  } else if(playerTurn === whiteChecker){
    if((endX - startX === 1) && (endY - startY === 1 || endY - startY === -1)){
      return true;
    }
  } else {
    return false;
  }
}

// The entry has to be in bounds. In this case it's an 8x8 board so the starting index is 0 and the final index is 7.

const isInBounds = (startX, startY, endX, endY) => {
  if( (startX || startY || endX || endY) >= 0 && (startX || startY || endX || endY) <= 7){
    return true;
  }
  return false
}

// In order to move a piece it must be there. It can't be null and the piece color has to equal the player turn color.
const isstartSpaceThere = (startX, startY) =>{
  if( game.board.grid[startX][startY] !== null && playerTurn.symbol === game.board.grid[startX][startY].symbol ){
    return true;
  }
}

// Wherever you move the checker to must be null.
const isToSpaceEmpty = (endX, endY) => {
  if(game.board.grid[endX][endY] === null){
    return true;
  }
}


// Creating the Board class! createGrid() and viewGrid() were already here.
class Board {
  constructor() {
    this.grid = []
    this.checkers = []
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }

  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  // Here we replace the null values in the board array with the checkers. 24 of the 64 spaces will now have a value other than null.
  // The for loops had to be made in such a way that checkers are placed where they belong on a normal checker board. This required nested for loops. 
  setPieces(){
    for(let r = 0; r < 8; r ++){
      if(r <= 2){
        for( let c = 0; c < 8; c ++){
          if ((c % 2 !== 0) && (r % 2 == 0)){
            this.grid[r][c] = whiteChecker;
            this.checkers.push(whiteChecker);
          } else if ((c % 2 == 0) && (r % 2 !== 0)){
            this.grid[r][c] = whiteChecker;
            this.checkers.push(whiteChecker);
            }
          }
      } else if (r >= 5){
          for( let c = 0; c < 8; c ++){
            if ((c % 2 !== 0) && (r % 2 == 0)){
              this.grid[r][c] = blackChecker;
              this.checkers.push(blackChecker);
            } else if ((c % 2 == 0) && (r % 2 !== 0)){
              this.grid[r][c] = blackChecker;
              this.checkers.push(blackChecker);
            }
          }
        }
      }

    }
  
  // Here we have to enable a player to jump and replace the space they jumped over with null, as well as the space they left behind them.
  jumpPiece (startX, startY, startSpace, toSpace){
    let jump = startSpace - toSpace;

    if(playerTurn.color === blackChecker.color){
      let rightMove = this.grid[startX - 1][startY + 1];
      let leftMove = this.grid[startX - 1][startY - 1];
      if(jump === 18 && this.symbol !== playerTurn.symbol && rightMove !== null){
        let x = this.grid[startSpace[0]][startSpace[1]];

        this.grid[startSpace[0]][startSpace[1]] = null;
        this.grid[startSpace[0] - 1][parseInt(startSpace[1]) + 1] = null;
        this.grid[toSpace[0]][toSpace[1]] = x;
        this.checkers.splice(this.checkers.indexOf(this.grid[startX][startY]));
        switchPlayer();
      } else if (jump === 22 && leftMove !== playerTurn.symbol && leftMove !== null){
        let x = this.grid[startSpace[0]][startSpace[1]];
        this.grid[startSpace[0]][startSpace[1]] = null;
        this.grid[startSpace[0] - 1][parseInt(startSpace[1]) - 1] = null;
        this.grid[toSpace[0]][toSpace[1]] = x;
        this.checkers.splice(this.checkers.indexOf(this.grid[startX][startY]))
        switchPlayer();
      } else {
        return false;
      }
    }
  
    else if (playerTurn.color === whiteChecker.color){  
      let wRightMove = this.grid[startX + 1][startY + 1];
      let wLeftMove = this.grid[startX + 1][startY - 1];
      if(jump === -18 && this.symbol !== playerTurn.symbol && wLeftMove !== null){
        let x = this.grid[startSpace[0]][startSpace[1]];
        this.grid[startX][startY] = null;
        this.grid[startX + 1][startY + 1] = null;
        this.grid[startX + 1][startY - 1] = null;
        this.grid[toSpace[0]][toSpace[1]] = x;
        this.checkers.splice(this.checkers.indexOf(this.grid[startX][startY]))
        switchPlayer();
      } else if (jump === -22 && wRightMove !== playerTurn.symbol && wRightMove !== null){
        let x = this.grid[startSpace[0]][startSpace[1]];
        this.grid[startX][startY] = null;
        this.grid[startX + 1][startY + 1] = null;
        this.grid[toSpace[0]][toSpace[1]] = x;
        this.checkers.splice(this.checkers.indexOf(this.grid[startX][startY]));
        switchPlayer();
      } else {
        return false;
      }
    }
  }
}

// Here we make the Game class, give it a clean board, and allow the user to move the pieces. We put all the functions defined at the beginning together to make the game work.
class Game {
  constructor() {
    this.board = new Board;
  }
  

  start() {
    this.board.createGrid();
    this.board.setPieces();
  
  }
  moveChecker(startSpace, toSpace){
    let start = startSpace.split('');
    let end = toSpace.split('');
    let startX = parseInt(start[0]);
    let startY = parseInt(start[1]);
    let endX = end[0];
    let endY = end[1];

    if(isInBounds(startX, startY, endX, endY)){
      if (isstartSpaceThere(startX, startY)){
        if(diagonalMove(startX, startY, endX, endY)){
          if(isToSpaceEmpty(endX, endY)) {
            let x = this.board.grid[startSpace[0]][startSpace[1]];
            this.board.grid[startSpace[0]][startSpace[1]] = null;
            this.board.grid[toSpace[0]][toSpace[1]] = x;
            switchPlayer();
          }
        } else if (startX - endX == 2 || endX - startX == 2) {
          this.board.jumpPiece(startX, startY, startSpace, toSpace)
        } else console.log('Invalid entry.')
      } else {
        console.log('Invalid entry.');
      }
    } else {
      console.log ('Invalid entry.')
    }
  }
}

  


function getPrompt() {
  console.log('~~~~~~~~~~~~~~~~~~~');
  console.log(`Player Turn: ${playerTurn.symbol}`)
  game.board.viewGrid();
  rl.question('which piece?: ', (startSpace) => {
    rl.question('to where?: ', (toSpace) => {
      game.moveChecker(startSpace, toSpace);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
