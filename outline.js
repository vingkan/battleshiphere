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

function generateNewID(objectType){
	var objectCounter = game.get(objectType + 's').length;
	var newID = objectType + objectCounter;
	return newID;
}

/*--------------------------------------------*/
/*---> STORYBOARD <---------------------------*/
/*--------------------------------------------*/

function initHereMap(){

	/*var platform = new H.service.Platform({
		'app_id': APP_ID,
		'app_code': APP_CODE
	});*/

	var mapTypes = platform.createDefaultLayers();
	var map = new H.Map(
		document.getElementById('map-container'),
		mapTypes.satellite.map,
		{
			zoom: 18,
			center: {
				lat: getUserLat(),
				lng: getUserLon()
			}
		}
	);

	var icon = new H.map.Icon('style/img/hmarker.png');
	var marker = new H.map.Marker(
		{
			lat: getUserLat(),
			lng: getUserLon()
		},
		{
			icon: icon
		}
	);

	var mapEvents = new H.mapevents.MapEvents(map);

	map.addEventListener('tap', function(event){
		/*console.log(event.currentPointer);
		console.log(event.target);*/
		var xPort = event.currentPointer.viewportX;
		var yPort = event.currentPointer.viewportY;
		//Map.screenToGeo() is a godsend
		var geo = event.target.screenToGeo(xPort, yPort);
		mapClickCallback(geo);
		/*console.log(geo);*/
	});

	var behavior = new H.mapevents.Behavior(mapEvents);

	map.addObject(marker);
	
	console.log('LOADED HERE MAP');

}

function createMapCallback() {
	//initHereMap();
	console.log("This is where we would load the map for the first time.");
}

getGeolocation(createMapCallback);

console.log('LOADED outline.js');