
const boardFunctions = require('./board.js')
var global = require('./globalComponents.js')

global.mainBoard = boardFunctions.initBoard(boardFunctions.setUpFreshBoard())

console.log(boardFunctions.stringBoard(global.mainBoard))


