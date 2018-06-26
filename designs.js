// When the document is read and the submit button is click this function will call the makeGrid()
$(document).ready(function(){
	const submit = $('input[type="submit"]');
	submit.click(function(event) {
  		event.preventDefault();
  		makeGrid();
	});

});


function makeGrid(){
	var inputHeight, inputWidth,colorPicker,  pixelCanvas, canvasCell; 

	inputHeight = $('#inputHeight').val();
	inputWidth = $('#inputWeight').val();
	pixelCanvas= $('#pixelCanvas');

	// to clear the table
	pixelCanvas.children().remove();

	//To dynamically add table row base on inputWidth
	for (let x =1; x <= inputHeight; x++) {
 	pixelCanvas.append('<tr></tr>');
 	}	
 	canvasCell=$('tr');

 	//To dynamically add table colum base on inputWidths
	for(let y = 1; y <= inputWidth; y++){
		canvasCell.append('<td></td>');
	}
	assignCell=pixelCanvas.find('td');

	//to set  and remove canvasCell(the table cell)  bacground-color
	assignCell.on('click',function(){
		colorPicker = $('#colorPicker').val();

		if($(this).attr('style')){
			$(this).removeAttr('style');
		}

		else {
			$(this).attr('style', 'background-color:' + colorPicker);
		};
	
	});

}






