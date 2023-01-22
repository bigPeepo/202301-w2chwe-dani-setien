import { colorAliveCell, colorBackground } from "../index.js";

const colorCell = (isAlive, cell) => {
  if (isAlive) {
    cell.style.backgroundColor = colorAliveCell;
    cell.style.color = colorAliveCell;
    return;
  }

  cell.style.backgroundColor = colorBackground;
  cell.style.color = colorBackground;
};

export default colorCell;
