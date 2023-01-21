import findRowLength from "./findRowLength.js";

describe("Given a function findRowLength", () => {
  describe("When it receives the array [0,0,0,0,0,0,0,0,0]", () => {
    test("Then it should return 3", () => {
      const givenArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      const expectedResult = 3;

      const result = findRowLength(givenArray);

      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives the array [0,0,0,0,0,0,0]", () => {
    test("Then it should throw an error 'This number is not a perfect square'", () => {
      const array = [0, 0, 0, 0, 0, 0, 0];
      const expectedThrownError =
        "The board doesn't have a perfect square number of squares";

      expect(() => {
        findRowLength(array);
      }).toThrow(expectedThrownError);
    });
  });

  describe("When it receives the array [0,0,0,0]", () => {
    test("Then it should throw an error 'This board it too small to play'", () => {
      const array = [0, 0, 0, 0];
      const expectedThrownError = "This board is too small";

      expect(() => {
        findRowLength(array);
      }).toThrow(expectedThrownError);
    });
  });
});
