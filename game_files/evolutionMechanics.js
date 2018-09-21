
const stateFunctions = require('./gameState.js')

// removes a piece from the array given and returns the 
// new modified arry
// FIXME: this is not a pure function :(
function removeCaptured(symbol, player, capturedPieces) {
  for (let a = 0; a <= copyCapturedPieces.length; a++) {
    if (capturedPieces[a].includes(symb)) capturedPieces.splice(a, 1)
  }
  return capturedPieces
}

//
exports.removeCaptured = removeCaptured
