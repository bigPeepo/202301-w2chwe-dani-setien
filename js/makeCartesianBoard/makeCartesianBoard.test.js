import makeCartesianBoard from "./makeCartesianBoard";

describe("Given a function makeCartesianBoard", () => {
  describe("When it receives the array [0,0,0,0,0,0,0,0,0]", () => {
    test(`Then it should return 
    [0,0,0,
     0,0,0
     0,0,0]`, () => {
      const givenArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      const expectedBoard = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      const resultingBoard = makeCartesianBoard(givenArray);

      expect(resultingBoard).toEqual(expectedBoard);
    });
  });

  describe("When it receives the array [0,0,0,0,0,0,0,0,0] and is asked about the resulting cartesian board length property", () => {
    test(`Then it should return 3`, () => {
      const givenArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      const expectedBoardLength = 3;

      const resultingBoardLength = makeCartesianBoard(givenArray).length;

      expect(resultingBoardLength).toBe(expectedBoardLength);
    });
  });

  describe("When it receives the array [0,0,0,0,0,0,0,0,0] is asked if every resulting subarray has the same length", () => {
    test(`Then it should return true`, () => {
      const givenArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      const expectedLengthUniformity = true;
      const expectedBoardLength = 3;

      const resultingBoardUniformity = makeCartesianBoard(givenArray).every(
        (subarray) => subarray.length === expectedBoardLength
      );

      expect(resultingBoardUniformity).toBe(expectedLengthUniformity);
    });
  });
});
