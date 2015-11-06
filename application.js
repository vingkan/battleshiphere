/*--------------------------------------------*/
/*---> MAPS <---------------------------------*/
/*--------------------------------------------*/

function initHereMap(){

	var platform = new H.service.Platform({
		'app_id': APP_ID,
		'app_code': APP_CODE
	});

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

	map.addObject(marker);

	var ui = H.ui.UI.createDefault(map, mapTypes);
	
	console.log('LOADED HERE MAP');

}

console.log('LOADED APPLICATION');