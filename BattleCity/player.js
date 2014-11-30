var player = new function() {
	
	var direction = {
			left: 0,
			top: 0
		};
	
	var position = {
			left: 0,
			top: 0
		};
	
	var speed = 0.03; // squares per frame
	
	var move = function(left, top) {
		direction = {
				left: left,
				top: top
			};
	};
	
	keyboard.init({
			onLeft: move.bind(this, -1, 0),
			onRight: move.bind(this, 1, 0),
			onUp: move.bind(this, 0, -1),
			onDown: move.bind(null, 0, 1),
			onStop: move.bind(null, 0, 0)
		});
	
	this.setPosition = function(x, y) {
		position = {
				x: x,
				y: y
			};
	};
	
	this.draw = function() {
		
		var newPosition = {
				x: position.x,
				y: position.y
			};
		
		if (direction.left) {
			
			newPosition.x += direction.left * speed; 
			newPosition.y = Math.round(position.y * 2) / 2;
		}
		
		if (direction.top) {
			
			newPosition.x = Math.round(position.x * 2) / 2;
			newPosition.y += direction.top * speed; 
		}
		
		if (!matrix.canMove(newPosition, direction)) {
			return;
		}
		
		position = newPosition;
		
		_log('player position: ' + position.x + ' : ' + position.y, 'playerPos');
		
		stage.drawPlayer(position.x, position.y);
	};
	
};
