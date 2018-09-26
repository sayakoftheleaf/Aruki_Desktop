//
// MODULE : Game State Object
// Maintains the current state of the game
// As well as provide some global utility functions
//

// The initial game state when the game starts
var gameState = {
  presentMove: 1,
  playerMove: 1,
  capturedPieces: {
    player1: [],
    player2: []
  },
  mainBoard: [],
}

// Utility functions to Interact with the Game State

exports.deepCopy = (anArr) => Array.from(anArr)
exports.printGameState = () => console.log(gameState)
exports.pushSquares = (row, col, arr, player) =>  {
  arr.push({
    row: row,
    col: col
  })
}

// Get functions
exports.getPlayerMove = () => gameState.playerMove
exports.getPresentMove = () => gameState.presentMove
exports.getMainBoard = () => gameState.mainBoard
exports.getCapturedPlayer1 = () => gameState.capturedPieces.player1
exports.getCapturedPlayer2 = () => gameState.capturedPieces.player2

// Set functions
exports.setPlayerMove = (newMove) => { gameState.playerMove = newMove }
exports.setPresentMove = (newMove) => { gameState.presentMove = newMove }
exports.setMainBoard = (someBoard) => { gameState.mainBoard = someBoard }
exports.setCapturedPlayer1 = (captured) => { gameState.capturedPieces.player1 = captured }
exports.setCapturedPlayer2 = (captured) => { gameState.capturedPieces.player2 = captured }

exports.gameState = gameState