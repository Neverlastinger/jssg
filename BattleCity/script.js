function setLevel() {
	
	var level = levels[0];
	
	level.forEach(function(line, lineCount) {
		line.split('').forEach(function(symbol, symbolCount) {
			stage.set(symbol, lineCount, symbolCount);
		});
	});
}

var stage = new function() {

	var container = document.querySelector('#gameStage');

	var stuffs = {
		's': 'brick',
		'w': 'brick top',
		'd': 'brick right',
		'a': 'brick left',
		'x': 'brick bottom', 
		'g': 'ice', 
		't': 'ice top',
		'h': 'ice right',
		'f': 'ice left',
		'b': 'ice bottom',
		'_': 'player',
		'#': 'base'
	};

	this.set = function(symbol, x, y) {
	
		var className = stuffs[symbol];
		
		if (!className) {
			return;
		}
		
		var div = document.createElement('div');
		container.appendChild(div);
		div.setAttribute('class', className);
		div.style.top = x * 50 + 'px';
		div.style.left = y * 50 + 'px';
	};
};

setLevel();