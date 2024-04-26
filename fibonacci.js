// Function to calculate Fibonacci numbers up to a specified limit
function calculateFibonacci(limit) {
    // Error handling: check if the limit is a positive integer
    if (typeof limit !== 'number' || limit < 1 || !Number.isInteger(limit)) {
        throw new Error('Limit must be a positive integer.');
    }
    
    // Initialize Fibonacci sequence array with the first two numbers
    const fibonacciSequence = [0, 1];

    // Calculate Fibonacci numbers up to the limit
    for (let i = 2; i < limit; i++) {
        // Calculate the next Fibonacci number by summing the previous two numbers
        const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];

        // Check if the next number exceeds the limit
        if (nextNumber > limit) {
            break;
        }

        // Add the next Fibonacci number to the sequence
        fibonacciSequence.push(nextNumber);
    }

    return fibonacciSequence;
}

// Test the function
try {
    const limit1 = 100;
    const fibonacciNumbers1 = calculateFibonacci(limit1);
    console.log(`Fibonacci numbers up to ${limit1}:`, fibonacciNumbers1);

    const limit2 = 999;
    const fibonacciNumbers2 = calculateFibonacci(limit2);
    console.log(`Fibonacci numbers up to ${limit2}:`, fibonacciNumbers2);

    const limit3 = -2;
    const fibonacciNumbers3 = calculateFibonacci(limit3);
    console.log(`Fibonacci numbers up to ${limit3}:`, fibonacciNumbers3);
} catch (error) {
    console.error(error.message);
}