// filter
var filter = function(array, f) {
	
	var result = [];
	
	array.forEach(function(element) {
		if (f(element)) {
			result.push(element);
		}
	});
	
	return result;
};

var array = [1, 2, 3, 4];
filter(array, function(element) { return element % 2 == 0 });