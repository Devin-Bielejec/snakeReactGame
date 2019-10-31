const generateBoard = size => {
  const board = [];
  for (let row = 0; row < size; row++) {
    let curRow = [];
    for (let col = 0; col < size; col++) {
      curRow.push("");
    }
    board.push(curRow);
  }
  const headX = Math.floor(size / 2);
  const headY = Math.floor(size / 2);
  const foodX = 0;
  const foodY = 0;

  board[headX][headY] = "S";
  board[foodX][foodY] = "A";
  return board;
};

export default generateBoard;
