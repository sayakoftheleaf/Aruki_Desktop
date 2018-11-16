// ----------------------------------------------------------------------------
//                             # GAME ENGINE MODULE #
//
//       - The Main Game Engine that creates and runs the game -
//       - The only Module that makes changes to the game state - 
//
// -----------------------------------------------------------------------------

// TODO: flip player movement after every turn

const boardFunctions = require ('./board.js');
const playerMoveFunctions = require ('./playerMove.js');
const evolutionFunctions = require ('./evolutionMechanics.js');
const testFunctions = require ('./testMethods.js');
const gameState = require('./gameState.js');
const frontendEngine = require('./frontendEngine.js');

// TODO: you shouldn't need this really
// because you are going to work with mutation functions
// const gameState = require('./gameState.js').gameState 

// Prints the board
let mainBoard = gameState.getMainBoard();

// console.log(testFunctions.stringBoard(dummyBoard, 'symbol'))
// console.log(testFunctions.stringBoard(dummyBoard, 'player'))

function setUpStartState () {
  let freshBoard = boardFunctions.setUpFreshBoard();
  freshBoard = boardFunctions.initBoard(freshBoard);
  gameState.setMainBoard(freshBoard);
}

function gameEngine() {
  
}

// TODO: on the front end side, extract the row and the column
// of the clicked square and send it here

// Turn the isEvolutionMove flag to true if the player had previously
// clicked on the captured pieces stack, and send that piece as the fourth
// element

// FIXME: Please figure this function out
// function onClickChangeState(row, col, isEvolutionMove = false, evolutionPiece) {
//     let playerCurrentlyMoving = gameState.getPlayerMove()
//     let localBoard = boardFunctions.copyBoard(gameState.getMainBoard())
//     let currentSquare = localBoard[row][col]

//     if (isEvolutionMove){
//         let newSymbol = evolutionFunctions.computeEvolution(evolutionPiece, currentSquare.symbol)

//         // If the evolution is actually valid
//         if (newSymbol !== currentSquare.symbol){

//         }


//     }
// }


