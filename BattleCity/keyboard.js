/**
 * Represents the keyboard. Handles the functionality of providing feedback about the state of the keyboard. 
 */
var keyboard = new function() {
	
	var callbacks = {
			onLeft: function() {},
			onRight: function() {},
			onUp: function() {},
			onDown: function() {},
			onStop: function() {}
		};
	
	/**
	 * Initializes the keyboard with callbacks.
	 * 
	 * @param _callbacks: object:
	 * 				- onLeft
	 * 				- onRight
	 * 				- onUp
	 * 				- onDown
	 * 				- onStop
	 */
	this.init = function(_callbacks) {
		for (var key in _callbacks) {
			callbacks[key] = _callbacks[key];
		}
	};
	
	var keys = {
			37: {
				trigger: function() { callbacks.onLeft(); }
			},
			38: {
				trigger: function() { callbacks.onUp(); }
			},
			39: {
				trigger: function() { callbacks.onRight(); }
			},
			40: {
				trigger: function() { callbacks.onDown(); }
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
		callbacks.onStop();
		
		for (k in keys) {
			if (keys[k].isActive) {
				keys[k].trigger();
				return;
			}
		}
	});
	
};
