// Return the fibonacci term for a specified number

// Brute Force : time complexity = O(2^n)
let fibN = (n)=>{
    if (n<=2) return 1
    return fib(n-1)+fib(n-2)
}

// Memoized : time complexity = O(n)
let fib = (n, memo={})=>{
    if (n in memo) return memo[n]
    if (n<=2) return 1
    memo[n] = fib(n-1,memo)+fib(n-2,memo)
    return memo[n]
}

// Function calls
console.log(fib(3)) // 2
console.log(fib(10)) // 55
console.log(fib(60)) // 1548008755920