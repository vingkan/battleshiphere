var nameList = [
	"Nick",
	"Vinesh",
	"Mohsin"
];

function generateRandomName(){
	var max = nameList.length;
	var min = 0;
	var random = Math.floor(Math.random() * (max - min)) + min;
	return nameList[random];
}

function generateNewID(objectType){
	var objectCounter = game.get(objectType + 's').length;
	var newID = objectType + objectCounter;
	return newID;
}

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
	var output = document.getElementById('output-' + list);
	output.value += object + '\n';
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