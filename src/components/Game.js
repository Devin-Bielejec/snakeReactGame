import React, { useState } from "react";
import { useInterval } from "../hooks/useInterval";
import generateBoard from "../utils/generateBoard";
import updateBoard from "../utils/updateBoard";

const Game = () => {
  const [size, setSize] = useState(10);
  console.log("RERENDER");
  const [board, setBoard] = useState(generateBoard(size));
  const [direction, setDirection] = useState("U");
  const [snakeBody, setSnakeBody] = useState([
    [Math.floor(size / 2), Math.floor(size / 2)]
  ]);
  const [foodPosition, setFoodPosition] = useState([0, 0]);
  const [gameStarted, setGameStarted] = useState(false);

  const changeDirection = () => {
    let direction;
    if (window.event && window.event.key === "ArrowUp") {
      direction = "U";
    } else if (window.event && window.event.key === "ArrowDown") {
      direction = "D";
    } else if (window.event && window.event.key === "ArrowLeft") {
      direction = "L";
    } else if (window.event && window.event.key === "ArrowRight") {
      direction = "R";
    } else {
      direction = "U";
    }
    return direction;
  };

  const moveSnake = () => {
    const headX = snakeBody[0][0];
    const headY = snakeBody[0][1];
    let snakeHead;
    if (direction === "U") {
      snakeHead = [headX - 1, headY];
    } else if (direction === "D") {
      snakeHead = [headX + 1, headY];
    } else if (direction === "L") {
      snakeHead = [headX, headY - 1];
    } else if (direction === "R") {
      snakeHead = [headX, headY + 1];
    }

    //Adding on new snake head onto snake body
    let tempSnakeBody = [...snakeBody];
    tempSnakeBody.unshift(snakeHead);

    return tempSnakeBody;
  };

  //update and set state at the end of the use effect
  useInterval(
    () => {
      console.log("hello");
      setSize(14);
      setSize(14);
    },
    gameStarted ? 3000 : null
  );

  console.log("Board", board);
  const changedDirection = changeDirection();

  // if snake is on board, continue if not do something to let the user know of loss
  const movedSnake = moveSnake();

  // Check if snake is outside the boundary of the board
  if (
    !(
      movedSnake[0][0] >= size ||
      movedSnake[0][0] < 0 ||
      movedSnake[0][1] >= size ||
      movedSnake[0][1] < 0
    )
  ) {
    console.log("SNAKE OFF BOARD, ERROR");
  }

  // Check if snakeBody's head has food on it
  let foodConsumed = false;
  if (
    movedSnake[0][0] === foodPosition[0] &&
    movedSnake[0][1] === foodPosition[1]
  ) {
    foodConsumed = true;
  }

  //Updating Board based on newSnakeBody, newFoodPosition, Consuming Food
  console.log("pre new board", board);
  const { newBoard, newSnakeBody, newFoodPosition } = updateBoard(
    board,
    movedSnake,
    foodConsumed
  );
  console.log(newBoard);
  //Setting new states
  setBoard(newBoard);
  setSnakeBody(newSnakeBody);
  setDirection(changedDirection);
  newFoodPosition
    ? setFoodPosition(newFoodPosition)
    : console.log("Snake did not eat food this time!");

  return <button onClick={() => setGameStarted(true)}>Start</button>;
};

export default Game;
