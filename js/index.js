import findRowLength from "./findRowLength/findRowLength.js";

import makeCartesianBoard from "./makeCartesianBoard/makeCartesianBoard.js";

const board = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

console.table(findRowLength(board));
console.table(makeCartesianBoard(board));
