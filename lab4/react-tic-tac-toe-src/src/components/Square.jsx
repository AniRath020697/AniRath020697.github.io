// src/components/Square.jsx
export default function Square({ value, onClick, highlight }) {
  return (
    <button
      className={`square ${highlight ? "winner-cell" : ""}`}
      onClick={onClick}
      aria-label={`square ${value || "empty"}`}
    >
      {value}
    </button>
  );
}
