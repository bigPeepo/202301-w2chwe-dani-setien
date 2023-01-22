const mutateBoardOnHtml = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      document.querySelectorAll(".main")[0].childNodes[i].childNodes[
        j
      ].innerText = board[i][j];
    }
  }
};

export default mutateBoardOnHtml;
