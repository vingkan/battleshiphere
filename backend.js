
// Reference to the root of the Firebase database
var database = new Firebase("https://conquiz.firebaseio.com/");
var towerbase = new Firebase("https://towercoord.firebaseio.com/-K2aUIZRYFI5l6Tov1JA/towers");
// Reference to the google sheets of questions
var questionsLink = 'https://spreadsheets.google.com/feeds/list/1C1POJrIlpm1R3muE0ImmI_ifxpH_aEfPP-QSyl3o2Kg/1/public/basic?alt=json';

var question;
var questionJSON;
var rows;


// ToDO: downloading from Firebase should be a return function, to avoid crossing stack

/*--------------------------------------------*/
/*---> Download towers from Firebase <--------*/
/*--------------------------------------------*/
function loadTowers() {
	var newTower;
	database.on('child_added', function(update) {
		var towerJSON = update.val();
		newTower = new Tower({
			id: towerJSON['id'],
			name: towerJSON['name'],
			coordinate: {latitude: towerJSON['coordinate']['latitude'], longitude: towerJSON['coordinate']['longitude']},
			size: towerJSON['size'],
			player: towerJSON['player']
		});
		game.push("towers", newTower);
	});
}

/*--------------------------------------------*/
/*---> Upload towers to Firebase <------------*/
/*--------------------------------------------*/
function uploadTowerbase(data) {
	console.log(data.length);
	$.each(data, function(index, value){
		towerbase.push({id: value['id'], name: value['name'], coordinate: {latitude: value['coordinate']['latitude'], longitude: value['coordinate']['longitude']}, size: value['size'], player: value['player'] });
	});
}

// Don't have time - going for hard code
function removeTowerbase() {
	// ToDO: Remove the towers folders which will remove the subfolders, recreate a towers folder.
}



/*--------------------------------------------*/
/*---> Download question from Firebase <------*/
/*--------------------------------------------*/
// A function that can be call to get updates from firebase
function loadQuestions() {
    var newQuestion;
    database.on('child_added', function(update) {
        var questionJSON = update.val();
        console.log(questionJSON)
        newQuestion = new Question({
            id: generateNewID('question'),
            question: questionJSON['question'],
            answers: "["+questionJSON['correct']+", "+questionJSON['wa1']+", "+questionJSON['wa2']+", "+questionJSON['wa3']+"]"
        });
        game.push("questions", newQuestion);
    });
}

/*--------------------------------------------*/
/*---> Upload question to Firebase <----------*/
/*--------------------------------------------*/

// ONE TIME push to update the questions on firebase
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


/* Legacy code

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

function displayUpdate(name, text) {
	$("<div/>").text(text).prepend($("<em/>").text(name+": ")).appendTo($("#messageDiv"));
	$("#messageDiv")[0].scrollTop = $("#messageDiv")[0].scrollHeight;
};

database.on("child_added", function(update) { // Get an update once the database has new data
	console.log("Callback function: New data has been added to the database");
	var message = update.val();
	displayUpdate(message.name, message.text);
});

*/