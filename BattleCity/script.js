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
		'w': 'brick-w',
		'd': 'brick-d',
		'a': 'brick-a',
		'x': 'brick-x', 
		'g': 'ice', 
		't': 'ice-t',
		'h': 'ice-h',
		'b': 'ice-b',
		'f': 'ice-f'
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