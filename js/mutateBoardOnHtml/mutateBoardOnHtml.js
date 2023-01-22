import colorCell from "../colorCell/colorCell.js";

const mutateBoardOnHtml = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const thisCell =
        document.querySelectorAll(".main")[0].childNodes[i].childNodes[j];

      thisCell.innerText = board[i][j];

      colorCell(board[i][j], thisCell);
    }
  }
};

export default mutateBoardOnHtml;
