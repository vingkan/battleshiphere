function initGame(){
	game = new Game({
		id: 'game0',
		name: "Sample Game"
	});
}

function mapClickCallback(coordinates){
	alert(coordinates);
}

//DATA
/*
* Assign event handler to map
* When map is clicked, return the lat and lon coordinates
* plantTowerOnMap is one callback
*/
mapClickCallback = function(coordinates){
	plantTowerOnMap(coordinates);
}

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
	/*var input = prompt("Enter a pair of comma-separated coordinates for a Tower:");
	var coords = input.split(",");
	var coordinates = {
		latitude: coords[0],
		longitude: coords[1]
	}*/
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
	game.push('towers', tower);
}