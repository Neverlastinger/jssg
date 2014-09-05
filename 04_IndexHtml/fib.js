// fib version 1 - simple recursion
function fib(n) {
	
	if (n == 1 || n == 2) {
		return 1;
	}
	
	return fib(n - 1) + fib(n - 2);
}

console.log('fib 10 is', fib(10));

// fib version 2 - caching
function fib(n) {

	var cache = arguments[1] || [];
	
	if (cache[n]) {
		// console.log('using cache for', n);
		return cache[n];
	}
	
	// console.log('calculating fib for', n);
	
	if (n == 1 || n == 2) {
		return 1;
	}
	
	cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
	// console.log('saving cache for', n);
	return cache[n];
}

console.log('fib 10 (with caching mechanizm) is', fib(10));

function fib(n) {

	var cache = [];
	return _fib(n);
	
	function _fib(n) {
	
		if (cache[n]) {
			// console.log('using cache for ', n);
			return cache[n];
		}
		
		// console.log('calculating fib for', n);
	
		if (n == 1 || n == 2) {
			return 1;
		}
		
		cache[n] = _fib(n - 1) + _fib(n - 2);
		// console.log('saving cache for', n);
		return cache[n];
	}
	
}

console.log('fib 10 (with caching mechanizm and closure) is', fib(10));
