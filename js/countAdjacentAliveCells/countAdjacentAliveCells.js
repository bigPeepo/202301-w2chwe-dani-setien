import findCartesianCoordinates from "../findCartesianCoordinates/findCartesianCoordinates.js";

const countAdjacentAliveCells = (cellPosition, board) => {
  const examinedCellCartesianCoordinates = findCartesianCoordinates(
    cellPosition,
    board
  );
  const examinedCellX = examinedCellCartesianCoordinates[0];
  const examinedCellY = examinedCellCartesianCoordinates[1];

  let counter = 0;
  board.forEach((cellValue, cellPosition) => {
    const cartesianCoordinates = findCartesianCoordinates(cellPosition, board);
    const potentialNeighborXCoordinate = cartesianCoordinates[0];
    const potentialNeighborYCoordinate = cartesianCoordinates[1];

    if (
      potentialNeighborXCoordinate >= examinedCellX - 1 &&
      potentialNeighborXCoordinate <= examinedCellX + 1 &&
      potentialNeighborYCoordinate >= examinedCellY - 1 &&
      potentialNeighborYCoordinate <= examinedCellY + 1 &&
      cellValue
    ) {
      if (
        !(
          examinedCellX === potentialNeighborXCoordinate &&
          examinedCellY === potentialNeighborYCoordinate
        )
      ) {
        counter++;
      }
    }
  });

  return counter;
};

export default countAdjacentAliveCells;
