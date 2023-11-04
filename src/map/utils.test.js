import { capitalizeValues, findDuplicates } from "./utils";

describe("testing mapUtils", () => {
  describe("testing capitalizeValues", () => {
    it("should Capitalize all strings in the array	", () => {
      const arr = ["apple", "banana", "cherry"];
      const updatedFunction = capitalizeValues(arr);
      expect(updatedFunction).toEqual(["Apple", "Banana", "Cherry"]);
    });

    it("should Handle empty input array	", () => {
      const arr = [];
      const updatedFunction = capitalizeValues(arr);
      expect(updatedFunction).toEqual([]);
    });

    it("should Capitalize strings with spaces	", () => {
      const arr = ["hello world", "goodbye space"];
      const updatedFunction = capitalizeValues(arr);
      expect(updatedFunction).toEqual(["Hello world", "Goodbye space"]);
    });

    it("should Original array remains unchanged	", () => {
      const arr = ["abc", "def"];
      const updatedFunction = capitalizeValues(arr);
      expect(updatedFunction).not.toEqual(arr);
    });

    it("should Capitalize strings with special characters	", () => {
      const arr = ["!@#", "$%^"];
      const updatedFunction = capitalizeValues(arr);
      expect(updatedFunction).toEqual(["!@#", "$%^"]);
    });

    it("should Capitalize and check mixed case strings	", () => {
      const arr = ["loRem", "IpSum", "DoLor"];
      const updatedFunction = capitalizeValues(arr);
      expect(updatedFunction).toEqual(["Lorem", "Ipsum", "Dolor"]);
    });
  });

  describe("testing findDuplicates", () => {
    it("should Find duplicates in an array		", () => {
      const arr = [1, 2, 3, 2, 4, 5, 3, 6, 7];
      const updatedFunction = findDuplicates(arr);
      expect(updatedFunction).toEqual([2, 3]);
    });

    it("should Handle array with no duplicates		", () => {
      const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
      const updatedFunction = findDuplicates(arr);
      expect(updatedFunction).toEqual([]);
    });

    it("should Find duplicates with negative numbers		", () => {
      const arr = [1, -2, 3, -2, 4, 5, 3, -6, 7];
      const updatedFunction = findDuplicates(arr);
      expect(updatedFunction).toEqual([-2, 3]);
    });

    it("should Find duplicates with floating-point numbers		", () => {
      const arr = [1.5, 2.3, 1.5, 4.8, 2.3];
      const updatedFunction = findDuplicates(arr);
      expect(updatedFunction).toEqual([1.5, 2.3]);
    });

    it("should Handle empty input array		", () => {
      const arr = [];
      const updatedFunction = findDuplicates(arr);
      expect(updatedFunction).toEqual([]);
    });
  });
});
