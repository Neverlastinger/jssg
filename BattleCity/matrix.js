var matrix = new function() {
	
	var grid = [];
	
	var playerPosition = {};
	
	this.set = function(stuff, x, y) {
		
		var stuff = new window[stuff.className](stuff.parts);
		
		if (grid[x] === undefined) {
			grid[x] = [];
		}
		
		grid[x][y] = stuff;
		
		if (stuff.className == 'Player') {
			playerPosition.x = x;
			playerPosition.y = y;
		}
	};
	
	this.getXPosition = function() {
		return playerPosition.x;
	};
	
	this.getYPosition = function() {
		return playerPosition.y;
	};
	
	this.updatePlayerPosition = function(left, top) {
		playerPosition.x = Math.round(left / 50); // TODO stuff width
		playerPosition.y = Math.round(top / 50); // TODO stuff width
		document.querySelector('#info').innerHTML = 'updating player position to ' + playerPosition.x + ' : ' + playerPosition.y;
		
	};
	
	setTimeout(function() {
		console.log(grid);
	}, 1000);
	
};
