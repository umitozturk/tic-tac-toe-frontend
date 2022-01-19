import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { arg } from 'ember-arg-types';
import { action } from '@ember/object';
import { boardPlace } from 'tic-tac-toe-frontend/utils/board-place';

export default class BoardTicTacToeComponent extends Component {
  @arg
  xPlayer;

  @arg
  oPlayer;

  // Create array to hold board data
  @tracked boardData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
  // Define game variables
  @tracked player = 1;
  @tracked gameOver = false;
  @tracked result = '';

  // Pull in cells from DOM
  @tracked cellElements = window.document.querySelectorAll(".cell");
  // Pull in the result text from DOM
  @tracked resultElement = window.document.getElementById("result");


  @action
  cellClick(rowIndex, colIndex) {
    let index = rowIndex + '' + colIndex;
    let placeIndex = boardPlace(index, this.cellElements);

    this.placeMarker(placeIndex);

    console.log(this.boardData);
  }

  // Create function for placing markers
  placeMarker(index) {
    // Determine row and column from index
    let col = index % 3
    let row = (index - col) / 3
    // Check if the current cell is empty
    if(this.boardData[row][col] == 0 && this.gameOver == false) {
      this.boardData[row][col] = this.player;
      // eslint-disable-next-line no-self-assign
      this.boardData = this.boardData.map((rowMap, rowI)=> {
        return rowMap.map((cell, colI)=>{
            if(rowI === row && colI === col){
                return this.player;
            } else {
                return cell;
            }
        })
      })
      // change player
      this.player *= -1;
      // Update the screen with markers
      // drawMarkers();
      // Check if anyone has won
      this.checkResult();
    }
  }

  // // Create function for drawing player markers
  // // function drawMarkers() {
  // //   // Iterate over rows
  // //   for(let row = 0; row < 3; row++) {
  // //     // Iterate over columns
  // //     for(let col = 0; col <3; col++) {
  // //       // Check if it is player 1's marker
  // //       if(boardData[row][col] == 1) {
  // //         // Update cell class to add a cross
  // //         cellElements[(row * 3) + col].classList.add("cross");
  // //       } else if(boardData[row][col] == -1) {
  // //         // Update cell class to add a circle
  // //         cellElements[(row * 3) + col].classList.add("circle");
  // //       }
  // //     }
  // //   }
  // // }

  // Create function for checking the result of the game
  checkResult() {
    // Check rows and columns
    for(let i = 0; i < 3; i++) {
      let rowSum = this.boardData[i][0] + this.boardData[i][1] + this.boardData[i][2];
      let colSum = this.boardData[0][i] + this.boardData[1][i] + this.boardData[2][i];
      if(rowSum == 3 || colSum == 3) {
        // Player 1 wins
        this.endGame(1);
        return
      } else if(rowSum == -3 || colSum == -3) {
        // Player 2 wins
        this.endGame(2);
        return
      }
    }

    // Check diagonals
    let diagonalSum1 = this.boardData[0][0] + this.boardData[1][1] + this.boardData[2][2];
    let diagonalSum2 = this.boardData[0][2] + this.boardData[1][1] + this.boardData[2][0];
    if(diagonalSum1 == 3 || diagonalSum2 == 3) {
      // Player 1 wins
      this.endGame(1);
      return
    } else if(diagonalSum1 == -3 || diagonalSum2 == -3) {
      // Player 2 wins
      this.endGame(2);
      return
    }

    // Check for a tie
    if(this.boardData[0].indexOf(0) == -1 &&
      this.boardData[1].indexOf(0) == -1 &&
      this.boardData[2].indexOf(0) == -1) {
      this.endGame(0);
      return
    }
  }

  // Function to end the game and display the result
  endGame(winner) {
    // Trigger game over
    this.gameOver = true;
    // Check if game ended in a tie
    if(winner == 0) {
      this.resultElement = "It's a tie!"
    } else {
      this.resultElement = `Player ${winner} wins!`
    }
  }
}
