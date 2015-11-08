function Task(data){
	this.round = parseFloat(data['round']);
	this.objectID = data['id'];
	this.attribute = data['attribute'];
	this.value = data['value'];
	this.execute = false;
}

Task.prototype.toString = function(){
	return this.round + '. (' + this.objectID + ')[' + this.attribute + '] = ' + this.value + ';';
}

Task.prototype.execute = function(){
	//TO-DO
}

Task.prototype.print = function(){
	console.log('before')
	logStack(this);
	console.log('after')
}