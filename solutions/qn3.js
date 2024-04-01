
function primeNumber(num) {
  // Check if num is less than 2 (not prime)
  if (num < 2) {
    return false;
  }
  // Check for divisibility by numbers up to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If num is divisible by any number, it's not prime
    }
  }
  return true; // If no divisors found, num is prime
}

function filterPrimes(arr) {
  // Initialize an empty array to store prime numbers
  const primes = [];

  // Iterate through each number in the input array
  for (let num of arr) {
    // Check if the number is prime using the isPrime function
    if (primeNumber(num)) {
      // If the number is prime, push it to the primes array
      primes.push(num);
    }
  }

  // Return the array containing prime numbers
  return primes;
}
console.log(filterPrimes([1,2,3,4,5,6,7,8,9,10]));

