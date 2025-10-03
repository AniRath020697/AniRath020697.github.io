// src/components/Board.jsx
import Square from "./Square.jsx";

function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // cols
    [0,4,8],[2,4,6],         // diagonals
  ];
  for (const [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a,b,c] };
    }
  }
  return { winner: null, line: [] };
}

export default function Board({ xIsNext, squares, onPlay }) {
  const { winner, line } = calculateWinner(squares);
  const isTie = !winner && squares.every(Boolean);

  function handleClick(i) {
    if (winner || squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  let status = `Turn: ${xIsNext ? "X" : "O"}`;
  if (winner) status = `Winner: ${winner}`;
  else if (isTie) status = "It's a tie!";

  function renderSquare(i) {
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => handleClick(i)}
        highlight={line.includes(i)}
      />
    );
  }

  return (
    <div className="board-wrap">
      <div className="status">{status}</div>
      <div className="board-rows">
        <div className="board-row">{[0,1,2].map(renderSquare)}</div>
        <div className="board-row">{[3,4,5].map(renderSquare)}</div>
        <div className="board-row">{[6,7,8].map(renderSquare)}</div>
      </div>
    </div>
  );
}
