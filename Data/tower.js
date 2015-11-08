
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