function fib(n) {

	var cache = arguments[1] || [];
	
	if (cache[n]) {
		console.log('using cache for', n);
		return cache[n];
	}
	
	console.log('calculating fib for', n);
	
	if (n == 1 || n == 2) {
		return 1;
	}
	
	cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
	console.log('saving cache for', n);
	return cache[n];
}

var x = fib(10);
console.log(x);