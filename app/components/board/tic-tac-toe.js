import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { arg } from 'ember-arg-types';
import { action } from '@ember/object';
import { boardPlace } from 'tic-tac-toe-frontend/utils/board-place';
import { inject as service } from '@ember/service';

export default class BoardTicTacToeComponent extends Component {
  @service router;

  @arg
  xPlayer;

  @arg
  oPlayer;

  @tracked showToast = false;
  @tracked showEndInfo = false;

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
  @tracked resultElement = '';
  @tracked lastWinner = '';

  // Pull in cells
  @tracked cellElements = window.document.querySelectorAll(".cell");

  @action
  cellClick(rowIndex, colIndex) {
    let index = rowIndex + '' + colIndex;
    let placeIndex = boardPlace(index, this.cellElements);

    this.placeMarker(placeIndex);
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
      // Check if anyone has won
      this.checkResult();
    }
  }

  // Create function for checking the result of the game
  checkResult() {
    // Check rows and columns
    for(let i = 0; i < 3; i++) {
      let rowSum = this.boardData[i][0] + this.boardData[i][1] + this.boardData[i][2];
      let colSum = this.boardData[0][i] + this.boardData[1][i] + this.boardData[2][i];
      if(rowSum == 3 || colSum == 3) {
        // Player X wins
        this.endGame(1);
        return
      } else if(rowSum == -3 || colSum == -3) {
        // Player O wins
        this.endGame(2);
        return
      }
    }

    // Check diagonals
    let diagonalSum1 = this.boardData[0][0] + this.boardData[1][1] + this.boardData[2][2];
    let diagonalSum2 = this.boardData[0][2] + this.boardData[1][1] + this.boardData[2][0];
    if(diagonalSum1 == 3 || diagonalSum2 == 3) {
      // Player X wins
      this.endGame(1);
      return
    } else if(diagonalSum1 == -3 || diagonalSum2 == -3) {
      // Player O wins
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
    this.showEndInfo = true;
    // Check if game ended in a tie
    if(winner == 0) {
      this.resultElement = "It's a tie!";
      this.lastWinner = 'No one won in the last game.';
    } else {
      if(winner == 1) {
        this.resultElement = `Player ${this.xPlayer.name} wins!`;
        this.lastWinner = `${this.xPlayer.name} won in the last game.`
      } else {
        this.resultElement = `Player ${this.oPlayer.name} wins!`;
        this.lastWinner = `${this.oPlayer.name} won in the last game.`
      }
    }
  }

  // Reset game
  @action
  resetGame() {
    // Reset game board
    this.boardData = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
      ]
    this.player = 1;
    this.gameOver = false;
    this.showEndInfo = false;

    this.cellElements.forEach(cell => {
      cell.classList.remove("cross", "circle");
    });
      // Reset outcome text
    this.resultElement = '';
  }

  @action
  boardSelectionPage() {
    this.router.transitionTo('/board');
  }

  @action
  closeEndInfo() {
    this.showEndInfo = false;
  }
}
