
// Reference to the root of the Firebase database
var database = new Firebase("https://conquiz.firebaseio.com/");
var coordbase = new Firebase("https://towercoord.firebaseio.com/-K2aUIZRYFI5l6Tov1JA");
var towerbase = coordbase.child("towers");
var playerbase = coordbase.child("players");
var troopbase = coordbase.child("troops");
// Reference to the google sheets of questions
var questionsLink = 'https://spreadsheets.google.com/feeds/list/1C1POJrIlpm1R3muE0ImmI_ifxpH_aEfPP-QSyl3o2Kg/1/public/basic?alt=json';

var question;
var questionJSON;
var rows;


// ToDO: downloading from Firebase should be a return function, to avoid crossing stack
/*--------------------------------------------*/
/*---> Download troops from Firebase <--------*/
/*--------------------------------------------*/
function loadTroops() {
	var troopHolder = [];
	var newTroop;
	troopbase.on('child_added', function(update){
		var troopJSON = update.val();
		newTroop = new Troop({
			id: update['id'],
			name: update['name'],
			playerID: update['playerID'],
			towerID: update['towerID'],
			question: update['question'],
			alive: update['alive']
		});
		troopHolder.push(newTroop);
	});
	return troopHolder;
}

/*--------------------------------------------*/
/*---> Upload troops to Firebase <------------*/
/*--------------------------------------------*/
function addTroops(data) {
	$.each(data, function(index, value){
		troopbase.push({
			id: value['id'],
			name: value['name'],
			playerID: value['playerID'],
			towerID: value['towerID'],
			question: value['question'],
			alive: value['alive']
		});
	});
}


/*--------------------------------------------*/
/*---> Download player from Firebase <--------*/
/*--------------------------------------------*/
function loadPlayers() {
	var playerHolder = [];
	var newPlayer;
	playerbase.on('child_added', function(update) {
		var playerJSON = update.val();
		newPlayer = new Tower({
			id: update['id'],
			team: {icon: playerJSON['team']['icon'], color: playerJSON['team']['color']},
			coordinate: {latitude: playerJSON['coordinate']['latitude'], longitude: playerJSON['coordinate']['longitude']},
			troops: update['troops']
		});
		playerHolder.push(newPlayer);
	});
	return playerHolder;
}


/*--------------------------------------------*/
/*---> Upload player to Firebase <------------*/
/*--------------------------------------------*/
function uploadPlayerbase(data) {
	$.each(data, function(index, value){
		playerbase.push({
			id: value['id'], 
			name: value['name'], 
			team: {icon: value['icon'], color: value['color']}, 
			coordinate: {latitude: value['coordinate']['latitude'], longitude: value['coordinate']['longitude']}, 
			troops: value'troops']
		});
	});
}


/*--------------------------------------------*/
/*---> Download towers from Firebase <--------*/
/*--------------------------------------------*/
function loadTowers() {
	var towerHolder = [];
	var newTower;
	towerbase.on('child_added', function(update) {
		var towerJSON = update.val();
		newTower = new Tower({
			id: towerJSON['id'],
			name: towerJSON['name'],
			coordinate: {latitude: towerJSON['coordinate']['latitude'], longitude: towerJSON['coordinate']['longitude']},
			size: towerJSON['size'],
			player: towerJSON['player']
		});
		towerHolder.push(newTower);
	});
	return towerHolder;
}


/*--------------------------------------------*/
/*---> Upload towers to Firebase <------------*/
/*--------------------------------------------*/
function uploadTowerbase(data) {
	$.each(data, function(index, value){
		towerbase.push({id: value['id'], 
			name: value['name'], 
			coordinate: {latitude: value['coordinate']['latitude'], 
			longitude: value['coordinate']['longitude']}, 
			size: value['size'], 
			player: value['player'] });
	});
}
// Don't have time - going for hard code
function removeTowerbase() {
	// ToDO: Remove the towers folders which will remove the subfolders, recreate a towers folder.
}


/*--------------------------------------------*/
/*---> Download question from Firebase <------*/
/*--------------------------------------------*/
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
// ONE TIME push to update the questions on firebase
/*--------------------------------------------*/
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