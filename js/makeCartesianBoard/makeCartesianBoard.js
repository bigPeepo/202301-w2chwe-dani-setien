import findRowLength from "../findRowLength/findRowLength.js";

const makeCartesianBoard = (board) => {
  const newBoard = [];
  const rowLength = findRowLength(board);

  for (let i = 0; i < board.length; i += rowLength) {
    newBoard.push(board.slice(i, i + rowLength));
  }

  return newBoard;
};

export default makeCartesianBoard;
