
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
    
		for (let col = 0; col < 12; col++){
			$(`.Row${row}`).append(`<div class=\"SquareCol${col}\"></div>`);
		}
	}
}

function putPiecesOnFrontEnd(someBoard){
	for(let row = 0 ; row < 12; row++){
		for(let col = 0 ; col < 12; col++){
      let classString = `.Row${row} .Col${col}`;
      
			let symbol = someBoard[row][col].symbol;
      let player = someBoard[row][col].player;
      
			drawPieces(classString, symbol, player);
		}
	}
}


/*
		FUNCTION PURPOSE : draws each individual piece that is there during any state
		of the board
*/

function drawPieces(classString, symbol, player){
  background = (player === 1) ? `url('Files/White_sprites.png')` : 
               (player === 2) ? `url('Files/Black_sprites.png')`: ``;
  
  if(symbol !== `#`){
    $(classString).append(`<div class=\"Piece player${player}\"></div>`);

    // FIXME: Literally why
    $(".Piece").css({ 
      "height" : "32px", 
      "width":"32px", 
      "background-image" : background,
    });

  } 
  
  switch (symbol) {
    case `K`: 
      $(`${classString} .Piece`).css({ "background-position":`-192px -32px`});  break;

    case `J`: 
      $(`${classString} .Piece`).css({ "background-position":`-64px -32px`});
      break;

    case `MI`: 
      $(`${classString} .Piece`).css({ "background-position":`-96px -32px`});
      break;

    case `GR`:
      $(`${classString} .Piece`).css({ "background-position":`-32px 0`});
      break;
    
    case `LR`:
      $(`${classString} .Piece`).css({ "background-position":`0 0`});
      break;
  
    default:
      if (symbol.includes(`Z`)) {
        $(`${classString} .Piece`).css({ "background-position":`-32px -32px`});
      } else if (symbol.includes(`A`)) {
        $(`${classString} .Piece`).css({ "background-position":`-128px 0`});
      } else if (symbol.includes(`R`)) {
        $(`${classString} .Piece`).css({ "background-position":`-160px -32px`});
      } else if (symbol.includes(`PP`)){
        $(`${classString} .Piece`).css({ "background-position":`-64px 0`});
      } else if (symbol.includes(`PP`)){
        $(`${classString} .Piece`).css({ "background-position":`-96px 0`});
      } else if (symbol.includes(`LL`)){
        $(`${classString} .Piece`).css({ "background-position":`-192px 0`});
      } else if (symbol.includes(`L`)){
        $(`${classString} .Piece`).css({ "background-position":`-224px 0`});
      } else if (symbol.includes(`SS`)){
        // FIXME: This is definitely wrong because SS and S symbol is the same
        $(`${classString} .Piece`).css({ "background-position":`0 -32px`});
      } else if (symbol.includes(`S`)){
        $(`${classString} .Piece`).css({ "background-position":`0 -32px`});
      } else if (symbol.includes(`N`)){
        $(`${classString} .Piece`).css({ "background-position":`-128px -32px`});
      }
      break;
  }

}







