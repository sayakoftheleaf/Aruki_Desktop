//
// MODULE : Main Game Engine
// The Main Game Engine that creates and runs the game
// The only Module that makes changes to the game state
//

// TODO: flip player movement after every turn

const boardFunctions = require('./board.js')
const playerMoveFunctions = require('./playerMove.js')
const evolutionFunctions = require('./evolutionMechanics.js')

// Importing the Global State Object, and some utility functions

// TODO: you shouldn't need this really
// because you are going to work with mutation functions
// const gameState = require('./gameState.js').gameState 

const stateFunctions = require('./gameState.js')

// Initializing the main Board
stateFunctions.setMainBoard(boardFunctions.initBoard(boardFunctions.setUpFreshBoard()))

// Prints the board
console.log(boardFunctions.stringBoard(stateFunctions.getMainBoard()))




