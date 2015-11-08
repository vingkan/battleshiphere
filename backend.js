
// Reference to the root of the Firebase database
var database = new Firebase("https://conquiz.firebaseio.com/");
// Reference to the google sheets of questions
var questionsLink = 'https://spreadsheets.google.com/feeds/list/1C1POJrIlpm1R3muE0ImmI_ifxpH_aEfPP-QSyl3o2Kg/1/public/basic?alt=json';
var question;
var rows;

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

database.on('child_added', function(update) {
	question = {};
	var questionJSON = update.val();
	var question = new Question({
		id: '1',
		question: {Question: question['question']},
		answers: {correct: question['correct'], wa1: question['wa1'], wa2: question['wa2'], wa3: question['wa3']}
	})
	game.push("question", question);
});

// Get an update once the database has new data
// database.on('child_added', function(update) {
// 	questions = update.val();
	
// 	console.log("Successfully retrieve questions from database.");
// });

// database.on("child_added", function(update) { // Get an update once the database has new data
// 			console.log("Callback function: New data has been added to the database");
// 			var message = update.val();
// 			displayUpdate(message.name, message.text);
// });

function displayUpdate(name, text) {
	$("<div/>").text(text).prepend($("<em/>").text(name+": ")).appendTo($("#messageDiv"));
	$("#messageDiv")[0].scrollTop = $("#messageDiv")[0].scrollHeight;
};


// One time push to update the questions on firebase
function getData() {
    $.ajax({
        url: questionsLink,
        success: function(data){
            uploadFirebase(data);
        }
    });
}
// upload data to firebase
function uploadFirebase(data){
    var cells = data.feed.entry;
    rows = [];
    
    for (var i = 0; i < cells.length; i++){
        var rowObj = {};
        rowObj.timestamp = cells[i].title.$t;
        var rowCols = cells[i].content.$t.split(',');
        for (var j = 0; j < rowCols.length; j++){
            var keyVal = rowCols[j].split(':');
            rowObj[keyVal[0].trim()] = keyVal[1].trim();
        }
        rows.push(rowObj);
    }
    for (var i = 0; i < rows.length; i++) {
    	database.push({question: rows[i]['timestamp'], correct: rows[i]['correct'], wa1: rows[i]['wa1'], wa2: rows[i]['wa2'], wa3: rows[i]['wa3']});
    }
}

console.log('LOADED BACKEND');