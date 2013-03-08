$(document).ready(function(){

	//Counts Characters in Textarea field with ID of Message
	$('body').on('keyup', '#message', function(){
		var character = $(this);
		
		if(character.val().length >= 131){
			character.val( character.val().substr(0, 131) );
		} else {
			$("#msg-count").text(0 + character.val().length);
		}
	});


	//Checks Username and Date 
	$('body').on('click', '#submit', function(){
		var username = $('#username').val().length;
		var date = $('#date').val();
		var nameSubmit = false;
		var dateSubmit = false;

		function ValidateDate(dtValue) {
			var dtRegex = new RegExp(/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/);
			return dtRegex.test(dtValue);
		}

    	if ( username > 1 ) {
    		$('.error').hide();
    		$('.error').empty();
    		nameSubmit = true;
    	}

    	if (ValidateDate(date)) {
    		$('.error').hide();
    		$('.error').empty();
    		dateSubmit = true;
    	}

    	if ( nameSubmit == true && dateSubmit == false ){
    		$('.error').show();
    		$('.error').html('Invalid Date.(mm/dd/yyyy or mm-dd-yyyy)');		    	
    	}

    	if ( nameSubmit == false && dateSubmit == true ){
    		$('.error').show();
    		$('.error').html('Username is too short');
    	}

    	if ( nameSubmit == false && dateSubmit == false ){
    		$('.error').show();
    		$('.error').html('Please fill out the form.');
    	}

    	if ( nameSubmit == true  && dateSubmit == true ) {
    		return true;
    	}
    	
    	return false;
    });	


});