// exponent version 1: square
var pow = function(base) {
	return base * base;
}

console.log('square of 5 is', pow(5));
console.log('square of nothing is', pow());
console.log('square of 5 is (using an useless param)', pow(5, 'tra-la-la'));

// exponent version 2: using the arguments
var pow = function(base) {

	var exponent = arguments[1] || 2;
	var result = base;
	
	for (var i = 2; i <= exponent; i++) {
		result *= base;
	}
	
	return result;
}

console.log('2^5 is', pow(2, 5));
console.log('pow of 2 is', pow(2));

// exponent version 3: optional param
var pow = function(base, exponent) {

	var exponent = exponent || 2;
	var result = base;
	
	for (var i = 2; i <= exponent; i++) {
		result *= base;
	}
	
	return result;
}

console.log('2^5 is', pow(2, 5));
console.log('pow of 2 is', pow(2));

// sum
var sum = function() {

	var result = 0;
	
	for (var i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	
	return result;
}

console.log('2+3+4=', sum(2, 3, 4));
console.log('sum of nothing is', sum());