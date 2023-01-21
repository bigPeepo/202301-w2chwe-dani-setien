import countAdjacentAliveCells from "../countAdjacentAliveCells/countAdjacentAliveCells.js";
import makeCartesianBoard from "../makeCartesianBoard/makeCartesianBoard.js";

export const cellStatusNextTurn = (cellStatus, position, board) => {
  const adjacentAliveCellsCount = countAdjacentAliveCells(position, board);

  if (cellStatus) {
    if (adjacentAliveCellsCount < 2 || adjacentAliveCellsCount > 3) {
      cellStatus = 0;
      return cellStatus;
    }
  }

  if (!cellStatus) {
    if (adjacentAliveCellsCount === 3) {
      cellStatus = 1;
      return cellStatus;
    }
  }

  return cellStatus;
};

export const mapNextTurn = (board) =>
  board.map((cell, position, board) =>
    cellStatusNextTurn(cell, position, board)
  );

const board = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0,
  1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
];
console.table(makeCartesianBoard(board));
const newBoard = mapNextTurn(board);
console.table(makeCartesianBoard(newBoard));

const nextBoard = mapNextTurn(newBoard);
console.table(makeCartesianBoard(nextBoard));
