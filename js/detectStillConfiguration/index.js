import {
  flickThisBoard,
  activateScreenFlick,
  objectToFlickScreen,
} from "../flickThisBoard/flickThisBoard.js";

export const storePreviousBoard = [];

export const detectStillConfiguration = () => {
  const twoBoardsAgo = storePreviousBoard[0];

  const currentBoard = storePreviousBoard[2];

  if (JSON.stringify(twoBoardsAgo) === JSON.stringify(currentBoard)) {
    objectToFlickScreen.flicking = true;

    activateScreenFlick(flickThisBoard);

    return true;
  }

  storePreviousBoard.shift(1);
  storePreviousBoard.splice(1, 3);

  return false;
};
