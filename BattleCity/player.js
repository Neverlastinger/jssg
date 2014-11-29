var player = new function() {
	
	var playerElement = document.querySelector('.player');
	
	var direction = {
			left: 0,
			top: 0
		};
	
	var position = {
			left: playerElement.offsetLeft,
			top: playerElement.offsetTop
		};
	
	var speed = 2;
	
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
	
	this.draw = function() {
		
		if (direction.left) {
			
			var y = matrix.getYPosition();
			
			position.left += direction.left * speed;
			position.top = 50 * y;
		}
		
		if (direction.top) {
			
			var x = matrix.getXPosition();
			
			position.left = 50 * x;
			position.top += direction.top * speed;
		}
		
		matrix.updatePlayerPosition(position.left, position.top);

		
		playerElement.style.left = position.left + 'px';
		playerElement.style.top = position.top + 'px';
	};
	
};
