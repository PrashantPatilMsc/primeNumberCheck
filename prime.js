function getPrimesInRange(start, end) {
  // Function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  // Array to store prime numbers
  const primes = [];

  // Loop through the range and check for prime numbers
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

// Example usage:
const startRange = 10;
const endRange = 50;
const primesInRange = getPrimesInRange(startRange, endRange);
console.log(
  `Prime numbers between ${startRange} and ${endRange}: ${primesInRange}`
);
