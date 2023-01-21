import { mapNextTurn } from "./mapNextTurn.js";
describe("Given a mapNextTurn function", () => {
  describe("When applying the algorith to the starting position [0, 1, 0, 0, 1, 0, 0, 1, 0]", () => {
    test("Then it should return the resulting position [0, 0, 0, 1, 1, 1, 0, 0, 0]", () => {
      const startingPosition = [0, 1, 0, 0, 1, 0, 0, 1, 0];

      const expectedResultingPosition = [0, 0, 0, 1, 1, 1, 0, 0, 0];

      const resultingPosition = mapNextTurn(startingPosition);

      expect(resultingPosition).toEqual(expectedResultingPosition);
    });
  });

  describe("When applying the algorith to the starting position [1, 1, 0, 1, 1, 0, 0, 0, 0]", () => {
    test("Then it should return the resulting position [1, 1, 0, 1, 1, 0, 0, 0, 0]", () => {
      const startingPosition = [1, 1, 0, 1, 1, 0, 0, 0, 0];

      const expectedResultingPosition = [1, 1, 0, 1, 1, 0, 0, 0, 0];

      const resultingPosition = mapNextTurn(startingPosition);

      expect(resultingPosition).toEqual(expectedResultingPosition);
    });
  });

  describe("When applying the algorith to the starting position [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]", () => {
    test("Then it should return the resulting position [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]", () => {
      const startingPosition = [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];

      const expectedResultingPosition = [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];

      const resultingPosition = mapNextTurn(startingPosition);

      expect(resultingPosition).toEqual(expectedResultingPosition);
    });
  });

  describe("When applying the algorith to the starting position [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]", () => {
    test("Then it should return the resulting position [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0,0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,];", () => {
      const startingPosition = [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0,
        0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
      ];

      const expectedResultingPosition = [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0,
        0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
      ];

      const resultingPosition = mapNextTurn(startingPosition);

      expect(resultingPosition).toEqual(expectedResultingPosition);
    });
  });

  describe("When applying the algorith to the starting position [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,]", () => {
    test("Then it should return the resulting position [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,]", () => {
      const startingPosition = [
        0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
        0,
      ];

      const expectedResultingPosition = [
        0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
        0,
      ];

      const resultingPosition = mapNextTurn(startingPosition);

      expect(resultingPosition).toEqual(expectedResultingPosition);
    });
  });

  describe("When applying the algorith to the starting position [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,]", () => {
    test("Then it should return the resulting position [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,]", () => {
      const startingPosition = [
        0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
        0,
      ];

      const expectedResultingPosition = [
        0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
        0,
      ];

      const resultingPosition = mapNextTurn(startingPosition);

      expect(resultingPosition).toEqual(expectedResultingPosition);
    });
  });

  describe("When applying the algorith to the starting position [0, 0, 0, 1, 1, 1, 0, 0, 0]", () => {
    test("Then it should return the resulting position [0, 1, 0, 0, 1, 0, 0, 1, 0]", () => {
      const startingPosition = [0, 0, 0, 1, 1, 1, 0, 0, 0];

      const expectedResultingPosition = [0, 1, 0, 0, 1, 0, 0, 1, 0];

      const resultingPosition = mapNextTurn(startingPosition);

      expect(resultingPosition).toEqual(expectedResultingPosition);
    });
  });

  describe("When applying the algorith to the starting position [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,]", () => {
    test("Then it should return the resulting position [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]", () => {
      const startingPosition = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
        0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];

      const expectedResultingPosition = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      const resultingPosition = mapNextTurn(startingPosition);

      expect(resultingPosition).toEqual(expectedResultingPosition);
    });
  });

  describe("When applying the algorith to the starting position [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]", () => {
    test("Then it should return the resulting position [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,]", () => {
      const startingPosition = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];

      const expectedResultingPosition = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
        0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ];
      const resultingPosition = mapNextTurn(startingPosition);

      expect(resultingPosition).toEqual(expectedResultingPosition);
    });
  });
});
