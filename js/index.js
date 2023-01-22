import makeCartesianBoard from "./makeCartesianBoard/makeCartesianBoard.js";
import { mapNextTurn } from "./mapNextTurn/index.js";
import insertBoardOnHtml from "./insertBoardOnHtml/insertBoardOnHtml.js";
import mutateBoardOnHtml from "./mutateBoardOnHtml/mutateBoardOnHtml.js";
import { randomSeedRowLength } from "./randomSeed/index.js";
import { storePreviousBoard } from "./detectStillConfiguration/index.js";

export const colorBackground = "#f5f2f0";
export const colorAliveCell = "#696f6a";
export const main = document.getElementsByClassName("main");

let seedBoard = randomSeedRowLength(9);

insertBoardOnHtml(makeCartesianBoard(seedBoard), main);

let makeTheBoardEvolve = false;

function activateBoardEvolution(seed) {
  seedBoard = seed;
  makeTheBoardEvolve = setInterval(() => {
    seedBoard = mapNextTurn(seedBoard);

    mutateBoardOnHtml(makeCartesianBoard(seedBoard));
  }, 171);
}

export const stopCalculating = () => {
  clearInterval(makeTheBoardEvolve);

  storePreviousBoard.splice(-3);

  activateBoardEvolution(randomSeedRowLength(9));
};

activateBoardEvolution(seedBoard);
