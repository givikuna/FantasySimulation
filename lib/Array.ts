import * as _ from "lodash";

/**
 * Folds (reduces) an array from left to right using a binary function.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current element.
 * @param {T} z - The initial accumulator value.
 * @param {T[]} xs - The array of elements to fold over.
 * @returns {T} - The final accumulated result after folding over the array.
 *
 * @template T - The type of elements in the array and the accumulator.
 */
export function fold<T>(f: (x: T, y: T) => T, z: T, xs: T[]): T {
    let memo: T = z;
    for (let i: number = 0; i < xs.length; i++) memo = f(memo, xs[i]);
    return memo;
}

/**
 * Folds (reduces) an array from left to right using a binary function, similar to `fold`.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current element.
 * @param {T} z - The initial accumulator value.
 * @param {T[]} xs - The array of elements to fold over.
 * @returns {T} - The final accumulated result after folding over the array.
 *
 * @template T - The type of elements in the array and the accumulator.
 */
export function foldl<T>(f: (x: T, y: T) => T, z: T, xs: T[]): T {
    return fold(f, z, xs);
}

/**
 * Folds (reduces) an array from right to left using a binary function by reversing the array.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current element.
 * @param {T} z - The initial accumulator value.
 * @param {T[]} xs - The array of elements to fold over.
 * @returns {T} - The final accumulated result after folding over the array in reverse order.
 *
 * @template T - The type of elements in the array and the accumulator.
 */
export function foldr<T>(f: (x: T, y: T) => T, z: T, xs: T[]): T {
    return fold(f, z, _.reverse(xs));
}

/**
 * Folds (reduces) an array of numbers from left to right with an initial accumulator value of 1.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current element.
 * @param {number[]} xs - The array of numbers to fold over.
 * @returns {number} - The final accumulated result after folding over the array.
 */
export function fold1(f: (x: number, y: number) => number, xs: number[]): number {
    return fold(f, 1, xs);
}

/**
 * Folds (reduces) an array of numbers from left to right with an initial accumulator value of 1, similar to `foldl`.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current element.
 * @param {number[]} xs - The array of numbers to fold over.
 * @returns {number} - The final accumulated result after folding over the array.
 */
export function foldl1(f: (x: number, y: number) => number, xs: number[]): number {
    return foldl(f, 1, xs);
}

/**
 * Folds (reduces) an array of numbers from right to left with an initial accumulator value of 1, similar to `foldr`.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current element.
 * @param {number[]} xs - The array of numbers to fold over.
 * @returns {number} - The final accumulated result after folding over the array in reverse order.
 */
export function foldr1(f: (x: number, y: number) => number, xs: number[]): number {
    return foldr(f, 1, xs);
}

/**
 * Folds (reduces) an array of numbers from left to right with an initial accumulator value of 0.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current element.
 * @param {number[]} xs - The array of numbers to fold over.
 * @returns {number} - The final accumulated result after folding over the array.
 */
export function fold0(f: (x: number, y: number) => number, xs: number[]): number {
    return fold(f, 0, xs);
}

/**
 * Folds (reduces) an array of numbers from left to right with an initial accumulator value of 0, similar to `foldl`.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current element.
 * @param {number[]} xs - The array of numbers to fold over.
 * @returns {number} - The final accumulated result after folding over the array.
 */
export function foldl0(f: (x: number, y: number) => number, xs: number[]): number {
    return foldl(f, 0, xs);
}

/**
 * Folds (reduces) an array of numbers from right to left with an initial accumulator value of 0, similar to `foldr`.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current element.
 * @param {number[]} xs - The array of numbers to fold over.
 * @returns {number} - The final accumulated result after folding over the array in reverse order.
 */
export function foldr0(f: (x: number, y: number) => number, xs: number[]): number {
    return foldr(f, 0, xs);
}

/**
 * Folds (reduces) an array of booleans from left to right with an initial accumulator value of `true`.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current element.
 * @param {boolean[]} xs - The array of booleans to fold over.
 * @returns {boolean} - The final accumulated result after folding over the array.
 */
export function foldt(f: (x: boolean, y: boolean) => boolean, xs: boolean[]): boolean {
    return fold(f, true, xs);
}

/**
 * Folds (reduces) an array of booleans from left to right with an initial accumulator value of `true`, similar to `foldl`.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current element.
 * @param {boolean[]} xs - The array of booleans to fold over.
 * @returns {boolean} - The final accumulated result after folding over the array.
 */
