const gameState = require('./gameState.js');
const evolutionMechanics = require('./evolutionMechanics.js');
const flipPlayerMove = require('./gameMechanics.js');

// Draws the initial board on screen
function setupFrontEndOfBoard(){
	for(let row = 0; row < 12; row++){
  
    // FIXME: replace these jQuery calls please
    $(`.Board`).append(`<div class=\"Row${row}\"></div>`);

    // FIXME: There has to be a better way to do this
    // Why not just add another class and then add CSS using that class
    // JESUS I WAS TRASH AT CODING
		$(`.Row${row}`).css({"display":"block",
			"margin" : "0px",
    });
		
		// Adding 12 columns to every Row
		for (let col = 0; col < 12; col++){
			$(`.Row${row}`).append(`<div class=\"SquareCol${col}\"></div>`);
		}
	}
}

// extract the Row from the parent html class definition of a Square
// and convert it into a number
function extractRow (square) {
	return Number((square.parent().attr('class')).substring(3));
}

// extract the Column from the html class definition of a Square
// and convert it into a number
function extractColumn (square) {
  return Number((square.attr('class')).substring(10));
}


function highlightPossibleMoves (Square, selectedPiece, possibleMoves) {
	let row = extractRow(Square);
	let column = extractColumn(Square);
	let clickedPieceFromCapturedTray = 
		gameState.getClickedPieceFromCapturedTray();
	let mainBoard = gameState.getMainBoard();

	let pieceSymbol = mainBoard[row][column].symbol;
	let playerWhosePieceWasClicked = mainBoard[row][column].player;
	let currentPlayer = gameState.getPlayerMove();

	// TODO: turn this into a separate function
	// The current version of this function is way too long

	// if a piece from the captured tray was clicked
	if (clickedPieceFromCapturedTray !== `#`) {
		let evolvedSymbol = evolutionMechanics.computeEvolution(
				clickedPieceFromCapturedTray, pieceSymbol);

		// If the evolution was valid (i.e. didn't return the original Piece)	
		if (evolvedSymbol !== pieceSymbol) {

			// This prevents the bug where a player was able
			// to evolve opponent's pieces
			if (playerWhosePieceWasClicked === currentPlayer) {

				// TODO: make sure this is passed by reference
				// Should be - because it's an object value
				pieceSymbol = evolvedSymbol;

				gameState.removeFromCapturedTray (
					clickedPieceFromCapturedTray, currentPlayer);
				gameState.setClickedPieceFromCapturedTray(`#`);
				gameMechanics.flipPlayerMove(currentPlayer);
				
				
			}
		}

	}
	
	

}




