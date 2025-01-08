import { expect } from "chai";
import {
    enumerate,
    fold,
    fold0,
    fold1,
    foldf,
    foldl,
    foldl0,
    foldl1,
    foldlf,
    foldlstr,
    foldlt,
    foldr,
    foldr0,
    foldr1,
    foldrf,
    foldrstr,
    foldrt,
    foldstr,
    foldt,
    freq,
    Ø,
} from "../lib/Array";

describe("Ø function", (): void => {
    it("should return true for an empty array", (): void => {
        const result = Ø([]);
        expect(result).to.be.true;
    });

    it("should return false for a non-empty array", (): void => {
        const result = Ø([1, 2, 3]);
        expect(result).to.be.false;
    });

    it("should work with arrays of different types", (): void => {
        expect(Ø([null])).to.be.false;
        expect(Ø([""])).to.be.false;
        expect(Ø([undefined])).to.be.false;
        expect(Ø([])).to.be.true;
    });
});

describe("enumerate function", (): void => {
    it("should return an empty array for an empty input", (): void => {
        const result = enumerate([]);
        expect(result).to.deep.equal([]);
    });

    it("should enumerate indices and values correctly for non-empty arrays", (): void => {
        const result = enumerate(["a", "b", "c"]);
        expect(result).to.deep.equal([
            [0, "a"],
            [1, "b"],
            [2, "c"],
        ]);
    });

    it("should handle arrays of numbers", (): void => {
        const result = enumerate([10, 20, 30]);
        expect(result).to.deep.equal([
            [0, 10],
            [1, 20],
            [2, 30],
        ]);
    });

    it("should handle arrays with mixed types", (): void => {
        const result = enumerate([1, "two", null]);
        expect(result).to.deep.equal([
            [0, 1],
            [1, "two"],
            [2, null],
        ]);
    });
});

describe("freq function", (): void => {
    it("should return 0 for an empty array", (): void => {
        const result = freq([], "a");
        expect(result).to.equal(0);
    });

    it("should count occurrences correctly with default equality", (): void => {
        const result = freq(["a", "b", "a", "c", "a"], "a");
        expect(result).to.equal(3);
    });

    it("should work with custom equality function", (): void => {
        const customEq = (x: string, y: string): boolean => x.toLowerCase() === y.toLowerCase();
        const result = freq(["A", "b", "a", "C", "A"], "a", customEq);
        expect(result).to.equal(3);
    });

    it("should count numbers correctly", (): void => {
        const result = freq([1, 2, 3, 1, 4, 1], 1);
        expect(result).to.equal(3);
    });

    it("should handle no matches", (): void => {
        const result = freq([1, 2, 3], 5);
        expect(result).to.equal(0);
    });
});

describe("fold function", (): void => {
    it("should return the initial value for an empty array", (): void => {
        const result = fold((x: number, y: number): number => x + y, 10, []);
        expect(result).to.equal(10);
    });

    it("should correctly sum numbers", (): void => {
        const result = fold((x: number, y: number): number => x + y, 0, [1, 2, 3, 4]);
        expect(result).to.equal(10);
    });

    it("should concatenate strings", (): void => {
        const result = fold((x: string, y: string): string => x + y, "", ["a", "b", "c"]);
        expect(result).to.equal("abc");
    });

    it("should handle multiplication", (): void => {
        const result = fold((x: number, y: number): number => x * y, 1, [1, 2, 3, 4]);
        expect(result).to.equal(24);
    });

    it("should work with custom functions", (): void => {
        const customFunc = (x: number, y: number): number => (x > y ? x : y);
        const result = fold(customFunc, -Infinity, [1, 5, 2, 8, 3]);
        expect(result).to.equal(8);
    });
});

describe("foldl function", (): void => {
    it("should return the initial value for an empty array", (): void => {
        const result = foldl((x: number, y: number): number => x + y, 10, []);
        expect(result).to.equal(10);
    });

    it("should correctly sum numbers", (): void => {
        const result = foldl((x: number, y: number): number => x + y, 0, [1, 2, 3, 4]);
        expect(result).to.equal(10);
    });

    it("should concatenate strings", (): void => {
        const result = foldl((x: string, y: string): string => x + y, "", ["a", "b", "c"]);
        expect(result).to.equal("abc");
    });

    it("should handle multiplication", (): void => {
        const result = foldl((x: number, y: number): number => x * y, 1, [1, 2, 3, 4]);
        expect(result).to.equal(24);
    });

    it("should work with custom functions", (): void => {
        const customFunc = (x: number, y: number): number => (x > y ? x : y);
        const result = foldl(customFunc, -Infinity, [1, 5, 2, 8, 3]);
        expect(result).to.equal(8);
    });
});

