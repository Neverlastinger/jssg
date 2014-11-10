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
	
	var moveLeft = move.bind(null, -1, 0);
	var moveRight = move.bind(null, 1, 0);
	var moveUp = move.bind(null, 0, -1);
	var moveDown = move.bind(null, 0, 1);
	
	var stopMoving = function() {
		direction = {
				left: 0,
				top: 0
			};
	};
	
	var keys = {
			37: {
				code: 37,
				trigger: moveLeft
			},
			38: {
				code: 38,
				trigger: moveUp
			},
			39: {
				code: 39,
				trigger: moveRight
			},
			40: {
				code: 40,
				trigger: moveDown
			}
		};
	
	document.addEventListener('keydown', function(e) {
		
		var key = keys[e.keyCode];
		
		if (!key || key.isActive) {
			return;
		}
		
		key.isActive = true;
		key.trigger();
	});
	
	document.addEventListener('keyup', function(e) {
		
		var key = keys[e.keyCode];
		
		if (!key || !key.isActive) {
			return;
		}
		
		key.isActive = false;
		stopMoving();
		
		for (k in keys) {
			if (keys[k].isActive) {
				keys[k].trigger();
				return;
			}
		}
	});
	
	this.draw = function() {
		
		position.left += direction.left * speed;
		position.top += direction.top * speed;
		
		playerElement.style.left = position.left + 'px';
		playerElement.style.top = position.top + 'px';
	};
	
};
