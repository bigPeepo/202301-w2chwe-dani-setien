const insertBoardOnHtml = (board, htmlElement) => {
  board.forEach((element) => {
    const cellLine = document.createElement("ul");

    htmlElement[0].appendChild(cellLine);

    for (let i = 0; i < element.length; i++) {
      const cell = document.createElement("li");

      cellLine.appendChild(cell);

      cell.innerText = element[i];
    }
  });
};

export default insertBoardOnHtml;
