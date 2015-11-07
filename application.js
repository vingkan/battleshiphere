console.log('LOADED APPLICATION');

// Store user's location
var userPosition = {
	latitude: 0,
	longitude: 0
};

// Function that updates user location
function updatePosition(position) {
	userPosition.latitude = position.coords.latitude;
	userPosition.longitude = position.coords.longitude;
}

// Using the navigator class to get a location and update it with update method to userPosition variable
function getGeolocation(callback) {
	navigator.geolocation.getCurrentPosition(function(position) {
		updatePosition(position);
		console.log("Called Geolocator");
		if (callback) {
			callback();
		}
	});
}

// Accessor methods
function getLat() {
	return userPosition.latitude;
}
function getLon() {
	return userPosition.longitude;
}

function initHereMap() {
	// Initialized communication with back-end services
	var platform = new H.service.Platform({
		app_id: "habu7uC2upRacruDrUfu",
		app_code: "85_CDKXMNkoraKX54-ZS-g",
		useCIT: true,
		useHTTPS: true
	});

	// Obtain the default map type from the platform object
	var defaultLayers = platform.createDefaultLayers();

	// Initialized a map - if location not given then it will give a world view
	var map = new H.Map(document.getElementById("map-container"), defaultLayers.normal.map, {
		center: new H.geo.Point(0, 51),
		zoom: 2
	});
}





