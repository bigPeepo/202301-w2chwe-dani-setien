import insertBoardOnHtml from "./insertBoardOnHtml/insertBoardOnHtml.js";
import makeCartesianBoard from "./makeCartesianBoard/makeCartesianBoard.js";
import { mapNextTurn } from "./mapNextTurn/index.js";

let board = [
  0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0,
  0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1,
  0, 0, 0,
];
const main = document.getElementsByClassName("main");

insertBoardOnHtml(makeCartesianBoard(board), main);

const mutateBoardOnHtml = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      document.querySelectorAll(".main")[0].childNodes[i].childNodes[
        j
      ].innerText = board[i][j];
    }
  }
};

// eslint-disable-next-line no-unused-vars
const makeTheBoardEvolve = setInterval(() => {
  board = mapNextTurn(board);

  mutateBoardOnHtml(makeCartesianBoard(board));
}, 200);