describe("foldr function", (): void => {
    it("should return the initial value for an empty array", () => {
        const result = foldr((x: number, y: number): number => x + y, 10, []);
        expect(result).to.equal(10);
    });

    it("should correctly fold a reversed array", (): void => {
        const result = foldr((x: number, y: number): number => x - y, 0, [1, 2, 3, 4]);
        expect(result).to.equal(-10); // (((0 - 4) - 3) - 2) - 1 = -10
    });

    it("should work with string concatenation", (): void => {
        const result = foldr((x: string, y: string): string => x + y, "", ["a", "b", "c"]);
        expect(result).to.equal("cba");
    });

    it("should handle custom functions", (): void => {
        const result = foldr((x: number, y: number): number => Math.max(x, y), -Infinity, [1, 5, 2, 8, 3]);
        expect(result).to.equal(8);
    });
});

describe("fold1 function", (): void => {
    it("should return 1 for an empty array", (): void => {
        const result = fold1((x: number, y: number): number => x + y, []);
        expect(result).to.equal(1);
    });

    it("should sum numbers correctly", (): void => {
        const result = fold1((x: number, y: number): number => x + y, [1, 2, 3, 4]);
        expect(result).to.equal(11); // 1 + 1 + 2 + 3 + 4
    });

    it("should multiply numbers correctly", (): void => {
        const result = fold1((x: number, y: number): number => x * y, [2, 3, 4]);
        expect(result).to.equal(24); // 1 * 2 * 3 * 4
    });
});

describe("foldl1 function", (): void => {
    it("should return 1 for an empty array", (): void => {
        const result = foldl1((x: number, y: number): number => x + y, []);
        expect(result).to.equal(1);
    });

    it("should sum numbers from the left", (): void => {
        const result = foldl1((x: number, y: number): number => x + y, [1, 2, 3, 4]);
        expect(result).to.equal(11); // 1 + 1 + 2 + 3 + 4
    });

    it("should handle subtraction from the left", (): void => {
        const result = foldl1((x: number, y: number): number => x - y, [1, 2, 3, 4]);
        expect(result).to.equal(-9); // (((1 - 2) - 3) - 4)
    });
});

describe("foldr1 function", (): void => {
    it("should return 1 for an empty array", (): void => {
        const result = foldr1((x: number, y: number): number => x + y, []);
        expect(result).to.equal(1);
    });

    it("should sum numbers from the right", (): void => {
        const result = foldr1((x: number, y: number): number => x + y, [1, 2, 3, 4]);
        expect(result).to.equal(11); // 1 + 1 + 2 + 3 + 4
    });

    it("should handle subtraction from the right", (): void => {
        const result = foldr1((x: number, y: number): number => x - y, [1, 2, 3, 4]);
        expect(result).to.equal(-9); // (((1 - 4) - 3) - 2) - 1 = -9
    });
});

describe("fold0 function", (): void => {
    it("should return 0 for an empty array", (): void => {
        const result = fold0((x: number, y: number): number => x + y, []);
        expect(result).to.equal(0);
    });

    it("should sum numbers correctly with initial value 0", (): void => {
        const result = fold0((x: number, y: number): number => x + y, [1, 2, 3, 4]);
        expect(result).to.equal(10); // 0 + 1 + 2 + 3 + 4
    });

    it("should multiply numbers with initial value 0", (): void => {
        const result = fold0((x: number, y: number): number => x * y, [1, 2, 3, 4]);
        expect(result).to.equal(0); // 0 * 1 * 2 * 3 * 4 = 0
    });

    it("should handle subtraction correctly with initial value 0", (): void => {
        const result = fold0((x: number, y: number): number => x - y, [1, 2, 3, 4]);
        expect(result).to.equal(-10); // (((0 - 1) - 2) - 3) - 4
    });
});

describe("foldl0 function", (): void => {
    it("should return 0 for an empty array", (): void => {
        const result = foldl0((x: number, y: number): number => x + y, []);
        expect(result).to.equal(0);
    });

    it("should sum numbers correctly with initial value 0", (): void => {
        const result = foldl0((x: number, y: number): number => x + y, [1, 2, 3, 4]);
        expect(result).to.equal(10); // 0 + 1 + 2 + 3 + 4
    });

    it("should multiply numbers with initial value 0", (): void => {
        const result = foldl0((x: number, y: number): number => x * y, [1, 2, 3, 4]);
        expect(result).to.equal(0); // 0 * 1 * 2 * 3 * 4 = 0
    });

    it("should handle subtraction correctly with initial value 0", (): void => {
        const result = foldl0((x: number, y: number): number => x - y, [1, 2, 3, 4]);
        expect(result).to.equal(-10); // (((0 - 1) - 2) - 3) - 4
    });
});

