//
// MODULE : Game State Object
// Maintains the current state of the game
// As well as provide some global utility functions
//

// The initial game state when the game starts
var gameState = {
  deepCopy: function (anArr) { return Array.from(anArr) },

  print: function () { console.log(gameState) },

  presentMove: 1,

  playerMove: 1,

  capturedPieces: {
    player1: [],
    player2: []
  },

  mainBoard: [],
}

// Utility functions to Interact with the Game State

// Get functions
exports.getPlayerMove = () => gameState.playerMove
exports.getPresentMove = () => gameState.presentMove
exports.getMainBoard = () => gameState.mainBoard

// Set functions
exports.setPlayerMove = (newMove) => { gameState.playerMove = newMove }
exports.setPresentMove = (newMove) => { gameState.presentMove = newMove }
exports.setMainBoard = (someBoard) => { gameState.mainBoard = someBoard}

  exports.gameState = gameState