const generateBoard = size => {
  const board = [];
  for (let row = 0; row < size; row++) {
    let curRow = [];
    for (let col = 0; col < size; col++) {
      curRow.push("");
    }
    board.push(curRow);
  }
  return board;
};

export default generateBoard;