describe("foldr0 function", (): void => {
    it("should return 0 for an empty array", (): void => {
        const result = foldr0((x: number, y: number): number => x + y, []);
        expect(result).to.equal(0);
    });

    it("should sum numbers correctly from the right with initial value 0", (): void => {
        const result = foldr0((x: number, y: number): number => x + y, [1, 2, 3, 4]);
        expect(result).to.equal(10); // 0 + 4 + 3 + 2 + 1
    });

    it("should multiply numbers with initial value 0", (): void => {
        const result = foldr0((x: number, y: number): number => x * y, [1, 2, 3, 4]);
        expect(result).to.equal(0); // 0 * 4 * 3 * 2 * 1 = 0
    });

    it("should handle subtraction correctly from the right with initial value 0", (): void => {
        const result = foldr0((x: number, y: number): number => x - y, [1, 2, 3, 4]);
        expect(result).to.equal(-10); // (((0 - 4) - 3) - 2) - 1 = -10
    });
});

describe("foldt function", (): void => {
    it("should return true for an empty array", (): void => {
        const result = foldt((x: boolean, y: boolean): boolean => x && y, []);
        expect(result).to.equal(true);
    });

    it("should correctly compute logical AND with an initial value of true", (): void => {
        const result = foldt((x: boolean, y: boolean): boolean => x && y, [true, true, false, true]);
        expect(result).to.equal(false); // true && true && false && true
    });

    it("should correctly compute logical OR with an initial value of true", (): void => {
        const result = foldt((x: boolean, y: boolean): boolean => x || y, [false, false, false]);
        expect(result).to.equal(true); // true || false || false || false
    });

    it("should handle a mix of true and false values correctly", (): void => {
        const result = foldt((x: boolean, y: boolean): boolean => x && y, [true, true, true]);
        expect(result).to.equal(true); // true && true && true
    });
});
describe("foldlt function", (): void => {
    it("should return true for an empty array", (): void => {
        const result = foldlt((x: boolean, y: boolean): boolean => x && y, []);
        expect(result).to.equal(true);
    });

    it("should correctly compute logical AND with an initial value of true", (): void => {
        const result = foldlt((x: boolean, y: boolean): boolean => x && y, [true, true, false, true]);
        expect(result).to.equal(false); // true && true && false && true
    });

    it("should correctly compute logical OR with an initial value of true", (): void => {
        const result = foldlt((x: boolean, y: boolean): boolean => x || y, [false, false, false]);
        expect(result).to.equal(true); // true || false || false || false
    });

    it("should handle a mix of true and false values correctly", (): void => {
        const result = foldlt((x: boolean, y: boolean): boolean => x && y, [true, true, true]);
        expect(result).to.equal(true); // true && true && true
    });
});

describe("foldrt function", (): void => {
    it("should return true for an empty array", (): void => {
        const result = foldrt((x: boolean, y: boolean): boolean => x && y, []);
        expect(result).to.equal(true);
    });

    it("should correctly compute logical AND from the right with an initial value of true", (): void => {
        const result = foldrt((x: boolean, y: boolean): boolean => x && y, [true, false, true]);
        expect(result).to.equal(false); // (true && (false && (true && true)))
    });

    it("should correctly compute logical OR from the right with an initial value of true", (): void => {
        const result = foldrt((x: boolean, y: boolean): boolean => x || y, [false, false, false]);
        expect(result).to.equal(true); // (false || (false || (false || true)))
    });

    it("should handle a mix of true and false values correctly from the right", (): void => {
        const result = foldrt((x: boolean, y: boolean): boolean => x || y, [false, false, true]);
        expect(result).to.equal(true); // (false || (false || (true || true)))
    });
});

