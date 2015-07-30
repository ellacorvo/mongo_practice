//main.js is for form submission events and ajax calls

$(function(){
	$('#hero-create').on('submit', function(event){
		event.preventDefault();

		$.ajax({
			method  : 'POST',//how
			url     : '/create-hero',//where
			data    : $(this).serialize(),//what to send with it
			success : function(dataFromServer) {//success takes a function, this is your asynchronous call back
				console.log('return: ', dataFromServer);
			}

		});

	});

	$('#get-heroes').on('click', function(){

		$.ajax({
			method : 'GET',
			url : '/get-heroes',
			success : function(dataFromServer) {//success takes a function, this is your asynchronous call back
				console.log('here they are : ', dataFromServer);
				dataFromServer.data.forEach(function(hero){
					$('body').append('<h1>' + hero.name + '</h1>');
				})
			}
		})
		
	});

});