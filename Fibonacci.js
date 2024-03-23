// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

// // Example usage:
// console.log(fibonacci(10)); // Output: 5


function fibonacci(n) {
    const fib = [0,1]

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }

    return fib
}

console.log(fibonacci(7)); // Output:
