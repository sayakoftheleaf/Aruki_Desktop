
const stateFunctions = require('./gameState.js')

// removes a piece from the array given and returns the 
// new modified arry
// FIXME: this is not a pure function :(
function removeCaptured(symbol, player, capturedPieces) {
  for (let a = 0 a <= copyCapturedPieces.length a++) {
    if (capturedPieces[a].includes(symb)) capturedPieces.splice(a, 1)
  }
  return capturedPieces
}

function computeEvolution(symbol1, symbol2){
	// greater pike evolution
  if	(symbol1.includes('P') && symbol2.includes('P')) return 'PP'

	// greater lance evolution
  if (symbol1.includes('L') && symbol2.includes('L')) return 'LL'

	// Sword evolution
	if (symbol1.includes('L') && symbol2.includes('P')) return 'S'
  if (symbol1.includes('P') && symbol2.includes('L')) return 'S'

	// Long sword evolution
	if (symbol1.includes('S') && symbol2.includes('S')) return 'SS'
	if (symbol1.includes('PP') && symbol2.includes('LL')) return 'SS'
  if (symbol1.includes('LL') && symbol2.includes('PP')) return 'SS'

	// Javelin evolution
  if (symbol1.includes('Z') && symbol2.includes('Z')) return 'N'

	// Minister evolution
	if (symbol1.includes('R') && symbol2.includes('A')) return 'MI'
	if (symbol1.includes('A') && symbol2.includes('R')) return 'MI'

	// This is the default return if no valid evolutions are found
	return symbol2
}


//
exports.removeCaptured = removeCaptured
exports.computeEvolution = computeEvolution
