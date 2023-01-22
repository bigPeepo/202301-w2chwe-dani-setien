import makeCartesianBoard from "./makeCartesianBoard/makeCartesianBoard.js";
import { mapNextTurn } from "./mapNextTurn/index.js";
import insertBoardOnHtml from "./insertBoardOnHtml/insertBoardOnHtml.js";
import mutateBoardOnHtml from "./mutateBoardOnHtml/mutateBoardOnHtml.js";
import { randomSeedRowLength } from "./randomSeed/index.js";

export const colorBackground = "#f5f2f0";
export const colorAliveCell = "#696f6a";
export const main = document.getElementsByClassName("main");

let seedBoard = randomSeedRowLength(9);

insertBoardOnHtml(makeCartesianBoard(seedBoard), main);

const makeTheBoardEvolve = setInterval(() => {
  seedBoard = mapNextTurn(seedBoard);

  mutateBoardOnHtml(makeCartesianBoard(seedBoard));
}, 250);

export const stopCalculating = () => {
  clearInterval(makeTheBoardEvolve);
};
