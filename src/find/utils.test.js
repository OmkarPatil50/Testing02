import { findLastNegativeNumber, findLongestWord } from "./utils";
import * as matchers from "jest-extended";
expect.extend(matchers);

describe("testing findUtils", () => {
  describe("testing findLongestWord", () => {
    it("should Find longest word in a sentence	", () => {
      const sentence = "The quick brown fox jumps over the lazy dog.";
      const updatedFunction = findLongestWord(sentence);
      expect(updatedFunction).toEqual("quick");
    });

    it("should Find longest word in a sentence with a single word	", () => {
      const sentence = "Hello";
      const updatedFunction = findLongestWord(sentence);
      expect(updatedFunction).toEqual("Hello");
    });

    it("should Find longest word in an empty string	", () => {
      const sentence = "";
      const updatedFunction = findLongestWord(sentence);
      expect(updatedFunction).toBeUndefined();
    });

    it("should Check if the output is a string	", () => {
      const sentence = "The quick brown fox jumps over the lazy dog.";
      const updatedFunction = findLongestWord(sentence);
      expect(typeof updatedFunction).toBe("string");
    });
  });

  describe("testing findLastNegativeNumber", () => {
    it("should Find last negative number	", () => {
      const arr = [3, -7, -2, 9, -5];
      const updatedFunction = findLastNegativeNumber(arr);
      expect(updatedFunction).toBe(-5);
    });

    it("should Find last negative number in an array with no negative numbers	", () => {
      const arr = [3, 7, 2, 9, 5];
      const updatedFunction = findLastNegativeNumber(arr);
      expect(updatedFunction).toBeUndefined();
    });

    it("should Find last negative number in an array with decimal numbers	", () => {
      const arr = [3.5, -7.2, -2.1, 9.7, 5.3];
      const updatedFunction = findLastNegativeNumber(arr);
      expect(updatedFunction).toBe(-2.1);
    });

    it("should Check if the output is a number	", () => {
      const arr = [3, -7, -2, 9, -5];
      const updatedFunction = findLastNegativeNumber(arr);
      expect(updatedFunction).toBeNumber();
    });

    it("should Check if the function throws an error with invalid input	", () => {
      const arr = "invalid";
      const updatedFunction = () => findLastNegativeNumber(arr);
      expect(updatedFunction).toThrow();
    });
  });
});
