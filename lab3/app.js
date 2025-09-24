let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;
let winner = null;

function initializeGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  winner = null;
  renderBoard();
}

function renderBoard() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, i) => {
    cell.textContent = board[i];
  });

  const status = document.getElementById("status");
  if (gameOver) {
    status.textContent = winner === "tie" ? "It's a tie!" : `Winner: ${winner}`;
  } else {
    status.textContent = `Turn: ${currentPlayer}`;
  }
}

function checkWinner() {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (const [a,b,c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = board[a];
      gameOver = true;
      return;
    }
  }
  if (!board.includes("")) {
    winner = "tie";
    gameOver = true;
  }
}

function cellClicked(index) {
  if (gameOver || board[index]) return;
  board[index] = currentPlayer;
  checkWinner();
  if (!gameOver) currentPlayer = currentPlayer === "X" ? "O" : "X";
  renderBoard();
}

// Start the game on load
initializeGame();
