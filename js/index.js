import findRowLength from "./findRowLength/findRowLength.js";
import makeCartesianBoard from "./makeCartesianBoard/makeCartesianBoard.js";
import findCartesianCoordinates from "./findCartesianCoordinates/findCartesianCoordinates.js";

const board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

console.table(findRowLength(board));
console.table(makeCartesianBoard(board));
console.table(findCartesianCoordinates(6, board));
