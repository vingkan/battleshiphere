/*--------------------------------------------*/
/*---> GEOLOCATION <--------------------------*/
/*--------------------------------------------*/

var userPosition = {
	latitude: 0,
	longitude: 0
};

function updatePosition(position){
	userPosition.latitude = position.coords.latitude;
	userPosition.longitude = position.coords.longitude;
}

function getGeolocation(callback){
	navigator.geolocation.getCurrentPosition(function(position){
		updatePosition(position);
		console.log('CALLED GEOLOCATOR');
		if(callback){
			callback();
		}
	});
}

function getUserLat(){
	return userPosition.latitude;
}

function getUserLon(){
	return userPosition.longitude;
}

console.log('LOADED DATA');