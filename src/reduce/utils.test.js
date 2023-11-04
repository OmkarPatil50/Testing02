import { calculateFactorial, sumNestedArrays } from "./utils";
import * as matchers from "jest-extended";
expect.extend(matchers);

describe("testing reduceUtils", () => {
  describe("testing sumNestedArrays", () => {
    it("should Sum numbers in a nested array	", () => {
      const arr = [[1, 2], [3, 4, 5], [6]];
      const updatedFunction = sumNestedArrays(arr);
      expect(updatedFunction).toBe(21);
    });

    it("should Sum numbers in an empty nested array	", () => {
      const arr = [];
      const updatedFunction = sumNestedArrays(arr);
      expect(updatedFunction).toBe(0);
    });

    it("should Ensure original array remains unchanged	", () => {
      const arr = [[1, 2], [3, 4, 5], [6]];
      const updatedFunction = sumNestedArrays(arr);
      expect(updatedFunction).not.toEqual(arr);
    });

    it("should Check if the output is a number	", () => {
      const arr = [[1, 2], [3, 4, 5], [6]];
      const updatedFunction = sumNestedArrays(arr);
      expect(updatedFunction).toBeNumber();
    });
  });

  describe("testing calculateFactorial", () => {
    it("should Calculate factorial of 0	", () => {
      const n = 0;
      const updatedFunction = calculateFactorial(n);
      expect(updatedFunction).toBe(1);
    });

    it("should Calculate factorial of 1	", () => {
      const n = 1;
      const updatedFunction = calculateFactorial(n);
      expect(updatedFunction).toBe(1);
    });

    it("should Calculate factorial of 5	", () => {
      const n = 5;
      const updatedFunction = calculateFactorial(n);
      expect(updatedFunction).toBe(120);
    });

    it("should Calculate factorial of 10	", () => {
      const n = 10;
      const updatedFunction = calculateFactorial(n);
      expect(updatedFunction).toBe(3628800);
    });

    it("should Check if the output is a number", () => {
      const n = 5;
      const updatedFunction = calculateFactorial(n);
      expect(updatedFunction).toBeNumber();
    });

    it("should Handle negative input	", () => {
      const n = -5;
      const updatedFunction = () => calculateFactorial(n);
      expect(updatedFunction).toThrow();
    });
  });
});
