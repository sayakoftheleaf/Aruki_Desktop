const gameState = require('./gameState.js');
const board = require('./board.js')
const evolutionMechanics = require('./evolutionMechanics.js');
const flipPlayerMove = require('./gameMechanics.js');
const pieceMovements = require('./pieceMovements.js');
const drawPieces = require('./drawPiecesOnBoard.js');

// Draws the initial board on screen
function setupFrontEndOfBoard() {
  for (let row = 0; row < 12; row++) {

    // FIXME: replace these jQuery calls please
    $(`.Board`).append(`<div class=\"Row${row}\"></div>`);

    // FIXME: There has to be a better way to do this
    // Why not just add another class and then add CSS using that class
    // JESUS I WAS TRASH AT CODING
    $(`.Row${row}`).css({
      "display": "block",
      "margin": "0px",
    });

    // Adding 12 columns to every Row
    for (let col = 0; col < 12; col++) {
      $(`.Row${row}`).append(`<div class=\"SquareCol${col}\"></div>`);
    }
  }
}

// TODO: This function does way too many things. Modularize it
function highlightPossibleMoves(Square) {
  let row = extractRow(Square);
  let column = extractColumn(Square);

  let clickedPieceFromCapturedTray = gameState.getClickedPieceFromCapturedTray();


  let selectedPiece = mainBoard[row][column];
  let pieceSymbol = mainBoard[row][column].symbol;
  let playerWhosePieceWasClicked = mainBoard[row][column].player;
  let currentPlayer = gameState.getPlayerMove();

  // TODO: turn this into a separate function
  // The current version of this function is way too long

  // if a piece from the captured tray was clicked
  if (clickedPieceFromCapturedTray !== `#`) {
    let evolvedSymbol = evolutionMechanics.computeEvolution(clickedPieceFromCapturedTray, pieceSymbol);


  } else if (pieceSymbol === `#`) { // If no piece from the captured tray was clicked

  }
}

function handleEvolutionMove(piece) {

  let mainBoard = gameState.getMainBoard();
  let possibleMoves = gameState.getPossibleMoves();

  // If the evolution was valid (i.e. didn't return the original Piece)	
  if (evolvedSymbol !== pieceSymbol) {

    // This prevents the bug where a player was able
    // to evolve opponent's pieces
    if (playerWhosePieceWasClicked === currentPlayer) {

      mainBoard = board.changePieceInSquare(mainBoard, row, col, evolvedSymbol);
      // Explicit conversion to ensure safety
      gameState.setMainBoard(mainBoard);

      gameState.removeFromCapturedTray(clickedPieceFromCapturedTray, currentPlayer);
      gameState.setClickedPieceFromCapturedTray(`#`);
      gameMechanics.flipPlayerMove(currentPlayer);

      // refreshing the UI
      refreshSquares(true); // TODO: implement this
      drawPieces.putPiecesOnFrontEnd(mainBoard);
      refreshCaptured(row); // TODO: implement this
    }

    // This handles the cases when the player clicks on a captured piece
    // and then clicks on the opponent's piece
    else {
      // Literally act like the click never happened
      gameState.setSelectedPieceToDefault();
      gameState.setPossibleMovesToNone();
    }
  } else if (evolvedSymbol === '#') {

    // This handles cases when the player clicks on a piece in the captured
    // pieces stack, but then does not click on a square with a piece.
    // Here, if the square clicked was a move for the original piece, the
    // game assumes that clicking on the captured piece was a misclick and
    // moves the previous piece to the square.

    gameState.setClickedPieceFromCapturedTrayToDefault();
    highlightPossibleMoves(Square);
  } else {
    // This handles cases when the evolution wasn't valid
    // and therefore just ignores the captured piece selection
    // and just considers the piece selected second for movement

    gameState.setClickedPieceFromCapturedTrayToDefault()
    gameState.setSelectedPiece(selectedPiece);

    refreshSquares(false); // TODO: Implement this
    pieceMovements.computeMoves(pieceSymbol, row, column, mainBoard);
    highlightSquares(); // TODO: Implement this
  }
}

// extract the Row from the parent html class definition of a Square
// and convert it into a number
function extractRow(square) {
  return Number((square.parent().attr('class')).substring(3));
}

// extract the Column from the html class definition of a Square
// and convert it into a number
function extractColumn(square) {
  return Number((square.attr('class')).substring(10));
}




