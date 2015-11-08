
// parse array -> string
function Troop(data)
{
	this.id = data['id'];
	this.name = data['name'];
	this.playerID = data['playerID'];
	this.towerID = data['towerID'];
	this.question = JSON.parse(data['question']);
	this.alive = data['alive'];
}

Troop.prototype.get = function(attribute){
	return this[attribute];
}

Troop.prototype.set = function(attribute, value){
	this[attribute] = value;
}

Troop.prototype.toString = function(){
	var ret = 'Troop ' + this.name + ' has a id of ' + this.id + ' and playerID of ' + this.playerID + ' and towerID of ' + this.towerID;
	return ret;
}

var someTroop = new Troop({
	id: "1234",
	name:"myTroop",
	playerID: "1",
	towerID: "1",
	question: "[Why?, What?]",
	alive: "true"
	});

console.log("troop Loaded");