describe("foldf function", (): void => {
    it("should return false for an empty array", (): void => {
        const result = foldf((x: boolean, y: boolean): boolean => x && y, []);
        expect(result).to.equal(false);
    });

    it("should correctly compute logical AND with an initial value of false", (): void => {
        const result = foldf((x: boolean, y: boolean): boolean => x && y, [true, true, true]);
        expect(result).to.equal(false); // false && true && true && true
    });

    it("should correctly compute logical OR with an initial value of false", (): void => {
        const result = foldf((x: boolean, y: boolean): boolean => x || y, [false, false, true]);
        expect(result).to.equal(true); // false || false || false || true
    });

    it("should handle a mix of true and false values", (): void => {
        const result = foldf((x: boolean, y: boolean): boolean => x || y, [false, false, false]);
        expect(result).to.equal(false); // false || false || false || false
    });
});

describe("foldlf function", (): void => {
    it("should return false for an empty array", (): void => {
        const result = foldlf((x: boolean, y: boolean): boolean => x && y, []);
        expect(result).to.equal(false);
    });

    it("should correctly compute logical AND with an initial value of false", (): void => {
        const result = foldlf((x: boolean, y: boolean): boolean => x && y, [true, true, true]);
        expect(result).to.equal(false); // false && true && true && true
    });

    it("should correctly compute logical OR with an initial value of false", (): void => {
        const result = foldlf((x: boolean, y: boolean): boolean => x || y, [false, false, true]);
        expect(result).to.equal(true); // false || false || false || true
    });

    it("should handle a mix of true and false values", (): void => {
        const result = foldlf((x: boolean, y: boolean): boolean => x || y, [false, false, false]);
        expect(result).to.equal(false); // false || false || false || false
    });
});

describe("foldrf function", (): void => {
    it("should return false for an empty array", (): void => {
        const result = foldrf((x: boolean, y: boolean): boolean => x && y, []);
        expect(result).to.equal(false);
    });

    it("should correctly compute logical AND from the right with an initial value of false", (): void => {
        const result = foldrf((x: boolean, y: boolean): boolean => x && y, [true, true, true]);
        expect(result).to.equal(false); // (true && (true && (true && false)))
    });

    it("should correctly compute logical OR from the right with an initial value of false", (): void => {
        const result = foldrf((x: boolean, y: boolean): boolean => x || y, [false, false, true]);
        expect(result).to.equal(true); // (false || (false || (true || false)))
    });

    it("should handle a mix of true and false values from the right", (): void => {
        const result = foldrf((x: boolean, y: boolean): boolean => x && y, [true, false, true]);
        expect(result).to.equal(false); // (true && (false && (true && false)))
    });
});

describe("foldstr function", (): void => {
    it("should return an empty string for an empty array", (): void => {
        const result = foldstr((x: string, y: string): string => x + y, []);
        expect(result).to.equal("");
    });

    it("should concatenate strings with an initial empty string", (): void => {
        const result = foldstr((x: string, y: string): string => x + y, ["a", "b", "c", "d"]);
        expect(result).to.equal("abcd"); // "" + "a" + "b" + "c" + "d"
    });

    it("should handle string concatenation with a custom separator", (): void => {
        const result = foldstr((x: string, y: string): string => x + "-" + y, ["a", "b", "c"]);
        expect(result).to.equal("-a-b-c"); // "" + "-" + "a" + "-" + "b" + "-" + "c"
    });
});

describe("foldlstr function", (): void => {
    it("should return an empty string for an empty array", (): void => {
        const result = foldlstr((x: string, y: string): string => x + y, []);
        expect(result).to.equal("");
    });

    it("should concatenate strings with an initial empty string", (): void => {
        const result = foldlstr((x: string, y: string): string => x + y, ["a", "b", "c", "d"]);
        expect(result).to.equal("abcd"); // "" + "a" + "b" + "c" + "d"
    });

    it("should handle string concatenation with a custom separator", (): void => {
        const result = foldlstr((x: string, y: string): string => x + "-" + y, ["a", "b", "c"]);
        expect(result).to.equal("-a-b-c"); // "" + "-" + "a" + "-" + "b" + "-" + "c"
    });
});

describe("foldrstr function", (): void => {
    it("should return an empty string for an empty array", (): void => {
        const result = foldrstr((x: string, y: string): string => x + y, []);
        expect(result).to.equal("");
    });

    it("should concatenate strings from right to left", (): void => {
        const result = foldrstr((x: string, y: string): string => x + y, ["a", "b", "c", "d"]);
        expect(result).to.equal("dcba"); // "" + "d" + "c" + "b" + "a"
    });

    it("should handle a custom string transformation from right to left", (): void => {
        const result = foldrstr((x: string, y: string): string => x + y.toUpperCase(), ["a", "b", "c"]);
        expect(result).to.equal("CBA"); // "" -> "C" -> "CB" -> "CBA"
    });
});
