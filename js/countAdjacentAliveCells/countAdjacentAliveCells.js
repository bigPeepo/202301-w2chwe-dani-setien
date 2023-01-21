import findCartesianCoordinates from "../findCartesianCoordinates/findCartesianCoordinates.js";

const countAdjacentAliveCells = (examinedCellPosition, board) => {
  const examinedCellCoordinates = findCartesianCoordinates(
    examinedCellPosition,
    board
  );
  const examinedCellX = examinedCellCoordinates[0];
  const examinedCellY = examinedCellCoordinates[1];

  let counter = 0;
  board.forEach((cellValue, cellPosition) => {
    const cellCoordinates = findCartesianCoordinates(cellPosition, board);
    const cellXCoordinate = cellCoordinates[0];
    const cellYCoordinate = cellCoordinates[1];
    const neighborDistance = 1;

    if (
      cellXCoordinate >= examinedCellX - neighborDistance &&
      cellXCoordinate <= examinedCellX + neighborDistance &&
      cellYCoordinate >= examinedCellY - neighborDistance &&
      cellYCoordinate <= examinedCellY + neighborDistance &&
      cellValue
    ) {
      if (
        !(
          examinedCellX === cellXCoordinate && examinedCellY === cellYCoordinate
        )
      ) {
        counter++;
      }
    }
  });

  return counter;
};

export default countAdjacentAliveCells;
