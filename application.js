/*--------------------------------------------*/
/*---> MAPS <---------------------------------*/
/*--------------------------------------------*/

function initHereMap(){

	nokia.Settings.set('app_id', APP_ID);
	nokia.Settings.set('app_code', APP_CODE);

	var map = new nokia.maps.map.Display(
		document.getElementById('map-container'),
		{
			components: [
				new nokia.maps.map.component.Behavior()
			],
			zoomLevel: 10,
			center: [
				getUserLat(),
				getUserLon()
			],
			baseMapType: nokia.maps.map.Display.SATELLITE
		}
	);

	/*var icon = new H.map.Icon('style/img/hmarker.png');
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

	var ui = H.ui.UI.createDefault(map, mapTypes);*/
	
	console.log('LOADED HERE MAP');

}

console.log('LOADED APPLICATION');