import React, { useState } from "react";
import { useInterval } from "..hooks/useInterval";

const Game = () => {
  const [size, setSize] = useState(3);
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "S", "A"],
    ["", "", ""]
  ]);
  const [direction, setDirection] = useState("U");
  const [snakeHeadPosition, setSnakeHeadPosition] = useState([
    Math.floor(size / 2),
    Math.floor(size / 2)
  ]);
  const [snakeBody, setSnakeBody] = useState([...snakeHeadPosition]);

  const changeDirection = () => {
    if (event.key === "ArrowUp") {
      setDirection("U");
    } else if (event.key === "ArrowDown") {
      setDirection("D");
    } else if (event.key === "ArrowLeft") {
      setDirection("L");
    } else if (event.key === "ArrowRight") {
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

  useInterval(() => {
    // Your custom logic here
    changeDirection();

    // if snake is on board, continue if not do something to let the user know of loss
    changeSnakeHeadPosition() ? null : console.log("error");
  }, 1000);

  const generateBoard = size => {
    // loopy double loopy
  };
};
