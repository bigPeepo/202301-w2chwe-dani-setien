import findRowLength from "../findRowLength/findRowLength.js";

const findCartesianCoordinates = (position, board) => {
  const rowLength = findRowLength(board);

  const xCoordinate = Math.floor(position / rowLength);
  const yCoordinate = position % rowLength;

  return [xCoordinate, yCoordinate];
};

export default findCartesianCoordinates;
