var stage = new function() {
	
	var stuffs = {
			's': {
				className: 'Brick'
			},
			'w': {
				className: 'Brick',
				parts: [[1, 1], [0, 0]],
				augment: top
			},
			'd': {
				className: 'Brick',
				parts: [[0, 1], [0, 1]],
				augment: right
			},
			'a': {
				className: 'Brick',
				parts: [[1, 0], [1, 0]],
				augment: left
			},
			'x': {
				className: 'Brick',
				parts: [[0, 0], [1, 1]],
				augment: bottom
			},
			'g': {
				className: 'Concrete'
			},
			't': {
				className: 'Concrete',
				parts: [[1, 1], [0, 0]],
				augment: top
			},
			'h': {
				className: 'Concrete',
				parts: [[0, 1], [0, 1]],
				augment: right
			},
			'f': {
				className: 'Concrete',
				parts: [[1, 0], [1, 0]],
				augment: left
			},
			'b': {
				className: 'Concrete',
				parts: [[0, 0], [1, 1]],
				augment: bottom
			},
			'_': {
				className: 'Player'
			},
			'#': {
				className: 'Base'
			}
		};
	
	var stuffsPerLine = levels[0][0].length;
	
	var container = document.querySelector('#gameStage');
	var stuffSize = container.offsetWidth / stuffsPerLine;
	
	function top (element) {
		element.style.height = stuffSize / 2 + 'px';
	};
	
	function bottom (element) {
		element.style.height = stuffSize / 2 + 'px';
		element.style.marginTop = stuffSize / 2 + 'px';
	};
	
	function left (element) {
		element.style.width = stuffSize / 2 + 'px';
	};
	
	function right (element) {
		element.style.width = stuffSize / 2 + 'px';
		element.style.marginLeft = stuffSize / 2 + 'px';
	};

	this.set = function(symbol, x, y) {
	
		var stuff = stuffs[symbol];
		
		if (!stuff) {
			return;
		}
		
		matrix.set(stuff, x, y);
		
		var div = document.createElement('div');
		container.appendChild(div);
		
		div.setAttribute('class', stuff.className.toLowerCase());
		div.style.top = x * stuffSize + 'px';
		div.style.left = y * stuffSize + 'px';
		div.style.width = stuffSize + 'px';
		div.style.height = stuffSize + 'px';
		
		stuff.augment && stuff.augment(div);
	};
};