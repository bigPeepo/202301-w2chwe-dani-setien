import findRowLength from "./rowLength/rowLength.js";

const board = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

console.table(findRowLength(board));
