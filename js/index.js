import makeCartesianBoard from "./makeCartesianBoard/makeCartesianBoard.js";
import { mapNextTurn } from "./mapNextTurn/index.js";
import insertBoardOnHtml from "./insertBoardOnHtml/insertBoardOnHtml.js";
import mutateBoardOnHtml from "./mutateBoardOnHtml/mutateBoardOnHtml.js";

let seedBoard = [
  0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0,
  0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1,
  0, 0, 0,
];
const main = document.getElementsByClassName("main");

insertBoardOnHtml(makeCartesianBoard(seedBoard), main);

// eslint-disable-next-line no-unused-vars
const makeTheBoardEvolve = setInterval(() => {
  seedBoard = mapNextTurn(seedBoard);

  mutateBoardOnHtml(makeCartesianBoard(seedBoard));
}, 200);