export function foldlt(f: (x: boolean, y: boolean) => boolean, xs: boolean[]): boolean {
    return foldl(f, true, xs);
}

/**
 * Folds (reduces) an array of booleans from right to left with an initial accumulator value of `true`, similar to `foldr`.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current element.
 * @param {boolean[]} xs - The array of booleans to fold over.
 * @returns {boolean} - The final accumulated result after folding over the array in reverse order.
 */
export function foldrt(f: (x: boolean, y: boolean) => boolean, xs: boolean[]): boolean {
    return foldr(f, true, xs);
}

/**
 * Folds (reduces) an array of booleans from left to right with an initial accumulator value of `false`.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current element.
 * @param {boolean[]} xs - The array of booleans to fold over.
 * @returns {boolean} - The final accumulated result after folding over the array.
 */
export function foldf(f: (x: boolean, y: boolean) => boolean, xs: boolean[]): boolean {
    return fold(f, false, xs);
}

/**
 * Folds (reduces) an array of booleans from left to right with an initial accumulator value of `false`, similar to `foldl`.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current element.
 * @param {boolean[]} xs - The array of booleans to fold over.
 * @returns {boolean} - The final accumulated result after folding over the array.
 */
export function foldlf(f: (x: boolean, y: boolean) => boolean, xs: boolean[]): boolean {
    return foldl(f, false, xs);
}

/**
 * Folds (reduces) an array of booleans from right to left with an initial accumulator value of `false`, similar to `foldr`.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current element.
 * @param {boolean[]} xs - The array of booleans to fold over.
 * @returns {boolean} - The final accumulated result after folding over the array in reverse order.
 */
export function foldrf(f: (x: boolean, y: boolean) => boolean, xs: boolean[]): boolean {
    return foldr(f, false, xs);
}

/**
 * Folds (reduces) an array of strings from left to right, using an initial accumulator value of an empty string.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current string element.
 * @param {string[]} xs - The array of strings to fold over.
 * @returns {string} - The final accumulated result after folding over the array.
 */
export function foldstr(f: (x: string, y: string) => string, xs: string[]): string {
    return fold(f, "", xs);
}

/**
 * Folds (reduces) an array of strings from left to right, using an initial accumulator value of an empty string. Equivalent to `foldl`.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current string element.
 * @param {string[]} xs - The array of strings to fold over.
 * @returns {string} - The final accumulated result after folding over the array.
 */
export function foldlstr(f: (x: string, y: string) => string, xs: string[]): string {
    return foldl(f, "", xs);
}

/**
 * Folds (reduces) an array of strings from right to left, using an initial accumulator value of an empty string. Equivalent to `foldr`.
 *
 * @param {function} f - The binary function to apply. It takes two arguments: the accumulated value and the current string element.
 * @param {string[]} xs - The array of strings to fold over.
 * @returns {string} - The final accumulated result after folding over the array in reverse order.
 */
export function foldrstr(f: (x: string, y: string) => string, xs: string[]): string {
    return foldr(f, "", xs);
}

/**
 * Calculates the frequency of a specific element in an array, optionally using a custom equality function.
 *
 * @param {T[]} xs - The array to search.
 * @param {T} k - The element to count in the array.
 * @param {function} [eqF] - An optional custom equality function that takes two arguments and returns `true` if they are considered equal.
 * @returns {number} - The number of occurrences of the element `k` in the array `xs`.
 *
 * @template T - The type of elements in the array.
 */
export function freq<T>(xs: T[], k: T, eqF?: (x: T, y: T) => boolean) {
    return xs.filter((x: T): boolean => (eqF == null || eqF == undefined ? x === k : eqF(x, k))).length;
}

/**
 * Enumerates an array, pairing each element with its index.
 *
 * @param {T[]} xs - The array to enumerate.
 * @returns {[number, T][]} - An array of tuples, where each tuple contains the index and the corresponding element from the input array.
 *
 * @template T - The type of elements in the array.
 */
export function enumerate<T>(xs: T[]): [number, T][] {
    return xs.map((x: T, i: number): [number, T] => [i, x]);
}

/**
 * Checks if an array is empty.
 *
 * @param {T[]} xs - The array to check.
 * @returns {boolean} - `true` if the array is empty, otherwise `false`.
 *
 * @template T - The type of elements in the array.
 */
export function Ø<T>(xs: T[]): boolean {
    return xs.length === 0;
}
