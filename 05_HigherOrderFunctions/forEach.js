// forEach
var forEach = function(array, f) {
	for (var i = 0; i < array.length; i++) {
		f(array[i]);
	}
};

var array = [1, 2, 3, 4];
forEach(array, function(element) { console.log(element * element) } );