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
				new nokia.maps.map.component.Behavior(),
				new nokia.maps.map.component.ZoomBar(),
				new nokia.maps.map.component.Overview(),
				new nokia.maps.map.component.TypeSelector(),
				new nokia.maps.map.component.ScaleBar()
			],
			zoomLevel: 20,
			center: [
				getUserLat(),
				getUserLon()
			],
			baseMapType: nokia.maps.map.Display.SATELLITE
		}
	);

	var vinesh = new nokia.maps.map.StandardMarker(
		[
			getUserLat(),
			getUserLon()
		],
		{
			text: "Vinesh",
			draggable: true
		}
	);

	var here = new nokia.maps.map.Marker(
		new nokia.maps.geo.Coordinate(
			getUserLat(),
			getUserLon()
		),
		{
			title: "HERE",
			visibility: true,
			icon: "style/img/hmarker.png",
			draggable: true,
			anchor: new nokia.maps.util.Point(16, 32)
		}
	);

	map.objects.add(vinesh);
	map.objects.add(here);
	
	console.log('LOADED HERE MAP');

}

console.log('LOADED APPLICATION');