function fib(n) {

	var cache = arguments[1] || [];
	
	if (cache[n]) {
		return cache[n];
	}
	
	if (n == 1 || n == 2) {
		return 1;
	}
	
	cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
	return cache[n];
}

var x = fib(50);
console.log(x);