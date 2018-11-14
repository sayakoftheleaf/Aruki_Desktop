
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


function extractRow (square) {
	return (square.parent().attr('class')).substring(3);
}

function extractColumn (square) {
  return (square.attr('class')).substring(10)
}







