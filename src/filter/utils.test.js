import { filterByProperty, filterUniqueStrings } from "./utils";

describe("testing filterUtils", () => {
  describe("testing filterUniqueStrings", () => {
    it("should Filters out duplicate strings	", () => {
      const strings = ["apple", "banana", "cherry", "apple", "date", "banana"];
      const updatedFunction = filterUniqueStrings(strings);
      expect(updatedFunction).toEqual(["apple", "banana", "cherry", "date"]);
    });

    it("should Handles empty input array	", () => {
      const strings = [];
      const updatedFunction = filterUniqueStrings(strings);
      expect(updatedFunction).toEqual([]);
    });

    it("should Handles input with all unique strings	", () => {
      const strings = ["one", "two", "three"];
      const updatedFunction = filterUniqueStrings(strings);
      expect(updatedFunction).toEqual(["one", "two", "three"]);
    });

    it("should Handles input with one repeated string	", () => {
      const strings = ["apple", "apple", "apple"];
      const updatedFunction = filterUniqueStrings(strings);
      expect(updatedFunction).toEqual(["apple"]);
    });

    it("should Checks if the output array contains only unique strings	", () => {
      const strings = ["apple", "banana", "cherry", "apple", "date", "banana"];
      const updatedFunction = filterUniqueStrings(strings);
      const isAllUnique = updatedFunction.every(
        (str, index, arr) => arr.indexOf(str) === index
      );
      expect(isAllUnique).toBeTruthy();
    });

    it("should Checks if the output array length is correct	", () => {
      const strings = ["apple", "banana", "cherry", "apple", "date", "banana"];
      const updatedFunction = filterUniqueStrings(strings);
      expect(updatedFunction).toHaveLength(4);
    });

    it("should Checks if the function throws an error with invalid input	", () => {
      const strings = "invalid";
      const updatedFunction = () => filterUniqueStrings(strings);
      expect(updatedFunction).toThrow();
    });
  });

  describe("testing filterByProperty", () => {
    it("should Filters objects with specified property	", () => {
      const objects = [
        { name: "apple", color: "red" },
        { color: "yellow" },
        { name: "cherry", color: "red" }
      ];
      const property = "name";

      const updatedFunction = filterByProperty(objects, property);

      expect(updatedFunction).toEqual([
        { name: "apple", color: "red" },
        { name: "cherry", color: "red" }
      ]);
    });

    it("should Handles empty input array	", () => {
      const objects = [];
      const property = "name";

      const updatedFunction = filterByProperty(objects, property);

      expect(updatedFunction).toEqual([]);
    });

    it("should Handles objects with property having falsy values	", () => {
      const objects = [
        { name: "apple", color: "red" },
        { size: 0 },
        { name: "cherry", color: "red" }
      ];
      const property = "size";

      const updatedFunction = filterByProperty(objects, property);

      expect(updatedFunction).toEqual([{ size: 0 }]);
    });

    it("should Checks if the output array contains only objects with the specified property	", () => {
      const objects = [
        { name: "apple", color: "red" },
        { color: "yellow" },
        { name: "cherry", color: "red" }
      ];
      const property = "name";

      const updatedFunction = filterByProperty(objects, property);

      expect(
        updatedFunction.every((obj) => obj.hasOwnProperty("name"))
      ).toBeTruthy();
    });

    it("should Checks if the function throws an error with invalid input	", () => {
      const objects = "invalid";
      const property = "name";

      const updatedFunction = () => filterByProperty(objects, property);

      expect(updatedFunction).toThrowError();
    });
  });
});
