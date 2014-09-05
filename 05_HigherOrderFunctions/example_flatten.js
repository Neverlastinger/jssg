var array = [[1, 2, 3], [4], [5, 6, 7, 8], ['a', 'b']];

// -----------
// let's flatten the array, but include only subarrays that contain more than one element
reduce(filter(array, function(element) {
		return element.length > 1;
	}), function(a, b) {
			return a.concat(b);
		}, []);

// -----------
// let's make it more "functional"
var moreThanOneElement = function(arr) { 
	return arr.length > 1; 
};

var join = function(a, b) { 
	return a.concat(b); 
};

reduce(filter(x, moreThanOneElement), join, []);

// -----------
// let's make it more "object-oriented"
x.filter(moreThanOneElement).reduce(join, []);