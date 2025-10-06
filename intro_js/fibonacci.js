function fibonacci(n) {
    if( n < 2) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

const n = Number(process.argv[2]);

console.log(`Elemenul din sirul lui Fibonacci de ordin ${n} este: ${fibonacci(n)}`);