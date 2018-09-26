// import './../mainEngine'

const testFunctions = require('./../testMethods.js')
const playerMoveFunctions = require('./../playerMove')
const pieceMovementFunctions = require('./../pieceMovements')

let dummyBoard = testFunctions.dummyBoard('K', 1, 0, 0)

// TODO: tested the King moves and the Pawn moves
// need to test the rest

testFunctions.simpleInsertPiece('Z1', 1, 1, 1, dummyBoard)
console.log(testFunctions.stringBoard(dummyBoard))

let moves = pieceMovementFunctions.computeMoves('Z1', 1, 1, dummyBoard)
console.log(moves)


