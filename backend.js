//Dear source-code readers, pay no attention to these global variables
var APP_ID = 'YtKfTS2Zo8ELUk63LzB0';
var APP_CODE = 'SB1wcsUEGzLA3SRHJJ7CPw';

// Reference to the root of the Firebase database
var database = new Firebase("https://battleshiphere.firebaseio.com/");

$("#upload").click(function() {
	var name = $("#nameInput").val();
	var text = $("#messageInput").val();
	if (name.length != 0 && text.length != 0) { // Don't upload if there's no information in the textboxes
		console.log(name.length);
		console.log(text.length);

		database.push({name: name, text: text});

		database.on('child_added', function(update) {
			console.log("Callback function: New data has been added to the database");
		});
	}else {
		console.log("Please input values into the textbox");
	}
	
});




console.log('LOADED BACKEND');