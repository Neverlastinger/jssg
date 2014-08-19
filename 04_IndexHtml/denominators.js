var denominators = [];

var findDenominators = function(number) {
	for (var i = 2; i <= number; i++) {
		if (number % i == 0) {
			denominators.push(i);
			return findDenominators(number / i);
		}
	}
	return denominators;
}

console.log(findDenominators(100));