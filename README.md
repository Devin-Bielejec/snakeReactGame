### Components

import React, { useState, useEffect, useRef } from 'react';

function useInterval(callback, delay) {
const savedCallback = useRef();

// Remember the latest callback.
useEffect(() => {
savedCallback.current = callback;
}, [callback]);

// Set up the interval.
useEffect(() => {
function tick() {
savedCallback.current();
}
if (delay !== null) {
let id = setInterval(tick, delay);
return () => clearInterval(id);
}
}, [delay]);
}

import React, { useState, useEffect, useRef } from 'react';

0. Game
   [size, setSize] = useState(3)
   [board, setBoard] = useState([["","",""], ["","S","A"], ["","",""]])
   [direction, setDirection] = useState("U")
   [snakeHeadPosition, setSnakeHeadPosition] = useState()

   useInterval(() => {
   // Your custom logic here
   if event.key === "ArrowUp"
   setDirection("U")
   else if event.key === "ArrowDown"
   setDirection("D")
   else if event.key === "ArrowLeft"
   setDirection("L")
   else if event.key === "ArrowRight"
   setDirection("R")
   else
   setDirection("U")


    }, 1000);


    generateBoard(size) {
        loopy double loopy
    }

    1. Board (board) (CSS grid rows)
        <div>
            map over rows from board - Square/Snake/Food conditional on board
        </div>

        2. Square
            3. Snake

            3. Food

["", "", ""]["", "s", ""]
["", "s", ""]

loop through array of body [[1, 1], [2, 1]]
