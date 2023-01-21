const findRowLength = (board) => {
  if (Math.sqrt(board.length) % 1) {
    throw new Error(
      "The board doesn't have a perfect square number of squares"
    );
  }

  if (board.length < 9) {
    throw new Error("This board is too small");
  }

  return Math.sqrt(board.length);
};

export default findRowLength;
