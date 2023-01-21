import countAdjacentAliveCells from "./countAdjacentAliveCells";

describe("Given a function countAdjacentAliveCells", () => {
  describe("When counting the 1s adjacent to the central position, nº 12 of the array [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]", () => {
    test("Then it should return 2", () => {
      const cellPosition = 12;
      const board = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0,
      ];

      const expectedAdjacentCount = 2;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });

  describe("When counting the 1s adjacent to the first position of the array [0, 0, 1, 0, 0, 1, 1, 1, 1,]", () => {
    test("Then it should return 0", () => {
      const cellPosition = 0;
      const board = [0, 0, 1, 0, 0, 1, 1, 1, 1];

      const expectedAdjacentCount = 0;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });

  describe("When counting the 1s adjacent to the last position of the array [0, 0, 1,0, 0, 1,1, 1, 1,]", () => {
    test("Then it should return 2", () => {
      const cellPosition = 8;
      const board = [0, 0, 1, 0, 0, 1, 1, 1, 1];

      const expectedAdjacentCount = 2;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });

  describe("When counting the 1s adjacent to the central position of the array [0, 0, 1, 0, 0, 1, 1, 1, 1,]", () => {
    test("Then it should return 5", () => {
      const cellPosition = 4;
      const board = [0, 0, 1, 0, 0, 1, 1, 1, 1];

      const expectedAdjacentCount = 5;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });
});
