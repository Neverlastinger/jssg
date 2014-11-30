/**
 * The rendering engine.
 */
var stage = new function() {
	
	var playerElement;
	var stuffsPerLine;
	var container;
	var stuffSize;
	
	this.init = function() {
		
		stuffsPerLine = levels[0][0].length;
		
		container = document.querySelector('#gameStage');
		stuffSize = container.offsetWidth / stuffsPerLine;
	};
	
	this.initStuff = function(stuff, x, y) {
		
		var div = document.createElement('div');
		container.appendChild(div);
		
		div.setAttribute('class', stuff.className.toLowerCase());
		div.style.left = x * stuffSize + 'px';
		div.style.top = y * stuffSize + 'px';
		div.style.width = stuffSize + 'px';
		div.style.height = stuffSize + 'px';
		
		if (stuff.className == 'Player') {
			playerElement = div;
		}
		
		if (stuff.parts) {
			if (stuff.parts[1][0] == 0 && stuff.parts[1][1] == 0) {
				top(div);
			}
			if (stuff.parts[0][0] == 0 && stuff.parts[1][0] == 0) {
				right(div);
			}
			if (stuff.parts[0][0] == 0 && stuff.parts[0][1] == 0) {
				bottom(div);
			}
			if (stuff.parts[0][1] == 0 && stuff.parts[1][1] == 0) {
				left(div);
			}
		}
	};
	
	this.drawPlayer = function(x, y) {
		playerElement.style.left = x * 50 + 'px';
		playerElement.style.top = y * 50 + 'px';
	};
	
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
	
};