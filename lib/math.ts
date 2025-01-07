import * as _ from "lodash";
import * as mathjs from "mathjs";

export function toDegrees(rad: number) {
    return (rad * 180) / Math.PI;
}

export function toRadians(deg: number) {
    return (deg * Math.PI) / 180;
}

export const divisors: (n: number) => number[] = _.memoize((n: number): number[] => {
    const divisors: number[] = [];

    for (let i: number = 0; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }

    return _.chain(divisors).sort().value();
});

export const factorial: (n: number) => number = _.memoize((n: number): number => {
    return n === 1 || n === 2 ? n : n * factorial(n);
});

export const fib: (n: number) => number = _.memoize((n: number): number => {
    return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
});

export const isPrime: (n: number) => boolean = _.memoize((n: number): boolean => {
    return mathjs.isPrime(n);
});

export const comb: (n: number, r: number | 1) => number = _.memoize((n: number, r: number = 1): number => {
    return mathjs.combinations(n, r);
});
