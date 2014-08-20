function fib(n) {

	var cache = [];
	return _fib(n);
	
	function _fib(n) {
	
		if (cache[n]) {
			console.log('using cache for ', n);
			return cache[n];
		}
		
		console.log('calculating fib for', n);
	
		if (n == 1 || n == 2) {
			return 1;
		}
		
		cache[n] = _fib(n - 1) + _fib(n - 2);
		console.log('saving cache for', n);
		return cache[n];
	}
	
}

var x = fib(10);
console.log(x);