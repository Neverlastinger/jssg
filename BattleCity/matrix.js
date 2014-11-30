var matrix = new function() {
	
	var grid = [];
	grid[0] = []; // patch
	
	var playerPosition = {};
	
	this.set = function(stuff, x, y) {
		
		var stuff = new window[stuff.className](stuff.parts);
		
		if (grid[y] === undefined) {
			grid[y] = [];
		}
		
		grid[y][x] = stuff;
		
		if (stuff.className == 'Player') {
			playerPosition.x = x;
			playerPosition.y = y;
		}
	};
	
	this.canMove = function(position, direction) {
		
		if (direction.left == 0 && direction.top == 0) {
			return true;
		}
		
		if (position.x < 0 || position.x > 12 || position.y < 0 || position.y > 12) { //TODO matrix size
			return false;
		}
		
		if (direction.left == -1) {
			var y = Math.floor(position.y);
			var x = Math.floor(position.x);
		}
		if (direction.left == 1) {
			var y = Math.floor(position.y);
			var x = Math.ceil(position.x);
		}
		if (direction.top == -1) {
			var y = Math.floor(position.y);
			var x = Math.floor(position.x);
		}
		if (direction.top == 1) {
			var y = Math.ceil(position.y);
			var x = Math.floor(position.x);
		}
		
		var stuff = grid[y][x];
		
		if (stuff && stuff.name != 'Player') {
			_log(stuff.name + ' in a way ', 'inAWay');
			return false;
		}
		
		_log(' - ', 'inAWay');
		return true;
		
	};
	
	setTimeout(function() {
		console.log(grid);
	}, 1000);
	
};
