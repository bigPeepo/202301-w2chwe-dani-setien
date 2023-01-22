export const storePreviousBoard = [];

export const detectStillConfiguration = () => {
  const previousBoard = storePreviousBoard[0];
  const currentBoard = storePreviousBoard[1];

  if (JSON.stringify(previousBoard) === JSON.stringify(currentBoard)) {
    return true;
  }

  storePreviousBoard.splice(-2);

  return false;
};
