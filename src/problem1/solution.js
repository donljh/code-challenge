// Task
// Provide 3 unique implementations of the following function.
// Input `n` - any integer 
// Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.

// Solution assumption: any number input < 0 is considered invalid

var sum_to_n_a = function(n) {
    if (n < 0) return 0; // invalid input
    // for loop iteration
    let sum = 0; 
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
};

var sum_to_n_b = function(n) {
    if (n < 0) return 0; // invalid input
    // recursively add the sum
    if (n == 0 || n == 1) { // base cases
        return n;
    }
    return n + sum_to_n_b(n - 1);
};

var sum_to_n_c = function(n) {
    if (n < 0) return 0; // invalid input
    // sum of arithmetic progression sequence
    return (1 + n) * (n / 2);
};