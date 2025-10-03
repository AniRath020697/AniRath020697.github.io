// src/components/Game.jsx
import { useState } from "react";
import Board from "./Board.jsx";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares]);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const moves = history.map((squares, move) => {
    const desc = move === 0 ? "Go to game start" : `Go to move #${move}`;
    const isCurrent = move === currentMove;
    return (
      <li key={move}>
        <button className={`move-btn ${isCurrent ? "current" : ""}`} onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  function reset() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <div className="game-layout">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <div className="controls">
          <button className="reset-btn" onClick={reset}>Reset</button>
        </div>
      </div>
      <div className="game-info">
        <h2>Time Travel</h2>
        <ol className="moves-list">{moves}</ol>
      </div>
    </div>
  );
}
