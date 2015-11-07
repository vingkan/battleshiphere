console.log('LOADED BACKEND');
//Dear source-code readers, pay no attention to these global variables
var APP_ID = 'YtKfTS2Zo8ELUk63LzB0';
var APP_CODE = 'SB1wcsUEGzLA3SRHJJ7CPw';

// Reference to the root of the Firebase database
var database = new Firebase("https://battleshiphere.firebaseio.com/");


$("#upload").click(function() { // If the user clicks on the input with the id="upload"
	var name = $("#nameInput").val();
	var text = $("#messageInput").val();
	if (name.length != 0 && text.length != 0) { // Don't upload if there's no information in the textboxes
		console.log(name.length);
		console.log(text.length);

		database.push({name: name, text: text}); // Push the data onto the database

	}else { // warns user of their empty textbox
		console.log("Please input values into the textbox");
	}
});

database.on('child_added', function(update) { // Get an update once the database has new data
			console.log("Callback function: New data has been added to the database");
			var message = update.val();
			displayUpdate(message.name, message.text);
});

function displayUpdate(name, text) {
	$("<div/>").text(text).prepend($("<em/>").text(name+": ")).appendTo($("#messageDiv"));
	$("#messageDiv")[0].scrollTop = $("#messageDiv")[0].scrollHeight;
};