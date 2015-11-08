
function Player(data) {
	this.id = data['id'];
	this.name = data['name'];
	this.team = {
		icon: data['icon'],
		color: data['color']
	}
	this.coordinate = {
		latitude: parseFloat(data['latitude']),
		longitude: parseFloat(data['longitude'])
	}
	this.troops = JSON.parse(data['troops']);
}

Player.prototype.get = function(attribute) {
	return this[attribute];
}

Player.prototype.set = function(attribute, value) {
	this[attribute] = value;
}

Player.prototype.updateLocation = function() {
	// update location called in task object
}


console.log("Player loaded");