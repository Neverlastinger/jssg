// reduce
var reduce = function(array, f, start) {
	
	if (array.length == 0) {
		return start;
	}
	
	var res = f(start, array[0]);
	var remaining = array.slice(1);
	
	return reduce(remaining, f, res);
};

var array = [1, 2, 3, 4];
reduce(array, function(a, b) { return a + b; }, 0);