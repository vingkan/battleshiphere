//Dear source-code readers, pay no attention to these global variables
var APP_ID = 'YtKfTS2Zo8ELUk63LzB0';
var APP_CODE = 'SB1wcsUEGzLA3SRHJJ7CPw';

// Reference to the root of the Firebase database
var database = new Firebase("https://brilliant-torch-6592.firebaseio.com/");

$("#messageInput").keypress(function (e) {
	if (e.keyCode == 13) {
		var name = $("#nameInput").val();
		var text = $("#messageInput").val();
		database.push({name: name, text: text});
		$("#messageInput").val("");
	}


});

console.log('LOADED BACKEND');