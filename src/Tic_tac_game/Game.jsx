import React, { useState } from "react";
import Template from "./Template";
import "./game.css";

const Game = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isSet, setIsSet] = useState(true);
  const [open, setOpen] = useState(false);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleState = (idx) => {
    if (state[idx] !== null) {
      return;
    }
    const copystate = [...state];
    copystate[idx] = isSet ? "X" : "O";
    setState(copystate);
    setIsSet(!isSet);
    console.log("hii");
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  const handleclick = () => {
    setOpen(!open);
  };
  return (
    <div className="game_container">
      <h2 onClick={handleclick}> click here Play the TIC-Tac-Game</h2>
      {open && (
        <>
          {isWinner ? (
            <>
              {isWinner} won the game{" "}
              <button onClick={handleReset}>Play Again</button>
            </>
          ) : (
            <>
              <h4>Player {isSet ? "X" : "O"} please move</h4>
              <div className="row">
                <Template onClick={() => handleState(0)} value={state[0]} />
                <Template onClick={() => handleState(1)} value={state[1]} />
                <Template onClick={() => handleState(2)} value={state[2]} />
              </div>
              <div className="row">
                <Template onClick={() => handleState(3)} value={state[3]} />
                <Template onClick={() => handleState(4)} value={state[4]} />
                <Template onClick={() => handleState(5)} value={state[5]} />
              </div>
              <div className="row">
                <Template onClick={() => handleState(6)} value={state[6]} />
                <Template onClick={() => handleState(7)} value={state[7]} />
                <Template onClick={() => handleState(8)} value={state[8]} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Game;
