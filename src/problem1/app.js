#!/usr/bin/env node

var sum_to_n_a = function(n) {
	// swapping concept
	let sum = 0;
	let placeholder = [];

	if (n < Number.MAX_SAFE_INTEGER) {
		for (x = 1; x <= n; x++) {
			placeholder[x - 1] = x;
			sum += placeholder[x - 1];
		}
	}

	return sum < Number.MAX_SAFE_INTEGER ? sum : 0;
};


var sum_to_n_b = function(n) {
	// the basic one-liner concept
	const sum = (n * (n + 1)) / 2

	return sum < Number.MAX_SAFE_INTEGER ? sum : 0;
};

var sum_to_n_c = function(n) {
	// set the desired index length
	let haystack = new Array(n);

	// dynamically fill the array
	// the value is set to 0 so it wouldn't interefere when we sum it later on
	// starting point is 0 and the end points is the value of n
	haystack.fill(0, 0, n);

	// re-initialized haystack
	haystack = haystack.map((x, idx) => idx + 1);

	// get the sum
	const sum = haystack.reduce((total, value) => total + value);

	return sum < Number.MAX_SAFE_INTEGER ? sum : 0;
};

const iteration = Number(process.argv.slice(2)) || 5;

console.table({
'Argument': iteration,
'Sum': '--',
'A': sum_to_n_a(iteration),
'B': sum_to_n_b(iteration),
'C': sum_to_n_c(iteration),
});
