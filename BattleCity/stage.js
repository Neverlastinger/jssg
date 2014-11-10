var stage = new function() {
	
	var stuffs = {
			's': {
				className: 'brick'
			},
			'w': {
				className: 'brick',
				augment: top
			},
			'd': {
				className: 'brick',
				augment: right
			},
			'a': {
				className: 'brick',
				augment: left
			},
			'x': {
				className: 'brick',
				augment: bottom
			},
			'g': {
				className: 'ice'
			},
			't': {
				className: 'ice',
				augment: top
			},
			'h': {
				className: 'ice',
				augment: right
			},
			'f': {
				className: 'ice',
				augment: left
			},
			'b': {
				className: 'ice',
				augment: bottom
			},
			'_': {
				className: 'player'
			},
			'#': {
				className: 'base'
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
		
		var div = document.createElement('div');
		container.appendChild(div);
		
		div.setAttribute('class', stuff.className);
		div.style.top = x * stuffSize + 'px';
		div.style.left = y * stuffSize + 'px';
		div.style.width = stuffSize + 'px';
		div.style.height = stuffSize + 'px';
		
		stuff.augment && stuff.augment(div);
	};
};