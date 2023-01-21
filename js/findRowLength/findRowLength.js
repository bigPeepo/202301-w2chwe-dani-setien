const findRowLength = (board) => {
  const flatBoard = board.flat(board.length) || [1, 2, 3];

  if (Math.sqrt(flatBoard.length) % 1) {
    throw new Error(
      "The board doesn't have a perfect square number of squares"
    );
  }

  if (flatBoard.length < 9) {
    throw new Error("This board is too small");
  }

  return Math.sqrt(flatBoard.length);
};

export default findRowLength;
