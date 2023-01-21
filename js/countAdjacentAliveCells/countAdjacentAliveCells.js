import makeCartesianBoard from "../makeCartesianBoard/makeCartesianBoard.js";
import findCartesianCoordinates from "../findCartesianCoordinates/findCartesianCoordinates.js";

const countAdjacentAliveCells = (cellPosition, board) => {
  const cartesianBoard = makeCartesianBoard(board);
  const cartesianCoordinates = findCartesianCoordinates(cellPosition, board);
  const x = cartesianCoordinates[0];
  const y = cartesianCoordinates[1];

  const arrayToSum = [];

  arrayToSum.push(cartesianBoard[y].slice(x - 1, x));
  arrayToSum.push(cartesianBoard[y].slice(x + 1));
  arrayToSum.push(cartesianBoard[y - 1].slice(x - 1, x + 2));
  arrayToSum.push(cartesianBoard[y + 1].slice(x - 1, x + 2));

  return arrayToSum.flat().reduce((accumulator, cell) => accumulator + cell, 0);
};

export default countAdjacentAliveCells;
