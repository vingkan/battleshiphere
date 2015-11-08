
function Tower(data) {
	this.id = data['id'];
	this.name = data['name'];
	this.coordinate = {
		latitude: parseFloat(data['latitude']),
		longitude: parseFloat(data['longitude'])
	}
	this.size = parseFloat(data['size']);
	this.player = data['player'];
	this.troops = JSON.parse(data['troops']);
}

Tower.prototype.get = function(attribute) {
	return this[attribute];
}

Tower.prototype.set = function(attribute, value) {
	this[attribute] = value;
}

Tower.prototype.getLat = function(){
	return this.coordinate.latitude;
}

Tower.prototype.getLon = function(){
	return this.coordinate.longitude;
}

Tower.prototype.toString = function(){
	return this.id + ': (' + this.getLat().toFixed(3) + ', ' + this.getLon().toFixed(3) + ', ' + this.size + ')'
}

Tower.prototype.toPresetHTML = function(){
	var html = '';
	html += '<div id="' + this.id + '" class="tower preset" onclick="setFocusObject(\'towers\', \'' + this.id + '\');">' + this.size + '</div>';
	return html;
}

var nick = new Tower({
	id: "1234",
	name:"Tower",
	latitude: "32",
	longitude: "-23.0",
	size: "5",
	player: "Nick",
	troops: "[1, 2, 3, 4]"
});

console.log("Tower Loaded");