import * as _ from "lodash";
import * as mathjs from "mathjs";

/**
 * Converts an angle from radians to degrees.
 *
 * @param {number} rad - The angle in radians.
 * @returns {number} - The angle in degrees.
 */
export function toDegrees(rad: number) {
    return (rad * 180) / Math.PI;
}

/**
 * Converts an angle from degrees to radians.
 *
 * @param {number} deg - The angle in degrees.
 * @returns {number} - The angle in radians.
 */
export function toRadians(deg: number) {
    return (deg * Math.PI) / 180;
}

/**
 * Returns a sorted array of divisors of a number.
 * Memoized for performance optimization.
 *
 * @param {number} n - The number to find divisors of.
 * @returns {number[]} - A sorted array of divisors of the number.
 */
export const divisors: (n: number) => number[] = _.memoize((n: number): number[] => {
    const divisors: number[] = [];

    for (let i: number = 0; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }

    return _.chain(divisors).sort().value();
});

/**
 * Returns the factorial of a number.
 * Memoized for performance optimization.
 *
 * @param {number} n - The number to calculate the factorial of.
 * @returns {number} - The factorial of the number.
 */
export const factorial: (n: number) => number = _.memoize((n: number): number =>
    n == 0 ? 1 : n === 1 || n === 2 ? n : n * factorial(n - 1),
);

/**
 * Returns the nth Fibonacci number.
 * Memoized for performance optimization.
 *
 * @param {number} n - The position in the Fibonacci sequence.
 * @returns {number} - The nth Fibonacci number.
 */
export const fib: (n: number) => number = _.memoize((n: number): number =>
    n <= 1 ? 1 : fib(n - 1) + fib(n - 2),
);

/**
 * Checks if a number is prime.
 * Memoized for performance optimization.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} - True if the number is prime, otherwise false.
 */
export const isPrime: (n: number) => boolean = _.memoize((n: number): boolean => mathjs.isPrime(n));

/**
 * Calculates the number of combinations (n choose r).
 * Memoized for performance optimization.
 *
 * @param {number} n - The total number of items.
 * @param {number | 1} r - The number of items to choose (default is 1).
 * @returns {number} - The number of combinations (n choose r).
 */
export const comb: (n: number, r: number | 1) => number = (n: number, r: number = 1): number =>
    factorial(n) / (factorial(r) * factorial(n - r));

/**
 * Returns sign of a number (-1, 1)
 *
 * @param {number} n - number whose sign is to be determined
 * @returns {number} - number
 */
export function signum(n: number): -1 | 1 {
    return 0 > n ? -1 : 1;
}

/**
 * Returns the square of a number.
 * Memoized for performance optimization.
 *
 * @param {number} n - The number to square.
 * @returns {number} - The square of the input number.
 */
export const square: (n: number) => number = _.memoize((n: number): number => n * n);

/**
 * Implements the Sieve of Eratosthenes algorithm to find all prime numbers up to a given limit.
 *
 * @param {number} n - The upper limit up to which primes should be found.
 * @returns {number[]} - An array of prime numbers up to the limit.
 */
export function sieveOfEratosthenes(n: number): number[] {
    const primes: boolean[] = new Array(n + 1).fill(true);
    primes[0] = primes[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }

    const result: number[] = [];
    for (let i = 2; i <= n; i++) {
        if (primes[i]) {
            result.push(i);
        }
    }

    return result;
}

/**
 * Checks if a number is a natural number (positive integer).
 *
 * @param {number} n - The number to check.
 * @returns {boolean} - True if the number is a natural number, otherwise false.
 */
export function isNatural(n: number): boolean {
    return n > 0 && Number.isInteger(n);
}

/**
 * Returns the negation of a number.
 * If the number is positive, returns its negative value. Otherwise, returns the number unchanged.
 *
 * @param {number} n - The number to negate.
 * @returns {number} - The negated number.
 */
export function neg(n: number): number {
    return 0 < n ? -n : n;
}
