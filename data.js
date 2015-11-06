/*--------------------------------------------*/
/*---> GEOLOCATION <--------------------------*/
/*--------------------------------------------*/

var userPosition;

function updatePosition(position){
	userPosition = position.coords;
}

navigator.geolocation.getCurrentPosition(function(position){
	updatePosition(position);
});


function getUserLat(){
	return userPosition.latitude;
}

function getUserLon(){
	return userPosition.longitude;
}

console.log('LOADED DATA');