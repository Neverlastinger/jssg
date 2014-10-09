// basic polyfill for Array.prototype.forEach 
if (!Array.prototype.forEach) {
	Array.prototype.forEach = function(handler) {
		for (var i = 0; i < this.length; i++) {
			handler(this[i]);
		}
	}
}

// basic polyfill for Object.keys
if (!Object.keys) {
	Object.keys = function(obj) {
		var result = [];
		for (var key in obj) {
			result.push(key);
		}
		return result;
	}
}

// polyfill for Array.isArray
if (!Array.isArray) {
	Array.isArray = function(arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

// prevent app from breaking due to console.log usage
if (!console) {
	console = { log: function() {} };
}