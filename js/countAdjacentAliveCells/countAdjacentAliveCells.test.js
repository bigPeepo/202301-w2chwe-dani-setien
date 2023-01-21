import countAdjacentAliveCells from "./countAdjacentAliveCells";

describe("Given a function countAdjacentAliveCells", () => {
  describe("When counting the 1s adjacent to the central position, nº 12 of the array [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]", () => {
    test("Then it should return 8", () => {
      const cellPosition = 12;
      const board = [
        0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
        0,
      ];

      const expectedAdjacentCount = 8;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });

  describe("When counting the 1s adjacent to the corner position nº0 of the array [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]", () => {
    test("Then it should return 1", () => {
      const cellPosition = 0;
      const board = [
        0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
        0,
      ];

      const expectedAdjacentCount = 1;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });

  describe("When counting the 1s adjacent to the corner position nº4 of the array [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]", () => {
    test("Then it should return 1", () => {
      const cellPosition = 4;
      const board = [
        0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
        0,
      ];

      const expectedAdjacentCount = 1;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });

  describe("When counting the 1s adjacent to the corner position nº 20 of the array [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]", () => {
    test("Then it should return 1", () => {
      const cellPosition = 20;
      const board = [
        0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
        0,
      ];

      const expectedAdjacentCount = 1;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });

  describe("When counting the 1s adjacent to the corner position nº24 of the array [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]", () => {
    test("Then it should return 1", () => {
      const cellPosition = 24;
      const board = [
        0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
        0,
      ];

      const expectedAdjacentCount = 1;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });

  describe("When counting the 1s adjacent to the position 2 of the array [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]", () => {
    test("Then it should return 3", () => {
      const cellPosition = 2;
      const board = [
        0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
        0,
      ];

      const expectedAdjacentCount = 3;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });

  describe("When counting the 1s adjacent to the position 10 of the array [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]", () => {
    test("Then it should return 3", () => {
      const cellPosition = 10;
      const board = [
        0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
        0,
      ];

      const expectedAdjacentCount = 3;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });

  describe("When counting the 1s adjacent to the position 14 of the array [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]", () => {
    test("Then it should return 3", () => {
      const cellPosition = 14;
      const board = [
        0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
        0,
      ];

      const expectedAdjacentCount = 3;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });

  describe("When counting the 1s adjacent to the position 22 of the array [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]", () => {
    test("Then it should return 3", () => {
      const cellPosition = 22;
      const board = [
        0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
        0,
      ];

      const expectedAdjacentCount = 3;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });

  describe("When counting the 1s adjacent to the corner position, nº 0 of the array [0, 1, 1, 1, 1, 1, 1, 1, 1]", () => {
    test("Then it should return 3", () => {
      const cellPosition = 0;
      const board = [0, 1, 1, 1, 1, 1, 1, 1, 1];

      const expectedAdjacentCount = 3;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });

  describe("When counting the 1s adjacent to the corner position, nº 2 of the array [1, 0, 1, 1, 1, 1, 1, 1, 1]", () => {
    test("Then it should return 0", () => {
      const cellPosition = 2;
      const board = [1, 0, 1, 1, 1, 1, 1, 1, 1];

      const expectedAdjacentCount = 2;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });

  describe("When counting the 1s adjacent to the central position, nº4 of the array [1, 1, 1, 1, 1, 1, 1, 1, 1]", () => {
    test("Then it should return 5", () => {
      const cellPosition = 4;
      const board = [1, 1, 1, 1, 1, 1, 1, 1, 1];

      const expectedAdjacentCount = 8;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });

  describe("When counting the 1s adjacent to the corner position, nº 6 of the array [1, 1, 1, 1, 1, 1, 0, 0, 1]", () => {
    test("Then it should return 0", () => {
      const cellPosition = 6;
      const board = [1, 1, 1, 1, 1, 1, 0, 0, 1];

      const expectedAdjacentCount = 2;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });

  describe("When counting the 1s adjacent to the coner position nº 8 of the array [1, 1, 1, 1, 0, 1, 1, 1, 1]", () => {
    test("Then it should return 2", () => {
      const cellPosition = 8;
      const board = [1, 1, 1, 1, 0, 1, 1, 1, 1];

      const expectedAdjacentCount = 2;

      const adjacentCount = countAdjacentAliveCells(cellPosition, board);

      expect(adjacentCount).toBe(expectedAdjacentCount);
    });
  });
});
