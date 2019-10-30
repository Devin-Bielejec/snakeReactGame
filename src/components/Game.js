import React, { useState } from "react";
import { useInterval } from "../hooks/useInterval";
import generateBoard from "../utils/generateBoard";

const Game = () => {
  const [size, setSize] = useState(3);
  const [board, setBoard] = useState(generateBoard(size));
  const [direction, setDirection] = useState("U");
  const [snakeHeadPosition, setSnakeHeadPosition] = useState([
    Math.floor(size / 2),
    Math.floor(size / 2)
  ]);
  const [snakeBody, setSnakeBody] = useState([...snakeHeadPosition]);
  const [foodPosition, setFoodPosition] = useState([0, 0]);
  const [gameStarted, setGameStarted] = useState(false);

  const changeDirection = () => {
    if (window.event && window.event.key === "ArrowUp") {
      setDirection("U");
    } else if (window.event && window.event.key === "ArrowDown") {
      setDirection("D");
    } else if (window.event && window.event.key === "ArrowLeft") {
      setDirection("L");
    } else if (window.event && window.event.key === "ArrowRight") {
      setDirection("R");
    } else {
      setDirection("U");
    }
  };

  const changeSnakeHeadPosition = () => {
    const headX = snakeHeadPosition[0];
    const headY = snakeHeadPosition[1];
    if (direction === "U") {
      setSnakeHeadPosition([headX - 1, headY]);
    } else if (direction === "D") {
      setSnakeHeadPosition([headX + 1, headY]);
    } else if (direction === "L") {
      setSnakeHeadPosition([headX, headY - 1]);
    } else if (direction === "R") {
      setSnakeHeadPosition([headX, headY + 1]);
    }

    //Checking to see if the snake has gone off the board
    return !(
      snakeHeadPosition[0] >= size ||
      snakeHeadPosition[0] < 0 ||
      snakeHeadPosition[1] >= size ||
      snakeHeadPosition[1] < 0
    );
  };

  const placeFood = () => {};

  const initializeGame = () => {
    //Set snakehead, and food onto board
    const headX = snakeHeadPosition[0];
    const headY = snakeHeadPosition[1];
    const foodX = foodPosition[0];
    const foodY = foodPosition[1];
    let tempBoard = board;
    console.log(board);
    tempBoard[headX][headY] = "S";
    tempBoard[foodX][foodY] = "A";
    setBoard(tempBoard);
    setGameStarted(true);
  };

  useInterval(
    () => {
      console.log("interval?!");
      // Your custom logic here
      changeDirection();

      // if snake is on board, continue if not do something to let the user know of loss
      if (!changeSnakeHeadPosition()) {
        console.log("error");
      }
      // Check if snakeHeadPosition has food on it
    },
    gameStarted ? 1000 : null
  );

  console.log(board);

  return <button onClick={() => initializeGame()}>Start</button>;
};

export default Game;
