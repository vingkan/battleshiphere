function toggleMenu(){
	var presetTowers = $('#preset-towers');
	if(presetTowers.hasClass('open')){
		presetTowers.removeClass('open');
		presetTowers.addClass('closed');
	}
	else{
		presetTowers.addClass('open');
		presetTowers.removeClass('closed');
	}
}

console.log('LOADED FRONTEND');