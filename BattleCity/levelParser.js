/**
 * Parser for the game levels.
 */
var levelParser = new function() {
	
	var stuffs = {
			's': {
				className: 'Brick'
			},
			'w': {
				className: 'Brick',
				parts: [[1, 1], [0, 0]]
			},
			'd': {
				className: 'Brick',
				parts: [[0, 1], [0, 1]]
			},
			'a': {
				className: 'Brick',
				parts: [[1, 0], [1, 0]]
			},
			'x': {
				className: 'Brick',
				parts: [[0, 0], [1, 1]]
			},
			'g': {
				className: 'Concrete'
			},
			't': {
				className: 'Concrete',
				parts: [[1, 1], [0, 0]]
			},
			'h': {
				className: 'Concrete',
				parts: [[0, 1], [0, 1]]
			},
			'f': {
				className: 'Concrete',
				parts: [[1, 0], [1, 0]]
			},
			'b': {
				className: 'Concrete',
				parts: [[0, 0], [1, 1]]
			},
			'_': {
				className: 'Player'
			},
			'#': {
				className: 'Base'
			}
		};

	this.generate = function() {
		
		var level = levels[0];
		
		level.forEach(function(line, lineCount) {
			line.split('').forEach(function(symbol, symbolCount) {
				levelParser.set(symbol, symbolCount, lineCount);
			});
		});
	};

	this.set = function(symbol, x, y) {
	
		var stuff = stuffs[symbol];
		
		if (!stuff) {
			return;
		}
		
		if (stuff.className == 'Player') {
			player.setPosition(x, y);
		};
		
		matrix.set(stuff, x, y);
		stage.initStuff(stuff, x, y);
	};
};