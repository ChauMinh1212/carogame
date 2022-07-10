import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Board from "./Board";
import WinGame from "./checkwin";
import "./style.scss";

GamePage.propTypes = {};

function GamePage(props) {
  const [squares, setQuares] = useState(Array(400).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const isWin = WinGame(squares);
  const { player1, player2 } = props.player;
  const startingMinutes = 20;
  let time = startingMinutes * 60;
  const [minutes, setMinutes] = useState(startingMinutes);
  const [seconds, setSeconds] = useState(0);
  const [draw, setDraw] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start === false) return;
    const timing = setInterval(() => {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
      setMinutes(minutes);
      setSeconds(seconds);
      time--;
      if (isWin || time === 0) {
        clearInterval(timing);
      }
      if (time === 0) {
        setDraw(true);
      }
      if (isReset === true) {
        clearInterval(timing);
      }
    }, 1000);
    return () => clearInterval(timing);
  }, [isWin, isReset, start]);

  if (time === 0) {
    setDraw(true);
  }

  const handleClick = (index) => {
    const squaresCopy = [...squares];
    if (squaresCopy[index] || isWin) return;

    squaresCopy[index] = currentPlayer ? "x" : "o";
    setQuares(squaresCopy);
    setCurrentPlayer((x) => !x);
    setIsReset(false);
    setStart(true);
  };

  const resetHandleClick = () => {
    setQuares(Array(400).fill(null));
    setDraw(false);
    setIsReset(true);
  };
  return (
    <div className="game">
      <Board className="game-board" cells={squares} onClick={handleClick} />
      <div className="game-info">
        <p>
          <span style={{ color: "#ff003b" }}>X</span> is {player1}
        </p>
        <p className="mb30">
          <span style={{ color: "#00ffe7" }}>O</span> is {player2}
        </p>
        <p>Curren Player:</p>
        {currentPlayer ? (
          <p className="mb20">
            <span style={{ color: "#ff003b" }}>X</span> {player1}
          </p>
        ) : (
          <p className="mb20">
            <span style={{ color: "#00ffe7" }}>O</span> {player2}
          </p>
        )}
        {isWin && (
          <p className="mb20">
            {!currentPlayer ? `${player1}` : `${player2}`} win
          </p>
        )}
        {draw && <p>Draw</p>}
        <button
          className="mb20"
          onClick={() => {
            resetHandleClick();
          }}
        >
          Reset
        </button>
        <p>Timing: {`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`}</p>
      </div>
    </div>
  );
}

export default GamePage;
