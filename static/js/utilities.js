$('.item_selector img').click(function(event) {		
		event.preventDefault();
		var urlNewImage = $(this).attr('src');
		$('#imagen_detalles img').attr("src",urlNewImage);
});