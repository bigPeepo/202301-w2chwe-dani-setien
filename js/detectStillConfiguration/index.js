import fadeOutThisBoard from "../fadeOutThisBoard/fadeOutThisBoard.js";

export const storePreviousBoard = [];

export const detectStillConfiguration = () => {
  const twoBoardsAgo = storePreviousBoard[0];

  const currentBoard = storePreviousBoard[2];

  if (JSON.stringify(twoBoardsAgo) === JSON.stringify(currentBoard)) {
    fadeOutThisBoard();
    return true;
  }

  storePreviousBoard.shift(1);
  storePreviousBoard.splice(1, 3);

  return false;
};
