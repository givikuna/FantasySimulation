import { expect } from "chai";
import {
    comb,
    divisors,
    factorial,
    fib,
    isNatural,
    isPrime,
    neg,
    sieveOfEratosthenes,
    signum,
    square,
    toDegrees,
    toRadians,
} from "../lib/Math";

describe("toDegrees", (): void => {
    it("should convert radians to degrees correctly", (): void => {
        const rad: number = Math.PI;
        const expected: number = 180;
        const result: number = toDegrees(rad);
        expect(result).to.equal(expected);
    });

    it("should convert 0 radians to 0 degrees", (): void => {
        const rad: number = 0;
        const expected: number = 0;
        const result: number = toDegrees(rad);
        expect(result).to.equal(expected);
    });
});

describe("toRadians", (): void => {
    it("should convert degrees to radians correctly", (): void => {
        const deg: number = 180;
        const expected: number = Math.PI;
        const result: number = toRadians(deg);
        expect(result).to.be.closeTo(expected, 0.0001);
    });

    it("should convert 0 degrees to 0 radians", (): void => {
        const deg: number = 0;
        const expected: number = 0;
        const result: number = toRadians(deg);
        expect(result).to.equal(expected);
    });
});

describe("divisors", (): void => {
    it("should return divisors of a number", (): void => {
        const n: number = 6;
        const expected: number[] = [1, 2, 3, 6];
        const result: number[] = divisors(n);
        expect(result).to.deep.equal(expected);
    });

    it("should return empty array for 0", (): void => {
        const n: number = 0;
        const expected: number[] = [];
        const result: number[] = divisors(n);
        expect(result).to.deep.equal(expected);
    });
});

describe("factorial", (): void => {
    it("should return factorial of a number", (): void => {
        const n: number = 5;
        const expected: number = 120;
        const result: number = factorial(n);
        expect(result).to.equal(expected);
    });

    it("should return 1 for factorial of 0", (): void => {
        const n: number = 0;
        const expected: number = 1;
        const result: number = factorial(n);
        expect(result).to.equal(expected);
    });
});

describe("fib", (): void => {
    it("should return the nth Fibonacci number", (): void => {
        const n: number = 5;
        const expected: number = 8;
        const result: number = fib(n);
        expect(result).to.equal(expected);
    });

    it("should return 1 for Fibonacci of 0 and 1", (): void => {
        const n: number = 0;
        const expected: number = 1;
        const result: number = fib(n);
        expect(result).to.equal(expected);
        const n2: number = 1;
        const result2: number = fib(n2);
        expect(result2).to.equal(expected);
    });
});

describe("isPrime", (): void => {
    it("should return true for prime numbers", (): void => {
        const n: number = 5;
        const result: boolean = isPrime(n);
        expect(result).to.be.true;
    });

    it("should return false for non-prime numbers", (): void => {
        const n: number = 4;
        const result: boolean = isPrime(n);
        expect(result).to.be.false;
    });
});

describe("comb", (): void => {
    it("should return the correct combinations", (): void => {
        const n: number = 5;
        const r: number = 3;
        const expected: number = (2 * 3 * 4 * 5) / (2 * 3 * 2);
        const result: number = comb(n, r);
        expect(result).to.equal(expected);
    });

    it("should return 1 when r = 1", (): void => {
        const n: number = 5;
        const r: number = 1;
        const expected: number = (2 * 3 * 4 * 5) / (2 * 3 * 4);
        const result: number = comb(n, r);
        expect(result).to.equal(expected);
    });
});

describe("signum", (): void => {
    it("should return -1 for negative numbers", (): void => {
        const n: number = -5;
        const result: -1 | 1 = signum(n);
        expect(result).to.equal(-1);
    });

    it("should return 1 for positive numbers", (): void => {
        const n: number = 5;
        const result: -1 | 1 = signum(n);
        expect(result).to.equal(1);
    });

    it("should return 1 for 0", (): void => {
        const n: number = 0;
        const result: -1 | 1 = signum(n);
        expect(result).to.equal(1);
    });
});

describe("square", (): void => {
    it("should return the square of a number", (): void => {
        const n: number = 4;
        const expected: number = 16;
        const result: number = square(n);
        expect(result).to.equal(expected);
    });

    it("should return 0 for square of 0", (): void => {
        const n: number = 0;
        const expected: number = 0;
        const result: number = square(n);
        expect(result).to.equal(expected);
    });
});

describe("sieveOfEratosthenes", (): void => {
    it("should return prime numbers up to n", (): void => {
        const n: number = 10;
        const expected: number[] = [2, 3, 5, 7];
        const result: number[] = sieveOfEratosthenes(n);
        expect(result).to.deep.equal(expected);
    });

    it("should return empty array for n < 2", (): void => {
        const n: number = 1;
        const expected: number[] = [];
        const result: number[] = sieveOfEratosthenes(n);
        expect(result).to.deep.equal(expected);
    });
});

describe("isNatural", (): void => {
    it("should return true for positive integers", (): void => {
        const n: number = 5;
        const result: boolean = isNatural(n);
        expect(result).to.be.true;
    });

    it("should return false for non-integer values", (): void => {
        const n: number = 5.5;
        const result: boolean = isNatural(n);
        expect(result).to.be.false;
    });

    it("should return false for non-positive integers", (): void => {
        const n: number = 0;
        const result: boolean = isNatural(n);
        expect(result).to.be.false;
    });
});

describe("neg", (): void => {
    it("should return negative for positive numbers", (): void => {
        const n: number = 5;
        const result: number = neg(n);
        expect(result).to.equal(-5);
    });

    it("should return zero for zero", () => {
        const n: number = 0;
        const result: number = neg(n);
        expect(result).to.equal(0);
    });

    it("should return positive for negative numbers", (): void => {
        const n: number = -5;
        const result: number = neg(n);
        expect(result).to.equal(-5);
    });
});
