//
// MODULE : Main Game Engine
// The Main Game Engine that creates and runs the game
// The only Module that makes changes to the game state
//

const boardFunctions = require('./board.js')
const playerMoveFunctions = require('./playerMove.js')

// Importing the Global State Object, and some utility functions
const gameState = require('./gameState.js').gameState
const stateFunctions = require('./gameState.js')

// Initializing the main Board
stateFunctions.setMainBoard(boardFunctions.initBoard(boardFunctions.setUpFreshBoard()))

// Prints the board
console.log(boardFunctions.stringBoard(stateFunctions.getMainBoard()))


