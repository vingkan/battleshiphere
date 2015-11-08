/*--------------------------------------------*/
/*---> UTILITIES <----------------------------*/
/*--------------------------------------------*/

var nameList = [
	"Nick",
	"Vinesh",
	"Mohsin"
];

function generateRandomName(){
	var max = nameList.length;
	var min = 0;
	var random = Math.floor(Math.random() * (max - min)) + min;
	return nameList[random];
}

var objectCounter = 0;

function generateNewID(objectType){
	var newID = objectType + objectCounter;
	objectCounter++;
	return newID;
}

function logStack(task){
	var stackLog = document.getElementById('stack-log');
	stackLog.value += task + "\n";
}

function toggleStackLog(view){
	var stackLog = document.getElementById('stack-log');
	if(view){
		stackLog.style.display = 'block';
	}
	else{
		stackLog.style.display = 'none';
	}
}

/*--------------------------------------------*/
/*---> STORYBOARD <---------------------------*/
/*--------------------------------------------*/

var game = {

}

function callback() {
	//initHereMap();
	console.log("This is where we would load the map for the first time.");
}

getGeolocation(callback);

//DATA
/*
* Assign event handler to map
* When map is clicked, return the lat and lon coordinates
* plantTowerOnMap is one callback
*/

//FRONTEND
/*
* Open selector dialog for creator user to select radius size
*/
function getTowerRadius(){
	return 10;
}

//APPLICATION
/*
* Params: coordinates: lat/lon pair
* Return: void, creates new Tower object and adds it to Game
*/
function plantTowerOnMap(coordinates){
	var towerRadius = getTowerRadius();
	var tower = new Tower({
		id: getNewId('tower'),
		name: generateRandomName(),
		coordinates: {
			latitude: coordinates.latitude,
			longitude: coordinates.longitude
		},
		size: towerRadius,
		player: null,
		troops: []
	});
	game.addTowers([tower]);
}





console.log('LOADED outline.js');