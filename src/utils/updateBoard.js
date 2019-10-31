//Make function that takes in (foodConsumed, snakeBody, board)
//new board, new snake body, new apple position

const updateBoard = (board, snakeBody, foodConsumed) => {
  console.log("update board function", board);
  if (!foodConsumed && snakeBody.length > 1) {
    const tail = snakeBody.pop();
  }

  console.log(board, snakeBody);
  for (let i = 0; i < snakeBody.length; i++) {
    let partX = snakeBody[i][0];
    let partY = snakeBody[i][1];

    const token = i === 0 ? "S" : "s";
    board[partX][partY] = token;
  }

  let foodPosition;
  if (foodConsumed) {
    //set new food location but can't be where snake is
    foodPosition = [0, 0];
    while (snakeBody.includes(foodPosition)) {
      let randomX = Math.floor(Math.random() * board.length);
      let randomY = Math.floor(Math.random() * board.length);
      foodPosition = [randomX, randomY];
    }
  } else {
    foodPosition = null;
  }

  return {
    newFoodPosition: foodPosition,
    newBoard: board,
    newSnakeBody: snakeBody
  };
};

export default updateBoard;
