function initGame(){
	game = new Game({
		id: 'game0',
		name: "Sample Game"
	});
	createTowerPresets();
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
/*mapClickCallback = function(coordinates){
	plantTowerOnMap(coordinates);
}*/

function createTowerPresets(){
	var sizes = ['small', 'small', 'medium', 'medium', 'medium', 'big', 'big'];
	var presets = sizes.length;
	for(var s = 0; s < presets; s++){
		plantTowerOnMap(
			{
				lat: 0,
				lng: 0
			},
			sizes[s]
		);
	}
}

//FRONTEND
/*
* Open selector dialog for creator user to select radius size
*/
function getTowerRadius(size){
	var radius = 0;
	switch(size){
		case 'small':
			radius = 5;
			break;
		case 'medium':
			radius = 10;
			break;
		case 'big':
			radius = 15;
			break;
		default:
			alert('TOWER TYPE ERROR');
	}
	return radius;
}

//APPLICATION
/*
* Params: coordinates: lat/lon pair
* Return: void, creates new Tower object and adds it to Game
*/
function plantTowerOnMap(coordinates, size){
	/*var input = prompt("Enter a pair of comma-separated coordinates for a Tower:");
	var coords = input.split(",");
	var coordinates = {
		latitude: coords[0],
		longitude: coords[1]
	}*/
	var towerRadius = getTowerRadius(size);
	var tower = new Tower({
		id: generateNewID('tower'),
		name: generateRandomName(),
		latitude: coordinates.lat,
		longitude: coordinates.lng,
		size: towerRadius,
		player: null,
		troops: null
	});
	game.push('towers', tower);
}