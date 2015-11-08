function Task(data){
	this.round = parseFloat(data['round']);
	this.type = data['player'];
	this.objectID = data['id'];
	this.attribute = data['attribute'];
	this.value = data['value'];
	this.execute = false;
}

Task.prototype.toString = function(){
	return this.round + '. (' + this.objectID + ')[' + this.attribute + '] = ' + this.value + ';';
}

Task.prototype.execute = function(){
	game.getObjectById(objectID, objectID)
}

Task.prototype.print = function(){
	logStack(this);
}