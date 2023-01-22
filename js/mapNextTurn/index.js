import countAdjacentAliveCells from "../countAdjacentAliveCells/countAdjacentAliveCells.js";

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

export const mapNextTurn = (board) => {
  board = board.map((cell, position, board) =>
    cellStatusNextTurn(cell, position, board)
  );
  return board;
};
