function Game(data){
	this.id = data['id'];
	this.name = data['name'];
	this.players = [];
	this.towers = [];
	this.troops = [];
	this.questions = [];
	this.questionLength = 10;
	this.spawnRate = 10;
	this.mode = "lastmanstanding";
	this.rounds = 0;
	this.taskManager = {
		taskList: [],
		interval: 2000
	}
}

Game.prototype.get = function(attribute){
	return this[attribute];
}

Game.prototype.set = function(attribute, value){
	this[attribute] = value;
}

Game.prototype.push = function(list, object){
	this[list].push(object);
}

Game.prototype.getObjectById = function(list, id){
	var array = this[list];
	console.log(array);
	var response = null;
	var size = array.length;
	for(var i = 0; i < size; i++){
		if(array[i].get('id') === id){
			response = array[i];
			break;
		}
	}
	if(response != null){
		return response;
	}
}

Game.prototype.addTask = function(task){
	this.taskManager.taskList.push(task);
}