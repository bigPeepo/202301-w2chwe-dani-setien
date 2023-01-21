import findCartesianCoordinates from "./findCartesianCoordinates.js";

describe("Given a findCartesianCoordinates function", () => {
  describe(`When it receives the position 4 and an unarranged board in list form 
  [0,1,2,
   3,4,5,
   6,7,8]`, () => {
    test("Then it should return its [x,y] coordinates as [1,1]", () => {
      const givenUnarrangedBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      const givenPosition = 4;
      const expectedCoordinates = [1, 1];

      const result = findCartesianCoordinates(
        givenPosition,
        givenUnarrangedBoard
      );

      expect(result).toEqual(expectedCoordinates);
    });
  });

  describe(`When it receives the position 0 and an unarranged board in list form 
  [00,01,02,03,04,
   05,06,07,08,09,
   10,11,12,13,14,
   15,16,17,18,18,
   20,21,22,23,24]`, () => {
    test("Then it should return its [x,y] coordinates as [0,0]", () => {
      const givenUnarrangedBoard = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 18,
        20, 21, 22, 23, 23,
      ];
      const givenPosition = 0;
      const expectedCoordinates = [0, 0];

      const result = findCartesianCoordinates(
        givenPosition,
        givenUnarrangedBoard
      );

      expect(result).toEqual(expectedCoordinates);
    });
  });

  describe(`When it receives the position 24 and an unarranged board in list form 
  [00,01,02,03,04,
   05,06,07,08,09,
   10,11,12,13,14,
   15,16,17,18,18,
   20,21,22,23,24]`, () => {
    test("Then it should return its [x,y] coordinates as [4,4]", () => {
      const givenUnarrangedBoard = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 18,
        20, 21, 22, 23, 23,
      ];
      const givenPosition = 24;
      const expectedCoordinates = [4, 4];

      const result = findCartesianCoordinates(
        givenPosition,
        givenUnarrangedBoard
      );

      expect(result).toEqual(expectedCoordinates);
    });
  });
});
